(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d238495"],{ff76:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("ABSListVuex",{attrs:{prop:t.propList,title:t.data.QueryName},on:{rowClicked:t.$parent.rowClicked,rowDblClicked:t.$parent.doDoubleClick,rowLinkClick:t.$parent.rowLink,pageSize:t.$parent.M_PageSize,pagination:t.$parent.M_Pagination,filter:t.$parent.M_Advance_Filter,headTable:t.$parent.M_Head_Table,refreshColumn:t.$parent.refreshColumn}}),i("div",{directives:[{name:"show",rawName:"v-show",value:t.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[i("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[i("span",{directives:[{name:"show",rawName:"v-show",value:t.IEBy.Input&&t.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[t._v("\n                    Input By : "+t._s(t.IEBy.Input)+" | Edit By : "+t._s(t.IEBy.Edit)+" "),i("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),i("b-collapse",{attrs:{id:"collapse1",visible:!0}},[i("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[i("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[i("b-form",{attrs:{"data-vv-scope":"FormScope_"+t.PageLevel+"_"+t.TabIndex,"data-vv-value-path":"FormScope_"+t.PageLevel+"_"+t.TabIndex}},[i("b-row",{staticStyle:{"padding-left":"10px"}},[i("b-col",{attrs:{md:"6",id:"col-left"}},[i("b-row",[i("b-col",{attrs:{md:"12"}},[i("ABSInputSelectList",{ref:"ref_trxtype",attrs:{prop:t.PI_trxtype,value:t.M_TN_ContractBillingAssignment.trxtype,label:t.M_TN_ContractBillingAssignment.trxtypeLabel},on:{change:t.OntrxtypeChange}})],1)],1),i("b-row",[i("b-col",{attrs:{md:"12"}},[i("ABSinputTextVuex",{ref:"ref_descs",attrs:{prop:t.PI_descs},model:{value:t.M_TN_ContractBillingAssignment.descs,callback:function(e){t.$set(t.M_TN_ContractBillingAssignment,"descs",e)},expression:"M_TN_ContractBillingAssignment.descs"}})],1)],1),i("b-row",[i("b-col",{attrs:{md:"12"}},[i("ABSinputDateVuex",{ref:"ref_billingdate",attrs:{prop:t.PI_billingdate},on:{input:t.OnbillingdateChange},model:{value:t.M_TN_ContractBillingAssignment.billingdate,callback:function(e){t.$set(t.M_TN_ContractBillingAssignment,"billingdate",e)},expression:"M_TN_ContractBillingAssignment.billingdate"}})],1)],1),i("b-row",[i("b-col",{attrs:{md:"12"}},[i("ABSInputSelectList",{ref:"ref_credittermscd",attrs:{prop:t.PI_credittermscd,value:t.M_TN_ContractBillingAssignment.credittermscd,label:t.M_TN_ContractBillingAssignment.credittermscdLabel},on:{change:t.OncredittermscdChange}})],1)],1),i("b-row",[i("b-col",{attrs:{md:"12"}},[i("ABSinputDateVuex",{ref:"ref_billingduedate",attrs:{prop:t.PI_billingduedate},on:{input:t.OnbillingduedateChange},model:{value:t.M_TN_ContractBillingAssignment.billingduedate,callback:function(e){t.$set(t.M_TN_ContractBillingAssignment,"billingduedate",e)},expression:"M_TN_ContractBillingAssignment.billingduedate"}})],1)],1),i("b-row",[i("b-col",{attrs:{md:"12"}},[i("ABSInputSelectList",{ref:"ref_currencycd",attrs:{prop:t.PI_currencycd,value:t.M_TN_ContractBillingAssignment.currencycd,label:t.M_TN_ContractBillingAssignment.currencycdLabel},on:{change:t.OncurrencycdChange}})],1)],1)],1),i("b-col",{attrs:{md:"6",id:"col-right"}},[i("b-row",[i("b-col",{attrs:{md:"12"}},[i("ABSinputTextVuex",{ref:"ref_totalarea",attrs:{prop:t.PI_totalarea},on:{input:t.OntotalareaChange},model:{value:t.M_TN_ContractBillingAssignment.totalarea,callback:function(e){t.$set(t.M_TN_ContractBillingAssignment,"totalarea",e)},expression:"M_TN_ContractBillingAssignment.totalarea"}})],1)],1),i("b-row",[i("b-col",{attrs:{md:"12"}},[i("ABSinputTextVuex",{ref:"ref_billingrate",attrs:{prop:t.PI_billingrate},on:{input:t.OnbillingrateChange},model:{value:t.M_TN_ContractBillingAssignment.billingrate,callback:function(e){t.$set(t.M_TN_ContractBillingAssignment,"billingrate",e)},expression:"M_TN_ContractBillingAssignment.billingrate"}})],1)],1),i("b-row",[i("b-col",{attrs:{md:"12"}},[i("ABSinputTextVuex",{ref:"ref_billingamt",attrs:{prop:t.PI_billingamt},model:{value:t.M_TN_ContractBillingAssignment.billingamt,callback:function(e){t.$set(t.M_TN_ContractBillingAssignment,"billingamt",e)},expression:"M_TN_ContractBillingAssignment.billingamt"}})],1)],1),i("b-row",[i("b-col",{attrs:{md:"12"}},[i("ABSTextAreaVuex",{ref:"ref_remarks",attrs:{prop:t.PI_remarks},on:{input:t.OnremarksChange},model:{value:t.M_TN_ContractBillingAssignment.remarks,callback:function(e){t.$set(t.M_TN_ContractBillingAssignment,"remarks",e)},expression:"M_TN_ContractBillingAssignment.remarks"}})],1)],1)],1)],1),i("ABSTAnalysis",{attrs:{prop:t.PTAnalysis}})],1)],1)],1)],1)],1)],1)},a=[],s=(i("ac6a"),i("cadf"),i("551c"),i("097d"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{ValKey:null,FormType:"List",Module:"TN",propList:{initialWhere:"SubleaseAssignmentNo = '"+this.ValKey+"'",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_TN_ContractBillingAssignment:{subportfoliocd:this.getDataUser().SubPortfolioCd,trxtype:"",trxdescs:"",descs:"",billingdate:this.momentDate(new Date),credittermscd:"",creditdescs:"",billingduedate:this.momentDate(new Date),currencycd:"",currencydescs:"",totalarea:"",billingrate:"",billingamt:"",addresscd:"",subleaseassignmentno:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,address1:"",subleasebillingsequenceno:0,lastupdatestamp:0,rowid:0},PI_trxtype:{dataLookUp:{LookUpCd:"GetLookupTrxTypeMapping",ColumnDB:"TrxType",InitialWhere:"TenancyChargeType = 'J' AND SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"'",ParamWhere:"",SourceField:"TrxType,Descs,TenancyChargeType=ChargeDescs,TimeEdit",DisplayLookUp:"TrxType,Descs"},cValidate:"",cName:"trxtype",cLabel:"Transaction Type",cKey:!1,cLabelSize:4,cOrder:1,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"TrxType,Descs"},PI_descs:{cValidate:"max:60",cName:"descs",cLabel:"Description",cLabelSize:4,cOrder:2,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_billingdate:{cValidate:"",cName:"billingdate",cLabel:"Billing Date",cLabelSize:4,cOrder:3,cKey:!1,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_credittermscd:{dataLookUp:{LookUpCd:"GetCreditTermsCd",ColumnDB:"CreditTermsCd",InitialWhere:"",ParamWhere:""},cValidate:"",cName:"credittermscd",cLabel:"Credit Terms",cKey:!1,cLabelSize:4,cOrder:4,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"CreditTermsCd,Descs"},PI_billingduedate:{cValidate:"",cName:"billingduedate",cLabel:"Due Date",cLabelSize:4,cOrder:5,cKey:!1,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_currencycd:{dataLookUp:{LookUpCd:"GetLookupCMCurrency",ColumnDB:"CurrencyCd",InitialWhere:"",ParamWhere:""},cValidate:"",cName:"currencycd",cLabel:"Currency",cKey:!1,cLabelSize:4,cOrder:6,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"CurrencyCd,Descs"},PI_totalarea:{cValidate:"max:22",cName:"totalarea",cLabel:"Total Area",cLabelSize:4,cOrder:7,cKey:!1,cType:"decimal",cDecimal:2,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_billingrate:{cValidate:"max:22",cName:"billingrate",cLabel:"Billing Rate",cLabelSize:4,cOrder:8,cKey:!1,cType:"decimal",cDecimal:2,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_billingamt:{cValidate:"max:22",cName:"billingamt",cLabel:"Billing Amount",cLabelSize:4,cOrder:9,cKey:!1,cType:"decimal",cDecimal:2,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_addresscd:{cValidate:"max:22",cName:"addresscd",cLabel:"Billing Address",cLabelSize:4,cOrder:10,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_remarks:{cValidate:"",cName:"remarks",cLabel:"Remarks",cLabelSize:4,cOrder:11,cKey:!1,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder,cProtect:!1},ContractData:[],DueDay:0}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage2Data},DataRowPage1:function(){return this.$store.getters.GetPage1Data},GetDataBy1:function(){return this.$store.getters.GetPage1GetDataBy},GetDataBy2:function(){return this.$store.getters.GetPage2GetDataBy}},methods:{OntrxtypeChange:function(t){var e=this;this.$nextTick(function(){e.M_TN_ContractBillingAssignment.trxtype=t.id,e.M_TN_ContractBillingAssignment.trxtypeLabel=t.label,"VIEW"!=e.inputStatus&&e.FnGetTrxTypeData(e.getDataUser().SubPortfolioCd,"AR",t.id).then(function(t){if(0!=t.length){var i=t[0];e.M_TN_ContractBillingAssignment.descs=i.TrxTypeDescs,e.M_TN_ContractBillingAssignment.currencycd=i.CurrencyCd,e.M_TN_ContractBillingAssignment.currencycdLabel=i.CurrencyCd,e.M_TN_ContractBillingAssignment.credittermscd=i.CreditTermsCd,e.M_TN_ContractBillingAssignment.credittermscdLabel=i.CreditTermsCd;var n={id:i.CreditTermsCd,label:i.CreditTermsCd};e.OncredittermscdChange(n)}})}),this.$forceUpdate()},OntotalareaChange:function(t){var e=this;this.$nextTick(function(){if("VIEW"!=e.inputStatus){var i=e.M_TN_ContractBillingAssignment.billingrate&&""!=e.M_TN_ContractBillingAssignment.billingrate?e.M_TN_ContractBillingAssignment.billingrate:0,n=e.replaceAllString(t,",","","number")*e.replaceAllString(i,",","","number");e.M_TN_ContractBillingAssignment.billingamt=e.isCurrency(n,e.decimal)}}),this.$forceUpdate()},OnbillingdateChange:function(t){var e=this;this.$nextTick(function(){"VIEW"!=e.inputStatus&&e.DueDay&&(e.M_TN_ContractBillingAssignment.billingduedate=e.dateAdd2("d",t,e.DueDay))}),this.$forceUpdate()},OnbillingrateChange:function(t){var e=this;this.$nextTick(function(){if("VIEW"!=e.inputStatus){var i=e.M_TN_ContractBillingAssignment.totalarea&&""!=e.M_TN_ContractBillingAssignment.totalarea?e.M_TN_ContractBillingAssignment.totalarea:0,n=e.replaceAllString(i,",","","number")*e.replaceAllString(t,",","","number");e.M_TN_ContractBillingAssignment.billingamt=e.isCurrency(n,e.decimal)}}),this.$forceUpdate()},OncredittermscdChange:function(t){var e=this;this.$nextTick(function(){e.M_TN_ContractBillingAssignment.credittermscd=t.id,e.M_TN_ContractBillingAssignment.credittermscdLabel=t.label,"VIEW"!=e.inputStatus&&e.FnGetCreditTermsData(t.id).then(function(t){if(!(null==t||t.length<1)){var i=t[0];e.DueDay=i.Dueday,e.M_TN_ContractBillingAssignment.billingdate&&""!==e.M_TN_ContractBillingAssignment.billingdate&&(e.M_TN_ContractBillingAssignment.billingduedate=e.dateAdd2("d",e.M_TN_ContractBillingAssignment.billingdate,i.Dueday))}})}),this.$forceUpdate()},OnbillingduedateChange:function(t){var e=this;this.$nextTick(function(){e.inputStatus}),this.$forceUpdate()},OncurrencycdChange:function(t){var e=this;this.$nextTick(function(){e.M_TN_ContractBillingAssignment.currencycd=t.id,e.M_TN_ContractBillingAssignment.currencycdLabel=t.label,e.inputStatus}),this.$forceUpdate()},OnremarksChange:function(t){var e=this;this.$nextTick(function(){e.inputStatus}),this.$forceUpdate()},setToolbarButton:function(){},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(t){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(t,e){},rowLink:function(t){this.$refs.modalTest.show()},paramFromParent:function(){this.$parent.showForm=!1;var t=this.$store.getters.GetPage1Data;"New"==t.Status?(this.FormType="List",this.$store.commit("setFormType","List"),this.getToolbar().ProcessPS()):(this.FormType="View",this.$store.commit("setFormType","View"),this.getToolbar().ProcessPS()),this.getContractData(t.ApplicationNo),this.M_TN_ContractBillingAssignment.subleaseassignmentno=t.SubleaseAssignmentNo,this.propList.initialWhere=" BillingType = 'J' AND  SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' AND ApplicationNo = '"+t.ApplicationNo+"' AND SubLeaseAssignmentNo = '"+t.SubleaseAssignmentNo+"' AND TrxType IN ( SELECT TrxType FROM TN_TransactionTypeMapping WHERE TenancyChargeType='J' AND SubPortfolioCd='"+this.getDataUser().SubPortfolioCd+"') ",this.FormToABSList().doGetList("","eb_getList")},M_Insert:function(){var t=this;if(this.GetDataBy1.subleaseassignmentaddresscd&&""!=this.GetDataBy1.subleaseassignmentaddresscd){this.M_TN_ContractBillingAssignment.addresscd=this.GetDataBy1.subleaseassignmentaddresscd;var e={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,SubleaseAssignmentNo:this.M_TN_ContractBillingAssignment.subleaseassignmentno,TrxType:""==this.M_TN_ContractBillingAssignment.trxtype||null==this.M_TN_ContractBillingAssignment.trxtype?"NULL":this.M_TN_ContractBillingAssignment.trxtype,Descs:this.M_TN_ContractBillingAssignment.descs,BillingDate:""==this.M_TN_ContractBillingAssignment.billingdate||null==this.M_TN_ContractBillingAssignment.billingdate?"NULL":this.M_TN_ContractBillingAssignment.billingdate,CreditTermsCd:""==this.M_TN_ContractBillingAssignment.credittermscd||null==this.M_TN_ContractBillingAssignment.credittermscd?"NULL":this.M_TN_ContractBillingAssignment.credittermscd,BillingDueDate:""==this.M_TN_ContractBillingAssignment.billingduedate||null==this.M_TN_ContractBillingAssignment.billingduedate?"NULL":this.M_TN_ContractBillingAssignment.billingduedate,CurrencyCd:""==this.M_TN_ContractBillingAssignment.currencycd||null==this.M_TN_ContractBillingAssignment.currencycd?"":this.M_TN_ContractBillingAssignment.currencycd,TotalArea:this.M_TN_ContractBillingAssignment.totalarea?this.replaceAllString(this.M_TN_ContractBillingAssignment.totalarea,",","","number"):0,BillingRate:this.M_TN_ContractBillingAssignment.billingrate?this.replaceAllString(this.M_TN_ContractBillingAssignment.billingrate,",","","number"):0,BillingAmt:this.M_TN_ContractBillingAssignment.billingamt?this.replaceAllString(this.M_TN_ContractBillingAssignment.billingamt,",","","number"):0,AddressCd:this.M_TN_ContractBillingAssignment.addresscd,Remarks:this.M_TN_ContractBillingAssignment.remarks,AssignType:"A",UserInput:this.getDataUser().UserId};this.postJSON(this.getUrlInsert(),e).then(function(e){null!=e&&t.$parent.resultInsert(e.Message)})}else this.alertError("Please set customer address first in header.")},M_Update:function(){var t=this,e=this.$store.getters.GetPage1GetDataBy;if(e.subleaseassignmentaddresscd&&""!=e.subleaseassignmentaddresscd){this.M_TN_ContractBillingAssignment.addresscd=e.subleaseassignmentaddresscd;var i={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,SubleaseAssignmentNo:this.M_TN_ContractBillingAssignment.subleaseassignmentno,BillingSequenceNo:this.M_TN_ContractBillingAssignment.subleasebillingsequenceno,TrxType:""==this.M_TN_ContractBillingAssignment.trxtype||null==this.M_TN_ContractBillingAssignment.trxtype?"NULL":this.M_TN_ContractBillingAssignment.trxtype,Descs:this.M_TN_ContractBillingAssignment.descs,BillingDate:""==this.M_TN_ContractBillingAssignment.billingdate||null==this.M_TN_ContractBillingAssignment.billingdate?"NULL":this.M_TN_ContractBillingAssignment.billingdate,CreditTermsCd:""==this.M_TN_ContractBillingAssignment.credittermscd||null==this.M_TN_ContractBillingAssignment.credittermscd?"NULL":this.M_TN_ContractBillingAssignment.credittermscd,BillingDueDate:""==this.M_TN_ContractBillingAssignment.billingduedate||null==this.M_TN_ContractBillingAssignment.billingduedate?"NULL":this.M_TN_ContractBillingAssignment.billingduedate,CurrencyCd:""==this.M_TN_ContractBillingAssignment.currencycd||null==this.M_TN_ContractBillingAssignment.currencycd?"NULL":this.M_TN_ContractBillingAssignment.currencycd,TotalArea:this.M_TN_ContractBillingAssignment.totalarea?this.replaceAllString(this.M_TN_ContractBillingAssignment.totalarea,",","","number"):0,BillingRate:this.M_TN_ContractBillingAssignment.billingrate?this.replaceAllString(this.M_TN_ContractBillingAssignment.billingrate,",","","number"):0,BillingAmt:this.M_TN_ContractBillingAssignment.billingamt?this.replaceAllString(this.M_TN_ContractBillingAssignment.billingamt,",","","number"):0,AddressCd:this.M_TN_ContractBillingAssignment.addresscd,Remarks:this.M_TN_ContractBillingAssignment.remarks,UserEdit:this.getDataUser().UserId,LastUpdateStamp:this.M_TN_ContractBillingAssignment.lastupdatestamp};this.postJSON(this.getUrlUpdate(),i).then(function(e){null!=e&&t.$parent.resultUpdate(e.Message)})}else this.alertError("Please set customer address first in header.")},M_ClearForm:function(){this.M_TN_ContractBillingAssignment={subportfoliocd:this.getDataUser().SubPortfolioCd,trxtype:"",trxdescs:"",descs:"",billingdate:this.momentDate(new Date),credittermscd:"",creditdescs:"",billingduedate:this.momentDate(new Date),currencycd:"",currencydescs:"",totalarea:"",billingrate:"",billingamt:"",addresscd:"",subleaseassignmentno:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,address1:"",subleasebillingsequenceno:0,lastupdatestamp:0,rowid:0}},M_New:function(){var t=this.$store.getters.GetPage1Data;this.M_TN_ContractBillingAssignment.subleaseassignmentno=t.SubleaseAssignmentNo,"N"==this.ContractData.ChargeArea?this.M_TN_ContractBillingAssignment.totalarea=this.isCurrency(this.ContractData.TotalNetArea,this.decimal):"S"==this.ContractData.ChargeArea?this.M_TN_ContractBillingAssignment.totalarea=this.isCurrency(this.ContractData.TotalSemiGrossArea,this.decimal):this.M_TN_ContractBillingAssignment.totalarea=this.isCurrency(this.ContractData.TotalGrossArea,this.decimal)},M_Edit:function(){},M_Delete:function(t){var e=this,i=this.FormToABSList().getRowSelected(),n=[];i.forEach(function(t){n.push({SubPortfolioCd:e.getDataUser().SubPortfolioCd,BillingSequenceNo:t.SubLeaseBillingSequenceNo,SubleaseAssignmentNo:e.DataRowPage1.SubleaseAssignmentNo,LastUpdateStamp:t.LastUpdateStamp})});var a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:n};this.postJSONMulti(this.getUrlNewDeleteMulti(),a).then(function(t){null!=t&&e.$parent.resultDelete()})},getDataBy:function(t){var e=this,i={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,subleaseassignmentno:t.SubleaseAssignmentNo,billingsequenceno:t.SubLeaseBillingSequenceNo};this.postEncode(this.getUrlById(),i).then(function(i){if(null!=i){var n=i.Data[0];e.M_TN_ContractBillingAssignment={subportfoliocd:n.subportfoliocd,trxtype:n.trxtype,trxdescs:n.trxdescs,descs:n.descs,billingdate:n.billingdate,credittermscd:n.credittermscd,creditdescs:n.creditdescs,billingduedate:n.billingduedate,currencycd:n.currencycd,currencydescs:n.currencydescs,totalarea:e.isCurrency(n.totalarea,e.decimal),billingrate:e.isCurrency(n.billingrate,e.decimal),billingamt:e.isCurrency(n.billingamt,e.decimal),addresscd:n.addresscd,subleaseassignmentno:t.SubleaseAssignmentNo,remarks:n.remarks,userinput:n.userinput,useredit:n.useredit,address1:n.address1,subleasebillingsequenceno:t.SubLeaseBillingSequenceNo,lastupdatestamp:t.LastUpdateStamp,rowid:n.rowid},e.M_TN_ContractBillingAssignment.trxtypeLabel=null!=e.M_TN_ContractBillingAssignment.trxtype&&""!=e.M_TN_ContractBillingAssignment.trxtype?n.trxtype+e.separator+n.trxdescs:"",e.M_TN_ContractBillingAssignment.credittermscdLabel=null!=e.M_TN_ContractBillingAssignment.credittermscd&&""!=e.M_TN_ContractBillingAssignment.credittermscd?n.credittermscd+e.separator+n.creditdescs:"",e.M_TN_ContractBillingAssignment.currencycdLabel=null!=e.M_TN_ContractBillingAssignment.currencycd&&""!=e.M_TN_ContractBillingAssignment.currencycd?n.currencycd+e.separator+n.currencydescs:"",e.IEBy.Input=n.userinput,e.IEBy.Edit=n.useredit}})},getContractData:function(t){var e=this,i={OptionFunctionCd:"GetContractData",ModuleCd:"TN",SubPortfolioCd:this.getDataUser().SubPortfolioCd,ApplicationNo:t};this.FnDynamicFunction(i).then(function(t){null==t||t.length<1||(e.ContractData=t[0])})}},created:function(){},beforeMount:function(){},mounted:function(){this.hideSideBarMenu()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),r=s,l=i("2877"),c=Object(l["a"])(r,n,a,!1,null,null,null);c.options.__file="TN_ContractBillingAssignment.vue";e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d238495.bd2a0c8b.js.map