(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c7ea3"],{"533b":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ABSListVuex",{attrs:{prop:e.propList,title:e.data.QueryName},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table,refreshColumn:e.$parent.refreshColumn}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[a("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                    Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),a("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),a("b-collapse",{attrs:{id:"collapse1",visible:!0}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[a("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[a("b-row",{staticStyle:{"padding-left":"10px"}},[a("b-col",{attrs:{md:"12",id:"col-left"}},[a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_applicationno",attrs:{prop:e.PI_applicationno},model:{value:e.M_TN_TurnElectricity.applicationno,callback:function(t){e.$set(e.M_TN_TurnElectricity,"applicationno",t)},expression:"M_TN_TurnElectricity.applicationno"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_name",attrs:{prop:e.PI_name},model:{value:e.M_TN_TurnElectricity.name,callback:function(t){e.$set(e.M_TN_TurnElectricity,"name",t)},expression:"M_TN_TurnElectricity.name"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_brandname",attrs:{prop:e.PI_brandname},model:{value:e.M_TN_TurnElectricity.brandname,callback:function(t){e.$set(e.M_TN_TurnElectricity,"brandname",t)},expression:"M_TN_TurnElectricity.brandname"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_lotlist",attrs:{prop:e.PI_lotlist},model:{value:e.M_TN_TurnElectricity.lotlist,callback:function(t){e.$set(e.M_TN_TurnElectricity,"lotlist",t)},expression:"M_TN_TurnElectricity.lotlist"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_marketing",attrs:{prop:e.PI_marketing},model:{value:e.M_TN_TurnElectricity.marketing,callback:function(t){e.$set(e.M_TN_TurnElectricity,"marketing",t)},expression:"M_TN_TurnElectricity.marketing"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_outstandingamt",attrs:{prop:e.PI_outstandingamt},model:{value:e.M_TN_TurnElectricity.outstandingamt,callback:function(t){e.$set(e.M_TN_TurnElectricity,"outstandingamt",t)},expression:"M_TN_TurnElectricity.outstandingamt"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_cutclosereasondescs",attrs:{prop:e.PI_cutclosereasondescs},model:{value:e.M_TN_TurnElectricity.cutclosereasondescs,callback:function(t){e.$set(e.M_TN_TurnElectricity,"cutclosereasondescs",t)},expression:"M_TN_TurnElectricity.cutclosereasondescs"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_remainingamt",attrs:{prop:e.PI_remainingamt},model:{value:e.M_TN_TurnElectricity.remainingamt,callback:function(t){e.$set(e.M_TN_TurnElectricity,"remainingamt",t)},expression:"M_TN_TurnElectricity.remainingamt"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputDateVuex",{ref:"ref_onopentransdate",attrs:{prop:e.PI_onopentransdate},on:{input:e.OnonopentransdateChange},model:{value:e.M_TN_TurnElectricity.onopentransdate,callback:function(t){e.$set(e.M_TN_TurnElectricity,"onopentransdate",t)},expression:"M_TN_TurnElectricity.onopentransdate"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_reasoncd",attrs:{prop:e.PI_reasoncd,value:e.M_TN_TurnElectricity.reasoncd,label:e.M_TN_TurnElectricity.reasoncdLabel},on:{change:e.OnreasoncdChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_reasondescs",attrs:{prop:e.PI_reasondescs},model:{value:e.M_TN_TurnElectricity.reasondescs,callback:function(t){e.$set(e.M_TN_TurnElectricity,"reasondescs",t)},expression:"M_TN_TurnElectricity.reasondescs"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSTextAreaVuex",{ref:"ref_remarks",attrs:{prop:e.PI_remarks},on:{input:e.OnremarksChange},model:{value:e.M_TN_TurnElectricity.remarks,callback:function(t){e.$set(e.M_TN_TurnElectricity,"remarks",t)},expression:"M_TN_TurnElectricity.remarks"}})],1)],1)],1)],1),a("ABSTAnalysis",{attrs:{prop:e.PTAnalysis}})],1)],1)],1)],1)],1)],1)},i=[],r=(a("7f7f"),a("ac6a"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{cInsertKey:"",FormType:"List",Module:"TN",propList:{initialWhere:"Status ='Y' and SuspendType='E' and SubportfolioCd='"+this.getDataUser().SubPortfolioCd+"'",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_TN_TurnElectricity:{subportfoliocd:this.getDataUser().SubPortfolioCd,applicationno:"",sequenceno:0,suspendtype:"",outstandingamt:0,cutclosereasoncd:"",onopentransdate:"",onopenreasoncd:"",onopenreasondescs:"",status:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,cutclosedate:"",reasondescs:"",reasoncd:"",name:"",marketingagent:"",cutclosereasondescs:"",brandname:"",lotlist:"",onopendate:this.getToday(),remainingamt:"0",lastupdatestamp:0,rowid:0,marketing:"",totaloutstanding:"0"},PI_applicationno:{cValidate:"",cName:"applicationno",cLabel:"Application No",cLabelSize:4,cOrder:0,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_name:{cValidate:"",cName:"name",cLabel:"Customer Name",cLabelSize:4,cOrder:0,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_brandname:{cValidate:"",cName:"brandname",cLabel:"Brand name",cLabelSize:4,cOrder:0,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_lotlist:{cValidate:"",cName:"lotlist",cLabel:"Lot No",cLabelSize:4,cOrder:0,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_marketing:{cValidate:"",cName:"marketing",cLabel:"Marketing",cLabelSize:4,cOrder:0,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_outstandingamt:{cValidate:"",cName:"outstandingamt",cLabel:"Total Outstanding",cLabelSize:4,cOrder:0,cKey:!0,cType:"numeric",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_cutclosereasondescs:{cValidate:"",cName:"cutclosereasondescs",cLabel:"Cut of Reason Descs",cLabelSize:4,cOrder:0,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_remainingamt:{cValidate:"",cName:"remainingamt",cLabel:"New Outstanding",cLabelSize:4,cOrder:1,cKey:!1,cType:"numeric",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_onopentransdate:{cValidate:"",cName:"onopentransdate",cLabel:"Date",cLabelSize:4,cOrder:2,cKey:!1,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_reasoncd:{dataLookUp:{LookUpCd:"GetLookupCMReason",ColumnDB:"ReasonCd",InitialWhere:"",ParamWhere:""},cValidate:"required",cName:"reasoncd",cLabel:"Reason",cKey:!1,cLabelSize:4,cOrder:3,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"CM/CM_Reason",cDisplayColumn:"ReasonCd,Descs"},PI_reasondescs:{cValidate:"required|max:150",cName:"reasondescs",cLabel:"Reason Description",cLabelSize:4,cOrder:4,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_remarks:{cValidate:"",cName:"remarks",cLabel:"Remarks",cLabelSize:4,cOrder:5,cKey:!1,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder,cProtect:!1}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage1Data}},methods:{OnonopentransdateChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},OnreasoncdChange:function(e){var t=this;this.$nextTick(function(){t.M_TN_TurnElectricity.reasoncd=e.id,t.M_TN_TurnElectricity.reasoncdLabel=e.label,t.M_TN_TurnElectricity.reasondescs=e.Descs,t.inputStatus}),this.$forceUpdate()},OnremarksChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},setToolbarButton:function(){this.getToolbar().statusFunction[0].disabled=!0,this.getToolbar().statusFunction[2].disabled=!0},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,t){},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){},M_Post:function(e){},M_Insert:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder};this.postJSON(this.getUrlInsert(),t).then(function(t){null!=t&&e.$parent.resultInsert(t.Message)})},M_Update:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,ApplicationNo:this.M_TN_TurnElectricity.applicationno,SuspendType:"E",NewOutstanding:this.M_TN_TurnElectricity.remainingamt,OnOpenTransDate:""==this.M_TN_TurnElectricity.onopentransdate||null==this.M_TN_TurnElectricity.onopentransdate?"NULL":this.M_TN_TurnElectricity.onopentransdate,OnOpenReasonCd:this.M_TN_TurnElectricity.onopenreasoncd,OnOpenReasonDescs:this.M_TN_TurnElectricity.onopenreasondescs,OnOpenBy:this.getDataUser().SubPortfolioCd,OnOpenDate:this.M_TN_TurnElectricity.onopendate,Status:"C",Remarks:this.M_TN_TurnElectricity.remarks,UserEdit:this.getDataUser().UserId,LastUpdateStamp:this.M_TN_TurnElectricity.lastupdatestamp};this.postJSON(this.getUrlUpdate(),t).then(function(t){null!=t&&e.$parent.resultUpdate(t.Message)})},M_ClearForm:function(){this.M_TN_TurnElectricity={subportfoliocd:this.getDataUser().SubPortfolioCd,applicationno:"",sequenceno:0,suspendtype:"",outstandingamt:0,cutclosereasoncd:"",onopentransdate:"",onopenreasoncd:"",onopenreasondescs:"",status:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,cutclosedate:"",reasondescs:"",reasoncd:"",name:"",marketingagent:"",cutclosereasondescs:"",brandname:"",lotlist:"",onopendate:this.getToday(),remainingamt:"0",lastupdatestamp:0,rowid:0,marketing:"",totaloutstanding:"0"}},M_New:function(){this.$refs.ref_remainingamt.focus()},M_Edit:function(){this.$refs.ref_remainingamt.focus()},M_Delete:function(e){var t=this,a=this.FormToABSList().getRowSelected(),n=[];a.forEach(function(e){n.push({})});var i={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:n};this.postJSONMulti(this.getUrlNewDeleteMulti(),i).then(function(e){null!=e&&t.$parent.resultPost()})},getDataBy:function(e){var t=this,a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,applicationno:e.ApplicationNo};this.postEncode(this.getUrlById(),a).then(function(a){if(null!=a){var n=a.Data[0];t.M_TN_TurnElectricity={subportfoliocd:n.subportfoliocd,applicationno:n.applicationno,sequenceno:n.sequenceno,suspendtype:n.suspendtype,outstandingamt:t.isCurrency(n.outstandingamt,t.decimal),cutclosereasoncd:n.cutclosereasoncd,onopentransdate:n.onopentransdate,onopenreasoncd:n.onopenreasoncd,onopenreasondescs:n.onopenreasondescs,status:n.status,remarks:n.remarks,userinput:n.userinput,useredit:n.useredit,cutclosedate:n.cutclosedate,reasondescs:n.reasondescs,reasoncd:n.reasoncd,name:n.name,marketingagent:n.marketingagent,cutclosereasondescs:n.cutclosereasondescs,brandname:n.brandname,lotlist:n.lotlist,remainingamt:t.isCurrency(n.remainingamt,t.decimal),lastupdatestamp:e.LastUpdateStamp,rowid:n.rowid,onopendate:t.getToday(n.onopendate),marketing:n.marketing,totaloutstanding:n.totaloutstanding},t.M_TN_TurnElectricity.reasoncdLabel=null!=t.M_TN_TurnElectricity.reasoncd?n.reasoncd:"",t.IEBy.Input=n.userinput,t.IEBy.Edit=n.useredit}})}},beforeCreate:function(){},created:function(){this.$store.commit("setFormType","List"),this.getToolbar().ProcessPS()},beforeMount:function(){},mounted:function(){this.hideSideBarMenu(),this.FormToABSList().doGetList("","eb_getList")},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),s=r,o=a("2877"),c=Object(o["a"])(s,n,i,!1,null,null,null);c.options.__file="TN_TurnElectricity.vue";t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0c7ea3.03f989e7.js.map