(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21a816"],{bc98:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ABSListVuex",{attrs:{prop:e.propList,title:e.data.QueryName},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table,refreshColumn:e.$parent.refreshColumn}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[a("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                    Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),a("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),a("b-collapse",{attrs:{id:"collapse1",visible:!0}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[a("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[a("b-row",{staticStyle:{"padding-left":"10px"}},[a("b-col",{attrs:{md:"6",id:"col-left"}},[a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputTextVuex",{ref:"ref_applicationno",attrs:{prop:e.PI_applicationno},model:{value:e.M_AR_UpdateTenantDebtor.applicationno,callback:function(t){e.$set(e.M_AR_UpdateTenantDebtor,"applicationno",t)},expression:"M_AR_UpdateTenantDebtor.applicationno"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputTextVuex",{ref:"ref_loono",attrs:{prop:e.PI_loono},model:{value:e.M_AR_UpdateTenantDebtor.loono,callback:function(t){e.$set(e.M_AR_UpdateTenantDebtor,"loono",t)},expression:"M_AR_UpdateTenantDebtor.loono"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputDateVuex",{ref:"ref_loodate",attrs:{prop:e.PI_loodate},on:{input:e.OnloodateChange},model:{value:e.M_AR_UpdateTenantDebtor.loodate,callback:function(t){e.$set(e.M_AR_UpdateTenantDebtor,"loodate",t)},expression:"M_AR_UpdateTenantDebtor.loodate"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputTextVuex",{ref:"ref_loino",attrs:{prop:e.PI_loino},model:{value:e.M_AR_UpdateTenantDebtor.loino,callback:function(t){e.$set(e.M_AR_UpdateTenantDebtor,"loino",t)},expression:"M_AR_UpdateTenantDebtor.loino"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputDateVuex",{ref:"ref_loidate",attrs:{prop:e.PI_loidate},on:{input:e.OnloidateChange},model:{value:e.M_AR_UpdateTenantDebtor.loidate,callback:function(t){e.$set(e.M_AR_UpdateTenantDebtor,"loidate",t)},expression:"M_AR_UpdateTenantDebtor.loidate"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputTextVuex",{ref:"ref_lano",attrs:{prop:e.PI_lano},model:{value:e.M_AR_UpdateTenantDebtor.lano,callback:function(t){e.$set(e.M_AR_UpdateTenantDebtor,"lano",t)},expression:"M_AR_UpdateTenantDebtor.lano"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputDateVuex",{ref:"ref_ladate",attrs:{prop:e.PI_ladate},on:{input:e.OnladateChange},model:{value:e.M_AR_UpdateTenantDebtor.ladate,callback:function(t){e.$set(e.M_AR_UpdateTenantDebtor,"ladate",t)},expression:"M_AR_UpdateTenantDebtor.ladate"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputTextVuex",{ref:"ref_contactid",attrs:{prop:e.PI_contactid},model:{value:e.M_AR_UpdateTenantDebtor.contactid,callback:function(t){e.$set(e.M_AR_UpdateTenantDebtor,"contactid",t)},expression:"M_AR_UpdateTenantDebtor.contactid"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSInputSelectList",{ref:"ref_debtorcd",attrs:{prop:e.PI_debtorcd,value:e.M_AR_UpdateTenantDebtor.debtorcd,label:e.M_AR_UpdateTenantDebtor.debtorcdLabel},on:{change:e.OndebtorcdChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputRadioButtonVuex",{ref:"ref_amortizemethod",attrs:{prop:e.PI_amortizemethod},on:{input:e.OnamortizemethodChange},model:{value:e.M_AR_UpdateTenantDebtor.amortizemethod,callback:function(t){e.$set(e.M_AR_UpdateTenantDebtor,"amortizemethod",t)},expression:"M_AR_UpdateTenantDebtor.amortizemethod"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputTextVuex",{ref:"ref_customercategorycd",attrs:{prop:e.PI_customercategorycd},model:{value:e.M_AR_UpdateTenantDebtor.customercategorycd,callback:function(t){e.$set(e.M_AR_UpdateTenantDebtor,"customercategorycd",t)},expression:"M_AR_UpdateTenantDebtor.customercategorycd"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSCompute",{ref:"ref_tenantstatus",attrs:{prop:e.PI_tenantstatus},model:{value:e.M_AR_UpdateTenantDebtor.tenantstatus,callback:function(t){e.$set(e.M_AR_UpdateTenantDebtor,"tenantstatus",t)},expression:"M_AR_UpdateTenantDebtor.tenantstatus"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputTextVuex",{ref:"ref_referenceno",attrs:{prop:e.PI_referenceno},model:{value:e.M_AR_UpdateTenantDebtor.referenceno,callback:function(t){e.$set(e.M_AR_UpdateTenantDebtor,"referenceno",t)},expression:"M_AR_UpdateTenantDebtor.referenceno"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputTextVuex",{ref:"ref_brandcd",attrs:{prop:e.PI_brandcd},model:{value:e.M_AR_UpdateTenantDebtor.brandcd,callback:function(t){e.$set(e.M_AR_UpdateTenantDebtor,"brandcd",t)},expression:"M_AR_UpdateTenantDebtor.brandcd"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSCompute",{ref:"ref_theme",attrs:{prop:e.PI_theme},model:{value:e.M_AR_UpdateTenantDebtor.theme,callback:function(t){e.$set(e.M_AR_UpdateTenantDebtor,"theme",t)},expression:"M_AR_UpdateTenantDebtor.theme"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSCompute",{ref:"ref_class",attrs:{prop:e.PI_class},model:{value:e.M_AR_UpdateTenantDebtor.class,callback:function(t){e.$set(e.M_AR_UpdateTenantDebtor,"class",t)},expression:"M_AR_UpdateTenantDebtor.class"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSCompute",{ref:"ref_category",attrs:{prop:e.PI_category},model:{value:e.M_AR_UpdateTenantDebtor.category,callback:function(t){e.$set(e.M_AR_UpdateTenantDebtor,"category",t)},expression:"M_AR_UpdateTenantDebtor.category"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputDateRangeVuex",{ref:"ref_startdate",attrs:{prop:e.PI_startdate,valueFrom:e.M_AR_UpdateTenantDebtor.startdate,valueTo:e.M_AR_UpdateTenantDebtor.enddate},on:{from:e.MdtRange_startdate,to:e.MdtRange_enddate}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("b-row",[a("b-col",{staticClass:"lbl-col-align",attrs:{md:"4"}},[a("label",{class:"VIEW"==e.inputStatus?"lbl-view-form":"text-field-form",attrs:{for:""}},[e._v("Lease Period")])]),a("b-col",{staticStyle:{"margin-left":"10px"},attrs:{md:"1"}},[a("ABSTextBoxOnly",{ref:"ref_leaseperiod",attrs:{prop:e.PI_leaseperiod},model:{value:e.M_AR_UpdateTenantDebtor.leaseperiod,callback:function(t){e.$set(e.M_AR_UpdateTenantDebtor,"leaseperiod",t)},expression:"M_AR_UpdateTenantDebtor.leaseperiod"}})],1),a("b-col",{attrs:{md:"4"}},[e._v("\n                                          "+e._s(e.M_AR_UpdateTenantDebtor.chargeperiod)+" and "+e._s(e.M_AR_UpdateTenantDebtor.perioddays)+" days . Free\n                                        ")]),a("b-col",{attrs:{md:"1"}},[a("ABSTextBoxOnly",{ref:"ref_freerentalperiod",attrs:{prop:e.PI_freerentalperiod},model:{value:e.M_AR_UpdateTenantDebtor.freerentalperiod,callback:function(t){e.$set(e.M_AR_UpdateTenantDebtor,"freerentalperiod",t)},expression:"M_AR_UpdateTenantDebtor.freerentalperiod"}})],1)],1)],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputDateRangeVuex",{ref:"ref_reserved",attrs:{prop:e.PI_rcdred,valueFrom:e.M_AR_UpdateTenantDebtor.rcd,valueTo:e.M_AR_UpdateTenantDebtor.red},on:{from:e.MdtRange_rcd,to:e.MdtRange_red}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputDateRangeVuex",{ref:"ref_utilitiesstartdate",attrs:{prop:e.PI_utilitiesstartdate,valueFrom:e.M_AR_UpdateTenantDebtor.utilitiesstartdate,valueTo:e.M_AR_UpdateTenantDebtor.utilitiesenddate},on:{from:e.MdtRange_utilitiesstartdate,to:e.MdtRange_utilitiesenddate}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputTextVuex",{ref:"ref_currencycd",attrs:{prop:e.PI_currencycd},model:{value:e.M_AR_UpdateTenantDebtor.currencycd,callback:function(t){e.$set(e.M_AR_UpdateTenantDebtor,"currencycd",t)},expression:"M_AR_UpdateTenantDebtor.currencycd"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSCompute",{ref:"ref_contractamt",attrs:{prop:e.PI_contractamt},model:{value:e.M_AR_UpdateTenantDebtor.contractamt,callback:function(t){e.$set(e.M_AR_UpdateTenantDebtor,"contractamt",t)},expression:"M_AR_UpdateTenantDebtor.contractamt"}})],1)],1)],1),a("b-col",{attrs:{md:"6",id:"col-right"}},[a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSCompute",{ref:"ref_status",attrs:{prop:e.PI_status},model:{value:e.M_AR_UpdateTenantDebtor.status,callback:function(t){e.$set(e.M_AR_UpdateTenantDebtor,"status",t)},expression:"M_AR_UpdateTenantDebtor.status"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSCompute",{ref:"ref_chargearea",attrs:{prop:e.PI_chargearea},model:{value:e.M_AR_UpdateTenantDebtor.chargearea,callback:function(t){e.$set(e.M_AR_UpdateTenantDebtor,"chargearea",t)},expression:"M_AR_UpdateTenantDebtor.chargearea"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSCompute",{ref:"ref_totalgrossarea",attrs:{prop:e.PI_totalgrossarea},model:{value:e.M_AR_UpdateTenantDebtor.totalgrossarea,callback:function(t){e.$set(e.M_AR_UpdateTenantDebtor,"totalgrossarea",t)},expression:"M_AR_UpdateTenantDebtor.totalgrossarea"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSCompute",{ref:"ref_baserentalrate",attrs:{prop:e.PI_baserentalrate},model:{value:e.M_AR_UpdateTenantDebtor.baserentalrate,callback:function(t){e.$set(e.M_AR_UpdateTenantDebtor,"baserentalrate",t)},expression:"M_AR_UpdateTenantDebtor.baserentalrate"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputTextVuex",{ref:"ref_telephoneline",attrs:{prop:e.PI_telephoneline},model:{value:e.M_AR_UpdateTenantDebtor.telephoneline,callback:function(t){e.$set(e.M_AR_UpdateTenantDebtor,"telephoneline",t)},expression:"M_AR_UpdateTenantDebtor.telephoneline"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputTextVuex",{ref:"ref_securitydepositrental",attrs:{prop:e.PI_securitydepositrental},model:{value:e.M_AR_UpdateTenantDebtor.securitydepositrental,callback:function(t){e.$set(e.M_AR_UpdateTenantDebtor,"securitydepositrental",t)},expression:"M_AR_UpdateTenantDebtor.securitydepositrental"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputTextVuex",{ref:"ref_securitydepositsc",attrs:{prop:e.PI_securitydepositsc},model:{value:e.M_AR_UpdateTenantDebtor.securitydepositsc,callback:function(t){e.$set(e.M_AR_UpdateTenantDebtor,"securitydepositsc",t)},expression:"M_AR_UpdateTenantDebtor.securitydepositsc"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputTextVuex",{ref:"ref_servicecharge",attrs:{prop:e.PI_servicecharge},model:{value:e.M_AR_UpdateTenantDebtor.servicecharge,callback:function(t){e.$set(e.M_AR_UpdateTenantDebtor,"servicecharge",t)},expression:"M_AR_UpdateTenantDebtor.servicecharge"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputTextVuex",{ref:"ref_promotionlevy",attrs:{prop:e.PI_promotionlevy},model:{value:e.M_AR_UpdateTenantDebtor.promotionlevy,callback:function(t){e.$set(e.M_AR_UpdateTenantDebtor,"promotionlevy",t)},expression:"M_AR_UpdateTenantDebtor.promotionlevy"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputTextVuex",{ref:"ref_telephonedeposit",attrs:{prop:e.PI_telephonedeposit},model:{value:e.M_AR_UpdateTenantDebtor.telephonedeposit,callback:function(t){e.$set(e.M_AR_UpdateTenantDebtor,"telephonedeposit",t)},expression:"M_AR_UpdateTenantDebtor.telephonedeposit"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputTextVuex",{ref:"ref_fitoutdeposit",attrs:{prop:e.PI_fitoutdeposit},model:{value:e.M_AR_UpdateTenantDebtor.fitoutdeposit,callback:function(t){e.$set(e.M_AR_UpdateTenantDebtor,"fitoutdeposit",t)},expression:"M_AR_UpdateTenantDebtor.fitoutdeposit"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputTextVuex",{ref:"ref_sinkingfund",attrs:{prop:e.PI_sinkingfund},model:{value:e.M_AR_UpdateTenantDebtor.sinkingfund,callback:function(t){e.$set(e.M_AR_UpdateTenantDebtor,"sinkingfund",t)},expression:"M_AR_UpdateTenantDebtor.sinkingfund"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSCompute",{ref:"ref_rentalbase",attrs:{prop:e.PI_rentalbase},model:{value:e.M_AR_UpdateTenantDebtor.rentalbase,callback:function(t){e.$set(e.M_AR_UpdateTenantDebtor,"rentalbase",t)},expression:"M_AR_UpdateTenantDebtor.rentalbase"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputRadioButtonVuex",{ref:"ref_revenuesharetype",attrs:{prop:e.PI_revenuesharetype},on:{input:e.OnrevenuesharetypeChange},model:{value:e.M_AR_UpdateTenantDebtor.revenuesharetype,callback:function(t){e.$set(e.M_AR_UpdateTenantDebtor,"revenuesharetype",t)},expression:"M_AR_UpdateTenantDebtor.revenuesharetype"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputTextVuex",{ref:"ref_renewalperiod",attrs:{prop:e.PI_renewalperiod},model:{value:e.M_AR_UpdateTenantDebtor.renewalperiod,callback:function(t){e.$set(e.M_AR_UpdateTenantDebtor,"renewalperiod",t)},expression:"M_AR_UpdateTenantDebtor.renewalperiod"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputTextVuex",{ref:"ref_marketingid",attrs:{prop:e.PI_marketingid},model:{value:e.M_AR_UpdateTenantDebtor.marketingid,callback:function(t){e.$set(e.M_AR_UpdateTenantDebtor,"marketingid",t)},expression:"M_AR_UpdateTenantDebtor.marketingid"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputTextVuex",{directives:[{name:"M_AR_UpdateTenantDebtor",rawName:"v-M_AR_UpdateTenantDebtor",value:e.M_AR_UpdateTenantDebtor.fitoutpic,expression:"M_AR_UpdateTenantDebtor.fitoutpic"}],ref:"ref_fitoutpic",attrs:{prop:e.PI_fitoutpic}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputDateVuex",{ref:"ref_fitoutcommencedon",attrs:{prop:e.PI_fitoutcommencedon},on:{input:e.OnfitoutcommencedonChange},model:{value:e.M_AR_UpdateTenantDebtor.fitoutcommencedon,callback:function(t){e.$set(e.M_AR_UpdateTenantDebtor,"fitoutcommencedon",t)},expression:"M_AR_UpdateTenantDebtor.fitoutcommencedon"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputTextVuex",{ref:"ref_fitouttime",attrs:{prop:e.PI_fitouttime},model:{value:e.M_AR_UpdateTenantDebtor.fitouttime,callback:function(t){e.$set(e.M_AR_UpdateTenantDebtor,"fitouttime",t)},expression:"M_AR_UpdateTenantDebtor.fitouttime"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputDateVuex",{ref:"ref_handoverdate",attrs:{prop:e.PI_handoverdate},on:{input:e.OnhandoverdateChange},model:{value:e.M_AR_UpdateTenantDebtor.handoverdate,callback:function(t){e.$set(e.M_AR_UpdateTenantDebtor,"handoverdate",t)},expression:"M_AR_UpdateTenantDebtor.handoverdate"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSInputTimeRange",{ref:"ref_operatingfromhour",attrs:{prop:e.PI_operatingfromhour,valueFrom:e.M_AR_UpdateTenantDebtor.operatingfromhour,valueTo:e.M_AR_UpdateTenantDebtor.operatingtohour},on:{from:e.MdtRange_operatingfromhour,to:e.MdtRange_operatingtohour}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSInputSelectList",{ref:"ref_mediacd",attrs:{prop:e.PI_mediacd,value:e.M_AR_UpdateTenantDebtor.mediacd,label:e.M_AR_UpdateTenantDebtor.mediacdLabel},on:{change:e.OnmediacdChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSTextAreaVuex",{ref:"ref_remarks",attrs:{prop:e.PI_remarks},on:{input:e.OnremarksChange},model:{value:e.M_AR_UpdateTenantDebtor.remarks,callback:function(t){e.$set(e.M_AR_UpdateTenantDebtor,"remarks",t)},expression:"M_AR_UpdateTenantDebtor.remarks"}})],1)],1)],1)],1),a("ABSTAnalysis",{attrs:{prop:e.PTAnalysis}})],1)],1)],1)],1)],1)],1)},o=[],n={props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{cInsertKey:"",FormType:"List",Module:"AR",propList:{initialWhere:"Status = 'A' AND SubPortfolioCd ='"+this.getDataUser().SubPortfolioCd+"'",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},BillingMonthTolerance:"",ToleranceDate:0,M_AR_UpdateTenantDebtor:{subportfoliocd:this.getDataUser().SubPortfolioCd,applicationno:"",copyfromapplicationno:"",loono:"",loodate:"",loino:"",loidate:"",lano:"",ladate:"",contactid:"",contactname:"",customercategorycd:"",customercategory:"",status:"",tenantstatus:"",contractstatus:"",referenceno:"",brandcd:"",brandname:"",lotthemecd:"",lotclasssequenceno:0,lotcategorysequenceno:0,startdate:"",enddate:"",leaseperiod:"0",rcd:"",red:"",chargearea:"",utilitiesstartdate:"",utilitiesenddate:"",currencycd:"",contractamt:"",peggingrate:"",revenuesharetype:"",telephoneline:"",securitydepositrental:"0",securitydepositsc:"0",rentalbase:"",baserentalrate:"",renewalperiod:0,rentalratetype:"",antennastatus:"",marketingid:"",perioddays:"",fitoutcommencedon:"",fitouttime:"",operatingfromhour:"",operatingtohour:"",mediacd:"",servicecharge:"0",promotionlevy:"0",telephonedeposit:"0",fitoutdeposit:"0",sinkingfund:"0",remarks:"",amortizemethod:"",userinput:"",businessname:"",useredit:this.getDataUser().UserId,totalnetarea:"",debtorcd:"",chargeperiod:"",freerentalperiod:"",totalgrossarea:"",totalsemigrossarea:"",theme:"",class:"",category:"",handoverdate:"",lastupdatestamp:0,rowid:0},PI_applicationno:{cValidate:"",cName:"applicationno",cLabel:"Application No",cLabelSize:4,cOrder:1,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_status:{cValidate:"",cName:"status",cLabel:"Status",cLabelSize:4,cOrder:2,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_loono:{cValidate:"",cName:"loono",cLabel:"LOO No",cLabelSize:4,cOrder:3,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_chargearea:{cValidate:"",cName:"chargearea",cLabel:"Base Calculation Area",cLabelSize:4,cOrder:4,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_loodate:{cValidate:"",cName:"loodate",cLabel:"LOO Date",cLabelSize:4,cOrder:5,cKey:!0,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_totalgrossarea:{cValidate:"",cName:"totalgrossarea",cLabel:"Gross - Semi - Net Area",cLabelSize:4,cOrder:6,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_loino:{cValidate:"",cName:"loino",cLabel:"LOI No",cLabelSize:4,cOrder:7,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_baseren:{cValidate:"",cName:"bareren",cLabel:"Base Rent",cLabelSize:4,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_loidate:{cValidate:"",cName:"loidate",cLabel:"LOI Date",cLabelSize:4,cOrder:8,cKey:!0,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_lano:{cValidate:"",cName:"lano",cLabel:"LA No",cLabelSize:4,cOrder:9,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_baserentalrate:{cValidate:"",cName:"baserentalrate",cLabel:"Average Rate",cLabelSize:4,cOrder:10,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_revenuesharetype:{cValidate:"",cName:"revenuesharetype",cId:"rdbrevenuesharetype",cRadioOptions:[{text:"Staggered",value:"S"},{text:"Range Scale",value:"R"}],cRadioDefaultOption:"R",cLabel:"Revenue Share Calc.",cLabelSize:4,cOrder:31,cProtect:!0,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_renewalperiod:{cValidate:"",cName:"renewalperiod",cLabel:"Renewal Period",cLabelSize:4,cOrder:32,cKey:!1,cType:"numeric",cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_ladate:{cValidate:"",cName:"ladate",cLabel:"LA Date",cLabelSize:4,cOrder:11,cKey:!0,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_telephoneline:{cValidate:"",cName:"telephoneline",cLabel:"Telephone Line (s)",cLabelSize:4,cOrder:12,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_contactid:{cValidate:"",cName:"contactid",cLabel:"Customer Name",cLabelSize:4,cOrder:13,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_securitydepositrental:{cValidate:"",cName:"securitydepositrental",cLabel:"Security Deposit Rental",cLabelSize:4,cOrder:14,cKey:!0,cType:"numeric",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_debtorcd:{dataLookUp:{LookUpCd:"GetLookupARDebtor",ColumnDB:"DebtorCd",InitialWhere:"",ParamWhere:""},cValidate:"required",cName:"debtorcd",cLabel:"Debtor Code",cKey:!1,cLabelSize:4,cOrder:15,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"AR/AR_Debtor",cDisplayColumn:"DebtorCd,DebtorName"},PI_securitydepositsc:{cValidate:"",cName:"securitydepositsc",cLabel:"Security Deposit SC",cLabelSize:4,cOrder:16,cKey:!0,cType:"numeric",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_amortizemethod:{cValidate:"",cName:"amortizemethod",cId:"rdbamortizemethod",cRadioOptions:[{text:"Actual Rate",value:"R"},{text:"Average",value:"A"}],cRadioDefaultOption:"",cLabel:"Amortize Method",cLabelSize:4,cOrder:17,cProtect:!1,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_servicecharge:{cValidate:"",cName:"servicecharge",cLabel:"Service Charge",cLabelSize:4,cOrder:18,cKey:!0,cType:"decimal",cDecimal:2,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_customercategorycd:{cValidate:"",cName:"customercategorycd",cLabel:"Customer Category",cLabelSize:4,cOrder:19,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_promotionlevy:{cValidate:"",cName:"promotionlevy",cLabel:"Promotion Levy",cLabelSize:4,cOrder:20,cKey:!0,cType:"decimal",cDecimal:2,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_tenantstatus:{cLabel:"Customer Status",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_telephonedeposit:{cValidate:"",cName:"telephonedeposit",cLabel:"Telephone Deposit",cLabelSize:4,cOrder:21,cKey:!0,cType:"decimal",cDecimal:2,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_referenceno:{cValidate:"",cName:"referenceno",cLabel:"Customer Ref No",cLabelSize:4,cOrder:22,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_fitoutdeposit:{cValidate:"",cName:"fitoutdeposit",cLabel:"Fit Out Deposit",cLabelSize:4,cOrder:23,cKey:!0,cType:"decimal",cDecimal:2,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_brandcd:{cValidate:"",cName:"brandcd",cLabel:"Brand Name",cLabelSize:4,cOrder:24,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_sinkingfund:{cValidate:"",cName:"sinkingfund",cLabel:"Sinking Fund",cLabelSize:4,cOrder:25,cKey:!0,cType:"decimal",cDecimal:2,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_theme:{cValidate:"",cName:"theme",cLabel:"Theme",cLabelSize:4,cOrder:26,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_rentalbase:{cValidate:"",cName:"rentalbase",cLabel:"Rental Base",cLabelSize:4,cOrder:27,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_class:{cValidate:"",cName:"class",cLabel:"Class",cLabelSize:4,cOrder:28,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_marketingid:{cValidate:"",cName:"marketingid",cLabel:"Marketing",cLabelSize:4,cOrder:29,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_category:{cValidate:"",cName:"category",cLabel:"Category",cLabelSize:4,cOrder:30,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_fitoutpic:{cValidate:"",cName:"fitoutpic",cLabel:"Fit Out PIC",cLabelSize:4,cOrder:31,cKey:!1,cType:"text",cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_fitoutcommencedon:{cValidate:"",cName:"fitoutcommencedon",cLabel:"Fit Out Comm. Date",cLabelSize:4,cOrder:32,cKey:!0,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_startdate:{cValidate:"",cName:"startdate",cLabel:"Lease Start Date - End Date",cLabelSize:4,cOrder:33,cKey:!0,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_fitouttime:{cValidate:"",cName:"fitouttime",cLabel:"Duration",cLabelSize:4,cOrder:34,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_handoverdate:{cValidate:"",cName:"handoverdate",cLabel:"Hand Over Date",cLabelSize:4,cOrder:35,cKey:!1,cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_operatingfromhour:{cValidate:"",cName:"operatingfromhour",cLabel:"Operating Hour",cLabelSize:4,cOrder:38,cKey:!1,cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_mediacd:{dataLookUp:{LookUpCd:"GetLookupTNMedia",ColumnDB:"MediaCd",InitialWhere:"",ParamWhere:""},cValidate:"",cName:"mediacd",cLabel:"Information Source",cKey:!1,cLabelSize:4,cOrder:39,cTriggered:!1,cDefault:"",cProtect:!0,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"TN/TN_Media",cDisplayColumn:"MediaCd,Descs"},PI_remarks:{cValidate:"",cName:"remarks",cLabel:"Remarks",cLabelSize:4,cOrder:34,cKey:!0,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_leaseperiod:{cValidate:"",cName:"leaseperiod",cLabel:"Lease Period",cLabelSize:4,cOrder:35,cKey:!0,cType:"numeric",cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_freerentalperiod:{cValidate:"",cName:"freerentalperiod",cLabel:"Free",cLabelSize:4,cOrder:14,cKey:!0,cType:"numeric",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_rcdred:{cValidate:"",cName:"rcd",cLabel:"RCD - RED",cLabelSize:4,cOrder:36,cKey:!0,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_utilitiesstartdate:{cValidate:"required",cName:"utilitiesstartdate",cLabel:"Utilities Start - End Date",cLabelSize:4,cOrder:16,cKey:!1,cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_currencycd:{cValidate:"",cName:"currencycd",cLabel:"Lease Currency",cLabelSize:4,cOrder:37,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_contractamt:{cValidate:"",cName:"contractamt",cLabel:"Total Rental",cLabelSize:4,cOrder:38,cKey:!0,cType:"decimal",cDecimal:2,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage1Data}},methods:{GetDebtorCdDisable:function(e){var t=this,a={OptionFunctionCd:"GetDebtorCdDisable",ModuleCd:this.Module,SubPortfolioCd:this.getDataUser().SubPortfolioCd,ApplicationNo:e};this.FnDynamicFunction(a).then(function(e){if(null!=e){var a=e[0];parseInt(a.N0)>0?t.PI_debtorcd.cKey=!0:t.PI_debtorcd.cKey=!1}})},OnloodateChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},OnloidateChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},OnladateChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},OndebtorcdChange:function(e){var t=this;this.$nextTick(function(){t.M_AR_UpdateTenantDebtor.debtorcd=e.id,t.M_AR_UpdateTenantDebtor.debtorcdLabel=e.label,t.inputStatus}),this.$forceUpdate()},OnamortizemethodChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},OnfitoutcommencedonChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},OnstartdateChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},OnenddateChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},OnremarksChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},OnrcdChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},setToolbarButton:function(){this.getToolbar().statusFunction[0].disabled=!0,this.getToolbar().statusFunction[1].disabled=!0},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,t){},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){},M_Post:function(e){},M_Insert:function(){},M_Update:function(){},M_ClearForm:function(){this.M_AR_UpdateTenantDebtor={subportfoliocd:this.getDataUser().SubPortfolioCd,applicationno:"",copyfromapplicationno:"",loono:"",loodate:"",loino:"",loidate:"",lano:"",ladate:"",contactid:"",contactname:"",customercategorycd:"",customercategory:"",status:"",tenantstatus:"",contractstatus:"",referenceno:"",brandcd:"",brandname:"",lotthemecd:"",lotclasssequenceno:0,lotcategorysequenceno:0,startdate:"",enddate:"",leaseperiod:"0",rcd:"",red:"",freerentalperiod:"",chargearea:"",utilitiesstartdate:"",utilitiesenddate:"",currencycd:"",contractamt:"",peggingrate:"",revenuesharetype:"",telephoneline:"",securitydepositrental:"0",securitydepositsc:"0",rentalbase:"",renewalperiod:0,rentalratetype:"",antennastatus:"",marketingid:"",fitoutcommencedon:"",fitouttime:"",operatingfromhour:"",operatingtohour:"",mediacd:"",servicecharge:"0",promotionlevy:"0",telephonedeposit:"0",fitoutdeposit:"0",sinkingfund:"0",baserentalrate:"",remarks:"",amortizemethod:"",userinput:"",businessname:"",useredit:this.getDataUser().UserId,totalnetarea:"",debtorcd:"",totalgrossarea:"",totalsemigrossarea:"",theme:"",class:"",category:"",perioddays:"",chargeperiod:"",lastupdatestamp:0,handoverdate:"",rowid:0}},M_New:function(){this.$store.getters.GetPage1Data},M_Edit:function(){this.$store.getters.GetPage1Data;this.GetDebtorCdDisable(this.M_AR_UpdateTenantDebtor.applicationno),this.PI_debtorcd.dataLookUp.InitialWhere="SUBPORTFOLIOCD='"+this.getDataUser().SubPortfolioCd+"' AND Status='Y' AND ContactId='"+this.M_AR_UpdateTenantDebtor.contactid+"'"},M_Delete:function(e){},getDataBy:function(e){var t=this,a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,applicationno:e.ApplicationNo};this.postEncode(this.getUrlById(),a).then(function(a){if(null!=a){var r=a.Data[0];switch(r.tenantstatus&&("N"==r.tenantstatus?"New":"P"==r.tenantstatus?"Replacement":"Renew"),t.M_AR_UpdateTenantDebtor={subportfoliocd:r.subportfoliocd,applicationno:r.applicationno,copyfromapplicationno:r.copyfromapplicationno,loono:r.loono,loodate:r.loodate,loino:r.loino,loidate:r.loidate,lano:r.lano,ladate:r.ladate,contactid:r.contactid+t.separator+r.contactname,contactname:r.contactname,customercategorycd:r.customercategorycd+" | "+r.customercategory,customercategory:r.customercategory,status:r.status,tenantstatus:r.tenantstatus,contractstatus:r.contractstatus,referenceno:r.referenceno,brandcd:r.brandcd+t.separator+r.brandname,brandname:r.brandname,lotthemecd:r.lotthemecd,freerentalperiod:r.freerentalperiod,baserentalrate:t.isCurrency(r.baserentalrate,t.decimal),lotclasssequenceno:r.lotclasssequenceno,lotcategorysequenceno:r.lotcategorysequenceno,startdate:r.startdate,enddate:r.enddate,leaseperiod:r.leaseperiod,perioddays:r.perioddays,rcd:r.rcd,red:r.red,chargearea:r.chargearea,utilitiesstartdate:r.utilitiesstartdate,utilitiesenddate:r.utilitiesenddate,currencycd:r.currencycd,contractamt:t.isCurrency(r.contractamt,t.decimal),peggingrate:r.peggingrate,revenuesharetype:r.revenuesharetype,telephoneline:r.telephoneline,securitydepositrental:r.securitydepositrental,securitydepositsc:r.securitydepositsc,rentalbase:r.rentalbase,renewalperiod:r.renewalperiod,rentalratetype:r.rentalratetype,antennastatus:r.antennastatus,marketingid:r.marketingid,fitoutcommencedon:r.fitoutcommencedon,fitouttime:r.fitouttime,operatingfromhour:r.operatingfromhour,operatingtohour:r.operatingtohour,mediacd:r.mediacd,servicecharge:t.isCurrency(r.servicecharge,t.decimal),promotionlevy:t.isCurrency(r.promotionlevy,t.decimal),telephonedeposit:t.isCurrency(r.telephonedeposit,t.decimal),fitoutdeposit:t.isCurrency(r.fitoutdeposit,t.decimal),sinkingfund:t.isCurrency(r.sinkingfund,t.decimal),remarks:r.remarks,amortizemethod:r.amortizemethod,userinput:r.userinput,businessname:r.businessname,useredit:r.useredit,totalnetarea:t.isCurrency(r.totalnetarea,t.decimal),chargeperiod:r.chargeperiod,debtorcd:r.debtorcd,totalgrossarea:t.isCurrency(r.totalgrossarea,t.decimal)+" / "+t.isCurrency(r.totalsemigrossarea,t.decimal)+" / "+t.isCurrency(r.totalnetarea,t.decimal),totalsemigrossarea:t.isCurrency(r.totalsemigrossarea,t.decimal),theme:r.theme,class:r.class,category:r.category,handoverdate:r.handoverdate,lastupdatestamp:e.LastUpdateStamp,rowid:r.rowid},t.M_AR_UpdateTenantDebtor.debtorcdLabel=null!=t.M_AR_UpdateTenantDebtor.debtorcd&&""!=t.M_AR_UpdateTenantDebtor.debtorcd?r.debtorcd+t.separator+r.contactname:"",t.M_AR_UpdateTenantDebtor.mediacdLabel=null!=t.M_AR_UpdateTenantDebtor.mediacd&&""!=t.M_AR_UpdateTenantDebtor.mediacd?r.mediacd+t.separator+r.mediadescs:"",r.tenantstatus){case"N":t.M_AR_UpdateTenantDebtor.tenantstatus="NEW";break;case"P":t.M_AR_UpdateTenantDebtor.tenantstatus="Replacement";break;case"R":t.M_AR_UpdateTenantDebtor.tenantstatus="Renew";break;default:t.M_AR_UpdateTenantDebtor.tenantstatus="Unassigned";break}"D"==r.chargeperiod?t.M_AR_UpdateTenantDebtor.chargeperiod="days":"M"==r.chargeperiod&&(t.M_AR_UpdateTenantDebtor.chargeperiod="month"),"A"==r.status||"N"==r.status?"1"==r.contractstatus?"L"==r.customertype?(t.M_AR_UpdateTenantDebtor.status="Pending LOO / Leasing",!0):"C"==r.customertype&&(t.M_AR_UpdateTenantDebtor.status="Pending LOO / Casual Leasing",!0):"2"!=r.contractstatus&&"3"!=r.contractstatus&&"4"!=r.contractstatus||("L"==r.customertype?(t.M_AR_UpdateTenantDebtor.status="Approved LOO / Leasing",!1):"C"==r.customertype&&(t.M_AR_UpdateTenantDebtor.status="Approved LOO / Casual Leasing",!1)):"X"==r.status?(t.M_AR_UpdateTenantDebtor.status="Terminated Agreement",!1):"C"==r.status&&(t.M_AR_UpdateTenantDebtor.status="Cancelled Agreement",!1),t.IEBy.Input=r.userinput,t.IEBy.Edit=r.useredit}})},MdtRange_startdate:function(e){this.M_AR_UpdateTenantDebtor.startdate=e},MdtRange_enddate:function(e){this.M_AR_UpdateTenantDebtor.enddate=e},MdtRange_rcd:function(e){this.M_AR_UpdateTenantDebtor.rcd=e},MdtRange_red:function(e){this.M_AR_UpdateTenantDebtor.red=e},getSpec:function(){var e=this,t={OptionFunctionCd:"GetSpecification",ModuleCd:"TN",SubPortfolioCd:this.getDataUser().SubPortfolioCd};this.FnDynamicFunction(t).then(function(t){if(null!=t)if(t.length<1)e.alertError("Please Check TN Specification");else{e.BillingMonthTolerance=t[0].BillingMonthTolerance;var a=e.momentDateFormatting(new Date,"YYYY-MM-01"),r=e.dateAdd2("M",a,-1*parseInt(e.BillingMonthTolerance));e.ToleranceDate=e.dateAdd2("D",r,-1),e.propList.initialWhere="Status = 'A' AND SubPortfolioCd = '"+e.getDataUser().SubPortfolioCd+"' AND EndDate >= '"+e.ToleranceDate+"'",e.FormToABSList().doGetList("","eb_getList")}})}},beforeCreate:function(){},created:function(){this.$store.commit("setFormType","List"),this.getToolbar().ProcessPS()},beforeMount:function(){},mounted:function(){this.hideSideBarMenu(),this.getSpec()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},c=n,i=a("2877"),s=Object(i["a"])(c,r,o,!1,null,null,null);s.options.__file="AR_SingleBillingMaintenanceH.vue";t["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2d21a816.ac749647.js.map