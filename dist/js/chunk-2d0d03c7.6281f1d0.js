(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d03c7"],{"66b3":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ABSListVuex",{attrs:{prop:t.propList,title:t.data.QueryName},on:{rowClicked:t.$parent.rowClicked,rowDblClicked:t.$parent.doDoubleClick,rowLinkClick:t.$parent.rowLink,pageSize:t.$parent.M_PageSize,pagination:t.$parent.M_Pagination,filter:t.$parent.M_Advance_Filter,headTable:t.$parent.M_Head_Table,refreshColumn:t.$parent.refreshColumn}}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[a("span",{directives:[{name:"show",rawName:"v-show",value:t.IEBy.Input&&t.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[t._v("\n                    Input By : "+t._s(t.IEBy.Input)+" | Edit By : "+t._s(t.IEBy.Edit)+" "),a("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),a("b-collapse",{attrs:{id:"collapse1",visible:!0}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[a("b-form",{attrs:{"data-vv-scope":"FormScope_"+t.PageLevel+"_"+t.TabIndex,"data-vv-value-path":"FormScope_"+t.PageLevel+"_"+t.TabIndex}},[a("b-row",{staticStyle:{"padding-left":"10px"}}),a("ABSTAnalysis",{attrs:{prop:t.PTAnalysis}})],1)],1)],1)],1)],1)],1)},s=[],n=(a("7f7f"),a("ac6a"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{ValKey:null,FormType:"List",Module:"CM",propList:{initialWhere:"SequenceRegistrationNo = '"+this.ValKey+"'",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_CM_ContactSimilar:{contactid:"",contactclasscd:"",parentid:"",category:"",government:"",reasoncd:"",reasondescs:"",name:"",website:"",taxno:"",taxreferenceno:"",taxregistrationdate:"",taxcollectable:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,classdescs:"",parentname:"",classificationlocalid:"",classificationcentralid:"",classificationgroupid:"",sequenceregistrationno:0,lastupdatestamp:0,rowid:0,insurancestatus:"",financierstatus:"",status:""},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage2Data},DataRowPage1:function(){return this.$store.getters.GetPage1Data}},methods:{setToolbarButton:function(){this.getToolbar().statusFunction[0].disabled=!0},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(t){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(t,e){},rowLink:function(t){this.$refs.modalTest.show()},paramFromParent:function(){this.$parent.showForm=!1;var t=this.$store.getters.GetPage1Data;this.M_CM_ContactSimilar.sequenceregistrationno=t.SequenceRegistrationNo,this.propList.initialWhere="",this.propList.ParamView="'"+t.SequenceRegistrationNo+"','"+t.Name+"'",this.FormToABSList().doGetList("","eb_getList")},M_Insert:function(){var t=this,e={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder};this.postJSON(this.getUrlInsert(),e).then(function(e){null!=e&&t.$parent.resultInsert(e.Message)})},M_Update:function(){var t=this,e={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder};this.postJSON(this.getUrlUpdate(),e).then(function(e){null!=e&&t.$parent.resultUpdate(e.Message)})},M_ClearForm:function(){this.M_CM_ContactSimilar={contactid:"",contactclasscd:"",parentid:"",category:"",government:"",reasoncd:"",reasondescs:"",name:"",website:"",taxno:"",taxreferenceno:"",taxregistrationdate:"",taxcollectable:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,classdescs:"",parentname:"",classificationlocalid:"",classificationcentralid:"",classificationgroupid:"",sequenceregistrationno:0,lastupdatestamp:0,rowid:0,insurancestatus:"",financierstatus:"",status:""}},M_New:function(){var t=this.$store.getters.GetPage1Data;this.M_CM_ContactSimilar.sequenceregistrationno=t.SequenceRegistrationNo},M_Edit:function(){},M_Delete:function(t){var e=this,a=this.FormToABSList().getRowSelected(),i=[];a.forEach(function(t){i.push({_Message_:""})});var s={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:i};this.postJSONMulti(this.getUrlNewDeleteMulti(),s).then(function(t){null!=t&&e.$parent.resultDelete()})},getDataBy:function(t){var e=this,a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder};this.postEncode(this.getUrlById(),a).then(function(a){if(null!=a){var i=a.Data[0];e.M_CM_ContactSimilar={contactid:i.contactid,contactclasscd:i.contactclasscd,parentid:i.parentid,category:i.category,government:i.government,reasoncd:i.reasoncd,reasondescs:i.reasondescs,name:i.name,website:i.website,taxno:i.taxno,taxreferenceno:i.taxreferenceno,taxregistrationdate:i.taxregistrationdate,taxcollectable:i.taxcollectable,remarks:i.remarks,userinput:i.userinput,useredit:i.useredit,classdescs:i.classdescs,parentname:i.parentname,classificationlocalid:i.classificationlocalid,classificationcentralid:i.classificationcentralid,classificationgroupid:i.classificationgroupid,sequenceregistrationno:i.sequenceregistrationno,lastupdatestamp:t.LastUpdateStamp,rowid:i.rowid,insurancestatus:i.insurancestatus,financierstatus:i.financierstatus,status:i.status},e.IEBy.Input=i.userinput,e.IEBy.Edit=i.useredit}})}},created:function(){},beforeMount:function(){},mounted:function(){this.hideSideBarMenu()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),o=n,r=a("2877"),c=Object(r["a"])(o,i,s,!1,null,null,null);c.options.__file="CM_ContactSimilar.vue";e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0d03c7.6281f1d0.js.map