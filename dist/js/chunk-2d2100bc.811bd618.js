(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2100bc"],{b5e8:function(e,o,t){"use strict";t.r(o);var i=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("div",{staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[t("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[t("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),t("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),t("b-collapse",{attrs:{id:"collapse1",visible:!0}},[t("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[t("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[t("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[t("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[t("b-col",{staticClass:"bColMasterForm",attrs:{md:"6",id:"col-left"}},[t("ABSinputTextVuex",{attrs:{prop:e.PI_PortfolioCd},model:{value:e.M_CM_Portfolio.PortfolioCd,callback:function(o){e.$set(e.M_CM_Portfolio,"PortfolioCd",o)},expression:"M_CM_Portfolio.PortfolioCd"}}),t("ABSinputTextVuex",{attrs:{prop:e.PI_Name},model:{value:e.M_CM_Portfolio.Name,callback:function(o){e.$set(e.M_CM_Portfolio,"Name",o)},expression:"M_CM_Portfolio.Name"}}),t("ABSinputTextVuex",{attrs:{prop:e.PI_ReferenceNo},model:{value:e.M_CM_Portfolio.ReferenceNo,callback:function(o){e.$set(e.M_CM_Portfolio,"ReferenceNo",o)},expression:"M_CM_Portfolio.ReferenceNo"}}),t("ABSinputTextVuex",{attrs:{prop:e.PI_Address1},model:{value:e.M_CM_Portfolio.Address1,callback:function(o){e.$set(e.M_CM_Portfolio,"Address1",o)},expression:"M_CM_Portfolio.Address1"}}),t("ABSinputTextVuex",{attrs:{prop:e.PI_Address2},model:{value:e.M_CM_Portfolio.Address2,callback:function(o){e.$set(e.M_CM_Portfolio,"Address2",o)},expression:"M_CM_Portfolio.Address2"}}),t("ABSinputTextVuex",{attrs:{prop:e.PI_Address3},model:{value:e.M_CM_Portfolio.Address3,callback:function(o){e.$set(e.M_CM_Portfolio,"Address3",o)},expression:"M_CM_Portfolio.Address3"}}),t("ABSinputTextVuex",{attrs:{prop:e.PI_Address4},model:{value:e.M_CM_Portfolio.Address4,callback:function(o){e.$set(e.M_CM_Portfolio,"Address4",o)},expression:"M_CM_Portfolio.Address4"}}),t("ABSinputTextVuex",{attrs:{prop:e.PI_ZipCode},model:{value:e.M_CM_Portfolio.ZipCode,callback:function(o){e.$set(e.M_CM_Portfolio,"ZipCode",o)},expression:"M_CM_Portfolio.ZipCode"}}),t("ABSInputSelectList",{attrs:{prop:e.PI_CityCd,value:e.M_CM_Portfolio.CityCd},on:{change:e.OnCityCdChange}}),t("ABSinputTextVuex",{attrs:{prop:e.PI_Website},model:{value:e.M_CM_Portfolio.Website,callback:function(o){e.$set(e.M_CM_Portfolio,"Website",o)},expression:"M_CM_Portfolio.Website"}}),t("ABSinputTextVuex",{attrs:{prop:e.PI_PhoneNo},model:{value:e.M_CM_Portfolio.PhoneNo,callback:function(o){e.$set(e.M_CM_Portfolio,"PhoneNo",o)},expression:"M_CM_Portfolio.PhoneNo"}}),t("ABSinputTextVuex",{attrs:{prop:e.PI_FaxNo},model:{value:e.M_CM_Portfolio.FaxNo,callback:function(o){e.$set(e.M_CM_Portfolio,"FaxNo",o)},expression:"M_CM_Portfolio.FaxNo"}}),t("ABSinputTextVuex",{attrs:{prop:e.PI_SIRPrefix},model:{value:e.M_CM_Portfolio.SIRPrefix,callback:function(o){e.$set(e.M_CM_Portfolio,"SIRPrefix",o)},expression:"M_CM_Portfolio.SIRPrefix"}}),t("ABSinputRadioButtonVuex",{attrs:{prop:e.PI_CBUniquePaymentNo},model:{value:e.M_CM_Portfolio.CBUniquePaymentNo,callback:function(o){e.$set(e.M_CM_Portfolio,"CBUniquePaymentNo",o)},expression:"M_CM_Portfolio.CBUniquePaymentNo"}}),t("ABSinputRadioButtonVuex",{attrs:{prop:e.PI_BaseOnTaxHandling},model:{value:e.M_CM_Portfolio.BaseOnTaxHandling,callback:function(o){e.$set(e.M_CM_Portfolio,"BaseOnTaxHandling",o)},expression:"M_CM_Portfolio.BaseOnTaxHandling"}}),t("ABSinputTextArea",{attrs:{prop:e.PI_Remarks},model:{value:e.M_CM_Portfolio.Remarks,callback:function(o){e.$set(e.M_CM_Portfolio,"Remarks",o)},expression:"M_CM_Portfolio.Remarks"}})],1)],1),t("div",{staticClass:"div-collapse__extend"},[e._v("\n                            Picture\n                        ")]),t("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[t("b-col",{attrs:{md:"6"}},[t("ABSFileUpload",{attrs:{prop:e.PI_PictureFileName,file:e.M_CM_Portfolio.PictureFileName,image:e.M_CM_Portfolio.ReferenceFileName},on:{fileName:e.getFileName},model:{value:e.M_CM_Portfolio.ReferenceFileName,callback:function(o){e.$set(e.M_CM_Portfolio,"ReferenceFileName",o)},expression:"M_CM_Portfolio.ReferenceFileName"}})],1)],1),t("div",{staticClass:"div-collapse__extend"},[e._v("\n                            Database Connection\n                        ")]),t("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[t("b-col",{staticClass:"bColMasterForm",attrs:{md:"6",id:"col-left"}},[t("ABSinputTextVuex",{attrs:{prop:e.PI_DBConnection},model:{value:e.M_CM_Portfolio.DBConnection,callback:function(o){e.$set(e.M_CM_Portfolio,"DBConnection",o)},expression:"M_CM_Portfolio.DBConnection"}})],1)],1),t("div",{staticClass:"div-collapse__extend"},[e._v("\n                            Password Security\n                        ")]),t("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[t("b-col",{staticClass:"bColMasterForm",attrs:{md:"6",id:"col-left"}},[t("ABSinputTextVuex",{attrs:{prop:e.PI_MinPasswordLength},model:{value:e.M_CM_Portfolio.MinPasswordLength,callback:function(o){e.$set(e.M_CM_Portfolio,"MinPasswordLength",o)},expression:"M_CM_Portfolio.MinPasswordLength"}}),t("ABSinputTextVuex",{attrs:{prop:e.PI_MaxPasswordLive},model:{value:e.M_CM_Portfolio.MaxPasswordLive,callback:function(o){e.$set(e.M_CM_Portfolio,"MaxPasswordLive",o)},expression:"M_CM_Portfolio.MaxPasswordLive"}}),t("ABSinputRadioButton",{attrs:{prop:e.PI_PasswordStrength},model:{value:e.M_CM_Portfolio.PasswordStrength,callback:function(o){e.$set(e.M_CM_Portfolio,"PasswordStrength",o)},expression:"M_CM_Portfolio.PasswordStrength"}}),t("ABSinputTextVuex",{attrs:{prop:e.PI_MaxLoginFailedAttempt},model:{value:e.M_CM_Portfolio.MaxLoginFailedAttempt,callback:function(o){e.$set(e.M_CM_Portfolio,"MaxLoginFailedAttempt",o)},expression:"M_CM_Portfolio.MaxLoginFailedAttempt"}})],1)],1),t("ABSTAnalysis",{attrs:{prop:e.PTAnalysis}})],1)],1)],1)],1)],1)])},a=[],r=(t("ac6a"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{FormType:"Form",Module:"CM",M_CM_Portfolio:{PortfolioCd:"",Name:"",ReferenceNo:"",Address1:"",Address2:"",Address3:"",Address4:"",ZipCode:"",Website:"",PhoneNo:"",FaxNo:"",SIRPrefix:"",CBUniquePaymentNo:"",BaseOnTaxHandling:"",Remarks:"",PictureFileName:"",MinPasswordLength:"",MaxPasswordLive:"",PasswordStrength:"",MaxLoginFailedAttempt:"",ReferenceFileName:""},IEBy:{Input:"",Edit:""},PI_PortfolioCd:{cValidate:"min:2|max:4",cName:"PortfolioCd",cLabel:"Portfolio Code",cOrder:1,cKey:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_Name:{cValidate:"min:1|max:60",cName:"Name",cLabel:"Name",cOrder:2,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_ReferenceNo:{cValidate:"min:1|max:60",cName:"ReferenceNo",cLabel:"Reference No",cOrder:3,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_Address1:{cValidate:"required|min:1|max:60",cName:"Address1",cLabel:"Address",cOrder:4,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_Address2:{cValidate:"min:1|max:60",cName:"Address2",cLabel:"",cOrder:5,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_Address3:{cValidate:"min:1|max:60",cName:"Address3",cLabel:"",cOrder:6,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_Address4:{cValidate:"min:1|max:60",cName:"Address4",cLabel:"",cOrder:7,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_ZipCode:{cValidate:"min:1|max:60",cName:"ZipCode",cLabel:"Zip Code",cOrder:8,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_CityCd:{dataLookUp:{LookUpCd:"GetCityCd",ColumnDB:"CityCd",InitialWhere:"",ParamWhere:""},cValidate:"required",cName:"CityCd",cLabel:"City Code",cKey:!1,cOrder:9,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cMasterUrl:"CM/CM_SubPortfolioClass",cDisplayColumn:"CityCd,Descs"},PI_Website:{cValidate:"min:1|max:60",cName:"Website",cLabel:"Website",cOrder:10,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_PhoneNo:{cValidate:"min:1|max:60",cName:"PhoneNo",cLabel:"Telephone",cOrder:11,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_FaxNo:{cValidate:"min:1|max:60",cName:"FaxNo",cLabel:"Fax",cOrder:12,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_SIRPrefix:{cValidate:"min:1|max:60",cName:"SIRPrefix",cLabel:"SIR Prefix",cOrder:13,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_CBUniquePaymentNo:{cId:"rdCBUniquePaymentNo",cName:"CBUniquePaymentNo",cRadioOptions:[{text:"Yes",value:"Y"},{text:"No",value:"N"}],cLabel:"Cash Book Unique Payment No",cOrder:14,cRadioDefaultOption:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_BaseOnTaxHandling:{cId:"rdBaseOnTaxHandling",cName:"BaseOnTaxHandling",cRadioOptions:[{text:"Portofolio",value:"P"},{text:"Subportofolio",value:"S"}],cLabel:"Tax Batch No Base On",cOrder:15,cRadioDefaultOption:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_Remarks:{cValidate:"min:1|max:100",cName:"Remarks",cNameError:"Remarks cannot be empty",cValue:"",cResize:!1,cPlaceholder:"",cRows:10,cMaxRows:12},PI_PictureFileName:{cName:"PictureFileName",cLabel:"Picture File",cPlaceholder:"Choose a file...",cTabIndex:this.TabIndex,cPageLevel:this.PageLevel,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cModule:"SS"},PI_DBConnection:{cValidate:"",cName:"DBConnection",cLabel:"DB Connection String (encrypted) ",cOrder:18,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cProtect:!0},PI_MinPasswordLength:{cValidate:"min:1|max:60",cName:"MinPasswordLength",cLabel:"Minimum Password Length",cOrder:19,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_MaxPasswordLive:{cValidate:"min:1|max:60",cName:"MaxPasswordLive",cLabel:"Maximum Password Live",cOrder:20,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_PasswordStrength:{cId:"rdPasswordStrength",cName:"PasswordStrength",cRadioOptions:[{text:"No Control",value:"Y"},{text:"Combination Alpha Numeric",value:"N"}],cLabel:"Password Strength",cOrder:14,cRadioDefaultOption:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_MaxLoginFailedAttempt:{cValidate:"min:1|max:60",cName:"MaxLoginFailedAttempt",cLabel:"Max Login Failed Attempt",cOrder:22,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_ReferenceFileName:{cLabel:"Picture File",cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder}}},methods:{getFileName:function(e){this.M_CM_Portfolio.PictureFileName=e},OnCityCdChange:function(e){var o=this;this.$nextTick(function(){o.M_CM_Portfolio.CityCd=e.id,o.M_CM_Portfolio.CityCdLabel=e.label}),this.$forceUpdate()},setToolbarButton:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Post:function(){},M_Refresh:function(){},M_New:function(){this.$nextTick().then(function(){return document.getElementById("PortfolioCd").focus()})},M_Edit:function(){this.$nextTick().then(function(){return document.getElementById("Name").focus()})},M_ClearForm:function(){this.M_CM_Portfolio={PortfolioCd:"",Name:"",ReferenceNo:"",Address1:"",Address2:"",Address3:"",Address4:"",ZipCode:"",Website:"",PhoneNo:"",FaxNo:"",SIRPrefix:"",CBUniquePaymentNo:"",BaseOnTaxHandling:"",Remarks:"",PictureFileName:"",MinPasswordLength:"",MaxPasswordLive:"",PasswordStrength:"",MaxLoginFailedAttempt:"",ReferenceFileName:""}},M_Delete:function(e){var o=this,t=this.FormToABSList().getRowSelected(),i=[];t.forEach(function(e){i.push({_Message_:""})});var a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:i};this.postJSONMulti(this.getUrlNewDeleteMulti(),a).then(function(e){null!=e&&o.$parent.resultDelete()})},M_Insert:function(){var e=this,o={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,UserInput:this.getDataUser().UserId,PortfolioCd:this.M_CM_Portfolio.PortfolioCd,Name:this.M_CM_Portfolio.Name,ReferenceNo:this.M_CM_Portfolio.ReferenceNo,Address1:this.M_CM_Portfolio.Address1,Address2:this.M_CM_Portfolio.Address2,Address3:this.M_CM_Portfolio.Address3,Address4:this.M_CM_Portfolio.Address4,ZipCode:this.M_CM_Portfolio.ZipCode,Website:this.M_CM_Portfolio.Website,PhoneNo:this.M_CM_Portfolio.PhoneNo,FaxNo:this.M_CM_Portfolio.FaxNo,SIRPrefix:this.M_CM_Portfolio.SIRPrefix,CBUniquePaymentNo:this.M_CM_Portfolio.CBUniquePaymentNo,BaseOnTaxHandling:this.M_CM_Portfolio.BaseOnTaxHandling,Remarks:this.M_CM_Portfolio.Remarks,PictureFileName:this.M_CM_Portfolio.PictureFileName,MinPasswordLength:this.M_CM_Portfolio.MinPasswordLength,MaxPasswordLive:this.M_CM_Portfolio.MaxPasswordLive,PasswordStrength:this.M_CM_Portfolio.PasswordStrength,MaxLoginFailedAttempt:this.M_CM_Portfolio.MaxLoginFailedAttempt,ReferenceFileName:this.M_CM_Portfolio.ReferenceFileName};this.postJSON(this.getUrlInsert(),o).then(function(o){null!=o&&e.$parent.resultInsert(o.Message)})},M_Update:function(){var e=this,o={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,UserEdit:this.getDataUser().UserId,PortfolioCd:this.M_CM_Portfolio.PortfolioCd,Name:this.M_CM_Portfolio.Name,ReferenceNo:this.M_CM_Portfolio.ReferenceNo,Address1:this.M_CM_Portfolio.Address1,Address2:this.M_CM_Portfolio.Address2,Address3:this.M_CM_Portfolio.Address3,Address4:this.M_CM_Portfolio.Address4,ZipCode:this.M_CM_Portfolio.ZipCode,Website:this.M_CM_Portfolio.Website,PhoneNo:this.M_CM_Portfolio.PhoneNo,FaxNo:this.M_CM_Portfolio.FaxNo,SIRPrefix:this.M_CM_Portfolio.SIRPrefix,CBUniquePaymentNo:this.M_CM_Portfolio.CBUniquePaymentNo,BaseOnTaxHandling:this.M_CM_Portfolio.BaseOnTaxHandling,Remarks:this.M_CM_Portfolio.Remarks,PictureFileName:this.M_CM_Portfolio.PictureFileName,MinPasswordLength:this.M_CM_Portfolio.MinPasswordLength,MaxPasswordLive:this.M_CM_Portfolio.MaxPasswordLive,PasswordStrength:this.M_CM_Portfolio.PasswordStrength,MaxLoginFailedAttempt:this.M_CM_Portfolio.MaxLoginFailedAttempt,ReferenceFileName:this.M_CM_Portfolio.ReferenceFileName,CityCd:this.M_CM_Portfolio.CityCd,LastUpdateStamp:this.M_CM_Portfolio.LastUpdateStamp};this.postJSON(this.getUrlUpdate(),o).then(function(o){null!=o&&e.$parent.resultUpdate(o.Message)})},paramFromParent:function(){},rowLink:function(e){},getDataBy:function(){var e=this,o={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder};this.postEncode(this.getUrlById(),o).then(function(o){if(null!=o){var t=o.Data;t.length>0?(e.getToolbar().FormStatus="EDIT",e.getToolbar().ProcessPS(),t=t[0],e.$nextTick(function(){e.M_CM_Portfolio.PortfolioCd=t.PortfolioCd,e.M_CM_Portfolio.Name=t.Name,e.M_CM_Portfolio.ReferenceNo=t.ReferenceNo,e.M_CM_Portfolio.Address1=t.Address1,e.M_CM_Portfolio.Address2=t.Address2,e.M_CM_Portfolio.Address3=t.Address3,e.M_CM_Portfolio.Address4=t.Address4,e.M_CM_Portfolio.ZipCode=t.ZipCode,e.M_CM_Portfolio.CityCd=t.CityCd,e.M_CM_Portfolio.Website=t.Website,e.M_CM_Portfolio.PhoneNo=t.PhoneNo,e.M_CM_Portfolio.FaxNo=t.FaxNo,e.M_CM_Portfolio.SIRPrefix=t.SIRPrefix,e.M_CM_Portfolio.CBUniquePaymentNo=t.CBUniquePaymentNo,e.M_CM_Portfolio.BaseOnTaxHandling=t.BaseOnTaxHandling,e.M_CM_Portfolio.Remarks=t.Remarks,e.M_CM_Portfolio.PictureFileName=t.PictureFileName,e.M_CM_Portfolio.ReferenceFileName=t.ReferenceFileName,e.M_CM_Portfolio.MinPasswordLength=t.MinPasswordLength,e.M_CM_Portfolio.MaxPasswordLive=t.MaxPasswordLive,e.M_CM_Portfolio.PasswordStrength=t.PasswordStrength,e.M_CM_Portfolio.MaxLoginFailedAttempt=t.MaxPasswordLive,e.M_CM_Portfolio.LastUpdateStamp=t.LastUpdateStamp}),e.IEBy.Input=t.userinput,e.IEBy.Edit=t.useredit):(e.getToolbar().FormStatus="NEW",e.getToolbar().ProcessPS())}})},getDBConnection:function(){var e=this;this.postEncode(this.getUrlDBConnection()).then(function(o){if(null!=o){var t=o.Data;e.M_CM_Portfolio.DBConnection=t.DBConnection}})}},beforeCreate:function(){},created:function(){this.$store.commit("setFormType","Form")},beforeMount:function(){},mounted:function(){this.getDBConnection(),this.getDataBy(),this.hideSideBarMenu()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),s=r,n=t("2877"),l=Object(n["a"])(s,i,a,!1,null,null,null);l.options.__file="CM_PortfolioMaster.vue";o["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d2100bc.811bd618.js.map