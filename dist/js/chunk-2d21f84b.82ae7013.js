(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21f84b"],{d9bb:function(e,t,a){"use strict";a.r(t);var c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ABSListVuex",{attrs:{prop:e.propList,title:e.data.QueryName},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table,refreshColumn:e.$parent.refreshColumn}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[a("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                    Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),a("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),a("b-collapse",{attrs:{id:"collapse1",visible:!0}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[a("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[a("b-row",{staticStyle:{"padding-left":"10px"}},[a("b-col",{attrs:{md:"12",id:"col-left"}},[a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_taxinvoicetype",attrs:{prop:e.PI_taxinvoicetype},model:{value:e.M_AR_CancelTaxInv.taxinvoicetype,callback:function(t){e.$set(e.M_AR_CancelTaxInv,"taxinvoicetype",t)},expression:"M_AR_CancelTaxInv.taxinvoicetype"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_debtor",attrs:{prop:e.PI_debtor},model:{value:e.M_AR_CancelTaxInv.debtor,callback:function(t){e.$set(e.M_AR_CancelTaxInv,"debtor",t)},expression:"M_AR_CancelTaxInv.debtor"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_docno",attrs:{prop:e.PI_docno},model:{value:e.M_AR_CancelTaxInv.docno,callback:function(t){e.$set(e.M_AR_CancelTaxInv,"docno",t)},expression:"M_AR_CancelTaxInv.docno"}})],1),a("b-col",{attrs:{md:"6"}},[a("ABSinputDateVuex",{ref:"ref_docdate",attrs:{prop:e.PI_docdate},model:{value:e.M_AR_CancelTaxInv.docdate,callback:function(t){e.$set(e.M_AR_CancelTaxInv,"docdate",t)},expression:"M_AR_CancelTaxInv.docdate"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_descs",attrs:{prop:e.PI_descs},model:{value:e.M_AR_CancelTaxInv.descs,callback:function(t){e.$set(e.M_AR_CancelTaxInv,"descs",t)},expression:"M_AR_CancelTaxInv.descs"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_currency",attrs:{prop:e.PI_currency},model:{value:e.M_AR_CancelTaxInv.currency,callback:function(t){e.$set(e.M_AR_CancelTaxInv,"currency",t)},expression:"M_AR_CancelTaxInv.currency"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_whtamt",attrs:{prop:e.PI_whtamt},model:{value:e.M_AR_CancelTaxInv.whtamt,callback:function(t){e.$set(e.M_AR_CancelTaxInv,"whtamt",t)},expression:"M_AR_CancelTaxInv.whtamt"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_vatamt",attrs:{prop:e.PI_vatamt},model:{value:e.M_AR_CancelTaxInv.vatamt,callback:function(t){e.$set(e.M_AR_CancelTaxInv,"vatamt",t)},expression:"M_AR_CancelTaxInv.vatamt"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputRadioButtonVuex",{ref:"ref_cancel",attrs:{prop:e.PI_cancel},on:{input:e.OncancelChange},model:{value:e.M_AR_CancelTaxInv.cancel,callback:function(t){e.$set(e.M_AR_CancelTaxInv,"cancel",t)},expression:"M_AR_CancelTaxInv.cancel"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_reasoncd",attrs:{prop:e.PI_reasoncd,value:e.M_AR_CancelTaxInv.reasoncd,label:e.M_AR_CancelTaxInv.reasoncdLabel},on:{change:e.OnreasoncdChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_reasondescs",attrs:{prop:e.PI_reasondescs},model:{value:e.M_AR_CancelTaxInv.reasondescs,callback:function(t){e.$set(e.M_AR_CancelTaxInv,"reasondescs",t)},expression:"M_AR_CancelTaxInv.reasondescs"}})],1)],1)],1)],1),a("ABSTAnalysis",{attrs:{prop:e.PTAnalysis}})],1)],1)],1)],1)],1)],1)},n=[],o=(a("6b54"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{cInsertKey:"",FormType:"List",Module:"AR",propList:{initialWhere:" SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' ",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_AR_CancelTaxInv:{taxinvoicetype:"",debtor:"",docno:"",descs:"",docdate:"",currency:"",docamt:"",taxamt:"",cancel:"",reasoncd:"",reasoncdLabel:"",reasondescs:"",lastupdatestamp:""},PI_taxinvoicetype:{cValidate:"",cName:"taxinvoicetype",cLabel:"Tax Invoice Type",cLabelSize:4,cOrder:0,cKey:!1,cType:"text",cDecimal:2,cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_debtor:{cValidate:"",cName:"debtor",cLabel:"Debtor",cLabelSize:4,cOrder:0,cKey:!1,cType:"text",cDecimal:2,cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_docno:{cValidate:"",cName:"docno",cLabel:"Doc. No",cLabelSize:4,cOrder:0,cKey:!1,cType:"text",cDecimal:2,cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_docdate:{cValidate:"",cName:"docdate",cLabel:"Doc. Date",cLabelSize:4,cOrder:0,cKey:!1,cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_descs:{cValidate:"",cName:"descs",cLabel:"Description",cLabelSize:4,cOrder:0,cKey:!1,cType:"text",cDecimal:2,cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_currency:{cValidate:"",cName:"currency",cLabel:"Currency",cLabelSize:4,cOrder:0,cKey:!1,cType:"text",cDecimal:2,cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_whtamt:{cValidate:"",cName:"whtamt",cLabel:"Withholding Amount",cLabelSize:4,cOrder:0,cKey:!1,cType:"decimal",cDecimal:2,cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_vatamt:{cValidate:"",cName:"vatamt",cLabel:"VAT Amount",cLabelSize:4,cOrder:0,cKey:!1,cType:"decimal",cDecimal:2,cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_cancel:{cValidate:"",cName:"cancel",cId:"rdbcancel",cRadioOptions:[{text:"Yes",value:"Y"},{text:"No",value:"N"}],cRadioDefaultOption:"",cLabel:"Cancel",cLabelSize:4,cOrder:0,cProtect:!1,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_reasoncd:{dataLookUp:{LookUpCd:"GetLookupCMReason",ColumnDB:"ReasonCd",InitialWhere:" (ModuleCd='AR' OR ModuleCd is null) ",ParamWhere:""},cValidate:"",cName:"reasoncd",cLabel:"Reason",cKey:!1,cLabelSize:4,cOrder:3,cTriggered:!1,cDefault:"",cProtect:!0,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"CM/CM_Reason",cDisplayColumn:"ReasonCd,Descs"},PI_reasondescs:{cValidate:"",cName:"reasondescs",cLabel:"Reason Description",cLabelSize:4,cOrder:4,cKey:!1,cType:"text",cDecimal:2,cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage1Data}},methods:{setToolbarButton:function(){this.getToolbar().statusFunction[0].disabled=!0},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},OncancelChange:function(e){var t=this;this.$nextTick(function(){"Y"==e?(t.PI_reasoncd.cProtect=!1,t.PI_reasondescs.cProtect=!1):(t.PI_reasoncd.cProtect=!0,t.PI_reasondescs.cProtect=!0)}),this.$forceUpdate()},OnreasoncdChange:function(e){var t=this;this.$nextTick(function(){console.log(e),t.M_AR_CancelTaxInv.reasoncd=e.id,t.M_AR_CancelTaxInv.reasoncdLabel=e.label,t.M_AR_CancelTaxInv.reasondescs=e.Descs}),this.$forceUpdate()},doDoubleClick:function(){},rowClicked:function(e,t){},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){},M_Post:function(e){},M_Insert:function(){},M_Update:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubportfolioCd:this.getDataUser().SubPortfolioCd,DebitNo:this.M_AR_CancelTaxInv.docno,Status:"Y"==this.M_AR_CancelTaxInv.cancel?"X":"Y",ReasonCd:this.M_AR_CancelTaxInv.reasoncd,ReasonDescs:this.M_AR_CancelTaxInv.reasondescs,UserEdit:this.getDataUser().UserId,LastUpdateStamp:this.M_AR_CancelTaxInv.lastupdatestamp};this.postJSON(this.getUrlUpdate(),t).then(function(t){null!=t&&e.$parent.resultUpdate(t.Message)})},M_ClearForm:function(){this.M_AR_CancelTaxInv={taxinvoicetype:"",taxinvoiceno:"",taxinvoicedate:"",debtor:"",docno:"",docdate:"",currency:"",docamt:"",taxamt:"",cancel:"",creditdate:"",reasoncd:"",reasoncdLabel:"",reasondescs:"",lastupdatestamp:""}},M_New:function(){},M_Edit:function(){},M_Delete:function(e){},getDataBy:function(e){var t=this,a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubportfolioCd:this.getDataUser().SubPortfolioCd,DebitNo:e.DebitNo};this.postEncode(this.getUrlById(),a).then(function(a){if(null!=a){var c=a.Data[0],n="";c.taxstatus&&""!=c.taxstatus&&("0"==c.taxstatus.toString()?n="No Tax":"1"==c.taxstatus.toString()?n="VAT":"2"==c.taxstatus.toString()?n="VAT & Withholding":"3"==c.taxstatus.toString()&&(n="Withholding")),t.M_AR_CancelTaxInv={taxinvoicetype:n,debtor:c.debtorcd&&""!=c.debtorcd?c.debtorcd+t.separator+c.debtorname:"",docno:c.debitno,descs:c.descs,docdate:c.debitdate,currency:c.currencycd,whtamt:t.isCurrency(c.withholdingamt,t.decimal),vatamt:t.isCurrency(c.vatamt,t.decimal),cancel:"N",reasoncd:"",reasoncdLabel:"",reasondescs:"",lastupdatestamp:e.LastUpdateStamp},t.IEBy.Input=c.userinput,t.IEBy.Edit=c.useredit}})}},beforeCreate:function(){},created:function(){this.$store.commit("setFormType","List"),this.getToolbar().ProcessPS()},beforeMount:function(){},mounted:function(){this.hideSideBarMenu(),this.FormToABSList().doGetList("","eb_getList")},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),s=o,i=a("2877"),r=Object(i["a"])(s,c,n,!1,null,null,null);r.options.__file="AR_CancelTaxInv.vue";t["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d21f84b.82ae7013.js.map