(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d7fc9"],{"78c5":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[a("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),a("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),a("b-collapse",{attrs:{id:"collapse1",visible:!0}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[a("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{attrs:{md:"12",id:"col-left"}},[a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_taxcodefrom",attrs:{prop:e.PI_taxcodefrom,value:e.M_TN_TransferContractChangeTaxCode.taxcodefrom,label:e.M_TN_TransferContractChangeTaxCode.taxcodefromLabel},on:{change:e.OntaxcodefromChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_taxcodeto",attrs:{prop:e.PI_taxcodeto,value:e.M_TN_TransferContractChangeTaxCode.taxcodeto,label:e.M_TN_TransferContractChangeTaxCode.taxcodetoLabel},on:{change:e.OntaxcodetoChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputRadioButtonVuex",{ref:"ref_type",attrs:{prop:e.PI_type},on:{input:e.OntypeChange},model:{value:e.M_TN_TransferContractChangeTaxCode.type,callback:function(t){e.$set(e.M_TN_TransferContractChangeTaxCode,"type",t)},expression:"M_TN_TransferContractChangeTaxCode.type"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputDateVuex",{ref:"ref_datefrom",attrs:{prop:e.PI_datefrom},on:{input:e.OndatefromChange},model:{value:e.M_TN_TransferContractChangeTaxCode.datefrom,callback:function(t){e.$set(e.M_TN_TransferContractChangeTaxCode,"datefrom",t)},expression:"M_TN_TransferContractChangeTaxCode.datefrom"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputDateVuex",{ref:"ref_dateto",attrs:{prop:e.PI_dateto},on:{input:e.OndatetoChange},model:{value:e.M_TN_TransferContractChangeTaxCode.dateto,callback:function(t){e.$set(e.M_TN_TransferContractChangeTaxCode,"dateto",t)},expression:"M_TN_TransferContractChangeTaxCode.dateto"}})],1)],1)],1)],1),a("ABSTAnalysis",{attrs:{prop:e.PTAnalysis}})],1)],1)],1)],1)],1)])},n=[],r={props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{cInsertKey:"",FormType:"Form",Module:"TN",IEBy:{Input:"",Edit:""},M_TN_TransferContractChangeTaxCode:{taxcodefrom:"",taxcodeto:"",type:"T",datefrom:"",dateto:""},PI_taxcodefrom:{dataLookUp:{LookUpCd:"GetLookupCMTaxCode",ColumnDB:"TaxCd",InitialWhere:"",ParamWhere:""},cValidate:"",cName:"taxcodefrom",cLabel:"Tax Code From",cKey:!1,cLabelSize:4,cOrder:0,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"TaxCd, Descs"},PI_taxcodeto:{dataLookUp:{LookUpCd:"GetLookupCMTaxCode",ColumnDB:"TaxCd",InitialWhere:"",ParamWhere:""},cValidate:"",cName:"taxcodeto",cLabel:"Tax Code To",cKey:!1,cLabelSize:4,cOrder:0,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"TaxCd, Descs"},PI_type:{cValidate:"",cName:"type",cId:"rdbtype",cRadioOptions:[{text:"Transaction Type Subportfolio",value:"T"},{text:"Contract Billing Schedule",value:"C"},{text:"Amortization Schedule",value:"A"}],cRadioDefaultOption:"",cLabel:"Transaction Type ",cLabelSize:4,cOrder:0,cProtect:!1,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_datefrom:{cValidate:"",cName:"datefrom",cLabel:"- Date From",cLabelSize:4,cOrder:0,cKey:!1,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_dateto:{cValidate:"",cName:"dateto",cLabel:"- Date To",cLabelSize:4,cOrder:0,cKey:!1,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"}},methods:{OntaxcodefromChange:function(e){var t=this;this.$nextTick(function(){t.M_TN_TransferContractChangeTaxCode.taxcodefrom=e.id,t.M_TN_TransferContractChangeTaxCode.taxcodefromLabel=e.label,t.inputStatus}),this.$forceUpdate()},OntaxcodetoChange:function(e){var t=this;this.$nextTick(function(){t.M_TN_TransferContractChangeTaxCode.taxcodeto=e.id,t.M_TN_TransferContractChangeTaxCode.taxcodetoLabel=e.label,t.inputStatus}),this.$forceUpdate()},OntypeChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},OndatefromChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},OndatetoChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},setToolbarButton:function(){},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,t){},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){},M_Post:function(e){},M_Insert:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder};this.postJSON(this.getUrlInsert(),t).then(function(t){null!=t&&e.alertSuccess(t.Message).then(function(){e.getToolbar().FormStatus="EDIT",e.getToolbar().ProcessPS(),e.$store.commit("setStatus","view"),e.$store.commit("setEventStatus","Save"),e.FormToMasterPage().ValidasiPage()})})},M_Update:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,TaxCodeFrom:""==this.M_TN_TransferContractChangeTaxCode.taxcodefrom||null==this.M_TN_TransferContractChangeTaxCode.taxcodefrom?"NULL":this.M_TN_TransferContractChangeTaxCode.taxcodefrom,TaxCodeTo:""==this.M_TN_TransferContractChangeTaxCode.taxcodeto||null==this.M_TN_TransferContractChangeTaxCode.taxcodeto?"NULL":this.M_TN_TransferContractChangeTaxCode.taxcodeto,Type:this.M_TN_TransferContractChangeTaxCode.type,DateFrom:""==this.M_TN_TransferContractChangeTaxCode.datefrom||null==this.M_TN_TransferContractChangeTaxCode.datefrom?"NULL":this.M_TN_TransferContractChangeTaxCode.datefrom,DateTo:""==this.M_TN_TransferContractChangeTaxCode.dateto||null==this.M_TN_TransferContractChangeTaxCode.dateto?"NULL":this.M_TN_TransferContractChangeTaxCode.dateto};this.postJSON(this.getUrlUpdate(),t).then(function(t){null!=t&&e.alertSuccess(t.Message).then(function(){e.M_ClearForm(),e.$store.commit("setStatus","view"),e.getToolbar().doEdit(),e.FormToMasterPage().ValidasiPage()})})},M_ClearForm:function(){var e=this;this.$nextTick(function(){e.M_TN_TransferContractChangeTaxCode={taxcodefrom:"",taxcodeto:"",type:"T",datefrom:"",dateto:""}}),this.$forceUpdate()},M_New:function(){},M_Edit:function(){},M_Delete:function(e){var t=this,a={OptionSeq:this.getOptionSeq().OptionSeq,SubPortfolioCd:this.getDataUser().SubPortfolioCd,PortfolioCd:this.getDataUser().PortfolioCd,LineNo:this.$parent.data.PageOrder,Data:e};this.postJSONMulti(this.getUrlDeleteMulti(),a).then(function(e){if(null!=e){var a="Deleting Data Successfully";t.$parent.resultDelete(a)}})},getDataBy:function(e){var t=this,a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder};this.postEncode(this.getUrlById(),a).then(function(e){if(null!=e){var a=e.Data[0];t.M_TN_TransferContractChangeTaxCode={taxcodefrom:a.taxcodefrom,taxcodeto:a.taxcodeto,type:a.type,datefrom:a.datefrom,dateto:a.dateto},t.M_TN_TransferContractChangeTaxCode.taxcodefromLabel=null!=t.M_TN_TransferContractChangeTaxCode.taxcodefrom&&""!=t.M_TN_TransferContractChangeTaxCode.taxcodefrom?a.taxcodefrom+t.separator:"",t.M_TN_TransferContractChangeTaxCode.taxcodetoLabel=null!=t.M_TN_TransferContractChangeTaxCode.taxcodeto&&""!=t.M_TN_TransferContractChangeTaxCode.taxcodeto?a.taxcodeto+t.separator:"",t.IEBy.Input=a.UserInput,t.IEBy.Edit=a.UserEdit}})}},beforeCreate:function(){},created:function(){this.$store.commit("setFormType","Form")},beforeMount:function(){},mounted:function(){this.getToolbar().doEdit(!0),this.hideSideBarMenu()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},c=r,i=a("2877"),s=Object(i["a"])(c,o,n,!1,null,null,null);s.options.__file="TN_TransferContractChangeTaxCode.vue";t["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2d0d7fc9.2d505c60.js.map