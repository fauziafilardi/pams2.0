(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0da743"],{"6c55":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ABSListVuex",{attrs:{prop:e.propList,title:e.data.QueryName},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table,refreshColumn:e.$parent.refreshColumn}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[a("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                    Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),a("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),a("b-collapse",{attrs:{id:"collapse1",visible:!0}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[a("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[a("b-row",{staticStyle:{"padding-left":"10px"}},[a("b-col",{attrs:{md:"12",id:"col-left"}},[a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_trxtype",attrs:{prop:e.PI_trxtype,value:e.M_TN_SubPortfolioChargesRate.trxtype,label:e.M_TN_SubPortfolioChargesRate.trxtypeLabel},on:{change:e.OntrxtypeChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputRadioButtonVuex",{ref:"ref_chargetype",attrs:{prop:e.PI_chargetype},on:{input:e.OnchargetypeChange},model:{value:e.M_TN_SubPortfolioChargesRate.chargetype,callback:function(t){e.$set(e.M_TN_SubPortfolioChargesRate,"chargetype",t)},expression:"M_TN_SubPortfolioChargesRate.chargetype"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_chargevalue",attrs:{prop:e.PI_chargevalue},model:{value:e.M_TN_SubPortfolioChargesRate.chargevalue,callback:function(t){e.$set(e.M_TN_SubPortfolioChargesRate,"chargevalue",t)},expression:"M_TN_SubPortfolioChargesRate.chargevalue"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSTextAreaVuex",{ref:"ref_remarks",attrs:{prop:e.PI_remarks},on:{input:e.OnremarksChange},model:{value:e.M_TN_SubPortfolioChargesRate.remarks,callback:function(t){e.$set(e.M_TN_SubPortfolioChargesRate,"remarks",t)},expression:"M_TN_SubPortfolioChargesRate.remarks"}})],1)],1)],1)],1),a("ABSTAnalysis",{attrs:{prop:e.PTAnalysis}})],1)],1)],1)],1)],1)],1)},o=[],i=(a("ac6a"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{ValKey:null,FormType:"List",Module:"TN",propList:{initialWhere:"SubPortfolioCd = '"+this.ValKey+"'",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_TN_SubPortfolioChargesRate:{subportfoliocd:this.getDataUser().SubPortfolioCd,trxtype:"",descs:"",modulecd:"",chargetype:"R",chargevalue:"0",remarks:"",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:0,rowid:0},PI_trxtype:{dataLookUp:{LookUpCd:"GetTrxType",ColumnDB:"TrxType",InitialWhere:"",ParamWhere:""},cValidate:"",cName:"trxtype",cLabel:"Trans. Type",cKey:!1,cLabelSize:4,cOrder:1,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"TrxType,Descs"},PI_chargetype:{cValidate:"",cName:"chargetype",cId:"rdbchargetype",cRadioOptions:[{text:"Rate",value:"R"},{text:"Fix",value:"F"}],cRadioDefaultOption:"R",cLabel:"Charge Type",cLabelSize:4,cOrder:0,cProtect:!1,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_chargevalue:{cValidate:"",cName:"chargevalue",cLabel:"Charge Value",cLabelSize:4,cOrder:2,cKey:!1,cType:"decimal",cDecimal:2,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_remarks:{cValidate:"",cName:"remarks",cLabel:"Remarks",cLabelSize:4,cOrder:0,cKey:!1,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage2Data},DataRowPage1:function(){return this.$store.getters.GetPage1Data}},methods:{OntrxtypeChange:function(e){var t=this;this.$nextTick(function(){t.M_TN_SubPortfolioChargesRate.trxtype=e.id,t.M_TN_SubPortfolioChargesRate.trxtypeLabel=e.label,t.inputStatus}),this.$forceUpdate()},OnchargetypeChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},OnremarksChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},setToolbarButton:function(){},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,t){},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){this.$parent.showForm=!1;var e=this.$store.getters.GetPage1Data;this.M_TN_SubPortfolioChargesRate.subportfoliocd=e.SubPortfolioCd,this.propList.initialWhere=" SubPortfolioCd = '"+e.SubPortfolioCd+"' ",this.FormToABSList().doGetList("","eb_getList")},M_Insert:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.M_TN_SubPortfolioChargesRate.subportfoliocd,TrxType:""==this.M_TN_SubPortfolioChargesRate.trxtype||null==this.M_TN_SubPortfolioChargesRate.trxtype?"NULL":this.M_TN_SubPortfolioChargesRate.trxtype,ModuleCd:this.M_TN_SubPortfolioChargesRate.modulecd,ChargeType:this.M_TN_SubPortfolioChargesRate.chargetype,ChargeValue:this.M_TN_SubPortfolioChargesRate.chargevalue?this.replaceAllString(this.M_TN_SubPortfolioChargesRate.chargevalue,",","","number"):0,Remarks:this.M_TN_SubPortfolioChargesRate.remarks,UserInput:this.getDataUser().UserId};this.postJSON(this.getUrlInsert(),t).then(function(t){null!=t&&e.$parent.resultInsert(t.Message)})},M_Update:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.M_TN_SubPortfolioChargesRate.subportfoliocd,TrxType:""==this.M_TN_SubPortfolioChargesRate.trxtype||null==this.M_TN_SubPortfolioChargesRate.trxtype?"NULL":this.M_TN_SubPortfolioChargesRate.trxtype,ModuleCd:this.M_TN_SubPortfolioChargesRate.modulecd,ChargeType:this.M_TN_SubPortfolioChargesRate.chargetype,ChargeValue:this.M_TN_SubPortfolioChargesRate.chargevalue?this.replaceAllString(this.M_TN_SubPortfolioChargesRate.chargevalue,",","","number"):0,Remarks:this.M_TN_SubPortfolioChargesRate.remarks,LastUpdateStamp:this.M_TN_SubPortfolioChargesRate.lastupdatestamp,UserEdit:this.getDataUser().UserId};this.postJSON(this.getUrlUpdate(),t).then(function(t){null!=t&&e.$parent.resultUpdate(t.Message)})},M_ClearForm:function(){this.M_TN_SubPortfolioChargesRate={subportfoliocd:this.getDataUser().SubPortfolioCd,trxtype:"",descs:"",modulecd:"",chargetype:"R",chargevalue:"0",remarks:"",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:0,rowid:0}},M_New:function(){var e=this.$store.getters.GetPage1Data;this.M_TN_SubPortfolioChargesRate.subportfoliocd=e.SubPortfolioCd},M_Edit:function(){},M_Delete:function(e){var t=this,a=this.FormToABSList().getRowSelected(),r=[];a.forEach(function(e){r.push({SubPortfolioCd:e.SubPortfolioCd,TrxType:e.TrxType,LastUpdateStamp:e.LastUpdateStamp,_Message_:""})});var o={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:r};this.postJSONMulti(this.getUrlNewDeleteMulti(),o).then(function(e){null!=e&&t.$parent.resultDelete()})},getDataBy:function(e){var t=this,a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,subportfoliocd:e.SubPortfolioCd,trxtype:e.TrxType,chargetype:e.ChargeType};this.postEncode(this.getUrlById(),a).then(function(a){if(null!=a){var r=a.Data[0];t.M_TN_SubPortfolioChargesRate={subportfoliocd:r.subportfoliocd,trxtype:r.trxtype,descs:r.descs,modulecd:r.modulecd,chargetype:r.chargetype,chargevalue:t.isCurrency(r.chargevalue,t.decimal),remarks:r.remarks,userinput:r.userinput,useredit:r.useredit,timeinput:r.timeinput,timeedit:r.timeedit,lastupdatestamp:e.LastUpdateStamp,rowid:t.isCurrency(r.rowid,t.decimal)},t.M_TN_SubPortfolioChargesRate.trxtypeLabel=null!=t.M_TN_SubPortfolioChargesRate.trxtype&&""!=t.M_TN_SubPortfolioChargesRate.trxtype?r.trxtype+t.separator:"",t.IEBy.Input=r.userinput,t.IEBy.Edit=r.useredit}})}},created:function(){},beforeMount:function(){},mounted:function(){this.hideSideBarMenu()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),s=i,n=a("2877"),l=Object(n["a"])(s,r,o,!1,null,null,null);l.options.__file="TN_SubPortfolioChargesRate.vue";t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0da743.688ced89.js.map