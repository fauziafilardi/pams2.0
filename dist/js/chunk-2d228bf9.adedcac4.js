(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d228bf9"],{db05:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ABSListVuex",{attrs:{prop:e.propList,title:e.data.QueryName},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table,refreshColumn:e.$parent.refreshColumn}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[a("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                    Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),a("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),a("b-collapse",{attrs:{id:"collapse1",visible:!0}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[a("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[a("b-row",{staticStyle:{"padding-left":"10px"}},[a("b-col",{attrs:{md:"6",id:"col-left"}},[a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSCompute",{ref:"ref_billingtype",attrs:{prop:e.PI_billingtype},model:{value:e.M_AR_SingleBillingMaintenanceD.billingtype,callback:function(t){e.$set(e.M_AR_SingleBillingMaintenanceD,"billingtype",t)},expression:"M_AR_SingleBillingMaintenanceD.billingtype"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputTextVuex",{ref:"ref_trxtype",attrs:{prop:e.PI_trxtype},model:{value:e.M_AR_SingleBillingMaintenanceD.trxtype,callback:function(t){e.$set(e.M_AR_SingleBillingMaintenanceD,"trxtype",t)},expression:"M_AR_SingleBillingMaintenanceD.trxtype"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputTextVuex",{ref:"ref_descs",attrs:{prop:e.PI_descs},model:{value:e.M_AR_SingleBillingMaintenanceD.descs,callback:function(t){e.$set(e.M_AR_SingleBillingMaintenanceD,"descs",t)},expression:"M_AR_SingleBillingMaintenanceD.descs"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputDateVuex",{ref:"ref_billingdate",attrs:{prop:e.PI_billingdate},model:{value:e.M_AR_SingleBillingMaintenanceD.billingdate,callback:function(t){e.$set(e.M_AR_SingleBillingMaintenanceD,"billingdate",t)},expression:"M_AR_SingleBillingMaintenanceD.billingdate"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputDateVuex",{ref:"ref_trxdatefrom",attrs:{prop:e.PI_trxdatefrom},model:{value:e.M_AR_SingleBillingMaintenanceD.trxdatefrom,callback:function(t){e.$set(e.M_AR_SingleBillingMaintenanceD,"trxdatefrom",t)},expression:"M_AR_SingleBillingMaintenanceD.trxdatefrom"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputDateVuex",{ref:"ref_trxdateto",attrs:{prop:e.PI_trxdateto},model:{value:e.M_AR_SingleBillingMaintenanceD.trxdateto,callback:function(t){e.$set(e.M_AR_SingleBillingMaintenanceD,"trxdateto",t)},expression:"M_AR_SingleBillingMaintenanceD.trxdateto"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputTextVuex",{ref:"ref_currencycd",attrs:{prop:e.PI_currencycd},model:{value:e.M_AR_SingleBillingMaintenanceD.currencycd,callback:function(t){e.$set(e.M_AR_SingleBillingMaintenanceD,"currencycd",t)},expression:"M_AR_SingleBillingMaintenanceD.currencycd"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSInputSelectList",{ref:"ref_taxcd",attrs:{prop:e.PI_taxcd,value:e.M_AR_SingleBillingMaintenanceD.taxcd,label:e.M_AR_SingleBillingMaintenanceD.taxcdLabel},on:{change:e.OntaxcdChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputTextVuex",{ref:"ref_credittermscd",attrs:{prop:e.PI_credittermscd},model:{value:e.M_AR_SingleBillingMaintenanceD.credittermscd,callback:function(t){e.$set(e.M_AR_SingleBillingMaintenanceD,"credittermscd",t)},expression:"M_AR_SingleBillingMaintenanceD.credittermscd"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputDateVuex",{ref:"ref_duedate",attrs:{prop:e.PI_duedate},model:{value:e.M_AR_SingleBillingMaintenanceD.duedate,callback:function(t){e.$set(e.M_AR_SingleBillingMaintenanceD,"duedate",t)},expression:"M_AR_SingleBillingMaintenanceD.duedate"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputTextVuex",{ref:"ref_totalarea",attrs:{prop:e.PI_totalarea},model:{value:e.M_AR_SingleBillingMaintenanceD.totalarea,callback:function(t){e.$set(e.M_AR_SingleBillingMaintenanceD,"totalarea",t)},expression:"M_AR_SingleBillingMaintenanceD.totalarea"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputTextVuex",{ref:"ref_billingrate",attrs:{prop:e.PI_billingrate},model:{value:e.M_AR_SingleBillingMaintenanceD.billingrate,callback:function(t){e.$set(e.M_AR_SingleBillingMaintenanceD,"billingrate",t)},expression:"M_AR_SingleBillingMaintenanceD.billingrate"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputTextVuex",{ref:"ref_billingamt",attrs:{prop:e.PI_billingamt},model:{value:e.M_AR_SingleBillingMaintenanceD.billingamt,callback:function(t){e.$set(e.M_AR_SingleBillingMaintenanceD,"billingamt",t)},expression:"M_AR_SingleBillingMaintenanceD.billingamt"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputTextVuex",{ref:"ref_amortizemonthlyamt",attrs:{prop:e.PI_amortizemonthlyamt},model:{value:e.M_AR_SingleBillingMaintenanceD.amortizemonthlyamt,callback:function(t){e.$set(e.M_AR_SingleBillingMaintenanceD,"amortizemonthlyamt",t)},expression:"M_AR_SingleBillingMaintenanceD.amortizemonthlyamt"}})],1)],1)],1),a("b-col",{attrs:{md:"6",id:"col-right"}},[a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSCompute",{ref:"ref_status",attrs:{prop:e.PI_status},model:{value:e.M_AR_SingleBillingMaintenanceD.status,callback:function(t){e.$set(e.M_AR_SingleBillingMaintenanceD,"status",t)},expression:"M_AR_SingleBillingMaintenanceD.status"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSCompute",{ref:"ref_debitno",attrs:{prop:e.PI_debitno},model:{value:e.M_AR_SingleBillingMaintenanceD.debitno,callback:function(t){e.$set(e.M_AR_SingleBillingMaintenanceD,"debitno",t)},expression:"M_AR_SingleBillingMaintenanceD.debitno"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputRadioButtonVuex",{ref:"ref_journalcategory",attrs:{prop:e.PI_journalcategory},on:{input:e.OnjournalcategoryChange},model:{value:e.M_AR_SingleBillingMaintenanceD.journalcategory,callback:function(t){e.$set(e.M_AR_SingleBillingMaintenanceD,"journalcategory",t)},expression:"M_AR_SingleBillingMaintenanceD.journalcategory"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputRadioButtonVuex",{ref:"ref_includediscount",attrs:{prop:e.PI_includediscount},on:{input:e.OnincludediscountChange},model:{value:e.M_AR_SingleBillingMaintenanceD.includediscount,callback:function(t){e.$set(e.M_AR_SingleBillingMaintenanceD,"includediscount",t)},expression:"M_AR_SingleBillingMaintenanceD.includediscount"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputTextVuex",{ref:"ref_discountcd",attrs:{prop:e.PI_discountcd},model:{value:e.M_AR_SingleBillingMaintenanceD.discountcd,callback:function(t){e.$set(e.M_AR_SingleBillingMaintenanceD,"discountcd",t)},expression:"M_AR_SingleBillingMaintenanceD.discountcd"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputTextVuex",{ref:"ref_discountamt",attrs:{prop:e.PI_discountamt},model:{value:e.M_AR_SingleBillingMaintenanceD.discountamt,callback:function(t){e.$set(e.M_AR_SingleBillingMaintenanceD,"discountamt",t)},expression:"M_AR_SingleBillingMaintenanceD.discountamt"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputRadioButtonVuex",{ref:"ref_journaltype",attrs:{prop:e.PI_journaltype},on:{input:e.OnjournaltypeChange},model:{value:e.M_AR_SingleBillingMaintenanceD.journaltype,callback:function(t){e.$set(e.M_AR_SingleBillingMaintenanceD,"journaltype",t)},expression:"M_AR_SingleBillingMaintenanceD.journaltype"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputRadioButtonVuex",{ref:"ref_amortizestatus",attrs:{prop:e.PI_amortizestatus},on:{input:e.OnamortizestatusChange},model:{value:e.M_AR_SingleBillingMaintenanceD.amortizestatus,callback:function(t){e.$set(e.M_AR_SingleBillingMaintenanceD,"amortizestatus",t)},expression:"M_AR_SingleBillingMaintenanceD.amortizestatus"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputRadioButtonVuex",{ref:"ref_billingmethod",attrs:{prop:e.PI_billingmethod},on:{input:e.OnbillingmethodChange},model:{value:e.M_AR_SingleBillingMaintenanceD.billingmethod,callback:function(t){e.$set(e.M_AR_SingleBillingMaintenanceD,"billingmethod",t)},expression:"M_AR_SingleBillingMaintenanceD.billingmethod"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputRadioButtonVuex",{ref:"ref_termspayment",attrs:{prop:e.PI_termspayment},on:{input:e.OntermspaymentChange},model:{value:e.M_AR_SingleBillingMaintenanceD.termspayment,callback:function(t){e.$set(e.M_AR_SingleBillingMaintenanceD,"termspayment",t)},expression:"M_AR_SingleBillingMaintenanceD.termspayment"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSInputSelectList",{ref:"ref_addresscd",attrs:{prop:e.PI_addresscd,value:e.M_AR_SingleBillingMaintenanceD.addresscd,label:e.M_AR_SingleBillingMaintenanceD.addresscdLabel},on:{change:e.OnaddresscdChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSTextAreaVuex",{ref:"ref_remarks",attrs:{prop:e.PI_remarks},on:{input:e.OnremarksChange},model:{value:e.M_AR_SingleBillingMaintenanceD.remarks,callback:function(t){e.$set(e.M_AR_SingleBillingMaintenanceD,"remarks",t)},expression:"M_AR_SingleBillingMaintenanceD.remarks"}})],1)],1)],1)],1),a("ABSTAnalysis",{attrs:{prop:e.PTAnalysis}})],1)],1)],1)],1)],1)],1)},n=[],c={props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{ValKey:null,FormType:"List",Module:"AR",propList:{initialWhere:"ApplicationNo = '"+this.ValKey+"' AND ContactID = '"+this.ValKey+"'",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_AR_SingleBillingMaintenanceD:{amortizemonthlyamt:"",subportfoliocd:this.getDataUser().SubPortfolioCd,billingsequenceno:0,trxtype:"",modulecd:"",applicationno:"",wono:"",pmcontractno:"",debtorcd:"",descs:"",billingdate:"",trxdatefrom:"",trxdateto:"",currencycd:"",taxcd:"",credittermscd:"",includediscount:"",discountcd:"",discountamt:"0",totalarea:"0",billingrate:"0",billingamt:"0",baseamt:"",taxamt:"",billingtype:"",chargetypedescs:"",journaltype:"",billingmethod:"",termspayment:"",amortizestatus:"",journalcategory:"",addresscontactid:"",addresscd:"",debitno:"",postingdate:"",postedby:"",reasoncd:"",reasondescs:"",cancelby:"",canceldate:"",status:"",inputmethod:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,duedate:"",dueday:0,trxtypedescs:"",currencydescs:"",taxdescs:"",discountdescs:"",address1:"",credittermsdescs:"",contactid:"",lastupdatestamp:0,rowid:0},PI_billingtype:{cLabel:"Charge Type",cName:"billingtype",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_chargetypedescs:{cName:"chargetypedescs",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_status:{cLabel:"Status",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_trxtype:{cValidate:"",cName:"trxtype",cLabel:"Transaction Type",cLabelSize:4,cOrder:1,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_debitno:{cLabel:"Document No",cName:"debitno",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_descs:{cValidate:"max:150",cName:"descs",cLabel:"Description",cLabelSize:4,cOrder:2,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_journalcategory:{cValidate:"",cName:"journalcategory",cId:"rdbjournalcategory",cRadioOptions:[{text:"Direct",value:"D"},{text:"Indirect",value:"I"}],cRadioDefaultOption:"",cLabel:"\tJournal Category",cLabelSize:4,cOrder:3,cProtect:!1,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_billingdate:{cValidate:"",cName:"billingdate",cLabel:"Billing Date",cLabelSize:4,cOrder:4,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_includediscount:{cValidate:"",cName:"includediscount",cId:"rdbincludediscount",cRadioOptions:[{text:"Yes",value:"Y"},{text:"No",value:"N"}],cRadioDefaultOption:"",cLabel:"\tInclude Discount",cLabelSize:4,cOrder:5,cProtect:!1,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_trxdatefrom:{cValidate:"",cName:"trxdatefrom",cLabel:"Amortize Date From",cLabelSize:4,cOrder:6,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_discountcd:{cValidate:"",cName:"discountcd",cLabel:"Discount Code",cLabelSize:4,cOrder:7,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_trxdateto:{cValidate:"",cName:"trxdateto",cLabel:"Amortize Date To",cLabelSize:4,cOrder:8,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_discountamt:{cValidate:"",cName:"discountamt",cLabel:"Discount Amount",cLabelSize:4,cOrder:9,cKey:!0,cType:"decimal",cDecimal:2,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_currencycd:{cValidate:"",cName:"currencycd",cLabel:"Currency",cLabelSize:4,cOrder:10,cKey:!1,cType:"text",cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_journaltype:{cValidate:"",cName:"journaltype",cId:"rdbjournaltype",cRadioOptions:[{text:"Income",value:"I"},{text:"Deffered",value:"D"}],cRadioDefaultOption:"",cLabel:"\tJournal Type",cLabelSize:4,cOrder:11,cProtect:!1,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_taxcd:{dataLookUp:{LookUpCd:"GetLookupCMTaxCode",ColumnDB:"TaxCd",InitialWhere:"",ParamWhere:""},cValidate:"",cName:"taxcd",cLabel:"Tax",cKey:!1,cLabelSize:4,cOrder:12,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"CM/CM_TaxMaster",cDisplayColumn:"TaxCd, Descs"},PI_amortizestatus:{cValidate:"",cName:"amortizestatus",cId:"rdbamortizestatus",cRadioOptions:[{text:"Auto",value:"A"},{text:"Manual",value:"M"}],cRadioDefaultOption:"",cLabel:"\tAmortize Status",cLabelSize:4,cOrder:13,cProtect:!1,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_credittermscd:{cValidate:"",cName:"credittermscd",cLabel:"Credit Terms",cLabelSize:4,cOrder:14,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_billingmethod:{cValidate:"",cName:"billingmethod",cId:"rdbbillingmethod",cRadioOptions:[{text:"Full Month",value:"F"},{text:"Cut-Off Date",value:"C"}],cRadioDefaultOption:"",cLabel:"\tAmortize Method",cLabelSize:4,cOrder:15,cProtect:!1,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_duedate:{cName:"duedate",cLabel:"Due Date",cProtect:!0,cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_termspayment:{cValidate:"",cName:"termspayment",cId:"rdbtermspayment",cRadioOptions:[{text:"In Advance",value:"R"},{text:"In Arrear",value:"C"}],cRadioDefaultOption:"",cLabel:"\tTerms of Payment",cLabelSize:4,cOrder:16,cProtect:!1,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_totalarea:{cValidate:"",cName:"totalarea",cLabel:"Total Area",cLabelSize:4,cOrder:17,cKey:!0,cType:"decimal",cDecimal:2,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_addresscd:{dataLookUp:{LookUpCd:"GetLookupCMContactAndAddressSubportfolio",ColumnDB:"AddressCd",InitialWhere:"1=0",ParamWhere:""},cValidate:"required",cName:"addresscd",cLabel:"Address",cKey:!1,cLabelSize:4,cOrder:18,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"AddressCd,TranslatedAddressType"},PI_billingrate:{cValidate:"",cName:"billingrate",cLabel:"Billing Rate",cLabelSize:4,cOrder:19,cKey:!0,cType:"decimal",cDecimal:2,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_remarks:{cValidate:"",cName:"remarks",cLabel:"Remarks",cLabelSize:4,cOrder:20,cKey:!0,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_billingamt:{cValidate:"",cName:"billingamt",cLabel:"Billing Amount",cLabelSize:4,cOrder:21,cKey:!0,cType:"decimal",cDecimal:2,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_amortizemonthlyamt:{cValidate:"",cName:"amortizemonthlyamt",cLabel:"Monthly Income",cLabelSize:4,cOrder:22,cKey:!1,cType:"decimal",cVisible:!0,cProtect:!1,cCalculator:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage2Data},DataRowPage1:function(){return this.$store.getters.GetPage1Data}},methods:{OnjournalcategoryChange:function(e){var t=this;this.$nextTick(function(){"D"==e?t.PI_includediscount.cProtect=!1:(t.PI_includediscount.cProtect=!0,t.M_AR_SingleBillingMaintenanceD.includediscount="N"),t.inputStatus}),this.$forceUpdate()},OnincludediscountChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},OnjournaltypeChange:function(e){var t=this;this.$nextTick(function(){"D"==e?t.PI_amortizestatus.cProtect=!1:(t.PI_amortizestatus.cProtect=!0,t.M_AR_SingleBillingMaintenanceD.amortizestatus="M"),t.inputStatus}),this.$forceUpdate()},OntaxcdChange:function(e){var t=this;this.$nextTick(function(){t.M_AR_SingleBillingMaintenanceD.taxcd=e.id,t.M_AR_SingleBillingMaintenanceD.taxcdLabel=e.label,t.inputStatus}),this.$forceUpdate()},OnamortizestatusChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},OnbillingmethodChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},OntermspaymentChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},OnaddresscdChange:function(e){var t=this;this.$nextTick(function(){t.M_AR_SingleBillingMaintenanceD.addresscd=e.id,t.M_AR_SingleBillingMaintenanceD.addresscdLabel=e.label,t.inputStatus}),this.$forceUpdate()},OnremarksChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},setToolbarButton:function(){this.getToolbar().statusFunction[0].disabled=!0,this.getToolbar().statusFunction[2].disabled=!0},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,t){},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){this.$parent.showForm=!1;var e=this.$store.getters.GetPage1Data;this.M_AR_SingleBillingMaintenanceD.applicationno=e.ApplicationNo,this.M_AR_SingleBillingMaintenanceD.contactid=e.ContactId,this.propList.initialWhere="Status = 'N' AND SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' AND ApplicationNo = '"+e.ApplicationNo+"'";var t="SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' AND BillingStatus='Y' And (ContactId='"+e.ContactId+"' Or ContactID In (Select ContactID From TN_ContractOccupant Where ApplicationNo='"+e.ApplicationNo+"'))";this.$refs.ref_addresscd.prop.dataLookUp.InitialWhere=t,this.FormToABSList().doGetList("","eb_getList")},M_Insert:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder};this.postJSON(this.getUrlInsert(),t).then(function(t){null!=t&&e.$parent.resultInsert(t.Message)})},M_Update:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,ApplicationNo:this.M_AR_SingleBillingMaintenanceD.applicationno,ContactID:this.M_AR_SingleBillingMaintenanceD.contactid,DebtorCd:this.M_AR_SingleBillingMaintenanceD.debtorcd,SubPortfolioCd:this.getDataUser().SubPortfolioCd,BillingSequenceNo:this.M_AR_SingleBillingMaintenanceD.billingsequenceno,TaxCd:""==this.M_AR_SingleBillingMaintenanceD.taxcd||null==this.M_AR_SingleBillingMaintenanceD.taxcd?"NULL":this.M_AR_SingleBillingMaintenanceD.taxcd,IncludeDiscount:this.M_AR_SingleBillingMaintenanceD.includediscount,JournalType:this.ARFieldHelper.JOURNAL_TYPE_INCOME,BillingMethod:this.ARFieldHelper.BILLING_METHOD_FULL_MONTH,TermsPayment:this.ARFieldHelper.TERMS_PAYMENT_IN_ARREAR,AddressCd:""==this.M_AR_SingleBillingMaintenanceD.addresscd||null==this.M_AR_SingleBillingMaintenanceD.addresscd?"NULL":this.M_AR_SingleBillingMaintenanceD.addresscd,AddressContactID:this.M_AR_SingleBillingMaintenanceD.addresscontactid,AmortizeStatus:this.ARFieldHelper.AMORTIZE_STATUS_MANUAL,BillingType:this.M_AR_SingleBillingMaintenanceD.billingtype,JournalCategory:this.ARFieldHelper.JOURNAL_CATEGORY_INDIRECT,UserEdit:this.getDataUser().UserId,Descs:this.M_AR_SingleBillingMaintenanceD.descs,LastUpdateStamp:this.M_AR_SingleBillingMaintenanceD.lastupdatestamp};this.postJSON(this.getUrlUpdate(),t).then(function(t){null!=t&&e.$parent.resultUpdate(t.Message)})},M_ClearForm:function(){this.M_AR_SingleBillingMaintenanceD={amortizemonthlyamt:"",subportfoliocd:this.getDataUser().SubPortfolioCd,billingsequenceno:0,trxtype:"",modulecd:"",applicationno:"",wono:"",pmcontractno:"",debtorcd:"",descs:"",billingdate:"",trxdatefrom:"",trxdateto:"",currencycd:"",taxcd:"",credittermscd:"",includediscount:"",discountcd:"",discountamt:"0",totalarea:"0",billingrate:"0",billingamt:"0",baseamt:"",taxamt:"",billingtype:"",chargetypedescs:"",journaltype:"",billingmethod:"",termspayment:"",amortizestatus:"",journalcategory:"",addresscontactid:"",addresscd:"",debitno:"",postingdate:"",postedby:"",reasoncd:"",reasondescs:"",cancelby:"",canceldate:"",status:"",inputmethod:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,duedate:"",dueday:0,trxtypedescs:"",currencydescs:"",taxdescs:"",discountdescs:"",address1:"",credittermsdescs:"",lastupdatestamp:0,rowid:0}},M_New:function(){var e=this.$store.getters.GetPage1Data;this.M_AR_SingleBillingMaintenanceD.contactid=e.ContactID},M_Edit:function(){},M_Delete:function(e){},getDataBy:function(e){var t=this,a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,applicationno:e.ApplicationNo,contactid:this.M_AR_SingleBillingMaintenanceD.contactid,debtorcd:e.DebtorCd,billingsequenceno:e.BillingSequenceNo},i=this.M_AR_SingleBillingMaintenanceD.contactid;this.postEncode(this.getUrlById(),a).then(function(a){if(null!=a){var n=a.Data[0],c="";n.status&&(c="N"==n.status?"New":"Y"==n.status?"Generated":"Cancel"),t.M_AR_SingleBillingMaintenanceD={amortizemonthlyamt:t.isCurrency(n.amortizemonthlyamt,t.decimal),subportfoliocd:n.subportfoliocd,billingsequenceno:n.billingsequenceno,trxtype:n.trxtype,modulecd:n.modulecd,applicationno:n.applicationno,wono:n.wono,pmcontractno:n.pmcontractno,debtorcd:n.debtorcd,descs:n.descs,billingdate:n.billingdate,trxdatefrom:n.trxdatefrom,trxdateto:n.trxdateto,currencycd:n.currencycd,taxcd:n.taxcd,credittermscd:n.credittermscd,includediscount:n.includediscount,discountcd:n.discountcd,discountamt:t.isCurrency(n.discountamt,n.decimal),totalarea:t.isCurrency(n.totalarea,n.decimal),billingrate:t.isCurrency(n.billingrate),billingamt:t.isCurrency(n.billingamt),baseamt:n.baseamt,taxamt:n.taxamt,billingtype:n.chargetypedescs,journaltype:n.journaltype,billingmethod:n.billingmethod,termspayment:n.termspayment,amortizestatus:n.amortizestatus,journalcategory:n.journalcategory,addresscontactid:n.addresscontactid,addresscd:n.addresscd,debitno:n.debitno,postingdate:n.postingdate,postedby:n.postedby,reasoncd:n.reasoncd,reasondescs:n.reasondescs,cancelby:n.cancelby,canceldate:n.canceldate,status:c,inputmethod:n.inputmethod,remarks:n.remarks,userinput:n.userinput,useredit:n.useredit,duedate:n.duedate,dueday:n.dueday,trxtypedescs:n.trxtypedescs,currencydescs:n.currencydescs,taxdescs:n.taxdescs,contactid:i,discountdescs:n.discountdescs,address1:n.address1,credittermsdescs:n.credittermsdescs,lastupdatestamp:e.LastUpdateStamp,rowid:n.rowid},t.M_AR_SingleBillingMaintenanceD.taxcdLabel=null!=t.M_AR_SingleBillingMaintenanceD.taxcd&&""!=t.M_AR_SingleBillingMaintenanceD.taxcd?n.taxcd:"",t.M_AR_SingleBillingMaintenanceD.addresscdLabel=null!=t.M_AR_SingleBillingMaintenanceD.addresscd&&""!=t.M_AR_SingleBillingMaintenanceD.addresscd?n.addresscd:"",t.M_AR_SingleBillingMaintenanceD.termspayment="R"!=t.M_AR_SingleBillingMaintenanceD.termspayment?"C":"R",t.IEBy.Input=n.userinput,t.IEBy.Edit=n.useredit}})}},created:function(){},beforeMount:function(){},mounted:function(){this.hideSideBarMenu()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},l=c,r=a("2877"),s=Object(r["a"])(l,i,n,!1,null,null,null);s.options.__file="AR_SingleBillingMaintenanceD.vue";t["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2d228bf9.adedcac4.js.map