(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c2305"],{"48f1":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ABSListVuex",{attrs:{prop:e.propList,title:e.data.QueryName},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table,refreshColumn:e.$parent.refreshColumn}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[a("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                    Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),a("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),a("b-collapse",{attrs:{id:"collapse1",visible:!0}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[a("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[a("b-row",{staticStyle:{"padding-left":"10px"}},[a("b-col",{attrs:{md:"12",id:"col-left"}},[a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_floorcd",attrs:{prop:e.PI_floorcd},model:{value:e.M_TN_Floor.floorcd,callback:function(t){e.$set(e.M_TN_Floor,"floorcd",t)},expression:"M_TN_Floor.floorcd"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_descs",attrs:{prop:e.PI_descs},model:{value:e.M_TN_Floor.descs,callback:function(t){e.$set(e.M_TN_Floor,"descs",t)},expression:"M_TN_Floor.descs"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_grossarea",attrs:{prop:e.PI_grossarea},model:{value:e.M_TN_Floor.grossarea,callback:function(t){e.$set(e.M_TN_Floor,"grossarea",t)},expression:"M_TN_Floor.grossarea"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_semigrossarea",attrs:{prop:e.PI_semigrossarea},model:{value:e.M_TN_Floor.semigrossarea,callback:function(t){e.$set(e.M_TN_Floor,"semigrossarea",t)},expression:"M_TN_Floor.semigrossarea"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_netarea",attrs:{prop:e.PI_netarea},model:{value:e.M_TN_Floor.netarea,callback:function(t){e.$set(e.M_TN_Floor,"netarea",t)},expression:"M_TN_Floor.netarea"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputRadioButtonVuex",{ref:"ref_parkingfloor",attrs:{prop:e.PI_parkingfloor},on:{input:e.OnparkingfloorChange},model:{value:e.M_TN_Floor.parkingfloor,callback:function(t){e.$set(e.M_TN_Floor,"parkingfloor",t)},expression:"M_TN_Floor.parkingfloor"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_totalinbuildingparkingarea",attrs:{prop:e.PI_totalinbuildingparkingarea},model:{value:e.M_TN_Floor.totalinbuildingparkingarea,callback:function(t){e.$set(e.M_TN_Floor,"totalinbuildingparkingarea",t)},expression:"M_TN_Floor.totalinbuildingparkingarea"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_totalpublicarea",attrs:{prop:e.PI_totalpublicarea},model:{value:e.M_TN_Floor.totalpublicarea,callback:function(t){e.$set(e.M_TN_Floor,"totalpublicarea",t)},expression:"M_TN_Floor.totalpublicarea"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_defaultrentalrate",attrs:{prop:e.PI_defaultrentalrate},model:{value:e.M_TN_Floor.defaultrentalrate,callback:function(t){e.$set(e.M_TN_Floor,"defaultrentalrate",t)},expression:"M_TN_Floor.defaultrentalrate"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSFileUpload",{ref:"ref_referencefilename",attrs:{prop:e.PI_referencefilename,file:e.M_TN_Floor.picturefilename,image:e.M_TN_Floor.referencefilename},on:{fileName:e.getFileName},model:{value:e.M_TN_Floor.referencefilename,callback:function(t){e.$set(e.M_TN_Floor,"referencefilename",t)},expression:"M_TN_Floor.referencefilename"}})],1)],1)],1)],1),a("ABSTAnalysis",{attrs:{prop:e.PTAnalysis}})],1)],1)],1)],1)],1)],1)},o=[],i=(a("ac6a"),a("ade3")),l={props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{ValKey:null,FormType:"List",Module:"TN",propList:{initialWhere:"BlockCd = '"+this.ValKey+"'",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_TN_Floor:{subportfoliocd:this.getDataUser().SubPortfolioCd,blockcd:"",floorcd:"",descs:"",parkingfloor:"N",totalinbuildingparkingarea:"",totalpublicarea:"",picturefilename:"",referencefilename:"",defaultrentalrate:"",grossarea:"",semigrossarea:"",netarea:"",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:0,rowid:0},PI_floorcd:{cValidate:"required|max:5",cName:"floorcd",cLabel:"Floor Code ",cLabelSize:4,cOrder:1,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_descs:{cValidate:"required|max:60",cName:"descs",cLabel:"Description ",cLabelSize:4,cOrder:2,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_grossarea:{cValidate:"max:13",cName:"grossarea",cLabel:"Gross Area",cLabelSize:4,cOrder:3,cKey:!0,cType:"decimal",cDecimal:2,cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_semigrossarea:{cValidate:"max:13",cName:"semigrossarea",cLabel:"Semi Gross Area",cLabelSize:4,cOrder:4,cKey:!0,cType:"decimal",cDecimal:2,cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_netarea:{cValidate:"max:13",cName:"netarea",cLabel:"Net Area",cLabelSize:4,cOrder:5,cKey:!0,cType:"decimal",cDecimal:2,cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_parkingfloor:{cValidate:"",cName:"parkingfloor",cId:"rdbparkingfloor",cRadioOptions:[{text:"No",value:"N"},{text:"Yes",value:"Y"}],cRadioDefaultOption:"N",cLabel:"Parking Floor",cLabelSize:4,cOrder:6,cProtect:!1,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_totalinbuildingparkingarea:{cValidate:"max:13",cName:"totalinbuildingparkingarea",cLabel:"Total In Building Parking",cLabelSize:4,cOrder:7,cKey:!1,cType:"decimal",cDecimal:2,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_totalpublicarea:{cValidate:"max:13",cName:"totalpublicarea",cLabel:"Total Public Area",cLabelSize:4,cOrder:8,cKey:!1,cType:"decimal",cDecimal:2,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_defaultrentalrate:{cValidate:"max:13",cName:"defaultrentalrate",cLabel:"Default Rental Rate",cLabelSize:4,cOrder:9,cKey:!1,cType:"decimal",cDecimal:2,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_referencefilename:Object(i["a"])({cValidate:"",cName:"referencefilename",cLabel:"Picture File",cSubPortfolio:this.getDataUser().SubPortfolioCd,cPath:"SaveLocation/SubPortfolio",cLabelSize:4,cOrder:10,cVisible:!0,cModule:"TN",cPlaceholder:"Choose a file...",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex},"cVisible",!0),PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder,cProtect:!1}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus:"VIEW"},DataRow:function(){return this.$store.getters.GetPage2Data},DataRowPage1:function(){return this.$store.getters.GetPage1Data}},methods:{OnparkingfloorChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},setToolbarButton:function(){},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,t){},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){this.$parent.showForm=!1;var e=this.$store.getters.GetPage1Data;this.M_TN_Floor.blockcd=e.BlockCd,this.propList.initialWhere=" BlockCd = '"+e.BlockCd+"' ",this.FormToABSList().doGetList("","eb_getList")},M_Insert:function(){var e=this;console.log(this.M_TN_Floor.grossarea);var t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,FloorCD:this.M_TN_Floor.floorcd.toUpperCase(),BlockCD:this.M_TN_Floor.blockcd,Descs:this.M_TN_Floor.descs,GrossArea:this.M_TN_Floor.grossarea?this.replaceAllString(this.M_TN_Floor.grossarea,",","","number"):0,SemiGrossArea:this.M_TN_Floor.semigrossarea,NetArea:this.M_TN_Floor.netarea,ParkingFloor:this.M_TN_Floor.parkingfloor,TotalInBuildingParkingArea:this.M_TN_Floor.totalinbuildingparkingarea?this.replaceAllString(this.M_TN_Floor.totalinbuildingparkingarea,",","","number"):0,TotalPublicArea:this.M_TN_Floor.totalpublicarea?this.replaceAllString(this.M_TN_Floor.totalpublicarea,",","","number"):0,DefaultRentalRate:this.M_TN_Floor.defaultrentalrate?this.replaceAllString(this.M_TN_Floor.defaultrentalrate,",","","number"):0,PictureFileName:this.M_TN_Floor.picturefilename,ReferenceFileName:this.M_TN_Floor.referencefilename,UserInput:this.getDataUser().UserId};this.postJSON(this.getUrlInsert(),t).then(function(t){null!=t&&e.$parent.resultInsert(t.Message)})},M_Update:function(){var e=this;console.log(this.M_TN_Floor.grossarea);var t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,FloorCD:this.M_TN_Floor.floorcd.toUpperCase(),BlockCD:this.M_TN_Floor.blockcd,Descs:this.M_TN_Floor.descs,ParkingFloor:this.M_TN_Floor.parkingfloor,TotalInBuildingParkingArea:this.M_TN_Floor.totalinbuildingparkingarea?this.replaceAllString(this.M_TN_Floor.totalinbuildingparkingarea,",","","number"):0,TotalPublicArea:this.M_TN_Floor.totalpublicarea?this.replaceAllString(this.M_TN_Floor.totalpublicarea,",","","number"):0,DefaultRentalRate:this.M_TN_Floor.defaultrentalrate?this.replaceAllString(this.M_TN_Floor.defaultrentalrate,",","","number"):0,PictureFileName:this.M_TN_Floor.picturefilename,ReferenceFileName:this.M_TN_Floor.referencefilename,GrossArea:this.M_TN_Floor.grossarea?this.replaceAllString(this.M_TN_Floor.grossarea,",","","number"):0,SemiGrossArea:this.M_TN_Floor.semigrossarea?this.replaceAllString(this.M_TN_Floor.semigrossarea,",","","number"):0,NetArea:this.M_TN_Floor.netarea?this.replaceAllString(this.M_TN_Floor.netarea,",","","number"):0,UserEdit:this.getDataUser().UserId,LastUpdateStamp:this.M_TN_Floor.lastupdatestamp};this.postJSON(this.getUrlUpdate(),t).then(function(t){null!=t&&e.$parent.resultUpdate(t.Message)})},M_ClearForm:function(){this.M_TN_Floor={subportfoliocd:this.getDataUser().SubPortfolioCd,blockcd:"",floorcd:"",descs:"",parkingfloor:"N",totalinbuildingparkingarea:"",totalpublicarea:"",picturefilename:"",referencefilename:"",defaultrentalrate:"",grossarea:"",semigrossarea:"",netarea:"",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:0,rowid:0}},M_New:function(){var e=this.$store.getters.GetPage1Data;this.M_TN_Floor.blockcd=e.BlockCd},M_Edit:function(){},M_Delete:function(e){var t=this,a=this.FormToABSList().getRowSelected(),r=[];a.forEach(function(e){r.push({SubPortfolioCd:t.getDataUser().SubPortfolioCd,FloorCD:e.FloorCd,BlockCD:e.BlockCd,LastUpdateStamp:e.LastUpdateStamp,_Message_:""})});var o={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:r};this.postJSONMulti(this.getUrlNewDeleteMulti(),o).then(function(e){null!=e&&t.$parent.resultDelete()})},getDataBy:function(e){var t=this,a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,blockcd:e.BlockCd,floorcd:e.FloorCd};this.postEncode(this.getUrlById(),a).then(function(a){if(null!=a){var r=a.Data[0];t.M_TN_Floor={subportfoliocd:r.subportfoliocd,blockcd:r.blockcd,floorcd:r.floorcd,descs:r.descs,parkingfloor:r.parkingfloor,totalinbuildingparkingarea:t.isCurrency(r.totalinbuildingparkingarea,t.decimal),totalpublicarea:t.isCurrency(r.totalpublicarea,t.decimal),picturefilename:r.picturefilename,referencefilename:r.referencefilename,defaultrentalrate:t.isCurrency(r.defaultrentalrate,t.decimal),grossarea:t.isCurrency(r.grossarea,t.decimal),semigrossarea:t.isCurrency(r.semigrossarea,t.decimal),netarea:t.isCurrency(r.netarea,t.decimal),userinput:r.userinput,useredit:r.useredit,timeinput:r.timeinput,timeedit:r.timeedit,lastupdatestamp:e.LastUpdateStamp,rowid:t.isCurrency(r.rowid,t.decimal)},t.IEBy.Input=r.userinput,t.IEBy.Edit=r.useredit}})},getFileName:function(e){this.M_TN_Floor.picturefilename=e}},created:function(){},beforeMount:function(){},mounted:function(){this.hideSideBarMenu()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},s=l,n=a("2877"),c=Object(n["a"])(s,r,o,!1,null,null,null);c.options.__file="TN_Floor.vue";t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0c2305.6b6a4815.js.map