(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e13d2"],{"7a1c":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("ABSListVuex",{attrs:{prop:e.propList,title:e.data.QueryName},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table,refreshColumn:e.$parent.refreshColumn}}),i("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[i("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[i("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                    Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),i("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),i("b-collapse",{attrs:{id:"collapse1",visible:!0}},[i("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[i("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[i("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[i("b-row",{staticStyle:{"padding-left":"10px"}},[i("b-col",{attrs:{md:"12",id:"col-left"}},[i("b-row",[i("b-col",{attrs:{md:"6"}},[i("ABSInputSelectList",{ref:"ref_applicationno",attrs:{prop:e.PI_applicationno,value:e.M_AR_AmortizeRevenueCreditAllocationH.applicationno,label:e.M_AR_AmortizeRevenueCreditAllocationH.applicationnoLabel},on:{change:e.OnapplicationnoChange}})],1),i("b-col",{attrs:{md:"6"}},[i("ABSinputTextVuex",{ref:"ref_creditamt",attrs:{prop:e.PI_creditamt},model:{value:e.M_AR_AmortizeRevenueCreditAllocationH.creditamt,callback:function(t){e.$set(e.M_AR_AmortizeRevenueCreditAllocationH,"creditamt",t)},expression:"M_AR_AmortizeRevenueCreditAllocationH.creditamt"}})],1)],1),i("b-row",[i("b-col",{attrs:{md:"6"}},[i("ABSinputTextVuex",{ref:"ref_debtorcd",attrs:{prop:e.PI_debtorcd},model:{value:e.M_AR_AmortizeRevenueCreditAllocationH.debtorcd,callback:function(t){e.$set(e.M_AR_AmortizeRevenueCreditAllocationH,"debtorcd",t)},expression:"M_AR_AmortizeRevenueCreditAllocationH.debtorcd"}})],1),i("b-col",{attrs:{md:"6"}},[i("ABSinputTextVuex",{ref:"ref_allocationamt",attrs:{prop:e.PI_allocationamt},model:{value:e.M_AR_AmortizeRevenueCreditAllocationH.allocationamt,callback:function(t){e.$set(e.M_AR_AmortizeRevenueCreditAllocationH,"allocationamt",t)},expression:"M_AR_AmortizeRevenueCreditAllocationH.allocationamt"}})],1)],1),i("b-row",[i("b-col",{attrs:{md:"6"}},[i("ABSinputTextVuex",{ref:"ref_brandname",attrs:{prop:e.PI_brandname},model:{value:e.M_AR_AmortizeRevenueCreditAllocationH.brandname,callback:function(t){e.$set(e.M_AR_AmortizeRevenueCreditAllocationH,"brandname",t)},expression:"M_AR_AmortizeRevenueCreditAllocationH.brandname"}})],1),i("b-col",{attrs:{md:"6"}},[i("ABSinputTextVuex",{ref:"ref_allocatedamt",attrs:{prop:e.PI_allocatedamt},model:{value:e.M_AR_AmortizeRevenueCreditAllocationH.allocatedamt,callback:function(t){e.$set(e.M_AR_AmortizeRevenueCreditAllocationH,"allocatedamt",t)},expression:"M_AR_AmortizeRevenueCreditAllocationH.allocatedamt"}})],1)],1),i("b-row",[i("b-col",{attrs:{md:"6"}},[i("ABSInputSelectList",{ref:"ref_creditno",attrs:{prop:e.PI_creditno,value:e.M_AR_AmortizeRevenueCreditAllocationH.creditno,label:e.M_AR_AmortizeRevenueCreditAllocationH.creditnoLabel},on:{change:e.OncreditnoChange}})],1),i("b-col",{attrs:{md:"6"}},[i("ABSTextAreaVuex",{ref:"ref_remarks",attrs:{prop:e.PI_remarks},on:{input:e.OnremarksChange},model:{value:e.M_AR_AmortizeRevenueCreditAllocationH.remarks,callback:function(t){e.$set(e.M_AR_AmortizeRevenueCreditAllocationH,"remarks",t)},expression:"M_AR_AmortizeRevenueCreditAllocationH.remarks"}})],1)],1),i("b-row",[i("b-col",{attrs:{md:"6"}},[i("ABSinputTextVuex",{ref:"ref_creditdate",attrs:{prop:e.PI_creditdate},model:{value:e.M_AR_AmortizeRevenueCreditAllocationH.creditdate,callback:function(t){e.$set(e.M_AR_AmortizeRevenueCreditAllocationH,"creditdate",t)},expression:"M_AR_AmortizeRevenueCreditAllocationH.creditdate"}})],1)],1),i("b-row",[i("b-col",{attrs:{md:"6"}},[i("ABSinputTextVuex",{ref:"ref_descs",attrs:{prop:e.PI_descs},model:{value:e.M_AR_AmortizeRevenueCreditAllocationH.descs,callback:function(t){e.$set(e.M_AR_AmortizeRevenueCreditAllocationH,"descs",t)},expression:"M_AR_AmortizeRevenueCreditAllocationH.descs"}})],1)],1)],1)],1),i("ABSTAnalysis",{attrs:{prop:e.PTAnalysis}})],1)],1)],1)],1)],1)],1)},o=[],n=(i("7f7f"),i("ac6a"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{cInsertKey:"",FormType:"ListProcess",Module:"AR",propList:{initialWhere:"SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' AND StatusCd = 'N'",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_AR_AmortizeRevenueCreditAllocationH:{subportfoliocd:this.getDataUser().SubPortfolioCd,applicationno:"",creditno:"",remarks:"",status:"",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:0,revenuecreditallocseqnno:0,rowid:0,debtorcd:"",brandname:"",name:"",creditdate:"",descs:"",creditamt:"0",netallocatedamt:"",withholdingallocatedamt:"",allocationamt:"0",allocatedamt:"",witholdingamt:""},PI_applicationno:{dataLookUp:{LookUpCd:"GetLookUpAR_AmortizeRevenue_Contract",ColumnDB:"ApplicationNo",InitialWhere:"",ParamWhere:""},cValidate:"required",cName:"applicationno",cLabel:"Application No ",cKey:!1,cLabelSize:4,cOrder:0,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"ApplicationNo,BrandName"},PI_creditamt:{cValidate:"",cName:"creditamt",cLabel:"CN Amount",cLabelSize:4,cOrder:0,cKey:!1,cType:"decimal",cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_debtorcd:{cLabel:"Debtor Code",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0,cProtect:!0},PI_allocationamt:{cValidate:"",cName:"allocationamt",cLabel:"Allocation Amount",cLabelSize:4,cOrder:0,cKey:!1,cType:"decimal",cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_brandname:{cLabel:"Brand Name",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0,cProtect:!0},PI_allocatedamt:{cLabel:"Allocated Amount",cLabelSize:4,cValue:"",cType:"decimal",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0,cProtect:!0},PI_creditno:{dataLookUp:{LookUpCd:"GetLookUpAmortizeRevenueCreditAllocation_Credit",ColumnDB:"CreditNo",InitialWhere:"",ParamWhere:"",ParamView:"'"+this.getDataUser().SubPortfolioCd+"',''"},cValidate:"",cName:"creditno",cLabel:"Credit No",cKey:!1,cLabelSize:4,cOrder:0,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"CreditNo,Descs"},PI_remarks:{cValidate:"",cName:"remarks",cLabel:"Remarks",cLabelSize:4,cOrder:0,cKey:!1,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_creditdate:{cLabel:"Credit Date",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0,cProtect:!0},PI_descs:{cLabel:"Description",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0,cProtect:!0},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage1Data}},methods:{OnapplicationnoChange:function(e){var t=this;this.$nextTick(function(){if(t.M_AR_AmortizeRevenueCreditAllocationH.applicationno=e.id,t.M_AR_AmortizeRevenueCreditAllocationH.applicationnoLabel=e.label,"VIEW"!=t.inputStatus){t.PI_creditno.dataLookUp.ParamView="'"+t.getDataUser().SubPortfolioCd+"','"+e.id+"'";var i={OptionFunctionCd:"GetCreditAllocationData",ModuleCd:t.Module,SubPortfolioCd:t.getDataUser().SubPortfolioCd,ApplicationNo:e.id};t.FnDynamicFunction(i).then(function(e){null!=e&&e.length>0&&(t.M_AR_AmortizeRevenueCreditAllocationH.debtorcd=e[0].DebtorCd+t.separator+e[0].Name,t.M_AR_AmortizeRevenueCreditAllocationH.brandname=e[0].BrandName)})}}),this.$forceUpdate()},OncreditnoChange:function(e){var t=this;this.$nextTick(function(){if(t.M_AR_AmortizeRevenueCreditAllocationH.creditno=e.id,t.M_AR_AmortizeRevenueCreditAllocationH.creditnoLabel=e.label,"VIEW"!=t.inputStatus){var i={OptionFunctionCd:"GetCreditNoDataInRevenueAllocationCredit",ModuleCd:t.Module,SubPortfolioCd:t.getDataUser().SubPortfolioCd,CreditNo:e.id,RevenueCreditAllocSeqNo:0};t.FnDynamicFunction(i).then(function(e){if(null!=e&&e.length>0){var i=e[0];t.M_AR_AmortizeRevenueCreditAllocationH.allocatedamt=t.isCurrency(0,t.decimal),t.M_AR_AmortizeRevenueCreditAllocationH.creditamt=t.isCurrency(i.CreditAmt,t.decimal),t.M_AR_AmortizeRevenueCreditAllocationH.allocationamt=t.isCurrency(i.TotalAmt,t.decimal),t.M_AR_AmortizeRevenueCreditAllocationH.creditdate=t.momentDateFormatting(i.CreditDate,"DD/MM/YYYY"),t.M_AR_AmortizeRevenueCreditAllocationH.descs=i.Descs}})}}),this.$forceUpdate()},OnremarksChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},setToolbarButton:function(){},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,t){},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){},M_Post:function(e){var t=this,i=this.FormToABSList().getRowSelected(),a=[];i.forEach(function(e){a.push({_Message_:"Credit No = "+e.RevenueCreditAllocSeqnNo,SubPortfolioCd:t.getDataUser().SubPortfolioCd,RevenueCreditAllocSeqnNo:e.RevenueCreditAllocSeqnNo,UserEdit:t.getDataUser().UserId,Source:e.Source})});var o={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:a};this.postJSONMulti(this.getUrlPostMulti(),o).then(function(e){null!=e&&t.$parent.resultPost()})},M_Insert:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,ApplicationNo:""==this.M_AR_AmortizeRevenueCreditAllocationH.applicationno||null==this.M_AR_AmortizeRevenueCreditAllocationH.applicationno?"NULL":this.M_AR_AmortizeRevenueCreditAllocationH.applicationno,CreditNo:""==this.M_AR_AmortizeRevenueCreditAllocationH.creditno||null==this.M_AR_AmortizeRevenueCreditAllocationH.creditno?"NULL":this.M_AR_AmortizeRevenueCreditAllocationH.creditno,Remarks:this.M_AR_AmortizeRevenueCreditAllocationH.remarks,UserInput:this.getDataUser().UserId};this.postJSON(this.getUrlInsert(),t).then(function(t){null!=t&&e.$parent.resultInsert(t.Message)})},M_Update:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,RevenueCreditAllocSeqnNo:this.M_AR_AmortizeRevenueCreditAllocationH.revenuecreditallocseqnno,ApplicationNo:""==this.M_AR_AmortizeRevenueCreditAllocationH.applicationno||null==this.M_AR_AmortizeRevenueCreditAllocationH.applicationno?"NULL":this.M_AR_AmortizeRevenueCreditAllocationH.applicationno,CreditNo:""==this.M_AR_AmortizeRevenueCreditAllocationH.creditno||null==this.M_AR_AmortizeRevenueCreditAllocationH.creditno?"NULL":this.M_AR_AmortizeRevenueCreditAllocationH.creditno,Remarks:this.M_AR_AmortizeRevenueCreditAllocationH.remarks,UserEdit:this.getDataUser().UserId,LastUpdateStamp:this.M_AR_AmortizeRevenueCreditAllocationH.lastupdatestamp};this.postJSON(this.getUrlUpdate(),t).then(function(t){null!=t&&e.$parent.resultUpdate(t.Message)})},M_ClearForm:function(){this.M_AR_AmortizeRevenueCreditAllocationH={subportfoliocd:this.getDataUser().SubPortfolioCd,applicationno:"",creditno:"",remarks:"",status:"",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:0,revenuecreditallocseqnno:0,rowid:0,debtorcd:"",brandname:"",name:"",creditdate:"",descs:"",creditamt:"",netallocatedamt:"",withholdingallocatedamt:"",allocationamt:"",allocatedamt:"",witholdingamt:""}},M_New:function(){},M_Edit:function(){},M_Delete:function(e){var t=this,i=this.FormToABSList().getRowSelected(),a=[];i.forEach(function(e){a.push({RevenueCreditAllocSeqnNo:e.RevenueCreditAllocSeqnNo,ApplicationNo:e.ApplicationNo,LastUpdateStamp:e.LastUpdateStamp,_Message_:""})});var o={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:a};this.postJSONMulti(this.getUrlNewDeleteMulti(),o).then(function(e){null!=e&&t.$parent.resultDelete("Deleting Data Successfully")})},getDataBy:function(e){var t=this,i={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,revenuecreditallocseqnno:e.RevenueCreditAllocSeqnNo};this.postEncode(this.getUrlById(),i).then(function(i){if(null!=i){var a=i.Data[0];t.M_AR_AmortizeRevenueCreditAllocationH={subportfoliocd:a.subportfoliocd,applicationno:a.applicationno,creditno:a.creditno,remarks:a.remarks,status:a.status,userinput:a.userinput,useredit:a.useredit,timeinput:a.timeinput,timeedit:a.timeedit,lastupdatestamp:e.LastUpdateStamp,revenuecreditallocseqnno:e.RevenueCreditAllocSeqnNo,rowid:a.rowid,debtorcd:a.debtorcd,brandname:a.brandname,name:a.name,creditdate:t.momentDateFormatting(a.creditdate,"DD/MM/YYYY"),descs:a.descs,creditamt:a.creditamt,netallocatedamt:t.isCurrency(a.netallocatedamt,t.decimal),withholdingallocatedamt:t.isCurrency(a.withholdingallocatedamt,t.decimal),allocationamt:t.isCurrency(a.allocationamt,t.decimal),allocatedamt:t.isCurrency(a.allocatedamt,t.decimal),witholdingamt:t.isCurrency(a.witholdingamt,t.decimal)},t.M_AR_AmortizeRevenueCreditAllocationH.applicationnoLabel=null!=t.M_AR_AmortizeRevenueCreditAllocationH.applicationno&&""!=t.M_AR_AmortizeRevenueCreditAllocationH.applicationno?a.applicationno+t.separator+a.applicationno:"",t.M_AR_AmortizeRevenueCreditAllocationH.creditnoLabel=null!=t.M_AR_AmortizeRevenueCreditAllocationH.creditno&&""!=t.M_AR_AmortizeRevenueCreditAllocationH.creditno?a.creditno+t.separator+a.creditno:"",t.IEBy.Input=a.userinput,t.IEBy.Edit=a.useredit}})}},beforeCreate:function(){},created:function(){this.$store.commit("setFormType","ListProcess"),this.getToolbar().ProcessPS()},beforeMount:function(){},mounted:function(){this.hideSideBarMenu(),this.FormToABSList().doGetList("","eb_getList")},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),r=n,l=i("2877"),c=Object(l["a"])(r,a,o,!1,null,null,null);c.options.__file="AR_AmortizeRevenueCreditAllocationH.vue";t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0e13d2.9f0a5513.js.map