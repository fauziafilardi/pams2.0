(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c0c83"],{"42f5":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ABSListVuex",{attrs:{prop:e.propList,title:e.data.QueryName},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table,refreshColumn:e.$parent.refreshColumn}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[a("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                    Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),a("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),a("b-collapse",{attrs:{id:"collapse1",visible:!0}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[a("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[a("b-row",{staticStyle:{"padding-left":"10px"}},[a("b-col",{attrs:{md:"12",id:"col-left"}},[a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_trxtype",attrs:{prop:e.PI_trxtype,value:e.M_TN_TransactionTypeMapping.trxtype,label:e.M_TN_TransactionTypeMapping.trxtypeLabel},on:{change:e.OntrxtypeChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelect2",{ref:"ref_tenancychargetype",attrs:{prop:e.PI_tenancychargetype,value:e.M_TN_TransactionTypeMapping.tenancychargetype,label:e.M_TN_TransactionTypeMapping.tenancychargetypeLabel},on:{change:e.OntenancychargetypeChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_billingday",attrs:{prop:e.PI_billingday},model:{value:e.M_TN_TransactionTypeMapping.billingday,callback:function(t){e.$set(e.M_TN_TransactionTypeMapping,"billingday",t)},expression:"M_TN_TransactionTypeMapping.billingday"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_billingmonth",attrs:{prop:e.PI_billingmonth},model:{value:e.M_TN_TransactionTypeMapping.billingmonth,callback:function(t){e.$set(e.M_TN_TransactionTypeMapping,"billingmonth",t)},expression:"M_TN_TransactionTypeMapping.billingmonth"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_billingdueday",attrs:{prop:e.PI_billingdueday},model:{value:e.M_TN_TransactionTypeMapping.billingdueday,callback:function(t){e.$set(e.M_TN_TransactionTypeMapping,"billingdueday",t)},expression:"M_TN_TransactionTypeMapping.billingdueday"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_billingduemonth",attrs:{prop:e.PI_billingduemonth},model:{value:e.M_TN_TransactionTypeMapping.billingduemonth,callback:function(t){e.$set(e.M_TN_TransactionTypeMapping,"billingduemonth",t)},expression:"M_TN_TransactionTypeMapping.billingduemonth"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSTextAreaVuex",{ref:"ref_remarks",attrs:{prop:e.PI_remarks},on:{input:e.OnremarksChange},model:{value:e.M_TN_TransactionTypeMapping.remarks,callback:function(t){e.$set(e.M_TN_TransactionTypeMapping,"remarks",t)},expression:"M_TN_TransactionTypeMapping.remarks"}})],1)],1)],1)],1),a("ABSTAnalysis",{attrs:{prop:e.PTAnalysis}})],1)],1)],1)],1)],1)],1)},n=[],r=(a("ac6a"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{cInsertKey:"",FormType:"List",Module:"TN",propList:{initialWhere:"SubPortfolioCd='"+this.getDataUser().SubPortfolioCd+"'",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_TN_TransactionTypeMapping:{trxtype:"",tenancychargetype:"B",remarks:"",billingduemonth:"0",billingmonth:"0",billingday:"0",billingdueday:"0",descs:"",userinput:"",useredit:this.getDataUser().UserId,subportfoliocd:this.getDataUser().SubPortfolioCd,lastupdatestamp:0,rowid:0},PI_trxtype:{dataLookUp:{LookUpCd:"GetTransTypeAR",ColumnDB:"TrxType",InitialWhere:"ModuleCd='AR'and TrxClass in ('I','T') and SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"'",ParamWhere:""},cValidate:"",cName:"trxtype",cLabel:"Trans. Type",cKey:!1,cLabelSize:4,cOrder:1,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"TrxType,Descs"},PI_tenancychargetype:{dataLookUp:null,cValidate:"",cName:"tenancychargetype",cLabel:"Charge Type",cLabelSize:4,cOrder:2,cKey:!1,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!0,cOption:[{label:"Down Payment",id:"A"},{label:"Rental Installment",id:"B"},{label:"Revenue Share",id:"C"},{label:"Service Charge",id:"D"},{label:"Sinking Fund",id:"E"},{label:"Promotion Levy",id:"F"},{label:"Food Court Levy",id:"G"},{label:"Administration",id:"H"},{label:"Sublease",id:"I"},{label:"Assignment",id:"J"},{label:"Rental Deposit",id:"1"},{label:"Service Charge Deposit",id:"2"},{label:"Telephone Deposit",id:"3"},{label:"Fit Out Deposit",id:"4"},{label:"Other Charges",id:"Y"},{label:"Other Deposit",id:"Z"},{label:"Penalty Rental",id:"K"},{label:"Penalty Service Charge",id:"L"}],cMasterUrl:"",cDisplayColumn:""},PI_billingday:{cValidate:"required",cName:"billingday",cLabel:"Billing Day",cLabelSize:4,cOrder:3,cKey:!1,cType:"numeric",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_billingmonth:{cValidate:"required",cName:"billingmonth",cLabel:"Billing Month",cLabelSize:4,cOrder:4,cKey:!1,cType:"numeric",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_billingdueday:{cValidate:"max:2",cName:"billingdueday",cLabel:"Billing Due Day",cLabelSize:4,cOrder:5,cKey:!1,cType:"numeric",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_billingduemonth:{cValidate:"max:2",cName:"billingduemonth",cLabel:"Billing Due Month",cLabelSize:4,cOrder:6,cKey:!1,cType:"numeric",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_remarks:{cValidate:"",cName:"remarks",cLabel:"Remarks",cLabelSize:4,cOrder:7,cKey:!1,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage1Data}},methods:{OntrxtypeChange:function(e){var t=this;this.$nextTick(function(){t.M_TN_TransactionTypeMapping.trxtype=e.id,t.M_TN_TransactionTypeMapping.trxtypeLabel=e.label,t.inputStatus}),this.$forceUpdate()},OnremarksChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},OntenancychargetypeChange:function(e){var t=this;this.M_TN_TransactionTypeMapping.tenancychargetype=e.id,this.M_TN_TransactionTypeMapping.tenancychargetypeLabel=e.label,this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},setToolbarButton:function(){},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,t){},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){},M_Post:function(e){},M_Insert:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,TransType:""==this.M_TN_TransactionTypeMapping.trxtype||null==this.M_TN_TransactionTypeMapping.trxtype?"NULL":this.M_TN_TransactionTypeMapping.trxtype,TenancyChargeType:this.M_TN_TransactionTypeMapping.tenancychargetype,BillingDay:this.M_TN_TransactionTypeMapping.billingday,BillingMonth:this.M_TN_TransactionTypeMapping.billingmonth,BillingDueDay:this.M_TN_TransactionTypeMapping.billingdueday,BillingDueMonth:this.M_TN_TransactionTypeMapping.billingduemonth,Remarks:this.M_TN_TransactionTypeMapping.remarks,UserInput:this.getDataUser().UserId};this.postJSON(this.getUrlInsert(),t).then(function(t){null!=t&&e.$parent.resultInsert(t.Message)})},M_Update:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,TransType:""==this.M_TN_TransactionTypeMapping.trxtype||null==this.M_TN_TransactionTypeMapping.trxtype?"NULL":this.M_TN_TransactionTypeMapping.trxtype,TenancyChargeType:this.M_TN_TransactionTypeMapping.tenancychargetype,BillingDay:this.M_TN_TransactionTypeMapping.billingday,BillingMonth:this.M_TN_TransactionTypeMapping.billingmonth,BillingDueDay:this.M_TN_TransactionTypeMapping.billingdueday,BillingDueMonth:this.M_TN_TransactionTypeMapping.billingduemonth,Remarks:this.M_TN_TransactionTypeMapping.remarks,UserEdit:this.getDataUser().UserId,LastUpdateStamp:this.M_TN_TransactionTypeMapping.lastupdatestamp};this.postJSON(this.getUrlUpdate(),t).then(function(t){null!=t&&e.$parent.resultUpdate(t.Message)})},M_ClearForm:function(){this.M_TN_TransactionTypeMapping={trxtype:"",tenancychargetype:"B",remarks:"",billingduemonth:"",billingmonth:"",billingday:"",billingdueday:"",descs:"",userinput:"",useredit:this.getDataUser().UserId,subportfoliocd:this.getDataUser().SubPortfolioCd,lastupdatestamp:0,rowid:0}},M_New:function(){},M_Edit:function(){},M_Delete:function(e){var t=this,a=this.FormToABSList().getRowSelected(),i=[];a.forEach(function(e){i.push({TransType:e.TransType,LastUpdateStamp:e.LastUpdateStamp,_Message_:""})});var n={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:i};this.postJSONMulti(this.getUrlNewDeleteMulti(),n).then(function(e){null!=e&&t.$parent.resultDelete()})},getDataBy:function(e){var t=this,a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,TransType:e.TrxType};this.postEncode(this.getUrlById(),a).then(function(a){if(null!=a){var i=a.Data[0];t.M_TN_TransactionTypeMapping={trxtype:i.trxtype,tenancychargetype:i.tenancychargetype,remarks:i.remarks,billingduemonth:i.billingduemonth,billingmonth:i.billingmonth,billingday:i.billingday,billingdueday:i.billingdueday,descs:i.descs,userinput:i.userinput,useredit:i.useredit,subportfoliocd:i.subportfoliocd,lastupdatestamp:e.LastUpdateStamp,rowid:t.isCurrency(i.rowid,t.decimal)},t.M_TN_TransactionTypeMapping.trxtypeLabel=null!=t.M_TN_TransactionTypeMapping.trxtype&&""!=t.M_TN_TransactionTypeMapping.trxtype?i.trxtype+t.separator+i.descs:"",t.IEBy.Input=i.userinput,t.IEBy.Edit=i.useredit}})}},beforeCreate:function(){},created:function(){this.$store.commit("setFormType","List"),this.getToolbar().ProcessPS()},beforeMount:function(){},mounted:function(){this.hideSideBarMenu(),this.FormToABSList().doGetList("","eb_getList")},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),s=r,l=a("2877"),o=Object(l["a"])(s,i,n,!1,null,null,null);o.options.__file="TN_TransactionTypeMapping.vue";t["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d0c0c83.f8ca7ca7.js.map