(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b9bb8"],{"33ce":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("ABSListVuex",{attrs:{prop:e.propList,title:e.data.QueryName},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table,refreshColumn:e.$parent.refreshColumn}}),o("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[o("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[o("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                    Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),o("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),o("b-collapse",{attrs:{id:"collapse1",visible:!0}},[o("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[o("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[o("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[o("b-row",{staticStyle:{"padding-left":"10px"}},[o("b-col",{attrs:{md:"12",id:"col-left"}},[o("b-row",[o("b-col",{attrs:{md:"6"}},[o("ABSCompute",{ref:"ref_lotno",attrs:{prop:e.PI_lotno},model:{value:e.M_TN_ContractConcessionMonthlyRevenue.lotno,callback:function(t){e.$set(e.M_TN_ContractConcessionMonthlyRevenue,"lotno",t)},expression:"M_TN_ContractConcessionMonthlyRevenue.lotno"}})],1)],1),o("b-row",[o("b-col",{attrs:{md:"6"}},[o("ABSinputDateRangeVuex",{ref:"ref_fromdate",attrs:{prop:e.PI_fromdate,valueFrom:e.M_TN_ContractConcessionMonthlyRevenue.fromdate,valueTo:e.M_TN_ContractConcessionMonthlyRevenue.todate},on:{from:e.MdtRange_fromdate,to:e.MdtRange_todate}})],1)],1),o("b-row",[o("b-col",{attrs:{md:"6"}},[o("ABSinputTextVuex",{ref:"ref_revenueamt",attrs:{prop:e.PI_revenueamt},model:{value:e.M_TN_ContractConcessionMonthlyRevenue.revenueamt,callback:function(t){e.$set(e.M_TN_ContractConcessionMonthlyRevenue,"revenueamt",t)},expression:"M_TN_ContractConcessionMonthlyRevenue.revenueamt"}})],1)],1),o("b-row",[o("b-col",{attrs:{md:"6"}},[o("ABSinputTextVuex",{ref:"ref_discountamt",attrs:{prop:e.PI_discountamt},model:{value:e.M_TN_ContractConcessionMonthlyRevenue.discountamt,callback:function(t){e.$set(e.M_TN_ContractConcessionMonthlyRevenue,"discountamt",t)},expression:"M_TN_ContractConcessionMonthlyRevenue.discountamt"}})],1)],1)],1)],1),o("ABSTAnalysis",{attrs:{prop:e.PTAnalysis}})],1)],1)],1)],1)],1)],1)},a=[],i=(o("ac6a"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{DataRow:null,ValKey:null,FormType:"View",Module:"TN",propList:{initialWhere:"",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_TN_ContractConcessionMonthlyRevenue:{subportfoliocd:this.getDataUser().SubPortfolioCd,applicationno:"",lotmonthlyrevenuesequenceno:0,lotno:"",revenueamt:"0",revenuemonth:0,fromdate:"",revenueyear:0,discountamt:"0",timeedit:"",lastupdatestamp:0,todate:"",rowid:0},PI_lotno:{cLabel:"Lot No",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_fromdate:{cValidate:"",cName:"fromdate",cLabel:"Montly Revenue Date From - To",cLabelSize:4,cOrder:0,cKey:!1,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_revenueamt:{cValidate:"",cName:"revenueamt",cLabel:"Revenue Amount",cLabelSize:4,cOrder:0,cKey:!1,cType:"numeric",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_discountamt:{cValidate:"",cName:"discountamt",cLabel:"Discount Amount",cLabelSize:4,cOrder:0,cKey:!1,cType:"numeric",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder,cProtect:!1}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage2Data},DataRowPage1:function(){return this.$store.getters.GetPage1Data}},methods:{setToolbarButton:function(){},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,t){},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){this.$parent.showForm=!1;var e=this.$store.getters.GetPage1Data;this.DataRow=e,console.log(this.DataRow),this.M_TN_ContractConcessionMonthlyRevenue.applicationno=this.DataRow.ApplicationNo,this.propList.initialWhere="SubPortfolioCd='"+this.getDataUser().SubPortfolioCd+"' AND ApplicationNo = '"+this.DataRow.ApplicationNo+"' ",this.FormToABSList().doGetList("","eb_getList")},M_Insert:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder};this.postJSON(this.getUrlInsert(),t).then(function(t){null!=t&&e.$parent.resultInsert(t.Message)})},M_Update:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,ApplicationNo:this.M_TN_ContractConcessionMonthlyRevenue.applicationno,LotMonthlyRevenueSequenceNo:this.M_TN_ContractConcessionMonthlyRevenue.lotmonthlyrevenuesequenceno,DiscountAmt:this.M_TN_ContractConcessionMonthlyRevenue.discountamt,UserEdit:this.getDataUser().UserId};this.postJSON(this.getUrlUpdate(),t).then(function(t){null!=t&&e.$parent.resultUpdate(t.Message)})},M_ClearForm:function(){this.M_TN_ContractConcessionMonthlyRevenue={subportfoliocd:this.getDataUser().SubPortfolioCd,applicationno:"",lotmonthlyrevenuesequenceno:0,lotno:"",revenueamt:"0",revenuemonth:0,fromdate:"",revenueyear:0,discountamt:"0",timeedit:"",lastupdatestamp:0,todate:"",rowid:0}},M_New:function(){var e=this.$store.getters.GetPage1Data;this.M_TN_ContractConcessionMonthlyRevenue.concessionsequenceno=e.ConcessionSequenceNo},M_Edit:function(){},M_Delete:function(e){var t=this,o=this.FormToABSList().getRowSelected(),n=[];o.forEach(function(e){n.push({})});var a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:n};this.postJSONMulti(this.getUrlNewDeleteMulti(),a).then(function(e){null!=e&&t.$parent.resultPost()})},getDataBy:function(e){var t=this,o={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,applicationno:e.ApplicationNo,lotmonthlyrevenuesequenceno:e.LotMonthlyRevenueSequenceNo};this.postEncode(this.getUrlById(),o).then(function(o){if(null!=o){var n=o.Data[0];t.M_TN_ContractConcessionMonthlyRevenue={subportfoliocd:n.subportfoliocd,applicationno:n.applicationno,lotmonthlyrevenuesequenceno:n.lotmonthlyrevenuesequenceno,lotno:n.lotno,revenueamt:t.isCurrency(n.revenueamt,t.decimal),revenuemonth:t.isCurrency(n.revenuemonth,t.decimal),fromdate:n.fromdate,revenueyear:t.isCurrency(n.revenueyear,t.decimal),discountamt:t.isCurrency(n.discountamt,t.decimal),timeedit:n.timeedit,lastupdatestamp:e.LastUpdateStamp,todate:n.todate,rowid:n.rowid},t.IEBy.Input=n.userinput,t.IEBy.Edit=n.useredit}})},MdtRange_fromdate:function(e){this.M_TN_ContractConcessionMonthlyRevenue.fromdate=e},MdtRange_todate:function(e){this.M_TN_ContractConcessionMonthlyRevenue.todate=e}},created:function(){},beforeMount:function(){},mounted:function(){this.hideSideBarMenu()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),s=i,r=o("2877"),c=Object(r["a"])(s,n,a,!1,null,null,null);c.options.__file="TN_ContractConcessionMonthlyRevenue.vue";t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0b9bb8.b5464341.js.map