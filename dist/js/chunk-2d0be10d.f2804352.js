(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0be10d"],{"2f58":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("ABSListVuex",{attrs:{prop:e.propList,title:e.data.QueryName},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table,refreshColumn:e.$parent.refreshColumn}}),i("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[i("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[i("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                    Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),i("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),i("b-collapse",{attrs:{id:"collapse1",visible:!0}},[i("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[i("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[i("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[i("b-row",{staticStyle:{"padding-left":"10px"}},[i("b-col",{attrs:{md:"12",id:"col-left"}},[i("b-row",[i("b-col",{attrs:{md:"6"}},[i("ABSinputTextVuex",{ref:"ref_regioncd",attrs:{prop:e.PI_regioncd},model:{value:e.M_CO_RegionMaster.regioncd,callback:function(t){e.$set(e.M_CO_RegionMaster,"regioncd",t)},expression:"M_CO_RegionMaster.regioncd"}})],1)],1),i("b-row",[i("b-col",{attrs:{md:"6"}},[i("ABSinputTextVuex",{ref:"ref_regionname",attrs:{prop:e.PI_regionname},model:{value:e.M_CO_RegionMaster.regionname,callback:function(t){e.$set(e.M_CO_RegionMaster,"regionname",t)},expression:"M_CO_RegionMaster.regionname"}})],1)],1)],1)],1),i("ABSTAnalysis",{attrs:{prop:e.PTAnalysis}})],1)],1)],1)],1)],1)],1)},n=[],o=(i("ac6a"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{cInsertKey:"",FormType:"List",Module:"CO",propList:{initialWhere:"",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_CO_RegionMaster:{regioncd:"",regionname:"",timeinput:"",timeedit:"",userinput:"",useredit:this.getDataUser().UserId,lastupdatestamp:0,rowid:0},PI_regioncd:{cValidate:"required|max:3",cName:"regioncd",cLabel:"Region Code",cLabelSize:4,cOrder:1,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_regionname:{cValidate:"required|max:50",cName:"regionname",cLabel:"Region Name",cLabelSize:4,cOrder:2,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage1Data}},methods:{setToolbarButton:function(){},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,t){},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){},M_Post:function(){},M_Insert:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,RegionCd:this.M_CO_RegionMaster.regioncd,RegionName:this.M_CO_RegionMaster.regionname,UserInput:this.getDataUser().UserId};this.postJSON(this.getUrlInsert(),t).then(function(t){null!=t&&e.$parent.resultInsert(t.Message)})},M_Update:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,RegionCd:this.M_CO_RegionMaster.regioncd,RegionName:this.M_CO_RegionMaster.regionname,UserEdit:this.getDataUser().UserId,LastUpdateStamp:this.M_CO_RegionMaster.lastupdatestamp};this.postJSON(this.getUrlUpdate(),t).then(function(t){null!=t&&e.$parent.resultUpdate(t.Message)})},M_ClearForm:function(){this.M_CO_RegionMaster={regioncd:"",regionname:"",timeinput:"",timeedit:"",userinput:"",useredit:this.getDataUser().UserId,lastupdatestamp:0,rowid:0}},M_New:function(){this.$refs.ref_regioncd.focus()},M_Edit:function(){this.$refs.ref_regionname.focus()},M_Delete:function(e){var t=this,i=this.FormToABSList().getRowSelected(),a=[];i.forEach(function(e){a.push({RegionCd:e.RegionCd,LastUpdateStamp:e.LastUpdateStamp,_Message_:""})});var n={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:a};this.postJSONMulti(this.getUrlNewDeleteMulti(),n).then(function(e){null!=e&&t.$parent.resultDelete()})},getDataBy:function(e){var t=this,i={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,regioncd:e.RegionCd,lastupdatestamp:e.LastUpdateStamp};this.postEncode(this.getUrlById(),i).then(function(i){if(null!=i){var a=i.Data[0];t.M_CO_RegionMaster={regioncd:a.regioncd,regionname:a.regionname,timeinput:a.timeinput,timeedit:a.timeedit,userinput:a.userinput,useredit:a.useredit,lastupdatestamp:e.LastUpdateStamp,rowid:a.rowid},t.IEBy.Input=a.userinput,t.IEBy.Edit=a.useredit}})}},beforeCreate:function(){},created:function(){this.$store.commit("setFormType","List"),this.getToolbar().ProcessPS()},beforeMount:function(){},mounted:function(){this.hideSideBarMenu(),this.FormToABSList().doGetList("","eb_getList")},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),r=o,s=i("2877"),d=Object(s["a"])(r,a,n,!1,null,null,null);d.options.__file="CO_RegionMaster.vue";t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0be10d.f2804352.js.map