(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b9d18"],{3522:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ABSListVuex",{attrs:{prop:e.propList,title:e.data.QueryName},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table,refreshColumn:e.$parent.refreshColumn}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[n("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[n("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                    Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),n("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),n("b-collapse",{attrs:{id:"collapse1",visible:!0}},[n("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[n("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[n("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[n("b-row",{staticStyle:{"padding-left":"10px"}},[n("b-col",{attrs:{md:"12",id:"col-left"}},[n("b-row",[n("b-col",{attrs:{md:"6"}},[n("ABSinputRadioButtonVuex",{ref:"ref_deviationprocesstype",attrs:{prop:e.PI_deviationprocesstype},on:{input:e.OndeviationprocesstypeChange},model:{value:e.M_TN_DeviationChannelStep.deviationprocesstype,callback:function(t){e.$set(e.M_TN_DeviationChannelStep,"deviationprocesstype",t)},expression:"M_TN_DeviationChannelStep.deviationprocesstype"}})],1)],1),n("b-row",[n("b-col",{attrs:{md:"6"}},[n("ABSinputTextVuex",{ref:"ref_descs",attrs:{prop:e.PI_descs},model:{value:e.M_TN_DeviationChannelStep.descs,callback:function(t){e.$set(e.M_TN_DeviationChannelStep,"descs",t)},expression:"M_TN_DeviationChannelStep.descs"}})],1)],1),n("b-row",[n("b-col",{attrs:{md:"6"}},[n("ABSInputSelectList",{ref:"ref_parentsequenceno",attrs:{prop:e.PI_parentsequenceno,value:e.M_TN_DeviationChannelStep.parentsequenceno,label:e.M_TN_DeviationChannelStep.parentsequencenoLabel},on:{change:e.OnparentsequencenoChange}})],1)],1),n("b-row",[n("b-col",{attrs:{md:"6"}},[n("ABSinputTextVuex",{ref:"ref_sortsequenceno",attrs:{prop:e.PI_sortsequenceno},model:{value:e.M_TN_DeviationChannelStep.sortsequenceno,callback:function(t){e.$set(e.M_TN_DeviationChannelStep,"sortsequenceno",t)},expression:"M_TN_DeviationChannelStep.sortsequenceno"}})],1)],1)],1)],1),n("ABSTAnalysis",{attrs:{prop:e.PTAnalysis}})],1)],1)],1)],1)],1)],1)},a=[],s=(n("ac6a"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{cInsertKey:"",FormType:"List",Module:"TN",propList:{initialWhere:"WorkFlowType = 'D' AND DeviationProcessTypeCode IN (1,2,3)",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_TN_DeviationChannelStep:{formsequenceno:0,pagemasterseq:0,notificationcd:"",deviationprocesstype:"1",descs:"",descsdev:"",alertcd:"",parentsequenceno:0,inserttrigger:"",updatetrigger:"",deletetrigger:"",fromlimittrigger:0,tolimittrigger:0,sortsequenceno:"0",remarks:"",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:0,rowid:0},PI_deviationprocesstype:{cValidate:"",cName:"deviationprocesstype",cId:"rdbdeviationprocesstype",cRadioOptions:[{text:"LOO",value:"1"},{text:"LOI",value:"2"},{text:"LA",value:"3"}],cRadioDefaultOption:"1",cLabel:"Process Type",cLabelSize:4,cOrder:1,cProtect:!1,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_descs:{cValidate:"required|max:60",cName:"descs",cLabel:"Description",cLabelSize:4,cOrder:2,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_parentsequenceno:{dataLookUp:{LookUpCd:"GetLookupFormSequenceNo",ColumnDB:"FormSequenceNo",InitialWhere:"",ParamWhere:""},cValidate:"",cName:"parentsequenceno",cLabel:"Parent Sequence No         ",cKey:!1,cLabelSize:4,cOrder:3,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"FormSequenceNo,Descs"},PI_sortsequenceno:{cValidate:"",cName:"sortsequenceno",cLabel:"Sort Sequence No",cLabelSize:4,cOrder:4,cKey:!1,cType:"numeric",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder,cProtect:!1}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage1Data}},methods:{OndeviationprocesstypeChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},OnparentsequencenoChange:function(e){var t=this;this.$nextTick(function(){t.M_TN_DeviationChannelStep.parentsequenceno=e.id,t.M_TN_DeviationChannelStep.parentsequencenoLabel=e.label,t.inputStatus}),this.$forceUpdate()},setToolbarButton:function(){},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,t){},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){},M_Post:function(e){},M_Insert:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,DeviationProcessType:this.M_TN_DeviationChannelStep.deviationprocesstype,Descs:this.M_TN_DeviationChannelStep.descs,WorkFlowType:"D",ParentSequenceNo:""==this.M_TN_DeviationChannelStep.parentsequenceno||null==this.M_TN_DeviationChannelStep.parentsequenceno?"NULL":this.M_TN_DeviationChannelStep.parentsequenceno,SortSequenceNo:this.M_TN_DeviationChannelStep.sortsequenceno,Remarks:this.M_TN_DeviationChannelStep.remarks,UserInput:this.getDataUser().UserId};this.postJSON(this.getUrlInsert(),t).then(function(t){null!=t&&e.$parent.resultInsert(t.Message)})},M_Update:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,FormSequenceNo:this.M_TN_DeviationChannelStep.formsequenceno,DeviationProcessType:this.M_TN_DeviationChannelStep.deviationprocesstype,Descs:this.M_TN_DeviationChannelStep.descs,WorkFlowType:"D",ParentSequenceNo:""==this.M_TN_DeviationChannelStep.parentsequenceno||null==this.M_TN_DeviationChannelStep.parentsequenceno?"NULL":this.M_TN_DeviationChannelStep.parentsequenceno,SortSequenceNo:this.M_TN_DeviationChannelStep.sortsequenceno,Remarks:this.M_TN_DeviationChannelStep.remarks,UserEdit:this.getDataUser().UserId,LastUpdateStamp:this.M_TN_DeviationChannelStep.lastupdatestamp};this.postJSON(this.getUrlUpdate(),t).then(function(t){null!=t&&e.$parent.resultUpdate(t.Message)})},M_ClearForm:function(){this.M_TN_DeviationChannelStep={formsequenceno:0,pagemasterseq:0,notificationcd:"",deviationprocesstype:"1",descs:"",descsdev:"",alertcd:"",parentsequenceno:0,inserttrigger:"",updatetrigger:"",deletetrigger:"",fromlimittrigger:0,tolimittrigger:0,sortsequenceno:"0",remarks:"",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:0,rowid:0}},M_New:function(){},M_Edit:function(){},M_Delete:function(e){var t=this,n=this.FormToABSList().getRowSelected(),i=[];n.forEach(function(e){i.push({FormSequenceNo:e.FormSequenceNo,LastUpdateStamp:e.LastUpdateStamp,_Message_:""})});var a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:i};this.postJSONMulti(this.getUrlNewDeleteMulti(),a).then(function(e){null!=e&&t.$parent.resultDelete()})},getDataBy:function(e){var t=this,n={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,formsequenceno:e.FormSequenceNo};this.postEncode(this.getUrlById(),n).then(function(n){if(null!=n){var i=n.Data[0];t.M_TN_DeviationChannelStep={formsequenceno:i.formsequenceno,pagemasterseq:t.isCurrency(i.pagemasterseq,t.decimal),notificationcd:i.notificationcd,deviationprocesstype:i.deviationprocesstype,descs:i.descs,descsdev:i.descsdev,alertcd:i.alertcd,parentsequenceno:i.parentsequenceno,inserttrigger:i.inserttrigger,updatetrigger:i.updatetrigger,deletetrigger:i.deletetrigger,fromlimittrigger:t.isCurrency(i.fromlimittrigger,t.decimal),tolimittrigger:t.isCurrency(i.tolimittrigger,t.decimal),sortsequenceno:i.sortsequenceno,remarks:i.remarks,userinput:i.userinput,useredit:i.useredit,timeinput:i.timeinput,timeedit:i.timeedit,lastupdatestamp:e.LastUpdateStamp,rowid:i.rowid},t.M_TN_DeviationChannelStep.parentsequencenoLabel=null!=t.M_TN_DeviationChannelStep.parentsequenceno&&""!=t.M_TN_DeviationChannelStep.parentsequenceno?i.parentsequenceno+t.separator+i.descs:"",t.IEBy.Input=i.userinput,t.IEBy.Edit=i.useredit}})}},beforeCreate:function(){},created:function(){this.$store.commit("setFormType","List"),this.getToolbar().ProcessPS()},beforeMount:function(){},mounted:function(){this.hideSideBarMenu(),this.FormToABSList().doGetList("","eb_getList")},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),o=s,r=n("2877"),c=Object(r["a"])(o,i,a,!1,null,null,null);c.options.__file="TN_DeviationChannelStep.vue";t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0b9d18.c753ad81.js.map