(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d08fd"],{6904:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("ABSListVuex",{attrs:{prop:e.propList,title:e.data.QueryName},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table,refreshColumn:e.$parent.refreshColumn}}),r("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[r("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[r("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                    Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),r("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),r("b-collapse",{attrs:{id:"collapse1",visible:!0}},[r("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[r("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[r("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[r("b-row",{staticStyle:{"padding-left":"10px"}},[r("b-col",{attrs:{md:"12",id:"col-left"}},[r("b-row",[r("b-col",{attrs:{md:"6"}},[r("ABSinputTextVuex",{ref:"ref_overtimecd",attrs:{prop:e.PI_overtimecd},model:{value:e.M_TN_Overtime.overtimecd,callback:function(t){e.$set(e.M_TN_Overtime,"overtimecd",t)},expression:"M_TN_Overtime.overtimecd"}})],1)],1),r("b-row",[r("b-col",{attrs:{md:"6"}},[r("ABSinputTextVuex",{ref:"ref_descs",attrs:{prop:e.PI_descs},model:{value:e.M_TN_Overtime.descs,callback:function(t){e.$set(e.M_TN_Overtime,"descs",t)},expression:"M_TN_Overtime.descs"}})],1)],1),r("b-row",[r("b-col",{attrs:{md:"6"}},[r("ABSInputSelectList",{ref:"ref_trxtype",attrs:{prop:e.PI_trxtype,value:e.M_TN_Overtime.trxtype,label:e.M_TN_Overtime.trxtypeLabel},on:{change:e.OntrxtypeChange}})],1)],1),r("b-row",[r("b-col",{attrs:{md:"6"}},[r("ABSInputSelectList",{ref:"ref_currencycd",attrs:{prop:e.PI_currencycd,value:e.M_TN_Overtime.currencycd,label:e.M_TN_Overtime.currencycdLabel},on:{change:e.OncurrencycdChange}})],1)],1),r("b-row",[r("b-col",{attrs:{md:"6"}},[r("ABSInputSelectList",{ref:"ref_taxcd",attrs:{prop:e.PI_taxcd,value:e.M_TN_Overtime.taxcd,label:e.M_TN_Overtime.taxcdLabel},on:{change:e.OntaxcdChange}})],1)],1),r("b-row",[r("b-col",{attrs:{md:"6"}},[r("ABSInputSelectList",{ref:"ref_credittermscd",attrs:{prop:e.PI_credittermscd,value:e.M_TN_Overtime.credittermscd,label:e.M_TN_Overtime.credittermscdLabel},on:{change:e.OncredittermscdChange}})],1)],1),r("b-row",[r("b-col",{attrs:{md:"6"}},[r("ABSinputRadioButtonVuex",{ref:"ref_chargetype",attrs:{prop:e.PI_chargetype},on:{input:e.OnchargetypeChange},model:{value:e.M_TN_Overtime.chargetype,callback:function(t){e.$set(e.M_TN_Overtime,"chargetype",t)},expression:"M_TN_Overtime.chargetype"}})],1)],1),r("b-row",[r("b-col",{attrs:{md:"6"}},[r("ABSinputTextVuex",{ref:"ref_chargevalue",attrs:{prop:e.PI_chargevalue},model:{value:e.M_TN_Overtime.chargevalue,callback:function(t){e.$set(e.M_TN_Overtime,"chargevalue",t)},expression:"M_TN_Overtime.chargevalue"}})],1)],1),r("b-row",[r("b-col",{attrs:{md:"6"}},[r("ABSTextAreaVuex",{ref:"ref_remarks",attrs:{prop:e.PI_remarks},on:{input:e.OnremarksChange},model:{value:e.M_TN_Overtime.remarks,callback:function(t){e.$set(e.M_TN_Overtime,"remarks",t)},expression:"M_TN_Overtime.remarks"}})],1)],1)],1)],1),r("ABSTAnalysis",{attrs:{prop:e.PTAnalysis}})],1)],1)],1)],1)],1)],1)},i=[],c=r("ade3"),s=(r("ac6a"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{cInsertKey:"",FormType:"List",Module:"TN",propList:{initialWhere:"SubPortfolioCd='"+this.getDataUser().SubPortfolioCd+"'",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_TN_Overtime:{subportfoliocd:this.getDataUser().SubPortfolioCd,overtimecd:"",descs:"",trxtype:"",modulecd:"AR",currencycd:"",taxcd:"",credittermscd:"",chargetype:"F",chargevalue:"0",remarks:"",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:0,t0:"",t1:"",t2:"",t3:"",t4:"",t5:"",t6:"",t7:"",t8:"",t9:"",t10:"",t11:"",t12:"",t13:"",t14:"",t15:"",t16:"",t17:"",t18:"",t19:"",t20:"",t21:"",t22:"",t23:"",t24:"",t25:"",t26:"",t27:"",t28:"",t29:"",t30:"",controlsequenceno:0,rowid:0,taxdescs:"",currencydescs:"",credittermsdescs:"",trxtypedescs:""},PI_overtimecd:{cValidate:"required|max:5",cName:"overtimecd",cLabel:"Overtime Code",cLabelSize:4,cOrder:0,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_descs:{cValidate:"required|max:60",cName:"descs",cLabel:"Description",cLabelSize:4,cOrder:1,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_trxtype:{dataLookUp:{LookUpCd:"GetLookupCMTransTypeBySubPortfolio",ColumnDB:"TrxType",InitialWhere:"SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"' AND ModuleCd = 'AR' AND TrxClass='I' ",ParamWhere:""},cValidate:"required",cName:"trxtype",cLabel:"Trans. Type",cKey:!1,cLabelSize:4,cOrder:2,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"AR/AR_TransactionTypeSubPortfolioMaintenance",cDisplayColumn:"TrxType,Descs"},PI_currencycd:{dataLookUp:{LookUpCd:"GetLookupCMCurrency",ColumnDB:"CurrencyCd",InitialWhere:"",ParamWhere:""},cValidate:"required",cName:"currencycd",cLabel:"Currency",cKey:!1,cLabelSize:4,cOrder:3,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"CM/CM_Currency",cDisplayColumn:"CurrencyCd,Descs"},PI_taxcd:{dataLookUp:{LookUpCd:"GetLookupCMTaxCode",ColumnDB:"TaxCd",InitialWhere:"",ParamWhere:""},cValidate:"required",cName:"taxcd",cLabel:"Tax",cKey:!1,cLabelSize:4,cOrder:4,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"CM/CM_TaxMaster",cDisplayColumn:"TaxCd, Descs"},PI_credittermscd:{dataLookUp:{LookUpCd:"GetLookupCMCreditTerms",ColumnDB:"CreditTermsCd",InitialWhere:"",ParamWhere:""},cValidate:"required",cName:"credittermscd",cLabel:"Credit Term",cKey:!1,cLabelSize:4,cOrder:5,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"CM/CM_CreditTerms",cDisplayColumn:"CreditTermsCd,Descs"},PI_chargetype:{cValidate:"",cName:"chargetype",cId:"rdbchargetype",cRadioOptions:[{text:"Fix",value:"F"},{text:"Hourly",value:"H"}],cRadioDefaultOption:"F",cLabel:"Charge Type",cLabelSize:4,cOrder:6,cProtect:!1,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_chargevalue:{cValidate:"required|max:13",cName:"chargevalue",cLabel:"Charge Value",cLabelSize:4,cOrder:7,cKey:!1,cType:"decimal",cDecimal:2,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_remarks:{cValidate:"",cName:"remarks",cLabel:"Remarks",cLabelSize:4,cOrder:8,cKey:!1,cType:"text",cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage1Data}},methods:{OntrxtypeChange:function(e){var t=this;this.$nextTick(function(){t.M_TN_Overtime.trxtype=e.id,t.M_TN_Overtime.trxtypeLabel=e.id+" | "+e.label,"EDIT"!=t.inputStatus&&(t.M_TN_Overtime.trxtype=e.id,t.M_TN_Overtime.trxtypeLabel=e.id+" | "+e.label,t.M_TN_Overtime.currencycd=e.Currency,t.M_TN_Overtime.currencycdLabel=e.Currency,t.M_TN_Overtime.taxcd=e.Tax,t.M_TN_Overtime.taxcdLabel=e.Tax)}),this.$forceUpdate()},OncurrencycdChange:function(e){var t=this;this.$nextTick(function(){t.M_TN_Overtime.currencycd=e.id,t.M_TN_Overtime.currencycdLabel=e.label,t.inputStatus}),this.$forceUpdate()},OntaxcdChange:function(e){var t=this;this.$nextTick(function(){t.M_TN_Overtime.taxcd=e.id,t.M_TN_Overtime.taxcdLabel=e.label,t.inputStatus}),this.$forceUpdate()},OncredittermscdChange:function(e){var t=this;this.$nextTick(function(){t.M_TN_Overtime.credittermscd=e.id,t.M_TN_Overtime.credittermscdLabel=e.label,t.inputStatus}),this.$forceUpdate()},OnchargetypeChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},OnremarksChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},setToolbarButton:function(){},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,t){},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){},M_Post:function(e){},M_Insert:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,OvertimeCd:this.M_TN_Overtime.overtimecd.toUpperCase(),TrxType:""==this.M_TN_Overtime.trxtype||null==this.M_TN_Overtime.trxtype?"NULL":this.M_TN_Overtime.trxtype,ModuleCd:"AR   ",Descs:this.M_TN_Overtime.descs,CurrencyCd:""==this.M_TN_Overtime.currencycd||null==this.M_TN_Overtime.currencycd?"NULL":this.M_TN_Overtime.currencycd,TaxCd:""==this.M_TN_Overtime.taxcd||null==this.M_TN_Overtime.taxcd?"NULL":this.M_TN_Overtime.taxcd,CreditTermsCd:""==this.M_TN_Overtime.credittermscd||null==this.M_TN_Overtime.credittermscd?"NULL":this.M_TN_Overtime.credittermscd,ChargeType:this.M_TN_Overtime.chargetype,ChargeValue:this.M_TN_Overtime.chargevalue?this.replaceAllString(this.M_TN_Overtime.chargevalue,",","","number"):0,Remarks:this.M_TN_Overtime.remarks,UserInput:this.getDataUser().UserId,UserEdit:this.getDataUser().UserId};this.postJSON(this.getUrlInsert(),t).then(function(t){null!=t&&e.$parent.resultInsert(t.Message)})},M_Update:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,OvertimeCd:this.M_TN_Overtime.overtimecd.toUpperCase(),TrxType:""==this.M_TN_Overtime.trxtype||null==this.M_TN_Overtime.trxtype?"NULL":this.M_TN_Overtime.trxtype,ModuleCd:this.M_TN_Overtime.modulecd,Descs:this.M_TN_Overtime.descs,CurrencyCd:""==this.M_TN_Overtime.currencycd||null==this.M_TN_Overtime.currencycd?"NULL":this.M_TN_Overtime.currencycd,TaxCd:""==this.M_TN_Overtime.taxcd||null==this.M_TN_Overtime.taxcd?"NULL":this.M_TN_Overtime.taxcd,CreditTermsCd:""==this.M_TN_Overtime.credittermscd||null==this.M_TN_Overtime.credittermscd?"NULL":this.M_TN_Overtime.credittermscd,ChargeType:this.M_TN_Overtime.chargetype,ChargeValue:this.M_TN_Overtime.chargevalue?this.replaceAllString(this.M_TN_Overtime.chargevalue,",","","number"):0,Remarks:this.M_TN_Overtime.remarks,UserEdit:this.getDataUser().UserId,LastUpdateStamp:this.M_TN_Overtime.lastupdatestamp};this.postJSON(this.getUrlUpdate(),t).then(function(t){null!=t&&e.$parent.resultUpdate(t.Message)})},M_ClearForm:function(){this.M_TN_Overtime={subportfoliocd:this.getDataUser().SubPortfolioCd,overtimecd:"",descs:"",trxtype:"",modulecd:"",currencycd:"",taxcd:"",credittermscd:"",chargetype:"F",chargevalue:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:0,t0:"",t1:"",t2:"",t3:"",t4:"",t5:"",t6:"",t7:"",t8:"",t9:"",t10:"",t11:"",t12:"",t13:"",t14:"",t15:"",t16:"",t17:"",t18:"",t19:"",t20:"",t21:"",t22:"",t23:"",t24:"",t25:"",t26:"",t27:"",t28:"",t29:"",t30:"",controlsequenceno:0,rowid:0,taxdescs:"",currencydescs:"",credittermsdescs:"",trxtypedescs:""}},M_New:function(){},M_Edit:function(){},M_Delete:function(e){var t=this,r=this.FormToABSList().getRowSelected(),a=[];r.forEach(function(e){a.push({SubPortfolioCD:t.getDataUser().SubPortfolioCd,OvertimeCD:e.OvertimeCd,LastUpdateStamp:e.LastUpdateStamp,_Message_:""})});var i={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:a};this.postJSONMulti(this.getUrlNewDeleteMulti(),i).then(function(e){null!=e&&t.$parent.resultDelete()})},getDataBy:function(e){var t=this,r={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,overtimecd:e.OvertimeCd};this.postEncode(this.getUrlById(),r).then(function(r){var a;if(null!=r){var i=r.Data[0];t.M_TN_Overtime=(a={subportfoliocd:i.subportfoliocd,overtimecd:i.overtimecd,descs:i.descs,trxtype:i.trxtype,trxtypedescs:i.trxtypedescs,modulecd:i.modulecd,currencycd:i.currencycd,currencydescs:i.currencydescs,taxcd:i.taxcd,taxdescs:i.taxdescs,credittermscd:i.credittermscd,credittermsdescs:i.credittermsdescs,chargetype:i.chargetype,chargevalue:t.isCurrency(i.chargevalue,t.decimal),remarks:i.remarks,userinput:i.userinput,useredit:i.useredit,timeinput:i.timeinput,timeedit:i.timeedit,lastupdatestamp:e.LastUpdateStamp,t0:i.t0,t1:i.t1,t2:i.t2,t3:i.t3,t4:i.t4,t5:i.t5,t6:i.t6,t7:i.t7,t8:i.t8,t9:i.t9,t10:i.t10,t11:i.t11,t12:i.t12,t13:i.t13,t14:i.t14,t15:i.t15,t16:i.t16,t17:i.t17,t18:i.t18,t19:i.t19,t20:i.t20,t21:i.t21,t22:i.t22,t23:i.t23,t24:i.t24,t25:i.t25,t26:i.t26,t27:i.t27,t28:i.t28,t29:i.t29,t30:i.t30,controlsequenceno:t.isCurrency(i.controlsequenceno,t.decimal),rowid:t.isCurrency(i.rowid,t.decimal)},Object(c["a"])(a,"taxcd",i.taxcd),Object(c["a"])(a,"taxdescs",i.taxdescs),Object(c["a"])(a,"currencydescs",i.currencydescs),Object(c["a"])(a,"credittermsdescs",i.credittermsdescs),Object(c["a"])(a,"trxtypedescs",i.trxtypedescs),a),t.M_TN_Overtime.trxtypeLabel=null!=t.M_TN_Overtime.trxtype&&""!=t.M_TN_Overtime.trxtype?i.trxtype+t.separator+i.trxtypedescs:"",t.M_TN_Overtime.currencycdLabel=null!=t.M_TN_Overtime.currencycd&&""!=t.M_TN_Overtime.currencycd?i.currencycd+t.separator+i.currencydescs:"",t.M_TN_Overtime.taxcdLabel=null!=t.M_TN_Overtime.taxcd&&""!=t.M_TN_Overtime.taxcd?i.taxcd+t.separator+i.taxdescs:"",t.M_TN_Overtime.credittermscdLabel=null!=t.M_TN_Overtime.credittermscd&&""!=t.M_TN_Overtime.credittermscd?i.credittermscd+t.separator+i.credittermsdescs:"",t.IEBy.Input=i.userinput,t.IEBy.Edit=i.useredit}})}},beforeCreate:function(){},created:function(){this.$store.commit("setFormType","List"),this.getToolbar().ProcessPS()},beforeMount:function(){},mounted:function(){this.hideSideBarMenu(),this.FormToABSList().doGetList("","eb_getList")},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),d=s,n=r("2877"),o=Object(n["a"])(d,a,i,!1,null,null,null);o.options.__file="TN_Overtime.vue";t["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d0d08fd.a171fba9.js.map