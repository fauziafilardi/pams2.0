(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2743"],{"23d0":function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("ABSListVuex",{attrs:{prop:e.propList,title:e.data.QueryName},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table,refreshColumn:e.$parent.refreshColumn}}),o("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[o("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[o("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                    Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),o("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),o("b-collapse",{attrs:{id:"collapse1",visible:!0}},[o("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[o("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[o("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[o("b-row",{staticStyle:{"padding-left":"10px"}},[o("b-col",{attrs:{md:"12",id:"col-left"}},[o("b-row",[o("b-col",{attrs:{md:"6"}},[o("ABSInputSelectList",{ref:"ref_applicationno",attrs:{prop:e.PI_applicationno,value:e.M_AR_AmortizeRevenueDebitAllocationH.applicationno,label:e.M_AR_AmortizeRevenueDebitAllocationH.applicationnoLabel},on:{change:e.OnapplicationnoChange}})],1),o("b-col",{attrs:{md:"6"}},[o("ABSCompute",{ref:"ref_dnamount",attrs:{prop:e.PI_dnamount},model:{value:e.M_AR_AmortizeRevenueDebitAllocationH.dnamount,callback:function(t){e.$set(e.M_AR_AmortizeRevenueDebitAllocationH,"dnamount",t)},expression:"M_AR_AmortizeRevenueDebitAllocationH.dnamount"}})],1)],1),o("b-row",[o("b-col",{attrs:{md:"6"}},[o("ABSCompute",{ref:"ref_debtorcd",attrs:{prop:e.PI_debtorcd},model:{value:e.DebtorContactLabel,callback:function(t){e.DebtorContactLabel=t},expression:"DebtorContactLabel"}})],1),o("b-col",{attrs:{md:"6"}},[o("ABSCompute",{ref:"ref_netalloc",attrs:{prop:e.PI_netalloc},model:{value:e.M_AR_AmortizeRevenueDebitAllocationH.netalloc,callback:function(t){e.$set(e.M_AR_AmortizeRevenueDebitAllocationH,"netalloc",t)},expression:"M_AR_AmortizeRevenueDebitAllocationH.netalloc"}})],1)],1),o("b-row",[o("b-col",{attrs:{md:"6"}},[o("ABSCompute",{ref:"ref_brandname",attrs:{prop:e.PI_brandname},model:{value:e.M_AR_AmortizeRevenueDebitAllocationH.brandname,callback:function(t){e.$set(e.M_AR_AmortizeRevenueDebitAllocationH,"brandname",t)},expression:"M_AR_AmortizeRevenueDebitAllocationH.brandname"}})],1),o("b-col",{attrs:{md:"6"}},[o("ABSCompute",{ref:"ref_balance",attrs:{prop:e.PI_balance},model:{value:e.M_AR_AmortizeRevenueDebitAllocationH.balance,callback:function(t){e.$set(e.M_AR_AmortizeRevenueDebitAllocationH,"balance",t)},expression:"M_AR_AmortizeRevenueDebitAllocationH.balance"}})],1)],1),o("b-row",[o("b-col",{attrs:{md:"6"}},[o("ABSInputSelectList",{ref:"ref_debitno",attrs:{prop:e.PI_debitno,value:e.M_AR_AmortizeRevenueDebitAllocationH.debitno,label:e.M_AR_AmortizeRevenueDebitAllocationH.debitnoLabel},on:{change:e.OndebitnoChange}})],1)],1),o("b-row",[o("b-col",{attrs:{md:"6"}},[o("ABSCompute",{ref:"ref_debitdate",attrs:{prop:e.PI_debitdate},model:{value:e.M_AR_AmortizeRevenueDebitAllocationH.debitdate,callback:function(t){e.$set(e.M_AR_AmortizeRevenueDebitAllocationH,"debitdate",t)},expression:"M_AR_AmortizeRevenueDebitAllocationH.debitdate"}})],1)],1),o("b-row",[o("b-col",{attrs:{md:"6"}},[o("ABSCompute",{ref:"ref_invoicedescs",attrs:{prop:e.PI_invoicedescs},model:{value:e.M_AR_AmortizeRevenueDebitAllocationH.invoicedescs,callback:function(t){e.$set(e.M_AR_AmortizeRevenueDebitAllocationH,"invoicedescs",t)},expression:"M_AR_AmortizeRevenueDebitAllocationH.invoicedescs"}})],1)],1),o("b-row",[o("b-col",{attrs:{md:"6"}},[o("ABSTextAreaVuex",{ref:"ref_remarks",attrs:{prop:e.PI_remarks},on:{input:e.OnremarksChange},model:{value:e.M_AR_AmortizeRevenueDebitAllocationH.remarks,callback:function(t){e.$set(e.M_AR_AmortizeRevenueDebitAllocationH,"remarks",t)},expression:"M_AR_AmortizeRevenueDebitAllocationH.remarks"}})],1)],1)],1)],1),o("ABSTAnalysis",{attrs:{prop:e.PTAnalysis}})],1)],1)],1)],1)],1)],1)},a=[],n=(o("ac6a"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{cInsertKey:"",FormType:"ListProcess",Module:"AR",propList:{initialWhere:"SubportfolioCd = '"+this.getDataUser().SubPortfolioCd+"'",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_AR_AmortizeRevenueDebitAllocationH:{revenuedebitallocseqnno:0,subportfoliocd:this.getDataUser().SubPortfolioCd,applicationno:"",source:"",debitno:"",remarks:"",status:"",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:0,t0:"",t1:"",t2:"",t3:"",t4:"",t5:"",t6:"",t7:"",t8:"",t9:"",t10:"",t11:"",t12:"",t13:"",t14:"",t15:"",t16:"",t17:"",t18:"",t19:"",t20:"",t21:"",t22:"",t23:"",t24:"",t25:"",t26:"",t27:"",t28:"",t29:"",t30:"",controlsequenceno:0,rowid:0,debtorcd:"",contactname:"",brandname:"",debitdate:"",invoicedescs:"",dnamount:"",netalloc:"",whtalloc:"",balance:""},PI_applicationno:{dataLookUp:{LookUpCd:"GetLookUpContract_AmortizeRevenue",ColumnDB:"ApplicationNo",InitialWhere:"SubportfolioCd = '"+this.getDataUser().SubPortfolioCd+"'",ParamWhere:"",SourceField:"ApplicationNo,LOONo,TimeEdit",DisplayLookUp:"ApplicationNo,LOONo"},cValidate:"required",cName:"applicationno",cLabel:"Application No",cKey:!0,cLabelSize:4,cOrder:0,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"ApplicationNo,LOONo"},PI_dnamount:{cLabel:"DN Amount",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_debtorcd:{cLabel:"Debtor Code",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_netalloc:{cLabel:"Net Allocated",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_brandname:{cLabel:"Brand Name",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_balance:{cLabel:"Balance",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_debitno:{dataLookUp:{LookUpCd:"GetLookUp_DebitNo",ColumnDB:"DebitNo",InitialWhere:"SubportfolioCd = '"+this.getDataUser().SubPortfolioCd+"'  AND DebtorCd=''",ParamWhere:"",SourceField:"InvoiceNo=DebitNo,InvoiceDate=DebitDate,DebtorCd,Descs=ContactName,TimeEdit",DisplayLookUp:"InvoiceNo"},cValidate:"required",cName:"debitno",cLabel:"Debit No",cKey:!0,cLabelSize:4,cOrder:0,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"InvoiceNo"},PI_debitdate:{cLabel:"Debit Date",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_invoicedescs:{cLabel:"Description",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_remarks:{cValidate:"",cName:"remarks",cLabel:"Remarks",cLabelSize:4,cOrder:0,cKey:!1,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage1Data},DebtorContactLabel:function(){return this.M_AR_AmortizeRevenueDebitAllocationH.debtorcd+" - Contact Name "+this.M_AR_AmortizeRevenueDebitAllocationH.contactname}},methods:{OnapplicationnoChange:function(e){var t=this;this.$nextTick(function(){if(t.M_AR_AmortizeRevenueDebitAllocationH.applicationno=e.id,t.M_AR_AmortizeRevenueDebitAllocationH.applicationnoLabel=e.label,"VIEW"!=t.inputStatus){var o={OptionFunctionCd:"GetLookupDebitAllocationDebtorCd",ModuleCd:t.Module,SubPortfolioCd:t.getDataUser().SubPortfolioCd,ApplicationNo:e.id};t.FnDynamicFunction(o).then(function(e){null!=e&&(e.length>0?(t.M_AR_AmortizeRevenueDebitAllocationH.debtorcd=e[0].DebtorCd,t.M_AR_AmortizeRevenueDebitAllocationH.contactname=e[0].ContactName,t.M_AR_AmortizeRevenueDebitAllocationH.brandname=e[0].BrandName,t.PI_debitno.dataLookUp.InitialWhere="SubPortfolioCd='"+t.getDataUser().SubPortfolioCd+"' AND DebtorCd='"+e[0].DebtorCd+"'"):(t.M_AR_AmortizeRevenueDebitAllocationH.debtorcd="",t.M_AR_AmortizeRevenueDebitAllocationH.contactname="",t.M_AR_AmortizeRevenueDebitAllocationH.brandname="",t.PI_debitno.dataLookUp.InitialWhere="SubPortfolioCd='"+t.getDataUser().SubPortfolioCd+"' AND DebtorCd=''"),t.M_AR_AmortizeRevenueDebitAllocationH.debitno="",t.M_AR_AmortizeRevenueDebitAllocationH.debitdate="",t.M_AR_AmortizeRevenueDebitAllocationH.invoicedescs="")})}}),this.$forceUpdate()},OndebitnoChange:function(e){var t=this;this.$nextTick(function(){if(t.M_AR_AmortizeRevenueDebitAllocationH.debitno=e.id,t.M_AR_AmortizeRevenueDebitAllocationH.debitnoLabel=e.label,"VIEW"!=t.inputStatus){var o={OptionFunctionCd:"GetLastVATPaidBy",ModuleCd:t.Module,SubPortfolioCd:t.getDataUser().SubPortfolioCd,DebitNo:e.id};t.FnDynamicFunction(o).then(function(e){null!=e&&e.length>0&&(t.M_AR_AmortizeRevenueDebitAllocationH.invoicedescs=e[0].Descs,t.M_AR_AmortizeRevenueDebitAllocationH.debitdate=t.momentDateFormatting(e[0].DebitDate,"DD/MM/YYYY"))})}}),this.$forceUpdate()},OnremarksChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},setToolbarButton:function(){},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,t){},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){},M_Post:function(e){var t=this,o=[],i=this.FormToABSList().getRowSelected();i.forEach(function(e){o.push({SubPortfolioCd:t.getDataUser().SubPortfolioCd,RevenueDebitAllocSeqnNo:e.RevenueDebitAllocSeqnNo,UserEdit:t.getDataUser().UserId,OutputMessage_Output:""})});var a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:o};this.postJSONMulti(this.getUrlPostMulti(),a).then(function(e){null!=e&&t.$parent.resultPost()})},M_Insert:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,ApplicationNo:""==this.M_AR_AmortizeRevenueDebitAllocationH.applicationno||null==this.M_AR_AmortizeRevenueDebitAllocationH.applicationno?"NULL":this.M_AR_AmortizeRevenueDebitAllocationH.applicationno,DebitNo:""==this.M_AR_AmortizeRevenueDebitAllocationH.debitno||null==this.M_AR_AmortizeRevenueDebitAllocationH.debitno?"NULL":this.M_AR_AmortizeRevenueDebitAllocationH.debitno,Remarks:this.M_AR_AmortizeRevenueDebitAllocationH.remarks,UserInput:this.getDataUser().UserId};this.postJSON(this.getUrlInsert(),t).then(function(t){null!=t&&e.$parent.resultInsert(t.Message)})},M_Update:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,RevenueDebitAllocSeqnNo:this.M_AR_AmortizeRevenueDebitAllocationH.revenuedebitallocseqnno,Remarks:this.M_AR_AmortizeRevenueDebitAllocationH.remarks,UserEdit:this.getDataUser().UserId,LastUpdateStamp:this.M_AR_AmortizeRevenueDebitAllocationH.lastupdatestamp};this.postJSON(this.getUrlUpdate(),t).then(function(t){null!=t&&e.$parent.resultUpdate(t.Message)})},M_ClearForm:function(){this.M_AR_AmortizeRevenueDebitAllocationH={revenuedebitallocseqnno:0,subportfoliocd:this.getDataUser().SubPortfolioCd,applicationno:"",source:"",debitno:"",remarks:"",status:"",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:0,t0:"",t1:"",t2:"",t3:"",t4:"",t5:"",t6:"",t7:"",t8:"",t9:"",t10:"",t11:"",t12:"",t13:"",t14:"",t15:"",t16:"",t17:"",t18:"",t19:"",t20:"",t21:"",t22:"",t23:"",t24:"",t25:"",t26:"",t27:"",t28:"",t29:"",t30:"",controlsequenceno:0,rowid:0,debtorcd:"",contactname:"",brandname:"",debitdate:"",invoicedescs:"",dnamount:"",netalloc:"",whtalloc:"",balance:""}},M_New:function(){},M_Edit:function(){},M_Delete:function(e){var t=this,o=this.FormToABSList().getRowSelected(),i=[];o.forEach(function(e){i.push({SubPortfolioCd:t.getDataUser().SubPortfolioCd,RevenueDebitAllocSeqnNo:e.RevenueDebitAllocSeqnNo,ApplicationNo:e.ApplicationNo,UserEdit:t.getDataUser().UserId,LastUpdateStamp:e.LastUpdateStamp,_Message_:""})});var a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:i};this.postJSONMulti(this.getUrlNewDeleteMulti(),a).then(function(e){null!=e&&t.$parent.resultDelete("Deleting Data Successfully")})},getDataBy:function(e){var t=this,o={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,revenuedebitallocseqnno:e.RevenueDebitAllocSeqnNo};this.postEncode(this.getUrlById(),o).then(function(o){if(null!=o){var i=o.Data[0];t.M_AR_AmortizeRevenueDebitAllocationH={revenuedebitallocseqnno:i.revenuedebitallocseqnno,subportfoliocd:i.subportfoliocd,applicationno:i.applicationno,source:i.source,debitno:i.debitno,remarks:i.remarks,status:i.status,userinput:i.userinput,useredit:i.useredit,timeinput:i.timeinput,timeedit:i.timeedit,lastupdatestamp:e.LastUpdateStamp,t0:i.t0,t1:i.t1,t2:i.t2,t3:i.t3,t4:i.t4,t5:i.t5,t6:i.t6,t7:i.t7,t8:i.t8,t9:i.t9,t10:i.t10,t11:i.t11,t12:i.t12,t13:i.t13,t14:i.t14,t15:i.t15,t16:i.t16,t17:i.t17,t18:i.t18,t19:i.t19,t20:i.t20,t21:i.t21,t22:i.t22,t23:i.t23,t24:i.t24,t25:i.t25,t26:i.t26,t27:i.t27,t28:i.t28,t29:i.t29,t30:i.t30,controlsequenceno:i.controlsequenceno,rowid:i.rowid,debtorcd:i.debtorcd,contactname:i.contactname,brandname:i.brandname,debitdate:t.momentDateFormatting(i.debitdate,"DD/MM/YYYY"),invoicedescs:i.invoicedescs,dnamount:i.dnamount,netalloc:i.netalloc,whtalloc:i.whtalloc,balance:i.balance},t.M_AR_AmortizeRevenueDebitAllocationH.applicationnoLabel=null!=t.M_AR_AmortizeRevenueDebitAllocationH.applicationno&&""!=t.M_AR_AmortizeRevenueDebitAllocationH.applicationno?i.applicationno:"",t.M_AR_AmortizeRevenueDebitAllocationH.debitnoLabel=null!=t.M_AR_AmortizeRevenueDebitAllocationH.debitno&&""!=t.M_AR_AmortizeRevenueDebitAllocationH.debitno?i.debitno:"",t.IEBy.Input=i.userinput,t.IEBy.Edit=i.useredit}})}},beforeCreate:function(){},created:function(){this.$store.commit("setFormType","ListProcess"),this.getToolbar().ProcessPS()},beforeMount:function(){},mounted:function(){this.hideSideBarMenu(),this.FormToABSList().doGetList("","eb_getList")},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),l=n,r=o("2877"),c=Object(r["a"])(l,i,a,!1,null,null,null);c.options.__file="AR_AmortizeRevenueDebitAllocationH.vue";t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0b2743.52457927.js.map