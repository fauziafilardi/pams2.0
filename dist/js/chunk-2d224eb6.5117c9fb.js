(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d224eb6"],{e1d8:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ABSListVuex",{attrs:{prop:t.propList,title:t.data.QueryName},on:{rowClicked:t.$parent.rowClicked,rowDblClicked:t.$parent.doDoubleClick,rowLinkClick:t.$parent.rowLink,pageSize:t.$parent.M_PageSize,pagination:t.$parent.M_Pagination,filter:t.$parent.M_Advance_Filter,headTable:t.$parent.M_Head_Table,refreshColumn:t.$parent.refreshColumn}}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[a("span",{directives:[{name:"show",rawName:"v-show",value:t.IEBy.Input&&t.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[t._v("\n        Input By : "+t._s(t.IEBy.Input)+" | Edit By : "+t._s(t.IEBy.Edit)+"\n        "),a("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),a("b-collapse",{attrs:{id:"collapse1",visible:!0}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[a("b-form",{attrs:{"data-vv-scope":"FormScope_"+t.PageLevel+"_"+t.TabIndex,"data-vv-value-path":"FormScope_"+t.PageLevel+"_"+t.TabIndex}},[a("b-row",{staticStyle:{"padding-left":"10px"}},[a("b-col",{attrs:{md:"12",id:"col-left"}},[a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_lotno",attrs:{prop:t.PI_lotno,value:t.M_TN_LOOCLLot.lotno,label:t.M_TN_LOOCLLot.lotnoLabel},on:{change:t.OnlotnoChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSCompute",{ref:"ref_blockcd",attrs:{prop:t.PI_blockcd},model:{value:t.M_TN_LOOCLLot.blockcd,callback:function(e){t.$set(t.M_TN_LOOCLLot,"blockcd",e)},expression:"M_TN_LOOCLLot.blockcd"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSCompute",{ref:"ref_floorcd",attrs:{prop:t.PI_floorcd},model:{value:t.M_TN_LOOCLLot.floorcd,callback:function(e){t.$set(t.M_TN_LOOCLLot,"floorcd",e)},expression:"M_TN_LOOCLLot.floorcd"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputRadioButtonVuex",{ref:"ref_fixcharges",attrs:{prop:t.PI_fixcharges},on:{input:t.OnfixchargesChange},model:{value:t.M_TN_LOOCLLot.fixcharges,callback:function(e){t.$set(t.M_TN_LOOCLLot,"fixcharges",e)},expression:"M_TN_LOOCLLot.fixcharges"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputRadioButtonVuex",{ref:"ref_chargearea",attrs:{prop:t.PI_chargearea},on:{input:t.OnchargeareaChange},model:{value:t.M_TN_LOOCLLot.chargearea,callback:function(e){t.$set(t.M_TN_LOOCLLot,"chargearea",e)},expression:"M_TN_LOOCLLot.chargearea"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSCompute",{ref:"ref_grossarea",attrs:{prop:t.PI_grossarea},model:{value:t.grossDescs,callback:function(e){t.grossDescs=e},expression:"grossDescs"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSCompute",{ref:"ref_budgetrate",attrs:{prop:t.PI_budgetrate},model:{value:t.M_TN_LOOCLLot.budgetrate,callback:function(e){t.$set(t.M_TN_LOOCLLot,"budgetrate",e)},expression:"M_TN_LOOCLLot.budgetrate"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_rentalrate",attrs:{prop:t.PI_rentalrate},on:{input:t.OnrentalrateChange},model:{value:t.M_TN_LOOCLLot.rentalrate,callback:function(e){t.$set(t.M_TN_LOOCLLot,"rentalrate",e)},expression:"M_TN_LOOCLLot.rentalrate"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSCompute",{ref:"ref_rentalamt",attrs:{prop:t.PI_rentalamt},model:{value:t.M_TN_LOOCLLot.rentalamt,callback:function(e){t.$set(t.M_TN_LOOCLLot,"rentalamt",e)},expression:"M_TN_LOOCLLot.rentalamt"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputRadioButtonVuex",{ref:"ref_tenantstatus",attrs:{prop:t.PI_tenantstatus},on:{input:t.OntenantstatusChange},model:{value:t.M_TN_LOOCLLot.tenantstatus,callback:function(e){t.$set(t.M_TN_LOOCLLot,"tenantstatus",e)},expression:"M_TN_LOOCLLot.tenantstatus"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSTextAreaVuex",{ref:"ref_remarks",attrs:{prop:t.PI_remarks},on:{input:t.OnremarksChange},model:{value:t.M_TN_LOOCLLot.remarks,callback:function(e){t.$set(t.M_TN_LOOCLLot,"remarks",e)},expression:"M_TN_LOOCLLot.remarks"}})],1)],1)],1)],1),a("ABSTAnalysis",{attrs:{prop:t.PTAnalysis}})],1)],1)],1)],1)],1)],1)},r=[],s=(a("28a5"),a("ac6a"),a("6b54"),a("cadf"),a("551c"),a("097d"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{ValKey:null,FormType:"List",Module:"TN",propList:{initialWhere:"ApplicationNo = '"+this.ValKey+"'",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_TN_LOOCLLot:{applicationno:"",subportfoliocd:this.getDataUser().SubPortfolioCd,lotno:"",grossarea:0,semigrossarea:0,netarea:0,rentalqty:0,rentalrate:"0",rentalamt:0,chargearea:"",fixcharges:"",blockcd:"",blockdescs:"",floorcd:"",floordescs:"",rcd:"",red:"",tenantstatus:"",lotthemecd:"",themedescs:"",lotclasscd:"",classdescs:"",lotcategorycd:"",categorydescs:"",lottypedescs:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,antenna:"",lotdescs:"",budgetrate:0,totalrate:0,lastupdatestamp:0,rowid:0},PI_lotno:{dataLookUp:{LookUpCd:"GetLOOCLLotNo",ColumnDB:"LotNo",InitialWhere:"",ParamWhere:"",SourceField:"LotNo,Descs,FixCharges,ChargeArea,GrossArea,SemiGrossArea,NetArea",DisplayLookUp:"LotNo,Descs"},cValidate:"required",cName:"lotno",cLabel:"Lot No",cKey:!1,cLabelSize:4,cOrder:1,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"LotNo,Descs"},PI_blockcd:{cLabel:"Block",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_floorcd:{cLabel:"Floor",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_fixcharges:{cValidate:"",cName:"fixcharges",cId:"rdbfixcharges",cRadioOptions:[{text:"No",value:"N"},{text:"Yes",value:"Y"}],cRadioDefaultOption:"",cLabel:"Fix Charges",cLabelSize:4,cOrder:0,cProtect:!0,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_chargearea:{cValidate:"",cName:"chargearea",cId:"rdbchargearea",cRadioOptions:[{text:"Gross Area",value:"G"},{text:"Semi Gross Area",value:"S"},{text:"Net Area",value:"N"}],cRadioDefaultOption:"",cLabel:"Base Calculation Area",cLabelSize:4,cOrder:0,cProtect:!0,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_grossarea:{cLabel:"Gross Area",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_semigrossarea:{cLabel:"Semi Gross Area",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_netarea:{cLabel:"Net Area",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_budgetrate:{cLabel:"Budget Rate",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_rentalrate:{cValidate:"",cName:"rentalrate",cLabel:"Rental Rate",cLabelSize:4,cOrder:2,cKey:!1,cType:"decimal",cDecimal:2,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_rentalamt:{cLabel:"Total Rate",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_tenantstatus:{cValidate:"",cName:"tenantstatus",cId:"rdbtenantstatus",cRadioOptions:[{text:"New",value:"N"},{text:"Replacement",value:"P"},{text:"Renew",value:"R"}],cRadioDefaultOption:"",cLabel:"Tenant Status",cLabelSize:4,cOrder:0,cProtect:!0,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_remarks:{cValidate:"",cName:"remarks",cLabel:"Remarks",cLabelSize:4,cOrder:3,cKey:!1,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder,cProtect:!1}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},grossDescs:function(){var t=this.M_TN_LOOCLLot.grossarea?this.M_TN_LOOCLLot.grossarea:"",e=this.M_TN_LOOCLLot.semigrossarea?this.M_TN_LOOCLLot.semigrossarea:"",a=this.M_TN_LOOCLLot.netarea?this.M_TN_LOOCLLot.netarea:"";return t.toString()+" / "+e.toString()+" / "+a.toString()},DataRow:function(){return this.$store.getters.GetPage2Data},DataRowPage1:function(){return this.$store.getters.GetPage1Data}},methods:{GetLotRentalRateDefault:function(){var t=this,e={OptionFunctionCd:"GetLotRentalRateDefault",ModuleCd:this.ModuleCd,SubPortfolioCd:this.getDataUser().SubPortfolioCd,ApplicationNo:this.M_TN_LOOCLLot.applicationno,LotNo:this.M_TN_LOOCLLot.lotno};this.FnDynamicFunction(e).then(function(e){if(null!=e){var a=e[0];t.M_TN_LOOCLLot.blockcd=a.BlockCd+"( "+a.BlockDescs+" )",t.M_TN_LOOCLLot.floorcd=a.FloorCd+"( "+a.FloorDescs+" )",t.M_TN_LOOCLLot.budgetrate=t.isCurrency(a.RentalRate,t.decimal),t.M_TN_LOOCLLot.rentalrate=t.isCurrency(a.RentalRate_default,t.decimal),t.M_TN_LOOCLLot.rentalamt=t.isCurrency(a.TotalRate,t.decimal),t.M_TN_LOOCLLot.fixcharges=a.FixCharges,t.M_TN_LOOCLLot.chargearea=a.ChargeArea}})},Update_RentalAmt:function(){var t=this,e={OptionFunctionCd:"Update_RentalAmt",ModuleCd:this.Module,ApplicationNo:this.M_TN_LOOCLLot.applicationno,SubPortfolioCd:this.getDataUser().SubPortfolioCd,LotNo:this.M_TN_LOOCLLot.lotno,RentalRate:this.M_TN_LOOCLLot.rentalrate?this.replaceAllString(this.M_TN_LOOCLLot.rentalrate,",","","number"):0,TotalRate_Output:""};this.FnDynamicFunction(e).then(function(e){if(null!=e){var a=e;t.M_TN_LOOCLLot.rentalamt=a.TotalRate}})},OnrentalrateChange:function(t){var e=this;this.$nextTick(function(){"VIEW"!=e.inputStatus&&""!=e.M_TN_LOOCLLot.lotno&&e.Update_RentalAmt()}),this.$forceUpdate()},OnlotnoChange:function(t){var e=this;this.$nextTick(function(){e.M_TN_LOOCLLot.lotno=t.id,e.M_TN_LOOCLLot.lotnoLabel=t.label,"VIEW"!=e.inputStatus&&(e.M_TN_LOOCLLot.grossarea=t.GrossArea,e.M_TN_LOOCLLot.semigrossarea=t.SemiGrossArea,e.M_TN_LOOCLLot.netarea=t.NetArea,e.M_TN_LOOCLLot.chargearea=t.ChargeArea,"No"==t.FixCharges?e.M_TN_LOOCLLot.fixcharges="N":e.M_TN_LOOCLLot.fixcharges="Y")}),this.$forceUpdate()},OnfixchargesChange:function(t){var e=this;this.$nextTick(function(){e.inputStatus}),this.$forceUpdate()},OnchargeareaChange:function(t){var e=this;this.$nextTick(function(){e.inputStatus}),this.$forceUpdate()},OntenantstatusChange:function(t){var e=this;this.$nextTick(function(){e.inputStatus}),this.$forceUpdate()},OnremarksChange:function(t){var e=this;this.$nextTick(function(){e.inputStatus}),this.$forceUpdate()},setToolbarButton:function(){},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(t){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(t,e){},rowLink:function(t){this.$refs.modalTest.show()},paramFromParent:function(){this.$parent.showForm=!1;var t=this.$store.getters.GetPage1Data;"A"!=t.StatusCd&&1!=t.ContractStatus||"N"!=t.StatusCd&&1!=t.ContractStatus||"C"==t.StatusCd||"X"==t.StatusCd?(this.FormType="View",this.$store.commit("setFormType","View"),this.getToolbar().ProcessPS()):(this.FormType="List",this.$store.commit("setFormType","List"),this.getToolbar().ProcessPS()),this.LookUpFilterLotNo(t),this.M_TN_LOOCLLot.applicationno=t.ApplicationNo,this.propList.initialWhere=" ApplicationNo = '"+t.ApplicationNo+"' ",this.FormToABSList().doGetList("","eb_getList")},M_Insert:function(){var t=this,e={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,ApplicationNo:this.M_TN_LOOCLLot.applicationno,LotNo:""==this.M_TN_LOOCLLot.lotno||null==this.M_TN_LOOCLLot.lotno?"NULL":this.M_TN_LOOCLLot.lotno,RentalQty:this.M_TN_LOOCLLot.rentalqty,RentalRate:this.M_TN_LOOCLLot.rentalrate?this.replaceAllString(this.M_TN_LOOCLLot.rentalrate,",","","number"):0,Remarks:this.M_TN_LOOCLLot.remarks,UserInput:this.getDataUser().UserId};this.postJSON(this.getUrlInsert(),e).then(function(e){null!=e&&t.$parent.resultInsert(e.Message)})},M_Update:function(){var t=this,e={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,ApplicationNo:this.DataRowPage1.ApplicationNo,LotNo:""==this.M_TN_LOOCLLot.lotno||null==this.M_TN_LOOCLLot.lotno?"NULL":this.M_TN_LOOCLLot.lotno,RentalQty:this.M_TN_LOOCLLot.rentalqty,RentalRate:this.M_TN_LOOCLLot.rentalrate?this.replaceAllString(this.M_TN_LOOCLLot.rentalrate,",","","number"):0,Remarks:this.M_TN_LOOCLLot.remarks,UserEdit:this.getDataUser().UserId,LastUpdateStamp:this.M_TN_LOOCLLot.lastupdatestamp};this.postJSON(this.getUrlUpdate(),e).then(function(e){null!=e&&t.$parent.resultUpdate(e.Message)})},M_ClearForm:function(){this.M_TN_LOOCLLot={applicationno:"",subportfoliocd:this.getDataUser().SubPortfolioCd,lotno:"",grossarea:"",semigrossarea:"",netarea:"",rentalqty:0,rentalrate:0,rentalamt:0,chargearea:"",fixcharges:"",blockcd:"",blockdescs:"",floorcd:"",floordescs:"",rcd:"",red:"",tenantstatus:"",lotthemecd:"",themedescs:"",lotclasscd:"",classdescs:"",lotcategorycd:"",categorydescs:"",lottypedescs:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,antenna:"",lotdescs:"",budgetrate:0,totalrate:0,lastupdatestamp:0,rowid:0}},M_New:function(){var t=this.$store.getters.GetPage1Data;this.M_TN_LOOCLLot.applicationno=t.ApplicationNo,this.LookUpFilterLotNo(t)},M_Edit:function(){var t=this.$store.getters.GetPage1Data;this.M_TN_LOOCLLot.applicationno=t.ApplicationNo},M_Delete:function(t){var e=this,a=this.FormToABSList().getRowSelected(),o=[];a.forEach(function(t){o.push({SubPortfolioCd:e.getDataUser().SubPortfolioCd,LotNo:""==t.LotNo||null==t.LotNo?"NULL":t.LotNo,ApplicationNo:t.ApplicationNo,LastUpdateStamp:t.LastUpdateStamp,_Message_:""})});var r={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:o};this.postJSONMulti(this.getUrlNewDeleteMulti(),r).then(function(t){null!=t&&e.$parent.resultDelete()})},getDataBy:function(t){var e=this,a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,applicationno:t.ApplicationNo,lotno:t.LotNo};this.postEncode(this.getUrlById(),a).then(function(a){if(null!=a){var o=a.Data[0];e.M_TN_LOOCLLot={applicationno:o.applicationno,subportfoliocd:o.subportfoliocd,lotno:o.lotno,grossarea:e.isCurrency(o.grossarea,e.decimal),semigrossarea:e.isCurrency(o.semigrossarea,e.decimal),netarea:e.isCurrency(o.netarea,e.decimal),rentalqty:e.isCurrency(o.rentalqty,e.decimal),rentalrate:e.isCurrency(o.rentalrate,e.decimal),rentalamt:e.isCurrency(o.totalrate,e.decimal),chargearea:o.chargearea,fixcharges:o.fixcharges,blockcd:o.blockcd+" ("+o.blockdescs+")",blockdescs:o.blockdescs,floorcd:o.floorcd+" ("+o.floordescs+")",floordescs:o.floordescs,rcd:o.rcd,red:o.red,tenantstatus:o.tenantstatus,lotthemecd:o.lotthemecd,themedescs:o.themedescs,lotclasscd:o.lotclasscd,classdescs:o.classdescs,lotcategorycd:o.lotcategorycd,categorydescs:o.categorydescs,lottypedescs:o.lottypedescs,remarks:o.remarks,userinput:o.userinput,useredit:o.useredit,antenna:o.antenna,lotdescs:o.lotdescs,budgetrate:e.isCurrency(o.budgetrate,e.decimal),totalrate:e.isCurrency(o.totalrate,e.decimal),lastupdatestamp:t.LastUpdateStamp,rowid:o.rowid},e.M_TN_LOOCLLot.lotnoLabel=null!=e.M_TN_LOOCLLot.lotno&&""!=e.M_TN_LOOCLLot.lotno?o.lotno+e.separator+o.lotdescs:"",e.IEBy.Input=o.userinput,e.IEBy.Edit=o.useredit}})},LookUpFilterLotNo:function(t){var e=t.RCD.split("/"),a=parseInt(e[1])-1,o=new Date(e[2],a,e[0]);this.PI_lotno.dataLookUp.ParamView="'"+this.momentDateFormatting(o,"YYYY-MM-DD")+"'",this.PI_lotno.dataLookUp.InitialWhere=" SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' AND isnull(ContractStatus,'x') NOT IN ('2', '3', '4') AND (isnull(ContractStatus,'x') NOT IN ('5') AND isnull(Status,'x') NOT IN ('A', 'R')) AND LotNo Not In (Select LotNo From Tn_ContractLot Where SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' and ApplicationNo = '"+t.ApplicationNo+"') AND LotCluster = (Select top 1 CustomerCategoryCd from TN_Contract where applicationno = '"+t.ApplicationNo+"' and SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' ) AND ((StartDate IS NULL)  or ( (StartDate <= (Select top 1 StartDate from TN_Contract where applicationno = '"+t.ApplicationNo+"' and SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' )) and       (EndDate >= (Select top 1 StartDate from TN_Contract where applicationno = '"+t.ApplicationNo+"' and SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"'))       ) or  ( (StartDate >= (Select top 1 StartDate from TN_Contract where applicationno = '"+t.ApplicationNo+"' and SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"')) and       (StartDate <= (Select top 1 EndDate from TN_Contract where applicationno = '"+t.ApplicationNo+"' and SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"'))       ) )  "}},created:function(){},beforeMount:function(){},mounted:function(){this.hideSideBarMenu()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),i=s,n=a("2877"),l=Object(n["a"])(i,o,r,!1,null,null,null);l.options.__file="TN_LOOCLLot.vue";e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d224eb6.5117c9fb.js.map