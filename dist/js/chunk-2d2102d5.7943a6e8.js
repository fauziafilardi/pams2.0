(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2102d5"],{b77a:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ABSListVuex",{attrs:{prop:e.propList,title:e.data.QueryName},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table,refreshColumn:e.$parent.refreshColumn}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[a("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                    Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),a("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),a("b-collapse",{attrs:{id:"collapse1",visible:!0}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[a("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[a("b-row",{staticStyle:{"padding-left":"10px"}},[a("b-col",{attrs:{md:"12",id:"col-left"}},[a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_descs",attrs:{prop:e.PI_descs},model:{value:e.M_TN_ContractLeaseProgress.descs,callback:function(t){e.$set(e.M_TN_ContractLeaseProgress,"descs",t)},expression:"M_TN_ContractLeaseProgress.descs"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_processtype",attrs:{prop:e.PI_processtype},model:{value:e.M_TN_ContractLeaseProgress.processtype,callback:function(t){e.$set(e.M_TN_ContractLeaseProgress,"processtype",t)},expression:"M_TN_ContractLeaseProgress.processtype"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_mandatory",attrs:{prop:e.PI_mandatory},model:{value:e.M_TN_ContractLeaseProgress.mandatory,callback:function(t){e.$set(e.M_TN_ContractLeaseProgress,"mandatory",t)},expression:"M_TN_ContractLeaseProgress.mandatory"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_documentrequired",attrs:{prop:e.PI_documentrequired},model:{value:e.M_TN_ContractLeaseProgress.documentrequired,callback:function(t){e.$set(e.M_TN_ContractLeaseProgress,"documentrequired",t)},expression:"M_TN_ContractLeaseProgress.documentrequired"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputDateVuex",{ref:"ref_estimatedstartdate",attrs:{prop:e.PI_estimatedstartdate},model:{value:e.M_TN_ContractLeaseProgress.estimatedstartdate,callback:function(t){e.$set(e.M_TN_ContractLeaseProgress,"estimatedstartdate",t)},expression:"M_TN_ContractLeaseProgress.estimatedstartdate"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSTextAreaVuex",{ref:"ref_remarks",attrs:{prop:e.PI_remarks},on:{input:e.OnremarksChange},model:{value:e.M_TN_ContractLeaseProgress.remarks,callback:function(t){e.$set(e.M_TN_ContractLeaseProgress,"remarks",t)},expression:"M_TN_ContractLeaseProgress.remarks"}})],1)],1)],1)],1),a("ABSTAnalysis",{attrs:{prop:e.PTAnalysis}})],1)],1)],1)],1)],1)],1)},r=[],o={props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{ValKey:null,FormType:"List",Module:"TN",propList:{initialWhere:"ApplicationNo = '"+this.ValKey+"'",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_TN_ContractLeaseProgress:{subportfoliocd:this.getDataUser().SubPortfolioCd,sequenceno:0,applicationno:"",descs:"",processtype:"",mandatory:"",documentrequired:"",estimatedstartdate:"",actualstartdate:"",status:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,lastupdatestamp:0,rowid:0},PI_descs:{cValidate:"",cName:"descs",cLabel:"Description",cLabelSize:4,cOrder:0,cKey:!1,cType:"text",cDecimal:0,cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_processtype:{cValidate:"",cName:"processtype",cLabel:"Process Type",cLabelSize:4,cOrder:0,cKey:!1,cType:"text",cDecimal:0,cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_mandatory:{cValidate:"",cName:"mandatory",cLabel:"Mandatory",cLabelSize:4,cOrder:0,cKey:!1,cType:"text",cDecimal:0,cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_documentrequired:{cValidate:"",cName:"documentrequired",cLabel:"Document Required",cLabelSize:4,cOrder:0,cKey:!1,cType:"text",cDecimal:0,cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_estimatedstartdate:{cValidate:"",cName:"estimatedstartdate",cLabel:"Estimated Start Date",cLabelSize:4,cOrder:1,cKey:!1,cDecimal:0,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_remarks:{cValidate:"",cName:"remarks",cLabel:"Remarks",cLabelSize:4,cOrder:2,cKey:!1,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage2Data},DataRowPage1:function(){return this.$store.getters.GetPage1Data}},methods:{OnremarksChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},setToolbarButton:function(){},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,t){},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){this.$parent.showForm=!1;var e=this.$store.getters.GetPage1Data;"A"!=e.StatusCd&&1!=e.ContractStatus||"N"!=e.StatusCd&&1!=e.ContractStatus||"C"==e.StatusCd||"X"==e.StatusCd?(this.FormType="View",this.$store.commit("setFormType","View"),this.getToolbar().ProcessPS()):(this.FormType="List",this.$store.commit("setFormType","List"),this.getToolbar().ProcessPS()),this.M_TN_ContractLeaseProgress.applicationno=e.ApplicationNo,this.propList.initialWhere=" ApplicationNo = '"+e.ApplicationNo+"' ",this.FormToABSList().doGetList("","eb_getList")},M_Insert:function(){},M_Update:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,ApplicationNo:this.M_TN_ContractLeaseProgress.applicationno,EstimatedStartDate:this.M_TN_ContractLeaseProgress.estimatedstartdate,Remarks:this.M_TN_ContractLeaseProgress.remarks,UserEdit:this.getDataUser().UserId,LastUpdateStamp:this.M_TN_ContractLeaseProgress.lastupdatestamp};this.postJSON(this.getUrlUpdate(),t).then(function(t){null!=t&&e.$parent.resultUpdate(t.Message)})},M_ClearForm:function(){this.M_TN_ContractLeaseProgress={subportfoliocd:this.getDataUser().SubPortfolioCd,sequenceno:0,applicationno:"",descs:"",processtype:"",mandatory:"",documentrequired:"",estimatedstartdate:"",actualstartdate:"",status:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,lastupdatestamp:0,rowid:0}},M_New:function(){var e=this.$store.getters.GetPage1Data;this.M_TN_ContractLeaseProgress.applicationno=e.ApplicationNo},M_Edit:function(){},M_Delete:function(e){},getDataBy:function(e){var t=this,a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,sequenceno:e.SequenceNo,applicationno:e.ApplicationNo};this.postEncode(this.getUrlById(),a).then(function(a){if(null!=a){var s=a.Data[0];t.M_TN_ContractLeaseProgress={subportfoliocd:s.subportfoliocd,sequenceno:e.SequenceNo,applicationno:e.ApplicationNo,descs:s.descs,processtype:s.processtype,mandatory:s.mandatory,documentrequired:s.documentrequired,estimatedstartdate:s.estimatedstartdate,actualstartdate:s.actualstartdate,status:s.status,remarks:s.remarks,userinput:s.userinput,useredit:s.useredit,lastupdatestamp:e.LastUpdateStamp,rowid:s.rowid},t.IEBy.Input=s.userinput,t.IEBy.Edit=s.useredit}})}},created:function(){},beforeMount:function(){},mounted:function(){this.hideSideBarMenu()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},i=o,n=a("2877"),c=Object(n["a"])(i,s,r,!1,null,null,null);c.options.__file="TN_ContractLeaseProgress.vue";t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d2102d5.7943a6e8.js.map