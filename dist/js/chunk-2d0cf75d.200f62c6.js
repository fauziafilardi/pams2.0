(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cf75d"],{"648a":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ABSListVuex",{attrs:{prop:e.propList,title:e.data.QueryName},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table,refreshColumn:e.$parent.refreshColumn}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[a("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                    Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),a("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),a("b-collapse",{attrs:{id:"collapse1",visible:!0}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[a("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[a("b-row",{staticStyle:{"padding-left":"10px"}},[a("b-col",{attrs:{md:"6",id:"col-left"}},[a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputTextVuex",{ref:"ref_subleaseassignmentno",attrs:{prop:e.PI_subleaseassignmentno},model:{value:e.M_TN_ContractSubLeaseEntry.subleaseassignmentno,callback:function(t){e.$set(e.M_TN_ContractSubLeaseEntry,"subleaseassignmentno",t)},expression:"M_TN_ContractSubLeaseEntry.subleaseassignmentno"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputDateVuex",{ref:"ref_subleaseassignmentdate",attrs:{prop:e.PI_subleaseassignmentdate},on:{input:e.OnsubleaseassignmentdateChange},model:{value:e.M_TN_ContractSubLeaseEntry.subleaseassignmentdate,callback:function(t){e.$set(e.M_TN_ContractSubLeaseEntry,"subleaseassignmentdate",t)},expression:"M_TN_ContractSubLeaseEntry.subleaseassignmentdate"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSInputSelectList",{ref:"ref_applicationno",attrs:{prop:e.PI_applicationno,value:e.M_TN_ContractSubLeaseEntry.applicationno,label:e.M_TN_ContractSubLeaseEntry.applicationnoLabel},on:{change:e.OnapplicationnoChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSInputSelectList",{ref:"ref_subleaseassignmentcontactid",attrs:{prop:e.PI_subleaseassignmentcontactid,value:e.M_TN_ContractSubLeaseEntry.subleaseassignmentcontactid,label:e.M_TN_ContractSubLeaseEntry.subleaseassignmentcontactidLabel},on:{change:e.OnsubleaseassignmentcontactidChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSInputSelectList",{ref:"ref_brandcd",attrs:{prop:e.PI_brandcd,value:e.M_TN_ContractSubLeaseEntry.brandcd,label:e.M_TN_ContractSubLeaseEntry.brandcdLabel},on:{change:e.OnbrandcdChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputTextVuex",{ref:"ref_descs",attrs:{prop:e.PI_descs},model:{value:e.M_TN_ContractSubLeaseEntry.descs,callback:function(t){e.$set(e.M_TN_ContractSubLeaseEntry,"descs",t)},expression:"M_TN_ContractSubLeaseEntry.descs"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputTextVuex",{ref:"ref_customerrequestno",attrs:{prop:e.PI_customerrequestno},model:{value:e.M_TN_ContractSubLeaseEntry.customerrequestno,callback:function(t){e.$set(e.M_TN_ContractSubLeaseEntry,"customerrequestno",t)},expression:"M_TN_ContractSubLeaseEntry.customerrequestno"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputDateVuex",{ref:"ref_customerrequestdate",attrs:{prop:e.PI_customerrequestdate},on:{input:e.OncustomerrequestdateChange},model:{value:e.M_TN_ContractSubLeaseEntry.customerrequestdate,callback:function(t){e.$set(e.M_TN_ContractSubLeaseEntry,"customerrequestdate",t)},expression:"M_TN_ContractSubLeaseEntry.customerrequestdate"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSCompute",{ref:"ref_totalaging",attrs:{prop:e.PI_totalaging},model:{value:e.M_TN_ContractSubLeaseEntry.totalaging,callback:function(t){e.$set(e.M_TN_ContractSubLeaseEntry,"totalaging",t)},expression:"M_TN_ContractSubLeaseEntry.totalaging"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSCompute",{ref:"ref_lano",attrs:{prop:e.PI_lano},model:{value:e.M_TN_ContractSubLeaseEntry.lano,callback:function(t){e.$set(e.M_TN_ContractSubLeaseEntry,"lano",t)},expression:"M_TN_ContractSubLeaseEntry.lano"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSCompute",{ref:"ref_contactid",attrs:{prop:e.PI_contactid},model:{value:e.M_TN_ContractSubLeaseEntry.contactid,callback:function(t){e.$set(e.M_TN_ContractSubLeaseEntry,"contactid",t)},expression:"M_TN_ContractSubLeaseEntry.contactid"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSCompute",{ref:"ref_customercategorycd",attrs:{prop:e.PI_customercategorycd},model:{value:e.M_TN_ContractSubLeaseEntry.customercategorycd,callback:function(t){e.$set(e.M_TN_ContractSubLeaseEntry,"customercategorycd",t)},expression:"M_TN_ContractSubLeaseEntry.customercategorycd"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSCompute",{ref:"ref_brandname",attrs:{prop:e.PI_brandname},model:{value:e.M_TN_ContractSubLeaseEntry.brandname,callback:function(t){e.$set(e.M_TN_ContractSubLeaseEntry,"brandname",t)},expression:"M_TN_ContractSubLeaseEntry.brandname"}})],1)],1)],1),a("b-col",{attrs:{md:"6",id:"col-right"}},[a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSinputDateRangeVuex",{ref:"ref_rcd",attrs:{prop:e.PI_rcd,valueFrom:e.M_TN_ContractSubLeaseEntry.rcd,valueTo:e.M_TN_ContractSubLeaseEntry.red},on:{from:e.MdtRange_rcd,to:e.MdtRange_red}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("b-row",[a("b-col",{staticClass:"lbl-col-align",attrs:{md:"4"}},[a("label",{class:"VIEW"==e.inputStatus?"lbl-view-form":"text-field-form",attrs:{for:""}},[e._v("Lease Period")])]),a("b-col",{staticStyle:{"margin-left":"5px"},attrs:{md:"1"}},[a("ABSTextBoxOnly",{ref:"ref_leaseperiod",attrs:{prop:e.PI_leaseperiod},on:{input:e.OnleaseperiodChange},model:{value:e.M_TN_ContractSubLeaseEntry.leaseperiod,callback:function(t){e.$set(e.M_TN_ContractSubLeaseEntry,"leaseperiod",t)},expression:"M_TN_ContractSubLeaseEntry.leaseperiod"}})],1),a("b-col",{attrs:{md:"4"}},[e._v("\n                          "+e._s(e.M_TN_ContractSubLeaseEntry.chargeperiod)+" and "+e._s(e.M_TN_ContractSubLeaseEntry.perioddays)+" days\n                        ")])],1)],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSCompute",{ref:"ref_currencycd",attrs:{prop:e.PI_currencycd},model:{value:e.M_TN_ContractSubLeaseEntry.currencycd,callback:function(t){e.$set(e.M_TN_ContractSubLeaseEntry,"currencycd",t)},expression:"M_TN_ContractSubLeaseEntry.currencycd"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSCompute",{ref:"ref_contractamt",attrs:{prop:e.PI_contractamt},model:{value:e.M_TN_ContractSubLeaseEntry.contractamt,callback:function(t){e.$set(e.M_TN_ContractSubLeaseEntry,"contractamt",t)},expression:"M_TN_ContractSubLeaseEntry.contractamt"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSCompute",{ref:"ref_totalgrossarea",attrs:{prop:e.PI_totalgrossarea},model:{value:e.M_TN_ContractSubLeaseEntry.totalgrossarea,callback:function(t){e.$set(e.M_TN_ContractSubLeaseEntry,"totalgrossarea",t)},expression:"M_TN_ContractSubLeaseEntry.totalgrossarea"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSCompute",{ref:"ref_totalsemigrossarea",attrs:{prop:e.PI_totalsemigrossarea},model:{value:e.M_TN_ContractSubLeaseEntry.totalsemigrossarea,callback:function(t){e.$set(e.M_TN_ContractSubLeaseEntry,"totalsemigrossarea",t)},expression:"M_TN_ContractSubLeaseEntry.totalsemigrossarea"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSCompute",{ref:"ref_totalnetarea",attrs:{prop:e.PI_totalnetarea},model:{value:e.M_TN_ContractSubLeaseEntry.totalnetarea,callback:function(t){e.$set(e.M_TN_ContractSubLeaseEntry,"totalnetarea",t)},expression:"M_TN_ContractSubLeaseEntry.totalnetarea"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSCompute",{ref:"ref_marketingid",attrs:{prop:e.PI_marketingid},model:{value:e.M_TN_ContractSubLeaseEntry.marketingid,callback:function(t){e.$set(e.M_TN_ContractSubLeaseEntry,"marketingid",t)},expression:"M_TN_ContractSubLeaseEntry.marketingid"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSCompute",{ref:"ref_ladate",attrs:{prop:e.PI_ladate},model:{value:e.M_TN_ContractSubLeaseEntry.ladate,callback:function(t){e.$set(e.M_TN_ContractSubLeaseEntry,"ladate",t)},expression:"M_TN_ContractSubLeaseEntry.ladate"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSCompute",{ref:"ref_status",attrs:{prop:e.PI_status},model:{value:e.M_TN_ContractSubLeaseEntry.status,callback:function(t){e.$set(e.M_TN_ContractSubLeaseEntry,"status",t)},expression:"M_TN_ContractSubLeaseEntry.status"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"12"}},[a("ABSTextAreaVuex",{ref:"ref_remarks",attrs:{prop:e.PI_remarks},on:{input:e.OnremarksChange},model:{value:e.M_TN_ContractSubLeaseEntry.remarks,callback:function(t){e.$set(e.M_TN_ContractSubLeaseEntry,"remarks",t)},expression:"M_TN_ContractSubLeaseEntry.remarks"}})],1)],1)],1)],1),a("ABSTAnalysis",{attrs:{prop:e.PTAnalysis}})],1)],1)],1)],1)],1)],1)},n=[],r=(a("ac6a"),a("cadf"),a("551c"),a("097d"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{cInsertKey:"",FormType:"List",Module:"TN",propList:{initialWhere:"SubleaseAssignmentType = 'S' AND SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"'",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},TNSpec:"",M_TN_ContractSubLeaseEntry:{subleaseassignmentno:"",applicationno:"",subleaseassignmentcontactid:"",subleaseassignmentdate:this.getToday(),brandcd:"",descs:"",customerrequestno:"",customerrequestdate:this.getToday(),status:"N",remarks:"",userinput:"",useredit:this.getDataUser().UserId,lano:"",ladate:"",contactid:"",customercategorycd:"",rcd:"",red:"",con_rcd:"",con_red:"",leaseperiod:0,currencycd:"",contractamt:0,marketingid:"",operatingfromhour:"",operatingtohour:"",grossarea:0,semigrossarea:0,netarea:0,brandname:"",applicationname:"",subleasecustomername:"",lotno:"",subportfoliocd:this.getDataUser().SubPortfolioCd,lastupdatestamp:0,rowid:0,lanodate:"",grossseminetarea:"",chargeperiod:"months",perioddays:"",freerentalperiod:""},PI_subleaseassignmentno:{cValidate:"",cName:"subleaseassignmentno",cLabel:"Sublease No",cLabelSize:4,cOrder:1,cKey:!0,cType:"text",cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_rcd:{cValidate:"",cValidateTo:"",cName:"rcd",cLabel:"RCD  - RED",cLabelSize:4,cOrder:9,cKey:!0,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_subleaseassignmentdate:{cValidate:"",cName:"subleaseassignmentdate",cLabel:"Sublease Date",cLabelSize:4,cOrder:2,cKey:!0,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_con_red:{cValidate:"",cName:"con_red",cLabel:"",cLabelSize:4,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_applicationno:{dataLookUp:{LookUpCd:"GetLookUp_ApplicationNo_V2",ColumnDB:"ApplicationNo",InitialWhere:"ContractStatus IN ('2','3','4') AND TerminateStatus ='N' AND (GETDATE() BETWEEN RCD AND RED) AND Status = 'A' AND AntennaStatus = 'N' AND SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' AND ApplicationNo NOT IN (SELECT x.ApplicationNo FROM TN_ContractSubleaseAssignment x WHERE x.Status = 'N') AND ISNULL(TerminateStatus, 'N') = 'N'",ParamWhere:""},cValidate:"required",cName:"applicationno",cLabel:"Application No",cKey:!0,cLabelSize:4,cOrder:3,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"ApplicationNo,Name"},PI_leaseperiod:{cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0,cProtect:!0},PI_freerentalperiod:{cValidate:"",cName:"freerentalperiod",cLabelSize:4,cKey:!1,cType:"numeric",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_subleaseassignmentcontactid:{dataLookUp:{LookUpCd:"GetLookUp_SubleaseCustomer",ColumnDB:"ContactId",InitialWhere:"",ParamWhere:""},cValidate:"",cName:"subleaseassignmentcontactid",cLabel:"Sublease Customer",cKey:!0,cLabelSize:4,cOrder:4,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"ContactId,Name"},PI_currencycd:{cLabel:"Lease Currency",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_brandcd:{dataLookUp:{LookUpCd:"GetLookUp_TNBrand",ColumnDB:"BrandCd",InitialWhere:"LeasingStatus = 'Y'",ParamWhere:""},cValidate:"",cName:"brandcd",cLabel:"Sublease Brand",cKey:!0,cLabelSize:4,cOrder:5,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"BrandCd,BrandName"},PI_contractamt:{cLabel:"Total Rental",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_descs:{cValidate:"max:150",cName:"descs",cLabel:"Description",cLabelSize:4,cOrder:6,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_totalgrossarea:{cValidate:"",cName:"totalgrossarea",cLabel:"Gross",cLabelSize:4,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_customerrequestno:{cValidate:"max:60",cName:"customerrequestno",cLabel:"Customer Req No",cLabelSize:4,cOrder:7,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_totalsemigrossarea:{cValidate:"",cName:"totalsemigrossarea",cLabel:"Semi",cLabelSize:4,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_marketingid:{cLabel:"Marketing",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_totalnetarea:{cValidate:"",cName:"totalnetarea",cLabel:"Net Area",cLabelSize:4,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_customerrequestdate:{cValidate:"",cName:"customerrequestdate",cLabel:"Customer Req Date",cLabelSize:4,cOrder:8,cKey:!0,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_operatingfromhour:{cValidate:"",cName:"operatingfromhour",cLabel:"Operating Hour",cLabelSize:4,cKey:!0,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_totalaging:{cLabel:"Total Aging",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_status:{cLabel:"Status",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_lano:{cValidate:"",cName:"lano",cLabel:"LA No",cLabelSize:4,cKey:!0,cType:"text",cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_ladate:{cValidate:"",cName:"ladate",cLabel:"LA Date",cLabelSize:4,cKey:!0,cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_remarks:{cValidate:"",cName:"remarks",cLabel:"Remarks",cLabelSize:4,cOrder:11,cKey:!1,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_contactid:{cLabel:"Customer",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_customercategorycd:{cLabel:"Customer Category",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_brandname:{cLabel:"Brand Name",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder,cProtect:!1}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage1Data}},methods:{GetSpecificationData:function(){var e=this,t={OptionFunctionCd:"GetSpecification",ModuleCd:this.Module,SubPortfolioCd:this.getDataUser().SubPortfolioCd};this.FnDynamicFunction(t).then(function(t){if(null!=t){var a=t[0];null!=a.AssignmentRunningCd&&""!=a.AssignmentRunningCd?e.M_TN_ContractSubLeaseEntry.subleaseassignmentno="(auto)":e.M_TN_ContractSubLeaseEntry.subleaseassignmentno=""}})},OnsubleaseassignmentdateChange:function(e){var t=this;this.$nextTick(function(){"VIEW"!=t.inputStatus&&(t.PI_applicationno.dataLookUp.InitialWhere="ContractStatus IN ('2','3','4') AND TerminateStatus ='N' AND ('"+e+"' BETWEEN RCD AND RED) AND Status = 'A' AND AntennaStatus = 'N' AND SubPortfolioCd = '"+t.getDataUser().SubPortfolioCd+"' AND ApplicationNo NOT IN (SELECT x.ApplicationNo FROM TN_ContractSubleaseAssignment x WHERE x.Status = 'N') AND ISNULL(TerminateStatus, 'N') = 'N'")}),this.$forceUpdate()},OnapplicationnoChange:function(e){var t=this;this.$nextTick(function(){t.M_TN_ContractSubLeaseEntry.applicationno=e.id,t.M_TN_ContractSubLeaseEntry.applicationnoLabel=e.label,t.M_TN_ContractSubLeaseEntry.rcd=t.momentDateFormat(e.RCD,"DD/MM/YYYY"),t.PI_rcd.cValidate="min_date:"+t.momentDateFormat(e.RCD,"DD/MM/YYYY"),t.M_TN_ContractSubLeaseEntry.red=t.momentDateFormat(e.RED,"DD/MM/YYYY"),t.PI_rcd.cValidateTo="max_date:"+t.momentDateFormat(e.RED,"DD/MM/YYYY"),t.inputStatus}),this.$forceUpdate()},OnsubleaseassignmentcontactidChange:function(e){var t=this;this.$nextTick(function(){t.M_TN_ContractSubLeaseEntry.subleaseassignmentcontactid=e.id,t.M_TN_ContractSubLeaseEntry.subleaseassignmentcontactidLabel=e.label,t.inputStatus}),this.$forceUpdate()},OnbrandcdChange:function(e){var t=this;this.$nextTick(function(){t.M_TN_ContractSubLeaseEntry.brandcd=e.id,t.M_TN_ContractSubLeaseEntry.brandcdLabel=e.label,t.inputStatus}),this.$forceUpdate()},OncustomerrequestdateChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},OnoperatingfromhourChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},OnremarksChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},setToolbarButton:function(){this.getToolbar().statusFunction[2].disabled=!0},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,t){"NEW"==e.Status.toUpperCase()?this.$store.commit("setEditStatus",!0):this.$store.commit("setEditStatus",!1)},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){},M_Post:function(e){},M_Insert:function(){var e=this;"(auto)"==this.M_TN_ContractSubLeaseEntry.subleaseassignmentno&&(this.M_TN_ContractSubLeaseEntry.subleaseassignmentno="null");var t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,SubleaseAssignmentNo:this.M_TN_ContractSubLeaseEntry.subleaseassignmentno,SubleaseAssignmentDate:""==this.M_TN_ContractSubLeaseEntry.subleaseassignmentdate||null==this.M_TN_ContractSubLeaseEntry.subleaseassignmentdate?"NULL":this.M_TN_ContractSubLeaseEntry.subleaseassignmentdate,ApplicationNo:this.M_TN_ContractSubLeaseEntry.applicationno,SubleaseAssignmentContactID:""==this.M_TN_ContractSubLeaseEntry.subleaseassignmentcontactid||null==this.M_TN_ContractSubLeaseEntry.subleaseassignmentcontactid?"NULL":this.M_TN_ContractSubLeaseEntry.subleaseassignmentcontactid,BrandCd:""==this.M_TN_ContractSubLeaseEntry.brandcd||null==this.M_TN_ContractSubLeaseEntry.brandcd?"NULL":this.M_TN_ContractSubLeaseEntry.brandcd,Descs:this.M_TN_ContractSubLeaseEntry.descs,CustomerRequestNo:this.M_TN_ContractSubLeaseEntry.customerrequestno,CustomerRequestDate:""==this.M_TN_ContractSubLeaseEntry.customerrequestdate||null==this.M_TN_ContractSubLeaseEntry.customerrequestdate?"NULL":this.M_TN_ContractSubLeaseEntry.customerrequestdate,Status:"N",RCD:""==this.M_TN_ContractSubLeaseEntry.rcd||null==this.M_TN_ContractSubLeaseEntry.rcd?"NULL":this.M_TN_ContractSubLeaseEntry.rcd,RED:this.M_TN_ContractSubLeaseEntry.red,Remarks:this.M_TN_ContractSubLeaseEntry.remarks,UserInput:this.getDataUser().UserId};this.postJSON(this.getUrlInsert(),t).then(function(t){null!=t&&e.$parent.resultInsert(t.Message)})},M_Update:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,SubleaseAssignmentNo:this.M_TN_ContractSubLeaseEntry.subleaseassignmentno,SubleaseAssignmentDate:""==this.M_TN_ContractSubLeaseEntry.subleaseassignmentdate||null==this.M_TN_ContractSubLeaseEntry.subleaseassignmentdate?"NULL":this.M_TN_ContractSubLeaseEntry.subleaseassignmentdate,ApplicationNo:this.M_TN_ContractSubLeaseEntry.applicationno,SubleaseAssignmentContactID:""==this.M_TN_ContractSubLeaseEntry.subleaseassignmentcontactid||null==this.M_TN_ContractSubLeaseEntry.subleaseassignmentcontactid?"NULL":this.M_TN_ContractSubLeaseEntry.subleaseassignmentcontactid,BrandCd:""==this.M_TN_ContractSubLeaseEntry.brandcd||null==this.M_TN_ContractSubLeaseEntry.brandcd?"NULL":this.M_TN_ContractSubLeaseEntry.brandcd,Descs:this.M_TN_ContractSubLeaseEntry.descs,CustomerRequestNo:this.M_TN_ContractSubLeaseEntry.customerrequestno,CustomerRequestDate:""==this.M_TN_ContractSubLeaseEntry.customerrequestdate||null==this.M_TN_ContractSubLeaseEntry.customerrequestdate?"NULL":this.M_TN_ContractSubLeaseEntry.customerrequestdate,RCD:""==this.M_TN_ContractSubLeaseEntry.rcd||null==this.M_TN_ContractSubLeaseEntry.rcd?"NULL":this.M_TN_ContractSubLeaseEntry.rcd,RED:this.M_TN_ContractSubLeaseEntry.red,Remarks:this.M_TN_ContractSubLeaseEntry.remarks,UserEdit:this.getDataUser().UserId,LastUpdateStamp:this.M_TN_ContractSubLeaseEntry.lastupdatestamp};this.postJSON(this.getUrlUpdate(),t).then(function(t){null!=t&&e.$parent.resultUpdate(t.Message)})},M_ClearForm:function(){this.M_TN_ContractSubLeaseEntry={subleaseassignmentno:"",applicationno:"",subleaseassignmentcontactid:"",subleaseassignmentdate:this.getToday(),brandcd:"",descs:"",customerrequestno:"",customerrequestdate:this.getToday(),status:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,lano:"",ladate:"",contactid:"",customercategorycd:"",rcd:"",red:"",con_rcd:"",con_red:"",leaseperiod:"",currencycd:"",contractamt:"",marketingid:"",operatingfromhour:"",operatingtohour:"",grossarea:0,semigrossarea:0,netarea:0,brandname:"",applicationname:"",subleasecustomername:"",lotno:"",subportfoliocd:this.getDataUser().SubPortfolioCd,lastupdatestamp:0,rowid:0,lanodate:"",grossseminetarea:"",chargeperiod:"months",perioddays:"",freerentalperiod:""}},M_New:function(){this.GetSpecificationData(),this.$refs.ref_applicationno.focus()},M_Edit:function(){var e=this.$store.getters.GetPage1Data;console.log(e),"New"==e.Status?this.$refs.ref_subleaseassignmentcontactid.focus():this.$refs.ref_remarks.focus()},M_Delete:function(e){var t=this,a=this.FormToABSList().getRowSelected(),s=[];a.forEach(function(e){s.push({SubPortfolioCd:t.getDataUser().SubPortfolioCd,SubleaseAssignmentNo:e.SubleaseNo,LastUpdateStamp:e.LastUpdateStamp,_Message_:""})});var n={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:s};this.postJSONMulti(this.getUrlNewDeleteMulti(),n).then(function(e){null!=e&&t.$parent.resultDelete()})},getDataBy:function(e){var t=this,a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,subleaseassignmentno:e.SubleaseNo};this.postEncode(this.getUrlById(),a).then(function(a){if(null!=a){var s=a.Data[0],n="";switch(s.status&&(n="N"==s.status?"Pending":"Y"==s.status?"Approved":"C"==s.status?"Cancel":"Unknown"),t.M_TN_ContractSubLeaseEntry={subleaseassignmentno:s.subleaseassignmentno,applicationno:s.applicationno,subleaseassignmentcontactid:s.subleaseassignmentcontactid,subleaseassignmentdate:t.getToday(s.subleaseassignmentdate),brandcd:s.subleasebrandcd,descs:s.descs,customerrequestno:s.customerrequestno,customerrequestdate:s.customerrequestdate,status:n,remarks:s.remarks,userinput:s.userinput,useredit:s.useredit,lano:s.lano,ladate:t.getToday(s.ladate),contactid:s.contactid&&""!=s.contactid?s.contactid+t.separator+s.applicationname:"",customercategorycd:s.customercategorycd&&""!=s.customercategorycd?s.customercategorycd+t.separator+s.customercategorydescs:"",rcd:s.rcd,red:s.red,con_rcd:s.con_rcd,con_red:s.con_red,leaseperiod:s.leaseperiod,currencycd:s.currencycd&&""!=s.currencycd?s.currencycd+t.separator+s.currencydescs:"",contractamt:t.isCurrency(s.contractamt,t.decimal),marketingid:s.marketingid&&""!=s.marketingid?s.marketingid+t.separator+s.marketingname:"",operatingfromhour:s.operatingfromhour,operatingtohour:s.operatingtohour,totalgrossarea:t.isCurrency(s.grossarea,t.decimal),totalsemigrossarea:t.isCurrency(s.semigrossarea,t.decimal),totalnetarea:t.isCurrency(s.netarea,t.decimal),brandname:s.brandname,applicationname:s.applicationname,subleasecustomername:s.subleasecustomername,lotno:s.lotno,subportfoliocd:s.subportfoliocd,lastupdatestamp:e.LastUpdateStamp,rowid:s.rowid,lanodate:s.lanodate,grossseminetarea:s.grossseminetarea,chargeperiod:s.chargeperiod,perioddays:s.perioddays,freerentalperiod:s.freerentalperiod,totalaging:t.isCurrency(s.totalaging,t.decimal)},"N"==s.status?(t.PI_subleaseassignmentdate.cKey=!1,t.PI_subleaseassignmentcontactid.cKey=!1,t.PI_brandcd.cKey=!1,t.PI_descs.cKey=!1,t.PI_customerrequestno.cKey=!1,t.PI_customerrequestdate.cKey=!1,t.PI_rcd.cKey=!1):(t.PI_subleaseassignmentdate.cKey=!0,t.PI_subleaseassignmentcontactid.cKey=!0,t.PI_brandcd.cKey=!0,t.PI_descs.cKey=!0,t.PI_customerrequestno.cKey=!0,t.PI_customerrequestdate.cKey=!0,t.PI_rcd.cKey=!0),s.chargeperiod){case"M":t.M_TN_ContractSubLeaseEntry.chargeperiod="months";break;case"D":t.M_TN_ContractSubLeaseEntry.chargeperiod="days";break;default:t.M_TN_ContractSubLeaseEntry.chargeperiod="years";break}t.M_TN_ContractSubLeaseEntry.applicationnoLabel=null!=t.M_TN_ContractSubLeaseEntry.applicationno&&""!=t.M_TN_ContractSubLeaseEntry.applicationno?s.applicationno+t.separator+s.applicationname:"",t.M_TN_ContractSubLeaseEntry.subleaseassignmentcontactidLabel=null!=t.M_TN_ContractSubLeaseEntry.subleaseassignmentcontactid&&""!=t.M_TN_ContractSubLeaseEntry.subleaseassignmentcontactid?s.subleaseassignmentcontactid+t.separator+s.subleasecustomername:"",t.M_TN_ContractSubLeaseEntry.brandcdLabel=null!=t.M_TN_ContractSubLeaseEntry.brandcd&&""!=t.M_TN_ContractSubLeaseEntry.brandcd?s.subleasebrandcd+t.separator+s.subleasebrandname:"",t.IEBy.Input=s.userinput,t.IEBy.Edit=s.useredit}})},MdtRange_rcd:function(e){this.M_TN_ContractSubLeaseEntry.rcd=e},MdtRange_red:function(e){this.M_TN_ContractSubLeaseEntry.red=e},MdtRange_operatingfromhour:function(e){this.M_TN_ContractSubLeaseEntry.operatingfromhour=e},MdtRange_operatingtohour:function(e){this.M_TN_ContractSubLeaseEntry.operatingtohour=e}},beforeCreate:function(){},created:function(){this.$store.commit("setFormType","List"),this.getToolbar().ProcessPS()},beforeMount:function(){},mounted:function(){this.hideSideBarMenu(),this.FormToABSList().doGetList("","eb_getList")},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),o=r,c=a("2877"),i=Object(c["a"])(o,s,n,!1,null,null,null);i.options.__file="TN_ContractSubLeaseEntry.vue";t["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d0cf75d.200f62c6.js.map