(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21a019"],{ba59:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ABSListVuex",{attrs:{prop:e.propList,title:e.data.QueryName},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table,refreshColumn:e.$parent.refreshColumn}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[a("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                    Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),a("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),a("b-collapse",{attrs:{id:"collapse1",visible:!0}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[a("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[a("b-row",{staticStyle:{"padding-left":"10px"}},[a("b-col",{attrs:{md:"12",id:"col-left"}},[a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_paymentsequenceno",attrs:{prop:e.PI_paymentsequenceno},model:{value:e.M_TN_TransactionTypeMappingProcess.paymentsequenceno,callback:function(t){e.$set(e.M_TN_TransactionTypeMappingProcess,"paymentsequenceno",t)},expression:"M_TN_TransactionTypeMappingProcess.paymentsequenceno"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputRadioButtonVuex",{ref:"ref_paymentcontrol",attrs:{prop:e.PI_paymentcontrol},on:{input:e.OnpaymentcontrolChange},model:{value:e.M_TN_TransactionTypeMappingProcess.paymentcontrol,callback:function(t){e.$set(e.M_TN_TransactionTypeMappingProcess,"paymentcontrol",t)},expression:"M_TN_TransactionTypeMappingProcess.paymentcontrol"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSTextAreaVuex",{ref:"ref_remarks",attrs:{prop:e.PI_remarks},on:{input:e.OnremarksChange},model:{value:e.M_TN_TransactionTypeMappingProcess.remarks,callback:function(t){e.$set(e.M_TN_TransactionTypeMappingProcess,"remarks",t)},expression:"M_TN_TransactionTypeMappingProcess.remarks"}})],1)],1)],1)],1),a("ABSTAnalysis",{attrs:{prop:e.PTAnalysis}})],1)],1)],1)],1)],1)],1)},n=[],i=(a("ac6a"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{ValKey:null,FormType:"List",Module:"TN",propList:{initialWhere:"TransType = '"+this.ValKey+"'",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_TN_TransactionTypeMappingProcess:{paymentsequenceno:0,trxtype:"",transtype:"",loistatus:"",lastatus:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,timeedit:"",timeinput:"",subportfoliocd:this.getDataUser().SubPortfolioCd,lastupdatestamp:0,rowid:0,paymentcontrol:"L"},PI_paymentsequenceno:{cValidate:"max:8",cName:"paymentsequenceno",cLabel:"Payment Sequence",cLabelSize:4,cOrder:1,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_paymentcontrol:{cValidate:"",cName:"paymentcontrol",cId:"rdbpaymentcontrol",cRadioOptions:[{text:"LOI",value:"L"},{text:"LA",value:"A"}],cRadioDefaultOption:"",cLabel:"Payment Control ",cLabelSize:4,cOrder:2,cProtect:!1,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_remarks:{cValidate:"",cName:"remarks",cLabel:"Remarks",cLabelSize:4,cOrder:3,cKey:!1,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage2Data},DataRowPage1:function(){return this.$store.getters.GetPage1Data}},methods:{OnpaymentcontrolChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},OnremarksChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},setToolbarButton:function(){},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,t){},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){this.$parent.showForm=!1;var e=this.$store.getters.GetPage1Data;this.M_TN_TransactionTypeMappingProcess.trxtype=e.TrxType,this.propList.initialWhere=" TrxType = '"+e.TrxType+"' ",this.FormToABSList().doGetList("","eb_getList")},M_Insert:function(){var e=this;"L"==this.M_TN_TransactionTypeMappingProcess.paymentcontrol?(this.M_TN_TransactionTypeMappingProcess.loistatus="Y",this.M_TN_TransactionTypeMappingProcess.lastatus="N"):"A"==this.M_TN_TransactionTypeMappingProcess.paymentcontrol&&(this.M_TN_TransactionTypeMappingProcess.loistatus="N",this.M_TN_TransactionTypeMappingProcess.lastatus="Y");var t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfoliocd:this.getDataUser().SubPortfolioCd,TransType:this.M_TN_TransactionTypeMappingProcess.trxtype,PaymentSequenceNo:this.M_TN_TransactionTypeMappingProcess.paymentsequenceno,LOIStatus:this.M_TN_TransactionTypeMappingProcess.loistatus,LAStatus:this.M_TN_TransactionTypeMappingProcess.lastatus,Remarks:this.M_TN_TransactionTypeMappingProcess.remarks,UserInput:this.getDataUser().UserId};this.postJSON(this.getUrlInsert(),t).then(function(t){null!=t&&e.$parent.resultInsert(t.Message)})},M_Update:function(){var e=this;"L"==this.M_TN_TransactionTypeMappingProcess.paymentcontrol?(this.M_TN_TransactionTypeMappingProcess.loistatus="Y",this.M_TN_TransactionTypeMappingProcess.lastatus="N"):"A"==this.M_TN_TransactionTypeMappingProcess.paymentcontrol&&(this.M_TN_TransactionTypeMappingProcess.loistatus="N",this.M_TN_TransactionTypeMappingProcess.lastatus="Y");var t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfoliocd:this.getDataUser().SubPortfolioCd,TransType:this.M_TN_TransactionTypeMappingProcess.trxtype,LOIStatus:this.M_TN_TransactionTypeMappingProcess.loistatus,LAStatus:this.M_TN_TransactionTypeMappingProcess.lastatus,Remarks:this.M_TN_TransactionTypeMappingProcess.remarks,UserEdit:this.getDataUser().UserId,LastUpdateStamp:this.M_TN_TransactionTypeMappingProcess.lastupdatestamp};this.postJSON(this.getUrlUpdate(),t).then(function(t){null!=t&&e.$parent.resultUpdate(t.Message)})},M_ClearForm:function(){this.M_TN_TransactionTypeMappingProcess={paymentsequenceno:0,trxtype:"",loistatus:"",lastatus:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,timeedit:"",timeinput:"",subportfoliocd:this.getDataUser().SubPortfolioCd,lastupdatestamp:0,rowid:0,paymentcontrol:"L"}},M_New:function(){var e=this.$store.getters.GetPage1Data;this.M_TN_TransactionTypeMappingProcess.trxtype=e.TrxType},M_Edit:function(){},M_Delete:function(e){var t=this,a=this.FormToABSList().getRowSelected(),s=[];a.forEach(function(e){s.push({TransType:e.trxtype,PaymentSequenceNo:e.PaymentSequenceNo,LastUpdateStamp:e.LastUpdateStamp,_Message_:""})});var n={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:s};this.postJSONMulti(this.getUrlNewDeleteMulti(),n).then(function(e){null!=e&&t.$parent.resultDelete()})},getDataBy:function(e){var t=this,a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,paymentsequentno:e.PaymentSequenceNo,transtype:e.trxtype,SubPortfolioCd:this.getDataUser().SubPortfolioCd};this.postEncode(this.getUrlById(),a).then(function(a){if(null!=a){var s=a.Data[0],n="";"Y"==s.loistatus&&(n="L"),"Y"==s.lastatus&&(n="A"),t.M_TN_TransactionTypeMappingProcess={paymentsequenceno:t.isCurrency(e.PaymentSequenceNo,t.decimal),transtype:s.trxtype,trxtype:s.trxtype,loistatus:s.loistatus,lastatus:s.lastatus,remarks:s.remarks,userinput:s.userinput,useredit:s.useredit,timeedit:s.timeedit,timeinput:s.timeinput,subportfoliocd:s.subportfoliocd,lastupdatestamp:e.LastUpdateStamp,rowid:t.isCurrency(s.rowid,t.decimal),paymentcontrol:n},t.IEBy.Input=s.userinput,t.IEBy.Edit=s.useredit}})}},created:function(){},beforeMount:function(){},mounted:function(){this.hideSideBarMenu()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),o=i,r=a("2877"),p=Object(r["a"])(o,s,n,!1,null,null,null);p.options.__file="TN_TransactionTypeMappingProcess.vue";t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d21a019.75299225.js.map