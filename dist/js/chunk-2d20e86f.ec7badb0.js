(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20e86f"],{b06a:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ABSListEdit",{attrs:{prop:t.propList,title:t.data.QueryName,isCheckAsStatus:"Checked=true",statusFalse:"false"},on:{rowClicked:t.$parent.rowClicked,rowDblClicked:t.$parent.doDoubleClick,rowLinkClick:t.$parent.rowLink,pageSize:t.$parent.M_PageSize,pagination:t.$parent.M_Pagination,filter:t.$parent.M_Advance_Filter,headTable:t.$parent.M_Head_Table,refreshColumn:t.$parent.refreshColumn}}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[a("span",{directives:[{name:"show",rawName:"v-show",value:t.IEBy.Input&&t.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[t._v("\n                    Input By : "+t._s(t.IEBy.Input)+" | Edit By : "+t._s(t.IEBy.Edit)+" "),a("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),a("b-collapse",{attrs:{id:"collapse1",visible:!0}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[a("b-form",{attrs:{"data-vv-scope":"FormScope_"+t.PageLevel+"_"+t.TabIndex,"data-vv-value-path":"FormScope_"+t.PageLevel+"_"+t.TabIndex}},[a("b-row",{staticStyle:{"padding-left":"10px"}},[a("b-col",{attrs:{md:"12",id:"col-left"}})],1)],1)],1)],1)],1)],1)],1)},i=[],o={props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{cInsertKey:"",FormType:"ListEdit",Module:"AR",propList:{initialWhere:"",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_AR_TaxSettlementCancellationWHD:{subportfoliocd:this.getDataUser().SubPortfolioCd,taxsettlementcancellationno:"",taxsettlementcancellationdate:"",taxsettlementtype:"",status:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:0,t0:"",t1:"",t2:"",t3:"",t4:"",t5:"",t6:"",t7:"",t8:"",t9:"",t10:"",t11:"",t12:"",t13:"",t14:"",t15:"",t16:"",t17:"",t18:"",t19:"",t20:"",t21:"",t22:"",t23:"",t24:"",t25:"",t26:"",t27:"",t28:"",t29:"",t30:"",controlsequenceno:0,rowid:0},PI_taxsettlementcancellationno:{cValidate:"required|max:30",cName:"taxsettlementcancellationno",cLabel:"Tax Settlement Cancellation No",cLabelSize:4,cOrder:5,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_taxsettlementcancellationdate:{cValidate:"required",cName:"taxsettlementcancellationdate",cLabel:"Date",cLabelSize:4,cOrder:6,cKey:!1,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_remarks:{cValidate:"",cName:"remarks",cLabel:"Remarks",cLabelSize:4,cOrder:25,cKey:!1,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage1Data}},methods:{OntaxsettlementcancellationdateChange:function(t){var e=this;this.$nextTick(function(){e.inputStatus}),this.$forceUpdate()},OnremarksChange:function(t){var e=this;this.$nextTick(function(){e.inputStatus}),this.$forceUpdate()},setToolbarButton:function(){this.$store.commit("setStatus","new"),"NEW"!==this.getToolbar().FormStatus&&(this.getToolbar().FormStatus="NEW",this.getToolbar().ProcessPS())},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(t){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(t,e){},rowLink:function(t){this.$refs.modalTest.show()},paramFromParent:function(){this.$parent.showForm=!1;var t=this.$store.getters.GetPage1Data;this.M_AR_TaxSettlementCancellationWHD.taxsettlementno=t.TaxSettlementCancellationNo,this.propList.ParamView="'"+this.getDataUser().SubPortfolioCd+"', '"+t.TaxSettlementCancellationNo+"', 'W'",this.FormToABSList().doGetList("","eb_getList")},M_Post:function(t){},M_Insert:function(){for(var t=this,e=this.$parent.FormToABSList2().getAllItem(),a=[],n=this.$store.getters.GetPage1Data,i=0;i<e.length;i++)a.push({SubPortfolioCd:this.getDataUser().SubPortfolioCd,TaxSettlementCancellationNo:n.TaxSettlementCancellationNo,DebitNo:e[i].DebitNo,UserInput:this.getDataUser().UserId,Checked:1==e[i].Checked?1:0});var o={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:a};this.postJSONMulti(this.getUrlInsertMulti(),o).then(function(e){if(null!=e){var a="Data Has Been Save Successfully";t.$parent.resultUpdate(a)}})},M_Update:function(){this.M_Insert()},M_ClearForm:function(){this.M_AR_TaxSettlementCancellationWHH={subportfoliocd:this.getDataUser().SubPortfolioCd,taxsettlementcancellationno:"",taxsettlementcancellationdate:"",taxsettlementtype:"",status:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:0,t0:"",t1:"",t2:"",t3:"",t4:"",t5:"",t6:"",t7:"",t8:"",t9:"",t10:"",t11:"",t12:"",t13:"",t14:"",t15:"",t16:"",t17:"",t18:"",t19:"",t20:"",t21:"",t22:"",t23:"",t24:"",t25:"",t26:"",t27:"",t28:"",t29:"",t30:"",controlsequenceno:0,rowid:0}},M_New:function(){},M_Edit:function(){},M_Delete:function(t){},getDataBy:function(t){}},beforeCreate:function(){},created:function(){this.getToolbar().ProcessPS()},beforeMount:function(){},mounted:function(){this.hideSideBarMenu()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},s=o,r=a("2877"),l=Object(r["a"])(s,n,i,!1,null,null,null);l.options.__file="AR_TaxSettlementCancellationWHD.vue";e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d20e86f.ec7badb0.js.map