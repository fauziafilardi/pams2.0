(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b6d16"],{"1f7b":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ABSListVuex",{attrs:{prop:e.propList,title:e.data.QueryName},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table,refreshColumn:e.$parent.refreshColumn}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[a("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                    Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),a("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),a("b-collapse",{attrs:{id:"collapse1",visible:!0}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[a("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[a("b-row",{staticStyle:{"padding-left":"10px"}},[a("b-col",{attrs:{md:"12",id:"col-left"}},[a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_deviationcd",attrs:{prop:e.PI_deviationcd},model:{value:e.M_TN_CLDeviationItem.deviationcd,callback:function(t){e.$set(e.M_TN_CLDeviationItem,"deviationcd",t)},expression:"M_TN_CLDeviationItem.deviationcd"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_shortdescs",attrs:{prop:e.PI_shortdescs},model:{value:e.M_TN_CLDeviationItem.shortdescs,callback:function(t){e.$set(e.M_TN_CLDeviationItem,"shortdescs",t)},expression:"M_TN_CLDeviationItem.shortdescs"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_descs",attrs:{prop:e.PI_descs},model:{value:e.M_TN_CLDeviationItem.descs,callback:function(t){e.$set(e.M_TN_CLDeviationItem,"descs",t)},expression:"M_TN_CLDeviationItem.descs"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSTextAreaVuex",{ref:"ref_remarks",attrs:{prop:e.PI_remarks},on:{input:e.OnremarksChange},model:{value:e.M_TN_CLDeviationItem.remarks,callback:function(t){e.$set(e.M_TN_CLDeviationItem,"remarks",t)},expression:"M_TN_CLDeviationItem.remarks"}})],1)],1)],1)],1),a("ABSTAnalysis",{attrs:{prop:e.PTAnalysis}})],1)],1)],1)],1)],1)],1)},o=[],s=(a("ac6a"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{ValKey:null,FormType:"List",Module:"TN",propList:{initialWhere:"DeviationApprovalNo = '"+this.ValKey+"'",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_TN_CLDeviationItem:{subportfoliocd:this.getDataUser().SubPortfolioCd,deviationapprovalno:"",deviationcd:"",approvalitemsequenceno:0,shortdescs:"",descs:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:0,rowid:0},PI_deviationcd:{cValidate:"max:10",cName:"deviationcd",cLabel:"Deviation Code",cLabelSize:4,cOrder:1,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_shortdescs:{cValidate:"max:60",cName:"shortdescs",cLabel:"Short Description",cLabelSize:4,cOrder:2,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_descs:{cValidate:"max:60",cName:"descs",cLabel:"Description",cLabelSize:4,cOrder:3,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_remarks:{cValidate:"",cName:"remarks",cLabel:"Remarks",cLabelSize:4,cOrder:4,cKey:!1,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder,cProtect:!1}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage2Data},DataRowPage1:function(){return this.$store.getters.GetPage1Data}},methods:{OnremarksChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},setToolbarButton:function(){this.getToolbar().statusFunction[0].disabled=!0},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,t){},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){this.$parent.showForm=!1;var e=this.$store.getters.GetPage1Data;this.M_TN_CLDeviationItem.deviationapprovalno=e.DeviationApprovalNo,this.propList.initialWhere=" DeviationApprovalNo = '"+e.DeviationApprovalNo+"' ",this.FormToABSList().doGetList("","eb_getList")},M_Insert:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder};this.postJSON(this.getUrlInsert(),t).then(function(t){null!=t&&e.$parent.resultInsert(t.Message)})},M_Update:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,DeviationApprovalNo:this.M_TN_CLDeviationItem.deviationapprovalno,DeviationCd:this.M_TN_CLDeviationItem.deviationcd,Descs:this.M_TN_CLDeviationItem.descs,Remarks:this.M_TN_CLDeviationItem.remarks,UserEdit:this.getDataUser().UserId,LastUpdateStamp:this.M_TN_CLDeviationItem.lastupdatestamp};this.postJSON(this.getUrlUpdate(),t).then(function(t){null!=t&&e.$parent.resultUpdate(t.Message)})},M_ClearForm:function(){this.M_TN_CLDeviationItem={subportfoliocd:this.getDataUser().SubPortfolioCd,deviationapprovalno:"",deviationcd:"",approvalitemsequenceno:0,shortdescs:"",descs:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:0,rowid:0}},M_New:function(){var e=this.$store.getters.GetPage1Data;this.M_TN_CLDeviationItem.deviationapprovalno=e.DeviationApprovalNo},M_Edit:function(){},M_Delete:function(e){var t=this,a=this.FormToABSList().getRowSelected(),i=[];a.forEach(function(e){i.push({SubPortfolioCd:t.getDataUser().SubPortfolioCd,DeviationApprovalNo:e.DeviationApprovalNo,DeviationCd:e.DeviationCd,LastUpdateStamp:e.LastUpdateStamp,_Message_:""})});var o={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:i};this.postJSONMulti(this.getUrlNewDeleteMulti(),o).then(function(e){null!=e&&t.$parent.resultDelete()})},getDataBy:function(e){var t=this,a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,deviationapprovalno:e.DeviationApprovalNo,deviationcd:e.DeviationCd};this.postEncode(this.getUrlById(),a).then(function(a){if(null!=a){var i=a.Data[0];t.M_TN_CLDeviationItem={subportfoliocd:i.subportfoliocd,deviationapprovalno:i.deviationapprovalno,deviationcd:i.deviationcd,approvalitemsequenceno:i.approvalitemsequenceno,shortdescs:i.shortdescs,descs:i.descs,remarks:i.remarks,userinput:i.userinput,useredit:i.useredit,timeinput:i.timeinput,timeedit:i.timeedit,lastupdatestamp:e.LastUpdateStamp,rowid:i.rowid},t.IEBy.Input=i.userinput,t.IEBy.Edit=i.useredit}})}},created:function(){},beforeMount:function(){},mounted:function(){this.hideSideBarMenu()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),n=s,r=a("2877"),c=Object(r["a"])(n,i,o,!1,null,null,null);c.options.__file="TN_CLDeviationItem.vue";t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0b6d16.469662aa.js.map