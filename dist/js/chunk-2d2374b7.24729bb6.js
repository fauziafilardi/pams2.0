(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2374b7"],{fb05:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ABSListVuex",{attrs:{prop:t.propList,title:t.data.QueryName},on:{rowClicked:t.$parent.rowClicked,rowDblClicked:t.$parent.doDoubleClick,rowLinkClick:t.$parent.rowLink,pageSize:t.$parent.M_PageSize,pagination:t.$parent.M_Pagination,filter:t.$parent.M_Advance_Filter,headTable:t.$parent.M_Head_Table,refreshColumn:t.$parent.refreshColumn}}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[a("span",{directives:[{name:"show",rawName:"v-show",value:t.IEBy.Input&&t.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[t._v("\n                    Input By : "+t._s(t.IEBy.Input)+" | Edit By : "+t._s(t.IEBy.Edit)+" "),a("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),a("b-collapse",{attrs:{id:"collapse1",visible:!0}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[a("b-form",{attrs:{"data-vv-scope":"FormScope_"+t.PageLevel+"_"+t.TabIndex,"data-vv-value-path":"FormScope_"+t.PageLevel+"_"+t.TabIndex}},[a("b-row",{staticStyle:{"padding-left":"10px"}},[a("b-col",{attrs:{md:"12",id:"col-left"}},[a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_contactid",attrs:{prop:t.PI_contactid},on:{input:t.OncontactidChange},model:{value:t.M_CM_Contact.contactid,callback:function(e){t.$set(t.M_CM_Contact,"contactid",e)},expression:"M_CM_Contact.contactid"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_contactclasscd",attrs:{prop:t.PI_contactclasscd,value:t.M_CM_Contact.contactclasscd,label:t.M_CM_Contact.contactclasscdLabel},on:{change:t.OncontactclasscdChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputRadioButtonVuex",{ref:"ref_classificationid",attrs:{prop:t.PI_classificationid},on:{input:t.OnclassificationidChange},model:{value:t.M_CM_Contact.classificationid,callback:function(e){t.$set(t.M_CM_Contact,"classificationid",e)},expression:"M_CM_Contact.classificationid"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_parentid",attrs:{prop:t.PI_parentid,value:t.M_CM_Contact.parentid,label:t.M_CM_Contact.parentidLabel},on:{change:t.OnparentidChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputRadioButtonVuex",{ref:"ref_category",attrs:{prop:t.PI_category},on:{input:t.OncategoryChange},model:{value:t.M_CM_Contact.category,callback:function(e){t.$set(t.M_CM_Contact,"category",e)},expression:"M_CM_Contact.category"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputRadioButtonVuex",{ref:"ref_government",attrs:{prop:t.PI_government},on:{input:t.OngovernmentChange},model:{value:t.M_CM_Contact.government,callback:function(e){t.$set(t.M_CM_Contact,"government",e)},expression:"M_CM_Contact.government"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_name",attrs:{prop:t.PI_name},on:{input:t.OnnameChange},model:{value:t.M_CM_Contact.name,callback:function(e){t.$set(t.M_CM_Contact,"name",e)},expression:"M_CM_Contact.name"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_website",attrs:{prop:t.PI_website},on:{input:t.OnwebsiteChange},model:{value:t.M_CM_Contact.website,callback:function(e){t.$set(t.M_CM_Contact,"website",e)},expression:"M_CM_Contact.website"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputRadioButtonVuex",{ref:"ref_taxcollectable",attrs:{prop:t.PI_taxcollectable},on:{input:t.OntaxcollectableChange},model:{value:t.M_CM_Contact.taxcollectable,callback:function(e){t.$set(t.M_CM_Contact,"taxcollectable",e)},expression:"M_CM_Contact.taxcollectable"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_taxno",attrs:{prop:t.PI_taxno},on:{input:t.OntaxnoChange},model:{value:t.M_CM_Contact.taxno,callback:function(e){t.$set(t.M_CM_Contact,"taxno",e)},expression:"M_CM_Contact.taxno"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_taxreferenceno",attrs:{prop:t.PI_taxreferenceno},on:{input:t.OntaxreferencenoChange},model:{value:t.M_CM_Contact.taxreferenceno,callback:function(e){t.$set(t.M_CM_Contact,"taxreferenceno",e)},expression:"M_CM_Contact.taxreferenceno"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputDateVuex",{ref:"ref_taxregistrationdate",attrs:{prop:t.PI_taxregistrationdate},on:{input:t.OntaxregistrationdateChange},model:{value:t.M_CM_Contact.taxregistrationdate,callback:function(e){t.$set(t.M_CM_Contact,"taxregistrationdate",e)},expression:"M_CM_Contact.taxregistrationdate"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSTextAreaVuex",{ref:"ref_remarks",attrs:{prop:t.PI_remarks},on:{input:t.OnremarksChange},model:{value:t.M_CM_Contact.remarks,callback:function(e){t.$set(t.M_CM_Contact,"remarks",e)},expression:"M_CM_Contact.remarks"}})],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)},i=[],c=(a("ac6a"),a("7f7f"),a("cadf"),a("551c"),a("097d"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{FormType:"List",Module:"CM",ValKey:null,cInsertKey:"id=ContactId,label=ContactId+|+Name",DataSpec:null,propList:{initialWhere:"",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},ContactApproval:"",ContactRunningCd:"",M_CM_Contact:{contactid:"",contactclasscd:"",classificationid:[],parentid:"",category:"P",government:"N",name:"",website:"",taxno:"",taxreferenceno:"",taxregistrationdate:"",taxcollectable:"Y",remarks:"",userinput:"",timeinput:"",useredit:this.getDataUser().UserId,timeedit:"",classdescs:"",parentname:"",classificationlocalid:"",classificationcentralid:"",classificationgroupid:"",lastupdatestamp:0,rowid:0},PI_contactid:{cValidate:"required|max:20",cName:"contactid",cLabel:"Contact ID",cLabelSize:4,cOrder:1,cKey:!0,cType:"text",cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_contactclasscd:{dataLookUp:{LookUpCd:"GetLookupCMContactClass",ColumnDB:"ContactClassCd",InitialWhere:"",ParamWhere:""},cValidate:"required",cName:"contactclasscd",cLabel:"Contact Class Code",cKey:!1,cLabelSize:4,cOrder:2,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"CM/CM_ContactClass",cDisplayColumn:"ContactClassCd,Descs"},PI_classificationid:{cValidate:"",cName:"classificationid",cId:"rdbclassificationid",cRadioOptions:[{text:"Local ID",value:"L"},{text:"Central ID",value:"C"},{text:"Group ID",value:"G"}],cRadioDefaultOption:"",cLabel:"Contact ID Classification",cLabelSize:4,cOrder:3,cProtect:!1,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cShowClearButton:!0},PI_parentid:{dataLookUp:{LookUpCd:"GetLookupCentral",ColumnDB:"ContactID",InitialWhere:"Classification = 'Central'",ParamWhere:""},cValidate:"",cName:"parentid",cLabel:"Parent ID",cKey:!1,cLabelSize:4,cOrder:4,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"CM/CM_Contact",cDisplayColumn:"ContactID,Name"},PI_category:{cValidate:"",cName:"category",cId:"rdbcategory",cRadioOptions:[{text:"Personal",value:"P"},{text:"Company",value:"C"}],cRadioDefaultOption:"P",cLabel:"Category",cLabelSize:4,cOrder:5,cProtect:!1,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_government:{cValidate:"",cName:"government",cId:"rdbgovernment",cRadioOptions:[{text:"Yes",value:"Y"},{text:"No",value:"N"}],cRadioDefaultOption:"N",cLabel:"Government",cLabelSize:4,cOrder:6,cProtect:!1,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_name:{cValidate:"required|max:50",cName:"name",cLabel:"Name",cLabelSize:4,cOrder:7,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_website:{cValidate:"max:50",cName:"website",cLabel:"Website",cLabelSize:4,cOrder:8,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_taxcollectable:{cValidate:"",cName:"taxcollectable",cId:"rdbtaxcollectable",cRadioOptions:[{text:"Yes",value:"Y"},{text:"No",value:"N"}],cRadioDefaultOption:"Y",cLabel:"Tax Collectable",cLabelSize:4,cOrder:9,cProtect:!0,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_taxno:{cValidate:"max:30|required",cName:"taxno",cLabel:"Tax Reg. No",cLabelSize:4,cOrder:10,cKey:!1,cType:"numeric",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_taxreferenceno:{cValidate:"max:30",cName:"taxreferenceno",cLabel:"Tax Reference No",cLabelSize:4,cOrder:11,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_taxregistrationdate:{cValidate:"",cName:"taxregistrationdate",cLabel:"Tax Reg. Date",cLabelSize:4,cOrder:12,cKey:!1,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_remarks:{cValidate:"",cName:"remarks",cLabel:"Remarks",cLabelSize:4,cOrder:13,cKey:!1,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage1Data}},methods:{GetCMSpecification:function(){var t=this,e={OptionFunctionCd:"GetCMSpecification",ModuleCd:this.Module};this.FnDynamicFunction(e).then(function(e){if(null!=e){var a=e[0];console.log(a),t.DataSpec=a,"Y"==a.ContactApproval?t.getToolbar().statusFunction[0].disabled=!0:t.getToolbar().statusFunction[0].disabled=!1}})},OncontactidChange:function(t){var e=this;this.$nextTick(function(){e.inputStatus}),this.$forceUpdate()},OncontactclasscdChange:function(t){var e=this;this.$nextTick(function(){e.M_CM_Contact.contactclasscd=t.id,e.M_CM_Contact.contactclasscdLabel=t.label,e.inputStatus}),this.$forceUpdate()},OnclassificationidChange:function(t){var e=this;this.$nextTick(function(){"VIEW"!=e.inputStatus&&("C"==t&&(e.M_CM_Contact.classificationcentralid="Y",e.M_CM_Contact.classificationlocalid="N",e.M_CM_Contact.classificationgroupid="N",e.$refs.ref_parentid.prop.dataLookUp.InitialWhere=" Classification = 'Group' AND ContactId <> '"+e.M_CM_Contact.contactid+"' ",e.$refs.ref_parentid.prop.dataLookUp.LookUpCd="GetLookupClassificationID",e.$refs.ref_parentid.prop.dataLookUp.ColumnDB="ParentId",e.PI_parentid.cProtect=!1,e.PI_parentid.cValidate="required",e.PI_taxno.cProtect=!1,e.$refs.ref_taxno.isRequired=!0,e.PI_taxno.cValidate="required"),"L"==t&&(e.M_CM_Contact.classificationcentralid="N",e.M_CM_Contact.classificationlocalid="Y",e.M_CM_Contact.classificationgroupid="N",e.$refs.ref_parentid.prop.dataLookUp.InitialWhere=" Classification = 'Central' AND ContactId <> '"+e.M_CM_Contact.contactid+"' ",e.$refs.ref_parentid.prop.dataLookUp.LookUpCd="GetLookupClassificationID",e.$refs.ref_parentid.prop.dataLookUp.ColumnDB="ParentId",e.PI_parentid.cProtect=!1,e.PI_parentid.cValidate="required",e.PI_taxno.cProtect=!1,e.$refs.ref_taxno.isRequired=!0,e.PI_taxno.cValidate="required"),"G"==t&&(e.M_CM_Contact.classificationcentralid="N",e.M_CM_Contact.classificationlocalid="N",e.M_CM_Contact.classificationgroupid="Y",e.M_CM_Contact.taxcollectable="N",e.PI_taxcollectable.cProtect=!0,e.$refs.ref_parentid.prop.dataLookUp.InitialWhere=" ContactId <> '"+e.M_CM_Contact.contactid+"' ",e.$refs.ref_parentid.prop.dataLookUp.LookUpCd="GetLookupCMContact",e.PI_parentid.cProtect=!0,e.PI_parentid.cValidate="",e.PI_taxno.cProtect=!0,e.$refs.ref_taxno.isRequired=!1,e.PI_taxno.cValidate="",e.M_CM_Contact.parentidLabel="",e.M_CM_Contact.parentid=""),null==t&&""==t&&(e.M_CM_Contact.classificationcentralid="N",e.M_CM_Contact.classificationlocalid="N",e.M_CM_Contact.classificationgroupid="N",e.M_CM_Contact.taxcollectable="Y",e.$refs.ref_parentid.prop.dataLookUp.InitialWhere=" ContactId <> '"+e.M_CM_Contact.contactid+"' ",e.$refs.ref_parentid.prop.dataLookUp.LookUpCd="GetLookupCMContact",e.PI_parentid.cProtect=!1,e.$refs.ref_taxno.isRequired=!0,e.PI_taxno.cValidate="required",e.$refs.ref_taxno.isRequired=!0))}),this.$forceUpdate()},OnparentidChange:function(t){var e=this;this.$nextTick(function(){e.M_CM_Contact.parentid=t.id,e.M_CM_Contact.parentidLabel=t.label,e.inputStatus}),this.$forceUpdate()},OncategoryChange:function(t){var e=this;this.$nextTick(function(){e.inputStatus}),this.$forceUpdate()},OngovernmentChange:function(t){var e=this;this.$nextTick(function(){e.inputStatus}),this.$forceUpdate()},OnnameChange:function(t){var e=this;this.$nextTick(function(){e.inputStatus}),this.$forceUpdate()},OnwebsiteChange:function(t){var e=this;this.$nextTick(function(){e.inputStatus}),this.$forceUpdate()},OntaxcollectableChange:function(t){var e=this;this.$nextTick(function(){e.inputStatus}),this.$forceUpdate()},OntaxnoChange:function(t){var e=this;this.$nextTick(function(){e.inputStatus}),this.$forceUpdate()},OntaxreferencenoChange:function(t){var e=this;this.$nextTick(function(){e.inputStatus}),this.$forceUpdate()},OntaxregistrationdateChange:function(t){var e=this;this.$nextTick(function(){e.inputStatus}),this.$forceUpdate()},OnremarksChange:function(t){var e=this;this.$nextTick(function(){e.inputStatus}),this.$forceUpdate()},setToolbarButton:function(){"Y"==this.DataSpec.ContactApproval?this.getToolbar().statusFunction[0].disabled=!0:this.getToolbar().statusFunction[0].disabled=!1},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(t){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(t,e){},rowLink:function(t){this.$refs.modalTest.show()},paramFromParent:function(){},M_Post:function(){},M_Insert:function(){var t=this;if(""!=this.ContactRunningCd)this.FnGenerateRunningCode(this.getDataUser().SubPortfolioCd,this.ContactRunningCd,this.getDataUser().UserId,this.getToday()).then(function(e){if(null!=e){t.M_CM_Contact.contactid=e.RunningCode;var a={OptionSeq:t.getOptionSeq().OptionSeq,LineNo:t.$parent.data.PageOrder,ContactId:t.M_CM_Contact.contactid,ContactClassCd:""==t.M_CM_Contact.contactclasscd||null==t.M_CM_Contact.contactclasscd?"NULL":t.M_CM_Contact.contactclasscd,Category:t.M_CM_Contact.category,ParentId:""==t.M_CM_Contact.parentid||null==t.M_CM_Contact.parentid?"NULL":t.M_CM_Contact.parentid,Government:t.M_CM_Contact.government,TaxCollectable:t.M_CM_Contact.taxcollectable,TaxRegistrationDate:""==t.M_CM_Contact.taxregistrationdate||null==t.M_CM_Contact.taxregistrationdate?"NULL":t.M_CM_Contact.taxregistrationdate,Name:t.M_CM_Contact.name,Website:t.M_CM_Contact.website,TaxNo:t.M_CM_Contact.taxno,TaxReferenceNo:t.M_CM_Contact.taxreferenceno,Remarks:t.M_CM_Contact.remarks,UserInput:t.getDataUser().UserId,ClassificationLocalID:t.M_CM_Contact.classificationid.indexOf("L")>=0?"Y":"N",ClassificationCentralID:t.M_CM_Contact.classificationid.indexOf("C")>=0?"Y":"N",ClassificationGroupID:t.M_CM_Contact.classificationid.indexOf("G")>=0?"Y":"N"};t.postJSON(t.getUrlInsert(),a).then(function(e){null!=e&&t.$parent.resultInsert(e.Message)})}});else{var e={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,ContactId:this.M_CM_Contact.contactid,ContactClassCd:""==this.M_CM_Contact.contactclasscd||null==this.M_CM_Contact.contactclasscd?"NULL":this.M_CM_Contact.contactclasscd,Category:this.M_CM_Contact.category,ParentId:""==this.M_CM_Contact.parentid||null==this.M_CM_Contact.parentid?"NULL":this.M_CM_Contact.parentid,Government:this.M_CM_Contact.government,TaxCollectable:this.M_CM_Contact.taxcollectable,TaxRegistrationDate:""==this.M_CM_Contact.taxregistrationdate||null==this.M_CM_Contact.taxregistrationdate?"NULL":this.M_CM_Contact.taxregistrationdate,Name:this.M_CM_Contact.name,Website:this.M_CM_Contact.website,TaxNo:this.M_CM_Contact.taxno,TaxReferenceNo:this.M_CM_Contact.taxreferenceno,Remarks:this.M_CM_Contact.remarks,UserInput:this.getDataUser().UserId,ClassificationLocalID:this.M_CM_Contact.classificationid.indexOf("L")>=0?"Y":"N",ClassificationCentralID:this.M_CM_Contact.classificationid.indexOf("C")>=0?"Y":"N",ClassificationGroupID:this.M_CM_Contact.classificationid.indexOf("G")>=0?"Y":"N"};this.postJSON(this.getUrlInsert(),e).then(function(e){null!=e&&t.$parent.resultInsert(e.Message)})}},M_Update:function(){var t=this,e={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,ContactId:this.M_CM_Contact.contactid,ContactClassCd:""==this.M_CM_Contact.contactclasscd||null==this.M_CM_Contact.contactclasscd?"NULL":this.M_CM_Contact.contactclasscd,Category:this.M_CM_Contact.category,Government:this.M_CM_Contact.government,Name:this.M_CM_Contact.name,ParentId:""==this.M_CM_Contact.parentid||null==this.M_CM_Contact.parentid?"NULL":this.M_CM_Contact.parentid,Website:this.M_CM_Contact.website,TaxNo:this.M_CM_Contact.taxno,TaxReferenceNo:this.M_CM_Contact.taxreferenceno,TaxRegistrationDate:""==this.M_CM_Contact.taxregistrationdate||null==this.M_CM_Contact.taxregistrationdate?"NULL":this.M_CM_Contact.taxregistrationdate,TaxCollectable:this.M_CM_Contact.taxcollectable,Remarks:this.M_CM_Contact.remarks,UserEdit:this.getDataUser().UserId,LastUpdateStamp:this.M_CM_Contact.lastupdatestamp,ClassificationLocalID:this.M_CM_Contact.classificationlocalid,ClassificationCentralID:this.M_CM_Contact.classificationcentralid,ClassificationGroupID:this.M_CM_Contact.classificationgroupid};this.postJSON(this.getUrlUpdate(),e).then(function(e){null!=e&&t.$parent.resultUpdate(e.Message)})},M_ClearForm:function(){this.M_CM_Contact={contactid:"",contactclasscd:"",classificationid:[],parentid:"",category:"P",government:"N",name:"",website:"",taxno:"",taxreferenceno:"",taxregistrationdate:"",taxcollectable:"Y",remarks:"",userinput:"",timeinput:"",useredit:this.getDataUser().UserId,timeedit:"",classdescs:"",parentname:"",classificationlocalid:"",classificationcentralid:"",classificationgroupid:"",lastupdatestamp:0,rowid:0}},M_New:function(){var t=this;this.FnGetRunningCdFromCMSpecification().then(function(e){null!=e&&(t.ContactRunningCd=e.ContactRunningCd,""!=t.ContactRunningCd?(t.PI_contactid.cProtect=!0,t.M_CM_Contact.contactid="(auto)",t.$refs.ref_contactclasscd.focus()):(t.PI_contactid.cProtect=!1,t.M_CM_Contact.contactid="",t.$refs.ref_contactid.focus()))})},M_Edit:function(){this.$refs.ref_contactclasscd.focus()},M_Delete:function(t){var e=this,a=this.FormToABSList().getRowSelected(),n=[];a.forEach(function(t){n.push({ContactId:t.ContactId,LastUpdateStamp:t.LastUpdateStamp,_Message_:""})});var i={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:n};this.postJSONMulti(this.getUrlNewDeleteMulti(),i).then(function(t){null!=t&&e.$parent.resultDelete()})},getDataBy:function(t){var e=this,a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,contactid:t.ContactId};this.postEncode(this.getUrlById(),a).then(function(a){if(null!=a){var n=a.Data[0],i=null;"Y"==n.classificationcentralid&&(e.$refs.ref_parentid.prop.dataLookUp.InitialWhere=" Classification = 'Group' AND ContactId <> '"+e.M_CM_Contact.contactid+"' ",e.$refs.ref_parentid.prop.dataLookUp.LookUpCd="GetLookupClassificationID",e.$refs.ref_parentid.prop.dataLookUp.ColumnDB="ParentId",e.PI_parentid.cProtect=!1,e.PI_taxno.cProtect=!1,e.$refs.ref_taxno.isRequired=!0,e.PI_taxno.cValidate="required",i="C"),"Y"==n.classificationlocalid&&(e.$refs.ref_parentid.prop.dataLookUp.InitialWhere=" Classification = 'Central' AND ContactId <> '"+e.M_CM_Contact.contactid+"' ",e.$refs.ref_parentid.prop.dataLookUp.LookUpCd="GetLookupClassificationID",e.$refs.ref_parentid.prop.dataLookUp.ColumnDB="ParentId",e.PI_parentid.cProtect=!1,e.PI_taxno.cProtect=!1,e.$refs.ref_taxno.isRequired=!0,e.PI_taxno.cValidate="required",i="L"),"Y"==n.classificationgroupid&&(e.$refs.ref_parentid.prop.dataLookUp.InitialWhere=" ContactId <> '"+e.M_CM_Contact.contactid+"' ",e.$refs.ref_parentid.prop.dataLookUp.LookUpCd="GetLookupCMContact",e.PI_parentid.cProtect=!0,e.PI_taxno.cProtect=!0,e.$refs.ref_taxno.isRequired=!1,e.PI_taxno.cValidate="",i="G"),e.M_CM_Contact={contactid:n.contactid,contactclasscd:n.contactclasscd,classificationid:i,parentid:n.parentid,category:n.category,government:n.government,name:n.name,website:n.website,taxno:n.taxno,taxreferenceno:n.taxreferenceno,taxregistrationdate:n.taxregistrationdate,taxcollectable:n.taxcollectable,remarks:n.remarks,userinput:n.userinput,timeinput:n.timeinput,useredit:n.useredit,timeedit:n.timeedit,classdescs:n.classdescs,parentname:n.parentname,classificationlocalid:n.classificationlocalid,classificationcentralid:n.classificationcentralid,classificationgroupid:n.classificationgroupid,lastupdatestamp:t.LastUpdateStamp,rowid:n.rowid},e.M_CM_Contact.contactclasscdLabel=null!=e.M_CM_Contact.contactclasscd?n.contactclasscd+e.separator+n.classdescs:"",e.M_CM_Contact.parentidLabel=null!=e.M_CM_Contact.parentid?n.parentid+e.separator+n.parentname:"",e.IEBy.Input=n.userinput,e.IEBy.Edit=n.useredit}})},getContactApproval:function(){var t=this,e={OptionFunctionCd:"GetContactApproval",ModuleCd:this.Module};this.FnDynamicFunction(e).then(function(e){null!=e&&(t.ContactApproval=e[0].ContactApproval,"Y"==t.ContactApproval&&(t.getToolbar().statusFunction[0].disabled=!0))})}},beforeCreate:function(){},created:function(){this.GetCMSpecification()},beforeMount:function(){},mounted:function(){this.hideSideBarMenu(),this.FormToABSList().doGetList("","eb_getList")},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),o=c,r=a("2877"),s=Object(r["a"])(o,n,i,!1,null,null,null);s.options.__file="CM_Contact.vue";e["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2d2374b7.24729bb6.js.map