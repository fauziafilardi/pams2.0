(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c1ea9"],{"47a1":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ABSListVuex",{attrs:{prop:e.propList,title:e.data.QueryName},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table,refreshColumn:e.$parent.refreshColumn}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[n("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[n("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                    Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),n("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),n("b-collapse",{attrs:{id:"collapse1",visible:!0}},[n("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[n("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[n("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[n("b-row",{staticStyle:{"padding-left":"10px"}},[n("b-col",{attrs:{md:"12",id:"col-left"}},[n("b-row",[n("b-col",{attrs:{md:"6"}},[n("ABSCompute",{ref:"ref_debtorcd",attrs:{prop:e.PI_debtorcd},model:{value:e.M_AR_WInvAssignment.debtorcd,callback:function(t){e.$set(e.M_AR_WInvAssignment,"debtorcd",t)},expression:"M_AR_WInvAssignment.debtorcd"}})],1)],1),n("b-row",[n("b-col",{attrs:{md:"6"}},[n("ABSInputSelectList",{ref:"ref_debitno",attrs:{prop:e.PI_debitno,value:e.M_AR_WInvAssignment.debitno,label:e.M_AR_WInvAssignment.debitnoLabel},on:{change:e.OndebitnoChange}})],1),n("b-col",{attrs:{md:"6"}},[n("ABSinputDateVuex",{ref:"ref_debitdate",attrs:{prop:e.PI_debitdate},model:{value:e.M_AR_WInvAssignment.debitdate,callback:function(t){e.$set(e.M_AR_WInvAssignment,"debitdate",t)},expression:"M_AR_WInvAssignment.debitdate"}})],1)],1),n("b-row",[n("b-col",{attrs:{md:"6"}},[n("ABSInputSelectList",{ref:"ref_taxinvoiceno",attrs:{prop:e.PI_taxinvoiceno,value:e.M_AR_WInvAssignment.taxinvoiceno,label:e.M_AR_WInvAssignment.taxinvoicenoLabel},on:{change:e.OntaxinvoicenoChange}})],1),n("b-col",{attrs:{md:"6"}},[n("ABSinputDateVuex",{ref:"ref_withholdingdate",attrs:{prop:e.PI_withholdingdate},model:{value:e.M_AR_WInvAssignment.withholdingdate,callback:function(t){e.$set(e.M_AR_WInvAssignment,"withholdingdate",t)},expression:"M_AR_WInvAssignment.withholdingdate"}})],1)],1),n("b-row",[n("b-col",{attrs:{md:"6"}},[n("ABSCompute",{ref:"ref_currencycd",attrs:{prop:e.PI_currencycd},model:{value:e.M_AR_WInvAssignment.currencycd,callback:function(t){e.$set(e.M_AR_WInvAssignment,"currencycd",t)},expression:"M_AR_WInvAssignment.currencycd"}})],1),n("b-col",{attrs:{md:"6"}},[n("ABSinputTextVuex",{ref:"ref_currencyrate",attrs:{prop:e.PI_currencyrate},model:{value:e.M_AR_WInvAssignment.currencyrate,callback:function(t){e.$set(e.M_AR_WInvAssignment,"currencyrate",t)},expression:"M_AR_WInvAssignment.currencyrate"}})],1)],1),n("b-row",[n("b-col",{attrs:{md:"6"}},[n("ABSinputTextVuex",{ref:"ref_trxamt",attrs:{prop:e.PI_trxamt},model:{value:e.M_AR_WInvAssignment.trxamt,callback:function(t){e.$set(e.M_AR_WInvAssignment,"trxamt",t)},expression:"M_AR_WInvAssignment.trxamt"}})],1),n("b-col",{attrs:{md:"6"}},[n("ABSinputTextVuex",{ref:"ref_taxcurrencyrate",attrs:{prop:e.PI_taxcurrencyrate},model:{value:e.M_AR_WInvAssignment.taxcurrencyrate,callback:function(t){e.$set(e.M_AR_WInvAssignment,"taxcurrencyrate",t)},expression:"M_AR_WInvAssignment.taxcurrencyrate"}})],1)],1),n("b-row",[n("b-col",{attrs:{md:"6"}},[n("ABSinputTextVuex",{ref:"ref_withholdingamt",attrs:{prop:e.PI_withholdingamt},model:{value:e.M_AR_WInvAssignment.withholdingamt,callback:function(t){e.$set(e.M_AR_WInvAssignment,"withholdingamt",t)},expression:"M_AR_WInvAssignment.withholdingamt"}})],1)],1)],1)],1),n("ABSTAnalysis",{attrs:{prop:e.PTAnalysis}})],1)],1)],1)],1)],1)],1)},a=[],o=(n("ac6a"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{cInsertKey:"",FormType:"List",Module:"AR",propList:{initialWhere:"",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_AR_WInvAssignment:{debtorcd:"",taxinvoiceno:"",withholdingdate:"",debitno:"",debitdate:"",currencycd:"",currencyrate:"",taxcurrencyrate:"",trxamt:"",netamt:"",withholdingamt:"",userinput:"",useredit:this.getDataUser().UserId,subportfoliocd:this.getDataUser().SubPortfolioCd,timeedit:"",lastupdatestamp:0,rowid:0},PI_debtorcd:{cLabel:"Debtor",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_debitno:{dataLookUp:{LookUpCd:"GetLookupARWithHoldingInvoiceDebitNo",ColumnDB:"DebitNo",InitialWhere:"SUBPORTFOLIOCD='"+this.getDataUser().SubPortfolioCd+"' And TaxStatus IN ('2','3') and WithHoldingStatus='N' and WithHoldingNo is null And WithholdingPaidBy='M'",ParamWhere:"",SourceField:"Doctitik_No=DebitNo,Descs,Doctitik_Date=DebitDate,TimeEdit",DisplayLookUp:"Doctitik_No,Descs"},cValidate:"required",cName:"debitno",cLabel:"Doc. No",cKey:!0,cLabelSize:4,cOrder:0,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"DebitNo,Descs"},PI_debitdate:{cValidate:"",cName:"debitdate",cLabel:"Doc. Date",cOrder:4,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cProtect:!0},PI_taxinvoiceno:{dataLookUp:{LookUpCd:"GetLookupARTaxMasterTaxInvoiceNo",ColumnDB:"TaxInvoiceNo",InitialWhere:"SUBPORTFOLIOCD='"+this.getDataUser().SubPortfolioCd+"' And Status='N' And TaxInvoiceType='W' ",ParamWhere:""},cValidate:"required",cName:"taxinvoiceno",cLabel:"Tax Invoice No ",cKey:!0,cLabelSize:4,cOrder:0,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"TaxInvoiceNo,TranslatedTaxInvoiceType"},PI_withholdingdate:{cValidate:"required",cName:"withholdingdate",cLabel:"Tax Invoice Date ",cOrder:4,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_currencycd:{cLabel:"Currency",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_currencyrate:{cLabel:"Currency Rate",cLabelSize:4,cValue:"",cType:"decimal",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0,cProtect:!0},PI_trxamt:{cLabel:"Doc. Amount",cLabelSize:4,cValue:"",cType:"decimal",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0,cProtect:!0},PI_taxcurrencyrate:{cLabel:"Tax Currency Rate",cLabelSize:4,cValue:"",cType:"decimal",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0,cProtect:!0},PI_withholdingamt:{cLabel:"Withholding Amount",cLabelSize:4,cValue:"",cType:"decimal",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0,cProtect:!0},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage1Data}},methods:{GetTaxInvoiceHeaderData:function(e){var t=this,n={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:1,SubportfolioCd:this.getDataUser().SubPortfolioCd,DebitNo:e};this.postEncode(this.getUrlById(),n).then(function(e){if(null!=e){var n=e.Data[0];console.log(n),t.M_AR_WInvAssignment={debtorcd:n.debtorcd,taxinvoiceno:n.taxinvoiceno,withholdingdate:n.debitdate,debitno:n.debitno,debitdate:n.debitdate,currencycd:n.currencycd,currencyrate:t.isCurrency(n.currencyrate,t.decimal),taxcurrencyrate:t.isCurrency(n.taxcurrencyrate,t.decimal),trxamt:t.isCurrency(n.trxamt,t.decimal),netamt:t.isCurrency(n.netamt,t.decimal),withholdingamt:t.isCurrency(n.withholdingamt,t.decimal),userinput:n.userinput,useredit:n.useredit,subportfoliocd:n.subportfoliocd,timeedit:n.timeedit,rowid:n.rowid},t.M_AR_WInvAssignment.debitnoLabel=null!=t.M_AR_WInvAssignment.debitno?n.debitno:"",t.M_AR_WInvAssignment.taxinvoicenoLabel=null!=t.M_AR_WInvAssignment.taxinvoiceno?n.taxinvoiceno:""}})},OndebitnoChange:function(e){var t=this;this.$nextTick(function(){t.M_AR_WInvAssignment.debitno=e.id,t.M_AR_WInvAssignment.debitnoLabel=e.label,"VIEW"!=t.inputStatus&&t.GetTaxInvoiceHeaderData(t.M_AR_WInvAssignment.debitno)}),this.$forceUpdate()},OntaxinvoicenoChange:function(e){var t=this;this.$nextTick(function(){t.M_AR_WInvAssignment.taxinvoiceno=e.id,t.M_AR_WInvAssignment.taxinvoicenoLabel=e.label,t.inputStatus}),this.$forceUpdate()},setToolbarButton:function(){},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,t){},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){},M_Post:function(e){},M_Insert:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubportfolioCd:this.getDataUser().SubPortfolioCd,DebitNo:""==this.M_AR_WInvAssignment.debitno||null==this.M_AR_WInvAssignment.debitno?"NULL":this.M_AR_WInvAssignment.debitno,TaxInvoiceNo:""==this.M_AR_WInvAssignment.taxinvoiceno||null==this.M_AR_WInvAssignment.taxinvoiceno?"NULL":this.M_AR_WInvAssignment.taxinvoiceno,WithHoldingDate:this.M_AR_WInvAssignment.withholdingdate,UserInput:this.getDataUser().UserId};this.postJSON(this.getUrlInsert(),t).then(function(t){null!=t&&e.$parent.resultInsert(t.Message)})},M_Update:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubportfolioCd:this.getDataUser().SubPortfolioCd,DebitNo:""==this.M_AR_WInvAssignment.debitno||null==this.M_AR_WInvAssignment.debitno?"NULL":this.M_AR_WInvAssignment.debitno,TaxInvoiceNo:""==this.M_AR_WInvAssignment.taxinvoiceno||null==this.M_AR_WInvAssignment.taxinvoiceno?"NULL":this.M_AR_WInvAssignment.taxinvoiceno,WithHoldingDate:this.M_AR_WInvAssignment.withholdingdate,UserEdit:this.getDataUser().UserId,LastUpdateStamp:this.M_AR_WInvAssignment.lastupdatestamp};this.postJSON(this.getUrlUpdate(),t).then(function(t){null!=t&&e.$parent.resultUpdate(t.Message)})},M_ClearForm:function(){this.M_AR_WInvAssignment={debtorcd:"",taxinvoiceno:"",withholdingdate:"",debitno:"",debitdate:"",currencycd:"",currencyrate:"",taxcurrencyrate:"",trxamt:"",netamt:"",withholdingamt:"",userinput:"",useredit:this.getDataUser().UserId,subportfoliocd:this.getDataUser().SubPortfolioCd,timeedit:"",lastupdatestamp:0,rowid:0}},M_New:function(){},M_Edit:function(){},M_Delete:function(e){var t=this,n=this.FormToABSList().getRowSelected(),i=[];n.forEach(function(e){i.push({SubPortfolioCd:t.getDataUser().SubPortfolioCd,DebitNo:e.Doctitik_No,TaxInvoiceNo:e.TaxInvoiceNo,UserEdit:t.getDataUser().UserId,LastUpdateStamp:e.LastUpdateStamp,_Message_:""})});var a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:i};this.postJSONMulti(this.getUrlNewDeleteMulti(),a).then(function(e){null!=e&&t.$parent.resultDelete("Deleting Data Successfully")})},getDataBy:function(e){var t=this,n={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubportfolioCd:this.getDataUser().SubPortfolioCd,debitno:e.Doctitik_No,taxinvoiceno:e.TaxInvoiceNo};this.postEncode(this.getUrlById(),n).then(function(n){if(null!=n){var i=n.Data[0];t.M_AR_WInvAssignment={debtorcd:i.debtorcd,taxinvoiceno:i.taxinvoiceno,withholdingdate:i.withholdingdate,debitno:i.debitno,debitdate:i.debitdate,currencycd:i.currencycd,currencyrate:t.isCurrency(i.currencyrate,t.decimal),taxcurrencyrate:t.isCurrency(i.taxcurrencyrate,t.decimal),trxamt:t.isCurrency(i.trxamt,t.decimal),netamt:t.isCurrency(i.netamt,t.decimal),withholdingamt:t.isCurrency(i.withholdingamt,t.decimal),userinput:i.userinput,useredit:i.useredit,subportfoliocd:i.subportfoliocd,timeedit:i.timeedit,lastupdatestamp:e.LastUpdateStamp,rowid:i.rowid},t.M_AR_WInvAssignment.debitnoLabel=null!=t.M_AR_WInvAssignment.debitno?i.debitno:"",t.M_AR_WInvAssignment.taxinvoicenoLabel=null!=t.M_AR_WInvAssignment.taxinvoiceno?i.taxinvoiceno:"",t.IEBy.Input=i.userinput,t.IEBy.Edit=i.useredit}})}},beforeCreate:function(){},created:function(){this.$store.commit("setFormType","List"),this.getToolbar().ProcessPS()},beforeMount:function(){},mounted:function(){this.hideSideBarMenu(),this.FormToABSList().doGetList("","eb_getList")},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),s=o,r=n("2877"),c=Object(r["a"])(s,i,a,!1,null,null,null);c.options.__file="AR_WInvAssignment.vue";t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0c1ea9.25418edd.js.map