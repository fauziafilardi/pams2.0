(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e5f34"],{9755:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ABSListVuex",{attrs:{prop:t.propList,title:t.data.QueryName},on:{rowClicked:t.$parent.rowClicked,rowDblClicked:t.$parent.doDoubleClick,rowLinkClick:t.$parent.rowLink,pageSize:t.$parent.M_PageSize,pagination:t.$parent.M_Pagination,filter:t.$parent.M_Advance_Filter,headTable:t.$parent.M_Head_Table,refreshColumn:t.$parent.refreshColumn}}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[a("span",{directives:[{name:"show",rawName:"v-show",value:t.IEBy.Input&&t.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[t._v("\n                    Input By : "+t._s(t.IEBy.Input)+" | Edit By : "+t._s(t.IEBy.Edit)+" "),a("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),a("b-collapse",{attrs:{id:"collapse1",visible:!0}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[a("b-form",{attrs:{"data-vv-scope":"FormScope_"+t.PageLevel+"_"+t.TabIndex,"data-vv-value-path":"FormScope_"+t.PageLevel+"_"+t.TabIndex}},[a("b-row",{staticStyle:{"padding-left":"10px"}},[a("b-col",{attrs:{md:"12",id:"col-left"}},[a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_contactid",attrs:{prop:t.PI_contactid,value:t.M_TN_Solicitor.contactid,label:t.M_TN_Solicitor.contactidLabel},on:{change:t.OncontactidChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_referenceno",attrs:{prop:t.PI_referenceno},model:{value:t.M_TN_Solicitor.referenceno,callback:function(e){t.$set(t.M_TN_Solicitor,"referenceno",e)},expression:"M_TN_Solicitor.referenceno"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_registrationno",attrs:{prop:t.PI_registrationno},model:{value:t.M_TN_Solicitor.registrationno,callback:function(e){t.$set(t.M_TN_Solicitor,"registrationno",e)},expression:"M_TN_Solicitor.registrationno"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputDateVuex",{ref:"ref_startdate",attrs:{prop:t.PI_startdate},on:{input:t.OnstartdateChange},model:{value:t.M_TN_Solicitor.startdate,callback:function(e){t.$set(t.M_TN_Solicitor,"startdate",e)},expression:"M_TN_Solicitor.startdate"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputRadioButtonVuex",{ref:"ref_status",attrs:{prop:t.PI_status},on:{input:t.OnstatusChange},model:{value:t.M_TN_Solicitor.status,callback:function(e){t.$set(t.M_TN_Solicitor,"status",e)},expression:"M_TN_Solicitor.status"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_reasoncd",attrs:{prop:t.PI_reasoncd,value:t.M_TN_Solicitor.reasoncd,label:t.M_TN_Solicitor.reasoncdLabel},on:{change:t.OnreasoncdChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_reasondescs",attrs:{prop:t.PI_reasondescs},model:{value:t.M_TN_Solicitor.reasondescs,callback:function(e){t.$set(t.M_TN_Solicitor,"reasondescs",e)},expression:"M_TN_Solicitor.reasondescs"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSTextAreaVuex",{ref:"ref_remarks",attrs:{prop:t.PI_remarks},on:{input:t.OnremarksChange},model:{value:t.M_TN_Solicitor.remarks,callback:function(e){t.$set(t.M_TN_Solicitor,"remarks",e)},expression:"M_TN_Solicitor.remarks"}})],1)],1)],1)],1),a("ABSTAnalysis",{attrs:{prop:t.PTAnalysis}})],1)],1)],1)],1)],1)],1)},i=[],r=(a("ac6a"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{cInsertKey:"",FormType:"List",Module:"TN",propList:{initialWhere:"",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_TN_Solicitor:{contactid:"",referenceno:"",startdate:"",registrationno:"",status:"A",terminateby:"",terminatedate:"",reasoncd:"",reasondescs:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,contactname:"",cmreasondescs:"",lastupdatestamp:0,rowid:0},PI_contactid:{dataLookUp:{LookUpCd:"GetLookupCMContact",ColumnDB:"ContactId",InitialWhere:"",ParamWhere:""},cValidate:"required",cName:"contactid",cLabel:"Contact ID ",cKey:!0,cLabelSize:4,cOrder:1,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"CM/CM_Contact",cDisplayColumn:"ContactId,Name"},PI_referenceno:{cValidate:"max:20",cName:"referenceno",cLabel:"Reference No  ",cLabelSize:4,cOrder:2,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_registrationno:{cValidate:"required|max:30",cName:"registrationno",cLabel:"Registration No ",cLabelSize:4,cOrder:3,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_startdate:{cValidate:"",cName:"startdate",cLabel:"Start Date",cLabelSize:4,cOrder:3,cKey:!1,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_status:{cValidate:"",cName:"status",cId:"rdbstatus",cRadioOptions:[{text:"Active",value:"A"},{text:"Non Active",value:"N"}],cRadioDefaultOption:"",cLabel:"Status  ",cLabelSize:4,cOrder:6,cProtect:!1,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_reasoncd:{dataLookUp:{LookUpCd:"GetLookupCMReason",ColumnDB:"ReasonCd",InitialWhere:"ModuleCd='TN' or ModuleCd is null",ParamWhere:""},cValidate:"",cName:"reasoncd",cLabel:"Reason  ",cKey:!1,cLabelSize:4,cOrder:7,cTriggered:!1,cDefault:"",cProtect:!0,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"CM/CM_Reason",cDisplayColumn:"ReasonCd,Descs"},PI_reasondescs:{cValidate:"max:150",cName:"reasondescs",cLabel:"Reason Description  ",cLabelSize:4,cOrder:8,cKey:!1,cType:"text",cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_remarks:{cValidate:"",cName:"remarks",cLabel:"Remarks",cLabelSize:4,cOrder:9,cKey:!1,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage1Data}},methods:{OncontactidChange:function(t){var e=this;this.$nextTick(function(){e.M_TN_Solicitor.contactid=t.id,e.M_TN_Solicitor.contactidLabel=t.label,e.inputStatus}),this.$forceUpdate()},OnstartdateChange:function(t){var e=this;this.$nextTick(function(){e.inputStatus}),this.$forceUpdate()},OnstatusChange:function(t){var e=this;this.M_TN_Solicitor.status=t,this.$nextTick(function(){"VIEW"!=e.inputStatus&&("N"==t?(e.PI_reasoncd.cProtect=!1,e.PI_reasondescs.cProtect=!1):(e.PI_reasoncd.cProtect=!0,e.PI_reasondescs.cProtect=!0,e.M_TN_Solicitor.reasoncd="",e.M_TN_Solicitor.reasoncdLabel="",e.M_TN_Solicitor.reasondescs=""))}),this.$forceUpdate()},OnreasoncdChange:function(t){var e=this;this.$nextTick(function(){e.M_TN_Solicitor.reasoncd=t.id,e.M_TN_Solicitor.reasoncdLabel=t.label,e.M_TN_Solicitor.reasondescs=t.Descs,e.inputStatus}),this.$forceUpdate()},OnremarksChange:function(t){var e=this;this.$nextTick(function(){e.inputStatus}),this.$forceUpdate()},setToolbarButton:function(){},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(t){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(t,e){},rowLink:function(t){this.$refs.modalTest.show()},paramFromParent:function(){},M_Post:function(t){},M_Insert:function(){var t=this,e={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,ContactId:""==this.M_TN_Solicitor.contactid||null==this.M_TN_Solicitor.contactid?"NULL":this.M_TN_Solicitor.contactid,ReferenceNo:this.M_TN_Solicitor.referenceno,StartDate:""==this.M_TN_Solicitor.startdate||null==this.M_TN_Solicitor.startdate?"NULL":this.M_TN_Solicitor.startdate,RegistrationNo:this.M_TN_Solicitor.registrationno,Status:this.M_TN_Solicitor.status,ReasonCd:""==this.M_TN_Solicitor.reasoncd||null==this.M_TN_Solicitor.reasoncd?"NULL":this.M_TN_Solicitor.reasoncd,ReasonDescs:this.M_TN_Solicitor.reasondescs,Remarks:this.M_TN_Solicitor.remarks,UserInput:this.getDataUser().UserId};this.postJSON(this.getUrlInsert(),e).then(function(e){null!=e&&t.$parent.resultInsert(e.Message)})},M_Update:function(){var t=this,e={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,ContactId:""==this.M_TN_Solicitor.contactid||null==this.M_TN_Solicitor.contactid?"NULL":this.M_TN_Solicitor.contactid,ReferenceNo:this.M_TN_Solicitor.referenceno,StartDate:""==this.M_TN_Solicitor.startdate||null==this.M_TN_Solicitor.startdate?"NULL":this.M_TN_Solicitor.startdate,RegistrationNo:this.M_TN_Solicitor.registrationno,Status:this.M_TN_Solicitor.status,ReasonCd:""==this.M_TN_Solicitor.reasoncd||null==this.M_TN_Solicitor.reasoncd?"NULL":this.M_TN_Solicitor.reasoncd,ReasonDescs:this.M_TN_Solicitor.reasondescs,Remarks:this.M_TN_Solicitor.remarks,UserEdit:this.getDataUser().UserId,LastUpdateStamp:this.M_TN_Solicitor.lastupdatestamp};this.postJSON(this.getUrlUpdate(),e).then(function(e){null!=e&&t.$parent.resultUpdate(e.Message)})},M_ClearForm:function(){this.M_TN_Solicitor={contactid:"",referenceno:"",startdate:"",registrationno:"",status:"A",terminateby:"",terminatedate:"",reasoncd:"",reasondescs:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,contactname:"",cmreasondescs:"",lastupdatestamp:0,rowid:0}},M_New:function(){},M_Edit:function(){},M_Delete:function(t){var e=this,a=this.FormToABSList().getRowSelected(),o=[];a.forEach(function(t){o.push({ContactID:t.ContactID,LastUpdateStamp:t.LastUpdateStamp,_Message_:""})});var i={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:o};this.postJSONMulti(this.getUrlNewDeleteMulti(),i).then(function(t){null!=t&&e.$parent.resultDelete()})},getDataBy:function(t){var e=this,a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,contactid:t.ContactID};this.postEncode(this.getUrlById(),a).then(function(a){if(null!=a){var o=a.Data[0];e.M_TN_Solicitor={contactid:o.contactid,referenceno:o.referenceno,startdate:o.startdate,registrationno:o.registrationno,status:o.status,terminateby:o.terminateby,terminatedate:o.terminatedate,reasoncd:o.reasoncd,reasondescs:o.reasondescs,remarks:o.remarks,userinput:o.userinput,useredit:o.useredit,contactname:o.contactname,cmreasondescs:o.cmreasondescs,lastupdatestamp:t.LastUpdateStamp,rowid:e.isCurrency(o.rowid,e.decimal)},e.M_TN_Solicitor.contactidLabel=null!=e.M_TN_Solicitor.contactid&&""!=e.M_TN_Solicitor.contactid?o.contactid+e.separator+o.contactname:"",e.M_TN_Solicitor.reasoncdLabel=null!=e.M_TN_Solicitor.reasoncd&&""!=e.M_TN_Solicitor.reasoncd?o.reasoncd+e.separator+o.reasondescs:"",e.IEBy.Input=o.userinput,e.IEBy.Edit=o.useredit}})}},beforeCreate:function(){},created:function(){this.$store.commit("setFormType","List"),this.getToolbar().ProcessPS()},beforeMount:function(){},mounted:function(){this.hideSideBarMenu(),this.FormToABSList().doGetList("","eb_getList")},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),s=r,n=a("2877"),c=Object(n["a"])(s,o,i,!1,null,null,null);c.options.__file="TN_Solicitor.vue";e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0e5f34.1dac7abf.js.map