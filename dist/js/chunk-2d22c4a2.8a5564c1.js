(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22c4a2"],{f332:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ABSListVuex",{attrs:{prop:e.propList,title:e.data.QueryName},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table,refreshColumn:e.$parent.refreshColumn}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[a("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                    Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),a("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),a("b-collapse",{attrs:{id:"collapse1",visible:!0}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[a("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[a("b-row",{staticStyle:{"padding-left":"10px"}},[a("b-col",{attrs:{md:"12",id:"col-left"}},[a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_reasoncd",attrs:{prop:e.PI_reasoncd},model:{value:e.M_CO_Reason.reasoncd,callback:function(t){e.$set(e.M_CO_Reason,"reasoncd",t)},expression:"M_CO_Reason.reasoncd"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_descs",attrs:{prop:e.PI_descs},model:{value:e.M_CO_Reason.descs,callback:function(t){e.$set(e.M_CO_Reason,"descs",t)},expression:"M_CO_Reason.descs"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_pagemasterseq",attrs:{prop:e.PI_pagemasterseq,value:e.M_CO_Reason.pagemasterseq,label:e.M_CO_Reason.pagemasterseqLabel},on:{change:e.OnpagemasterseqChange}})],1)],1)],1)],1),a("ABSTAnalysis",{attrs:{prop:e.PTAnalysis}})],1)],1)],1)],1)],1)],1)},n=[],i=(a("ac6a"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{cInsertKey:"",FormType:"List",Module:"CO",propList:{initialWhere:"",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_CO_Reason:{reasoncd:"",descs:"",pagemasterseq:0,userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:0,controlsequenceno:0,menuname:"",rowid:0},PI_reasoncd:{cValidate:"required|max:5",cName:"reasoncd",cLabel:"Reason Code",cLabelSize:4,cOrder:1,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_descs:{cValidate:"required|max:60",cName:"descs",cLabel:"Description",cLabelSize:4,cOrder:2,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_pagemasterseq:{dataLookUp:{LookUpCd:"GetLookupMenuName",ColumnDB:"PageMasterSeq",InitialWhere:"ModuleCd = 'CO'",ParamWhere:""},cValidate:"",cName:"pagemasterseq",cLabel:"Menu Name",cKey:!1,cLabelSize:4,cOrder:3,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"PageMasterSeq,TextMenu"},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage1Data}},methods:{OnpagemasterseqChange:function(e){var t=this;this.M_CO_Reason.pagemasterseq!=e.id&&(this.$nextTick(function(){t.M_CO_Reason.pagemasterseq=e.id,t.M_CO_Reason.pagemasterseqLabel=e.label,t.inputStatus}),this.$forceUpdate())},setToolbarButton:function(){},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,t){},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){},M_Post:function(){},M_Insert:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,ReasonCd:this.M_CO_Reason.reasoncd,Descs:this.M_CO_Reason.descs,PageMasterSeq:""==this.M_CO_Reason.pagemasterseq||null==this.M_CO_Reason.pagemasterseq?"NULL":this.M_CO_Reason.pagemasterseq,UserInput:this.getDataUser().UserId};this.postJSON(this.getUrlInsert(),t).then(function(t){null!=t&&e.$parent.resultInsert(t.Message)})},M_Update:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,ReasonCd:this.M_CO_Reason.reasoncd,Descs:this.M_CO_Reason.descs,PageMasterSeq:""==this.M_CO_Reason.pagemasterseq||null==this.M_CO_Reason.pagemasterseq?"NULL":this.M_CO_Reason.pagemasterseq,UserEdit:this.getDataUser().UserId,LastUpdateStamp:this.M_CO_Reason.lastupdatestamp};this.postJSON(this.getUrlUpdate(),t).then(function(t){null!=t&&e.$parent.resultUpdate(t.Message)})},M_ClearForm:function(){this.M_CO_Reason={reasoncd:"",descs:"",pagemasterseq:0,userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:0,controlsequenceno:0,menuname:"",rowid:0}},M_New:function(){this.$refs.ref_reasoncd.focus()},M_Edit:function(){this.$refs.ref_descs.focus()},M_Delete:function(e){var t=this,a=this.FormToABSList().getRowSelected(),s=[];a.forEach(function(e){s.push({ReasonCd:e.ReasonCd,LastUpdateStamp:e.LastUpdateStamp,_Message_:""})});var n={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:s};this.postJSONMulti(this.getUrlNewDeleteMulti(),n).then(function(e){null!=e&&t.$parent.resultDelete()})},getDataBy:function(e){var t=this,a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,reasoncd:e.ReasonCd};this.postEncode(this.getUrlById(),a).then(function(a){if(null!=a){var s=a.Data[0];t.M_CO_Reason={reasoncd:s.reasoncd,descs:s.descs,pagemasterseq:s.pagemasterseq,userinput:s.userinput,useredit:s.useredit,timeinput:s.timeinput,timeedit:s.timeedit,lastupdatestamp:e.LastUpdateStamp,controlsequenceno:s.controlsequenceno,menuname:s.menuname,rowid:s.rowid},t.M_CO_Reason.pagemasterseqLabel=null!=t.M_CO_Reason.pagemasterseq?s.pagemasterseq+t.separator+s.menuname:"",t.IEBy.Input=s.userinput,t.IEBy.Edit=s.useredit}})}},beforeCreate:function(){},created:function(){this.$store.commit("setFormType","List"),this.getToolbar().ProcessPS()},beforeMount:function(){},mounted:function(){this.hideSideBarMenu(),this.FormToABSList().doGetList("","eb_getList")},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),o=i,r=a("2877"),c=Object(r["a"])(o,s,n,!1,null,null,null);c.options.__file="CO_Reason.vue";t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d22c4a2.8a5564c1.js.map