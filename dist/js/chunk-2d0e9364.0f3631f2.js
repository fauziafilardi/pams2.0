(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e9364"],{"8d24":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ABSListVuex",{attrs:{prop:e.propList,title:e.data.QueryName},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table,refreshColumn:e.$parent.refreshColumn}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[a("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                    Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),a("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),a("b-collapse",{attrs:{id:"collapse1",visible:!0}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[a("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[a("b-row",{staticStyle:{"padding-left":"10px"}},[a("b-col",{attrs:{md:"12",id:"col-left"}},[a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_descs",attrs:{prop:e.PI_descs},model:{value:e.M_TN_ContractSubLeasePicture.descs,callback:function(t){e.$set(e.M_TN_ContractSubLeasePicture,"descs",t)},expression:"M_TN_ContractSubLeasePicture.descs"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSTextAreaVuex",{ref:"ref_remarks",attrs:{prop:e.PI_remarks},on:{input:e.OnremarksChange},model:{value:e.M_TN_ContractSubLeasePicture.remarks,callback:function(t){e.$set(e.M_TN_ContractSubLeasePicture,"remarks",t)},expression:"M_TN_ContractSubLeasePicture.remarks"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSFileUpload",{ref:"ref_referencefilename",attrs:{prop:e.PI_referencefilename,file:e.M_TN_ContractSubLeasePicture.picturefilename,image:e.M_TN_ContractSubLeasePicture.referencefilename},on:{fileName:e.getFileName,response:e.getResponse},model:{value:e.M_TN_ContractSubLeasePicture.referencefilename,callback:function(t){e.$set(e.M_TN_ContractSubLeasePicture,"referencefilename",t)},expression:"M_TN_ContractSubLeasePicture.referencefilename"}})],1)],1)],1)],1),a("ABSTAnalysis",{attrs:{prop:e.PTAnalysis}})],1)],1)],1)],1)],1)],1)},i=[],r=(a("ac6a"),a("ade3")),n={props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{ValKey:null,FormType:"List",Module:"TN",propList:{initialWhere:"ApplicationNo = '"+this.ValKey+"'",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},responseFile:null,M_TN_ContractSubLeasePicture:{subportfoliocd:this.getDataUser().SubPortfolioCd,subleaseassignmentno:"",sapicturesequenceno:0,descs:"",picturefilename:"",referencefilename:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:0,applicationno:0,rowid:0},PI_descs:{cValidate:"required|max:150",cName:"descs",cLabel:"Description",cLabelSize:4,cOrder:0,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_remarks:{cValidate:"",cName:"remarks",cLabel:"Remarks",cLabelSize:4,cOrder:0,cKey:!1,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_referencefilename:Object(r["a"])({cValidate:"required",cName:"referencefilename",cLabel:"Picture",cLabelSize:4,cOrder:0,cVisible:!0,cModule:"TN",cPlaceholder:"Choose a file...",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex},"cVisible",!0),PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder,cProtect:!1}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage2Data},DataRowPage1:function(){return this.$store.getters.GetPage1Data}},methods:{OnremarksChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},setToolbarButton:function(){},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,t){},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){this.$parent.showForm=!1;var e=this.$store.getters.GetPage1Data;"New"==e.Status?(this.FormType="List",this.$store.commit("setFormType","List"),this.getToolbar().ProcessPS()):(this.FormType="View",this.$store.commit("setFormType","View"),this.getToolbar().ProcessPS()),this.M_TN_ContractSubLeasePicture.SubleaseAssignmentNo=e.SubleaseAssignmentNo,this.propList.initialWhere=" SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' and SubleaseAssignmentNo = '"+e.SubleaseAssignmentNo+"' ",this.FormToABSList().doGetList("","eb_getList")},M_Insert:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,SubleaseAssignmentNo:this.M_TN_ContractSubLeasePicture.subleaseassignmentno,Descs:this.M_TN_ContractSubLeasePicture.descs,PictureFileName:this.M_TN_ContractSubLeasePicture.picturefilename,ReferenceFileName:this.M_TN_ContractSubLeasePicture.referencefilename,Remarks:this.M_TN_ContractSubLeasePicture.remarks,UserInput:this.getDataUser().UserId};this.postJSON(this.getUrlInsert(),t).then(function(t){null!=t&&e.$parent.resultInsert(t.Message)})},M_Update:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCD:this.getDataUser().SubPortfolioCd,ApplicationNo:this.M_TN_ContractSubLeasePicture.applicationno,SubleaseAssignmentNo:this.M_TN_ContractSubLeasePicture.subleaseassignmentno,SAPictureSequenceNo:this.M_TN_ContractSubLeasePicture.sapicturesequenceno,Descs:this.M_TN_ContractSubLeasePicture.descs,PictureFileName:this.M_TN_ContractSubLeasePicture.picturefilename,ReferenceFileName:this.M_TN_ContractSubLeasePicture.referencefilename,Remarks:this.M_TN_ContractSubLeasePicture.remarks,UserEdit:this.getDataUser().UserId,LastUpdateStamp:this.M_TN_ContractSubLeasePicture.lastupdatestamp};this.postJSON(this.getUrlUpdate(),t).then(function(t){null!=t&&e.$parent.resultUpdate(t.Message)})},M_ClearForm:function(){this.M_TN_ContractSubLeasePicture={subportfoliocd:this.getDataUser().SubPortfolioCd,subleaseassignmentno:"",sapicturesequenceno:0,descs:"",picturefilename:"",referencefilename:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:0,rowid:0}},M_New:function(){var e=this.$store.getters.GetPage1Data;this.M_TN_ContractSubLeasePicture.subleaseassignmentno=e.SubleaseAssignmentNo},M_Edit:function(){},M_Delete:function(e){var t=this,a=this.FormToABSList().getRowSelected(),s=[];a.forEach(function(e){s.push({SAPictureSequenceNo:e.SAPictureSequenceNo,SubleaseAssignmentNo:t.DataRowPage1.SubleaseAssignmentNo,LastUpdateStamp:e.LastUpdateStamp})});var i={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:s};this.postJSONMulti(this.getUrlNewDeleteMulti(),i).then(function(e){null!=e&&t.$parent.resultDelete()})},getDataBy:function(e){var t=this,a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubleaseAssignmentNo:e.SubleaseAssignmentNo,SAPictureSequenceNo:e.SAPictureSequenceNo};this.postEncode(this.getUrlById(),a).then(function(a){if(null!=a){var s=a.Data[0];t.M_TN_ContractSubLeasePicture={subportfoliocd:s.subportfoliocd,subleaseassignmentno:e.SubleaseAssignmentNo,sapicturesequenceno:e.SAPictureSequenceNo,descs:s.descs,picturefilename:s.picturefilename,referencefilename:s.referencefilename,remarks:s.remarks,userinput:s.userinput,useredit:s.useredit,timeinput:s.timeinput,timeedit:s.timeedit,lastupdatestamp:e.LastUpdateStamp,rowid:s.rowid},t.IEBy.Input=s.userinput,t.IEBy.Edit=s.useredit}})},getFileName:function(e){this.M_TN_ContractSubLeasePicture.picturefilename=e},getResponse:function(e){this.responseFile=e}},created:function(){},beforeMount:function(){},mounted:function(){this.hideSideBarMenu()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},o=n,c=a("2877"),u=Object(c["a"])(o,s,i,!1,null,null,null);u.options.__file="TN_ContractSubLeasePicture.vue";t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0e9364.0f3631f2.js.map