(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d217cca"],{c7ee:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ABSListVuex",{attrs:{prop:t.propList,title:t.data.QueryName},on:{rowClicked:t.$parent.rowClicked,rowDblClicked:t.$parent.doDoubleClick,rowLinkClick:t.$parent.rowLink,pageSize:t.$parent.M_PageSize,pagination:t.$parent.M_Pagination,filter:t.$parent.M_Advance_Filter,headTable:t.$parent.M_Head_Table,refreshColumn:t.$parent.refreshColumn}}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[a("span",{directives:[{name:"show",rawName:"v-show",value:t.IEBy.Input&&t.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[t._v("\n                    Input By : "+t._s(t.IEBy.Input)+" | Edit By : "+t._s(t.IEBy.Edit)+" "),a("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),a("b-collapse",{attrs:{id:"collapse1",visible:!0}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[a("b-form",{attrs:{"data-vv-scope":"FormScope_"+t.PageLevel+"_"+t.TabIndex,"data-vv-value-path":"FormScope_"+t.PageLevel+"_"+t.TabIndex}},[a("b-row",{staticStyle:{"padding-left":"10px"}},[a("b-col",{attrs:{md:"12",id:"col-left"}},[a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_contactid",attrs:{prop:t.PI_contactid},model:{value:t.M_TN_TenancyContact.contactid,callback:function(e){t.$set(t.M_TN_TenancyContact,"contactid",e)},expression:"M_TN_TenancyContact.contactid"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_contactclasscd",attrs:{prop:t.PI_contactclasscd,value:t.M_TN_TenancyContact.contactclasscd,label:t.M_TN_TenancyContact.contactclasscdLabel},on:{change:t.OncontactclasscdChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_parentid",attrs:{prop:t.PI_parentid,value:t.M_TN_TenancyContact.parentid,label:t.M_TN_TenancyContact.parentidLabel},on:{change:t.OnparentidChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputRadioButtonVuex",{ref:"ref_category",attrs:{prop:t.PI_category},on:{input:t.OncategoryChange},model:{value:t.M_TN_TenancyContact.category,callback:function(e){t.$set(t.M_TN_TenancyContact,"category",e)},expression:"M_TN_TenancyContact.category"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputRadioButtonVuex",{ref:"ref_government",attrs:{prop:t.PI_government},on:{input:t.OngovernmentChange},model:{value:t.M_TN_TenancyContact.government,callback:function(e){t.$set(t.M_TN_TenancyContact,"government",e)},expression:"M_TN_TenancyContact.government"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_name",attrs:{prop:t.PI_name},model:{value:t.M_TN_TenancyContact.name,callback:function(e){t.$set(t.M_TN_TenancyContact,"name",e)},expression:"M_TN_TenancyContact.name"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_website",attrs:{prop:t.PI_website},model:{value:t.M_TN_TenancyContact.website,callback:function(e){t.$set(t.M_TN_TenancyContact,"website",e)},expression:"M_TN_TenancyContact.website"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputRadioButtonVuex",{ref:"ref_taxcollectable",attrs:{prop:t.PI_taxcollectable},on:{input:t.OntaxcollectableChange},model:{value:t.M_TN_TenancyContact.taxcollectable,callback:function(e){t.$set(t.M_TN_TenancyContact,"taxcollectable",e)},expression:"M_TN_TenancyContact.taxcollectable"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_taxno",attrs:{prop:t.PI_taxno},model:{value:t.M_TN_TenancyContact.taxno,callback:function(e){t.$set(t.M_TN_TenancyContact,"taxno",e)},expression:"M_TN_TenancyContact.taxno"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_taxreferenceno",attrs:{prop:t.PI_taxreferenceno},model:{value:t.M_TN_TenancyContact.taxreferenceno,callback:function(e){t.$set(t.M_TN_TenancyContact,"taxreferenceno",e)},expression:"M_TN_TenancyContact.taxreferenceno"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputDateVuex",{ref:"ref_taxregistrationdate",attrs:{prop:t.PI_taxregistrationdate},on:{input:t.OntaxregistrationdateChange},model:{value:t.M_TN_TenancyContact.taxregistrationdate,callback:function(e){t.$set(t.M_TN_TenancyContact,"taxregistrationdate",e)},expression:"M_TN_TenancyContact.taxregistrationdate"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSTextAreaVuex",{ref:"ref_remarks",attrs:{prop:t.PI_remarks},on:{input:t.OnremarksChange},model:{value:t.M_TN_TenancyContact.remarks,callback:function(e){t.$set(t.M_TN_TenancyContact,"remarks",e)},expression:"M_TN_TenancyContact.remarks"}})],1)],1)],1)],1),a("ABSTAnalysis",{attrs:{prop:t.PTAnalysis}})],1)],1)],1)],1)],1)],1)},c=[],i=(a("ac6a"),a("7f7f"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{cInsertKey:"",FormType:"List",Module:"TN",propList:{initialWhere:"",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},ContactRunningCd:"",M_TN_TenancyContact:{contactid:"",contactclasscd:"",parentid:"",category:"P",government:"Y",name:"",website:"",taxno:"",taxreferenceno:"",taxregistrationdate:"",taxcollectable:"",remarks:"",userinput:"",timeinput:"",useredit:this.getDataUser().UserId,timeedit:"",classdescs:"",parentname:"",classificationlocalid:"",classificationcentralid:"",classificationgroupid:"",lastupdatestamp:0,rowid:0},PI_contactid:{cValidate:"required|max:20",cName:"contactid",cLabel:"Contact ID",cLabelSize:4,cOrder:1,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_contactclasscd:{dataLookUp:{LookUpCd:"GetLookupCMContactClass",ColumnDB:"ContactClassCd",InitialWhere:"",ParamWhere:""},cValidate:"required",cName:"contactclasscd",cLabel:"Contact Class Code",cKey:!1,cLabelSize:4,cOrder:2,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"CM/CM_ContactClass",cDisplayColumn:"ContactClassCd,Descs"},PI_parentid:{dataLookUp:{LookUpCd:"GetLookupCMContact",ColumnDB:"ContactId",InitialWhere:"",ParamWhere:""},cValidate:"",cName:"parentid",cLabel:"Parent ID",cKey:!1,cLabelSize:4,cOrder:3,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"CM/CM_Contact",cDisplayColumn:"ContactId,Name"},PI_category:{cValidate:"",cName:"category",cId:"rdbcategory",cRadioOptions:[{text:"Personal",value:"P"},{text:"Company",value:"C"}],cRadioDefaultOption:"P",cLabel:"Category ",cLabelSize:4,cOrder:4,cProtect:!1,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_government:{cValidate:"",cName:"government",cId:"rdbgovernment",cRadioOptions:[{text:"Yes",value:"Y"},{text:"No",value:"N"}],cRadioDefaultOption:"Y",cLabel:"Government ",cLabelSize:4,cOrder:5,cProtect:!1,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_name:{cValidate:"required|max:50",cName:"name",cLabel:"Name",cLabelSize:4,cOrder:6,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_website:{cValidate:"max:50",cName:"website",cLabel:"Website",cLabelSize:4,cOrder:7,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_taxcollectable:{cValidate:"",cName:"taxcollectable",cId:"rdbtaxcollectable",cRadioOptions:[{text:"Yes",value:"Y"},{text:"No",value:"N"}],cRadioDefaultOption:"",cLabel:"Tax Collectable ",cLabelSize:4,cOrder:8,cProtect:!1,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_taxno:{cValidate:"max:30",cName:"taxno",cLabel:"Tax Reg. No",cLabelSize:4,cOrder:9,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_taxreferenceno:{cValidate:"max:30",cName:"taxreferenceno",cLabel:"Tax Reference No",cLabelSize:4,cOrder:10,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_taxregistrationdate:{cValidate:"",cName:"taxregistrationdate",cLabel:"Tax Reg. Date",cLabelSize:4,cOrder:11,cKey:!1,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_remarks:{cValidate:"",cName:"remarks",cLabel:"Remarks",cLabelSize:4,cOrder:12,cKey:!1,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage1Data}},methods:{OncontactclasscdChange:function(t){var e=this;this.$nextTick(function(){e.M_TN_TenancyContact.contactclasscd=t.id,e.M_TN_TenancyContact.contactclasscdLabel=t.label,e.inputStatus}),this.$forceUpdate()},OnparentidChange:function(t){var e=this;this.$nextTick(function(){e.M_TN_TenancyContact.parentid=t.id,e.M_TN_TenancyContact.parentidLabel=t.label,e.inputStatus}),this.$forceUpdate()},OncategoryChange:function(t){var e=this;this.$nextTick(function(){e.inputStatus}),this.$forceUpdate()},OngovernmentChange:function(t){var e=this;this.$nextTick(function(){e.inputStatus}),this.$forceUpdate()},OntaxcollectableChange:function(t){var e=this;this.$nextTick(function(){e.inputStatus}),this.$forceUpdate()},OntaxregistrationdateChange:function(t){var e=this;this.$nextTick(function(){e.inputStatus}),this.$forceUpdate()},OnremarksChange:function(t){var e=this;this.$nextTick(function(){e.inputStatus}),this.$forceUpdate()},setToolbarButton:function(){this.getToolbar().statusFunction[0].disabled=!0,this.getToolbar().statusFunction[1].disabled=!0,this.getToolbar().statusFunction[2].disabled=!0},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(t){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(t,e){},rowLink:function(t){this.$refs.modalTest.show()},paramFromParent:function(){},M_Post:function(t){},M_Insert:function(){var t=this;"(auto)"==this.M_TN_TenancyContact.contactid&&this.FnGenerateRunningCode(this.getDataUser().SubPortfolioCd,this.ContactRunningCd,this.getDataUser().UserId,this.M_TN_TenancyContact.gettoday()).then(function(e){null!=e&&(t.M_TN_TenancyContact.contactid=e.RunningCode)});var e={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,ContactId:this.M_TN_TenancyContact.contactid,ContactClassCd:""==this.M_TN_TenancyContact.contactclasscd||null==this.M_TN_TenancyContact.contactclasscd?"NULL":this.M_TN_TenancyContact.contactclasscd,Category:this.M_TN_TenancyContact.category,ParentId:""==this.M_TN_TenancyContact.parentid||null==this.M_TN_TenancyContact.parentid?"NULL":this.M_TN_TenancyContact.parentid,Government:this.M_TN_TenancyContact.government,TaxCollectable:this.M_TN_TenancyContact.taxcollectable,TaxRegistrationDate:""==this.M_TN_TenancyContact.taxregistrationdate||null==this.M_TN_TenancyContact.taxregistrationdate?"NULL":this.M_TN_TenancyContact.taxregistrationdate,Name:this.M_TN_TenancyContact.name,Website:this.M_TN_TenancyContact.website,TaxNo:this.M_TN_TenancyContact.taxno,TaxReferenceNo:this.M_TN_TenancyContact.taxreferenceno,Remarks:this.M_TN_TenancyContact.remarks,UserInput:this.getDataUser().UserId,ClassificationLocalID:this.M_TN_TenancyContact.classificationlocalid,ClassificationCentralID:this.M_TN_TenancyContact.classificationcentralid,ClassificationGroupID:this.M_TN_TenancyContact.classificationgroupid};this.postJSON(this.getUrlInsert(),e).then(function(e){null!=e&&t.$parent.resultInsert(e.Message)})},M_Update:function(){var t=this,e={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,ContactId:this.M_TN_TenancyContact.contactid,ContactClassCd:""==this.M_TN_TenancyContact.contactclasscd||null==this.M_TN_TenancyContact.contactclasscd?"NULL":this.M_TN_TenancyContact.contactclasscd,Category:this.M_TN_TenancyContact.category,Government:this.M_TN_TenancyContact.government,Name:this.M_TN_TenancyContact.name,ParentId:""==this.M_TN_TenancyContact.parentid||null==this.M_TN_TenancyContact.parentid?"NULL":this.M_TN_TenancyContact.parentid,Website:this.M_TN_TenancyContact.website,TaxNo:this.M_TN_TenancyContact.taxno,TaxReferenceNo:this.M_TN_TenancyContact.taxreferenceno,TaxRegistrationDate:""==this.M_TN_TenancyContact.taxregistrationdate||null==this.M_TN_TenancyContact.taxregistrationdate?"NULL":this.M_TN_TenancyContact.taxregistrationdate,TaxCollectable:this.M_TN_TenancyContact.taxcollectable,Remarks:this.M_TN_TenancyContact.remarks,UserEdit:this.getDataUser().UserId,LastUpdateStamp:this.M_TN_TenancyContact.lastupdatestamp,ClassificationLocalID:this.M_TN_TenancyContact.classificationlocalid,ClassificationCentralID:this.M_TN_TenancyContact.classificationcentralid,ClassificationGroupID:this.M_TN_TenancyContact.classificationgroupid};this.postJSON(this.getUrlUpdate(),e).then(function(e){null!=e&&t.$parent.resultUpdate(e.Message)})},M_ClearForm:function(){this.M_TN_TenancyContact={contactid:"",contactclasscd:"",parentid:"",category:"P",government:"Y",name:"",website:"",taxno:"",taxreferenceno:"",taxregistrationdate:"",taxcollectable:"",remarks:"",userinput:"",timeinput:"",useredit:this.getDataUser().UserId,timeedit:"",classdescs:"",parentname:"",classificationlocalid:"",classificationcentralid:"",classificationgroupid:"",lastupdatestamp:0,rowid:0}},M_New:function(){var t=this;this.FnGetRunningCdFromCMSpecification().then(function(e){null!=e&&(t.ContactRunningCd=e.ContactRunningCd,""!=e.ContactRunningCd?(t.PI_contactid.cProtect=!0,t.M_TN_TenancyContact.contactid="(auto)"):(t.PI_contactid.cProtect=!1,t.M_TN_TenancyContact.contactid=""))}),this.$refs.ref_contactid.focus()},M_Edit:function(){this.$refs.ref_contactclasscd.focus()},M_Delete:function(t){var e=this,a=this.FormToABSList().getRowSelected(),n=[];a.forEach(function(t){n.push({ContactId:t.ContactId,LastUpdateStamp:t.LastUpdateStamp,_Message_:""})});var c={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:n};this.postJSONMulti(this.getUrlNewDeleteMulti(),c).then(function(t){null!=t&&e.$parent.resultDelete()})},getDataBy:function(t){var e=this,a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,contactid:t.ContactId};this.postEncode(this.getUrlById(),a).then(function(a){if(null!=a){var n=a.Data[0];e.M_TN_TenancyContact={contactid:n.contactid,contactclasscd:n.contactclasscd,parentid:n.parentid,category:n.category,government:n.government,name:n.name,website:n.website,taxno:n.taxno,taxreferenceno:n.taxreferenceno,taxregistrationdate:n.taxregistrationdate,taxcollectable:n.taxcollectable,remarks:n.remarks,userinput:n.userinput,timeinput:n.timeinput,useredit:n.useredit,timeedit:n.timeedit,classdescs:n.classdescs,parentname:n.parentname,classificationlocalid:n.classificationlocalid,classificationcentralid:n.classificationcentralid,classificationgroupid:n.classificationgroupid,lastupdatestamp:t.LastUpdateStamp,rowid:e.isCurrency(n.rowid,e.decimal)},e.M_TN_TenancyContact.contactclasscdLabel=null!=e.M_TN_TenancyContact.contactclasscd&&""!=e.M_TN_TenancyContact.contactclasscd?n.contactclasscd+e.separator+n.classdescs:"",e.M_TN_TenancyContact.parentidLabel=null!=e.M_TN_TenancyContact.parentid&&""!=e.M_TN_TenancyContact.parentid?n.parentid+e.separator+n.parentname:"",e.IEBy.Input=n.userinput,e.IEBy.Edit=n.useredit}})}},beforeCreate:function(){},created:function(){this.$store.commit("setFormType","List"),this.getToolbar().ProcessPS()},beforeMount:function(){},mounted:function(){this.hideSideBarMenu(),this.FormToABSList().doGetList("","eb_getList")},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),o=i,s=a("2877"),r=Object(s["a"])(o,n,c,!1,null,null,null);r.options.__file="TN_TenancyContact.vue";e["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d217cca.89b9b9fa.js.map