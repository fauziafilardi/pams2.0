(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2084ab"],{a3be:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("ABSListVuex",{attrs:{prop:t.propList,title:t.data.QueryName},on:{rowClicked:t.$parent.rowClicked,rowDblClicked:t.$parent.doDoubleClick,rowLinkClick:t.$parent.rowLink,pageSize:t.$parent.M_PageSize,pagination:t.$parent.M_Pagination,filter:t.$parent.M_Advance_Filter,headTable:t.$parent.M_Head_Table,refreshColumn:t.$parent.refreshColumn,checkboxChecked:t.$parent.checkboxChecked}}),o("div",{directives:[{name:"show",rawName:"v-show",value:t.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[o("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[o("span",{directives:[{name:"show",rawName:"v-show",value:t.IEBy.Input&&t.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[t._v("\n                    Input By : "+t._s(t.IEBy.Input)+" | Edit By : "+t._s(t.IEBy.Edit)+" "),o("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),o("b-collapse",{attrs:{id:"collapse1",visible:!0}},[o("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[o("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[o("b-form",{attrs:{"data-vv-scope":"FormScope_"+t.PageLevel+"_"+t.TabIndex,"data-vv-value-path":"FormScope_"+t.PageLevel+"_"+t.TabIndex}},[o("b-row",{staticStyle:{"padding-left":"10px"}},[o("b-col",{attrs:{md:"12",id:"col-left"}},[o("b-row",[o("b-col",{attrs:{md:"6"}},[o("ABSCompute",{ref:"ref_lotno",attrs:{prop:t.PI_lotno},model:{value:t.M_SM_LotTransactionLog.lotno,callback:function(e){t.$set(t.M_SM_LotTransactionLog,"lotno",e)},expression:"M_SM_LotTransactionLog.lotno"}})],1)],1),o("b-row",[o("b-col",{attrs:{md:"6"}},[o("ABSCompute",{ref:"ref_contactid",attrs:{prop:t.PI_contactid},model:{value:t.M_SM_LotTransactionLog.contactid,callback:function(e){t.$set(t.M_SM_LotTransactionLog,"contactid",e)},expression:"M_SM_LotTransactionLog.contactid"}})],1)],1),o("b-row",[o("b-col",{attrs:{md:"6"}},[o("ABSCompute",{ref:"ref_status",attrs:{prop:t.PI_status},model:{value:t.M_SM_LotTransactionLog.status,callback:function(e){t.$set(t.M_SM_LotTransactionLog,"status",e)},expression:"M_SM_LotTransactionLog.status"}})],1)],1),o("b-row",[o("b-col",{attrs:{md:"6"}},[o("ABSCompute",{ref:"ref_time",attrs:{prop:t.PI_time},model:{value:t.M_SM_LotTransactionLog.time,callback:function(e){t.$set(t.M_SM_LotTransactionLog,"time",e)},expression:"M_SM_LotTransactionLog.time"}})],1)],1)],1)],1),o("ABSTAnalysis",{attrs:{prop:t.PTAnalysis}})],1)],1)],1)],1)],1)],1)},n=[],i=(o("ac6a"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{cInsertKey:"",FormType:"List",Module:"SM",propList:{initialWhere:"",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_SM_LotTransactionLog:{contactid:"",contactname:"",lotno:"",sequenceno:"",status:"",statusdesc:"",subportfoliocd:"",timeinput:"",userinput:"",time:"",userinputname:""},PI_lotno:{cLabel:"Unit",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_contactid:{cLabel:"Contact ID",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_status:{cLabel:"Status",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_time:{cLabel:"Time",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder,cProtect:!1}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage1Data},GetDataBy1:function(){return this.$store.getters.GetPage1GetDataBy}},methods:{setToolbarButton:function(){this.getToolbar().statusFunction[0].disabled=!0,this.getToolbar().statusFunction[1].disabled=!0,this.getToolbar().statusFunction[2].disabled=!0},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(t){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(t,e){},rowLink:function(t){this.$refs.modalTest.show()},paramFromParent:function(){},M_CheckboxChecked:function(t,e,o){},M_Post:function(t){},M_Insert:function(){var t=this,e={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder};this.postJSON(this.getUrlInsert(),e).then(function(e){null!=e&&t.$parent.resultInsert(e.Message)})},M_Update:function(){var t=this,e={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder};this.postJSON(this.getUrlUpdate(),e).then(function(e){null!=e&&t.$parent.resultUpdate(e.Message)})},M_ClearForm:function(){this.M_SM_LotTransactionLog={contactid:"",contactname:"",lotno:"",sequenceno:"",status:"",statusdesc:"",subportfoliocd:"",timeinput:"",userinput:"",userinputname:""}},M_New:function(){},M_Edit:function(){},M_Delete:function(t){var e=this,o=this.FormToABSList().getRowSelected(),a=[];o.forEach(function(t){a.push({_Message_:""})});var n={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:a};this.postJSONMulti(this.getUrlNewDeleteMulti(),n).then(function(t){null!=t&&e.$parent.resultDelete()})},getDataBy:function(t){var e=this,o={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,lotno:t.LotNo,sequenceno:t.SequenceNo};this.postEncode(this.getUrlById(),o).then(function(t){if(null!=t){var o=t.Data[0];console.log(o),e.M_SM_LotTransactionLog={contactid:o.contactid,contactname:o.contactname,lotno:o.lotno,sequenceno:o.sequenceno,status:o.statusdesc,statusdesc:o.statusdesc,subportfoliocd:o.subportfoliocd,timeinput:o.timeinput,userinput:o.userinput,time:o.trstitik_date,userinputname:o.userinputname},e.IEBy.Input=o.userinput,e.IEBy.Edit=o.useredit}})}},beforeCreate:function(){},created:function(){this.$store.commit("setFormType","List")},beforeMount:function(){},mounted:function(){this.hideSideBarMenu(),this.FormToABSList().doGetList("","eb_getList")},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),s=i,r=o("2877"),c=Object(r["a"])(s,a,n,!1,null,null,null);c.options.__file="SM_LotTransactionLog.vue";e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d2084ab.4a514294.js.map