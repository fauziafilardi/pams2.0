(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d224cd0"],{e24a:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ABSListVuex",{attrs:{prop:t.propList,title:t.data.QueryName},on:{rowClicked:t.$parent.rowClicked,rowDblClicked:t.$parent.doDoubleClick,rowLinkClick:t.$parent.rowLink,pageSize:t.$parent.M_PageSize,pagination:t.$parent.M_Pagination,filter:t.$parent.M_Advance_Filter,headTable:t.$parent.M_Head_Table,refreshColumn:t.$parent.refreshColumn}}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[a("span",{directives:[{name:"show",rawName:"v-show",value:t.IEBy.Input&&t.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[t._v("\n                    Input By : "+t._s(t.IEBy.Input)+" | Edit By : "+t._s(t.IEBy.Edit)+" "),a("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),a("b-collapse",{attrs:{id:"collapse1",visible:!0}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[a("b-form",{attrs:{"data-vv-scope":"FormScope_"+t.PageLevel+"_"+t.TabIndex,"data-vv-value-path":"FormScope_"+t.PageLevel+"_"+t.TabIndex}},[a("b-row",{staticStyle:{"padding-left":"10px"}},[a("b-col",{attrs:{md:"12",id:"col-left"}},[a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_contactclasscd",attrs:{prop:t.PI_contactclasscd,value:t.M_CM_ContactApproval.contactclasscd,label:t.M_CM_ContactApproval.contactclasscdLabel},on:{change:t.OncontactclasscdChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputRadioButtonVuex",{ref:"ref_classificationid",attrs:{prop:t.PI_classificationid},on:{input:t.OnclassificationidChange},model:{value:t.M_CM_ContactApproval.classificationid,callback:function(e){t.$set(t.M_CM_ContactApproval,"classificationid",e)},expression:"M_CM_ContactApproval.classificationid"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_parentid",attrs:{prop:t.PI_parentid,value:t.M_CM_ContactApproval.parentid,label:t.M_CM_ContactApproval.parentidLabel},on:{change:t.OnparentidChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputRadioButtonVuex",{ref:"ref_category",attrs:{prop:t.PI_category},on:{input:t.OncategoryChange},model:{value:t.M_CM_ContactApproval.category,callback:function(e){t.$set(t.M_CM_ContactApproval,"category",e)},expression:"M_CM_ContactApproval.category"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputRadioButtonVuex",{ref:"ref_government",attrs:{prop:t.PI_government},on:{input:t.OngovernmentChange},model:{value:t.M_CM_ContactApproval.government,callback:function(e){t.$set(t.M_CM_ContactApproval,"government",e)},expression:"M_CM_ContactApproval.government"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_name",attrs:{prop:t.PI_name},model:{value:t.M_CM_ContactApproval.name,callback:function(e){t.$set(t.M_CM_ContactApproval,"name",e)},expression:"M_CM_ContactApproval.name"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_website",attrs:{prop:t.PI_website},model:{value:t.M_CM_ContactApproval.website,callback:function(e){t.$set(t.M_CM_ContactApproval,"website",e)},expression:"M_CM_ContactApproval.website"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputRadioButtonVuex",{ref:"ref_taxcollectable",attrs:{prop:t.PI_taxcollectable},on:{input:t.OntaxcollectableChange},model:{value:t.M_CM_ContactApproval.taxcollectable,callback:function(e){t.$set(t.M_CM_ContactApproval,"taxcollectable",e)},expression:"M_CM_ContactApproval.taxcollectable"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_taxno",attrs:{prop:t.PI_taxno},model:{value:t.M_CM_ContactApproval.taxno,callback:function(e){t.$set(t.M_CM_ContactApproval,"taxno",e)},expression:"M_CM_ContactApproval.taxno"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_taxreferenceno",attrs:{prop:t.PI_taxreferenceno},model:{value:t.M_CM_ContactApproval.taxreferenceno,callback:function(e){t.$set(t.M_CM_ContactApproval,"taxreferenceno",e)},expression:"M_CM_ContactApproval.taxreferenceno"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputDateVuex",{ref:"ref_taxregistrationdate",attrs:{prop:t.PI_taxregistrationdate},on:{input:t.OntaxregistrationdateChange},model:{value:t.M_CM_ContactApproval.taxregistrationdate,callback:function(e){t.$set(t.M_CM_ContactApproval,"taxregistrationdate",e)},expression:"M_CM_ContactApproval.taxregistrationdate"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputRadioButtonVuex",{ref:"ref_status",attrs:{prop:t.PI_status},on:{input:t.OnstatusChange},model:{value:t.M_CM_ContactApproval.status,callback:function(e){t.$set(t.M_CM_ContactApproval,"status",e)},expression:"M_CM_ContactApproval.status"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_reasoncd",attrs:{prop:t.PI_reasoncd,value:t.M_CM_ContactApproval.reasoncd,label:t.M_CM_ContactApproval.reasoncdLabel},on:{change:t.OnreasoncdChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_reasondescs",attrs:{prop:t.PI_reasondescs},model:{value:t.M_CM_ContactApproval.reasondescs,callback:function(e){t.$set(t.M_CM_ContactApproval,"reasondescs",e)},expression:"M_CM_ContactApproval.reasondescs"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSTextAreaVuex",{ref:"ref_remarks",attrs:{prop:t.PI_remarks},on:{input:t.OnremarksChange},model:{value:t.M_CM_ContactApproval.remarks,callback:function(e){t.$set(t.M_CM_ContactApproval,"remarks",e)},expression:"M_CM_ContactApproval.remarks"}})],1)],1)],1)],1),a("ABSTAnalysis",{attrs:{prop:t.PTAnalysis}})],1)],1)],1)],1)],1)],1)},c=[],n=(a("ac6a"),a("7f7f"),a("cadf"),a("551c"),a("097d"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{cInsertKey:"",FormType:"List",Module:"CM",propList:{initialWhere:"Status = 'N'",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_CM_ContactApproval:{contactid:"",contactclasscd:"",parentid:"",category:"P",government:"N",reasoncd:"",reasondescs:"",name:"",website:"",taxno:"",taxreferenceno:"",taxregistrationdate:"",taxcollectable:"Y",remarks:"",userinput:"",useredit:this.getDataUser().UserId,classdescs:"",parentname:"",classificationlocalid:"",classificationcentralid:"",classificationgroupid:"",sequenceregistrationno:0,lastupdatestamp:0,rowid:0,insurancestatus:"",financierstatus:"",status:"A",classificationid:""},PI_contactclasscd:{dataLookUp:{LookUpCd:"GetLookupCMContactClass",ColumnDB:"ContactClassCd",InitialWhere:"",ParamWhere:""},cValidate:"required",cName:"contactclasscd",cLabel:"Contact Class Code",cKey:!1,cLabelSize:4,cOrder:1,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"CM/CM_ContactClass",cDisplayColumn:"ContactClassCd,Descs"},PI_classificationid:{cValidate:"",cName:"classificationid",cId:"rdbclassificationid",cRadioOptions:[{text:"Local ID",value:"L"},{text:"Central ID",value:"C"},{text:"Group ID",value:"G"}],cRadioDefaultOption:"",cLabel:"Contact ID Classification",cLabelSize:4,cOrder:2,cProtect:!1,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_parentid:{dataLookUp:{LookUpCd:"GetLookupCentral",ColumnDB:"ParentId",InitialWhere:"",ParamWhere:""},cValidate:"",cName:"parentid",cLabel:"Parent ID",cKey:!1,cLabelSize:4,cOrder:3,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"CM/CM_Contact",cDisplayColumn:""},PI_category:{cValidate:"",cName:"category",cId:"rdbcategory",cRadioOptions:[{text:"Personal",value:"P"},{text:"Company",value:"C"}],cRadioDefaultOption:"P",cLabel:"Category",cLabelSize:4,cOrder:4,cProtect:!1,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_government:{cValidate:"",cName:"government",cId:"rdbgovernment",cRadioOptions:[{text:"Yes",value:"Y"},{text:"No",value:"N"}],cRadioDefaultOption:"N",cLabel:"Government",cLabelSize:4,cOrder:5,cProtect:!1,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_name:{cValidate:"required|max:50",cName:"name",cLabel:"Name",cLabelSize:4,cOrder:6,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_website:{cValidate:"",cName:"website",cLabel:"Website",cLabelSize:4,cOrder:7,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_taxcollectable:{cValidate:"",cName:"taxcollectable",cId:"rdbtaxcollectable",cRadioOptions:[{text:"Yes",value:"Y"},{text:"No",value:"N"}],cRadioDefaultOption:"Y",cLabel:"\t\tTax Collectable",cLabelSize:4,cOrder:8,cKey:!0,cProtect:!1,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_taxno:{cValidate:"required|max:30",cName:"taxno",cLabel:"Tax Reg. No",cLabelSize:4,cOrder:9,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_taxreferenceno:{cValidate:"",cName:"taxreferenceno",cLabel:"Tax Reference No",cLabelSize:4,cOrder:10,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_taxregistrationdate:{cValidate:"required",cName:"taxregistrationdate",cLabel:"Tax Reg. Date",cLabelSize:4,cOrder:11,cKey:!0,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_status:{cValidate:"",cName:"status",cId:"rdbstatus",cRadioOptions:[{text:"Approve",value:"A"},{text:"Cancel",value:"X"}],cRadioDefaultOption:"A",cLabel:"Approval Status",cLabelSize:4,cOrder:12,cProtect:!1,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_reasoncd:{dataLookUp:{LookUpCd:"GetLookupCMReason",ColumnDB:"ReasonCd",InitialWhere:"",ParamWhere:""},cValidate:"",cName:"reasoncd",cLabel:"Reason Code",cKey:!1,cLabelSize:4,cOrder:13,cTriggered:!1,cDefault:"",cProtect:!0,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"CM/CM_Reason",cDisplayColumn:"ReasonCd,Descs"},PI_reasondescs:{cValidate:"",cName:"reasondescs",cLabel:"Reason Description",cLabelSize:4,cOrder:14,cKey:!1,cType:"text",cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_remarks:{cValidate:"",cName:"remarks",cLabel:"Remarks",cLabelSize:4,cOrder:15,cKey:!1,cDefault:"",cProtect:!0,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage1Data}},methods:{OncontactclasscdChange:function(t){var e=this;this.$nextTick(function(){e.M_CM_ContactApproval.contactclasscd=t.id,e.M_CM_ContactApproval.contactclasscdLabel=t.label,e.inputStatus}),this.$forceUpdate()},OnclassificationidChange:function(t){var e=this;this.$nextTick(function(){"VIEW"!=e.inputStatus&&("C"==t&&(e.M_CM_ContactApproval.classificationcentralid="Y",e.M_CM_ContactApproval.classificationlocalid="N",e.M_CM_ContactApproval.classificationgroupid="N",e.$refs.ref_parentid.prop.dataLookUp.InitialWhere=" Classification = 'Group' ",e.$refs.ref_parentid.prop.dataLookUp.LookUpCd="GetLookupClassificationID",e.PI_parentid.cProtect=!1,e.PI_taxno.cProtect=!1,e.$refs.ref_taxno.isRequired=!0,e.PI_taxno.cValidate="required",e.PI_taxregistrationdate.cValidate="required",e.$refs.ref_taxregdate.isRequired=!0,e.M_CM_ContactApproval.taxcollectable="Y"),"L"==t&&(e.M_CM_ContactApproval.classificationcentralid="N",e.M_CM_ContactApproval.classificationlocalid="Y",e.M_CM_ContactApproval.classificationgroupid="N",e.$refs.ref_parentid.prop.dataLookUp.InitialWhere=" Classification = 'Central' ",e.$refs.ref_parentid.prop.dataLookUp.LookUpCd="GetLookupClassificationID",e.PI_parentid.cProtect=!1,e.PI_taxno.cProtect=!1,e.$refs.ref_taxno.isRequired=!0,e.PI_taxno.cValidate="required",e.PI_taxregistrationdate.cValidate="required",e.$refs.ref_taxregdate.isRequired=!0,e.M_CM_ContactApproval.taxcollectable="Y"),"G"==t&&(e.M_CM_ContactApproval.classificationcentralid="N",e.M_CM_ContactApproval.classificationlocalid="N",e.M_CM_ContactApproval.classificationgroupid="Y",e.$refs.ref_parentid.prop.dataLookUp.InitialWhere="",e.$refs.ref_parentid.prop.dataLookUp.LookUpCd="GetLookupCMContact",e.PI_parentid.cProtect=!0,e.PI_taxno.cProtect=!0,e.$refs.ref_taxno.isRequired=!1,e.PI_taxno.cValidate="",e.PI_taxregistrationdate.cValidate="",e.$refs.ref_taxregdate.isRequired=!1,e.M_CM_ContactApproval.taxcollectable="N"))}),this.$forceUpdate()},OnparentidChange:function(t){var e=this;this.$nextTick(function(){e.M_CM_ContactApproval.parentid=t.id,e.M_CM_ContactApproval.parentidLabel=t.label,e.inputStatus}),this.$forceUpdate()},OncategoryChange:function(t){var e=this;this.$nextTick(function(){e.inputStatus}),this.$forceUpdate()},OngovernmentChange:function(t){var e=this;this.$nextTick(function(){e.inputStatus}),this.$forceUpdate()},OntaxcollectableChange:function(t){var e=this;this.$nextTick(function(){e.inputStatus}),this.$forceUpdate()},OntaxregistrationdateChange:function(t){var e=this;this.$nextTick(function(){e.inputStatus}),this.$forceUpdate()},OnstatusChange:function(t){var e=this;this.$nextTick(function(){"VIEW"!=e.inputStatus&&("X"==t?(e.PI_reasoncd.cProtect=!1,e.PI_reasondescs.cProtect=!1,e.PI_reasoncd.cValidate="required",e.PI_reasondescs.cValidate="required"):(e.PI_reasoncd.cProtect=!0,e.PI_reasondescs.cProtect=!0,e.PI_reasoncd.cValidate="",e.PI_reasondescs.cValidate="",e.M_CM_ContactApproval.reasoncd="",e.M_CM_ContactApproval.reasoncdLabel="",e.M_CM_ContactApproval.reasondescs=""))}),this.$forceUpdate()},OnreasoncdChange:function(t){var e=this;this.$nextTick(function(){e.M_CM_ContactApproval.reasoncd=t.id,e.M_CM_ContactApproval.reasoncdLabel=t.label,e.M_CM_ContactApproval.reasondescs=t.Descs,e.inputStatus}),this.$forceUpdate()},OnremarksChange:function(t){var e=this;this.$nextTick(function(){e.inputStatus}),this.$forceUpdate()},setToolbarButton:function(){this.getToolbar().statusFunction[0].disabled=!0,this.getToolbar().statusFunction[2].disabled=!0},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(t){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(t,e){},rowLink:function(t){this.$refs.modalTest.show()},paramFromParent:function(){},M_Post:function(){},M_Insert:function(){var t=this,e={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder};this.postJSON(this.getUrlInsert(),e).then(function(e){null!=e&&t.$parent.resultInsert(e.Message)})},M_Update:function(){var t=this,e={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SequenceRegistrationNo:this.M_CM_ContactApproval.sequenceregistrationno,SubPortfolioCd:this.getDataUser().SubPortfolioCd,ContactClassCd:""==this.M_CM_ContactApproval.contactclasscd||null==this.M_CM_ContactApproval.contactclasscd?"NULL":this.M_CM_ContactApproval.contactclasscd,Category:this.M_CM_ContactApproval.category,ParentId:""==this.M_CM_ContactApproval.parentid||null==this.M_CM_ContactApproval.parentid?"NULL":this.M_CM_ContactApproval.parentid,Government:this.M_CM_ContactApproval.government,TaxCollectable:this.M_CM_ContactApproval.taxcollectable,TaxRegistrationDate:""==this.M_CM_ContactApproval.taxregistrationdate||null==this.M_CM_ContactApproval.taxregistrationdate?"NULL":this.M_CM_ContactApproval.taxregistrationdate,Name:this.M_CM_ContactApproval.name,Website:this.M_CM_ContactApproval.website,TaxNo:this.M_CM_ContactApproval.taxno,TaxReferenceNo:this.M_CM_ContactApproval.taxreferenceno,Remarks:this.M_CM_ContactApproval.remarks,ClassificationLocalID:this.M_CM_ContactApproval.classificationlocalid,ClassificationCentralID:this.M_CM_ContactApproval.classificationcentralid,ClassificationGroupID:this.M_CM_ContactApproval.classificationgroupid,Status:void 0==this.M_CM_ContactApproval.status||null==this.M_CM_ContactApproval.status?"NULL":this.M_CM_ContactApproval.status,ReasonCd:""==this.M_CM_ContactApproval.reasoncd||null==this.M_CM_ContactApproval.reasoncd?"NULL":this.M_CM_ContactApproval.reasoncd,ReasonDescs:this.M_CM_ContactApproval.reasondescs,UserEdit:this.getDataUser().UserId,LastUpdateStamp:this.M_CM_ContactApproval.lastupdatestamp};this.postJSON(this.getUrlUpdate(),e).then(function(e){null!=e&&t.$parent.resultUpdate(e.Message)})},M_ClearForm:function(){this.M_CM_ContactApproval={contactid:"",contactclasscd:"",parentid:"",category:"P",government:"N",reasoncd:"",reasondescs:"",name:"",website:"",taxno:"",taxreferenceno:"",taxregistrationdate:"",taxcollectable:"Y",remarks:"",userinput:"",useredit:this.getDataUser().UserId,classdescs:"",parentname:"",classificationlocalid:"",classificationcentralid:"",classificationgroupid:"",sequenceregistrationno:0,lastupdatestamp:0,rowid:0,insurancestatus:"",financierstatus:"",status:"A",classificationid:""}},M_New:function(){this.$refs.ref_contactclasscd.focus()},M_Edit:function(){this.$refs.ref_contactclasscd.focus()},M_Delete:function(t){var e=this,a=this.FormToABSList().getRowSelected(),o=[];a.forEach(function(t){o.push({_Message_:""})});var c={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:o};this.postJSONMulti(this.getUrlNewDeleteMulti(),c).then(function(t){null!=t&&e.$parent.resultDelete()})},getDataBy:function(t){var e=this,a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,sequenceregistrationno:t.SequenceRegistrationNo};this.postEncode(this.getUrlById(),a).then(function(a){if(null!=a){var o=a.Data[0];e.M_CM_ContactApproval={contactid:o.contactid,status:o.status,contactclasscd:o.contactclasscd,parentid:o.parentid,category:o.category,government:o.government,reasoncd:o.reasoncd,reasondescs:o.reasondescs,name:o.name,website:o.website,taxno:o.taxno,taxreferenceno:o.taxreferenceno,taxregistrationdate:o.taxregistrationdate,taxcollectable:o.taxcollectable,remarks:o.remarks,userinput:o.userinput,useredit:o.useredit,classdescs:o.classdescs,parentname:o.parentname,classificationlocalid:o.classificationlocalid,classificationcentralid:o.classificationcentralid,classificationgroupid:o.classificationgroupid,sequenceregistrationno:t.SequenceRegistrationNo,lastupdatestamp:t.LastUpdateStamp,rowid:o.rowid,insurancestatus:o.insurancestatus,financierstatus:o.financierstatus,classificationid:o.classificationid},"Y"==o.classificationlocalid&&(e.M_CM_ContactApproval.classificationid="L",e.M_CM_ContactApproval.taxcollectable="Y"),"Y"==o.classificationcentralid&&(e.M_CM_ContactApproval.classificationid="C",e.M_CM_ContactApproval.taxcollectable="Y"),"Y"==o.classificationgroupid&&(e.M_CM_ContactApproval.classificationid="G",e.M_CM_ContactApproval.taxcollectable="N"),e.M_CM_ContactApproval.contactclasscdLabel=null!=e.M_CM_ContactApproval.contactclasscd?o.contactclasscd+e.separator+o.classdescs:"",e.M_CM_ContactApproval.parentidLabel=null!=e.M_CM_ContactApproval.parentid?o.parentid+e.separator+o.parentname:"",e.M_CM_ContactApproval.reasoncdLabel=null!=e.M_CM_ContactApproval.reasoncd?o.reasoncd+e.separator+o.reasondescs:"","X"==o.status?(e.PI_reasoncd.cProtect=!1,e.PI_reasondescs.cProtect=!1,e.PI_reasoncd.cValidate="required",e.PI_reasondescs.cValidate="required"):(e.PI_reasoncd.cProtect=!0,e.PI_reasondescs.cProtect=!0,e.PI_reasoncd.cValidate="",e.PI_reasondescs.cValidate="",e.M_CM_ContactApproval.reasoncd="",e.M_CM_ContactApproval.reasoncdLabel="",e.M_CM_ContactApproval.reasondescs=""),e.IEBy.Input=o.userinput,e.IEBy.Edit=o.useredit}})}},beforeCreate:function(){},created:function(){this.$store.commit("setFormType","List"),this.getToolbar().ProcessPS()},beforeMount:function(){},mounted:function(){this.hideSideBarMenu(),this.FormToABSList().doGetList("","eb_getList")},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),i=n,r=a("2877"),s=Object(r["a"])(i,o,c,!1,null,null,null);s.options.__file="CM_ContactApproval.vue";e["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2d224cd0.8b5cd27d.js.map