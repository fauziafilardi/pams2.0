(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21b299"],{bf32:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[a("span",{directives:[{name:"show",rawName:"v-show",value:t.IEBy.Input&&t.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[t._v("\n                Input By : "+t._s(t.IEBy.Input)+" | Edit By : "+t._s(t.IEBy.Edit)+" "),a("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),a("b-collapse",{attrs:{id:"collapse1",visible:!0}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[a("b-form",{attrs:{"data-vv-scope":"FormScope_"+t.PageLevel+"_"+t.TabIndex,"data-vv-value-path":"FormScope_"+t.PageLevel+"_"+t.TabIndex}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{attrs:{md:"12",id:"col-left"}},[a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_fromlotno",attrs:{prop:t.PI_fromlotno,value:t.M_TN_StrataBillingAdjustment.fromlotno,label:t.M_TN_StrataBillingAdjustment.fromlotnoLabel},on:{change:t.OnfromlotnoChange}})],1),a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_tolotno",attrs:{prop:t.PI_tolotno,value:t.M_TN_StrataBillingAdjustment.tolotno,label:t.M_TN_StrataBillingAdjustment.tolotnoLabel},on:{change:t.OntolotnoChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_trxtype",attrs:{prop:t.PI_trxtype,value:t.M_TN_StrataBillingAdjustment.trxtype,label:t.M_TN_StrataBillingAdjustment.trxtypeLabel},on:{change:t.OntrxtypeChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputDateRangeVuex",{ref:"ref_startdate",attrs:{prop:t.PI_startdate,valueFrom:t.M_TN_StrataBillingAdjustment.startdate,valueTo:t.M_TN_StrataBillingAdjustment.enddate},on:{from:t.MdtRange_startdate,to:t.MdtRange_enddate}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputRadioButtonVuex",{ref:"ref_adjustmenttype",attrs:{prop:t.PI_adjustmenttype},on:{input:t.OnadjustmenttypeChange},model:{value:t.M_TN_StrataBillingAdjustment.adjustmenttype,callback:function(e){t.$set(t.M_TN_StrataBillingAdjustment,"adjustmenttype",e)},expression:"M_TN_StrataBillingAdjustment.adjustmenttype"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputRadioButtonVuex",{ref:"ref_incrementdecrementstatus",attrs:{prop:t.PI_incrementdecrementstatus},on:{input:t.OnincrementdecrementstatusChange},model:{value:t.M_TN_StrataBillingAdjustment.incrementdecrementstatus,callback:function(e){t.$set(t.M_TN_StrataBillingAdjustment,"incrementdecrementstatus",e)},expression:"M_TN_StrataBillingAdjustment.incrementdecrementstatus"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_adjustmentvalue",attrs:{prop:t.PI_adjustmentvalue},model:{value:t.M_TN_StrataBillingAdjustment.adjustmentvalue,callback:function(e){t.$set(t.M_TN_StrataBillingAdjustment,"adjustmentvalue",e)},expression:"M_TN_StrataBillingAdjustment.adjustmentvalue"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputRadioButtonVuex",{ref:"ref_chargeto",attrs:{prop:t.PI_chargeto},on:{input:t.OnchargetoChange},model:{value:t.M_TN_StrataBillingAdjustment.chargeto,callback:function(e){t.$set(t.M_TN_StrataBillingAdjustment,"chargeto",e)},expression:"M_TN_StrataBillingAdjustment.chargeto"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSTextAreaVuex",{ref:"ref_remarks",attrs:{prop:t.PI_remarks},on:{input:t.OnremarksChange},model:{value:t.M_TN_StrataBillingAdjustment.remarks,callback:function(e){t.$set(t.M_TN_StrataBillingAdjustment,"remarks",e)},expression:"M_TN_StrataBillingAdjustment.remarks"}})],1)],1)],1)],1),a("ABSTAnalysis",{attrs:{prop:t.PTAnalysis}})],1)],1)],1)],1)],1)])},o=[],i={props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{cInsertKey:"",FormType:"Form",Module:"TN",IEBy:{Input:"",Edit:""},M_TN_StrataBillingAdjustment:{dummy:"",fromlotno:"",tolotno:"",trxtype:"",startdate:"",adjustmenttype:"F",incrementdecrementstatus:"I",adjustmentvalue:"0",chargeto:"R",remarks:""},PI_fromlotno:{dataLookUp:{LookUpCd:"GetLotNoLookUp",ColumnDB:"LotNo",InitialWhere:"SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' AND LotUsage = 'L' AND StrataStatus = 'Y' AND OwnerID IS NOT NULL",ParamWhere:""},cValidate:"required",cName:"fromlotno",cLabel:"From Lot No",cKey:!1,cLabelSize:4,cOrder:1,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"LotNo,Descs"},PI_tolotno:{dataLookUp:{LookUpCd:"GetLotNoLookUp",ColumnDB:"LotNo",InitialWhere:"SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' AND LotUsage = 'L' AND StrataStatus = 'Y' AND OwnerID IS NOT NULL",ParamWhere:""},cValidate:"required",cName:"tolotno",cLabel:"To Lot No",cKey:!1,cLabelSize:4,cOrder:2,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"LotNo,Descs"},PI_trxtype:{dataLookUp:{LookUpCd:"GetLookupCMTransTypeBySubPortfolio",ColumnDB:"TrxType",InitialWhere:"SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' AND MODULECD = 'AR' AND TrxClass='I'",ParamWhere:""},cValidate:"required",cName:"trxtype",cLabel:"Transaction Type",cKey:!1,cLabelSize:4,cOrder:3,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"AR/AR_TransactionTypeSubPortfolioMaintenance",cDisplayColumn:"TrxType,Descs"},PI_startdate:{cValidate:"required",cName:"startdate",cLabel:"Period Date",cLabelSize:4,cOrder:4,cKey:!1,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_adjustmenttype:{cValidate:"required",cName:"adjustmenttype",cId:"rdbadjustmenttype",cRadioOptions:[{text:"Fix Amount",value:"F"},{text:"Percentage",value:"P"}],cRadioDefaultOption:"F",cLabel:"Adjustment Type",cLabelSize:4,cOrder:5,cProtect:!1,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_incrementdecrementstatus:{cValidate:"required",cName:"incrementdecrementstatus",cId:"rdbincrementdecrementstatus",cRadioOptions:[{text:"Increment",value:"I"},{text:"Decrement",value:"D"}],cRadioDefaultOption:"I",cLabel:"Status",cLabelSize:4,cOrder:6,cProtect:!1,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_adjustmentvalue:{cValidate:"required|max:20",cName:"adjustmentvalue",cLabel:"Adjustment Value",cLabelSize:4,cOrder:7,cKey:!1,cType:"numeric",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_chargeto:{cValidate:"required",cName:"chargeto",cId:"rdbchargeto",cRadioOptions:[{text:"Rate",value:"R"},{text:"Billing Amount",value:"A"}],cRadioDefaultOption:"R",cLabel:"Charge To",cLabelSize:4,cOrder:8,cProtect:!1,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_remarks:{cValidate:"",cName:"remarks",cLabel:"Remarks",cLabelSize:4,cOrder:9,cKey:!1,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"}},methods:{OnfromlotnoChange:function(t){var e=this;this.$nextTick(function(){e.M_TN_StrataBillingAdjustment.fromlotno=t.id,e.M_TN_StrataBillingAdjustment.fromlotnoLabel=t.label,e.M_TN_StrataBillingAdjustment.tolotno=t.id,e.M_TN_StrataBillingAdjustment.tolotnoLabel=t.label,e.inputStatus}),this.$forceUpdate()},OntolotnoChange:function(t){var e=this;this.$nextTick(function(){e.M_TN_StrataBillingAdjustment.tolotno=t.id,e.M_TN_StrataBillingAdjustment.tolotnoLabel=t.label,e.inputStatus}),this.$forceUpdate()},OntrxtypeChange:function(t){var e=this;this.$nextTick(function(){e.M_TN_StrataBillingAdjustment.trxtype=t.id,e.M_TN_StrataBillingAdjustment.trxtypeLabel=t.label,e.inputStatus}),this.$forceUpdate()},OnadjustmenttypeChange:function(t){var e=this;this.$nextTick(function(){e.inputStatus}),this.$forceUpdate()},OnincrementdecrementstatusChange:function(t){var e=this;this.$nextTick(function(){e.inputStatus}),this.$forceUpdate()},OnchargetoChange:function(t){var e=this;this.$nextTick(function(){e.inputStatus}),this.$forceUpdate()},OnremarksChange:function(t){var e=this;this.$nextTick(function(){e.inputStatus}),this.$forceUpdate()},setToolbarButton:function(){this.getToolbar().doEdit(!0)},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(t){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(t,e){},rowLink:function(t){this.$refs.modalTest.show()},paramFromParent:function(){},M_Post:function(t){},M_Insert:function(){var t=this,e={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder};this.postJSON(this.getUrlInsert(),e).then(function(e){null!=e&&t.alertSuccess(e.Message).then(function(){t.getToolbar().FormStatus="EDIT",t.getToolbar().ProcessPS(),t.$store.commit("setStatus","view"),t.$store.commit("setEventStatus","Save"),t.FormToMasterPage().ValidasiPage()})})},M_Update:function(){var t=this,e={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,FromLotNo:""==this.M_TN_StrataBillingAdjustment.fromlotno||null==this.M_TN_StrataBillingAdjustment.fromlotno?"NULL":this.M_TN_StrataBillingAdjustment.fromlotno,ToLotNo:""==this.M_TN_StrataBillingAdjustment.tolotno||null==this.M_TN_StrataBillingAdjustment.tolotno?"NULL":this.M_TN_StrataBillingAdjustment.tolotno,TrxType:""==this.M_TN_StrataBillingAdjustment.trxtype||null==this.M_TN_StrataBillingAdjustment.trxtype?"NULL":this.M_TN_StrataBillingAdjustment.trxtype,StartDate:this.M_TN_StrataBillingAdjustment.startdate,EndDate:this.M_TN_StrataBillingAdjustment.enddate,AdjustmentType:this.M_TN_StrataBillingAdjustment.adjustmenttype,IncrementDecrementStatus:this.M_TN_StrataBillingAdjustment.incrementdecrementstatus,AdjustmentValue:this.M_TN_StrataBillingAdjustment.adjustmentvalue,ChargeTo:this.M_TN_StrataBillingAdjustment.chargeto,Remarks:this.M_TN_StrataBillingAdjustment.remarks,UserInput:this.getDataUser().UserId};this.postJSON(this.getUrlUpdate(),e).then(function(e){null!=e&&t.alertSuccess(e.Message).then(function(){t.getToolbar().setButton(!1),t.FormToMasterPage().ValidasiPage()})})},M_ClearForm:function(){this.M_TN_StrataBillingAdjustment={dummy:"",fromlotno:"",tolotno:"",trxtype:"",startdate:"",adjustmenttype:"F",incrementdecrementstatus:"I",adjustmentvalue:"0",chargeto:"R",remarks:""}},M_New:function(){},M_Edit:function(){},M_Delete:function(t){var e=this,a={OptionSeq:this.getOptionSeq().OptionSeq,SubPortfolioCd:this.getDataUser().SubPortfolioCd,PortfolioCd:this.getDataUser().PortfolioCd,LineNo:this.$parent.data.PageOrder,Data:t};this.postJSONMulti(this.getUrlDeleteMulti(),a).then(function(t){if(null!=t){var a="Deleting Data Successfully";e.$parent.resultDelete(a)}})},getDataBy:function(t){var e=this,a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder};this.postEncode(this.getUrlById(),a).then(function(t){if(null!=t){var a=t.Data[0];e.M_TN_StrataBillingAdjustment={dummy:a.dummy,fromlotno:a.fromlotno,tolotno:a.tolotno,trxtype:a.trxtype,descs:a.descs,startdate:a.startdate,adjustmenttype:a.adjustmenttype,incrementdecrementstatus:a.incrementdecrementstatus,adjustmentvalue:a.adjustmentvalue,chargeto:a.chargeto,remarks:a.remarks},e.M_TN_StrataBillingAdjustment.fromlotnoLabel=null!=e.M_TN_StrataBillingAdjustment.fromlotno&&""!=e.M_TN_StrataBillingAdjustment.fromlotno?a.fromlotno:"",e.M_TN_StrataBillingAdjustment.tolotnoLabel=null!=e.M_TN_StrataBillingAdjustment.tolotno&&""!=e.M_TN_StrataBillingAdjustment.tolotno?a.tolotno:"",e.M_TN_StrataBillingAdjustment.trxtypeLabel=null!=e.M_TN_StrataBillingAdjustment.trxtype&&""!=e.M_TN_StrataBillingAdjustment.trxtype?a.trxtype+e.separator+a.descs:"",e.IEBy.Input=a.UserInput,e.IEBy.Edit=a.UserEdit}})},MdtRange_startdate:function(t){this.M_TN_StrataBillingAdjustment.startdate=t},MdtRange_enddate:function(t){this.M_TN_StrataBillingAdjustment.enddate=t}},beforeCreate:function(){},created:function(){this.$store.commit("setFormType","Form"),this.getToolbar().ProcessPS()},beforeMount:function(){},mounted:function(){this.hideSideBarMenu()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},r=i,s=a("2877"),l=Object(s["a"])(r,n,o,!1,null,null,null);l.options.__file="TN_StrataBillingAdjustment.vue";e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d21b299.bb0e73d6.js.map