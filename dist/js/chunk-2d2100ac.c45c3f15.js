(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2100ac"],{b5cf:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[o("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[o("span",{directives:[{name:"show",rawName:"v-show",value:t.IEBy.Input&&t.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[t._v("\n                Input By : "+t._s(t.IEBy.Input)+" | Edit By : "+t._s(t.IEBy.Edit)+" "),o("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),o("b-collapse",{attrs:{id:"collapse1",visible:!0}},[o("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[o("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[o("b-form",{attrs:{"data-vv-scope":"FormScope_"+t.PageLevel+"_"+t.TabIndex,"data-vv-value-path":"FormScope_"+t.PageLevel+"_"+t.TabIndex}},[o("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[o("b-col",{attrs:{md:"12",id:"col-left"}},[o("b-row",[o("b-col",{attrs:{md:"6"}},[o("ABSInputSelectList",{ref:"ref_fromlotno",attrs:{prop:t.PI_fromlotno,value:t.M_TN_StrataCopyHistoryBilling.fromlotno,label:t.M_TN_StrataCopyHistoryBilling.fromlotnoLabel},on:{change:t.OnfromlotnoChange}})],1),o("b-col",{attrs:{md:"6"}},[o("ABSInputSelectList",{ref:"ref_tolotno",attrs:{prop:t.PI_tolotno,value:t.M_TN_StrataCopyHistoryBilling.tolotno,label:t.M_TN_StrataCopyHistoryBilling.tolotnoLabel},on:{change:t.OntolotnoChange}})],1)],1),o("b-row",[o("b-col",{attrs:{md:"6"}},[o("ABSInputSelectList",{ref:"ref_trxtype",attrs:{prop:t.PI_trxtype,value:t.M_TN_StrataCopyHistoryBilling.trxtype,label:t.M_TN_StrataCopyHistoryBilling.trxtypeLabel},on:{change:t.OntrxtypeChange}})],1)],1),o("b-row",[o("b-col",{attrs:{md:"6"}},[o("ABSinputDateVuex",{ref:"ref_billingdate",attrs:{prop:t.PI_billingdate},on:{input:t.OnbillingdateChange},model:{value:t.M_TN_StrataCopyHistoryBilling.billingdate,callback:function(e){t.$set(t.M_TN_StrataCopyHistoryBilling,"billingdate",e)},expression:"M_TN_StrataCopyHistoryBilling.billingdate"}})],1)],1),o("b-row",[o("b-col",{attrs:{md:"6"}},[o("ABSinputDateVuex",{ref:"ref_trxdatefrom",attrs:{prop:t.PI_trxdatefrom},on:{input:t.OntrxdatefromChange},model:{value:t.M_TN_StrataCopyHistoryBilling.trxdatefrom,callback:function(e){t.$set(t.M_TN_StrataCopyHistoryBilling,"trxdatefrom",e)},expression:"M_TN_StrataCopyHistoryBilling.trxdatefrom"}})],1),o("b-col",{attrs:{md:"6"}},[o("ABSinputDateVuex",{ref:"ref_trxdateto",attrs:{prop:t.PI_trxdateto},on:{input:t.OntrxdatetoChange},model:{value:t.M_TN_StrataCopyHistoryBilling.trxdateto,callback:function(e){t.$set(t.M_TN_StrataCopyHistoryBilling,"trxdateto",e)},expression:"M_TN_StrataCopyHistoryBilling.trxdateto"}})],1)],1),o("b-row",[o("b-col",{attrs:{md:"6"}},[o("ABSinputTextVuex",{ref:"ref_fromperiod",attrs:{prop:t.PI_fromperiod},model:{value:t.M_TN_StrataCopyHistoryBilling.fromperiod,callback:function(e){t.$set(t.M_TN_StrataCopyHistoryBilling,"fromperiod",e)},expression:"M_TN_StrataCopyHistoryBilling.fromperiod"}})],1),o("b-col",{attrs:{md:"6"}},[o("ABSinputTextVuex",{ref:"ref_fromyear",attrs:{prop:t.PI_fromyear},model:{value:t.M_TN_StrataCopyHistoryBilling.fromyear,callback:function(e){t.$set(t.M_TN_StrataCopyHistoryBilling,"fromyear",e)},expression:"M_TN_StrataCopyHistoryBilling.fromyear"}})],1)],1),o("b-row",[o("b-col",{attrs:{md:"6"}},[o("ABSTextAreaVuex",{ref:"ref_remarks",attrs:{prop:t.PI_remarks},on:{input:t.OnremarksChange},model:{value:t.M_TN_StrataCopyHistoryBilling.remarks,callback:function(e){t.$set(t.M_TN_StrataCopyHistoryBilling,"remarks",e)},expression:"M_TN_StrataCopyHistoryBilling.remarks"}})],1)],1)],1)],1),o("ABSTAnalysis",{attrs:{prop:t.PTAnalysis}})],1)],1)],1)],1)],1)])},r=[],i=(o("cadf"),o("551c"),o("097d"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{cInsertKey:"",FormType:"Form",Module:"TN",IEBy:{Input:"",Edit:""},M_TN_StrataCopyHistoryBilling:{dummy:"",fromlotno:"",tolotno:"",trxtype:"",trxdateto:"",billingdate:"",trxdatefrom:"",fromperiod:"",fromyear:"",remarks:""},PI_fromlotno:{dataLookUp:{LookUpCd:"GetLotNoLookUp",ColumnDB:"LotNo",InitialWhere:"SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' AND LotUsage = 'L' AND StrataStatus = 'Y' AND OwnerID IS NOT NULL",ParamWhere:""},cValidate:"required",cName:"fromlotno",cLabel:"Copy From Lot No",cKey:!1,cLabelSize:4,cOrder:1,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"LotNo,Descs"},PI_tolotno:{dataLookUp:{LookUpCd:"GetLotNoLookUp",ColumnDB:"LotNo",InitialWhere:"SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' AND LotUsage = 'L' AND StrataStatus = 'Y' AND OwnerID IS NOT NULL",ParamWhere:""},cValidate:"required",cName:"tolotno",cLabel:"Copy To Lot No ",cKey:!1,cLabelSize:4,cOrder:2,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"LotNo,Descs"},PI_trxtype:{dataLookUp:{LookUpCd:"GetLookupCMTransTypeBySubPortfolio",ColumnDB:"TrxType",InitialWhere:"SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' AND MODULECD = 'AR' AND TrxClass='I'",ParamWhere:""},cValidate:"required",cName:"trxtype",cLabel:"Transaction Type",cKey:!1,cLabelSize:4,cOrder:3,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"AR/AR_TransactionTypeSubPortfolioMaintenance",cDisplayColumn:"TrxType,Descs"},PI_billingdate:{cValidate:"required",cName:"billingdate",cLabel:"Billing Date",cLabelSize:4,cOrder:4,cKey:!1,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_trxdatefrom:{cValidate:"",cName:"trxdatefrom",cLabel:"Amortize Date From",cLabelSize:4,cOrder:5,cKey:!1,cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_trxdateto:{cValidate:"",cName:"trxdateto",cLabel:"Amortize Date To ",cLabelSize:4,cOrder:6,cKey:!1,cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_fromperiod:{cValidate:"required",cName:"fromperiod",cLabel:"From Month",cLabelSize:4,cOrder:7,cKey:!1,cType:"numeric",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_fromyear:{cValidate:"required|max:4",cName:"fromyear",cLabel:"From Year",cLabelSize:4,cOrder:8,cKey:!1,cType:"numeric",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_remarks:{cValidate:"",cName:"remarks",cLabel:"Remarks",cLabelSize:4,cOrder:9,cKey:!1,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"}},methods:{OnfromlotnoChange:function(t){var e=this;this.$nextTick(function(){e.M_TN_StrataCopyHistoryBilling.fromlotno=t.id,e.M_TN_StrataCopyHistoryBilling.fromlotnoLabel=t.label,e.M_TN_StrataCopyHistoryBilling.tolotno=t.id,e.M_TN_StrataCopyHistoryBilling.tolotnoLabel=t.label,e.inputStatus}),this.$forceUpdate()},OntolotnoChange:function(t){var e=this;this.$nextTick(function(){e.M_TN_StrataCopyHistoryBilling.tolotno=t.id,e.M_TN_StrataCopyHistoryBilling.tolotnoLabel=t.label,e.inputStatus}),this.$forceUpdate()},OntrxtypeChange:function(t){var e=this;this.$nextTick(function(){e.M_TN_StrataCopyHistoryBilling.trxtype=t.id,e.M_TN_StrataCopyHistoryBilling.trxtypeLabel=t.label,"VIEW"!=e.inputStatus&&e.FnGetTrxTypeData(e.getDataUser().SubPortfolioCd,"AR",t.id).then(function(t){if(0!=t.length){var o=t[0];"D"==o.JournalType&&"A"==o.AmortizeStatus?(e.PI_trxdatefrom.cProtect=!1,e.PI_trxdateto.cProtect=!1,e.PI_trxdatefrom.cValidate="required",e.PI_trxdateto.cValidate="required"):(e.PI_trxdatefrom.cProtect=!0,e.PI_trxdateto.cProtect=!0,e.PI_trxdatefrom.cValidate="",e.PI_trxdateto.cValidate="")}})}),this.$forceUpdate()},OnbillingdateChange:function(t){var e=this;this.$nextTick(function(){e.inputStatus}),this.$forceUpdate()},OntrxdatefromChange:function(t){var e=this;this.$nextTick(function(){e.inputStatus}),this.$forceUpdate()},OntrxdatetoChange:function(t){var e=this;this.$nextTick(function(){e.inputStatus}),this.$forceUpdate()},OnremarksChange:function(t){var e=this;this.$nextTick(function(){e.inputStatus}),this.$forceUpdate()},setToolbarButton:function(){this.getToolbar().doEdit(!0)},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(t){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(t,e){},rowLink:function(t){this.$refs.modalTest.show()},paramFromParent:function(){},M_Post:function(t){},M_Insert:function(){var t=this,e={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder};this.postJSON(this.getUrlInsert(),e).then(function(e){null!=e&&t.alertSuccess(e.Message).then(function(){t.FormToMasterPage().ValidasiPage()})})},M_Update:function(){var t=this,e={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,FromLotNo:""==this.M_TN_StrataCopyHistoryBilling.fromlotno||null==this.M_TN_StrataCopyHistoryBilling.fromlotno?"NULL":this.M_TN_StrataCopyHistoryBilling.fromlotno,ToLotNo:""==this.M_TN_StrataCopyHistoryBilling.tolotno||null==this.M_TN_StrataCopyHistoryBilling.tolotno?"NULL":this.M_TN_StrataCopyHistoryBilling.tolotno,TrxType:""==this.M_TN_StrataCopyHistoryBilling.trxtype||null==this.M_TN_StrataCopyHistoryBilling.trxtype?"NULL":this.M_TN_StrataCopyHistoryBilling.trxtype,BillingDate:this.M_TN_StrataCopyHistoryBilling.billingdate,TrxDateFrom:this.M_TN_StrataCopyHistoryBilling.trxdatefrom,TrxDateTo:this.M_TN_StrataCopyHistoryBilling.trxdateto,FromPeriod:this.M_TN_StrataCopyHistoryBilling.fromperiod,FromYear:this.M_TN_StrataCopyHistoryBilling.fromyear,Remarks:this.M_TN_StrataCopyHistoryBilling.remarks,UserInput:this.getDataUser().UserId};this.postJSON(this.getUrlUpdate(),e).then(function(e){null!=e&&t.alertSuccess(e.Message).then(function(){t.getToolbar().setButton(!1),t.$store.commit("setStatus","view"),t.FormToMasterPage().ValidasiPage()})})},M_ClearForm:function(){this.M_TN_StrataCopyHistoryBilling={dummy:"",fromlotno:"",tolotno:"",trxtype:"",trxdateto:"",billingdate:"",trxdatefrom:"",fromperiod:"",fromyear:"",remarks:""}},M_New:function(){},M_Edit:function(){},M_Delete:function(t){var e=this,o={OptionSeq:this.getOptionSeq().OptionSeq,SubPortfolioCd:this.getDataUser().SubPortfolioCd,PortfolioCd:this.getDataUser().PortfolioCd,LineNo:this.$parent.data.PageOrder,Data:t};this.postJSONMulti(this.getUrlDeleteMulti(),o).then(function(t){if(null!=t){var o="Deleting Data Successfully";e.$parent.resultDelete(o)}})},getDataBy:function(t){var e=this,o={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder};this.postEncode(this.getUrlById(),o).then(function(t){if(null!=t){var o=t.Data[0];e.M_TN_StrataCopyHistoryBilling={dummy:o.dummy,fromlotno:o.fromlotno,tolotno:o.tolotno,trxtype:o.trxtype,trxdateto:o.trxdateto,billingdate:o.billingdate,trxdatefrom:o.trxdatefrom,fromperiod:o.fromperiod,fromyear:o.fromyear,remarks:o.remarks},e.M_TN_StrataCopyHistoryBilling.fromlotnoLabel=null!=e.M_TN_StrataCopyHistoryBilling.fromlotno&&""!=e.M_TN_StrataCopyHistoryBilling.fromlotno?o.fromlotno+e.separator:"",e.M_TN_StrataCopyHistoryBilling.tolotnoLabel=null!=e.M_TN_StrataCopyHistoryBilling.tolotno&&""!=e.M_TN_StrataCopyHistoryBilling.tolotno?o.tolotno+e.separator:"",e.M_TN_StrataCopyHistoryBilling.trxtypeLabel=null!=e.M_TN_StrataCopyHistoryBilling.trxtype&&""!=e.M_TN_StrataCopyHistoryBilling.trxtype?o.trxtype+e.separator:"",e.IEBy.Input=o.UserInput,e.IEBy.Edit=o.UserEdit}})}},beforeCreate:function(){},created:function(){this.$store.commit("setFormType","Form"),this.getToolbar().ProcessPS()},beforeMount:function(){},mounted:function(){this.hideSideBarMenu()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),n=i,l=o("2877"),s=Object(l["a"])(n,a,r,!1,null,null,null);s.options.__file="TN_StrataCopyHistoryBilling.vue";e["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2d2100ac.c45c3f15.js.map