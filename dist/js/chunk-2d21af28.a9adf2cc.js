(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21af28"],{be4c:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[a("span",{directives:[{name:"show",rawName:"v-show",value:t.IEBy.Input&&t.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[t._v("\n                Input By : "+t._s(t.IEBy.Input)+" | Edit By : "+t._s(t.IEBy.Edit)+" "),a("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),a("b-collapse",{attrs:{id:"collapse1",visible:!0}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[a("b-form",{attrs:{"data-vv-scope":"FormScope_"+t.PageLevel+"_"+t.TabIndex,"data-vv-value-path":"FormScope_"+t.PageLevel+"_"+t.TabIndex}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{attrs:{md:"12",id:"col-left"}},[a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_fromapplicationno",attrs:{prop:t.PI_fromapplicationno,value:t.M_TN_BillingDateAdjustment.fromapplicationno,label:t.M_TN_BillingDateAdjustment.fromapplicationnoLabel},on:{change:t.OnfromapplicationnoChange}})],1),a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_toapplicationno",attrs:{prop:t.PI_toapplicationno,value:t.M_TN_BillingDateAdjustment.toapplicationno,label:t.M_TN_BillingDateAdjustment.toapplicationnoLabel},on:{change:t.OntoapplicationnoChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_trxtypefrom",attrs:{prop:t.PI_trxtypefrom,value:t.M_TN_BillingDateAdjustment.trxtypefrom,label:t.M_TN_BillingDateAdjustment.trxtypefromLabel},on:{change:t.OntrxtypefromChange}})],1),a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_trxtypeto",attrs:{prop:t.PI_trxtypeto,value:t.M_TN_BillingDateAdjustment.trxtypeto,label:t.M_TN_BillingDateAdjustment.trxtypetoLabel},on:{change:t.OntrxtypetoChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputDateRangeVuex",{ref:"ref_startdate",attrs:{prop:t.PI_startdate,valueFrom:t.M_TN_BillingDateAdjustment.startdate,valueTo:t.M_TN_BillingDateAdjustment.enddate},on:{from:t.MdtRange_startdate,to:t.MdtRange_enddate}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputDateVuex",{ref:"ref_targetbillingdate",attrs:{prop:t.PI_targetbillingdate},on:{input:t.OntargetbillingdateChange},model:{value:t.M_TN_BillingDateAdjustment.targetbillingdate,callback:function(e){t.$set(t.M_TN_BillingDateAdjustment,"targetbillingdate",e)},expression:"M_TN_BillingDateAdjustment.targetbillingdate"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_targetcreditterms",attrs:{prop:t.PI_targetcreditterms,label:t.M_TN_BillingDateAdjustment.targetcredittermsLabel},on:{change:t.OntargetcredittermsChange},model:{value:t.M_TN_BillingDateAdjustment.targetcreditterms,callback:function(e){t.$set(t.M_TN_BillingDateAdjustment,"targetcreditterms",e)},expression:"M_TN_BillingDateAdjustment.targetcreditterms"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputDateVuex",{ref:"ref_targetduedate",attrs:{prop:t.PI_targetduedate},on:{input:t.OntargetduedateChange},model:{value:t.M_TN_BillingDateAdjustment.targetduedate,callback:function(e){t.$set(t.M_TN_BillingDateAdjustment,"targetduedate",e)},expression:"M_TN_BillingDateAdjustment.targetduedate"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSTextAreaVuex",{ref:"ref_remarks",attrs:{prop:t.PI_remarks},model:{value:t.M_TN_BillingDateAdjustment.remarks,callback:function(e){t.$set(t.M_TN_BillingDateAdjustment,"remarks",e)},expression:"M_TN_BillingDateAdjustment.remarks"}})],1)],1)],1)],1),a("ABSTAnalysis",{attrs:{prop:t.PTAnalysis}})],1)],1)],1)],1)],1)])},n=[],o={props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{cInsertKey:"",FormType:"Form",Module:"TN",IEBy:{Input:"",Edit:""},M_TN_BillingDateAdjustment:{dummy:"",fromapplicationno:"",toapplicationno:"",trxtypefrom:"",trxtypeto:"",startdate:"",enddate:"",targetbillingdate:"",targetcreditterms:"",dueday:0,targetduedate:"",remarks:"",userinput:""},PI_fromapplicationno:{dataLookUp:{LookUpCd:"GetLookupTNApplicationNo ",ColumnDB:"ApplicationNo",InitialWhere:"SubPortfolioCd='"+this.getDataUser().SubPortfolioCd+"' AND Status = 'A' AND ISNULL(DebtorCd, '') <> '' AND RED >= CAST(GETDATE() as date) ",ParamWhere:"",SourceField:"ApplicationNo,ContractNo=LOONo,BusinessName,Name,TimeEdit",DisplayLookUp:"ApplicationNo"},cValidate:"required",cName:"fromapplicationno",cLabel:"From Application No",cKey:!1,cLabelSize:4,cOrder:1,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"ApplicationNo"},PI_toapplicationno:{dataLookUp:{LookUpCd:"GetLookupTNApplicationNo",ColumnDB:"ApplicationNo",InitialWhere:"SubPortfolioCd='"+this.getDataUser().SubPortfolioCd+"' AND Status = 'A' AND ISNULL(DebtorCd, '') <> '' AND RED >= CAST(GETDATE() as date) ",ParamWhere:"",SourceField:"ApplicationNo,ContractNo=LOONo,BusinessName,Name,TimeEdit",DisplayLookUp:"ApplicationNo"},cValidate:"required",cName:"toapplicationno",cLabel:"To Application No",cKey:!1,cLabelSize:4,cOrder:2,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"ApplicationNo"},PI_trxtypefrom:{dataLookUp:{LookUpCd:"GetLookupCMTransTypeBySubPortfolio",ColumnDB:"TrxType",InitialWhere:"SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' AND MODULECD = 'AR' AND TrxClass='I'",ParamWhere:""},cValidate:"",cName:"trxtypefrom",cLabel:"From Transaction Type",cKey:!1,cLabelSize:4,cOrder:3,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"TransactionType,Descs"},PI_trxtypeto:{dataLookUp:{LookUpCd:"GetLookupCMTransTypeBySubPortfolio",ColumnDB:"TrxType",InitialWhere:"SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' AND MODULECD = 'AR' AND TrxClass='I'",ParamWhere:""},cValidate:"",cName:"trxtypeto",cLabel:"To Transaction Type",cKey:!1,cLabelSize:4,cOrder:4,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"TransactionType,Descs"},PI_startdate:{cValidate:"required",cName:"startdate",cLabel:"Date Period",cLabelSize:4,cOrder:5,cKey:!1,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_targetbillingdate:{cValidate:"",cName:"targetbillingdate",cLabel:"Target Billing Date",cLabelSize:4,cOrder:6,cKey:!1,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_targetcreditterms:{dataLookUp:{LookUpCd:"GetLookupCMCreditTerms",ColumnDB:"CreditTermsCd",InitialWhere:"",ParamWhere:""},cValidate:"required",cName:"targetcreditterms",cLabel:"Target Credit Terms",cKey:!1,cLabelSize:4,cOrder:7,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"CM/CM_CreditTerms",cDisplayColumn:"CreditTermsCd,Descs"},PI_targetduedate:{cValidate:"",cName:"targetduedate",cLabel:"Target Due Date",cLabelSize:4,cOrder:8,cKey:!1,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_remarks:{cValidate:"",cName:"remarks",cLabel:"Remarks",cLabelSize:4,cOrder:9,cKey:!1,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"}},methods:{OnfromapplicationnoChange:function(t){var e=this;this.$nextTick(function(){e.M_TN_BillingDateAdjustment.fromapplicationno=t.id,e.M_TN_BillingDateAdjustment.fromapplicationnoLabel=t.label,"VIEW"!=e.inputStatus&&(e.M_TN_BillingDateAdjustment.toapplicationno=t.id,e.M_TN_BillingDateAdjustment.toapplicationnoLabel=t.label)}),this.$forceUpdate()},OntoapplicationnoChange:function(t){var e=this;this.$nextTick(function(){e.M_TN_BillingDateAdjustment.toapplicationno=t.id,e.M_TN_BillingDateAdjustment.toapplicationnoLabel=t.label,e.inputStatus}),this.$forceUpdate()},OntrxtypefromChange:function(t){var e=this;this.$nextTick(function(){e.M_TN_BillingDateAdjustment.trxtypefrom=t.id,e.M_TN_BillingDateAdjustment.trxtypefromLabel=t.label,"VIEW"!=e.inputStatus&&(e.M_TN_BillingDateAdjustment.trxtypeto=t.id,e.M_TN_BillingDateAdjustment.trxtypetoLabel=t.label)}),this.$forceUpdate()},OntrxtypetoChange:function(t){var e=this;this.$nextTick(function(){e.M_TN_BillingDateAdjustment.trxtypeto=t.id,e.M_TN_BillingDateAdjustment.trxtypetoLabel=t.label,e.inputStatus}),this.$forceUpdate()},OntargetbillingdateChange:function(t){var e=this;this.$nextTick(function(){"VIEW"!=e.inputStatus&&t&&""!=t&&(e.M_TN_BillingDateAdjustment.dueday&&""!=e.M_TN_BillingDateAdjustment.dueday?e.M_TN_BillingDateAdjustment.targetduedate=e.dateAdd2("d",t,e.M_TN_BillingDateAdjustment.dueday):e.M_TN_BillingDateAdjustment.targetduedate=t)}),this.$forceUpdate()},OntargetcredittermsChange:function(t){var e=this;this.$nextTick(function(){e.M_TN_BillingDateAdjustment.targetcreditterms=t.id,e.M_TN_BillingDateAdjustment.targetcredittermsLabel=t.label,"VIEW"!=e.inputStatus&&e.FnGetCreditTermsData(t.id).then(function(t){if(null!=t){var a=t[0];e.M_TN_BillingDateAdjustment.dueday=a.Dueday,a.Dueday&&""!=a.Dueday&&e.M_TN_BillingDateAdjustment.targetbillingdate&&""!=e.M_TN_BillingDateAdjustment.targetbillingdate&&(e.M_TN_BillingDateAdjustment.targetduedate=e.dateAdd2("d",e.M_TN_BillingDateAdjustment.targetbillingdate,e.M_TN_BillingDateAdjustment.dueday))}})}),this.$forceUpdate()},OntargetduedateChange:function(t){var e=this;this.$nextTick(function(){e.inputStatus}),this.$forceUpdate()},setToolbarButton:function(){this.getToolbar().doEdit(!0)},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(t){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(t,e){},rowLink:function(t){this.$refs.modalTest.show()},paramFromParent:function(){},M_Post:function(t){},M_Insert:function(){this.M_Update()},M_Update:function(){var t=this,e={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,ApplicationNoFrom:""==this.M_TN_BillingDateAdjustment.fromapplicationno||null==this.M_TN_BillingDateAdjustment.fromapplicationno?"NULL":this.M_TN_BillingDateAdjustment.fromapplicationno,ApplicationNoTo:""==this.M_TN_BillingDateAdjustment.toapplicationno||null==this.M_TN_BillingDateAdjustment.toapplicationno?"NULL":this.M_TN_BillingDateAdjustment.toapplicationno,TrxTypeFrom:this.M_TN_BillingDateAdjustment.trxtypefrom,TrxTypeTo:this.M_TN_BillingDateAdjustment.trxtypeto,StartDate:this.M_TN_BillingDateAdjustment.startdate,EndDate:this.M_TN_BillingDateAdjustment.enddate,TargetBillingDate:this.M_TN_BillingDateAdjustment.targetbillingdate,TargetCreditTermsCd:""==this.M_TN_BillingDateAdjustment.targetcreditterms||null==this.M_TN_BillingDateAdjustment.targetcreditterms?"NULL":this.M_TN_BillingDateAdjustment.targetcreditterms,TargetDueDate:this.M_TN_BillingDateAdjustment.targetduedate,Remarks:this.M_TN_BillingDateAdjustment.remarks,UserInput:this.getDataUser().UserId};this.postJSON(this.getUrlUpdate(),e).then(function(e){null!=e&&t.alertSuccess(e.Message).then(function(){t.M_ClearForm(),t.$store.commit("setStatus","view"),t.getToolbar().doEdit()})})},M_ClearForm:function(){this.M_TN_BillingDateAdjustment={dummy:"",fromapplicationno:"",toapplicationno:"",trxtypefrom:"",trxtypeto:"",startdate:"",enddate:"",targetbillingdate:"",targetcreditterms:"",dueday:0,targetduedate:"",remarks:"",userinput:""}},M_New:function(){},M_Edit:function(){},M_Delete:function(t){},getDataBy:function(t){this.M_ClearForm(),this.$store.commit("setStatus","view"),this.getToolbar().doEdit()},MdtRange_startdate:function(t){this.M_TN_BillingDateAdjustment.startdate=t,this.M_TN_BillingDateAdjustment.enddate=t},MdtRange_enddate:function(t){this.M_TN_BillingDateAdjustment.enddate=t}},beforeCreate:function(){},created:function(){this.$store.commit("setFormType","Form"),this.getToolbar().ProcessPS()},beforeMount:function(){},mounted:function(){this.hideSideBarMenu()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},r=o,l=a("2877"),s=Object(l["a"])(r,i,n,!1,null,null,null);s.options.__file="TN_BillingDateAdjustment.vue";e["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2d21af28.a9adf2cc.js.map