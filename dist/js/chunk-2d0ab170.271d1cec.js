(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ab170"],{1490:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ABSListVuex",{attrs:{prop:t.propList,title:t.data.QueryName},on:{rowClicked:t.$parent.rowClicked,rowDblClicked:t.$parent.doDoubleClick,rowLinkClick:t.$parent.rowLink,pageSize:t.$parent.M_PageSize,pagination:t.$parent.M_Pagination,filter:t.$parent.M_Advance_Filter,headTable:t.$parent.M_Head_Table,refreshColumn:t.$parent.refreshColumn}}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[a("span",{directives:[{name:"show",rawName:"v-show",value:t.IEBy.Input&&t.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[t._v("\n                Input By : "+t._s(t.IEBy.Input)+" | Edit By : "+t._s(t.IEBy.Edit)+" "),a("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),a("b-collapse",{attrs:{id:"collapse1",visible:!0}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[a("b-form",{attrs:{"data-vv-scope":"FormScope_"+t.PageLevel+"_"+t.TabIndex,"data-vv-value-path":"FormScope_"+t.PageLevel+"_"+t.TabIndex}},[a("b-row",{staticStyle:{"padding-left":"10px"}},[a("b-col",{attrs:{md:"6",id:"col-left"}},[a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSCompute",{ref:"ref_billingtype",attrs:{prop:t.PI_billingtype},model:{value:t.M_TN_StrataBilling.billingtype,callback:function(e){t.$set(t.M_TN_StrataBilling,"billingtype",e)},expression:"M_TN_StrataBilling.billingtype"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSInputSelectList",{ref:"ref_trxtype",attrs:{prop:t.PI_trxtype,value:t.M_TN_StrataBilling.trxtype,label:t.M_TN_StrataBilling.trxtypeLabel},on:{change:t.OntrxtypeChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSTextAreaVuex",{ref:"ref_descs",attrs:{prop:t.PI_descs},model:{value:t.M_TN_StrataBilling.descs,callback:function(e){t.$set(t.M_TN_StrataBilling,"descs",e)},expression:"M_TN_StrataBilling.descs"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputDateVuex",{ref:"ref_billingdate",attrs:{prop:t.PI_billingdate},on:{input:t.OnbillingdateChange},model:{value:t.M_TN_StrataBilling.billingdate,callback:function(e){t.$set(t.M_TN_StrataBilling,"billingdate",e)},expression:"M_TN_StrataBilling.billingdate"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputDateRangeVuex",{ref:"ref_trxdatefrom",attrs:{prop:t.PI_trxdatefrom,valueFrom:t.M_TN_StrataBilling.trxdatefrom,valueTo:t.M_TN_StrataBilling.trxdateto},on:{from:t.MdtRange_trxdatefrom,to:t.MdtRange_trxdateto}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSInputSelectList",{ref:"ref_currencycd",attrs:{prop:t.PI_currencycd,value:t.M_TN_StrataBilling.currencycd,label:t.M_TN_StrataBilling.currencycdLabel},on:{change:t.OncurrencycdChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSInputSelectList",{ref:"ref_credittermscd",attrs:{prop:t.PI_credittermscd,value:t.M_TN_StrataBilling.credittermscd,label:t.M_TN_StrataBilling.credittermscdLabel},on:{change:t.OncredittermscdChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputDateVuex",{ref:"ref_billingduedate",attrs:{prop:t.PI_billingduedate},on:{input:t.OnbillingduedateChange},model:{value:t.M_TN_StrataBilling.billingduedate,callback:function(e){t.$set(t.M_TN_StrataBilling,"billingduedate",e)},expression:"M_TN_StrataBilling.billingduedate"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputTextVuex",{ref:"ref_totalarea",attrs:{prop:t.PI_totalarea},on:{input:t.OntotalareaChange},model:{value:t.M_TN_StrataBilling.totalarea,callback:function(e){t.$set(t.M_TN_StrataBilling,"totalarea",e)},expression:"M_TN_StrataBilling.totalarea"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputTextVuex",{ref:"ref_billingrate",attrs:{prop:t.PI_billingrate},on:{input:t.OnbillingrateChange},model:{value:t.M_TN_StrataBilling.billingrate,callback:function(e){t.$set(t.M_TN_StrataBilling,"billingrate",e)},expression:"M_TN_StrataBilling.billingrate"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputTextVuex",{ref:"ref_billingamt",attrs:{prop:t.PI_billingamt},model:{value:t.M_TN_StrataBilling.billingamt,callback:function(e){t.$set(t.M_TN_StrataBilling,"billingamt",e)},expression:"M_TN_StrataBilling.billingamt"}})],1)],1)],1),a("b-col",{attrs:{md:"6",id:"col-left"}},[a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSCompute",{ref:"ref_status",attrs:{prop:t.PI_status},model:{value:t.M_TN_StrataBilling.status,callback:function(e){t.$set(t.M_TN_StrataBilling,"status",e)},expression:"M_TN_StrataBilling.status"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSCompute",{ref:"ref_invoiceno",attrs:{prop:t.PI_invoiceno},model:{value:t.M_TN_StrataBilling.invoiceno,callback:function(e){t.$set(t.M_TN_StrataBilling,"invoiceno",e)},expression:"M_TN_StrataBilling.invoiceno"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSInputSelectList",{ref:"ref_addresscd",attrs:{prop:t.PI_addresscd,value:t.M_TN_StrataBilling.addresscd,label:t.M_TN_StrataBilling.addresscdLabel},on:{change:t.OnaddresscdChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputRadioButtonVuex",{ref:"ref_billingmethod",attrs:{prop:t.PI_billingmethod},on:{input:t.OnbillingmethodChange},model:{value:t.M_TN_StrataBilling.billingmethod,callback:function(e){t.$set(t.M_TN_StrataBilling,"billingmethod",e)},expression:"M_TN_StrataBilling.billingmethod"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputRadioButtonVuex",{ref:"ref_termspayment",attrs:{prop:t.PI_termspayment},on:{input:t.OntermspaymentChange},model:{value:t.M_TN_StrataBilling.termspayment,callback:function(e){t.$set(t.M_TN_StrataBilling,"termspayment",e)},expression:"M_TN_StrataBilling.termspayment"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSTextAreaVuex",{ref:"ref_remarks",attrs:{prop:t.PI_remarks},on:{input:t.OnremarksChange},model:{value:t.M_TN_StrataBilling.remarks,callback:function(e){t.$set(t.M_TN_StrataBilling,"remarks",e)},expression:"M_TN_StrataBilling.remarks"}})],1)],1)],1)],1),a("ABSTAnalysis",{attrs:{prop:t.PTAnalysis}})],1)],1)],1)],1)],1)],1)},r=[],l=(a("ac6a"),a("cadf"),a("551c"),a("097d"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{ValKey:null,FormType:"List",Module:"TN",propList:{initialWhere:"Status <> 'X' AND SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' And LotNo = '"+this.ValKey+"' and ApplicationNo IS NULL",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"BillingDate ASC",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_TN_StrataBilling:{subportfoliocd:this.getDataUser().SubPortfolioCd,billingsequenceno:0,trxtype:"",modulecd:"",applicationno:"",lotno:"",wono:"",pmcontractno:"",facilitybookingno:"",debtorcd:"",installmentno:0,descs:"",billingdate:"",billingduedate:"",trxdatefrom:"",trxdateto:"",currencycd:"",taxcd:"",credittermscd:"",includediscount:"",discountcd:"",discountamt:0,totalarea:"0",billingrate:"0",billingamt:"0",baseamt:0,taxamt:0,billingtype:"",journaltype:"",billingmethod:"F",termspayment:"R",amortizestatus:"",journalcategory:"",addresscontactid:"",addresscd:"",tempno:"",debitno:"",postingdate:"",postedby:"",reasoncd:"",reasondescs:"",cancelby:"",canceldate:"",status:"New/Pending",inputmethod:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:0,t0:"",t1:"",t2:"",t3:"",t4:"",t5:"",t6:"",t7:"",t8:"",t9:"",t10:"",t11:"",t12:"",t13:"",t14:"",t15:"",t16:"",t17:"",t18:"",t19:"",t20:"",t21:"",t22:"",t23:"",t24:"",t25:"",t26:"",t27:"",t28:"",t29:"",t30:"",controlsequenceno:0,amortizemonthlyamt:0,blno:"",rowid:0,duedate:"",dueday:0,trxdescs:"",currencydescs:"",taxdescs:"",discountdescs:"",address1:"",credittermsdescs:"",contactid:"",invoiceno:""},PI_billingtype:{cLabel:"Charge Type",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_status:{cLabel:"Status",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_debtorcd:{cLabel:"",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_trxtype:{dataLookUp:{LookUpCd:"GetLookupTrxType_ALL",ColumnDB:"TrxType",InitialWhere:"ModuleCd = 'AR' AND TrxClass in ('I','T','P') AND TenancyChargeType IN ('Y','D','E') and SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"'",ParamWhere:""},cValidate:"required",cName:"trxtype",cLabel:"Transaction Type",cKey:!1,cLabelSize:4,cOrder:1,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"TrxType,Descs"},PI_invoiceno:{cLabel:"Invoice No",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_descs:{cValidate:"max:150",cName:"descs",cLabel:"Description",cLabelSize:4,cOrder:2,cKey:!1,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_addresscd:{dataLookUp:{LookUpCd:"GetLookupCMContactAndAddressSubportfolio",ColumnDB:"AddressCd",InitialWhere:"1=0",ParamWhere:""},cValidate:"required",cName:"addresscd",cLabel:"Address",cKey:!1,cLabelSize:4,cOrder:3,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"CM/CM_Contact",cDisplayColumn:"AddressCd,Address1"},PI_billingdate:{cValidate:"required",cName:"billingdate",cLabel:"Billing Date",cLabelSize:4,cOrder:4,cKey:!1,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_billingmethod:{cValidate:"",cName:"billingmethod2",cId:"rdbbillingmethod",cRadioOptions:[{text:"Full Month",value:"F"},{text:"Cut Off Date",value:"C"}],cRadioDefaultOption:"F",cLabel:"Amortize Method",cLabelSize:4,cOrder:5,cProtect:!1,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_trxdatefrom:{cValidate:"",cName:"trxdatefrom",cLabel:"Income Period Date From",cLabelSize:4,cOrder:6,cKey:!1,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_termspayment:{cValidate:"",cName:"termspayment2",cId:"rdbtermspayment",cRadioOptions:[{text:"In Advance",value:"R"},{text:"In Arrear",value:"C"}],cRadioDefaultOption:"R",cLabel:"Terms of Payment",cLabelSize:4,cOrder:7,cProtect:!1,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_currencycd:{dataLookUp:{LookUpCd:"GetLookupCMCurrency",ColumnDB:"CurrencyCd",InitialWhere:"",ParamWhere:""},cValidate:"required",cName:"currencycd",cLabel:"Currency",cKey:!1,cLabelSize:4,cOrder:8,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"CM/CM_CurrencyMaster",cDisplayColumn:"CurrencyCd,Descs"},PI_remarks:{cValidate:"",cName:"remarks",cLabel:"Remarks",cLabelSize:4,cOrder:9,cKey:!1,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_credittermscd:{dataLookUp:{LookUpCd:"GetLookupCMCreditTerms",ColumnDB:"CreditTermsCd",InitialWhere:"",ParamWhere:""},cValidate:"required",cName:"credittermscd",cLabel:"Credit Terms",cKey:!1,cLabelSize:4,cOrder:10,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"CM/CM_CreditTerms",cDisplayColumn:"CreditTermsCd,Descs"},PI_billingduedate:{cValidate:"",cName:"billingduedate",cLabel:"Due Date",cLabelSize:4,cOrder:11,cKey:!1,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_totalarea:{cValidate:"",cName:"totalarea",cLabel:"Total Area",cLabelSize:4,cOrder:12,cKey:!1,cType:"decimal",cDecimal:2,cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_billingrate:{cValidate:"",cName:"billingrate",cLabel:"Billing Rate",cLabelSize:4,cOrder:13,cKey:!1,cType:"decimal",cDecimal:2,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_billingamt:{cValidate:"required",cName:"billingamt",cLabel:"Billing Amount ",cLabelSize:4,cOrder:14,cKey:!1,cType:"decimal",cDecimal:2,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder,cProtect:!1}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage2Data},DataRowPage1:function(){return this.$store.getters.GetPage1Data}},methods:{BillingAmount:function(){var t=""==this.M_TN_StrataBilling.totalarea||null==this.M_TN_StrataBilling.totalarea?0:this.replaceAllString(this.M_TN_StrataBilling.totalarea,",","","number"),e=""==this.M_TN_StrataBilling.billingrate||null==this.M_TN_StrataBilling.billingrate?0:this.replaceAllString(this.M_TN_StrataBilling.billingrate,",","","number");this.M_TN_StrataBilling.billingamt=this.isCurrency(parseInt(t)*parseInt(e),this.decimal)},OntrxtypeChange:function(t){var e=this;this.$nextTick(function(){e.M_TN_StrataBilling.trxtype=t.id,e.M_TN_StrataBilling.trxtypeLabel=t.label,"VIEW"!=e.inputStatus&&t.id&&""!=t.id&&e.FnGetTrxTypeData(e.getDataUser().SubPortfolioCd,"AR",t.id).then(function(a){if(0!=a.length){var i=a[0];e.M_TN_StrataBilling.descs=i.TrxTypeDescs,e.M_TN_StrataBilling.currencycd=i.CurrencyCd,e.M_TN_StrataBilling.currencycdLabel=i.CurrencyCd,e.M_TN_StrataBilling.credittermscd=i.CreditTermsCd,e.M_TN_StrataBilling.credittermscdLabel=i.CreditTermsCd;var r={OptionFunctionCd:"GetChargeType",ModuleCd:"TN",TrxType:t.id};e.FnDynamicFunction(r).then(function(t){if(null!=t&&0!=t.length){var a=t[0];e.M_TN_StrataBilling.billingtype=a.TenancyChargeType}})}})}),this.$forceUpdate()},OnaddresscdChange:function(t){var e=this;this.$nextTick(function(){e.M_TN_StrataBilling.addresscd=t.id,e.M_TN_StrataBilling.addresscdLabel=t.label,e.inputStatus}),this.$forceUpdate()},OnbillingdateChange:function(t){var e=this;this.$nextTick(function(){e.inputStatus}),this.$forceUpdate()},OnbillingmethodChange:function(t){var e=this;this.$nextTick(function(){e.inputStatus}),this.$forceUpdate()},OntermspaymentChange:function(t){var e=this;this.$nextTick(function(){e.inputStatus}),this.$forceUpdate()},OncurrencycdChange:function(t){var e=this;this.$nextTick(function(){e.M_TN_StrataBilling.currencycd=t.id,e.M_TN_StrataBilling.currencycdLabel=t.label,e.inputStatus}),this.$forceUpdate()},OnremarksChange:function(t){var e=this;this.$nextTick(function(){e.inputStatus}),this.$forceUpdate()},OntotalareaChange:function(t){var e=this;this.$nextTick(function(){"VIEW"!=e.inputStatus&&e.BillingAmount()}),this.$forceUpdate()},OnbillingrateChange:function(t){var e=this;this.$nextTick(function(){"VIEW"!=e.inputStatus&&e.BillingAmount()}),this.$forceUpdate()},OncredittermscdChange:function(t){var e=this;this.$nextTick(function(){e.M_TN_StrataBilling.credittermscd=t.id,e.M_TN_StrataBilling.credittermscdLabel=t.label,"VIEW"!=e.inputStatus&&(e.M_TN_StrataBilling.billingduedate=e.dateAdd2("D",e.M_TN_StrataBilling.billingdate,t.DueDay))}),this.$forceUpdate()},OnbillingduedateChange:function(t){var e=this;this.$nextTick(function(){e.inputStatus}),this.$forceUpdate()},GetContract:function(){var t=this,e={OptionFunctionCd:"GetStrataGetDefault",ModuleCd:this.Module,SubPortfolioCd:this.getDataUser().SubPortfolioCd,LotNo:this.DataRowPage1.LotNo};this.FnDynamicFunction(e).then(function(e){if(null!=e){var a=e[0];t.M_TN_StrataBilling.credittermscd=a.CreditTermsCd,t.M_TN_StrataBilling.credittermscdLabel=null!=a.CreditTermsCd&&""!=a.CreditTermsCd?a.CreditTermsCd+t.separator+a.CreditTermDescs:"",t.M_TN_StrataBilling.addresscd=a.AddressCd,t.M_TN_StrataBilling.addresscdLabel=null!=a.AddressCd&&""!=a.AddressCd?a.AddressCd+t.separator+a.Address1:""}})},setToolbarButton:function(){null==this.DataRowPage1.OwnerID||""==this.DataRowPage1.OwnerID?(this.getToolbar().statusFunction[0].disabled=!0,this.getToolbar().statusFunction[1].disabled=!0,this.$store.commit("setEditStatus",!1)):(this.getToolbar().statusFunction[0].disabled=!1,this.getToolbar().statusFunction[1].disabled=!1,this.$store.commit("setEditStatus",!0))},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(t){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(t,e){},rowLink:function(t){this.$refs.modalTest.show()},paramFromParent:function(){this.$parent.showForm=!1;var t=this.$store.getters.GetPage1Data;this.M_TN_StrataBilling.lotno=t.LotNo,this.M_TN_StrataBilling.addresscontactid=t.OwnerID,this.propList.initialWhere="Status <> 'X' AND SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' and LotNo = '"+t.LotNo+"'and ApplicationNo IS NULL";var e="SubPortfoliCd = '"+this.getDataUser().SubPortfolioCd+"' AND BillingStatus = 'Y' AND (ContactId='"+t.OwnerID+"' Or ContactID In (Select ContactID From TN_ContractOccupant Where LotNo='"+t.LotNo+"'))";this.$refs.ref_addresscd.prop.dataLookUp.InitialWhere=e,this.FormToABSList().doGetList("","eb_getList")},M_Insert:function(){var t=this,e={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,BillingType:this.M_TN_StrataBilling.billingtype,TrxType:""==this.M_TN_StrataBilling.trxtype||null==this.M_TN_StrataBilling.trxtype?"NULL":this.M_TN_StrataBilling.trxtype,Descs:this.M_TN_StrataBilling.descs,BillingDate:""==this.M_TN_StrataBilling.billingdate||null==this.M_TN_StrataBilling.billingdate?"NULL":this.M_TN_StrataBilling.billingdate,BillingDueDate:""==this.M_TN_StrataBilling.billingduedate||null==this.M_TN_StrataBilling.billingduedate?"NULL":this.M_TN_StrataBilling.billingduedate,TrxDateFrom:""==this.M_TN_StrataBilling.trxdatefrom||null==this.M_TN_StrataBilling.trxdatefrom?"NULL":this.M_TN_StrataBilling.trxdatefrom,TrxDateTo:""==this.M_TN_StrataBilling.trxdateto||null==this.M_TN_StrataBilling.trxdateto?"NULL":this.M_TN_StrataBilling.trxdateto,CurrencyCd:""==this.M_TN_StrataBilling.currencycd||null==this.M_TN_StrataBilling.currencycd?"NULL":this.M_TN_StrataBilling.currencycd,CreditTermsCd:""==this.M_TN_StrataBilling.credittermscd||null==this.M_TN_StrataBilling.credittermscd?"NULL":this.M_TN_StrataBilling.credittermscd,LotNo:this.M_TN_StrataBilling.lotno,TotalArea:this.M_TN_StrataBilling.totalarea?this.replaceAllString(this.M_TN_StrataBilling.totalarea,",","","number"):0,BillingRate:this.M_TN_StrataBilling.billingrate?this.replaceAllString(this.M_TN_StrataBilling.billingrate,",","","number"):0,BillingAmt:this.M_TN_StrataBilling.billingamt?this.replaceAllString(this.M_TN_StrataBilling.billingamt,",","","number"):0,AddressCd:this.M_TN_StrataBilling.addresscd,AddressContactId:this.M_TN_StrataBilling.addresscontactid,Remarks:this.M_TN_StrataBilling.remarks,DebtorCd:this.M_TN_StrataBilling.debtorcd,BillingMethod:this.M_TN_StrataBilling.billingmethod,TermsPayment:this.M_TN_StrataBilling.termspayment,UserInput:this.getDataUser().UserId};this.postJSON(this.getUrlInsert(),e).then(function(e){null!=e&&t.$parent.resultInsert(e.Message)})},M_Update:function(){var t=this,e={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,BillingType:this.M_TN_StrataBilling.billingtype,BillingSequenceNo:this.M_TN_StrataBilling.billingsequenceno,TrxType:""==this.M_TN_StrataBilling.trxtype||null==this.M_TN_StrataBilling.trxtype?"NULL":this.M_TN_StrataBilling.trxtype,Descs:this.M_TN_StrataBilling.descs,BillingDate:""==this.M_TN_StrataBilling.billingdate||null==this.M_TN_StrataBilling.billingdate?"NULL":this.M_TN_StrataBilling.billingdate,BillingDueDate:""==this.M_TN_StrataBilling.billingduedate||null==this.M_TN_StrataBilling.billingduedate?"NULL":this.M_TN_StrataBilling.billingduedate,TrxDateFrom:""==this.M_TN_StrataBilling.trxdatefrom||null==this.M_TN_StrataBilling.trxdatefrom?"NULL":this.M_TN_StrataBilling.trxdatefrom,TrxDateTo:""==this.M_TN_StrataBilling.trxdateto||null==this.M_TN_StrataBilling.trxdateto?"NULL":this.M_TN_StrataBilling.trxdateto,CurrencyCd:""==this.M_TN_StrataBilling.currencycd||null==this.M_TN_StrataBilling.currencycd?"NULL":this.M_TN_StrataBilling.currencycd,CreditTermsCd:""==this.M_TN_StrataBilling.credittermscd||null==this.M_TN_StrataBilling.credittermscd?"NULL":this.M_TN_StrataBilling.credittermscd,LotNo:this.M_TN_StrataBilling.lotno,TotalArea:this.M_TN_StrataBilling.totalarea?this.replaceAllString(this.M_TN_StrataBilling.totalarea,",","","number"):0,BillingRate:this.M_TN_StrataBilling.billingrate?this.replaceAllString(this.M_TN_StrataBilling.billingrate,",","","number"):0,BillingAmt:this.M_TN_StrataBilling.billingamt?this.replaceAllString(this.M_TN_StrataBilling.billingamt,",","","number"):0,AddressCd:this.M_TN_StrataBilling.addresscd,AddressContactId:this.M_TN_StrataBilling.addresscontactid,Remarks:this.M_TN_StrataBilling.remarks,BillingMethod:this.M_TN_StrataBilling.billingmethod,TermsPayment:this.M_TN_StrataBilling.termspayment,UserEdit:this.getDataUser().UserId,LastUpdateStamp:this.M_TN_StrataBilling.lastupdatestamp};this.postJSON(this.getUrlUpdate(),e).then(function(e){null!=e&&t.$parent.resultUpdate(e.Message)})},M_ClearForm:function(){this.M_TN_StrataBilling={subportfoliocd:this.getDataUser().SubPortfolioCd,billingsequenceno:0,trxtype:"",modulecd:"",applicationno:"",lotno:"",wono:"",pmcontractno:"",facilitybookingno:"",debtorcd:"",installmentno:0,descs:"",billingdate:"",billingduedate:"",trxdatefrom:"",trxdateto:"",currencycd:"",taxcd:"",credittermscd:"",includediscount:"",discountcd:"",discountamt:0,totalarea:"0",billingrate:"0",billingamt:"0",baseamt:0,taxamt:0,billingtype:"",journaltype:"",billingmethod:"F",termspayment:"R",amortizestatus:"",journalcategory:"",addresscontactid:"",addresscd:"",tempno:"",debitno:"",postingdate:"",postedby:"",reasoncd:"",reasondescs:"",cancelby:"",canceldate:"",status:"New/Pending",inputmethod:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:0,t0:"",t1:"",t2:"",t3:"",t4:"",t5:"",t6:"",t7:"",t8:"",t9:"",t10:"",t11:"",t12:"",t13:"",t14:"",t15:"",t16:"",t17:"",t18:"",t19:"",t20:"",t21:"",t22:"",t23:"",t24:"",t25:"",t26:"",t27:"",t28:"",t29:"",t30:"",controlsequenceno:0,amortizemonthlyamt:0,blno:"",rowid:0,duedate:"",dueday:0,trxdescs:"",currencydescs:"",taxdescs:"",discountdescs:"",address1:"",credittermsdescs:"",contactid:"",invoiceno:""}},M_New:function(){var t=this.$store.getters.GetPage1Data;this.M_TN_StrataBilling.lotno=t.LotNo,this.M_TN_StrataBilling.totalarea=this.isCurrency(t.NetArea,this.decimal),this.M_TN_StrataBilling.addresscontactid=t.OwnerID,this.GetContract()},M_Edit:function(){},M_Delete:function(t){var e=this,a=this.FormToABSList().getRowSelected(),i=[];a.forEach(function(t){console.log(t),i.push({LotNo:t.LotNo,SubPortfolioCd:e.getDataUser().SubPortfolioCd,BillingSequenceNo:t.BillingSequenceNo,LastUpdateStamp:t.LastUpdateStamp,_Message_:""})});var r={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:i};this.postJSONMulti(this.getUrlNewDeleteMulti(),r).then(function(t){null!=t&&e.$parent.resultDelete()})},getDataBy:function(t){var e=this,a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,lotno:t.LotNo,SubPortfolioCd:this.getDataUser().SubPortfolioCd,billingsequenceno:t.BillingSequenceNo};this.postEncode(this.getUrlById(),a).then(function(a){if(null!=a){var i=a.Data[0],r="";i.status&&("N"==i.status?r="New/Pending":"P"==i.status?r="Posted":"T"==i.status&&(r="Billed Unposted"));var l="";i.billingtype&&(l="C"==i.billingtype?"C (Service Charge)":"F"==i.billingtype?"F (Singking Fund)":"O"==i.billingtype?"O (Other)":"Unknown"),e.M_TN_StrataBilling={subportfoliocd:i.subportfoliocd,billingsequenceno:i.billingsequenceno,trxtype:i.trxtype,modulecd:i.modulecd,applicationno:i.applicationno,lotno:i.lotno,wono:i.wono,pmcontractno:i.pmcontractno,facilitybookingno:i.facilitybookingno,debtorcd:i.debtorcd,installmentno:e.isCurrency(i.installmentno,e.decimal),descs:i.descs,billingdate:i.billingdate,billingduedate:i.billingduedate,trxdatefrom:i.trxdatefrom,trxdateto:i.trxdateto,currencycd:i.currencycd,taxcd:i.taxcd,credittermscd:i.credittermscd,includediscount:i.includediscount,discountcd:i.discountcd,discountamt:e.isCurrency(i.discountamt,e.decimal),totalarea:e.isCurrency(i.totalarea,e.decimal),billingrate:e.isCurrency(i.billingrate,e.decimal),billingamt:e.isCurrency(i.billingamt,e.decimal),baseamt:e.isCurrency(i.baseamt,e.decimal),taxamt:e.isCurrency(i.taxamt,e.decimal),billingtype:l,journaltype:i.journaltype,billingmethod:i.billingmethod,termspayment:i.termspayment,amortizestatus:i.amortizestatus,journalcategory:i.journalcategory,addresscontactid:i.addresscontactid,addresscd:i.addresscd,tempno:i.tempno,debitno:i.debitno,postingdate:i.postingdate,postedby:i.postedby,reasoncd:i.reasoncd,reasondescs:i.reasondescs,cancelby:i.cancelby,canceldate:i.canceldate,status:r,inputmethod:i.inputmethod,remarks:i.remarks,userinput:i.userinput,useredit:i.useredit,timeinput:i.timeinput,timeedit:i.timeedit,lastupdatestamp:t.LastUpdateStamp,t0:i.t0,t1:i.t1,t2:i.t2,t3:i.t3,t4:i.t4,t5:i.t5,t6:i.t6,t7:i.t7,t8:i.t8,t9:i.t9,t10:i.t10,t11:i.t11,t12:i.t12,t13:i.t13,t14:i.t14,t15:i.t15,t16:i.t16,t17:i.t17,t18:i.t18,t19:i.t19,t20:i.t20,t21:i.t21,t22:i.t22,t23:i.t23,t24:i.t24,t25:i.t25,t26:i.t26,t27:i.t27,t28:i.t28,t29:i.t29,t30:i.t30,controlsequenceno:i.controlsequenceno,amortizemonthlyamt:e.isCurrency(i.amortizemonthlyamt,e.decimal),blno:i.blno,rowid:i.rowid,duedate:i.duedate,dueday:e.isCurrency(i.dueday,e.decimal),trxdescs:i.trxdescs,currencydescs:i.currencydescs,taxdescs:i.taxdescs,discountdescs:i.discountdescs,address1:i.address1,credittermsdescs:i.credittermsdescs,contactid:i.contactid,invoiceno:i.invoiceno},e.M_TN_StrataBilling.trxtypeLabel=null!=e.M_TN_StrataBilling.trxtype&&""!=e.M_TN_StrataBilling.trxtype?i.trxtype+e.separator+i.descs:"",e.M_TN_StrataBilling.addresscdLabel=null!=e.M_TN_StrataBilling.addresscd&&""!=e.M_TN_StrataBilling.addresscd?i.addresscd+e.separator+i.address1:"",e.M_TN_StrataBilling.currencycdLabel=null!=e.M_TN_StrataBilling.currencycd&&""!=e.M_TN_StrataBilling.currencycd?i.currencycd+e.separator+i.currencydescs:"",e.M_TN_StrataBilling.credittermscdLabel=null!=e.M_TN_StrataBilling.credittermscd&&""!=e.M_TN_StrataBilling.credittermscd?i.credittermscd+e.separator+i.credittermsdescs:"",e.IEBy.Input=i.userinput,e.IEBy.Edit=i.useredit}})},MdtRange_trxdatefrom:function(t){this.M_TN_StrataBilling.trxdatefrom=t},MdtRange_trxdateto:function(t){this.M_TN_StrataBilling.trxdateto=t},setColumnChargeTypeTransSCWhere:function(){var t="ModuleCd = 'AR' AND TrxClass in ('I','T','P') AND TenancyChargeType = 'D' and SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"'";this.$refs.ref_trxtype.prop.dataLookUp.InitialWhere=t,this.$refs.ref_trxtype.onChangeTriggered=!0,this.$refs.ref_trxtype.prop.cDefault=this.M_TN_StrataBilling.trxtype},setColumnChargeTypeTransSFWhere:function(){var t="ModuleCd = 'AR' AND TrxClass in ('I','T','P') AND TenancyChargeType = 'E' and SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"'";this.$refs.ref_trxtype.prop.dataLookUp.InitialWhere=t,this.$refs.ref_trxtype.onChangeTriggered=!0,this.$refs.ref_trxtype.prop.cDefault=this.M_TN_StrataBilling.trxtype},setColumnChargeTypeTransOCWhere:function(){var t="ModuleCd = 'AR' AND TrxClass in ('I','T','P') AND TenancyChargeType = 'Y' and SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"'";this.$refs.ref_trxtype.prop.dataLookUp.InitialWhere=t,this.$refs.ref_trxtype.onChangeTriggered=!0,this.$refs.ref_trxtype.prop.cDefault=this.M_TN_StrataBilling.trxtype}},created:function(){},beforeMount:function(){},mounted:function(){this.hideSideBarMenu()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),n=l,s=a("2877"),o=Object(s["a"])(n,i,r,!1,null,null,null);o.options.__file="TN_StrataBilling.vue";e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d0ab170.271d1cec.js.map