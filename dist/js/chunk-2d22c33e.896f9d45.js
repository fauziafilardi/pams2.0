(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22c33e"],{f1da:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("ABSListVuex",{attrs:{prop:t.propList,title:t.data.QueryName},on:{rowClicked:t.$parent.rowClicked,rowDblClicked:t.$parent.doDoubleClick,rowLinkClick:t.$parent.rowLink,pageSize:t.$parent.M_PageSize,pagination:t.$parent.M_Pagination,filter:t.$parent.M_Advance_Filter,headTable:t.$parent.M_Head_Table}}),i("div",{directives:[{name:"show",rawName:"v-show",value:t.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[i("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[i("span",[i("span",{staticStyle:{float:"Left",color:"#81b3e9 !important","letter-spacing":"1px","margin-top":"2px","margin-left":"3px"}},[t._v("\n                        Record Information "),i("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1),i("span",{staticClass:"master-span"},[t._v("\n                        Input By : "+t._s(t.IEBy.Input)+" | Edit By : "+t._s(t.IEBy.Edit)+" "),i("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)])]),i("b-collapse",{attrs:{id:"collapse1",visible:!0}},[i("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[i("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[i("b-form",{attrs:{"data-vv-scope":"FormScope_"+t.PageLevel+"_"+t.TabIndex,"data-vv-value-path":"FormScope_"+t.PageLevel+"_"+t.TabIndex}},[i("b-row",{staticStyle:{"padding-left":"10px"}},[i("b-col",{attrs:{md:"12",id:"col-left"}},[i("b-row",[i("b-col",{attrs:{md:"6"}},[i("ABSinputTextVuex",{ref:"ref_taxtype",attrs:{prop:t.PI_taxtype},model:{value:t.M_CM_TaxSubPortfolio_Detail.taxtype,callback:function(e){t.$set(t.M_CM_TaxSubPortfolio_Detail,"taxtype",e)},expression:"M_CM_TaxSubPortfolio_Detail.taxtype"}})],1)],1),i("b-row",[i("b-col",{attrs:{md:"6"}},[i("ABSinputTextVuex",{ref:"ref_descs",attrs:{prop:t.PI_descs},model:{value:t.M_CM_TaxSubPortfolio_Detail.descs,callback:function(e){t.$set(t.M_CM_TaxSubPortfolio_Detail,"descs",e)},expression:"M_CM_TaxSubPortfolio_Detail.descs"}})],1)],1),i("b-row",[i("b-col",{attrs:{md:"6"}},[i("ABSinputTextVuex",{ref:"ref_taxrate",attrs:{prop:t.PI_taxrate},model:{value:t.M_CM_TaxSubPortfolio_Detail.taxrate,callback:function(e){t.$set(t.M_CM_TaxSubPortfolio_Detail,"taxrate",e)},expression:"M_CM_TaxSubPortfolio_Detail.taxrate"}})],1)],1),i("b-row",[i("b-col",{attrs:{md:"6"}},[i("ABSCompute",{ref:"ref_taxclass",attrs:{prop:t.PI_taxclass},model:{value:t.M_CM_TaxSubPortfolio_Detail.taxclass,callback:function(e){t.$set(t.M_CM_TaxSubPortfolio_Detail,"taxclass",e)},expression:"M_CM_TaxSubPortfolio_Detail.taxclass"}})],1)],1),i("b-row",[i("b-col",{attrs:{md:"6"}},[i("ABSCompute",{ref:"ref_vatreversalflag",attrs:{prop:t.PI_vatreversalflag},model:{value:t.M_CM_TaxSubPortfolio_Detail.vatreversalflag,callback:function(e){t.$set(t.M_CM_TaxSubPortfolio_Detail,"vatreversalflag",e)},expression:"M_CM_TaxSubPortfolio_Detail.vatreversalflag"}})],1)],1),i("b-row",[i("b-col",{attrs:{md:"6"}},[i("ABSInputSelectList",{ref:"ref_vatprefixcd",attrs:{prop:t.PI_vatprefixcd,value:t.M_CM_TaxSubPortfolio_Detail.vatprefixcd,label:t.M_CM_TaxSubPortfolio_Detail.vatprefixcdLabel},on:{change:t.OnvatprefixcdChange}})],1),i("b-col",{attrs:{md:"6"}},[i("ABSInputSelectList",{ref:"ref_vataccountcd",attrs:{prop:t.PI_vataccountcd,value:t.M_CM_TaxSubPortfolio_Detail.vataccountcd,label:t.M_CM_TaxSubPortfolio_Detail.vataccountcdLabel},on:{change:t.OnvataccountcdChange}})],1)],1),i("b-row",[i("b-col",{attrs:{md:"6"}},[i("ABSInputSelectList",{ref:"ref_vatreversalprefixcd",attrs:{prop:t.PI_vatreversalprefixcd,value:t.M_CM_TaxSubPortfolio_Detail.vatreversalprefixcd,label:t.M_CM_TaxSubPortfolio_Detail.vatreversalprefixcdLabel},on:{change:t.OnvatreversalprefixcdChange}})],1),i("b-col",{attrs:{md:"6"}},[i("ABSInputSelectList",{ref:"ref_vatreversalaccountcd",attrs:{prop:t.PI_vatreversalaccountcd,value:t.M_CM_TaxSubPortfolio_Detail.vatreversalaccountcd,label:t.M_CM_TaxSubPortfolio_Detail.vatreversalaccountcdLabel},on:{change:t.OnvatreversalaccountcdChange}})],1)],1),i("b-row",[i("b-col",{attrs:{md:"6"}},[i("ABSInputSelectList",{ref:"ref_prepaidwithholdingprefixcd",attrs:{prop:t.PI_prepaidwithholdingprefixcd,value:t.M_CM_TaxSubPortfolio_Detail.prepaidwithholdingprefixcd,label:t.M_CM_TaxSubPortfolio_Detail.prepaidwithholdingprefixcdLabel},on:{change:t.OnprepaidwithholdingprefixcdChange}})],1),i("b-col",{attrs:{md:"6"}},[i("ABSInputSelectList",{ref:"ref_prepaidwithholdingaccountcd",attrs:{prop:t.PI_prepaidwithholdingaccountcd,value:t.M_CM_TaxSubPortfolio_Detail.prepaidwithholdingaccountcd,label:t.M_CM_TaxSubPortfolio_Detail.prepaidwithholdingaccountcdLabel},on:{change:t.OnprepaidwithholdingaccountcdChange}})],1)],1),i("b-row",[i("b-col",{attrs:{md:"6"}},[i("ABSInputSelectList",{ref:"ref_expensewithholdingprefixcd",attrs:{prop:t.PI_expensewithholdingprefixcd,value:t.M_CM_TaxSubPortfolio_Detail.expensewithholdingprefixcd,label:t.M_CM_TaxSubPortfolio_Detail.expensewithholdingprefixcdLabel},on:{change:t.OnexpensewithholdingprefixcdChange}})],1),i("b-col",{attrs:{md:"6"}},[i("ABSInputSelectList",{ref:"ref_expensewithholdingaccountcd",attrs:{prop:t.PI_expensewithholdingaccountcd,value:t.M_CM_TaxSubPortfolio_Detail.expensewithholdingaccountcd,label:t.M_CM_TaxSubPortfolio_Detail.expensewithholdingaccountcdLabel},on:{change:t.OnexpensewithholdingaccountcdChange}})],1)],1),i("b-row",[i("b-col",{attrs:{md:"6"}},[i("ABSInputSelectList",{ref:"ref_accruedwithholdingprefixcd",attrs:{prop:t.PI_accruedwithholdingprefixcd,value:t.M_CM_TaxSubPortfolio_Detail.accruedwithholdingprefixcd,label:t.M_CM_TaxSubPortfolio_Detail.accruedwithholdingprefixcdLabel},on:{change:t.OnaccruedwithholdingprefixcdChange}})],1),i("b-col",{attrs:{md:"6"}},[i("ABSInputSelectList",{ref:"ref_accruedwithholdingaccountcd",attrs:{prop:t.PI_accruedwithholdingaccountcd,value:t.M_CM_TaxSubPortfolio_Detail.accruedwithholdingaccountcd,label:t.M_CM_TaxSubPortfolio_Detail.accruedwithholdingaccountcdLabel},on:{change:t.OnaccruedwithholdingaccountcdChange}})],1)],1),i("b-row",[i("b-col",{attrs:{md:"6"}},[i("ABSInputSelectList",{ref:"ref_accruedwithholdingothersprefixcd",attrs:{prop:t.PI_accruedwithholdingothersprefixcd,value:t.M_CM_TaxSubPortfolio_Detail.accruedwithholdingothersprefixcd,label:t.M_CM_TaxSubPortfolio_Detail.accruedwithholdingothersprefixcdLabel},on:{change:t.OnaccruedwithholdingothersprefixcdChange}})],1),i("b-col",{attrs:{md:"6"}},[i("ABSInputSelectList",{ref:"ref_accruedwithholdingothersaccountcd",attrs:{prop:t.PI_accruedwithholdingothersaccountcd,value:t.M_CM_TaxSubPortfolio_Detail.accruedwithholdingothersaccountcd,label:t.M_CM_TaxSubPortfolio_Detail.accruedwithholdingothersaccountcdLabel},on:{change:t.OnaccruedwithholdingothersaccountcdChange}})],1)],1),i("b-row",[i("b-col",{attrs:{md:"6"}}),i("b-col",{attrs:{md:"6"}},[i("ABSInputSelectList",{ref:"ref_expensewithholdingstraightlineaccountcd",attrs:{prop:t.PI_expensewithholdingstraightlineaccountcd,value:t.M_CM_TaxSubPortfolio_Detail.expensewithholdingstraightlineaccountcd,label:t.M_CM_TaxSubPortfolio_Detail.expensewithholdingstraightlineaccountcdLabel},on:{change:t.OnexpensewithholdingstraightlineaccountcdChange}})],1)],1),i("b-row",[i("b-col",{attrs:{md:"6"}}),i("b-col",{attrs:{md:"6"}},[i("ABSInputSelectList",{ref:"ref_accruedwithholdingstraightlineaccountcd",attrs:{prop:t.PI_accruedwithholdingstraightlineaccountcd,value:t.M_CM_TaxSubPortfolio_Detail.accruedwithholdingstraightlineaccountcd,label:t.M_CM_TaxSubPortfolio_Detail.accruedwithholdingstraightlineaccountcdLabel},on:{change:t.OnaccruedwithholdingstraightlineaccountcdChange}})],1)],1)],1)],1),i("ABSTAnalysis",{attrs:{prop:t.PTAnalysis}})],1)],1)],1)],1)],1)],1)},c=[],o=(i("ac6a"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{ValKey:null,FormType:"List",Module:"CM",propList:{initialWhere:"TaxCd = '"+this.ValKey+"'",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_CM_TaxSubPortfolio_Detail:{subportfoliocd:this.getDataUser().SubPortfolioCd,taxcd:"",taxtype:"",vatreversalflag:"",vataccountcd:"",vatprefixcd:"",vatreversalaccountcd:"",vatreversalprefixcd:"",prepaidwithholdingaccountcd:"",prepaidwithholdingprefixcd:"",expensewithholdingaccountcd:"",expensewithholdingprefixcd:"",accruedwithholdingaccountcd:"",accruedwithholdingprefixcd:"",accruedwithholdingothersaccountcd:"",accruedwithholdingothersprefixcd:"",t0:"",t1:"",t2:"",t3:"",t4:"",t5:"",t6:"",t7:"",t8:"",t9:"",t10:"",t11:"",t12:"",t13:"",t14:"",t15:"",t16:"",t17:"",t18:"",t19:"",t20:"",t21:"",t22:"",t23:"",t24:"",t25:"",t26:"",t27:"",t28:"",t29:"",t30:"",descs:"",taxrate:"0",taxclass:"",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:0,expensewithholdingstraightlineaccountcd:"",accruedwithholdingstraightlineaccountcd:"",rowid:0},PI_taxtype:{cValidate:"required|max:5",cName:"taxtype",cLabel:"Tax Type",cLabelSize:4,cOrder:1,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_descs:{cValidate:"required|max:60",cName:"descs",cLabel:"Description",cLabelSize:4,cOrder:2,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_taxrate:{cValidate:"",cName:"taxrate",cLabel:"Tax Rate",cLabelSize:4,cOrder:3,cKey:!0,cType:"decimal",cLastLabel:"%",cDecimal:2,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_taxclass:{cLabel:"Tax Class",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_vatreversalflag:{cLabel:"VAT Reversal Flag",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_vatprefixcd:{dataLookUp:{LookUpCd:"GetLookupGLAccountPrefix",ColumnDB:"PrefixCd",InitialWhere:"",ParamWhere:""},cValidate:"",cName:"vatprefixcd",cLabel:"VAT Account Prefix",cKey:!1,cLabelSize:4,cOrder:4,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"GL/GL_SubModuleAccountPrefix",cDisplayColumn:"PrefixCd,ChartOfAccountPrefix"},PI_vataccountcd:{dataLookUp:{LookUpCd:"GetLookupGLAccountCodeBySubportfolio",ColumnDB:"AccountCd",InitialWhere:"STATUS = 'A' AND SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"'",ParamWhere:""},cValidate:"",cName:"vataccountcd",cLabel:"VAT Account Code",cKey:!1,cLabelSize:4,cOrder:5,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"GL/GL_ChartOfAccount",cDisplayColumn:"AccountCd,Descs1"},PI_vatreversalprefixcd:{dataLookUp:{LookUpCd:"GetLookupGLAccountPrefix",ColumnDB:"PrefixCd",InitialWhere:"",ParamWhere:""},cValidate:"",cName:"vatreversalprefixcd",cLabel:"VAT Reversal Account Prefix",cKey:!1,cLabelSize:4,cOrder:6,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"GL/GL_SubModuleAccountPrefix",cDisplayColumn:"PrefixCd,ChartOfAccountPrefix"},PI_vatreversalaccountcd:{dataLookUp:{LookUpCd:"GetLookupGLAccountCodeBySubportfolio",ColumnDB:"AccountCd",InitialWhere:"STATUS = 'A' AND SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"'",ParamWhere:""},cValidate:"",cName:"vatreversalaccountcd",cLabel:"VAT Reversal Account Code",cKey:!1,cLabelSize:4,cOrder:7,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"GL/GL_ChartOfAccount",cDisplayColumn:"AccountCd,Descs1"},PI_prepaidwithholdingprefixcd:{dataLookUp:{LookUpCd:"GetLookupGLAccountPrefix",ColumnDB:"PrefixCd",InitialWhere:"",ParamWhere:""},cValidate:"",cName:"prepaidwithholdingprefixcd",cLabel:"Prepaid Withholding Account Prefix",cKey:!1,cLabelSize:4,cOrder:8,cTriggered:!1,cDefault:"",cProtect:!0,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"GL/GL_SubModuleAccountPrefix",cDisplayColumn:"PrefixCd,ChartOfAccountPrefix"},PI_prepaidwithholdingaccountcd:{dataLookUp:{LookUpCd:"GetLookupGLAccountCodeBySubportfolio",ColumnDB:"AccountCd",InitialWhere:"STATUS = 'A' AND SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"'",ParamWhere:""},cValidate:"",cName:"prepaidwithholdingaccountcd",cLabel:"Prepaid Withholding Account Code",cKey:!1,cLabelSize:4,cOrder:9,cTriggered:!1,cDefault:"",cProtect:!0,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"GL/GL_ChartOfAccount",cDisplayColumn:"AccountCd,Descs1"},PI_expensewithholdingprefixcd:{dataLookUp:{LookUpCd:"GetLookupGLAccountPrefix",ColumnDB:"PrefixCd",InitialWhere:"",ParamWhere:""},cValidate:"",cName:"expensewithholdingprefixcd",cLabel:"Expense Withholding Account Prefix",cKey:!1,cLabelSize:4,cOrder:10,cTriggered:!1,cDefault:"",cProtect:!0,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"GL/GL_SubModuleAccountPrefix",cDisplayColumn:"PrefixCd,ChartOfAccountPrefix"},PI_expensewithholdingaccountcd:{dataLookUp:{LookUpCd:"GetLookupGLAccountCodeBySubportfolio",ColumnDB:"AccountCd",InitialWhere:"STATUS = 'A' AND SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"'",ParamWhere:""},cValidate:"",cName:"expensewithholdingaccountcd",cLabel:"Expense Withholding Account Code",cKey:!1,cLabelSize:4,cOrder:11,cTriggered:!1,cDefault:"",cProtect:!0,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"GL/GL_ChartOfAccount",cDisplayColumn:"AccountCd,Descs1"},PI_accruedwithholdingprefixcd:{dataLookUp:{LookUpCd:"GetLookupGLAccountPrefix",ColumnDB:"PrefixCd",InitialWhere:"",ParamWhere:""},cValidate:"",cName:"accruedwithholdingprefixcd",cLabel:"Accrued Withholding Account Prefix",cKey:!1,cLabelSize:4,cOrder:12,cTriggered:!1,cDefault:"",cProtect:!0,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"GL/GL_SubModuleAccountPrefix",cDisplayColumn:"PrefixCd,ChartOfAccountPrefix"},PI_accruedwithholdingaccountcd:{dataLookUp:{LookUpCd:"GetLookupGLAccountCodeBySubportfolio",ColumnDB:"AccountCd",InitialWhere:"STATUS = 'A' AND SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"'",ParamWhere:""},cValidate:"",cName:"accruedwithholdingaccountcd",cLabel:"Accrued Withholding Account Code",cKey:!1,cLabelSize:4,cOrder:13,cTriggered:!1,cDefault:"",cProtect:!0,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"GL/GL_ChartOfAccount",cDisplayColumn:"AccountCd,Descs1"},PI_accruedwithholdingothersprefixcd:{dataLookUp:{LookUpCd:"GetLookupGLAccountPrefix",ColumnDB:"PrefixCd",InitialWhere:"",ParamWhere:""},cValidate:"",cName:"accruedwithholdingothersprefixcd",cLabel:"Accrued Withholding Others Prefix Code",cKey:!1,cLabelSize:4,cOrder:14,cTriggered:!1,cDefault:"",cProtect:!0,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"GL/GL_SubModuleAccountPrefix",cDisplayColumn:"PrefixCd,ChartOfAccountPrefix"},PI_accruedwithholdingothersaccountcd:{dataLookUp:{LookUpCd:"GetLookupGLAccountCodeBySubportfolio",ColumnDB:"AccountCd",InitialWhere:"STATUS = 'A' AND SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"'",ParamWhere:""},cValidate:"",cName:"accruedwithholdingothersaccountcd",cLabel:"Accrued Withholding Others Account Code",cKey:!1,cLabelSize:4,cOrder:15,cTriggered:!1,cDefault:"",cProtect:!0,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"GL/GL_ChartOfAccount",cDisplayColumn:"AccountCd,Descs1"},PI_expensewithholdingstraightlineaccountcd:{dataLookUp:{LookUpCd:"GetLookupGLAccountCodeBySubportfolio",ColumnDB:"AccountCd",InitialWhere:"STATUS = 'A' AND SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"'",ParamWhere:""},cValidate:"",cName:"expensewithholdingstraightlineaccountcd",cLabel:"Expense Withholding Straight Line Account Code",cKey:!1,cLabelSize:4,cOrder:16,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"GL/GL_ChartOfAccount",cDisplayColumn:"AccountCd,Descs1"},PI_accruedwithholdingstraightlineaccountcd:{dataLookUp:{LookUpCd:"GetLookupGLAccountCodeBySubportfolio",ColumnDB:"AccountCd",InitialWhere:"STATUS = 'A' AND SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"'",ParamWhere:""},cValidate:"",cName:"accruedwithholdingstraightlineaccountcd",cLabel:"Accrued Withholding Straight Line Account Code",cKey:!1,cLabelSize:4,cOrder:17,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"GL/GL_ChartOfAccount",cDisplayColumn:"AccountCd,Descs1"},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage2Data},DataRowPage1:function(){return this.$store.getters.GetPage1Data}},methods:{OnvatprefixcdChange:function(t){var e=this;this.M_CM_TaxSubPortfolio_Detail.vatprefixcd!=t.id&&(this.$nextTick(function(){e.M_CM_TaxSubPortfolio_Detail.vatprefixcd=t.id,e.M_CM_TaxSubPortfolio_Detail.vatprefixcdLabel=t.label,e.inputStatus}),this.$forceUpdate())},OnvataccountcdChange:function(t){var e=this;this.M_CM_TaxSubPortfolio_Detail.vataccountcd!=t.id&&(this.$nextTick(function(){e.M_CM_TaxSubPortfolio_Detail.vataccountcd=t.id,e.M_CM_TaxSubPortfolio_Detail.vataccountcdLabel=t.label,e.inputStatus}),this.$forceUpdate())},OnvatreversalprefixcdChange:function(t){var e=this;this.M_CM_TaxSubPortfolio_Detail.vatreversalprefixcd!=t.id&&(this.$nextTick(function(){e.M_CM_TaxSubPortfolio_Detail.vatreversalprefixcd=t.id,e.M_CM_TaxSubPortfolio_Detail.vatreversalprefixcdLabel=t.label,e.inputStatus}),this.$forceUpdate())},OnvatreversalaccountcdChange:function(t){var e=this;this.M_CM_TaxSubPortfolio_Detail.vatreversalaccountcd!=t.id&&(this.$nextTick(function(){e.M_CM_TaxSubPortfolio_Detail.vatreversalaccountcd=t.id,e.M_CM_TaxSubPortfolio_Detail.vatreversalaccountcdLabel=t.label,e.inputStatus}),this.$forceUpdate())},OnprepaidwithholdingprefixcdChange:function(t){var e=this;this.M_CM_TaxSubPortfolio_Detail.prepaidwithholdingprefixcd!=t.id&&(this.$nextTick(function(){e.M_CM_TaxSubPortfolio_Detail.prepaidwithholdingprefixcd=t.id,e.M_CM_TaxSubPortfolio_Detail.prepaidwithholdingprefixcdLabel=t.label,e.inputStatus}),this.$forceUpdate())},OnprepaidwithholdingaccountcdChange:function(t){var e=this;this.M_CM_TaxSubPortfolio_Detail.prepaidwithholdingaccountcd!=t.id&&(this.$nextTick(function(){e.M_CM_TaxSubPortfolio_Detail.prepaidwithholdingaccountcd=t.id,e.M_CM_TaxSubPortfolio_Detail.prepaidwithholdingaccountcdLabel=t.label,e.inputStatus}),this.$forceUpdate())},OnexpensewithholdingprefixcdChange:function(t){var e=this;this.M_CM_TaxSubPortfolio_Detail.expensewithholdingprefixcd!=t.id&&(this.$nextTick(function(){e.M_CM_TaxSubPortfolio_Detail.expensewithholdingprefixcd=t.id,e.M_CM_TaxSubPortfolio_Detail.expensewithholdingprefixcdLabel=t.label,e.inputStatus}),this.$forceUpdate())},OnexpensewithholdingaccountcdChange:function(t){var e=this;this.M_CM_TaxSubPortfolio_Detail.expensewithholdingaccountcd!=t.id&&(this.$nextTick(function(){e.M_CM_TaxSubPortfolio_Detail.expensewithholdingaccountcd=t.id,e.M_CM_TaxSubPortfolio_Detail.expensewithholdingaccountcdLabel=t.label,e.inputStatus}),this.$forceUpdate())},OnaccruedwithholdingprefixcdChange:function(t){var e=this;this.M_CM_TaxSubPortfolio_Detail.accruedwithholdingprefixcd!=t.id&&(this.$nextTick(function(){e.M_CM_TaxSubPortfolio_Detail.accruedwithholdingprefixcd=t.id,e.M_CM_TaxSubPortfolio_Detail.accruedwithholdingprefixcdLabel=t.label,e.inputStatus}),this.$forceUpdate())},OnaccruedwithholdingaccountcdChange:function(t){var e=this;this.M_CM_TaxSubPortfolio_Detail.accruedwithholdingaccountcd!=t.id&&(this.$nextTick(function(){e.M_CM_TaxSubPortfolio_Detail.accruedwithholdingaccountcd=t.id,e.M_CM_TaxSubPortfolio_Detail.accruedwithholdingaccountcdLabel=t.label,e.inputStatus}),this.$forceUpdate())},OnaccruedwithholdingothersprefixcdChange:function(t){var e=this;this.M_CM_TaxSubPortfolio_Detail.accruedwithholdingothersprefixcd!=t.id&&(this.$nextTick(function(){e.M_CM_TaxSubPortfolio_Detail.accruedwithholdingothersprefixcd=t.id,e.M_CM_TaxSubPortfolio_Detail.accruedwithholdingothersprefixcdLabel=t.label,e.inputStatus}),this.$forceUpdate())},OnaccruedwithholdingothersaccountcdChange:function(t){var e=this;this.M_CM_TaxSubPortfolio_Detail.accruedwithholdingothersaccountcd!=t.id&&(this.$nextTick(function(){e.M_CM_TaxSubPortfolio_Detail.accruedwithholdingothersaccountcd=t.id,e.M_CM_TaxSubPortfolio_Detail.accruedwithholdingothersaccountcdLabel=t.label,e.inputStatus}),this.$forceUpdate())},OnexpensewithholdingstraightlineaccountcdChange:function(t){var e=this;this.M_CM_TaxSubPortfolio_Detail.expensewithholdingstraightlineaccountcd!=t.id&&(this.$nextTick(function(){e.M_CM_TaxSubPortfolio_Detail.expensewithholdingstraightlineaccountcd=t.id,e.M_CM_TaxSubPortfolio_Detail.expensewithholdingstraightlineaccountcdLabel=t.label,e.inputStatus}),this.$forceUpdate())},OnaccruedwithholdingstraightlineaccountcdChange:function(t){var e=this;this.M_CM_TaxSubPortfolio_Detail.accruedwithholdingstraightlineaccountcd!=t.id&&(this.$nextTick(function(){e.M_CM_TaxSubPortfolio_Detail.accruedwithholdingstraightlineaccountcd=t.id,e.M_CM_TaxSubPortfolio_Detail.accruedwithholdingstraightlineaccountcdLabel=t.label,e.inputStatus}),this.$forceUpdate())},setToolbarButton:function(){this.getToolbar().statusFunction[0].disabled=!0},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(t){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(t,e){},rowLink:function(t){this.$refs.modalTest.show()},paramFromParent:function(){this.$parent.showForm=!1;var t=this.$store.getters.GetPage1Data;this.M_CM_TaxSubPortfolio_Detail.taxcd=t.TaxCd,this.propList.initialWhere=" TaxCd = '"+t.TaxCd+"' ",this.FormToABSList().doGetList("","eb_getList")},M_Insert:function(){var t=this,e={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,TaxCd:this.M_CM_TaxSubPortfolio_Detail.taxcd,TaxType:this.M_CM_TaxSubPortfolio_Detail.taxtype,SubPortfolioCd:this.getDataUser().SubPortfolioCd,VATAccountCd:""==this.M_CM_TaxSubPortfolio_Detail.vataccountcd||null==this.M_CM_TaxSubPortfolio_Detail.vataccountcd?"NULL":this.M_CM_TaxSubPortfolio_Detail.vataccountcd,VATPrefixCd:""==this.M_CM_TaxSubPortfolio_Detail.vatprefixcd||null==this.M_CM_TaxSubPortfolio_Detail.vatprefixcd?"NULL":this.M_CM_TaxSubPortfolio_Detail.vatprefixcd,VATReversalAccountCd:""==this.M_CM_TaxSubPortfolio_Detail.vatreversalaccountcd||null==this.M_CM_TaxSubPortfolio_Detail.vatreversalaccountcd?"NULL":this.M_CM_TaxSubPortfolio_Detail.vatreversalaccountcd,VATReversalPrefixCd:""==this.M_CM_TaxSubPortfolio_Detail.vatreversalprefixcd||null==this.M_CM_TaxSubPortfolio_Detail.vatreversalprefixcd?"NULL":this.M_CM_TaxSubPortfolio_Detail.vatreversalprefixcd,PrepaidWithholdingAccountCd:""==this.M_CM_TaxSubPortfolio_Detail.prepaidwithholdingaccountcd||null==this.M_CM_TaxSubPortfolio_Detail.prepaidwithholdingaccountcd?"NULL":this.M_CM_TaxSubPortfolio_Detail.prepaidwithholdingaccountcd,PrepaidWithholdingPrefixCd:""==this.M_CM_TaxSubPortfolio_Detail.prepaidwithholdingprefixcd||null==this.M_CM_TaxSubPortfolio_Detail.prepaidwithholdingprefixcd?"NULL":this.M_CM_TaxSubPortfolio_Detail.prepaidwithholdingprefixcd,ExpenseWithholdingAccountCd:""==this.M_CM_TaxSubPortfolio_Detail.expensewithholdingaccountcd||null==this.M_CM_TaxSubPortfolio_Detail.expensewithholdingaccountcd?"NULL":this.M_CM_TaxSubPortfolio_Detail.expensewithholdingaccountcd,ExpenseWithholdingPrefixCd:""==this.M_CM_TaxSubPortfolio_Detail.expensewithholdingprefixcd||null==this.M_CM_TaxSubPortfolio_Detail.expensewithholdingprefixcd?"NULL":this.M_CM_TaxSubPortfolio_Detail.expensewithholdingprefixcd,AccruedWithholdingAccountCd:""==this.M_CM_TaxSubPortfolio_Detail.accruedwithholdingaccountcd||null==this.M_CM_TaxSubPortfolio_Detail.accruedwithholdingaccountcd?"NULL":this.M_CM_TaxSubPortfolio_Detail.accruedwithholdingaccountcd,AccruedWithholdingPrefixCd:""==this.M_CM_TaxSubPortfolio_Detail.accruedwithholdingprefixcd||null==this.M_CM_TaxSubPortfolio_Detail.accruedwithholdingprefixcd?"NULL":this.M_CM_TaxSubPortfolio_Detail.accruedwithholdingprefixcd,AccruedWithholdingOthersAccountCd:""==this.M_CM_TaxSubPortfolio_Detail.accruedwithholdingothersaccountcd||null==this.M_CM_TaxSubPortfolio_Detail.accruedwithholdingothersaccountcd?"NULL":this.M_CM_TaxSubPortfolio_Detail.accruedwithholdingothersaccountcd,AccruedWithholdingOthersPrefixCd:""==this.M_CM_TaxSubPortfolio_Detail.accruedwithholdingothersprefixcd||null==this.M_CM_TaxSubPortfolio_Detail.accruedwithholdingothersprefixcd?"NULL":this.M_CM_TaxSubPortfolio_Detail.accruedwithholdingothersprefixcd,UserInput:this.getDataUser().UserId,ExpenseWithholdingStraightLineAccountCd:""==this.M_CM_TaxSubPortfolio_Detail.expensewithholdingstraightlineaccountcd||null==this.M_CM_TaxSubPortfolio_Detail.expensewithholdingstraightlineaccountcd?"NULL":this.M_CM_TaxSubPortfolio_Detail.expensewithholdingstraightlineaccountcd,AccruedWithholdingStraightLineAccountCd:""==this.M_CM_TaxSubPortfolio_Detail.accruedwithholdingstraightlineaccountcd||null==this.M_CM_TaxSubPortfolio_Detail.accruedwithholdingstraightlineaccountcd?"NULL":this.M_CM_TaxSubPortfolio_Detail.accruedwithholdingstraightlineaccountcd};this.postJSON(this.getUrlInsert(),e).then(function(e){null!=e&&t.$parent.resultInsert(e.Message)})},M_Update:function(){var t=this,e={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,TaxCd:this.M_CM_TaxSubPortfolio_Detail.taxcd,TaxType:this.M_CM_TaxSubPortfolio_Detail.taxtype,SubPortfolioCd:this.getDataUser().SubPortfolioCd,VATAccountCd:""==this.M_CM_TaxSubPortfolio_Detail.vataccountcd||null==this.M_CM_TaxSubPortfolio_Detail.vataccountcd?"NULL":this.M_CM_TaxSubPortfolio_Detail.vataccountcd,VATPrefixCd:""==this.M_CM_TaxSubPortfolio_Detail.vatprefixcd||null==this.M_CM_TaxSubPortfolio_Detail.vatprefixcd?"NULL":this.M_CM_TaxSubPortfolio_Detail.vatprefixcd,VATReversalAccountCd:""==this.M_CM_TaxSubPortfolio_Detail.vatreversalaccountcd||null==this.M_CM_TaxSubPortfolio_Detail.vatreversalaccountcd?"NULL":this.M_CM_TaxSubPortfolio_Detail.vatreversalaccountcd,VATReversalPrefixCd:""==this.M_CM_TaxSubPortfolio_Detail.vatreversalprefixcd||null==this.M_CM_TaxSubPortfolio_Detail.vatreversalprefixcd?"NULL":this.M_CM_TaxSubPortfolio_Detail.vatreversalprefixcd,PrepaidWithholdingAccountCd:""==this.M_CM_TaxSubPortfolio_Detail.prepaidwithholdingaccountcd||null==this.M_CM_TaxSubPortfolio_Detail.prepaidwithholdingaccountcd?"NULL":this.M_CM_TaxSubPortfolio_Detail.prepaidwithholdingaccountcd,PrepaidWithholdingPrefixCd:""==this.M_CM_TaxSubPortfolio_Detail.prepaidwithholdingprefixcd||null==this.M_CM_TaxSubPortfolio_Detail.prepaidwithholdingprefixcd?"NULL":this.M_CM_TaxSubPortfolio_Detail.prepaidwithholdingprefixcd,ExpenseWithholdingAccountCd:""==this.M_CM_TaxSubPortfolio_Detail.expensewithholdingaccountcd||null==this.M_CM_TaxSubPortfolio_Detail.expensewithholdingaccountcd?"NULL":this.M_CM_TaxSubPortfolio_Detail.expensewithholdingaccountcd,ExpenseWithholdingPrefixCd:""==this.M_CM_TaxSubPortfolio_Detail.expensewithholdingprefixcd||null==this.M_CM_TaxSubPortfolio_Detail.expensewithholdingprefixcd?"NULL":this.M_CM_TaxSubPortfolio_Detail.expensewithholdingprefixcd,AccruedWithholdingAccountCd:""==this.M_CM_TaxSubPortfolio_Detail.accruedwithholdingaccountcd||null==this.M_CM_TaxSubPortfolio_Detail.accruedwithholdingaccountcd?"NULL":this.M_CM_TaxSubPortfolio_Detail.accruedwithholdingaccountcd,AccruedWithholdingPrefixCd:""==this.M_CM_TaxSubPortfolio_Detail.accruedwithholdingprefixcd||null==this.M_CM_TaxSubPortfolio_Detail.accruedwithholdingprefixcd?"NULL":this.M_CM_TaxSubPortfolio_Detail.accruedwithholdingprefixcd,AccruedWithholdingOthersAccountCd:""==this.M_CM_TaxSubPortfolio_Detail.accruedwithholdingothersaccountcd||null==this.M_CM_TaxSubPortfolio_Detail.accruedwithholdingothersaccountcd?"NULL":this.M_CM_TaxSubPortfolio_Detail.accruedwithholdingothersaccountcd,AccruedWithholdingOthersPrefixCd:""==this.M_CM_TaxSubPortfolio_Detail.accruedwithholdingothersprefixcd||null==this.M_CM_TaxSubPortfolio_Detail.accruedwithholdingothersprefixcd?"NULL":this.M_CM_TaxSubPortfolio_Detail.accruedwithholdingothersprefixcd,UserInput:this.getDataUser().UserId,UserEdit:this.getDataUser().UserId,LastUpdateStamp:this.M_CM_TaxSubPortfolio_Detail.lastupdatestamp,ExpenseWithholdingStraightLineAccountCd:""==this.M_CM_TaxSubPortfolio_Detail.expensewithholdingstraightlineaccountcd||null==this.M_CM_TaxSubPortfolio_Detail.expensewithholdingstraightlineaccountcd?"NULL":this.M_CM_TaxSubPortfolio_Detail.expensewithholdingstraightlineaccountcd,AccruedWithholdingStraightLineAccountCd:""==this.M_CM_TaxSubPortfolio_Detail.accruedwithholdingstraightlineaccountcd||null==this.M_CM_TaxSubPortfolio_Detail.accruedwithholdingstraightlineaccountcd?"NULL":this.M_CM_TaxSubPortfolio_Detail.accruedwithholdingstraightlineaccountcd};this.postJSON(this.getUrlUpdate(),e).then(function(e){null!=e&&t.$parent.resultUpdate(e.Message)})},M_ClearForm:function(){this.M_CM_TaxSubPortfolio_Detail={subportfoliocd:this.getDataUser().SubPortfolioCd,taxcd:"",taxtype:"",vatreversalflag:"",vataccountcd:"",vatprefixcd:"",vatreversalaccountcd:"",vatreversalprefixcd:"",prepaidwithholdingaccountcd:"",prepaidwithholdingprefixcd:"",expensewithholdingaccountcd:"",expensewithholdingprefixcd:"",accruedwithholdingaccountcd:"",accruedwithholdingprefixcd:"",accruedwithholdingothersaccountcd:"",accruedwithholdingothersprefixcd:"",t0:"",t1:"",t2:"",t3:"",t4:"",t5:"",t6:"",t7:"",t8:"",t9:"",t10:"",t11:"",t12:"",t13:"",t14:"",t15:"",t16:"",t17:"",t18:"",t19:"",t20:"",t21:"",t22:"",t23:"",t24:"",t25:"",t26:"",t27:"",t28:"",t29:"",t30:"",descs:"",taxrate:"0",taxclass:"",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:0,expensewithholdingstraightlineaccountcd:"",accruedwithholdingstraightlineaccountcd:"",rowid:0}},M_New:function(){var t=this.$store.getters.GetPage1Data;this.M_CM_TaxSubPortfolio_Detail.taxcd=t.TaxCd},M_Edit:function(){},M_Delete:function(t){var e=this,i=this.FormToABSList().getRowSelected(),a=[];i.forEach(function(t){a.push({TaxCd:t.TaxCd,SubPortfolioCd:e.getDataUser().SubPortfolioCd,TaxType:t.TaxType,LastUpdateStamp:t.LastUpdateStamp,_Message_:""})});var c={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:a};this.postJSONMulti(this.getUrlNewDeleteMulti(),c).then(function(t){null!=t&&e.$parent.resultDelete()})},getDataBy:function(t){var e=this,i={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,taxcd:t.TaxCd,taxtype:t.TaxType,subportfoliocd:t.SubPortfolioCd};this.postEncode(this.getUrlById(),i).then(function(i){if(null!=i){var a=i.Data[0];console.log(a);var c="";a.taxclass&&("W"==a.taxclass?c="WithHolding":"V"==a.taxclass?c="VAT":"O"==a.taxclass&&(c="Other VAT"));var o="";a.vatreversalflag&&("Y"==a.vatreversalflag?o="Yes":"N"==a.vatreversalflag&&(o="No")),e.M_CM_TaxSubPortfolio_Detail={subportfoliocd:a.subportfoliocd,taxcd:a.taxcd,taxtype:a.taxtype,vatreversalflag:o,vataccountcd:a.vataccountcd,vatprefixcd:a.vatprefixcd,vatreversalaccountcd:a.vatreversalaccountcd,vatreversalprefixcd:a.vatreversalprefixcd,prepaidwithholdingaccountcd:a.prepaidwithholdingaccountcd,prepaidwithholdingprefixcd:a.prepaidwithholdingprefixcd,expensewithholdingaccountcd:a.expensewithholdingaccountcd,expensewithholdingprefixcd:a.expensewithholdingprefixcd,accruedwithholdingaccountcd:a.accruedwithholdingaccountcd,accruedwithholdingprefixcd:a.accruedwithholdingprefixcd,accruedwithholdingothersaccountcd:a.accruedwithholdingothersaccountcd,accruedwithholdingothersprefixcd:a.accruedwithholdingothersprefixcd,t0:a.t0,t1:a.t1,t2:a.t2,t3:a.t3,t4:a.t4,t5:a.t5,t6:a.t6,t7:a.t7,t8:a.t8,t9:a.t9,t10:a.t10,t11:a.t11,t12:a.t12,t13:a.t13,t14:a.t14,t15:a.t15,t16:a.t16,t17:a.t17,t18:a.t18,t19:a.t19,t20:a.t20,t21:a.t21,t22:a.t22,t23:a.t23,t24:a.t24,t25:a.t25,t26:a.t26,t27:a.t27,t28:a.t28,t29:a.t29,t30:a.t30,descs:a.descs,taxrate:e.isCurrency(a.taxrate,a.decimal),taxclass:c,userinput:a.userinput,useredit:a.useredit,timeinput:a.timeinput,timeedit:a.timeedit,lastupdatestamp:t.LastUpdateStamp,expensewithholdingstraightlineaccountcd:a.expensewithholdingstraightlineaccountcd,accruedwithholdingstraightlineaccountcd:a.accruedwithholdingstraightlineaccountcd,rowid:a.rowid},e.M_CM_TaxSubPortfolio_Detail.vatprefixcdLabel=null!=e.M_CM_TaxSubPortfolio_Detail.vatprefixcd?a.vatprefixcd:"",e.M_CM_TaxSubPortfolio_Detail.vataccountcdLabel=null!=e.M_CM_TaxSubPortfolio_Detail.vataccountcd?a.vataccountcd:"",e.M_CM_TaxSubPortfolio_Detail.vatreversalprefixcdLabel=null!=e.M_CM_TaxSubPortfolio_Detail.vatreversalprefixcd?a.vatreversalprefixcd:"",e.M_CM_TaxSubPortfolio_Detail.vatreversalaccountcdLabel=null!=e.M_CM_TaxSubPortfolio_Detail.vatreversalaccountcd?a.vatreversalaccountcd:"",e.M_CM_TaxSubPortfolio_Detail.prepaidwithholdingprefixcdLabel=null!=e.M_CM_TaxSubPortfolio_Detail.prepaidwithholdingprefixcd?a.prepaidwithholdingprefixcd:"",e.M_CM_TaxSubPortfolio_Detail.prepaidwithholdingaccountcdLabel=null!=e.M_CM_TaxSubPortfolio_Detail.prepaidwithholdingaccountcd?a.prepaidwithholdingaccountcd:"",e.M_CM_TaxSubPortfolio_Detail.expensewithholdingprefixcdLabel=null!=e.M_CM_TaxSubPortfolio_Detail.expensewithholdingprefixcd?a.expensewithholdingprefixcd:"",e.M_CM_TaxSubPortfolio_Detail.expensewithholdingaccountcdLabel=null!=e.M_CM_TaxSubPortfolio_Detail.expensewithholdingaccountcd?a.expensewithholdingaccountcd:"",e.M_CM_TaxSubPortfolio_Detail.accruedwithholdingprefixcdLabel=null!=e.M_CM_TaxSubPortfolio_Detail.accruedwithholdingprefixcd?a.accruedwithholdingprefixcd:"",e.M_CM_TaxSubPortfolio_Detail.accruedwithholdingaccountcdLabel=null!=e.M_CM_TaxSubPortfolio_Detail.accruedwithholdingaccountcd?a.accruedwithholdingaccountcd:"",e.M_CM_TaxSubPortfolio_Detail.accruedwithholdingothersprefixcdLabel=null!=e.M_CM_TaxSubPortfolio_Detail.accruedwithholdingothersprefixcd?a.accruedwithholdingothersprefixcd:"",e.M_CM_TaxSubPortfolio_Detail.accruedwithholdingothersaccountcdLabel=null!=e.M_CM_TaxSubPortfolio_Detail.accruedwithholdingothersaccountcd?a.accruedwithholdingothersaccountcd:"",e.M_CM_TaxSubPortfolio_Detail.expensewithholdingstraightlineaccountcdLabel=null!=e.M_CM_TaxSubPortfolio_Detail.expensewithholdingstraightlineaccountcd?a.expensewithholdingstraightlineaccountcd:"",e.M_CM_TaxSubPortfolio_Detail.accruedwithholdingstraightlineaccountcdLabel=null!=e.M_CM_TaxSubPortfolio_Detail.accruedwithholdingstraightlineaccountcd?a.accruedwithholdingstraightlineaccountcd:"","W"==a.taxclass?(e.PI_vatreversalflag.cProtect=!0,e.PI_vataccountcd.cProtect=!0,e.PI_vatreversalaccountcd.cProtect=!0,e.PI_vatprefixcd.cProtect=!0,e.PI_vatreversalprefixcd.cProtect=!0,e.PI_prepaidwithholdingprefixcd.cProtect=!1,e.PI_expensewithholdingprefixcd.cProtect=!1,e.PI_accruedwithholdingprefixcd.cProtect=!1,e.PI_prepaidwithholdingaccountcd.cProtect=!1,e.PI_expensewithholdingaccountcd.cProtect=!1,e.PI_accruedwithholdingaccountcd.cProtect=!1,e.PI_accruedwithholdingothersaccountcd.cProtect=!1,e.PI_accruedwithholdingothersprefixcd.cProtect=!1):"V"!=a.taxclass&&"O"!=a.taxclass||("No"==o?(e.PI_vatreversalprefixcd.cProtect=!0,e.PI_vatreversalaccountcd.cProtect=!0):(e.PI_vatreversalprefixcd.cProtect=!1,e.PI_vatreversalaccountcd.cProtect=!1),e.PI_vatprefixcd.cProtect=!1,e.PI_vataccountcd.cProtect=!1,e.PI_vatreversalflag.cProtect=!1,e.PI_prepaidwithholdingaccountcd.cProtect=!0,e.PI_prepaidwithholdingprefixcd.cProtect=!0,e.PI_expensewithholdingprefixcd.cProtect=!0,e.PI_expensewithholdingaccountcd.cProtect=!0,e.PI_accruedwithholdingprefixcd.cProtect=!0,e.PI_accruedwithholdingaccountcd.cProtect=!0,e.PI_accruedwithholdingothersprefixcd.cProtect=!0,e.PI_accruedwithholdingothersaccountcd.cProtect=!0),e.IEBy.Input=a.userinput,e.IEBy.Edit=a.useredit}})}},created:function(){},beforeMount:function(){},mounted:function(){this.hideSideBarMenu()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),r=o,l=i("2877"),n=Object(l["a"])(r,a,c,!1,null,null,null);n.options.__file="CM_TaxSubPortfolio_Detail.vue";e["default"]=n.exports}}]);
//# sourceMappingURL=chunk-2d22c33e.896f9d45.js.map