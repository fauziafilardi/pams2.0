(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2250ef"],{e37b:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ABSListVuex",{attrs:{prop:e.propList,title:e.data.QueryName},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table,refreshColumn:e.$parent.refreshColumn,checkboxChecked:e.$parent.checkboxChecked}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[a("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                    Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),a("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),a("b-collapse",{attrs:{id:"collapse1",visible:!0}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[a("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[a("b-row",{staticStyle:{"padding-left":"10px"}},[a("b-col",{attrs:{md:"12",id:"col-left"}},[a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputDateRangeVuex",{ref:"ref_fromdate",attrs:{prop:e.PI_fromdate,valueFrom:e.M_SM_BlockSalesH.fromdate,valueTo:e.M_SM_BlockSalesH.todate},on:{from:e.MdtRange_fromdate,to:e.MdtRange_todate}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_totalunit",attrs:{prop:e.PI_totalunit},model:{value:e.M_SM_BlockSalesH.totalunit,callback:function(t){e.$set(e.M_SM_BlockSalesH,"totalunit",t)},expression:"M_SM_BlockSalesH.totalunit"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputRadioButtonVuex",{ref:"ref_salesarea",attrs:{prop:e.PI_salesarea},on:{input:e.OnsalesareaChange},model:{value:e.M_SM_BlockSalesH.salesarea,callback:function(t){e.$set(e.M_SM_BlockSalesH,"salesarea",t)},expression:"M_SM_BlockSalesH.salesarea"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_totalarea",attrs:{prop:e.PI_totalarea},model:{value:e.M_SM_BlockSalesH.totalarea,callback:function(t){e.$set(e.M_SM_BlockSalesH,"totalarea",t)},expression:"M_SM_BlockSalesH.totalarea"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSTextAreaVuex",{ref:"ref_remarks",attrs:{prop:e.PI_remarks},on:{input:e.OnremarksChange},model:{value:e.M_SM_BlockSalesH.remarks,callback:function(t){e.$set(e.M_SM_BlockSalesH,"remarks",t)},expression:"M_SM_BlockSalesH.remarks"}})],1)],1)],1)],1),a("ABSTAnalysis",{attrs:{prop:e.PTAnalysis}})],1)],1)],1)],1)],1)],1)},s=[],r=(a("ac6a"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{cInsertKey:"",FormType:"List",Module:"SM",propList:{initialWhere:"",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_SM_BlockSalesH:{fromdate:"",todate:"",totalunit:"0",salesarea:"G",totalarea:"0",remarks:""},PI_fromdate:{cValidate:"required",cName:"fromdate",cLabel:"Date",cLabelSize:4,cOrder:1,cKey:!1,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_totalunit:{cValidate:"",cName:"totalunit",cLabel:"Unit",cLabelSize:4,cOrder:4,cKey:!1,cType:"numeric",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_salesarea:{cValidate:"",cName:"salesarea",cId:"rdbsalesarea",cRadioOptions:[{text:"Gross Area",value:"G"},{text:"Semi Gross Area",value:"S"},{text:"Net Area",value:"N"}],cRadioDefaultOption:"G",cLabel:"Sales Area",cLabelSize:4,cDefault:"",cOrder:0,cProtect:!1,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_totalarea:{cValidate:"",cName:"totalarea",cLabel:"Total Area",cLabelSize:4,cOrder:6,cKey:!1,cType:"numeric",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_remarks:{cValidate:"",cName:"remarks",cLabel:"Remarks",cLabelSize:4,cOrder:16,cKey:!1,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder,cProtect:!1}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage1Data},GetDataBy1:function(){return this.$store.getters.GetPage1GetDataBy}},methods:{OnsalesareaChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},OnremarksChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},setToolbarButton:function(){},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,t){},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){},M_CheckboxChecked:function(e,t,a){},M_Post:function(e){},M_Insert:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,FromDate:""==this.M_SM_BlockSalesH.fromdate||null==this.M_SM_BlockSalesH.fromdate?"NULL":this.M_SM_BlockSalesH.fromdate,ToDate:""==this.M_SM_BlockSalesH.todate||null==this.M_SM_BlockSalesH.todate?"NULL":this.M_SM_BlockSalesH.todate,SalesArea:this.M_SM_BlockSalesH.salesarea,TotalUnit:this.M_SM_BlockSalesH.totalunit,TotalArea:this.M_SM_BlockSalesH.totalarea,Remarks:this.M_SM_BlockSalesH.remarks,UserInput:this.getDataUser().UserId};this.postJSON(this.getUrlInsert(),t).then(function(t){null!=t&&e.$parent.resultInsert(t.Message)})},M_Update:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,SequenceNo:this.M_SM_BlockSalesH.sequenceno,FromDate:""==this.M_SM_BlockSalesH.fromdate||null==this.M_SM_BlockSalesH.fromdate?"NULL":this.M_SM_BlockSalesH.fromdate,ToDate:""==this.M_SM_BlockSalesH.todate||null==this.M_SM_BlockSalesH.todate?"NULL":this.M_SM_BlockSalesH.todate,SalesArea:this.M_SM_BlockSalesH.salesarea,TotalUnit:this.M_SM_BlockSalesH.totalunit,TotalArea:this.M_SM_BlockSalesH.totalarea,Remarks:this.M_SM_BlockSalesH.remarks,UserEdit:this.getDataUser().UserId,LastUpdateStamp:this.M_SM_BlockSalesH.lastupdatestamp};this.postJSON(this.getUrlUpdate(),t).then(function(t){null!=t&&e.$parent.resultUpdate(t.Message)})},M_ClearForm:function(){this.M_SM_BlockSalesH={fromdate:"",todate:"",totalunit:"0",salesarea:"G",totalarea:"0",remarks:""}},M_New:function(){},M_Edit:function(){},M_Delete:function(e){var t=this,a=this.FormToABSList().getRowSelected(),o=[];a.forEach(function(e){o.push({_Message_:"",SubPortfolioCd:t.getDataUser().SubPortfolioCd,SequenceNo:e.SequenceNo,LastUpdateStamp:e.LastUpdateStamp})});var s={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:o};this.postJSONMulti(this.getUrlNewDeleteMulti(),s).then(function(e){null!=e&&t.$parent.resultDelete()})},getDataBy:function(e){var t=this,a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,sequenceno:e.SequenceNo};this.postEncode(this.getUrlById(),a).then(function(e){if(null!=e){var a=e.Data[0];t.M_SM_BlockSalesH={fromdate:a.fromdate,todate:a.todate,totalunit:a.totalunit,salesarea:a.salesarea,totalarea:a.totalarea,remarks:a.remarks},t.IEBy.Input=a.userinput,t.IEBy.Edit=a.useredit}})},MdtRange_fromdate:function(e){this.M_SM_BlockSalesH.fromdate=e},MdtRange_todate:function(e){this.M_SM_BlockSalesH.todate=e}},beforeCreate:function(){},created:function(){this.$store.commit("setFormType","List"),this.getToolbar().ProcessPS()},beforeMount:function(){},mounted:function(){this.hideSideBarMenu(),this.FormToABSList().doGetList("","eb_getList")},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),i=r,l=a("2877"),n=Object(l["a"])(i,o,s,!1,null,null,null);n.options.__file="SM_BlockSalesH.vue";t["default"]=n.exports}}]);
//# sourceMappingURL=chunk-2d2250ef.33514069.js.map