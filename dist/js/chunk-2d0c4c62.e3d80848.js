(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c4c62"],{"3beb":function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("ABSListVuex",{attrs:{prop:e.propList,title:e.data.QueryName},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table,refreshColumn:e.$parent.refreshColumn}}),i("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[i("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[i("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                    Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),i("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),i("b-collapse",{attrs:{id:"collapse1",visible:!0}},[i("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[i("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[i("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[i("b-row",{staticStyle:{"padding-left":"10px"}},[i("b-col",{attrs:{md:"12",id:"col-left"}},[i("b-row",[i("b-col",{attrs:{md:"6"}},[i("ABSinputTextVuex",{ref:"ref_descs",attrs:{prop:e.PI_descs},model:{value:e.M_TN_CLDeviationCustomLookupFieldD.descs,callback:function(t){e.$set(e.M_TN_CLDeviationCustomLookupFieldD,"descs",t)},expression:"M_TN_CLDeviationCustomLookupFieldD.descs"}})],1)],1)],1)],1),i("ABSTAnalysis",{attrs:{prop:e.PTAnalysis}})],1)],1)],1)],1)],1)],1)},s=[],a=(i("ac6a"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{ValKey:null,FormType:"List",Module:"TN",propList:{initialWhere:"FieldSequenceNo = '"+this.ValKey+"'",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_TN_CLDeviationCustomLookupFieldD:{fieldlookupsequenceno:0,fieldsequenceno:0,descs:"",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:0,rowid:0},PI_descs:{cValidate:"required|max:60",cName:"descs",cLabel:"Description ",cLabelSize:4,cOrder:1,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder,cProtect:!1}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage2Data},DataRowPage1:function(){return this.$store.getters.GetPage1Data}},methods:{setToolbarButton:function(){},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,t){},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){this.$parent.showForm=!1;var e=this.$store.getters.GetPage1Data;this.M_TN_CLDeviationCustomLookupFieldD.fieldsequenceno=e.FieldSequenceNo,this.propList.initialWhere=" FieldSequenceNo = '"+e.FieldSequenceNo+"' ",this.FormToABSList().doGetList("","eb_getList")},M_Insert:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,FieldSequenceNo:this.M_TN_CLDeviationCustomLookupFieldD.fieldsequenceno,Descs:this.M_TN_CLDeviationCustomLookupFieldD.descs,UserInput:this.getDataUser().UserId};this.postJSON(this.getUrlInsert(),t).then(function(t){null!=t&&e.$parent.resultInsert(t.Message)})},M_Update:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,FieldLookupSequenceNo:this.M_TN_CLDeviationCustomLookupFieldD.fieldlookupsequenceno,FieldSequenceNo:this.M_TN_CLDeviationCustomLookupFieldD.fieldsequenceno,Descs:this.M_TN_CLDeviationCustomLookupFieldD.descs,UserEdit:this.getDataUser().UserId,LastUpdateStamp:this.M_TN_CLDeviationCustomLookupFieldD.lastupdatestamp};this.postJSON(this.getUrlUpdate(),t).then(function(t){null!=t&&e.$parent.resultUpdate(t.Message)})},M_ClearForm:function(){this.M_TN_CLDeviationCustomLookupFieldD={fieldlookupsequenceno:0,fieldsequenceno:0,descs:"",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:0,rowid:0}},M_New:function(){var e=this.$store.getters.GetPage1Data;this.M_TN_CLDeviationCustomLookupFieldD.fieldsequenceno=e.FieldSequenceNo},M_Edit:function(){},M_Delete:function(e){var t=this,i=this.FormToABSList().getRowSelected(),o=[];i.forEach(function(e){o.push({FieldLookupSequenceNo:e.FieldLookupSequenceNo,FieldSequenceNo:e.FieldSequenceNo,LastUpdateStamp:e.LastUpdateStamp,_Message_:""})});var s={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:o};this.postJSONMulti(this.getUrlNewDeleteMulti(),s).then(function(e){null!=e&&t.$parent.resultDelete()})},getDataBy:function(e){var t=this,i={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,fieldlookupsequenceno:e.FieldLookupSequenceNo,fieldsequenceno:e.FieldSequenceNo};this.postEncode(this.getUrlById(),i).then(function(i){if(null!=i){var o=i.Data[0];t.M_TN_CLDeviationCustomLookupFieldD={fieldlookupsequenceno:o.fieldlookupsequenceno,fieldsequenceno:o.fieldsequenceno,descs:o.descs,userinput:o.userinput,useredit:o.useredit,timeinput:o.timeinput,timeedit:o.timeedit,lastupdatestamp:e.LastUpdateStamp,rowid:o.rowid},t.IEBy.Input=o.userinput,t.IEBy.Edit=o.useredit}})}},created:function(){},beforeMount:function(){},mounted:function(){this.hideSideBarMenu()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),n=a,r=i("2877"),u=Object(r["a"])(n,o,s,!1,null,null,null);u.options.__file="TN_CLDeviationCustomLookupFieldD.vue";t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0c4c62.e3d80848.js.map