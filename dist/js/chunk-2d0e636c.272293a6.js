(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e636c"],{9890:function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("ABSListVuex",{attrs:{prop:e.propList,title:e.data.QueryName},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table,refreshColumn:e.$parent.refreshColumn}}),i("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[i("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[i("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                    Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),i("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),i("b-collapse",{attrs:{id:"collapse1",visible:!0}},[i("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[i("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[i("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[i("b-row",{staticStyle:{"padding-left":"10px"}},[i("b-col",{attrs:{md:"12",id:"col-left"}},[i("b-row",[i("b-col",{attrs:{md:"6"}},[i("ABSinputTextVuex",{ref:"ref_descs",attrs:{prop:e.PI_descs},model:{value:e.M_TN_LeaseProgressMonitoringPicture.descs,callback:function(t){e.$set(e.M_TN_LeaseProgressMonitoringPicture,"descs",t)},expression:"M_TN_LeaseProgressMonitoringPicture.descs"}})],1)],1),i("b-row",[i("b-col",{attrs:{md:"6"}},[i("ABSTextAreaVuex",{ref:"ref_remarks",attrs:{prop:e.PI_remarks},on:{input:e.OnremarksChange},model:{value:e.M_TN_LeaseProgressMonitoringPicture.remarks,callback:function(t){e.$set(e.M_TN_LeaseProgressMonitoringPicture,"remarks",t)},expression:"M_TN_LeaseProgressMonitoringPicture.remarks"}})],1)],1),i("b-row",[i("b-col",{attrs:{md:"6"}},[i("ABSFileUpload",{ref:"ref_referencefilename",attrs:{prop:e.PI_referencefilename,file:e.M_TN_LeaseProgressMonitoringPicture.picturefilename,image:e.M_TN_LeaseProgressMonitoringPicture.referencefilename},on:{fileName:e.getFileName},model:{value:e.M_TN_LeaseProgressMonitoringPicture.referencefilename,callback:function(t){e.$set(e.M_TN_LeaseProgressMonitoringPicture,"referencefilename",t)},expression:"M_TN_LeaseProgressMonitoringPicture.referencefilename"}})],1)],1)],1)],1),i("ABSTAnalysis",{attrs:{prop:e.PTAnalysis}})],1)],1)],1)],1)],1)],1)},s=[],o=(i("ac6a"),i("ade3")),a=(i("cadf"),i("551c"),i("097d"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{ValKey:null,FormType:"List",Module:"TN",propList:{initialWhere:"",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_TN_LeaseProgressMonitoringPicture:{subportfoliocd:this.getDataUser().SubPortfolioCd,applicationno:"",contractleaseprogresssequenceno:0,sequenceno:0,descs:"",picturefilename:"",referencefilename:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:"",controlsequenceno:0,rowid:0},PI_descs:{cValidate:"required|max:150",cName:"descs",cLabel:"Description ",cLabelSize:4,cOrder:0,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_remarks:{cValidate:"",cName:"remarks",cLabel:"Remarks",cLabelSize:4,cOrder:0,cKey:!1,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_referencefilename:Object(o["a"])({cValidate:"required",cName:"referencefilename",cLabel:"Picture File Name ",cLabelSize:4,cOrder:0,cVisible:!0,cModule:"TN",cPlaceholder:"Choose a file...",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex},"cVisible",!0),PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder,cProtect:!1}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage2Data},DataRowPage1:function(){return this.$store.getters.GetPage1Data}},methods:{OnremarksChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},setToolbarButton:function(){},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,t){},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){this.$parent.showForm=!1;var e=this.$store.getters.GetPage1Data;this.M_TN_LeaseProgressMonitoringPicture.stepno=e.StepNo,this.propList.initialWhere="SubPortfolioCd='"+this.getDataUser().SubPortfolioCd+"' AND ApplicationNo='"+e.ApplicationNo+"' AND ContractLeaseProgressSequenceNo = '"+e.StepNo+"' ",this.FormToABSList().doGetList("","eb_getList")},M_Insert:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCD:this.getDataUser().SubPortfolioCd,ApplicationNo:this.M_TN_LeaseProgressMonitoringPicture.applicationno,Descs:this.M_TN_LeaseProgressMonitoringPicture.descs,PictureFileName:this.M_TN_LeaseProgressMonitoringPicture.picturefilename,ReferenceFileName:this.M_TN_LeaseProgressMonitoringPicture.referencefilename,Remarks:this.M_TN_LeaseProgressMonitoringPicture.remarks,UserInput:this.getDataUser().UserId,StepNo:this.M_TN_LeaseProgressMonitoringPicture.stepno};this.postJSON(this.getUrlInsert(),t).then(function(t){null!=t&&e.$parent.resultInsert(t.Message)})},M_Update:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCD:this.getDataUser().SubPortfolioCd,ApplicationNo:this.M_TN_LeaseProgressMonitoringPicture.applicationno,Descs:this.M_TN_LeaseProgressMonitoringPicture.descs,PictureFileName:this.M_TN_LeaseProgressMonitoringPicture.picturefilename,ReferenceFileName:this.M_TN_LeaseProgressMonitoringPicture.referencefilename,SequenceNo:this.M_TN_LeaseProgressMonitoringPicture.sequenceno,Remarks:this.M_TN_LeaseProgressMonitoringPicture.remarks,UserEdit:this.getDataUser().UserId,LastUpdateStamp:this.M_TN_LeaseProgressMonitoringPicture.lastupdatestamp,StepNo:this.M_TN_LeaseProgressMonitoringPicture.contractleaseprogresssequenceno};this.postJSON(this.getUrlUpdate(),t).then(function(t){null!=t&&e.$parent.resultUpdate(t.Message)})},M_ClearForm:function(){this.M_TN_LeaseProgressMonitoringPicture={subportfoliocd:this.getDataUser().SubPortfolioCd,applicationno:"",contractleaseprogresssequenceno:0,sequenceno:0,descs:"",picturefilename:"",referencefilename:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:"",controlsequenceno:0,rowid:0}},M_New:function(){var e=this.$store.getters.GetPage1Data;this.M_TN_LeaseProgressMonitoringPicture.stepno=e.StepNo,this.M_TN_LeaseProgressMonitoringPicture.applicationno=e.ApplicationNo},M_Edit:function(){},M_Delete:function(e){var t=this,i=this.FormToABSList().getRowSelected(),r=[];i.forEach(function(e){r.push({SubPortfolioCD:t.getDataUser().SubPortfolioCd,ApplicationNo:e.ApplicationNo,StepNo:e.ContractLeaseProgressSequenceNo,LastUpdateStamp:e.LastUpdateStamp,_Message_:""})});var s={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:r};this.postJSONMulti(this.getUrlNewDeleteMulti(),s).then(function(e){null!=e&&t.$parent.resultDelete()})},getDataBy:function(e){var t=this,i={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,applicationno:e.ApplicationNo,sequenceno:e.SequenceNo,StepNo:e.ContractLeaseProgressSequenceNo};this.postEncode(this.getUrlById(),i).then(function(i){if(null!=i){var r=i.Data[0];t.M_TN_LeaseProgressMonitoringPicture={subportfoliocd:r.subportfoliocd,applicationno:r.applicationno,contractleaseprogresssequenceno:r.contractleaseprogresssequenceno,sequenceno:r.sequenceno,descs:r.descs,picturefilename:r.picturefilename,referencefilename:r.referencefilename,remarks:r.remarks,userinput:r.userinput,useredit:r.useredit,timeinput:r.timeinput,timeedit:r.timeedit,lastupdatestamp:e.LastUpdateStamp,controlsequenceno:r.controlsequenceno,rowid:r.rowid},t.IEBy.Input=r.userinput,t.IEBy.Edit=r.useredit}})},getFileName:function(e){this.M_TN_LeaseProgressMonitoringPicture.picturefilename=e}},created:function(){},beforeMount:function(){},mounted:function(){this.hideSideBarMenu()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),n=a,c=i("2877"),l=Object(c["a"])(n,r,s,!1,null,null,null);l.options.__file="TN_LeaseProgressMonitoringPicture.vue";t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0e636c.272293a6.js.map