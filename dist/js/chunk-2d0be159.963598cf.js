(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0be159"],{"2f6e":function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("ABSListVuex",{attrs:{prop:e.propList,title:e.data.QueryName},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table,refreshColumn:e.$parent.refreshColumn}}),r("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[r("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[r("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                    Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),r("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),r("b-collapse",{attrs:{id:"collapse1",visible:!0}},[r("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[r("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[r("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[r("b-row",{staticStyle:{"padding-left":"10px"}},[r("b-col",{attrs:{md:"6",id:"col-left"}},[r("b-row",[r("b-col",{attrs:{md:"12"}},[r("ABSinputTextVuex",{ref:"ref_withholdingreferenceno",attrs:{prop:e.PI_withholdingreferenceno},model:{value:e.M_AR_CustWOthersInvMonitoring.withholdingreferenceno,callback:function(t){e.$set(e.M_AR_CustWOthersInvMonitoring,"withholdingreferenceno",t)},expression:"M_AR_CustWOthersInvMonitoring.withholdingreferenceno"}})],1)],1),r("b-row",[r("b-col",{attrs:{md:"12"}},[r("ABSinputTextVuex",{ref:"ref_debitno",attrs:{prop:e.PI_debitno},model:{value:e.M_AR_CustWOthersInvMonitoring.debitno,callback:function(t){e.$set(e.M_AR_CustWOthersInvMonitoring,"debitno",t)},expression:"M_AR_CustWOthersInvMonitoring.debitno"}})],1)],1),r("b-row",[r("b-col",{attrs:{md:"12"}},[r("ABSinputTextVuex",{ref:"ref_descs",attrs:{prop:e.PI_descs},model:{value:e.M_AR_CustWOthersInvMonitoring.descs,callback:function(t){e.$set(e.M_AR_CustWOthersInvMonitoring,"descs",t)},expression:"M_AR_CustWOthersInvMonitoring.descs"}})],1)],1),r("b-row",[r("b-col",{attrs:{md:"12"}},[r("ABSinputTextVuex",{ref:"ref_debtorcd",attrs:{prop:e.PI_debtorcd},model:{value:e.M_AR_CustWOthersInvMonitoring.debtorcd,callback:function(t){e.$set(e.M_AR_CustWOthersInvMonitoring,"debtorcd",t)},expression:"M_AR_CustWOthersInvMonitoring.debtorcd"}})],1)],1),r("b-row",[r("b-col",{attrs:{md:"12"}},[r("ABSinputTextVuex",{ref:"ref_debtorname",attrs:{prop:e.PI_debtorname},model:{value:e.M_AR_CustWOthersInvMonitoring.debtorname,callback:function(t){e.$set(e.M_AR_CustWOthersInvMonitoring,"debtorname",t)},expression:"M_AR_CustWOthersInvMonitoring.debtorname"}})],1)],1),r("b-row",[r("b-col",{attrs:{md:"12"}},[r("ABSinputTextVuex",{ref:"ref_currencycd",attrs:{prop:e.PI_currencycd},model:{value:e.M_AR_CustWOthersInvMonitoring.currencycd,callback:function(t){e.$set(e.M_AR_CustWOthersInvMonitoring,"currencycd",t)},expression:"M_AR_CustWOthersInvMonitoring.currencycd"}})],1)],1),r("b-row",[r("b-col",{attrs:{md:"12"}},[r("ABSinputTextVuex",{ref:"ref_netamt",attrs:{prop:e.PI_netamt},model:{value:e.M_AR_CustWOthersInvMonitoring.netamt,callback:function(t){e.$set(e.M_AR_CustWOthersInvMonitoring,"netamt",t)},expression:"M_AR_CustWOthersInvMonitoring.netamt"}})],1)],1),r("b-row",[r("b-col",{attrs:{md:"12"}},[r("ABSTextAreaVuex",{ref:"ref_remarks",attrs:{prop:e.PI_remarks},on:{input:e.OnremarksChange},model:{value:e.M_AR_CustWOthersInvMonitoring.remarks,callback:function(t){e.$set(e.M_AR_CustWOthersInvMonitoring,"remarks",t)},expression:"M_AR_CustWOthersInvMonitoring.remarks"}})],1)],1)],1),r("b-col",{attrs:{md:"6",id:"col-right"}},[r("b-row",[r("b-col",{attrs:{md:"12"}},[r("ABSinputDateVuex",{ref:"ref_withholdingdate",attrs:{prop:e.PI_withholdingdate},on:{input:e.OnwithholdingdateChange},model:{value:e.M_AR_CustWOthersInvMonitoring.withholdingdate,callback:function(t){e.$set(e.M_AR_CustWOthersInvMonitoring,"withholdingdate",t)},expression:"M_AR_CustWOthersInvMonitoring.withholdingdate"}})],1)],1),r("b-row",[r("b-col",{attrs:{md:"12"}},[r("ABSinputDateVuex",{ref:"ref_debitdate",attrs:{prop:e.PI_debitdate},model:{value:e.M_AR_CustWOthersInvMonitoring.debitdate,callback:function(t){e.$set(e.M_AR_CustWOthersInvMonitoring,"debitdate",t)},expression:"M_AR_CustWOthersInvMonitoring.debitdate"}})],1)],1),r("b-row",[r("b-col",{attrs:{md:"12"}},[r("ABSCompute",{ref:"ref_debit",attrs:{prop:e.PI_debit}})],1)],1),r("b-row",[r("b-col",{attrs:{md:"12"}},[r("ABSCompute",{ref:"ref_debit",attrs:{prop:e.PI_debit}})],1)],1),r("b-row",[r("b-col",{attrs:{md:"12"}},[r("ABSCompute",{ref:"ref_debit",attrs:{prop:e.PI_debit}})],1)],1),r("b-row",[r("b-col",{attrs:{md:"12"}},[r("ABSinputTextVuex",{ref:"ref_taxcurrencyrate",attrs:{prop:e.PI_taxcurrencyrate},model:{value:e.M_AR_CustWOthersInvMonitoring.taxcurrencyrate,callback:function(t){e.$set(e.M_AR_CustWOthersInvMonitoring,"taxcurrencyrate",t)},expression:"M_AR_CustWOthersInvMonitoring.taxcurrencyrate"}})],1)],1),r("b-row",[r("b-col",{attrs:{md:"12"}},[r("ABSinputTextVuex",{ref:"ref_withholdingamt",attrs:{prop:e.PI_withholdingamt},model:{value:e.M_AR_CustWOthersInvMonitoring.withholdingamt,callback:function(t){e.$set(e.M_AR_CustWOthersInvMonitoring,"withholdingamt",t)},expression:"M_AR_CustWOthersInvMonitoring.withholdingamt"}})],1)],1),r("b-row",[r("b-col",{attrs:{md:"12"}},[r("ABSinputTextVuex",{ref:"ref_basetaxcurrencyrate",attrs:{prop:e.PI_basetaxcurrencyrate},model:{value:e.M_AR_CustWOthersInvMonitoring.basetaxcurrencyrate,callback:function(t){e.$set(e.M_AR_CustWOthersInvMonitoring,"basetaxcurrencyrate",t)},expression:"M_AR_CustWOthersInvMonitoring.basetaxcurrencyrate"}})],1)],1),r("b-row",[r("b-col",{attrs:{md:"12"}},[r("ABSinputTextVuex",{ref:"ref_basewithholdingamt",attrs:{prop:e.PI_basewithholdingamt},model:{value:e.M_AR_CustWOthersInvMonitoring.basewithholdingamt,callback:function(t){e.$set(e.M_AR_CustWOthersInvMonitoring,"basewithholdingamt",t)},expression:"M_AR_CustWOthersInvMonitoring.basewithholdingamt"}})],1)],1)],1)],1),r("ABSTAnalysis",{attrs:{prop:e.PTAnalysis}})],1)],1)],1)],1)],1)],1)},n=[],a=r("ade3"),o={props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{cInsertKey:"",FormType:"List",Module:"AR",propList:{initialWhere:"SubPortfolioCd='"+this.getDataUser().SubPortfolioCd+"' AND AllocatedAmt <> ChargeAmt",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},WHTStatus:"",M_AR_CustWOthersInvMonitoring:{withholdingno:"",withholdingreferenceno:"",withholdingdate:"",debitno:"",debitdate:"",descs:"",currencycd:"",taxcurrencyrate:"",basetaxcurrencyrate:"0",trxamt:"",netamt:"",withholdingamt:"",basewithholdingamt:"",remarks:"",useredit:this.getDataUser().UserId,userinput:"",debtorcd:"",debtorname:"",subportfoliocd:this.getDataUser().SubPortfolioCd,lastupdatestamp:0,rowid:0},PI_withholdingreferenceno:{cValidate:"",cName:"withholdingreferenceno",cLabel:"Tax Invoice No",cLabelSize:4,cOrder:0,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_withholdingdate:{cValidate:"required",cName:"withholdingdate",cLabel:"Tax Invoice Date ",cLabelSize:4,cOrder:0,cKey:!1,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_debitno:{cValidate:"",cName:"debitno",cLabel:"Doc. No",cLabelSize:4,cOrder:0,cKey:!1,cType:"text",cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_debitdate:Object(a["a"])({cValidate:"",cName:"debitdate",cLabel:"Doc. Date",cLabelSize:4,cOrder:0,cKey:!1,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},"cProtect",!0),PI_debit:{cLabel:"",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!1},PI_descs:{cValidate:"",cName:"descs",cLabel:"Description",cLabelSize:4,cOrder:0,cKey:!1,cType:"text",cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_debtorcd:{cValidate:"",cName:"debtorcd",cLabel:"Debtor Code",cLabelSize:4,cOrder:0,cKey:!1,cType:"text",cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_debtorname:{cValidate:"",cName:"debtorname",cLabel:"Debtor Name",cLabelSize:4,cOrder:0,cKey:!1,cType:"text",cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_currencycd:{cValidate:"",cName:"currencycd",cLabel:"Currency",cLabelSize:4,cOrder:0,cKey:!1,cType:"text",cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_taxcurrencyrate:{cLabel:"Tax Currency Rate",cLabelSize:4,cValue:"",cType:"decimal",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0,cProtect:!0},PI_netamt:{cLabel:"Doc. Amount",cLabelSize:4,cValue:"",cType:"decimal",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0,cProtect:!0},PI_withholdingamt:{cLabel:"Withholding Amount",cLabelSize:4,cValue:"",cType:"decimal",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0,cProtect:!0},PI_remarks:{cValidate:"",cName:"remarks",cLabel:"Remarks",cLabelSize:4,cOrder:0,cKey:!1,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_basetaxcurrencyrate:{cValidate:"required",cName:"basetaxcurrencyrate",cLabel:"Base Tax Rate",cLabelSize:4,cOrder:0,cKey:!1,cType:"decimal",cDecimal:2,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cLastLabel:"(Value 0 will default to Tax Currency Rate value)"},PI_basewithholdingamt:{cLabel:"Base Withholding Amount",cLabelSize:4,cValue:"",cType:"decimal",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0,cProtect:!0},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage1Data}},methods:{OnwithholdingdateChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},OnremarksChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},setToolbarButton:function(){this.getToolbar().statusFunction[0].disabled=!0,this.getToolbar().statusFunction[2].disabled=!0},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,t){},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){},M_Post:function(e){},M_Insert:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder};this.postJSON(this.getUrlInsert(),t).then(function(t){null!=t&&e.$parent.resultInsert(t.Message)})},M_Update:function(){var e=this;""==this.M_AR_CustWOthersInvMonitoring.withholdingreferenceno?(this.M_AR_CustWOthersInvMonitoring.withholdingreferenceno="null",this.WHTStatus="N"):this.WHTStatus="T";var t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubportfolioCd:this.getDataUser().SubPortfolioCd,DebitNo:this.M_AR_CustWOthersInvMonitoring.debitno,WithHoldingReferenceNo:this.M_AR_CustWOthersInvMonitoring.withholdingreferenceno,WithHoldingDate:""==this.M_AR_CustWOthersInvMonitoring.withholdingdate||null==this.M_AR_CustWOthersInvMonitoring.withholdingdate?"NULL":this.M_AR_CustWOthersInvMonitoring.withholdingdate,BaseTaxCurrencyRate:this.M_AR_CustWOthersInvMonitoring.basetaxcurrencyrate?this.replaceAllString(this.M_AR_CustWOthersInvMonitoring.basetaxcurrencyrate,",","","number"):0,Status:this.WHTStatus,UserEdit:this.getDataUser().UserId,Remarks:this.M_AR_CustWOthersInvMonitoring.remarks,LastUpdateStamp:this.M_AR_CustWOthersInvMonitoring.lastupdatestamp};this.postJSON(this.getUrlUpdate(),t).then(function(t){null!=t&&e.$parent.resultUpdate(t.Message)})},M_ClearForm:function(){this.M_AR_CustWOthersInvMonitoring={withholdingno:"",withholdingreferenceno:"",withholdingdate:"",debitno:"",debitdate:"",descs:"",currencycd:"",taxcurrencyrate:"",basetaxcurrencyrate:"0",trxamt:"",netamt:"",withholdingamt:"",basewithholdingamt:"",remarks:"",useredit:this.getDataUser().UserId,userinput:"",debtorcd:"",debtorname:"",subportfoliocd:this.getDataUser().SubPortfolioCd,lastupdatestamp:0,rowid:0}},M_New:function(){},M_Edit:function(){},M_Delete:function(e){},getDataBy:function(e){var t=this,r={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubportfolioCd:this.getDataUser().SubPortfolioCd,debitno:e.DebitNo};this.postEncode(this.getUrlById(),r).then(function(r){if(null!=r){var i=r.Data[0];t.M_AR_CustWOthersInvMonitoring={withholdingno:i.withholdingno,withholdingreferenceno:i.withholdingreferenceno,withholdingdate:i.withholdingdate,debitno:i.debitno,debitdate:i.debitdate,descs:i.descs,currencycd:i.currencycd,taxcurrencyrate:t.isCurrency(i.taxcurrencyrate,t.decimal),basetaxcurrencyrate:t.isCurrency(i.basetaxcurrencyrate,t.decimal),trxamt:t.isCurrency(i.trxamt,t.decimal),netamt:t.isCurrency(i.netamt,t.decimal),withholdingamt:t.isCurrency(i.withholdingamt,t.decimal),basewithholdingamt:t.isCurrency(i.basewithholdingamt,t.decimal),remarks:i.remarks,useredit:i.useredit,userinput:i.userinput,debtorcd:i.debtorcd,debtorname:i.debtorname,subportfoliocd:i.subportfoliocd,lastupdatestamp:e.LastUpdateStamp,rowid:i.rowid},t.IEBy.Input=i.userinput,t.IEBy.Edit=i.useredit}})}},beforeCreate:function(){},created:function(){this.$store.commit("setFormType","List"),this.getToolbar().ProcessPS()},beforeMount:function(){},mounted:function(){this.hideSideBarMenu(),this.FormToABSList().doGetList("","eb_getList")},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},s=o,c=r("2877"),d=Object(c["a"])(s,i,n,!1,null,null,null);d.options.__file="AR_CustWOthersInvMonitoring.vue";t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0be159.963598cf.js.map