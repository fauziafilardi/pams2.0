(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d209b0e"],{a9aa:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[o("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[o("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                    Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),o("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),o("b-collapse",{attrs:{id:"collapse1",visible:!0}},[o("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[o("b-col",{directives:[{name:"show",rawName:"v-show",value:e.VisibleForm,expression:"VisibleForm"}],staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[o("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[o("b-row",{staticStyle:{"padding-left":"10px"}},[o("b-col",{attrs:{md:"12",id:"col-left"}},[o("b-row",[o("b-col",{attrs:{md:"6"}},[o("ABSCompute",{ref:"ref_msg",attrs:{prop:e.PI_msg},model:{value:e.M_TN_DetailTenancySubPortfolio.msg,callback:function(t){e.$set(e.M_TN_DetailTenancySubPortfolio,"msg",t)},expression:"M_TN_DetailTenancySubPortfolio.msg"}})],1)],1),o("b-row",[o("b-col",{attrs:{md:"6"}},[o("ABSinputTextVuex",{ref:"ref_subportfolioname",attrs:{prop:e.PI_subportfolioname},model:{value:e.M_TN_DetailTenancySubPortfolio.subportfolioname,callback:function(t){e.$set(e.M_TN_DetailTenancySubPortfolio,"subportfolioname",t)},expression:"M_TN_DetailTenancySubPortfolio.subportfolioname"}})],1)],1),o("b-row",[o("b-col",{attrs:{md:"6"}},[o("ABSInputSelect2",{ref:"ref_subportfoliocategory",attrs:{prop:e.PI_subportfoliocategory,value:e.M_TN_DetailTenancySubPortfolio.subportfoliocategory,label:e.M_TN_DetailTenancySubPortfolio.subportfoliocategoryLabel},on:{change:e.OnsubportfoliocategoryChange}})],1)],1),o("b-row",[o("b-col",{attrs:{md:"6"}},[o("ABSInputSelect2",{ref:"ref_subportfoliochargecoverage",attrs:{prop:e.PI_subportfoliochargecoverage,value:e.M_TN_DetailTenancySubPortfolio.subportfoliochargecoverage,label:e.M_TN_DetailTenancySubPortfolio.subportfoliochargecoverageLabel},on:{change:e.OnsubportfoliochargecoverageChange}})],1)],1),o("b-row",[o("b-col",{attrs:{md:"6"}},[o("ABSinputRadioButtonVuex",{ref:"ref_subportfoliostrata",attrs:{prop:e.PI_subportfoliostrata},on:{input:e.OnsubportfoliostrataChange},model:{value:e.M_TN_DetailTenancySubPortfolio.subportfoliostrata,callback:function(t){e.$set(e.M_TN_DetailTenancySubPortfolio,"subportfoliostrata",t)},expression:"M_TN_DetailTenancySubPortfolio.subportfoliostrata"}})],1)],1),o("b-row",[o("b-col",{attrs:{md:"6"}},[o("ABSInputSelect2",{ref:"ref_subportfolioabccategory",attrs:{prop:e.PI_subportfolioabccategory,value:e.M_TN_DetailTenancySubPortfolio.subportfolioabccategory,label:e.M_TN_DetailTenancySubPortfolio.subportfolioabccategoryLabel},on:{change:e.OnsubportfolioabccategoryChange}})],1)],1),o("b-row",[o("b-col",{attrs:{md:"6"}},[o("ABSInputSelect2",{ref:"ref_subportfoliocluster",attrs:{prop:e.PI_subportfoliocluster,value:e.M_TN_DetailTenancySubPortfolio.subportfoliocluster,label:e.M_TN_DetailTenancySubPortfolio.subportfolioclusterLabel},on:{change:e.OnsubportfolioclusterChange}})],1)],1),o("b-row",[o("b-col",{attrs:{md:"6"}},[o("ABSInputSelect2",{ref:"ref_subportfoliogroup",attrs:{prop:e.PI_subportfoliogroup,value:e.M_TN_DetailTenancySubPortfolio.subportfoliogroup,label:e.M_TN_DetailTenancySubPortfolio.subportfoliogroupLabel},on:{change:e.OnsubportfoliogroupChange}})],1)],1),o("b-row",[o("b-col",{attrs:{md:"6"}},[o("ABSinputRadioButtonVuex",{ref:"ref_pipelinemall",attrs:{prop:e.PI_pipelinemall},on:{input:e.OnpipelinemallChange},model:{value:e.M_TN_DetailTenancySubPortfolio.pipelinemall,callback:function(t){e.$set(e.M_TN_DetailTenancySubPortfolio,"pipelinemall",t)},expression:"M_TN_DetailTenancySubPortfolio.pipelinemall"}})],1)],1),o("b-row",[o("b-col",{attrs:{md:"6"}},[o("ABSInputTimeRange",{ref:"ref_operatingfromhour",attrs:{prop:e.PI_operatingfromhour,valueFrom:e.M_TN_DetailTenancySubPortfolio.operatingfromhour,valueTo:e.M_TN_DetailTenancySubPortfolio.operatingtohour},on:{from:e.MdtRange_operatingfromhour,to:e.MdtRange_operatingtohour}})],1)],1),o("b-row",[o("b-col",{attrs:{md:"6"}},[o("ABSinputTextVuex",{ref:"ref_totallandarea",attrs:{prop:e.PI_totallandarea},model:{value:e.M_TN_DetailTenancySubPortfolio.totallandarea,callback:function(t){e.$set(e.M_TN_DetailTenancySubPortfolio,"totallandarea",t)},expression:"M_TN_DetailTenancySubPortfolio.totallandarea"}})],1)],1),o("b-row",[o("b-col",{attrs:{md:"6"}},[o("ABSinputTextVuex",{ref:"ref_totalbuilduparea",attrs:{prop:e.PI_totalbuilduparea},model:{value:e.M_TN_DetailTenancySubPortfolio.totalbuilduparea,callback:function(t){e.$set(e.M_TN_DetailTenancySubPortfolio,"totalbuilduparea",t)},expression:"M_TN_DetailTenancySubPortfolio.totalbuilduparea"}})],1)],1),o("b-row",[o("b-col",{attrs:{md:"6"}},[o("ABSinputTextVuex",{ref:"ref_totalinbuildingparkingarea",attrs:{prop:e.PI_totalinbuildingparkingarea},model:{value:e.M_TN_DetailTenancySubPortfolio.totalinbuildingparkingarea,callback:function(t){e.$set(e.M_TN_DetailTenancySubPortfolio,"totalinbuildingparkingarea",t)},expression:"M_TN_DetailTenancySubPortfolio.totalinbuildingparkingarea"}})],1)],1),o("b-row",[o("b-col",{attrs:{md:"6"}},[o("ABSinputTextVuex",{ref:"ref_totalopenparkingarea",attrs:{prop:e.PI_totalopenparkingarea},model:{value:e.M_TN_DetailTenancySubPortfolio.totalopenparkingarea,callback:function(t){e.$set(e.M_TN_DetailTenancySubPortfolio,"totalopenparkingarea",t)},expression:"M_TN_DetailTenancySubPortfolio.totalopenparkingarea"}})],1)],1),o("b-row",[o("b-col",{attrs:{md:"6"}},[o("ABSinputTextVuex",{ref:"ref_totalpublicarea",attrs:{prop:e.PI_totalpublicarea},model:{value:e.M_TN_DetailTenancySubPortfolio.totalpublicarea,callback:function(t){e.$set(e.M_TN_DetailTenancySubPortfolio,"totalpublicarea",t)},expression:"M_TN_DetailTenancySubPortfolio.totalpublicarea"}})],1)],1),o("b-row",[o("b-col",{attrs:{md:"6"}},[o("ABSinputTextVuex",{ref:"ref_totalfootprintarea",attrs:{prop:e.PI_totalfootprintarea},model:{value:e.M_TN_DetailTenancySubPortfolio.totalfootprintarea,callback:function(t){e.$set(e.M_TN_DetailTenancySubPortfolio,"totalfootprintarea",t)},expression:"M_TN_DetailTenancySubPortfolio.totalfootprintarea"}})],1)],1)],1)],1),o("ABSTAnalysis",{attrs:{prop:e.PTAnalysis}})],1)],1)],1)],1)],1)])},i=[],r={props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{ValKey:null,FormType:"Form",Module:"TN",VisibleForm:!0,propList:{initialWhere:"",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_TN_DetailTenancySubPortfolio:{subportfoliocd:this.getDataUser().SubPortfolioCd,subportfolioname:"",subportfoliocategory:"W",subportfoliochargecoverage:"R",subportfolioabccategory:"1",subportfoliostrata:"N",subportfoliocluster:"1",subportfoliogroup:"1",pipelinemall:"N",totallandarea:"0",totalbuilduparea:"0",totalinbuildingparkingarea:"0",totalopenparkingarea:"0",totalpublicarea:"0",totalfootprintarea:"0",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:0,operatingfromhour:"",operatingtohour:"",rowid:0},PI_msg:{cLabel:"",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_subportfolioname:{cValidate:"max:50",cName:"subportfolioname",cLabel:"SubPortfolio Name",cLabelSize:4,cOrder:1,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_subportfoliocategory:{dataLookUp:null,cValidate:"",cName:"subportfoliocategory",cLabel:"Category",cLabelSize:4,cOrder:2,cKey:!1,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!0,cOption:[{label:"Own",id:"W"},{label:"Manage",id:"M"},{label:"Other",id:"O"}],cMasterUrl:"",cDisplayColumn:""},PI_subportfoliochargecoverage:{dataLookUp:null,cValidate:"",cName:"subportfoliochargecoverage",cLabel:"Charge Coverage",cLabelSize:4,cOrder:3,cKey:!1,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!0,cOption:[{label:"Rental",id:"R"},{label:"Service Utility",id:"S"},{label:"All",id:"A"},{label:"Other",id:"O"}],cMasterUrl:"",cDisplayColumn:""},PI_subportfoliostrata:{cValidate:"",cName:"subportfoliostrata",cId:"rdbsubportfoliostrata",cRadioOptions:[{text:"No",value:"N"},{text:"Yes",value:"Y"}],cRadioDefaultOption:"",cLabel:"Strata SubPortfolio",cLabelSize:4,cOrder:4,cProtect:!1,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_subportfolioabccategory:{dataLookUp:null,cValidate:"",cName:"subportfolioabccategory",cLabel:"ABC Category",cLabelSize:4,cOrder:5,cKey:!1,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!0,cOption:[{label:"Grade AAA",id:"1"},{label:"Grade AA",id:"2"},{label:"Grade A",id:"3"}],cMasterUrl:"",cDisplayColumn:""},PI_subportfoliocluster:{dataLookUp:null,cValidate:"",cName:"subportfoliocluster",cLabel:"SubPortfolio Cluster",cLabelSize:4,cOrder:6,cKey:!1,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!0,cOption:[{label:"Cluster A",id:"1"},{label:"Cluster B",id:"2"},{label:"Cluster C",id:"3"}],cMasterUrl:"",cDisplayColumn:""},PI_subportfoliogroup:{dataLookUp:null,cValidate:"",cName:"subportfoliogroup",cLabel:"SubPortfolio Group",cLabelSize:4,cOrder:7,cKey:!1,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!0,cOption:[{label:"Group A",id:"1"},{label:"Group B",id:"2"},{label:"Group C",id:"3"}],cMasterUrl:"",cDisplayColumn:""},PI_pipelinemall:{cValidate:"",cName:"pipelinemall",cId:"rdbpipelinemall",cRadioOptions:[{text:"No",value:"N"},{text:"Yes",value:"Y"}],cRadioDefaultOption:"",cLabel:"Pipeline Mall",cLabelSize:4,cOrder:8,cProtect:!1,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_operatingfromhour:{cValidate:"",cName:"operatingfromhour",cLabel:"Operating Hour Start - End",cLabelSize:4,cOrder:9,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_totallandarea:{cValidate:"max:50",cName:"totallandarea",cLabel:"Total Land Area",cLabelSize:4,cOrder:10,cKey:!1,cType:"numeric",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_totalbuilduparea:{cValidate:"max:50",cName:"totalbuilduparea",cLabel:"Total Build Up Area",cLabelSize:4,cOrder:11,cKey:!1,cType:"numeric",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_totalinbuildingparkingarea:{cValidate:"max:50",cName:"totalinbuildingparkingarea",cLabel:"Total In Building Parking",cLabelSize:4,cOrder:12,cKey:!1,cType:"numeric",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_totalopenparkingarea:{cValidate:"max:50",cName:"totalopenparkingarea",cLabel:"Total Open Parking",cLabelSize:4,cOrder:13,cKey:!1,cType:"numeric",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_totalpublicarea:{cValidate:"max:50",cName:"totalpublicarea",cLabel:"Total Public Area",cLabelSize:4,cOrder:14,cKey:!1,cType:"numeric",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_totalfootprintarea:{cValidate:"max:50",cName:"totalfootprintarea",cLabel:"Total Foot Print Area",cLabelSize:4,cOrder:15,cKey:!1,cType:"numeric",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage2Data},DataRowPage1:function(){return this.$store.getters.GetPage1Data}},methods:{OnsubportfoliocategoryChange:function(e){var t=this;this.$nextTick(function(){t.M_TN_DetailTenancySubPortfolio.subportfoliocategory=e.id,t.M_TN_DetailTenancySubPortfolio.subportfoliocategoryLabel=e.label}),this.$forceUpdate()},OnsubportfoliochargecoverageChange:function(e){var t=this;this.$nextTick(function(){t.M_TN_DetailTenancySubPortfolio.subportfoliochargecoverage=e.id,t.M_TN_DetailTenancySubPortfolio.subportfoliochargecoverageLabel=e.label}),this.$forceUpdate()},OnsubportfolioabccategoryChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},OnsubportfolioclusterChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},OnsubportfoliostrataChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},OnsubportfoliogroupChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},OnpipelinemallChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},setToolbarButton:function(){},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){this.VisibleForm=!1},doDoubleClick:function(){},rowClicked:function(e,t){},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){this.getDataBy()},M_Insert:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.DataRowPage1.SubPortfolioCd,SubPortfolioName:this.M_TN_DetailTenancySubPortfolio.subportfolioname,SubPortfolioCategory:this.M_TN_DetailTenancySubPortfolio.subportfoliocategory,SubPortfolioChargeCoverage:this.M_TN_DetailTenancySubPortfolio.subportfoliochargecoverage,SubPortfolioABCCategory:this.M_TN_DetailTenancySubPortfolio.subportfolioabccategory,SubPortfolioStrata:this.M_TN_DetailTenancySubPortfolio.subportfoliostrata,SubPortfolioCluster:this.M_TN_DetailTenancySubPortfolio.subportfoliocluster,SubPortfolioGroup:this.M_TN_DetailTenancySubPortfolio.subportfoliogroup,PipelineMall:this.M_TN_DetailTenancySubPortfolio.pipelinemall,TotalLandArea:this.M_TN_DetailTenancySubPortfolio.totallandarea,TotalBuildUpArea:this.M_TN_DetailTenancySubPortfolio.totalbuilduparea,TotalInBuildingParkingArea:this.M_TN_DetailTenancySubPortfolio.totalinbuildingparkingarea,TotalOpenParkingArea:this.M_TN_DetailTenancySubPortfolio.totalopenparkingarea,TotalPublicArea:this.M_TN_DetailTenancySubPortfolio.totalpublicarea,TotalFootPrintArea:this.M_TN_DetailTenancySubPortfolio.totalfootprintarea,OperatingFromHour:this.M_TN_DetailTenancySubPortfolio.operatingfromhour,OperatingToHour:this.M_TN_DetailTenancySubPortfolio.operatingtohour,UserEdit:this.getDataUser().UserId,LastUpdateStamp:this.DataRowPage1.LastUpdateStamp};this.postJSON(this.getUrlUpdate(),t).then(function(t){null!=t&&(e.$parent.resultUpdate(t.Message),e.getDataBy())})},M_Update:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.DataRowPage1.SubPortfolioCd,SubPortfolioName:this.M_TN_DetailTenancySubPortfolio.subportfolioname,SubPortfolioCategory:this.M_TN_DetailTenancySubPortfolio.subportfoliocategory,SubPortfolioChargeCoverage:this.M_TN_DetailTenancySubPortfolio.subportfoliochargecoverage,SubPortfolioABCCategory:this.M_TN_DetailTenancySubPortfolio.subportfolioabccategory,SubPortfolioStrata:this.M_TN_DetailTenancySubPortfolio.subportfoliostrata,SubPortfolioCluster:this.M_TN_DetailTenancySubPortfolio.subportfoliocluster,SubPortfolioGroup:this.M_TN_DetailTenancySubPortfolio.subportfoliogroup,PipelineMall:this.M_TN_DetailTenancySubPortfolio.pipelinemall,TotalLandArea:this.M_TN_DetailTenancySubPortfolio.totallandarea,TotalBuildUpArea:this.M_TN_DetailTenancySubPortfolio.totalbuilduparea,TotalInBuildingParkingArea:this.M_TN_DetailTenancySubPortfolio.totalinbuildingparkingarea,TotalOpenParkingArea:this.M_TN_DetailTenancySubPortfolio.totalopenparkingarea,TotalPublicArea:this.M_TN_DetailTenancySubPortfolio.totalpublicarea,TotalFootPrintArea:this.M_TN_DetailTenancySubPortfolio.totalfootprintarea,OperatingFromHour:this.M_TN_DetailTenancySubPortfolio.operatingfromhour,OperatingToHour:this.M_TN_DetailTenancySubPortfolio.operatingtohour,UserEdit:this.getDataUser().UserId,LastUpdateStamp:this.M_TN_DetailTenancySubPortfolio.lastupdatestamp};this.postJSON(this.getUrlUpdate(),t).then(function(t){null!=t&&e.$parent.resultUpdate(t.Message)})},M_ClearForm:function(){this.M_TN_DetailTenancySubPortfolio={subportfoliocd:this.getDataUser().SubPortfolioCd,subportfolioname:"",subportfoliocategory:"W",subportfoliochargecoverage:"R",subportfolioabccategory:"1",subportfoliostrata:"N",subportfoliocluster:"1",subportfoliogroup:"1",pipelinemall:"N",totallandarea:0,totalbuilduparea:0,totalinbuildingparkingarea:0,totalopenparkingarea:0,totalpublicarea:0,totalfootprintarea:0,userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:0,operatingfromhour:"",operatingtohour:"",rowid:0}},M_New:function(){this.VisibleForm=!0},M_Edit:function(){},M_Delete:function(e){var t=this,o={OptionSeq:this.getOptionSeq().OptionSeq,SubPortfolioCd:this.getDataUser().SubPortfolioCd,PortfolioCd:this.getDataUser().PortfolioCd,LineNo:this.$parent.data.PageOrder,Data:e};this.postJSONMulti(this.getUrlDeleteMulti(),o).then(function(e){if(null!=e){var o="Deleting Data Successfully";t.$parent.resultDelete(o)}})},getDataBy:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,subportfoliocd:this.DataRowPage1.SubPortfolioCd};this.postEncode(this.getUrlById(),t).then(function(t){if(null!=t){var o=t.Data[0];t.Data.length>0?(e.VisibleForm=!0,e.getToolbar().FormStatus="EDIT",e.getToolbar().ProcessPS(),e.M_TN_DetailTenancySubPortfolio={subportfoliocd:o.subportfoliocd,subportfolioname:o.subportfolioname,subportfoliocategory:o.subportfoliocategory,subportfoliochargecoverage:o.subportfoliochargecoverage,subportfolioabccategory:o.subportfolioabccategory,subportfoliostrata:o.subportfoliostrata,subportfoliocluster:o.subportfoliocluster,subportfoliogroup:o.subportfoliogroup,pipelinemall:o.pipelinemall,totallandarea:e.isCurrency(o.totallandarea,e.decimal),totalbuilduparea:e.isCurrency(o.totalbuilduparea,e.decimal),totalinbuildingparkingarea:e.isCurrency(o.totalinbuildingparkingarea,e.decimal),totalopenparkingarea:e.isCurrency(o.totalopenparkingarea,e.decimal),totalpublicarea:e.isCurrency(o.totalpublicarea,e.decimal),totalfootprintarea:e.isCurrency(o.totalfootprintarea,e.decimal),userinput:o.userinput,useredit:o.useredit,timeinput:o.timeinput,timeedit:o.timeedit,lastupdatestamp:e.DataRowPage1.LastUpdateStamp,operatingfromhour:o.operatingfromhour,operatingtohour:o.operatingtohour,rowid:e.isCurrency(o.rowid,e.decimal)},e.IEBy.Input=o.userinput,e.IEBy.Edit=o.useredit):(e.VisibleForm=!1,e.getToolbar().FormStatus="NEW",e.getToolbar().ProcessPS())}})},MdtRange_operatingfromhour:function(e){this.M_TN_DetailTenancySubPortfolio.operatingfromhour=e},MdtRange_operatingtohour:function(e){this.M_TN_DetailTenancySubPortfolio.operatingtohour=e}},created:function(){},beforeMount:function(){},mounted:function(){this.hideSideBarMenu()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},l=r,n=o("2877"),c=Object(n["a"])(l,a,i,!1,null,null,null);c.options.__file="TN_DetailTenancySubPortfolio.vue";t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d209b0e.6a2e420c.js.map