(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d7e55"],{7985:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ABSListVuex",{attrs:{prop:e.propList,title:e.data.QueryName},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table,refreshColumn:e.$parent.refreshColumn,checkboxChecked:e.$parent.checkboxChecked}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[n("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[n("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                    Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),n("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),n("b-collapse",{attrs:{id:"collapse1",visible:!0}},[n("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[n("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[n("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[n("b-row",{staticStyle:{"padding-left":"10px"}},[n("b-col",{attrs:{md:"12",id:"col-left"}},[n("b-row",[n("b-col",{attrs:{md:"6"}},[n("ABSinputTextVuex",{ref:"ref_eventcd",attrs:{prop:e.PI_eventcd},model:{value:e.M_SM_Event.eventcd,callback:function(t){e.$set(e.M_SM_Event,"eventcd",t)},expression:"M_SM_Event.eventcd"}})],1)],1),n("b-row",[n("b-col",{attrs:{md:"6"}},[n("ABSinputTextVuex",{ref:"ref_eventname",attrs:{prop:e.PI_eventname},model:{value:e.M_SM_Event.eventname,callback:function(t){e.$set(e.M_SM_Event,"eventname",t)},expression:"M_SM_Event.eventname"}})],1)],1),n("b-row",[n("b-col",{attrs:{md:"6"}},[n("ABSinputDateVuex",{ref:"ref_eventdate",attrs:{prop:e.PI_eventdate},on:{input:e.OneventdateChange},model:{value:e.M_SM_Event.eventdate,callback:function(t){e.$set(e.M_SM_Event,"eventdate",t)},expression:"M_SM_Event.eventdate"}})],1)],1),n("b-row",[n("b-col",{attrs:{md:"6"}},[n("ABSinputTextVuex",{ref:"ref_totalunitsold",attrs:{prop:e.PI_totalunitsold},model:{value:e.M_SM_Event.totalunitsold,callback:function(t){e.$set(e.M_SM_Event,"totalunitsold",t)},expression:"M_SM_Event.totalunitsold"}})],1)],1),n("b-row",[n("b-col",{attrs:{md:"6"}},[n("ABSInputSelectList",{ref:"ref_subsequentevent",attrs:{prop:e.PI_subsequentevent,value:e.M_SM_Event.subsequentevent,label:e.M_SM_Event.subsequenteventLabel},on:{change:e.OnsubsequenteventChange}})],1)],1),n("b-row",[n("b-col",{attrs:{md:"6"}},[n("ABSInputSelectList",{ref:"ref_cluster",attrs:{prop:e.PI_cluster,value:e.M_SM_Event.cluster,label:e.M_SM_Event.clusterLabel},on:{change:e.OnclusterChange}})],1)],1),n("b-row",[n("b-col",{attrs:{md:"6"}},[n("ABSTextAreaVuex",{ref:"ref_remarks",attrs:{prop:e.PI_remarks},on:{input:e.OnremarksChange},model:{value:e.M_SM_Event.remarks,callback:function(t){e.$set(e.M_SM_Event,"remarks",t)},expression:"M_SM_Event.remarks"}})],1)],1)],1)],1),n("ABSTAnalysis",{attrs:{prop:e.PTAnalysis}})],1)],1)],1)],1)],1)],1)},s=[],i=(n("ac6a"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{cInsertKey:"",FormType:"List",Module:"SM",propList:{initialWhere:"",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_SM_Event:{cluster:"",clusterdescs:"",eventcd:"",eventdate:"",eventname:"",lastupdatestamp:0,remarks:"",status:"",subportfoliocd:"",subsequentevent:"",subsequenteventdescs:"",timeedit:"",timeinput:"",totalunitsold:"",useredit:this.getDataUser().UserId,userinput:"",rowid:""},PI_eventcd:{cValidate:"required|max:10",cName:"eventcd",cLabel:"Kode Event",cLabelSize:4,cOrder:1,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_eventname:{cValidate:"required|max:40",cName:"eventname",cLabel:"Nama Event",cLabelSize:4,cOrder:2,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_eventdate:{cValidate:"required",cName:"eventdate",cLabel:"Tanggal Event",cLabelSize:4,cOrder:3,cKey:!1,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_totalunitsold:{cValidate:"",cName:"totalunitsold",cLabel:"Jumlah Unit Terjual",cLabelSize:4,cOrder:4,cKey:!1,cType:"numeric",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_subsequentevent:{dataLookUp:{LookUpCd:"GetLookupEvent",ColumnDB:"EventCd",InitialWhere:"SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' AND STATUS='N'",ParamWhere:"",SourceField:"",DisplayLookup:"EventCd,EventName"},cValidate:"",cName:"subsequentevent",cLabel:"Event Berikutnya",cKey:!1,cLabelSize:4,cOrder:5,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"EventCd,EventName"},PI_cluster:{dataLookUp:{LookUpCd:"GetLookupTNBlock",ColumnDB:"BlockCd",InitialWhere:"SubportfolioCd='"+this.getDataUser().SubPortfolioCd+"'",ParamWhere:"",SourceField:"",DisplayLookup:"BlockCode,Description"},cValidate:"",cName:"cluster",cLabel:"Cluster",cKey:!1,cLabelSize:4,cOrder:6,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"BlockCode,Description"},PI_remarks:{cValidate:"",cName:"remarks",cLabel:"Keterangan",cLabelSize:4,cOrder:7,cKey:!1,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder,cProtect:!1}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage1Data},GetDataBy1:function(){return this.$store.getters.GetPage1GetDataBy}},methods:{OneventdateChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},OnsubsequenteventChange:function(e){var t=this;this.$nextTick(function(){t.M_SM_Event.subsequentevent=e.id,t.M_SM_Event.subsequenteventLabel=e.label,t.inputStatus}),this.$forceUpdate()},OnclusterChange:function(e){var t=this;this.$nextTick(function(){t.M_SM_Event.cluster=e.id,t.M_SM_Event.clusterLabel=e.label,t.inputStatus}),this.$forceUpdate()},OnremarksChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},setToolbarButton:function(){},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,t){},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){},M_CheckboxChecked:function(e,t,n){},M_Post:function(e){},M_Insert:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,EventCd:this.M_SM_Event.eventcd,SubPortfolioCd:this.getDataUser().SubPortfolioCd,EventName:this.M_SM_Event.eventname,EventDate:""==this.M_SM_Event.eventdate||null==this.M_SM_Event.eventdate?"NULL":this.M_SM_Event.eventdate,SubSequentEvent:""==this.M_SM_Event.subsequentevent||null==this.M_SM_Event.subsequentevent?"NULL":this.M_SM_Event.subsequentevent,TotalUnitSold:this.M_SM_Event.totalunitsold,Cluster:""==this.M_SM_Event.cluster||null==this.M_SM_Event.cluster?"NULL":this.M_SM_Event.cluster,Remarks:this.M_SM_Event.remarks,UserInput:this.getDataUser().UserId};this.postJSON(this.getUrlInsert(),t).then(function(t){null!=t&&e.$parent.resultInsert(t.Message)})},M_Update:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,EventCd:this.M_SM_Event.eventcd,EventName:this.M_SM_Event.eventname,EventDate:""==this.M_SM_Event.eventdate||null==this.M_SM_Event.eventdate?"NULL":this.M_SM_Event.eventdate,SubSequentEvent:""==this.M_SM_Event.subsequentevent||null==this.M_SM_Event.subsequentevent?"NULL":this.M_SM_Event.subsequentevent,Cluster:""==this.M_SM_Event.cluster||null==this.M_SM_Event.cluster?"NULL":this.M_SM_Event.cluster,Remarks:this.M_SM_Event.remarks,TotalUnitSold:this.M_SM_Event.totalunitsold,UserEdit:this.getDataUser().UserId,LastUpdateStamp:this.M_SM_Event.lastupdatestamp};this.postJSON(this.getUrlUpdate(),t).then(function(t){null!=t&&e.$parent.resultUpdate(t.Message)})},M_ClearForm:function(){this.M_SM_Event={cluster:"",clusterdescs:"",eventcd:"",eventdate:"",eventname:"",lastupdatestamp:0,remarks:"",status:"",subportfoliocd:"",subsequentevent:"",subsequenteventdescs:"",timeedit:"",timeinput:"",totalunitsold:"",useredit:this.getDataUser().UserId,userinput:"",rowid:""}},M_New:function(){this.$refs.ref_eventcd.focus()},M_Edit:function(){this.$refs.ref_eventname.focus()},M_Delete:function(e){var t=this,n=this.FormToABSList().getRowSelected(),a=[];n.forEach(function(e){a.push({_Message_:"",SubPortFolioCd:t.getDataUser().SubPortfolioCd,EventCd:e.EventCd,LastUpdateStamp:e.LastUpdateStamp})});var s={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:a};this.postJSONMulti(this.getUrlNewDeleteMulti(),s).then(function(e){null!=e&&t.$parent.resultDelete()})},getDataBy:function(e){var t=this,n={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,eventcd:e.EventCd,SubPortfolioCd:this.getDataUser().SubPortfolioCd};this.postEncode(this.getUrlById(),n).then(function(n){if(null!=n){var a=n.Data[0];t.M_SM_Event={cluster:a.cluster,clusterdescs:a.clusterdescs,eventcd:a.eventcd,eventdate:a.eventdate,eventname:a.eventname,lastupdatestamp:e.LastUpdateStamp,remarks:a.remarks,status:a.status,subportfoliocd:a.subportfoliocd,subsequentevent:a.subsequentevent,subsequenteventdescs:a.subsequenteventdescs,timeedit:a.timeedit,timeinput:a.timeinput,totalunitsold:a.totalunitsold,useredit:a.useredit,userinput:a.userinput},t.M_SM_Event.subsequenteventLabel=null!=t.M_SM_Event.subsequentevent&&""!=t.M_SM_Event.subsequentevent?a.subsequentevent+t.separator+a.subsequenteventdescs:"",t.M_SM_Event.clusterLabel=null!=t.M_SM_Event.cluster&&""!=t.M_SM_Event.cluster?a.cluster+t.separator+a.clusterdescs:"",t.IEBy.Input=a.userinput,t.IEBy.Edit=a.useredit}})}},beforeCreate:function(){},created:function(){this.$store.commit("setFormType","List"),this.getToolbar().ProcessPS()},beforeMount:function(){},mounted:function(){this.hideSideBarMenu(),this.FormToABSList().doGetList("","eb_getList")},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),r=i,o=n("2877"),c=Object(o["a"])(r,a,s,!1,null,null,null);c.options.__file="SM_Event.vue";t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0d7e55.f34ad3f7.js.map