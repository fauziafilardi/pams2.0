(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b16ad"],{2081:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ABSListVuex",{attrs:{prop:e.propList,title:e.data.QueryName},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table,refreshColumn:e.$parent.refreshColumn}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[a("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                    Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),a("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),a("b-collapse",{attrs:{id:"collapse1",visible:!0}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[a("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[a("b-row",{staticStyle:{"padding-left":"10px"}},[a("b-col",{attrs:{md:"12",id:"col-left"}},[a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_lotno",attrs:{prop:e.PI_lotno,value:e.M_TN_LOOCLLotAddendum.lotno,label:e.M_TN_LOOCLLotAddendum.lotnoLabel},on:{change:e.OnlotnoChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSCompute",{ref:"ref_blockcd",attrs:{prop:e.PI_blockcd},model:{value:e.M_TN_LOOCLLotAddendum.blockcd,callback:function(t){e.$set(e.M_TN_LOOCLLotAddendum,"blockcd",t)},expression:"M_TN_LOOCLLotAddendum.blockcd"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSCompute",{ref:"ref_floorcd",attrs:{prop:e.PI_floorcd},model:{value:e.M_TN_LOOCLLotAddendum.floorcd,callback:function(t){e.$set(e.M_TN_LOOCLLotAddendum,"floorcd",t)},expression:"M_TN_LOOCLLotAddendum.floorcd"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputRadioButtonVuex",{ref:"ref_fixcharges",attrs:{prop:e.PI_fixcharges},on:{input:e.OnfixchargesChange},model:{value:e.M_TN_LOOCLLotAddendum.fixcharges,callback:function(t){e.$set(e.M_TN_LOOCLLotAddendum,"fixcharges",t)},expression:"M_TN_LOOCLLotAddendum.fixcharges"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputRadioButtonVuex",{ref:"ref_chargearea",attrs:{prop:e.PI_chargearea},on:{input:e.OnchargeareaChange},model:{value:e.M_TN_LOOCLLotAddendum.chargearea,callback:function(t){e.$set(e.M_TN_LOOCLLotAddendum,"chargearea",t)},expression:"M_TN_LOOCLLotAddendum.chargearea"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSCompute",{ref:"ref_grossarea",attrs:{prop:e.PI_grossarea},model:{value:e.M_TN_LOOCLLotAddendum.grossarea,callback:function(t){e.$set(e.M_TN_LOOCLLotAddendum,"grossarea",t)},expression:"M_TN_LOOCLLotAddendum.grossarea"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSCompute",{ref:"ref_semigrossarea",attrs:{prop:e.PI_semigrossarea},model:{value:e.M_TN_LOOCLLotAddendum.semigrossarea,callback:function(t){e.$set(e.M_TN_LOOCLLotAddendum,"semigrossarea",t)},expression:"M_TN_LOOCLLotAddendum.semigrossarea"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSCompute",{ref:"ref_netarea",attrs:{prop:e.PI_netarea},model:{value:e.M_TN_LOOCLLotAddendum.netarea,callback:function(t){e.$set(e.M_TN_LOOCLLotAddendum,"netarea",t)},expression:"M_TN_LOOCLLotAddendum.netarea"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSCompute",{ref:"ref_budgetrate",attrs:{prop:e.PI_budgetrate},model:{value:e.M_TN_LOOCLLotAddendum.budgetrate,callback:function(t){e.$set(e.M_TN_LOOCLLotAddendum,"budgetrate",t)},expression:"M_TN_LOOCLLotAddendum.budgetrate"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_rentalrate",attrs:{prop:e.PI_rentalrate},on:{input:e.OnrentalrateChange},model:{value:e.M_TN_LOOCLLotAddendum.rentalrate,callback:function(t){e.$set(e.M_TN_LOOCLLotAddendum,"rentalrate",t)},expression:"M_TN_LOOCLLotAddendum.rentalrate"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSCompute",{ref:"ref_rentalamt",attrs:{prop:e.PI_rentalamt},model:{value:e.M_TN_LOOCLLotAddendum.rentalamt,callback:function(t){e.$set(e.M_TN_LOOCLLotAddendum,"rentalamt",t)},expression:"M_TN_LOOCLLotAddendum.rentalamt"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputRadioButtonVuex",{ref:"ref_tenantstatus",attrs:{prop:e.PI_tenantstatus},on:{input:e.OntenantstatusChange},model:{value:e.M_TN_LOOCLLotAddendum.tenantstatus,callback:function(t){e.$set(e.M_TN_LOOCLLotAddendum,"tenantstatus",t)},expression:"M_TN_LOOCLLotAddendum.tenantstatus"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSTextAreaVuex",{ref:"ref_remarks",attrs:{prop:e.PI_remarks},on:{input:e.OnremarksChange},model:{value:e.M_TN_LOOCLLotAddendum.remarks,callback:function(t){e.$set(e.M_TN_LOOCLLotAddendum,"remarks",t)},expression:"M_TN_LOOCLLotAddendum.remarks"}})],1)],1)],1)],1),a("ABSTAnalysis",{attrs:{prop:e.PTAnalysis}})],1)],1)],1)],1)],1)],1)},r=[],n=(a("ac6a"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{ValKey:null,FormType:"List",Module:"TN",propList:{initialWhere:"ApplicationNo = '"+this.ValKey+"'",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_TN_LOOCLLotAddendum:{applicationno:"",subportfoliocd:this.getDataUser().SubPortfolioCd,lotno:"",grossarea:0,semigrossarea:0,netarea:0,rentalqty:0,rentalrate:"0",rentalamt:0,chargearea:"",fixcharges:"",blockcd:"",blockdescs:"",floorcd:"",floordescs:"",rcd:"",red:"",tenantstatus:"",lotthemecd:"",themedescs:"",lotclasscd:"",classdescs:"",lotcategorycd:"",categorydescs:"",lottypedescs:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,antenna:"",lotdescs:"",budgetrate:0,totalrate:0,lastupdatestamp:0,rowid:0,addendumsequenceno:0},PI_lotno:{dataLookUp:{LookUpCd:"GetLOOCLLotNo",ColumnDB:"LotNo",InitialWhere:"",ParamWhere:""},cValidate:"",cName:"lotno",cLabel:"Lot No",cKey:!1,cLabelSize:4,cOrder:0,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"LotNo,Descs,FixCharges,GrossArea,SemiGrossArea,NetArea,TimeEdit"},PI_blockcd:{cLabel:"Block",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_floorcd:{cLabel:"Floor",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_fixcharges:{cValidate:"",cName:"fixcharges",cId:"rdbfixcharges",cRadioOptions:[{text:"No",value:"N"},{text:"Yes",value:"Y"}],cRadioDefaultOption:"",cLabel:"Fix Charges",cLabelSize:4,cOrder:0,cProtect:!0,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_chargearea:{cValidate:"",cName:"chargearea",cId:"rdbchargearea",cRadioOptions:[{text:"Gross Area",value:"G"},{text:"Semi Gross Area",value:"S"},{text:"Net Area",value:"N"}],cRadioDefaultOption:"",cLabel:"Base Calculation Area",cLabelSize:4,cOrder:0,cProtect:!0,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_grossarea:{cLabel:"Gross Area",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_semigrossarea:{cLabel:"Semi Gross Area",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_netarea:{cLabel:"Net Area",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_budgetrate:{cLabel:"Budget Rate",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_rentalrate:{cValidate:"",cName:"rentalrate",cLabel:"Rental Rate",cLabelSize:4,cOrder:0,cKey:!1,cType:"decimal",cDecimal:2,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_rentalamt:{cLabel:"Total Rate",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_tenantstatus:{cValidate:"",cName:"tenantstatus",cId:"rdbtenantstatus",cRadioOptions:[{text:"New",value:"N"},{text:"Replacement",value:"P"},{text:"Renew",value:"R"}],cRadioDefaultOption:"",cLabel:"Tenant Status",cLabelSize:4,cOrder:0,cProtect:!0,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_remarks:{cValidate:"",cName:"remarks",cLabel:"Remarks",cLabelSize:4,cOrder:0,cKey:!1,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder,cProtect:!1}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage2Data},DataRowPage1:function(){return this.$store.getters.GetPage1Data}},methods:{GetLotRentalRateDefault:function(){var e=this,t={OptionFunctionCd:"GetLotRentalRateDefault",ModuleCd:this.ModuleCd,SubPortfolioCd:this.getDataUser().SubPortfolioCd,ApplicationNo:this.M_TN_LOOCLLotAddendum.applicationno,LotNo:this.M_TN_LOOCLLotAddendum.lotno};this.FnDynamicFunction(t).then(function(t){if(null!=t){var a=t[0];e.M_TN_LOOCLLotAddendum.blockcd=a.BlockCd+"( "+a.BlockDescs+" )",e.M_TN_LOOCLLotAddendum.floorcd=a.FloorCd+"( "+a.FloorDescs+" )",e.M_TN_LOOCLLotAddendum.budgetrate=e.isCurrency(a.RentalRate,e.decimal),e.M_TN_LOOCLLotAddendum.rentalrate=e.isCurrency(a.RentalRate_default,e.decimal),e.M_TN_LOOCLLotAddendum.rentalamt=e.isCurrency(a.TotalRate,e.decimal),e.M_TN_LOOCLLotAddendum.fixcharges=a.FixCharges,e.M_TN_LOOCLLotAddendum.chargearea=a.ChargeArea}})},Update_RentalAmt:function(){var e=this,t={OptionFunctionCd:"Update_RentalAmt",ModuleCd:this.Module,ApplicationNo:this.M_TN_LOOCLLotAddendum.applicationno,SubPortfolioCd:this.getDataUser().SubPortfolioCd,LotNo:this.M_TN_LOOCLLotAddendum.lotno,RentalRate:this.M_TN_LOOCLLotAddendum.rentalrate,TotalRate:this.M_TN_LOOCLLotAddendum.totalrate};this.FnDynamicFunction(t).then(function(t){if(null!=t){var a=t[0];e.M_TN_LOOCLLotAddendum.rentalamt=a.RentalAmt}})},OnrentalrateChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},OnlotnoChange:function(e){var t=this;this.$nextTick(function(){t.M_TN_LOOCLLotAddendum.lotno=e.id,t.M_TN_LOOCLLotAddendum.lotnoLabel=e.label,t.M_TN_LOOCLLotAddendum.grossarea=e.GrossArea,t.M_TN_LOOCLLotAddendum.semigrossarea=e.SemiGrossArea,t.M_TN_LOOCLLotAddendum.netarea=e.NetArea,t.M_TN_LOOCLLotAddendum.fixcharges=e.FixCharges,"VIEW"!=t.inputStatus&&""!=e.id&&t.GetLotRentalRateDefault()}),this.$forceUpdate()},OnfixchargesChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},OnchargeareaChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},OntenantstatusChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},OnremarksChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},setToolbarButton:function(){},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,t){},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){this.$parent.showForm=!1;var e=this.$store.getters.GetPage1Data;"A"!=e.Status&&1!=e.ContractStatus||"N"!=e.Status&&1!=e.ContractStatus||"C"==e.Status||"X"==e.Status?(this.FormType="View",this.$store.commit("setFormType","View"),this.getToolbar().ProcessPS()):(this.FormType="List",this.$store.commit("setFormType","List"),this.getToolbar().ProcessPS()),this.LookUpFilterLotNo(e),this.M_TN_LOOCLLotAddendum.applicationno=e.ApplicationNo,this.propList.initialWhere="SubPortfolioCd ='"+this.getDataUser().SubPortfolioCd+"' AND ApplicationNo = '"+e.ApplicationNo+"' AND AddendumSequenceNo = '"+e.AddendumSequenceNo+"' ",this.FormToABSList().doGetList("","eb_getList")},M_Insert:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,ApplicationNo:this.M_TN_LOOCLLotAddendum.applicationno,AddendumSequenceNo:this.M_TN_LOOCLLotAddendum.addendumsequenceno,LotNo:""==this.M_TN_LOOCLLotAddendum.lotno||null==this.M_TN_LOOCLLotAddendum.lotno?"NULL":this.M_TN_LOOCLLotAddendum.lotno,RentalQty:this.M_TN_LOOCLLotAddendum.rentalqty,RentalRate:this.M_TN_LOOCLLotAddendum.rentalrate?this.replaceAllString(this.M_TN_LOOCLLotAddendum.rentalrate,",","","number"):0,Remarks:this.M_TN_LOOCLLotAddendum.remarks,UserInput:this.getDataUser().UserId};this.postJSON(this.getUrlInsert(),t).then(function(t){null!=t&&e.$parent.resultInsert(t.Message)})},M_Update:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,ApplicationNo:this.M_TN_LOOCLLotAddendum.applicationno,AddendumSequenceNo:this.M_TN_LOOCLLotAddendum.addendumsequenceno,LotNo:""==this.M_TN_LOOCLLotAddendum.lotno||null==this.M_TN_LOOCLLotAddendum.lotno?"NULL":this.M_TN_LOOCLLotAddendum.lotno,StartDate:this.M_TN_LOOCLLotAddendum.startdate,EndDate:this.M_TN_LOOCLLotAddendum.enddate,StartPeriod:this.M_TN_LOOCLLotAddendum.startperiod,LeasePeriod:this.M_TN_LOOCLLotAddendum.leaseperiod,RED:this.M_TN_LOOCLLotAddendum.red,RCD:this.M_TN_LOOCLLotAddendum.rcd,RentalQty:this.M_TN_LOOCLLotAddendum.rentalqty,RentalRate:this.M_TN_LOOCLLotAddendum.rentalrate?this.replaceAllString(this.M_TN_LOOCLLotAddendum.rentalrate,",","","number"):0,GrossArea:this.M_TN_LOOCLLotAddendum.grossarea,SemiGrossArea:this.M_TN_LOOCLLotAddendum.grossarea,NetArea:this.M_TN_LOOCLLotAddendum.netarea,Remarks:this.M_TN_LOOCLLotAddendum.remarks,UserEdit:this.getDataUser().UserId,LastUpdateStamp:this.M_TN_LOOCLLotAddendum.lastupdatestamp};this.postJSON(this.getUrlUpdate(),t).then(function(t){null!=t&&e.$parent.resultUpdate(t.Message)})},M_ClearForm:function(){this.M_TN_LOOCLLotAddendum={applicationno:"",subportfoliocd:this.getDataUser().SubPortfolioCd,lotno:"",grossarea:0,semigrossarea:0,netarea:0,rentalqty:0,rentalrate:"0",rentalamt:0,chargearea:"",fixcharges:"",blockcd:"",blockdescs:"",floorcd:"",floordescs:"",rcd:"",red:"",tenantstatus:"",lotthemecd:"",themedescs:"",lotclasscd:"",classdescs:"",lotcategorycd:"",categorydescs:"",lottypedescs:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,antenna:"",lotdescs:"",budgetrate:0,totalrate:0,lastupdatestamp:0,rowid:0}},M_New:function(){var e=this.$store.getters.GetPage1Data;this.M_TN_LOOCLLotAddendum.applicationno=e.ApplicationNo,this.M_TN_LOOCLLotAddendum.addendumsequenceno=e.AddendumSequenceNo,this.LookUpFilterLotNo(e)},M_Edit:function(){},M_Delete:function(e){var t=this,a=this.FormToABSList().getRowSelected(),o=[];a.forEach(function(e){o.push({SubPortfolioCd:t.getDataUser().SubPortfolioCd,LotNo:""==e.LotNo||null==e.LotNo?"NULL":e.LotNo,ApplicationNo:e.ApplicationNo,LastUpdateStamp:e.LastUpdateStamp,_Message_:""})});var r={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:o};this.postJSONMulti(this.getUrlNewDeleteMulti(),r).then(function(e){null!=e&&t.$parent.resultDelete()})},getDataBy:function(e){var t=this,a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,applicationno:e.ApplicationNo,addendumsequenceno:e.AddendumSequenceNo,lotno:e.LotNo};this.postEncode(this.getUrlById(),a).then(function(a){if(null!=a){var o=a.Data[0];t.M_TN_LOOCLLotAddendum={subportfoliocd:o.subportfoliocd,lotno:o.lotno,grossarea:t.isCurrency(o.grossarea,t.decimal),semigrossarea:t.isCurrency(o.semigrossarea,t.decimal),leaseperiod:t.isCurrency(o.leaseperiod,t.decimal),startperiod:t.isCurrency(o.startperiod,t.decimal),netarea:t.isCurrency(o.netarea,t.decimal),rentalqty:t.isCurrency(o.rentalqty,t.decimal),rentalrate:t.isCurrency(o.rentalrate,t.decimal),rentalamt:t.isCurrency(o.rentalamt,t.decimal),chargearea:o.chargearea,fixcharges:o.fixcharges,blockcd:o.blockcd,blockdescs:o.blockdescs,floorcd:o.floorcd,floordescs:o.floordescs,startdate:o.startdate,enddate:o.enddate,rcd:o.rcd,red:o.red,tenantstatus:o.tenantstatus,lotthemecd:o.lotthemecd,themedescs:o.themedescs,lotclasscd:o.lotclasscd,classdescs:o.classdescs,lotcategorycd:o.lotcategorycd,categorydescs:o.categorydescs,lottypedescs:o.lottypedescs,remarks:o.remarks,userinput:o.userinput,useredit:o.useredit,antenna:o.antenna,lotdescs:o.lotdescs,budgetrate:t.isCurrency(o.budgetrate,t.decimal),totalrate:t.isCurrency(o.totalrate,t.decimal),perioddays:t.isCurrency(o.perioddays,t.decimal),applicationno:e.ApplicationNo,addendumsequenceno:e.AddendumSequenceNo,lastupdatestamp:e.LastUpdateStamp,rowid:o.rowid},console.log(t.M_TN_LOOCLLotAddendum),t.M_TN_LOOCLLotAddendum.lotnoLabel=null!=t.M_TN_LOOCLLotAddendum.lotno&&""!=t.M_TN_LOOCLLotAddendum.lotno?o.lotno+t.separator:"",t.IEBy.Input=o.userinput,t.IEBy.Edit=o.useredit}})},LookUpFilterLotNo:function(e){this.PI_lotno.dataLookUp.ParamView="'"+e.RCD+"'",this.PI_lotno.dataLookUp.InitialWhere=" SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' AND isnull(ContractStatus,'x') NOT IN ('2', '3', '4') AND (isnull(ContractStatus,'x') NOT IN ('5') AND isnull(Status,'x') NOT IN ('A', 'R')) AND LotNo Not In (Select LotNo From Tn_ContractLot Where SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' and ApplicationNo = '"+e.ApplicationNo+"') AND LotCluster = (Select top 1 CustomerCategoryCd from TN_Contract where applicationno = '"+e.ApplicationNo+"' and SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' ) AND ((StartDate IS NULL)  or ( (StartDate <= (Select top 1 StartDate from TN_Contract where applicationno = '"+e.ApplicationNo+"' and SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' )) and       (EndDate >= (Select top 1 StartDate from TN_Contract where applicationno = '"+e.ApplicationNo+"' and SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"'))       ) or  ( (StartDate >= (Select top 1 StartDate from TN_Contract where applicationno = '"+e.ApplicationNo+"' and SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"')) and       (StartDate <= (Select top 1 EndDate from TN_Contract where applicationno = '"+e.ApplicationNo+"' and SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"'))       ) )  "}},created:function(){},beforeMount:function(){},mounted:function(){this.hideSideBarMenu()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),s=n,d=a("2877"),i=Object(d["a"])(s,o,r,!1,null,null,null);i.options.__file="TN_LOOCLLotAddendum.vue";t["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d0b16ad.a1c21a31.js.map