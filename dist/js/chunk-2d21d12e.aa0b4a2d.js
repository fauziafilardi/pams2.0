(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21d12e"],{d06b:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ABSListVuex",{attrs:{prop:e.propList,title:e.data.QueryName},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table,refreshColumn:e.$parent.refreshColumn}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[n("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[n("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                    Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),n("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),n("b-collapse",{attrs:{id:"collapse1",visible:!0}},[n("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[n("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[n("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[n("b-row",{staticStyle:{"padding-left":"10px"}},[n("b-col",{attrs:{md:"12",id:"col-left"}},[n("b-row",[n("b-col",{attrs:{md:"6"}},[n("ABSinputTextVuex",{ref:"ref_bankaccountno",attrs:{prop:e.PI_bankaccountno},model:{value:e.M_AR_DebtorBankAccount_OneBill.bankaccountno,callback:function(t){e.$set(e.M_AR_DebtorBankAccount_OneBill,"bankaccountno",t)},expression:"M_AR_DebtorBankAccount_OneBill.bankaccountno"}})],1)],1),n("b-row",[n("b-col",{attrs:{md:"6"}},[n("ABSInputSelectList",{ref:"ref_bankname",attrs:{prop:e.PI_bankname,value:e.M_AR_DebtorBankAccount_OneBill.bankname,label:e.M_AR_DebtorBankAccount_OneBill.banknameLabel},on:{change:e.OnbanknameChange}})],1)],1),n("b-row",[n("b-col",{attrs:{md:"6"}},[n("ABSInputSelectList",{ref:"ref_trxtypegroupcd",attrs:{prop:e.PI_trxtypegroupcd,value:e.M_AR_DebtorBankAccount_OneBill.trxtypegroupcd,label:e.M_AR_DebtorBankAccount_OneBill.trxtypegroupcdLabel},on:{change:e.OntrxtypegroupcdChange}})],1)],1),n("b-row",[n("b-col",{attrs:{md:"6"}},[n("ABSinputTextVuex",{ref:"ref_referenceno",attrs:{prop:e.PI_referenceno},model:{value:e.M_AR_DebtorBankAccount_OneBill.referenceno,callback:function(t){e.$set(e.M_AR_DebtorBankAccount_OneBill,"referenceno",t)},expression:"M_AR_DebtorBankAccount_OneBill.referenceno"}})],1)],1),n("b-row",[n("b-col",{attrs:{md:"6"}},[n("ABSTextAreaVuex",{ref:"ref_remarks",attrs:{prop:e.PI_remarks},on:{input:e.OnremarksChange},model:{value:e.M_AR_DebtorBankAccount_OneBill.remarks,callback:function(t){e.$set(e.M_AR_DebtorBankAccount_OneBill,"remarks",t)},expression:"M_AR_DebtorBankAccount_OneBill.remarks"}})],1)],1)],1)],1),n("ABSTAnalysis",{attrs:{prop:e.PTAnalysis}})],1)],1)],1)],1)],1)],1)},o=[],r=(n("ac6a"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{DataRow:null,ValKey:null,FormType:"List",Module:"OB",propList:{initialWhere:"DebtorCd = '"+this.ValKey+"'",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_AR_DebtorBankAccount_OneBill:{bankaccountno:"",bankname:"",trxtypegroupcd:"",descs:"",referenceno:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,subportfoliocd:"",debtorcd:"",contactid:"",bankcd:"",timeedit:"",lastupdatestamp:0,rowid:0},PI_bankaccountno:{cValidate:"required|max:30",cName:"bankaccountno",cLabel:"Bank Account No",cLabelSize:4,cOrder:1,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_bankname:{dataLookUp:{LookUpCd:"GetluBankCd",ColumnDB:"BankCd",InitialWhere:"",ParamWhere:""},cValidate:"required",cName:"bankname",cLabel:"Bank Name",cKey:!1,cLabelSize:4,cOrder:2,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"BankCd,BankName"},PI_trxtypegroupcd:{dataLookUp:{LookUpCd:"GetLookupTrxTypeGroup",ColumnDB:"TrxTypeGroupCd",InitialWhere:"ModuleCd = 'AR'",ParamWhere:""},cValidate:"",cName:"trxtypegroupcd",cLabel:"TrxType Group Code (For Upload Bank)",cKey:!1,cLabelSize:4,cOrder:3,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"TrxTypeGroupCd,Descs"},PI_referenceno:{cValidate:"max:20",cName:"referenceno",cLabel:"Reference No",cLabelSize:4,cOrder:4,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_remarks:{cValidate:"",cName:"remarks",cLabel:"Remarks",cLabelSize:4,cOrder:5,cKey:!1,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage2Data},DataRowPage1:function(){return this.$store.getters.GetPage1Data}},methods:{OnbanknameChange:function(e){var t=this;this.$nextTick(function(){t.M_AR_DebtorBankAccount_OneBill.bankname=e.id,t.M_AR_DebtorBankAccount_OneBill.banknameLabel=e.label,t.inputStatus}),this.$forceUpdate()},OntrxtypegroupcdChange:function(e){var t=this;this.$nextTick(function(){t.M_AR_DebtorBankAccount_OneBill.trxtypegroupcd=e.id,t.M_AR_DebtorBankAccount_OneBill.trxtypegroupcdLabel=e.label,t.inputStatus}),this.$forceUpdate()},OnremarksChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},setToolbarButton:function(){},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,t){},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){this.$parent.showForm=!1;var e=this.$store.getters.GetPage1Data;this.DataRow=e,console.log(e),this.M_AR_DebtorBankAccount_OneBill.subportfoliocd=e.SubPortFolioCd,this.M_AR_DebtorBankAccount_OneBill.debtorcd=e.DebtorCd,this.propList.initialWhere=" DebtorCd = '"+e.DebtorCd+"' ",this.FormToABSList().doGetList("","eb_getList")},M_Insert:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.M_AR_DebtorBankAccount_OneBill.subportfoliocd,DebtorCd:this.M_AR_DebtorBankAccount_OneBill.debtorcd,BankAccountNo:this.M_AR_DebtorBankAccount_OneBill.bankaccountno,BankCd:this.M_AR_DebtorBankAccount_OneBill.bankname,TrxTypeGroupCd:""==this.M_AR_DebtorBankAccount_OneBill.trxtypegroupcd||null==this.M_AR_DebtorBankAccount_OneBill.trxtypegroupcd?"NULL":this.M_AR_DebtorBankAccount_OneBill.trxtypegroupcd,ReferenceNo:this.M_AR_DebtorBankAccount_OneBill.referenceno,Remarks:this.M_AR_DebtorBankAccount_OneBill.remarks,UserInput:this.getDataUser().UserId,ContactID:this.M_AR_DebtorBankAccount_OneBill.contactid};this.postJSON(this.getUrlInsert(),t).then(function(t){null!=t&&e.$parent.resultInsert(t.Message)})},M_Update:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.M_AR_DebtorBankAccount_OneBill.subportfoliocd,DebtorCd:this.M_AR_DebtorBankAccount_OneBill.debtorcd,BankAccountNo:this.M_AR_DebtorBankAccount_OneBill.bankaccountno,BankCd:this.M_AR_DebtorBankAccount_OneBill.bankname,TrxTypeGroupCd:""==this.M_AR_DebtorBankAccount_OneBill.trxtypegroupcd||null==this.M_AR_DebtorBankAccount_OneBill.trxtypegroupcd?"NULL":this.M_AR_DebtorBankAccount_OneBill.trxtypegroupcd,ReferenceNo:this.M_AR_DebtorBankAccount_OneBill.referenceno,Remarks:this.M_AR_DebtorBankAccount_OneBill.remarks,UserEdit:this.getDataUser().UserId,LastUpdateStamp:this.M_AR_DebtorBankAccount_OneBill.lastupdatestamp,ContactID:this.M_AR_DebtorBankAccount_OneBill.contactid};this.postJSON(this.getUrlUpdate(),t).then(function(t){null!=t&&e.$parent.resultUpdate(t.Message)})},M_ClearForm:function(){this.M_AR_DebtorBankAccount_OneBill={bankaccountno:"",bankname:"",trxtypegroupcd:"",descs:"",referenceno:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,subportfoliocd:"",debtorcd:"",contactid:"",bankcd:"",timeedit:"",lastupdatestamp:0,rowid:0}},M_New:function(){var e=this.$store.getters.GetPage1Data;this.M_AR_DebtorBankAccount_OneBill.subportfoliocd=e.SubPortFolioCd,this.M_AR_DebtorBankAccount_OneBill.debtorcd=e.DebtorCd,this.M_AR_DebtorBankAccount_OneBill.contactid=e.ContactID},M_Edit:function(){},M_Delete:function(e){var t=this,n=this.FormToABSList().getRowSelected(),a=[];n.forEach(function(e){a.push({DebtorCd:e.DebtorCd,ContactID:e.ContactID,SubPortFolioCd:e.SubPortfolioCd,BankAccountNo:e.BankAccountNo,LastUpdateStamp:e.LastUpdateStamp,_Message_:""})});var o={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:a};this.postJSONMulti(this.getUrlNewDeleteMulti(),o).then(function(e){null!=e&&t.$parent.resultDelete()})},getDataBy:function(e){var t=this,n={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,subportfoliocd:e.SubPortfolioCd,debtorcd:e.DebtorCd,bankaccountno:e.BankAccountNo,contactid:e.ContactID};this.postEncode(this.getUrlById(),n).then(function(n){if(null!=n){var a=n.Data[0];t.M_AR_DebtorBankAccount_OneBill={bankaccountno:a.bankaccountno,bankname:a.bankname,trxtypegroupcd:a.trxtypegroupcd,descs:a.descs,referenceno:a.referenceno,remarks:a.remarks,userinput:a.userinput,useredit:a.useredit,subportfoliocd:a.subportfoliocd,debtorcd:a.debtorcd,contactid:a.contactid,bankcd:a.bankcd,timeedit:a.timeedit,lastupdatestamp:e.LastUpdateStamp,rowid:a.rowid},t.M_AR_DebtorBankAccount_OneBill.banknameLabel=null!=t.M_AR_DebtorBankAccount_OneBill.bankname?a.bankcd+t.separator+a.bankname:"",t.M_AR_DebtorBankAccount_OneBill.trxtypegroupcdLabel=null!=t.M_AR_DebtorBankAccount_OneBill.trxtypegroupcd?a.trxtypegroupcd+t.separator+a.descs:"",t.IEBy.Input=a.userinput,t.IEBy.Edit=a.useredit}})},getSpec:function(){var e=this,t={OptionFunctionCd:"GetSubPortfolioOneBill",ModuleCd:"AR"};this.FnDynamicFunction(t).then(function(t){if(null!=t&&t.length>0){var n=t[0];e.SubPortfolioCd=n.SubPortfolioCd,e.PI_bankname.dataLookUp.InitialWhere="SubPortfolioCd='"+n.SubPortfolioCd+"' AND Status='A' ",e.FormToABSList().doGetList("","eb_getList")}})}},created:function(){},beforeMount:function(){},mounted:function(){this.hideSideBarMenu(),this.getSpec()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),c=r,i=n("2877"),s=Object(i["a"])(c,a,o,!1,null,null,null);s.options.__file="AR_DebtorBankAccount_OneBill.vue";t["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2d21d12e.aa0b4a2d.js.map