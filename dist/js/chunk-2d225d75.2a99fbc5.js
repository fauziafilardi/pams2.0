(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d225d75"],{e5b1:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("ABSListVuex",{attrs:{prop:e.propList,title:e.data.QueryName},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table,refreshColumn:e.$parent.refreshColumn}}),i("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[i("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[i("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                    Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),i("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),i("b-collapse",{attrs:{id:"collapse1",visible:!0}},[i("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[i("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[i("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[i("b-row",{staticStyle:{"padding-left":"10px"}},[i("b-col",{attrs:{md:"12",id:"col-left"}},[i("b-row",[i("b-col",{attrs:{md:"6"}},[i("ABSinputTextVuex",{ref:"ref_consolidationcd",attrs:{prop:e.PI_consolidationcd},model:{value:e.M_GL_Consolidation.consolidationcd,callback:function(t){e.$set(e.M_GL_Consolidation,"consolidationcd",t)},expression:"M_GL_Consolidation.consolidationcd"}})],1)],1),i("b-row",[i("b-col",{attrs:{md:"6"}},[i("ABSinputTextVuex",{ref:"ref_descs",attrs:{prop:e.PI_descs},model:{value:e.M_GL_Consolidation.descs,callback:function(t){e.$set(e.M_GL_Consolidation,"descs",t)},expression:"M_GL_Consolidation.descs"}})],1)],1),i("b-row",[i("b-col",{attrs:{md:"6"}},[i("ABSTextAreaVuex",{ref:"ref_remarks",attrs:{prop:e.PI_remarks},on:{input:e.OnremarksChange},model:{value:e.M_GL_Consolidation.remarks,callback:function(t){e.$set(e.M_GL_Consolidation,"remarks",t)},expression:"M_GL_Consolidation.remarks"}})],1)],1)],1)],1),i("ABSTAnalysis",{attrs:{prop:e.PTAnalysis}})],1)],1)],1)],1)],1)],1)},a=[],o=(i("ac6a"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{cInsertKey:"",FormType:"List",Module:"GL",propList:{initialWhere:"",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_GL_Consolidation:{consolidationcd:"",descs:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:0,rowid:0},PI_consolidationcd:{cValidate:"required|max:8",cName:"consolidationcd",cLabel:"Consolidation Code",cLabelSize:4,cOrder:1,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_descs:{cValidate:"required|max:60",cName:"descs",cLabel:"Description ",cLabelSize:4,cOrder:2,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_remarks:{cValidate:"",cName:"remarks",cLabel:"Remarks",cLabelSize:4,cOrder:3,cKey:!1,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage1Data}},methods:{OnremarksChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},setToolbarButton:function(){},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,t){},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){},M_Post:function(){},M_Insert:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,ConsolidationCd:this.M_GL_Consolidation.consolidationcd,Descs:this.M_GL_Consolidation.descs,Remarks:this.M_GL_Consolidation.remarks,UserInput:this.getDataUser().UserId};this.postJSON(this.getUrlInsert(),t).then(function(t){null!=t&&e.$parent.resultInsert(t.Message)})},M_Update:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,ConsolidationCd:this.M_GL_Consolidation.consolidationcd,Descs:this.M_GL_Consolidation.descs,Remarks:this.M_GL_Consolidation.remarks,UserEdit:this.getDataUser().UserId,LastUpdateStamp:this.M_GL_Consolidation.lastupdatestamp};this.postJSON(this.getUrlUpdate(),t).then(function(t){null!=t&&e.$parent.resultUpdate(t.Message)})},M_ClearForm:function(){this.M_GL_Consolidation={consolidationcd:"",descs:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:0,rowid:0}},M_New:function(){this.$refs.ref_consolidationcd.focus()},M_Edit:function(){this.$refs.ref_descs.focus()},M_Delete:function(e){var t=this,i=this.FormToABSList().getRowSelected(),s=[];i.forEach(function(e){s.push({ConsolidationCd:e.ConsolidationCd,LastUpdateStamp:e.LastUpdateStamp,_Message_:""})});var a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:s};this.postJSONMulti(this.getUrlNewDeleteMulti(),a).then(function(e){null!=e&&t.$parent.resultDelete()})},getDataBy:function(e){var t=this,i={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,consolidationcd:e.ConsolidationCd};this.postEncode(this.getUrlById(),i).then(function(i){if(null!=i){var s=i.Data[0];t.M_GL_Consolidation={consolidationcd:s.consolidationcd,descs:s.descs,remarks:s.remarks,userinput:s.userinput,useredit:s.useredit,timeinput:s.timeinput,timeedit:s.timeedit,lastupdatestamp:e.LastUpdateStamp,rowid:s.rowid},t.IEBy.Input=s.userinput,t.IEBy.Edit=s.useredit}})}},beforeCreate:function(){},created:function(){this.$store.commit("setFormType","List"),this.getToolbar().ProcessPS()},beforeMount:function(){},mounted:function(){this.hideSideBarMenu(),this.FormToABSList().doGetList("","eb_getList")},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),n=o,r=i("2877"),d=Object(r["a"])(n,s,a,!1,null,null,null);d.options.__file="GL_Consolidation.vue";t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d225d75.2a99fbc5.js.map