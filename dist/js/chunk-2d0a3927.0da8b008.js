(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a3927"],{"036d":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ABSListVuex",{attrs:{prop:t.propList,title:t.data.QueryName},on:{rowClicked:t.$parent.rowClicked,rowDblClicked:t.$parent.doDoubleClick,rowLinkClick:t.$parent.rowLink,pageSize:t.$parent.M_PageSize,pagination:t.$parent.M_Pagination,filter:t.$parent.M_Advance_Filter,headTable:t.$parent.M_Head_Table,refreshColumn:t.$parent.refreshColumn}}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[a("span",{directives:[{name:"show",rawName:"v-show",value:t.IEBy.Input&&t.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[t._v("\n                    Input By : "+t._s(t.IEBy.Input)+" | Edit By : "+t._s(t.IEBy.Edit)+" "),a("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),a("b-collapse",{attrs:{id:"collapse1",visible:!0}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[a("b-form",{attrs:{"data-vv-scope":"FormScope_"+t.PageLevel+"_"+t.TabIndex,"data-vv-value-path":"FormScope_"+t.PageLevel+"_"+t.TabIndex}},[a("b-row",{staticStyle:{"padding-left":"10px"}},[a("b-col",{attrs:{md:"12",id:"col-left"}},[a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_lotno",attrs:{prop:t.PI_lotno,value:t.M_TN_LOOLot.lotno,label:t.M_TN_LOOLot.lotnoLabel},on:{change:t.OnlotnoChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_rentalqty",attrs:{prop:t.PI_rentalqty},model:{value:t.M_TN_LOOLot.rentalqty,callback:function(e){t.$set(t.M_TN_LOOLot,"rentalqty",e)},expression:"M_TN_LOOLot.rentalqty"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputDateRangeVuex",{ref:"ref_rcd",attrs:{prop:t.PI_rcd,valueFrom:t.M_TN_LOOLot.rcd,valueTo:t.M_TN_LOOLot.red},on:{from:t.MdtRange_rcd,to:t.MdtRange_red}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSCompute",{ref:"ref_grossarea",attrs:{prop:t.PI_grossarea},model:{value:t.M_TN_LOOLot.grossarea,callback:function(e){t.$set(t.M_TN_LOOLot,"grossarea",e)},expression:"M_TN_LOOLot.grossarea"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSCompute",{ref:"ref_blockcd",attrs:{prop:t.PI_blockcd},model:{value:t.M_TN_LOOLot.blockcd,callback:function(e){t.$set(t.M_TN_LOOLot,"blockcd",e)},expression:"M_TN_LOOLot.blockcd"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSCompute",{ref:"ref_floorcd",attrs:{prop:t.PI_floorcd},model:{value:t.M_TN_LOOLot.floorcd,callback:function(e){t.$set(t.M_TN_LOOLot,"floorcd",e)},expression:"M_TN_LOOLot.floorcd"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputRadioButtonVuex",{ref:"ref_fixcharges",attrs:{prop:t.PI_fixcharges},on:{input:t.OnfixchargesChange},model:{value:t.M_TN_LOOLot.fixcharges,callback:function(e){t.$set(t.M_TN_LOOLot,"fixcharges",e)},expression:"M_TN_LOOLot.fixcharges"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputRadioButtonVuex",{ref:"ref_tenantstatus",attrs:{prop:t.PI_tenantstatus},on:{input:t.OntenantstatusChange},model:{value:t.M_TN_LOOLot.tenantstatus,callback:function(e){t.$set(t.M_TN_LOOLot,"tenantstatus",e)},expression:"M_TN_LOOLot.tenantstatus"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSCompute",{ref:"ref_lotthemecd",attrs:{prop:t.PI_lotthemecd},model:{value:t.M_TN_LOOLot.lotthemecd,callback:function(e){t.$set(t.M_TN_LOOLot,"lotthemecd",e)},expression:"M_TN_LOOLot.lotthemecd"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSCompute",{ref:"ref_lotclasscd",attrs:{prop:t.PI_lotclasscd},model:{value:t.M_TN_LOOLot.lotclasscd,callback:function(e){t.$set(t.M_TN_LOOLot,"lotclasscd",e)},expression:"M_TN_LOOLot.lotclasscd"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSCompute",{ref:"ref_lotcategorycd",attrs:{prop:t.PI_lotcategorycd},model:{value:t.M_TN_LOOLot.lotcategorycd,callback:function(e){t.$set(t.M_TN_LOOLot,"lotcategorycd",e)},expression:"M_TN_LOOLot.lotcategorycd"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSTextAreaVuex",{ref:"ref_remarks",attrs:{prop:t.PI_remarks},on:{input:t.OnremarksChange},model:{value:t.M_TN_LOOLot.remarks,callback:function(e){t.$set(t.M_TN_LOOLot,"remarks",e)},expression:"M_TN_LOOLot.remarks"}})],1)],1)],1)],1),a("ABSTAnalysis",{attrs:{prop:t.PTAnalysis}})],1)],1)],1)],1)],1)],1)},s=[],r={props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{DataRow:null,ValKey:null,FormType:"List",Module:"TN",propList:{initialWhere:"ApplicationNo = '"+this.ValKey+"'",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_TN_LOOLot:{applicationno:"",subportfoliocd:this.getDataUser().SubPortfolioCd,lotno:"",grossarea:0,semigrossarea:0,netarea:0,rentalqty:"0",rentalrate:0,rentalamt:0,chargearea:"",fixcharges:"N",blockcd:"",blockdescs:"",floorcd:"",floordescs:"",rcd:"",red:"",tenantstatus:"N",lotthemecd:"",themedescs:"",lotclasscd:"",classdescs:"",lotcategorycd:"",categorydescs:"",lottypedescs:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,antenna:"",lotdescs:"",budgetrate:0,totalrate:0,lastupdatestamp:0,rowid:0},PI_lotno:{dataLookUp:{LookUpCd:"GetLOOLotNo",ColumnDB:"LotNo",InitialWhere:"",ParamWhere:"",ParamView:""},cValidate:"required",cName:"lotno",cLabel:"Lot No",cKey:!1,cLabelSize:4,cOrder:0,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"LotNo,Descs"},PI_rentalqty:{cValidate:"",cName:"rentalqty",cLabel:"Antenna Quantity",cLabelSize:4,cOrder:0,cKey:!1,cType:"numeric",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_rcd:{cValidate:"",cName:"rcd",cLabel:"RCD - RED",cLabelSize:4,cOrder:0,cKey:!1,cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_grossarea:{cLabel:"Gross / Semi Gross / Net Area",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_blockcd:{cLabel:"Block",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_floorcd:{cLabel:"Floor",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_fixcharges:{cValidate:"",cName:"fixcharges",cId:"rdbfixcharges",cRadioOptions:[{text:"Yes",value:"Y"},{text:"No",value:"N"}],cRadioDefaultOption:"N",cLabel:"Fix Charges",cLabelSize:4,cOrder:0,cProtect:!1,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_tenantstatus:{cValidate:"",cName:"tenantstatus",cId:"rdbtenantstatus",cRadioOptions:[{text:"New",value:"N"},{text:"Replacement",value:"P"},{text:"Renew",value:"R"}],cRadioDefaultOption:"N",cLabel:"Tenant Status",cLabelSize:4,cOrder:0,cProtect:!1,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_lotthemecd:{cLabel:"Theme",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_lotclasscd:{cLabel:"Class",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_lotcategorycd:{cLabel:"Category",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_remarks:{cValidate:"",cName:"remarks",cLabel:"Remarks",cLabelSize:4,cOrder:0,cKey:!1,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage2Data},DataRowPage1:function(){return this.$store.getters.GetPage1Data}},methods:{OnlotnoChange:function(t){var e=this;console.log(JSON.stringify(t,null,2)),this.$nextTick(function(){e.M_TN_LOOLot.lotno=t.id,e.M_TN_LOOLot.lotnoLabel=t.label,"VIEW"!=e.inputStatus&&(e.M_TN_LOOLot.grossarea=e.isCurrency(t.GrossArea,e.decimal)+" / "+e.isCurrency(t.SemiGrossArea,e.decimal)+" / "+e.isCurrency(t.NetArea,e.decimal),"N"==e.DataRow.AntennaStatus?e.PI_rentalqty.cProtect=!0:e.PI_rentalqty.cProtect=!1)}),this.$forceUpdate()},OnfixchargesChange:function(t){var e=this;this.$nextTick(function(){e.inputStatus}),this.$forceUpdate()},OntenantstatusChange:function(t){var e=this;this.$nextTick(function(){e.inputStatus}),this.$forceUpdate()},OnremarksChange:function(t){var e=this;this.$nextTick(function(){e.inputStatus}),this.$forceUpdate()},setToolbarButton:function(){},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(t){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(t,e){},rowLink:function(t){this.$refs.modalTest.show()},GetRCd:function(){var t=this,e={OptionFunctionCd:"GetRCd",ModuleCd:this.Module,SubPortfolioCd:this.getDataUser().SubPortfolioCd,ApplicationNo:this.DataRow.ApplicationNo};this.FnDynamicFunction(e).then(function(e){if(null!=e){var a=e[0];t.PI_lotno.dataLookUp.ParamView="'"+a.RCD+"','"+t.getDataUser().SubPortfolioCd+"','"+t.DataRow.ApplicationNo+"'"}})},paramFromParent:function(){this.$parent.showForm=!1;var t=this.$store.getters.GetPage1Data;this.DataRow=t,this.GetRCd(),console.log(JSON.stringify(t,null,2)),"A"!=t.StatusCd&&1!=t.ContractStatus||"N"!=t.StatusCd&&1!=t.ContractStatus||"C"==t.StatusCd||"X"==t.StatusCd?(this.FormType="View",this.$store.commit("setFormType","View"),this.getToolbar().ProcessPS()):(this.FormType="List",this.$store.commit("setFormType","List"),this.getToolbar().ProcessPS()),this.M_TN_LOOLot.applicationno=this.DataRow.ApplicationNo,this.propList.initialWhere=" ApplicationNo = '"+t.ApplicationNo+"' ",this.FormToABSList().doGetList("","eb_getList")},M_Insert:function(){var t=this,e={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,ApplicationNo:this.M_TN_LOOLot.applicationno,LotNo:""==this.M_TN_LOOLot.lotno||null==this.M_TN_LOOLot.lotno?"NULL":this.M_TN_LOOLot.lotno,RentalQty:this.M_TN_LOOLot.rentalqty,RentalRate:this.M_TN_LOOLot.rentalrate,Remarks:this.M_TN_LOOLot.remarks,UserInput:this.getDataUser().UserId};this.postJSON(this.getUrlInsert(),e).then(function(e){null!=e&&t.$parent.resultInsert(e.Message)})},M_Update:function(){var t=this,e={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,ApplicationNo:this.M_TN_LOOLot.applicationno,LotNo:""==this.M_TN_LOOLot.lotno||null==this.M_TN_LOOLot.lotno?"NULL":this.M_TN_LOOLot.lotno,RentalQty:this.M_TN_LOOLot.rentalqty,RentalRate:this.M_TN_LOOLot.rentalrate,Remarks:this.M_TN_LOOLot.remarks,UserEdit:this.getDataUser().UserId,LastUpdateStamp:this.M_TN_LOOLot.lastupdatestamp};this.postJSON(this.getUrlUpdate(),e).then(function(e){null!=e&&t.$parent.resultUpdate(e.Message)})},M_ClearForm:function(){this.M_TN_LOOLot={applicationno:"",subportfoliocd:this.getDataUser().SubPortfolioCd,lotno:"",grossarea:0,semigrossarea:0,netarea:0,rentalqty:"0",rentalrate:0,rentalamt:0,chargearea:"",fixcharges:"N",blockcd:"",blockdescs:"",floorcd:"",floordescs:"",rcd:"",red:"",tenantstatus:"N",lotthemecd:"",themedescs:"",lotclasscd:"",classdescs:"",lotcategorycd:"",categorydescs:"",lottypedescs:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,antenna:"",lotdescs:"",budgetrate:0,totalrate:0,lastupdatestamp:0,rowid:0}},M_New:function(){var t=this.$store.getters.GetPage1Data;this.M_TN_LOOLot.applicationno=t.ApplicationNo,this.M_TN_LOOLot.rcd=this.momentDateFormat(this.DataRow.RCD,"DD/MM/YYYY"),this.M_TN_LOOLot.red=this.momentDateFormat(this.DataRow.RED,"DD/MM/YYYY")},M_Edit:function(){},M_Delete:function(t){var e=this,a={OptionSeq:this.getOptionSeq().OptionSeq,SubPortfolioCd:this.getDataUser().SubPortfolioCd,PortfolioCd:this.getDataUser().PortfolioCd,LineNo:this.$parent.data.PageOrder,Data:t};this.postJSONMulti(this.getUrlDeleteMulti(),a).then(function(t){if(null!=t){var a="Deleting Data Successfully";e.$parent.resultDelete(a)}})},getDataBy:function(t){var e=this,a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,applicationno:t.ApplicationNo,lotno:t.LotNo};this.postEncode(this.getUrlById(),a).then(function(a){if(null!=a){var o=a.Data[0];e.M_TN_LOOLot={applicationno:t.ApplicationNo,subportfoliocd:o.subportfoliocd,lotno:o.lotno,grossarea:e.isCurrency(o.grossarea,e.decimal),semigrossarea:e.isCurrency(o.semigrossarea,e.decimal),netarea:e.isCurrency(o.netarea,e.decimal),rentalqty:o.rentalqty,rentalrate:e.isCurrency(o.rentalrate,e.decimal),rentalamt:e.isCurrency(o.rentalamt,e.decimal),chargearea:o.chargearea,fixcharges:o.fixcharges,blockcd:o.blockcd,blockdescs:o.blockdescs,floorcd:o.floorcd,floordescs:o.floordescs,rcd:o.rcd,red:o.red,tenantstatus:o.tenantstatus,lotthemecd:o.lotthemecd,themedescs:o.themedescs,lotclasscd:o.lotclasscd,classdescs:o.classdescs,lotcategorycd:o.lotcategorycd,categorydescs:o.categorydescs,lottypedescs:o.lottypedescs,remarks:o.remarks,userinput:o.userinput,useredit:o.useredit,antenna:o.antenna,lotdescs:o.lotdescs,budgetrate:e.isCurrency(o.budgetrate,e.decimal),totalrate:e.isCurrency(o.totalrate,e.decimal),lastupdatestamp:t.LastUpdateStamp,rowid:e.isCurrency(o.rowid,e.decimal)},e.M_TN_LOOLot.lotnoLabel=null!=e.M_TN_LOOLot.lotno&&""!=e.M_TN_LOOLot.lotno?o.lotno+e.separator+o.lotdescs:"",e.M_TN_LOOLot.grossarea=e.isCurrency(o.grossarea,e.decimal)+" / "+e.isCurrency(o.semigrossarea,e.decimal)+" / "+e.isCurrency(o.netarea,e.decimal),e.IEBy.Input=o.userinput,e.IEBy.Edit=o.useredit}})},MdtRange_rcd:function(t){this.M_TN_LOOLot.rcd=t},MdtRange_red:function(t){this.M_TN_LOOLot.red=t}},created:function(){},beforeMount:function(){},mounted:function(){this.hideSideBarMenu()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},i=r,n=a("2877"),c=Object(n["a"])(i,o,s,!1,null,null,null);c.options.__file="TN_LOOLot.vue";e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0a3927.0da8b008.js.map