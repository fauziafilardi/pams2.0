(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d221f7b"],{cd37:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[a("span",{directives:[{name:"show",rawName:"v-show",value:t.IEBy.Input&&t.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[t._v("\n          Input By : "+t._s(t.IEBy.Input)+" | Edit By : "+t._s(t.IEBy.Edit)+" "),a("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),a("b-collapse",{attrs:{id:"collapse1",visible:!0}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[a("b-form",{attrs:{"data-vv-scope":"FormScope_"+t.PageLevel+"_"+t.TabIndex,"data-vv-value-path":"FormScope_"+t.PageLevel+"_"+t.TabIndex}},[a("b-row",[a("b-col",{attrs:{md:"6"}},[a("b-row",[a("b-col",{staticClass:"lbl-col-align",staticStyle:{"padding-left":"37px !important","text-align":"left !important"},attrs:{md:"4"}},[a("label",{class:"VIEW"==t.inputStatus?"lbl-view-form":"text-field-form",attrs:{for:""}},[t._v("Rental Rate")])])],1)],1)],1),a("ABSGrid",{ref:"ref_GridLooRental",attrs:{prop:t.param,PageLevel:t.PageLevel,TabIndex:t.TabIndex},on:{changeCheckbox:t.changeCheckbox,onBlur:t.onBlur,total:t.sumTotal},model:{value:t.dataDetail,callback:function(e){t.dataDetail=e},expression:"dataDetail"}}),a("br"),a("b-row",{staticStyle:{"padding-left":"10px"}},[a("b-col",{attrs:{offset:"10"}},[t._v("\n                  Sub Total\n                ")]),a("b-col",{staticStyle:{"text-align":"right","padding-right":"26px !important"}},[t._v("\n                  "+t._s(t.subTotal)+"\n                ")])],1),a("b-row",{staticStyle:{"padding-top":"10px","padding-left":"10px"}},[a("b-col",{staticStyle:{"padding-left":"10px !important"},attrs:{md:"1"}},[t._v("\n                  Add. Days\n                ")]),a("b-col",{staticStyle:{"text-align":"right","padding-right":"4px !important"},attrs:{md:"2"}},[t._v("\n                  "+t._s(t.M_TN_LOOLotRentalAddDays.leaseperiod)+"\n                ")]),a("b-col",{staticStyle:{"text-align":"right","padding-right":"46px !important"},attrs:{md:"3"}},[t._v("\n                  "+t._s(t.M_TN_LOOLotRentalAddDays.area)+"\n                ")]),a("b-col",{staticStyle:{"text-align":"right","padding-right":"57px !important"},attrs:{md:"3"}},[a("ABSTextBoxOnly",{attrs:{prop:t.PI_subTotalRentalRate},on:{onBlur:function(e){t.onBlurAddDays()}},model:{value:t.M_TN_LOOLotRentalAddDays.rentalrate,callback:function(e){t.$set(t.M_TN_LOOLotRentalAddDays,"rentalrate",e)},expression:"M_TN_LOOLotRentalAddDays.rentalrate"}})],1),a("b-col",{staticStyle:{"text-align":"right","padding-right":"26px !important"},attrs:{md:"3"}},[t._v("\n                  "+t._s(t.M_TN_LOOLotRentalAddDays.totalbaserent)+"\n                ")])],1),a("b-row",{staticStyle:{"padding-left":"10px"}},[a("b-col",{staticStyle:{"padding-right":"26px !important"},attrs:{offset:"11"}},[a("hr")])],1),a("b-row",{staticStyle:{"padding-left":"10px"}},[a("b-col",{attrs:{offset:"10"}},[t._v("\n                  Grand Total\n                ")]),a("b-col",{staticStyle:{"text-align":"right","padding-right":"26px !important"}},[t._v("\n                  "+t._s(t.total)+"\n                ")])],1),a("ABSTAnalysis",{attrs:{prop:t.PTAnalysis}})],1)],1)],1)],1)],1)])},o=[],s=(a("6b54"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{subTotal:"",isEditMode:!1,isEditModePeriodDays:!1,total:[],ValKey:null,FormType:"Form",Module:"TN",IEBy:{Input:"",Edit:""},PI_subTotalRentalRate:{cValidate:"",cName:"subTotalRentalRate",cLabel:"",cLabelSize:4,cOrder:1,cKey:!1,cType:"decimal",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},M_TN_LOOLotRental:{lotno:"",blockcd:"",floorcd:"",grossarea:0,semigrossarea:0,netarea:0,subportfoliocd:this.getDataUser().SubPortfolioCd,applicationno:"",timeedit:"",lastupdatestamp:0,rowid:0,Gross_SemiGross_NetArea:0},M_TN_LOOLotRentalAddDays:{antenna:"",area:"",fixcharges:"",lastupdatestamp:0,leaseperiod:"",originalrate:"",recommendationrate:"",rentalrate:"",totalbaserent:""},dataDetail:[],param:{cDisplayColumn:"leaseperiod=decimal,area=decimal,rentalrate=decimal,freeperiod,totalbaserent=decimal",cTotalColumn:"totalbaserent",showCheckBoxDelete:!1,showNumber:!0,divStyle:"185",comp:[{slot:"leaseperiod",compType:"ABSTextBoxOnly",cIsAlwaysShow:!1,cHideRowColumnCSS:!0,cValidate:"",cName:"leaseperiod",cLabel:"",cLabelSize:4,cOrder:0,cKey:!1,cType:"decimal",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},{slot:"rentalrate",compType:"ABSTextBoxOnly",cIsAlwaysShow:!1,cHideRowColumnCSS:!0,cValidate:"",cName:"rentalrate",cLabel:"",cLabelSize:4,cOrder:0,cKey:!1,cType:"decimal",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},{slot:"freeperiod",compType:"ABSinputCheckBoxOnly",cValidate:"",cName:"freeperiod",cLabel:"",cLabelSize:4,cOptions:[{text:"",value:"Y"}],cOrder:0,cKey:!1,cVisible:!0,cProtect:!1,cDefault:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cHideRowColumnCSS:!0}]},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder}}},watch:{dataDetail:function(t,e){t.length>0?this.isEditMode=!0:this.isEditMode=!1}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage2Data},DataRowPage1:function(){return this.$store.getters.GetPage1Data}},methods:{onBlurAddDays:function(){this.recalculate()},recalculate:function(){this.$refs.ref_GridLooRental.recalculateTotal()},onBlur:function(t){var e=this.dataDetail[t].freeperiod;this.changeCheckbox(t,e)},changeCheckbox:function(t,e){"Y"==e?this.dataDetail[t].totalbaserent="0.00":"N"==this.dataDetail[t].antenna&&"Y"==this.dataDetail[t].fixcharges?this.dataDetail[t].totalbaserent=parseFloat(this.dataDetail[t].leaseperiod,this.decimal)*parseFloat(this.replaceAllString(this.dataDetail[t].rentalrate,",",""),this.decimal):this.dataDetail[t].totalbaserent=parseFloat(this.dataDetail[t].leaseperiod,this.decimal)*parseFloat(this.replaceAllString(this.dataDetail[t].rentalrate,",",""),this.decimal)*parseFloat(this.replaceAllString(this.dataDetail[t].area,",",""),this.decimal),this.dataDetail[t].totalbaserent=this.isCurrency(this.dataDetail[t].totalbaserent,this.decimal).toString(),this.$refs.ref_GridLooRental.items=this.dataDetail,this.recalculate()},sumTotal:function(t){var e;if(t.length>0){var a=this.replaceAllString(t[0].toString(),",","");this.M_TN_LOOLotRentalAddDays.rentalrate=this.replaceAllString(this.M_TN_LOOLotRentalAddDays.rentalrate,",",""),"N"==this.M_TN_LOOLotRentalAddDays.antenna&&"Y"==this.M_TN_LOOLotRentalAddDays.fixcharges?this.M_TN_LOOLotRentalAddDays.totalbaserent=parseFloat(this.M_TN_LOOLotRentalAddDays.leaseperiod,this.decimal)*parseFloat(this.M_TN_LOOLotRentalAddDays.rentalrate,this.decimal):this.M_TN_LOOLotRentalAddDays.totalbaserent=parseFloat(this.M_TN_LOOLotRentalAddDays.leaseperiod,this.decimal)*parseFloat(this.M_TN_LOOLotRentalAddDays.rentalrate,this.decimal)*parseFloat(this.M_TN_LOOLotRentalAddDays.area,this.decimal),e=parseFloat(a,this.decimal)+parseFloat(this.M_TN_LOOLotRentalAddDays.totalbaserent,this.decimal),this.M_TN_LOOLotRentalAddDays.totalbaserent=this.isCurrency(this.M_TN_LOOLotRentalAddDays.totalbaserent,this.decimal),this.M_TN_LOOLotRentalAddDays.rentalrate=this.isCurrency(this.M_TN_LOOLotRentalAddDays.rentalrate,this.decimal),this.subTotal=this.isCurrency(a,this.decimal),this.total=this.isCurrency(e,this.decimal)}else this.subTotal=0,this.total=0},setToolbarButton:function(){},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){this.paramFromParent()},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(t){},M_Refresh:function(){},M_Cancel:function(){this.paramFromParent()},doDoubleClick:function(){},rowClicked:function(t,e){},rowLink:function(t){this.$refs.modalTest.show()},paramFromParent:function(){this.$parent.showForm=!1;var t=this.$store.getters.GetPage1Data;this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex&&("A"!=t.Status&&1!=t.ContractStatus||"N"!=t.Status&&1!=t.ContractStatus||"C"==t.Status||"X"==t.Status?(this.FormType="View",this.$store.commit("setFormType","View"),this.getToolbar().ProcessPS()):(this.FormType="Form",this.$store.commit("setFormType","Form"),this.getToolbar().FormStatus="EDIT",this.getToolbar().ProcessPS())),this.M_TN_LOOLotRental.applicationno=t.ApplicationNo,this.getDataBy(t)},M_Insert:function(){},M_Update:function(){for(var t=this,e=[],a=[],i=1,o=0;o<this.dataDetail.length;o++)a.push({_LineNo_:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,ApplicationNo:this.M_TN_LOOLotRental.applicationno,ContractRentalLineNo:i,LeasePeriod:this.replaceAllString(this.dataDetail[o].leaseperiod,",",""),RentalRate:this.replaceAllString(this.dataDetail[o].rentalrate,",",""),FreePeriod:this.replaceAllString(this.dataDetail[o].freeperiod,",","")}),this.isEditMode?(a[o]._Method_="UPDATE",a[o].OriginalRate=this.dataDetail[o].originalrate,a[o].RecommendationRate=this.dataDetail[o].recommendationrate,a[o].UserEdit=this.getDataUser().UserId):(a[o]._Method_="INSERT",a[o].UserInput=this.getDataUser().UserId),i++;var s={_LineNo_:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,ApplicationNo:this.M_TN_LOOLotRental.applicationno,LeasePeriod:this.replaceAllString(this.M_TN_LOOLotRentalAddDays.leaseperiod,",",""),RentalRate:this.replaceAllString(this.M_TN_LOOLotRentalAddDays.rentalrate,",","")};this.isEditModePeriodDays?(s._Method_="UPDATE2",s.OriginalRate=this.replaceAllString(this.M_TN_LOOLotRentalAddDays.originalrate,",",""),s.RecommendationRate=this.replaceAllString(this.M_TN_LOOLotRentalAddDays.recommendationrate,",",""),s.UserEdit=this.getDataUser().UserId):(s._Method_="INSERT2",s.UserInput=this.getDataUser().UserId);var r={_Method_:"UPDATE3",_LineNo_:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,ApplicationNo:this.M_TN_LOOLotRental.applicationno,UserId:this.getDataUser().UserId},l={_Method_:"UPDATE4",_LineNo_:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,ApplicationNo:this.M_TN_LOOLotRental.applicationno},n={_Method_:"UPDATE5",_LineNo_:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,ApplicationNo:this.M_TN_LOOLotRental.applicationno,UserId:this.getDataUser().UserId};e.push({A_Looping:a,B_Update:s,C_Update:r,D_Update:l,E_Update:n});var d={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:e};this.postJSONMulti(this.getUrlProsesDataPostMulti(),d).then(function(e){if(null!=e){var a=" Rental Rate success.";a=t.isEditMode?"Update"+a:"Insert"+a,t.alertSuccess(a),t.$store.commit("setListDisable",!1),t.$store.commit("setStatus","view"),t.getToolbar().setButton(!1)}})},M_ClearForm:function(){this.M_TN_LOOLotRental={lotno:"",blockcd:"",floorcd:"",grossarea:0,semigrossarea:0,netarea:0,subportfoliocd:this.getDataUser().SubPortfolioCd,applicationno:"",timeedit:"",lastupdatestamp:0,rowid:0}},M_New:function(){var t=this.$store.getters.GetPage1Data;this.M_TN_LOOLotRental.applicationno=t.ApplicationNo},M_Edit:function(){},getDataBy:function(t){var e=this,a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,applicationno:t.ApplicationNo};this.postEncode(this.getUrlById(),a).then(function(a){if(null!=a){a.Data.length>0?e.isEditModePeriodDays=!0:e.isEditModePeriodDays=!1,e.getDataBy2(t);var i=a.Data[0];e.M_TN_LOOLotRentalAddDays={antenna:i.antenna,area:e.isCurrency(i.area,e.decimal),fixcharges:i.fixcharges,lastupdatestamp:i.lastupdatestamp,leaseperiod:e.isCurrency(i.leaseperiod,e.decimal),originalrate:i.originalrate,recommendationrate:i.recommendationrate,rentalrate:e.isCurrency(i.rentalrate,e.decimal),totalbaserent:e.isCurrency(i.totalbaserent,e.decimal)}}})},getDataBy2:function(t){var e={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,applicationno:t.ApplicationNo};this.param.propGetDataBy=e,this.param.NoGetById="2",this.$refs.ref_GridLooRental.doGetList("","eb_getList")}},created:function(){this.$store.commit("setFormType","Form")},beforeMount:function(){},mounted:function(){this.hideSideBarMenu()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),r=s,l=a("2877"),n=Object(l["a"])(r,i,o,!1,null,null,null);n.options.__file="TN_LOORental.vue";e["default"]=n.exports}}]);
//# sourceMappingURL=chunk-2d221f7b.439b44fe.js.map