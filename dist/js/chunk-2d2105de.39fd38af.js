(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2105de"],{b81c:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ABSListVuex",{attrs:{prop:e.propList,title:e.data.QueryName},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table,refreshColumn:e.$parent.refreshColumn}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[a("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                    Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),a("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),a("b-collapse",{attrs:{id:"collapse1",visible:!0}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[a("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[a("b-row",{staticStyle:{"padding-left":"10px"}},[a("b-col",{attrs:{md:"12",id:"col-left"}},[a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_taxstatus",attrs:{prop:e.PI_taxstatus},model:{value:e.M_AR_CancelTaxBatchMaster.taxstatus,callback:function(t){e.$set(e.M_AR_CancelTaxBatchMaster,"taxstatus",t)},expression:"M_AR_CancelTaxBatchMaster.taxstatus"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_debtorcd",attrs:{prop:e.PI_debtorcd},model:{value:e.M_AR_CancelTaxBatchMaster.debtorcd,callback:function(t){e.$set(e.M_AR_CancelTaxBatchMaster,"debtorcd",t)},expression:"M_AR_CancelTaxBatchMaster.debtorcd"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_debitno",attrs:{prop:e.PI_debitno},model:{value:e.M_AR_CancelTaxBatchMaster.debitno,callback:function(t){e.$set(e.M_AR_CancelTaxBatchMaster,"debitno",t)},expression:"M_AR_CancelTaxBatchMaster.debitno"}})],1),a("b-col",{attrs:{md:"6"}},[a("ABSinputDateVuex",{ref:"ref_debitdate",attrs:{prop:e.PI_debitdate},model:{value:e.M_AR_CancelTaxBatchMaster.debitdate,callback:function(t){e.$set(e.M_AR_CancelTaxBatchMaster,"debitdate",t)},expression:"M_AR_CancelTaxBatchMaster.debitdate"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_descs",attrs:{prop:e.PI_descs},model:{value:e.M_AR_CancelTaxBatchMaster.descs,callback:function(t){e.$set(e.M_AR_CancelTaxBatchMaster,"descs",t)},expression:"M_AR_CancelTaxBatchMaster.descs"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_currencycd",attrs:{prop:e.PI_currencycd},model:{value:e.M_AR_CancelTaxBatchMaster.currencycd,callback:function(t){e.$set(e.M_AR_CancelTaxBatchMaster,"currencycd",t)},expression:"M_AR_CancelTaxBatchMaster.currencycd"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_withholdingamt",attrs:{prop:e.PI_withholdingamt},model:{value:e.M_AR_CancelTaxBatchMaster.withholdingamt,callback:function(t){e.$set(e.M_AR_CancelTaxBatchMaster,"withholdingamt",t)},expression:"M_AR_CancelTaxBatchMaster.withholdingamt"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_vatamt",attrs:{prop:e.PI_vatamt},model:{value:e.M_AR_CancelTaxBatchMaster.vatamt,callback:function(t){e.$set(e.M_AR_CancelTaxBatchMaster,"vatamt",t)},expression:"M_AR_CancelTaxBatchMaster.vatamt"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputRadioButtonVuex",{ref:"ref_status",attrs:{prop:e.PI_status},on:{input:e.OnstatusChange},model:{value:e.M_AR_CancelTaxBatchMaster.status,callback:function(t){e.$set(e.M_AR_CancelTaxBatchMaster,"status",t)},expression:"M_AR_CancelTaxBatchMaster.status"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_reasoncd",attrs:{prop:e.PI_reasoncd,value:e.M_AR_CancelTaxBatchMaster.reasoncd,label:e.M_AR_CancelTaxBatchMaster.reasoncdLabel},on:{change:e.OnreasoncdChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_reasondescs",attrs:{prop:e.PI_reasondescs},model:{value:e.M_AR_CancelTaxBatchMaster.reasondescs,callback:function(t){e.$set(e.M_AR_CancelTaxBatchMaster,"reasondescs",t)},expression:"M_AR_CancelTaxBatchMaster.reasondescs"}})],1)],1)],1)],1),a("ABSTAnalysis",{attrs:{prop:e.PTAnalysis}})],1)],1)],1)],1)],1)],1)},c=[],r=(a("6b54"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{cInsertKey:"",FormType:"List",Module:"AR",propList:{initialWhere:"SubportfolioCd='"+this.getDataUser().SubPortfolioCd+"'",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_AR_CancelTaxBatchMaster:{subportfoliocd:this.getDataUser().SubPortfolioCd,debtorcd:"",debitno:"",debitdate:"",withholdingamt:"",vatamt:"",taxstatus:"",useredit:this.getDataUser().UserId,userinput:"",currencycd:0,reasoncd:"",reasondescs:"",debtorname:"",status:"N",descs:"",contactid:"",timeedit:"",lastupdatestamp:0,rowid:0},PI_taxstatus:{cValidate:"",cName:"taxstatus",cLabel:"Tax Type",cLabelSize:4,cOrder:1,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_debtorcd:{cValidate:"",cName:"debtorcd",cLabel:"Debtor ",cLabelSize:4,cOrder:2,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_debitno:{cValidate:"",cName:"debitno",cLabel:"Doc. No",cLabelSize:4,cOrder:3,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_debitdate:{cValidate:"",cName:"debitdate",cLabel:"Doc. Date",cLabelSize:4,cOrder:4,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_descs:{cValidate:"",cName:"descs",cLabel:"Description",cLabelSize:4,cOrder:5,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_currencycd:{cValidate:"",cName:"currencycd",cLabel:"Currency",cLabelSize:4,cOrder:6,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_withholdingamt:{cValidate:"",cName:"withholdingamt",cLabel:"Withholding Amount",cLabelSize:4,cOrder:7,cKey:!0,cType:"decimal",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_vatamt:{cValidate:"",cName:"vatamt",cLabel:"VAT Amount",cLabelSize:4,cOrder:8,cKey:!0,cType:"decimal",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_status:{cValidate:"",cName:"status",cId:"rdbstatus",cRadioOptions:[{text:"Yes",value:"X"},{text:"No",value:"N"}],cRadioDefaultOption:"",cLabel:"Cancel",cLabelSize:4,cOrder:9,cProtect:!1,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_reasoncd:{dataLookUp:{LookUpCd:"GetLookupCMReason",ColumnDB:"ReasonCd",InitialWhere:"ModuleCd='AR' OR ModuleCd is null",ParamWhere:""},cValidate:"",cName:"reasoncd",cLabel:"Reason",cKey:!1,cLabelSize:4,cOrder:10,cTriggered:!1,cDefault:"",cProtect:!0,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cMasterUrl:"",cDisplayColumn:"ReasonCd,Descs"},PI_reasondescs:{cValidate:"max:60",cName:"reasondescs",cLabel:"Reason Description",cLabelSize:4,cOrder:11,cKey:!1,cType:"text",cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage1Data}},methods:{OnstatusChange:function(e){var t=this;this.M_AR_CancelTaxBatchMaster.status=e,this.$nextTick(function(){"VIEW"!=t.inputStatus&&("X"==e?(t.PI_reasoncd.cProtect=!1,t.PI_reasondescs.cProtect=!1):(t.PI_reasoncd.cProtect=!0,t.PI_reasondescs.cProtect=!0,t.M_AR_CancelTaxBatchMaster.reasoncd="",t.M_AR_CancelTaxBatchMaster.reasoncdLabel="",t.M_AR_CancelTaxBatchMaster.reasondescs=""))}),this.$forceUpdate()},OnreasoncdChange:function(e){var t=this;this.$nextTick(function(){t.M_AR_CancelTaxBatchMaster.reasoncd=e.id,t.M_AR_CancelTaxBatchMaster.reasoncdLabel=e.label,t.M_AR_CancelTaxBatchMaster.reasondescs=e.Descs,t.inputStatus}),this.$forceUpdate()},setToolbarButton:function(){this.getToolbar().statusFunction[0].disabled=!0,this.getToolbar().statusFunction[2].disabled=!0},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,t){this.M_AR_CancelTaxBatchMaster.lastupdatestamp=e.LastUpdateStamp},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){},M_Post:function(e){},M_Insert:function(){},M_Update:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,DebitNo:this.M_AR_CancelTaxBatchMaster.debitno,Status:this.M_AR_CancelTaxBatchMaster.status,ReasonCd:""==this.M_AR_CancelTaxBatchMaster.reasoncd||null==this.M_AR_CancelTaxBatchMaster.reasoncd?"NULL":this.M_AR_CancelTaxBatchMaster.reasoncd,ReasonDescs:this.M_AR_CancelTaxBatchMaster.reasondescs,UserEdit:this.getDataUser().UserId,LastUpdateStamp:this.M_AR_CancelTaxBatchMaster.lastupdatestamp};this.postJSON(this.getUrlUpdate(),t).then(function(t){null!=t&&e.$parent.resultUpdate(t.Message)})},M_ClearForm:function(){this.M_AR_CancelTaxBatchMaster={subportfoliocd:"",debtorcd:"",debitno:"",debitdate:"",withholdingamt:"",vatamt:"",taxstatus:"",useredit:this.getDataUser().UserId,userinput:"",currencycd:0,reasoncd:"",reasondescs:"",debtorname:"",status:"N",descs:"",contactid:"",timeedit:"",lastupdatestamp:0,rowid:0}},M_New:function(){},M_Edit:function(){},M_Delete:function(e){},getDataBy:function(e){var t=this;console.log(e);var a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,DebitNo:e.DebitNo};this.postEncode(this.getUrlById(),a).then(function(a){if(null!=a){var s=a.Data[0],c="";s.taxstatus&&("0"==s.taxstatus.toString()?c="No Tax":"1"==s.taxstatus.toString()?c="VAT":"2"==s.taxstatus.toString()?c="VAT & Withholding":"3"==s.taxstatus.toString()&&(c="Withholding")),t.M_AR_CancelTaxBatchMaster={subportfoliocd:s.subportfoliocd,debtorcd:s.debtorcd,debitno:s.debitno,debitdate:s.debitdate,withholdingamt:t.isCurrency(s.withholdingamt),vatamt:t.isCurrency(s.vatamt),taxstatus:c,useredit:s.useredit,userinput:s.userinput,currencycd:s.currencycd,reasoncd:s.reasoncd,reasoncdLabel:s.reasoncd,reasondescs:s.reasondescs,debtorname:s.debtorname,status:s.status,descs:s.descs,contactid:s.contactid,timeedit:s.timeedit,lastupdatestamp:e.LastUpdateStamp,rowid:s.rowid},t.M_AR_CancelTaxBatchMaster.status="N",t.IEBy.Input=s.userinput,t.IEBy.Edit=s.useredit}})}},beforeCreate:function(){},created:function(){this.$store.commit("setFormType","List"),this.getToolbar().ProcessPS()},beforeMount:function(){},mounted:function(){this.hideSideBarMenu(),this.FormToABSList().doGetList("","eb_getList")},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),n=r,o=a("2877"),i=Object(o["a"])(n,s,c,!1,null,null,null);i.options.__file="AR_CancelTaxBatchMaster.vue";t["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d2105de.39fd38af.js.map