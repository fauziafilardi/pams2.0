(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2178e9"],{c6dd:function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("ABSListVuex",{attrs:{prop:e.propList,title:e.data.QueryName},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table,refreshColumn:e.$parent.refreshColumn}}),o("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[o("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[o("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                    Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),o("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),o("b-collapse",{attrs:{id:"collapse1",visible:!0}},[o("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[o("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[o("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[o("b-row",{staticStyle:{"padding-left":"10px"}},[o("b-col",{attrs:{md:"12",id:"col-left"}},[o("b-row",[o("b-col",{attrs:{md:"6"}},[o("ABSTextAreaVuex",{ref:"ref_descs",attrs:{prop:e.PI_descs},model:{value:e.M_TN_LeaseProgressMonitoringDocument.descs,callback:function(t){e.$set(e.M_TN_LeaseProgressMonitoringDocument,"descs",t)},expression:"M_TN_LeaseProgressMonitoringDocument.descs"}})],1)],1),o("b-row",[o("b-col",{attrs:{md:"6"}},[o("ABSFileUpload",{ref:"ref_referencefilename",attrs:{prop:e.PI_referencefilename,file:e.M_TN_LeaseProgressMonitoringDocument.documentfilename,image:e.M_TN_LeaseProgressMonitoringDocument.documentfilename},on:{fileName:e.getFileName,response:e.getResponse},model:{value:e.M_TN_LeaseProgressMonitoringDocument.documentfilename,callback:function(t){e.$set(e.M_TN_LeaseProgressMonitoringDocument,"documentfilename",t)},expression:"M_TN_LeaseProgressMonitoringDocument.documentfilename"}})],1)],1),o("b-row",[o("b-col",{attrs:{md:"6"}},[o("ABSTextAreaVuex",{ref:"ref_remarks",attrs:{prop:e.PI_remarks},on:{input:e.OnremarksChange},model:{value:e.M_TN_LeaseProgressMonitoringDocument.remarks,callback:function(t){e.$set(e.M_TN_LeaseProgressMonitoringDocument,"remarks",t)},expression:"M_TN_LeaseProgressMonitoringDocument.remarks"}})],1)],1)],1)],1),o("ABSTAnalysis",{attrs:{prop:e.PTAnalysis}})],1)],1)],1)],1)],1)],1)},n=[],i=(o("ac6a"),o("ade3")),a={props:{PageLevel:"",TabIndex:"",data:""},data:function(){var e;return{ValKey:null,FormType:"List",Module:"TN",propList:{initialWhere:"",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_TN_LeaseProgressMonitoringDocument:{subportfoliocd:this.getDataUser().SubPortfolioCd,applicationno:"",contractleaseprogresssequenceno:0,sequenceno:0,descs:"",documentfilename:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:0,controlsequenceno:0,rowid:0},PI_referencefilename:(e={cValidate:"required",cName:"documentfilename",cLabel:"File Name",cLabelSize:4,cAccept:"",cDelimiter:"",cSubPortfolio:this.getDataUser().SubPortfolioCd,cPath:"SaveLocation/SubPortfolio/"+this.getDataUser().SubPortfolioCd+"/Contract",cOrder:2,cVisible:!0,cModule:"TN",cPlaceholder:"Choose a file...",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex},Object(i["a"])(e,"cVisible",!0),Object(i["a"])(e,"cIsShowPreview",!0),e),PI_descs:{cValidate:"required|max:150",cName:"descs",cLabel:"Description",cLabelSize:4,cOrder:1,cKey:!1,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_remarks:{cValidate:"",cName:"remarks",cLabel:"Remarks",cLabelSize:4,cOrder:3,cKey:!1,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder,cProtect:!1}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage2Data},DataRowPage1:function(){return this.$store.getters.GetPage1Data}},methods:{getFileName:function(e){this.M_TN_LeaseProgressMonitoringDocument.documentfilename=e},getResponse:function(e){this.responseFile=e},OnremarksChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},setToolbarButton:function(){},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,t){},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){this.$parent.showForm=!1;var e=this.$store.getters.GetPage1Data;this.M_TN_LeaseProgressMonitoringDocument.stepno=e.StepNo,this.M_TN_LeaseProgressMonitoringDocument.applicationno=e.ApplicationNo,this.propList.initialWhere="SubPortfolioCd='"+this.getDataUser().SubPortfolioCd+"' AND ApplicationNo='"+e.ApplicationNo+"' AND ContractLeaseProgressSequenceNo = '"+e.StepNo+"' ",this.FormToABSList().doGetList("","eb_getList")},M_Insert:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,ApplicationNo:this.M_TN_LeaseProgressMonitoringDocument.applicationno,SubPortfolioCd:this.getDataUser().SubPortfolioCd,Descs:this.M_TN_LeaseProgressMonitoringDocument.descs,DocumentFileName:this.M_TN_LeaseProgressMonitoringDocument.documentfilename,Remarks:this.M_TN_LeaseProgressMonitoringDocument.remarks,UserInput:this.getDataUser().UserId,StepNo:this.M_TN_LeaseProgressMonitoringDocument.stepno};this.postJSON(this.getUrlInsert(),t).then(function(t){null!=t&&e.$parent.resultInsert(t.Message)})},M_Update:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,ApplicationNo:this.M_TN_LeaseProgressMonitoringDocument.applicationno,SubPortfolioCd:this.getDataUser().SubPortfolioCd,Descs:this.M_TN_LeaseProgressMonitoringDocument.descs,DocumentFileName:this.M_TN_LeaseProgressMonitoringDocument.documentfilename,Remarks:this.M_TN_LeaseProgressMonitoringDocument.remarks,UserEdit:this.getDataUser().UserId,LastUpdateStamp:this.M_TN_LeaseProgressMonitoringDocument.lastupdatestamp,StepNo:this.M_TN_LeaseProgressMonitoringDocument.contractleaseprogresssequenceno};this.postJSON(this.getUrlUpdate(),t).then(function(t){null!=t&&e.$parent.resultUpdate(t.Message)})},M_ClearForm:function(){this.M_TN_LeaseProgressMonitoringDocument={subportfoliocd:this.getDataUser().SubPortfolioCd,applicationno:"",contractleaseprogresssequenceno:0,sequenceno:0,descs:"",documentfilename:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:0,controlsequenceno:0,rowid:0}},M_New:function(){var e=this.$store.getters.GetPage1Data;this.M_TN_LeaseProgressMonitoringDocument.stepno=e.StepNo,this.M_TN_LeaseProgressMonitoringDocument.applicationno=e.ApplicationNo},M_Edit:function(){},M_Delete:function(e){var t=this,o=this.FormToABSList().getRowSelected(),s=[];o.forEach(function(e){s.push({SubPortfolioCd:t.getDataUser().SubPortfolioCd,ApplicationNo:e.ApplicationNo,StepNo:e.ContractLeaseProgressSequenceNo,SequenceNo:e.SequenceNo,LastUpdateStamp:e.LastUpdateStamp,_Message_:""})});var n={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:s};this.postJSONMulti(this.getUrlNewDeleteMulti(),n).then(function(e){null!=e&&t.$parent.resultDelete()})},getDataBy:function(e){var t=this;console.log(e);var o={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,applicationno:e.ApplicationNo,SubPortfolioCd:this.getDataUser().SubPortfolioCd,sequenceno:e.SequenceNo,StepNo:e.ContractLeaseProgressSequenceNo};this.postEncode(this.getUrlById(),o).then(function(o){if(null!=o){var s=o.Data[0];console.log(s),t.M_TN_LeaseProgressMonitoringDocument={applicationno:s.applicationno,contractleaseprogresssequenceno:s.contractleaseprogresssequenceno,sequenceno:s.sequenceno,descs:s.descs,documentfilename:s.documentfilename,remarks:s.remarks,userinput:s.userinput,useredit:s.useredit,timeinput:s.timeinput,timeedit:s.timeedit,lastupdatestamp:e.LastUpdateStamp,controlsequenceno:s.controlsequenceno,rowid:s.rowid},t.IEBy.Input=s.userinput,t.IEBy.Edit=s.useredit}})}},created:function(){},beforeMount:function(){},mounted:function(){this.hideSideBarMenu()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},r=a,c=o("2877"),l=Object(c["a"])(r,s,n,!1,null,null,null);l.options.__file="TN_LeaseProgressMonitoringDocument.vue";t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d2178e9.2d9716cd.js.map