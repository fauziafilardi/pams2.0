(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d208d92"],{a717:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ABSListVuex",{attrs:{prop:t.propList,title:t.data.QueryName},on:{rowClicked:t.$parent.rowClicked,rowDblClicked:t.$parent.doDoubleClick,rowLinkClick:t.$parent.rowLink,pageSize:t.$parent.M_PageSize,pagination:t.$parent.M_Pagination,filter:t.$parent.M_Advance_Filter,headTable:t.$parent.M_Head_Table,refreshColumn:t.$parent.refreshColumn}}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[a("span",{directives:[{name:"show",rawName:"v-show",value:t.IEBy.Input&&t.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[t._v("\n                    Input By : "+t._s(t.IEBy.Input)+" | Edit By : "+t._s(t.IEBy.Edit)+" "),a("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),a("b-collapse",{attrs:{id:"collapse1",visible:!0}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[a("b-form",{attrs:{"data-vv-scope":"FormScope_"+t.PageLevel+"_"+t.TabIndex,"data-vv-value-path":"FormScope_"+t.PageLevel+"_"+t.TabIndex}},[a("b-row",{staticStyle:{"padding-left":"10px"}},[a("b-col",{attrs:{md:"12",id:"col-left"}},[a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_descs",attrs:{prop:t.PI_descs},model:{value:t.M_TN_ContractDocument.descs,callback:function(e){t.$set(t.M_TN_ContractDocument,"descs",e)},expression:"M_TN_ContractDocument.descs"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSFileUpload",{ref:"ref_referencefilename",attrs:{prop:t.PI_referencefilename,file:t.M_TN_ContractDocument.documentfilename,image:t.M_TN_ContractDocument.referencefilename},on:{fileName:t.getFileName,response:t.getResponse},model:{value:t.M_TN_ContractDocument.referencefilename,callback:function(e){t.$set(t.M_TN_ContractDocument,"referencefilename",e)},expression:"M_TN_ContractDocument.referencefilename"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSTextAreaVuex",{ref:"ref_remarks",attrs:{prop:t.PI_remarks},on:{input:t.OnremarksChange},model:{value:t.M_TN_ContractDocument.remarks,callback:function(e){t.$set(t.M_TN_ContractDocument,"remarks",e)},expression:"M_TN_ContractDocument.remarks"}})],1)],1)],1)],1),a("ABSTAnalysis",{attrs:{prop:t.PTAnalysis}})],1)],1)],1)],1)],1)],1)},n=[],i=(a("ac6a"),a("ade3")),r={props:{PageLevel:"",TabIndex:"",data:""},data:function(){var t;return{ValKey:null,FormType:"List",Module:"TN",propList:{initialWhere:"ApplicationNo = '"+this.ValKey+"'",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},responseFile:null,M_TN_ContractDocument:{subportfoliocd:this.getDataUser().SubPortfolioCd,applicationno:"",sequenceno:0,descs:"",documentfilename:"",referencefilename:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:0,t0:"",t1:"",t2:"",t3:"",t4:"",t5:"",t6:"",t7:"",t8:"",t9:"",t10:"",t11:"",t12:"",t13:"",t14:"",t15:"",t16:"",t17:"",t18:"",t19:"",t20:"",t21:"",t22:"",t23:"",t24:"",t25:"",t26:"",t27:"",t28:"",t29:"",t30:"",controlsequenceno:0,rowid:0},PI_referencefilename:(t={cValidate:"required",cName:"documentfilename",cLabel:"File Name",cLabelSize:4,cAccept:"",cDelimiter:"",cSubPortfolio:this.getDataUser().SubPortfolioCd,cPath:"SaveLocation/SubPortfolio/"+this.getDataUser().SubPortfolioCd+"/Contract",cOrder:0,cVisible:!0,cModule:"TN",cPlaceholder:"Choose a file...",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex},Object(i["a"])(t,"cVisible",!0),Object(i["a"])(t,"cIsShowPreview",!0),t),PI_descs:{cValidate:"required|max:150",cName:"descs",cLabel:"Description",cLabelSize:4,cOrder:0,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_remarks:{cValidate:"",cName:"remarks",cLabel:"Remarks",cLabelSize:4,cOrder:0,cKey:!1,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder,cProtect:!1}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage2Data},DataRowPage1:function(){return this.$store.getters.GetPage1Data}},methods:{getFileName:function(t){this.M_TN_ContractDocument.documentfilename=t},getResponse:function(t){this.responseFile=t},OnremarksChange:function(t){var e=this;this.$nextTick(function(){e.inputStatus}),this.$forceUpdate()},setToolbarButton:function(){},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(t){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(t,e){},rowLink:function(t){this.$refs.modalTest.show()},paramFromParent:function(){this.$parent.showForm=!1;var t=this.$store.getters.GetPage1Data;this.M_TN_ContractDocument.applicationno=t.ApplicationNo,this.propList.initialWhere="SubPortfolioCd ='"+this.getDataUser().SubPortfolioCd+"' AND ApplicationNo = '"+t.ApplicationNo+"' ",this.FormToABSList().doGetList("","eb_getList")},M_Insert:function(){var t=this,e={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,ApplicationNo:this.M_TN_ContractDocument.applicationno,SubPortfolioCd:this.getDataUser().SubPortfolioCd,Descs:this.M_TN_ContractDocument.descs,DocumentFileName:this.M_TN_ContractDocument.documentfilename,ReferenceFileName:this.M_TN_ContractDocument.referencefilename,Remarks:this.M_TN_ContractDocument.remarks,UserInput:this.getDataUser().UserId};this.postJSON(this.getUrlInsert(),e).then(function(e){null!=e&&t.$parent.resultInsert(e.Message)})},M_Update:function(){var t=this,e={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,ApplicationNo:this.M_TN_ContractDocument.applicationno,SubPortfolioCd:this.getDataUser().SubPortfolioCd,SequenceNo:this.M_TN_ContractDocument.sequenceno,Descs:this.M_TN_ContractDocument.descs,DocumentFileName:this.M_TN_ContractDocument.documentfilename,ReferenceFileName:this.M_TN_ContractDocument.referencefilename,Remarks:this.M_TN_ContractDocument.remarks,UserEdit:this.getDataUser().UserId,LastUpdateStamp:this.M_TN_ContractDocument.lastupdatestamp};this.postJSON(this.getUrlUpdate(),e).then(function(e){null!=e&&t.$parent.resultUpdate(e.Message)})},M_ClearForm:function(){this.M_TN_ContractDocument={subportfoliocd:this.getDataUser().SubPortfolioCd,applicationno:"",sequenceno:0,descs:"",documentfilename:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:0,t0:"",t1:"",t2:"",t3:"",t4:"",t5:"",t6:"",t7:"",t8:"",t9:"",t10:"",t11:"",t12:"",t13:"",t14:"",t15:"",t16:"",t17:"",t18:"",t19:"",t20:"",t21:"",t22:"",t23:"",t24:"",t25:"",t26:"",t27:"",t28:"",t29:"",t30:"",controlsequenceno:0,rowid:0}},M_New:function(){var t=this.$store.getters.GetPage1Data;this.M_TN_ContractDocument.applicationno=t.ApplicationNo},M_Edit:function(){},M_Delete:function(t){var e=this,a=this.FormToABSList().getRowSelected(),o=[];a.forEach(function(t){o.push({ApplicationNo:t.ApplicationNo,SubPortfolioCd:e.getDataUser().SubPortfolioCd,SequenceNo:t.SequenceNo,LastUpdateStamp:t.LastUpdateStamp,_Message_:""})});var n={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:o};this.postJSONMulti(this.getUrlNewDeleteMulti(),n).then(function(t){null!=t&&e.$parent.resultDelete()})},getDataBy:function(t){var e=this,a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,applicationno:t.ApplicationNo,SubPortfolioCd:this.getDataUser().SubPortfolioCd,sequenceno:t.SequenceNo};this.postEncode(this.getUrlById(),a).then(function(a){if(null!=a){var o=a.Data[0];e.M_TN_ContractDocument={subportfoliocd:o.subportfoliocd,applicationno:t.ApplicationNo,sequenceno:o.sequenceno,descs:o.descs,documentfilename:o.documentfilename,referencefilename:o.referencefilename,remarks:o.remarks,userinput:o.userinput,useredit:o.useredit,timeinput:o.timeinput,timeedit:o.timeedit,lastupdatestamp:t.LastUpdateStamp,t0:o.t0,t1:o.t1,t2:o.t2,t3:o.t3,t4:o.t4,t5:o.t5,t6:o.t6,t7:o.t7,t8:o.t8,t9:o.t9,t10:o.t10,t11:o.t11,t12:o.t12,t13:o.t13,t14:o.t14,t15:o.t15,t16:o.t16,t17:o.t17,t18:o.t18,t19:o.t19,t20:o.t20,t21:o.t21,t22:o.t22,t23:o.t23,t24:o.t24,t25:o.t25,t26:o.t26,t27:o.t27,t28:o.t28,t29:o.t29,t30:o.t30,controlsequenceno:e.isCurrency(o.controlsequenceno,e.decimal),rowid:e.isCurrency(o.rowid,e.decimal)},e.IEBy.Input=o.userinput,e.IEBy.Edit=o.useredit}})}},created:function(){},beforeMount:function(){},mounted:function(){this.hideSideBarMenu()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},s=r,c=a("2877"),l=Object(c["a"])(s,o,n,!1,null,null,null);l.options.__file="TN_ContractDocument.vue";e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d208d92.b3b76fa3.js.map