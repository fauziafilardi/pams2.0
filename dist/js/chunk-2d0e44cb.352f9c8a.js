(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e44cb"],{9042:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ABSListVuex",{attrs:{prop:e.propList,title:e.data.QueryName},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table,refreshColumn:e.$parent.refreshColumn}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[a("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                    Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),a("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),a("b-collapse",{attrs:{id:"collapse1",visible:!0}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[a("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[a("b-row",{staticStyle:{"padding-left":"10px"}},[a("b-col",{attrs:{md:"12",id:"col-left"}},[a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_applicationno",attrs:{prop:e.PI_applicationno},model:{value:e.M_TN_ShopReopen.applicationno,callback:function(t){e.$set(e.M_TN_ShopReopen,"applicationno",t)},expression:"M_TN_ShopReopen.applicationno"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_name",attrs:{prop:e.PI_name},model:{value:e.M_TN_ShopReopen.name,callback:function(t){e.$set(e.M_TN_ShopReopen,"name",t)},expression:"M_TN_ShopReopen.name"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_brandname",attrs:{prop:e.PI_brandname},model:{value:e.M_TN_ShopReopen.brandname,callback:function(t){e.$set(e.M_TN_ShopReopen,"brandname",t)},expression:"M_TN_ShopReopen.brandname"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_lotlist",attrs:{prop:e.PI_lotlist},model:{value:e.M_TN_ShopReopen.lotlist,callback:function(t){e.$set(e.M_TN_ShopReopen,"lotlist",t)},expression:"M_TN_ShopReopen.lotlist"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_marketing",attrs:{prop:e.PI_marketing},model:{value:e.M_TN_ShopReopen.marketing,callback:function(t){e.$set(e.M_TN_ShopReopen,"marketing",t)},expression:"M_TN_ShopReopen.marketing"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_totaloutstanding",attrs:{prop:e.PI_totaloutstanding},model:{value:e.M_TN_ShopReopen.totaloutstanding,callback:function(t){e.$set(e.M_TN_ShopReopen,"totaloutstanding",t)},expression:"M_TN_ShopReopen.totaloutstanding"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_shopclosereason",attrs:{prop:e.PI_shopclosereason},model:{value:e.M_TN_ShopReopen.shopclosereason,callback:function(t){e.$set(e.M_TN_ShopReopen,"shopclosereason",t)},expression:"M_TN_ShopReopen.shopclosereason"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_newoutstanding",attrs:{prop:e.PI_newoutstanding},model:{value:e.M_TN_ShopReopen.newoutstanding,callback:function(t){e.$set(e.M_TN_ShopReopen,"newoutstanding",t)},expression:"M_TN_ShopReopen.newoutstanding"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputDateVuex",{ref:"ref_onopendate",attrs:{prop:e.PI_onopendate},on:{input:e.OnonopendateChange},model:{value:e.M_TN_ShopReopen.onopendate,callback:function(t){e.$set(e.M_TN_ShopReopen,"onopendate",t)},expression:"M_TN_ShopReopen.onopendate"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_reasoncd",attrs:{prop:e.PI_onopenreasoncd,value:e.M_TN_ShopReopen.reasoncd,label:e.M_TN_ShopReopen.reasoncdLabel},on:{change:e.OnonopenreasoncdChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_reasondescs",attrs:{prop:e.PI_onopenreasondescs},model:{value:e.M_TN_ShopReopen.reasondescs,callback:function(t){e.$set(e.M_TN_ShopReopen,"reasondescs",t)},expression:"M_TN_ShopReopen.reasondescs"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSTextAreaVuex",{ref:"ref_remarks",attrs:{prop:e.PI_remarks},on:{input:e.OnremarksChange},model:{value:e.M_TN_ShopReopen.remarks,callback:function(t){e.$set(e.M_TN_ShopReopen,"remarks",t)},expression:"M_TN_ShopReopen.remarks"}})],1)],1)],1)],1),a("ABSTAnalysis",{attrs:{prop:e.PTAnalysis}})],1)],1)],1)],1)],1)],1)},o=[],s=(a("7f7f"),a("ac6a"),a("ade3")),i={props:{PageLevel:"",TabIndex:"",data:""},data:function(){var e;return{cInsertKey:"",FormType:"List",Module:"TN",propList:{initialWhere:"Status ='Y' and SuspendType='S' and SubportfolioCd='"+this.getDataUser().SubPortfolioCd+"'",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_TN_ShopReopen:(e={subportfoliocd:this.getDataUser().SubPortfolioCd,applicationno:"",sequenceno:0,suspendtype:"",outstandingamt:0,cutclosereasoncd:"",onopentransdate:"",onopenreasoncd:"",onopenreasondescs:"",status:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,cutclosedate:"",reasondescs:"",reasoncd:"",name:"",marketingagent:"",cutclosereasondescs:"",brandname:"",lotlist:"",remainingamt:0,lastupdatestamp:0,onopendate:this.getToday(),rowid:0,marketing:""},Object(s["a"])(e,"remainingamt","0"),Object(s["a"])(e,"totaloutstanding","0"),Object(s["a"])(e,"shopclosereason",""),Object(s["a"])(e,"newoutstanding","0"),e),PI_applicationno:{cValidate:"",cName:"applicationno",cLabel:"Application No",cLabelSize:4,cOrder:0,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_name:{cValidate:"",cName:"name",cLabel:"Customer Name",cLabelSize:4,cOrder:0,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_brandname:{cValidate:"",cName:"brandname",cLabel:"Brand Name",cLabelSize:4,cOrder:0,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_lotlist:{cValidate:"",cName:"lotlist",cLabel:"Lot No",cLabelSize:4,cOrder:0,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_marketing:{cValidate:"",cName:"marketing",cLabel:"Marketing",cLabelSize:4,cOrder:0,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_totaloutstanding:{cValidate:"",cName:"totaloutstanding",cLabel:"Total Outstanding",cLabelSize:4,cOrder:0,cKey:!0,cType:"numeric",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_shopclosereason:{cValidate:"",cName:"shopclosereason",cLabel:"Shop Close Reason",cLabelSize:4,cOrder:0,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_newoutstanding:{cValidate:"",cName:"newoutstanding",cLabel:"New Outstanding",cLabelSize:4,cOrder:1,cKey:!1,cType:"numeric",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_onopendate:{cValidate:"required",cName:"onopendate",cLabel:"On Open Date",cLabelSize:4,cOrder:2,cKey:!1,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_onopenreasoncd:{dataLookUp:{LookUpCd:"GetLookupCMReason",ColumnDB:"ReasonCd",InitialWhere:"",ParamWhere:""},cValidate:"required",cName:"reasoncd",cLabel:"Reason Code",cKey:!1,cLabelSize:4,cOrder:3,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"CM/CM_Reason",cDisplayColumn:"ReasonCd,Descs"},PI_onopenreasondescs:{cValidate:"",cName:"reasondescs",cLabel:"Reason Description",cLabelSize:4,cOrder:4,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_remarks:{cValidate:"",cName:"remarks",cLabel:"Remarks",cLabelSize:4,cOrder:5,cKey:!1,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder,cProtect:!1}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage1Data}},methods:{OnonopendateChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},OnonopenreasoncdChange:function(e){var t=this;this.$nextTick(function(){t.M_TN_ShopReopen.reasoncd=e.id,t.M_TN_ShopReopen.reasoncdLabel=e.id,t.M_TN_ShopReopen.reasondescs=e.Descs,t.inputStatus}),this.$forceUpdate()},OnremarksChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},setToolbarButton:function(){this.getToolbar().statusFunction[0].disabled=!0,this.getToolbar().statusFunction[2].disabled=!0},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,t){},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){},M_Post:function(e){},M_Insert:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder};this.postJSON(this.getUrlInsert(),t).then(function(t){null!=t&&e.$parent.resultInsert(t.Message)})},M_Update:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,ApplicationNo:this.M_TN_ShopReopen.applicationno,SuspendType:"E",NewOutstanding:this.M_TN_ShopReopen.remainingamt,OnOpenTransDate:""==this.M_TN_ShopReopen.onopentransdate||null==this.M_TN_ShopReopen.onopentransdate?"NULL":this.M_TN_ShopReopen.onopentransdate,OnOpenReasonCd:""==this.M_TN_ShopReopen.reasoncd||null==this.M_TN_ShopReopen.reasoncd?"NULL":this.M_TN_ShopReopen.reasoncd,OnOpenReasonDescs:this.M_TN_ShopReopen.reasondescs,OnOpenBy:this.getDataUser().SubPortfolioCd,OnOpenDate:this.M_TN_ShopReopen.onopendate,Status:"C",Remarks:this.M_TN_ShopReopen.remarks,UserEdit:this.getDataUser().UserId,LastUpdateStamp:this.M_TN_ShopReopen.lastupdatestamp};this.postJSON(this.getUrlUpdate(),t).then(function(t){null!=t&&e.$parent.resultUpdate(t.Message)})},M_ClearForm:function(){var e;this.M_TN_ShopReopen=(e={subportfoliocd:this.getDataUser().SubPortfolioCd,applicationno:"",sequenceno:0,suspendtype:"",outstandingamt:0,cutclosereasoncd:"",onopentransdate:"",onopenreasoncd:"",onopenreasondescs:"",status:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,cutclosedate:"",reasondescs:"",reasoncd:"",name:"",marketingagent:"",cutclosereasondescs:"",brandname:"",lotlist:"",remainingamt:0,lastupdatestamp:0,onopendate:"",rowid:0,marketing:""},Object(s["a"])(e,"remainingamt","0"),Object(s["a"])(e,"onopendate",this.getToday()),Object(s["a"])(e,"totaloutstanding","0"),Object(s["a"])(e,"shopclosereason",""),Object(s["a"])(e,"newoutstanding","0"),e)},M_New:function(){this.$refs.ref_newoutstanding.focus()},M_Edit:function(){this.$refs.ref_newoutstanding.focus()},M_Delete:function(e){var t=this,a=this.FormToABSList().getRowSelected(),n=[];a.forEach(function(e){n.push({})});var o={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:n};this.postJSONMulti(this.getUrlNewDeleteMulti(),o).then(function(e){null!=e&&t.$parent.resultDelete()})},getDataBy:function(e){var t=this,a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,applicationno:e.ApplicationNo};this.postEncode(this.getUrlById(),a).then(function(a){if(null!=a){var n=a.Data[0];t.M_TN_ShopReopen={subportfoliocd:n.subportfoliocd,applicationno:n.applicationno,sequenceno:n.sequenceno,suspendtype:n.suspendtype,outstandingamt:t.isCurrency(n.outstandingamt,t.decimal),cutclosereasoncd:n.cutclosereasoncd,onopentransdate:n.onopentransdate,onopenreasoncd:n.onopenreasoncd,onopenreasondescs:n.onopenreasondescs,status:n.status,remarks:n.remarks,userinput:n.userinput,useredit:n.useredit,cutclosedate:n.cutclosedate,reasondescs:n.reasondescs,reasoncd:n.reasoncd,name:n.name,marketingagent:n.marketingagent,cutclosereasondescs:n.cutclosereasondescs,brandname:n.brandname,lotlist:n.lotlist,remainingamt:t.isCurrency(n.remainingamt,t.decimal),lastupdatestamp:e.LastUpdateStamp,rowid:n.rowid,marketing:n.marketing,onopendate:n.onopendate,totaloutstanding:t.isCurrency(n.outstandingamt,t.decimal),shopclosereason:n.cutclosereasondescs,newoutstanding:t.isCurrency(n.remainingamt,t.decimal)},t.M_TN_ShopReopen.reasoncdLabel=null!=t.M_TN_ShopReopen.reasoncd&&""!=t.M_TN_ShopReopen.reasoncd?n.reasoncd:"",t.IEBy.Input=n.userinput,t.IEBy.Edit=n.useredit}})}},beforeCreate:function(){},created:function(){this.$store.commit("setFormType","List"),this.getToolbar().ProcessPS()},beforeMount:function(){},mounted:function(){this.hideSideBarMenu(),this.FormToABSList().doGetList("","eb_getList")},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},r=i,c=a("2877"),p=Object(c["a"])(r,n,o,!1,null,null,null);p.options.__file="TN_ShopReopen.vue";t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0e44cb.352f9c8a.js.map