(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d215fda"],{c10f:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("ABSListVuex",{attrs:{prop:e.propList,title:e.data.QueryName},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table,refreshColumn:e.$parent.refreshColumn,checkboxChecked:e.$parent.checkboxChecked}}),s("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[s("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[s("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                    Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),s("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),s("b-collapse",{attrs:{id:"collapse1",visible:!0}},[s("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[s("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[s("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[s("b-row",{staticStyle:{"padding-left":"10px"}},[s("b-col",{attrs:{md:"12",id:"col-left"}},[s("b-row",[s("b-col",{attrs:{md:"6"}},[s("ABSinputTextVuex",{ref:"ref_salestypecd",attrs:{prop:e.PI_salestypecd},model:{value:e.M_SM_SalesTypeH.salestypecd,callback:function(t){e.$set(e.M_SM_SalesTypeH,"salestypecd",t)},expression:"M_SM_SalesTypeH.salestypecd"}})],1)],1),s("b-row",[s("b-col",{attrs:{md:"6"}},[s("ABSinputTextVuex",{ref:"ref_descs",attrs:{prop:e.PI_descs},model:{value:e.M_SM_SalesTypeH.descs,callback:function(t){e.$set(e.M_SM_SalesTypeH,"descs",t)},expression:"M_SM_SalesTypeH.descs"}})],1)],1),s("b-row",[s("b-col",{attrs:{md:"6"}},[s("ABSTextAreaVuex",{ref:"ref_remarks",attrs:{prop:e.PI_remarks},on:{input:e.OnremarksChange},model:{value:e.M_SM_SalesTypeH.remarks,callback:function(t){e.$set(e.M_SM_SalesTypeH,"remarks",t)},expression:"M_SM_SalesTypeH.remarks"}})],1)],1)],1)],1),s("ABSTAnalysis",{attrs:{prop:e.PTAnalysis}})],1)],1)],1)],1)],1)],1)},i=[],r=(s("ac6a"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{cInsertKey:"",FormType:"List",Module:"SM",propList:{initialWhere:"SubportfolioCd='"+this.getDataUser().SubPortfolioCd+"'",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_SM_SalesTypeH:{descs:"",remarks:"",salestypecd:"",subportfoliocd:"",useredit:this.getDataUser().SubPortfolioCd,userinput:"",timeedit:"",timeinput:"",lastupdatestamp:0,rowid:0},PI_salestypecd:{cValidate:"required|max:8",cName:"salestypecd",cLabel:"Sales Type Code",cLabelSize:4,cOrder:1,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_descs:{cValidate:"required|max:60",cName:"descs",cLabel:"Description",cLabelSize:4,cOrder:2,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_remarks:{cValidate:"",cName:"remarks",cLabel:"Remarks",cLabelSize:4,cOrder:3,cKey:!1,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder,cProtect:!1}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage1Data},GetDataBy1:function(){return this.$store.getters.GetPage1GetDataBy}},methods:{OnremarksChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},setToolbarButton:function(){},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,t){},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){},M_CheckboxChecked:function(e,t,s){},M_Post:function(e){},M_Insert:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,SalesTypeCd:this.M_SM_SalesTypeH.salestypecd,Descs:this.M_SM_SalesTypeH.descs,Remarks:this.M_SM_SalesTypeH.remarks,UserInput:this.getDataUser().UserId};this.postJSON(this.getUrlInsert(),t).then(function(t){null!=t&&e.$parent.resultInsert(t.Message)})},M_Update:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,SalesTypeCd:this.M_SM_SalesTypeH.salestypecd,Descs:this.M_SM_SalesTypeH.descs,Remarks:this.M_SM_SalesTypeH.remarks,UserEdit:this.getDataUser().UserId,LastUpdateStamp:this.M_SM_SalesTypeH.lastupdatestamp};this.postJSON(this.getUrlUpdate(),t).then(function(t){null!=t&&e.$parent.resultUpdate(t.Message)})},M_ClearForm:function(){this.M_SM_SalesTypeH={descs:"",remarks:"",salestypecd:"",subportfoliocd:"",useredit:this.getDataUser().SubPortfolioCd,userinput:"",timeedit:"",timeinput:"",lastupdatestamp:0,rowid:0}},M_New:function(){this.$refs.ref_salestypecd.focus()},M_Edit:function(){this.$refs.ref_descs.focus()},M_Delete:function(e){var t=this,s=this.FormToABSList().getRowSelected(),a=[];s.forEach(function(e){console.log(e),a.push({_Message_:"",SubPortfolioCd:t.getDataUser().SubPortfolioCd,SalesTypeCd:e.SalesTypeCd,LastUpdateStamp:e.LastUpdateStamp})});var i={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:a};this.postJSONMulti(this.getUrlNewDeleteMulti(),i).then(function(e){null!=e&&t.$parent.resultDelete()})},getDataBy:function(e){var t=this;console.log(e);var s={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,salestypecd:e.SalesTypeCd};this.postEncode(this.getUrlById(),s).then(function(e){if(null!=e){var s=e.Data[0];console.log(s),t.M_SM_SalesTypeH={descs:s.descs,remarks:s.remarks,salestypecd:s.salestypecd,subportfoliocd:s.subportfoliocd,useredit:s.useredit,userinput:s.userinput,lastupdatestamp:s.lastupdatestamp,timeedit:s.timeedit,timeinput:s.timeinput,rowid:s.rowid},t.IEBy.Input=s.userinput,t.IEBy.Edit=s.useredit}})}},beforeCreate:function(){},created:function(){this.$store.commit("setFormType","List"),this.getToolbar().ProcessPS()},beforeMount:function(){},mounted:function(){this.hideSideBarMenu(),this.FormToABSList().doGetList("","eb_getList")},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),o=r,n=s("2877"),c=Object(n["a"])(o,a,i,!1,null,null,null);c.options.__file="SM_SalesTypeH.vue";t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d215fda.e00214a4.js.map