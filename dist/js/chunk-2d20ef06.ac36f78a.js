(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20ef06"],{b200:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ABSListVuex",{attrs:{prop:e.propList,title:e.data.QueryName},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table,refreshColumn:e.$parent.refreshColumn}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[a("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                    Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),a("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),a("b-collapse",{attrs:{id:"collapse1",visible:!0}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[a("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[a("b-row",{staticStyle:{"padding-left":"10px"}},[a("b-col",{attrs:{md:"12",id:"col-left"}},[a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_descs",attrs:{prop:e.PI_descs},model:{value:e.M_TN_ContractSubleaseDocument.descs,callback:function(t){e.$set(e.M_TN_ContractSubleaseDocument,"descs",t)},expression:"M_TN_ContractSubleaseDocument.descs"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSFileUpload",{ref:"ref_referencefilename",attrs:{prop:e.PI_referencefilename,file:e.M_TN_ContractSubleaseDocument.documentfilename,image:e.M_TN_ContractSubleaseDocument.documentfilename},on:{fileName:e.getFileName,response:e.getResponse},model:{value:e.M_TN_ContractSubleaseDocument.documentfilename,callback:function(t){e.$set(e.M_TN_ContractSubleaseDocument,"documentfilename",t)},expression:"M_TN_ContractSubleaseDocument.documentfilename"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSTextAreaVuex",{ref:"ref_remarks",attrs:{prop:e.PI_remarks},on:{input:e.OnremarksChange},model:{value:e.M_TN_ContractSubleaseDocument.remarks,callback:function(t){e.$set(e.M_TN_ContractSubleaseDocument,"remarks",t)},expression:"M_TN_ContractSubleaseDocument.remarks"}})],1)],1)],1)],1),a("ABSTAnalysis",{attrs:{prop:e.PTAnalysis}})],1)],1)],1)],1)],1)],1)},n=[],o=(a("ac6a"),a("ade3")),i=(a("cadf"),a("551c"),a("097d"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){var e;return{ValKey:null,FormType:"List",Module:"TN",propList:{initialWhere:"ApplicationNo = '"+this.ValKey+"'",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},responseFile:null,M_TN_ContractSubleaseDocument:{subportfoliocd:this.getDataUser().SubPortfolioCd,subleaseassignmentno:"",sadocumentsequenceno:0,descs:"",documentfilename:"",referencefilename:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:0,t0:"",t1:"",t2:"",t3:"",t4:"",t5:"",t6:"",t7:"",t8:"",t9:"",t10:"",t11:"",t12:"",t13:"",t14:"",t15:"",t16:"",t17:"",t18:"",t19:"",t20:"",t21:"",t22:"",t23:"",t24:"",t25:"",t26:"",t27:"",t28:"",t29:"",t30:"",controlsequenceno:0,rowid:0},PI_referencefilename:(e={cValidate:"required",cName:"documentfilename",cLabel:"File Name",cLabelSize:4,cAccept:"",cDelimiter:"",cSubPortfolio:this.getDataUser().SubPortfolioCd,cPath:"SaveLocation/SubPortfolio/"+this.getDataUser().SubPortfolioCd+"/TN_ContractAssignment",cOrder:2,cVisible:!0,cModule:"TN",cPlaceholder:"Choose a file...",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex},Object(o["a"])(e,"cVisible",!0),Object(o["a"])(e,"cIsShowPreview",!0),e),PI_descs:{cValidate:"required|max:150",cName:"descs",cLabel:"Description",cLabelSize:4,cOrder:1,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_remarks:{cValidate:"",cName:"remarks",cLabel:"Remarks",cLabelSize:4,cOrder:3,cKey:!1,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder,cProtect:!1}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage2Data},DataRowPage1:function(){return this.$store.getters.GetPage1Data}},methods:{OnremarksChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},setToolbarButton:function(){},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,t){},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){this.$parent.showForm=!1;var e=this.$store.getters.GetPage1Data;"New"==e.Status?(this.FormType="List",this.$store.commit("setFormType","List"),this.getToolbar().ProcessPS()):(this.FormType="View",this.$store.commit("setFormType","View"),this.getToolbar().ProcessPS()),this.M_TN_ContractSubleaseDocument.subleaseassignmentno=e.SubleaseAssignmentNo,this.propList.initialWhere=" SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' and SubleaseAssignmentNo = '"+e.SubleaseAssignmentNo+"' ",this.FormToABSList().doGetList("","eb_getList")},M_Insert:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,SubleaseAssignmentNo:this.M_TN_ContractSubleaseDocument.subleaseassignmentno,Descs:this.M_TN_ContractSubleaseDocument.descs,DocumentFileName:this.M_TN_ContractSubleaseDocument.documentfilename,Remarks:this.M_TN_ContractSubleaseDocument.remarks,UserInput:this.getDataUser().UserId};this.postJSON(this.getUrlInsert(),t).then(function(t){null!=t&&e.$parent.resultInsert(t.Message)})},M_Update:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SADocumentSequenceNo:this.M_TN_ContractSubleaseDocument.sadocumentsequenceno,SubleaseAssignmentNo:this.M_TN_ContractSubleaseDocument.subleaseassignmentno,Descs:this.M_TN_ContractSubleaseDocument.descs,DocumentFileName:this.M_TN_ContractSubleaseDocument.documentfilename,Remarks:this.M_TN_ContractSubleaseDocument.remarks,UserEdit:this.getDataUser().UserId,LastUpdateStamp:this.M_TN_ContractSubleaseDocument.lastupdatestamp};this.postJSON(this.getUrlUpdate(),t).then(function(t){null!=t&&e.$parent.resultUpdate(t.Message)})},M_ClearForm:function(){this.M_TN_ContractSubleaseDocument={subportfoliocd:this.getDataUser().SubPortfolioCd,subleaseassignmentno:"",sadocumentsequenceno:0,descs:"",documentfilename:"",referencefilename:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:0,t0:"",t1:"",t2:"",t3:"",t4:"",t5:"",t6:"",t7:"",t8:"",t9:"",t10:"",t11:"",t12:"",t13:"",t14:"",t15:"",t16:"",t17:"",t18:"",t19:"",t20:"",t21:"",t22:"",t23:"",t24:"",t25:"",t26:"",t27:"",t28:"",t29:"",t30:"",controlsequenceno:0,rowid:0}},M_New:function(){var e=this.$store.getters.GetPage1Data;this.M_TN_ContractSubleaseDocument.subleaseassignmentno=e.SubleaseAssignmentNo},M_Edit:function(){},M_Delete:function(e){var t=this,a=this.FormToABSList().getRowSelected(),s=[];a.forEach(function(e){s.push({SADocumentSequenceNo:e.SADocumentSequenceNo,SubleaseAssignmentNo:t.DataRowPage1.SubleaseAssignmentNo,LastUpdateStamp:e.LastUpdateStamp,_Message_:""})});var n={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:s};this.postJSONMulti(this.getUrlNewDeleteMulti(),n).then(function(e){null!=e&&t.$parent.resultDelete()})},getDataBy:function(e){var t=this,a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubleaseAssignmentNo:this.DataRowPage1.SubleaseAssignmentNo,SADocumentSequenceNo:e.SADocumentSequenceNo};this.postEncode(this.getUrlById(),a).then(function(a){if(null!=a){var s=a.Data[0];t.M_TN_ContractSubleaseDocument={subportfoliocd:s.subportfoliocd,subleaseassignmentno:t.DataRowPage1.SubleaseAssignmentNo,sadocumentsequenceno:e.SADocumentSequenceNo,descs:s.descs,documentfilename:s.documentfilename,remarks:s.remarks,userinput:s.userinput,useredit:s.useredit,timeinput:s.timeinput,timeedit:s.timeedit,lastupdatestamp:e.LastUpdateStamp,t0:s.t0,t1:s.t1,t2:s.t2,t3:s.t3,t4:s.t4,t5:s.t5,t6:s.t6,t7:s.t7,t8:s.t8,t9:s.t9,t10:s.t10,t11:s.t11,t12:s.t12,t13:s.t13,t14:s.t14,t15:s.t15,t16:s.t16,t17:s.t17,t18:s.t18,t19:s.t19,t20:s.t20,t21:s.t21,t22:s.t22,t23:s.t23,t24:s.t24,t25:s.t25,t26:s.t26,t27:s.t27,t28:s.t28,t29:s.t29,t30:s.t30,controlsequenceno:s.controlsequenceno,rowid:s.rowid},t.IEBy.Input=s.userinput,t.IEBy.Edit=s.useredit}})},getFileName:function(e){this.M_TN_ContractSubleaseDocument.documentfilename=e},getResponse:function(e){this.responseFile=e}},created:function(){},beforeMount:function(){},mounted:function(){this.hideSideBarMenu()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),r=i,c=a("2877"),u=Object(c["a"])(r,s,n,!1,null,null,null);u.options.__file="TN_ContractSubleaseDocument.vue";t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d20ef06.ac36f78a.js.map