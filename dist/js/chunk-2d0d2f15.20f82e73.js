(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d2f15"],{"5b3e":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("ABSListVuex",{attrs:{prop:e.propList,title:e.data.QueryName},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table,refreshColumn:e.$parent.refreshColumn}}),i("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[i("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[i("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                    Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),i("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),i("b-collapse",{attrs:{id:"collapse1",visible:!0}},[i("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[i("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[i("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[i("b-row",{staticStyle:{"padding-left":"10px"}},[i("b-col",{attrs:{md:"12",id:"col-left"}},[i("b-row",[i("b-col",{attrs:{md:"6"}},[i("ABSinputTextVuex",{ref:"ref_vehicleno",attrs:{prop:e.PI_vehicleno},model:{value:e.M_TN_LotVehicleRegistration.vehicleno,callback:function(t){e.$set(e.M_TN_LotVehicleRegistration,"vehicleno",t)},expression:"M_TN_LotVehicleRegistration.vehicleno"}})],1)],1),i("b-row",[i("b-col",{attrs:{md:"6"}},[i("ABSInputSelectList",{ref:"ref_carparkno",attrs:{prop:e.PI_carparkno,value:e.M_TN_LotVehicleRegistration.carparkno,label:e.M_TN_LotVehicleRegistration.carparknoLabel},on:{change:e.OncarparknoChange}})],1)],1),i("b-row",[i("b-col",{attrs:{md:"6"}},[i("ABSTextAreaVuex",{ref:"ref_remarks",attrs:{prop:e.PI_remarks},on:{input:e.OnremarksChange},model:{value:e.M_TN_LotVehicleRegistration.remarks,callback:function(t){e.$set(e.M_TN_LotVehicleRegistration,"remarks",t)},expression:"M_TN_LotVehicleRegistration.remarks"}})],1)],1)],1)],1),i("ABSTAnalysis",{attrs:{prop:e.PTAnalysis}})],1)],1)],1)],1)],1)],1)},o=[],r={props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{ValKey:null,FormType:"List",Module:"TN",propList:{initialWhere:"LotNo = '"+this.ValKey+"'",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_TN_LotVehicleRegistration:{subportfoliocd:this.getDataUser().SubPortfolioCd,lotno:"",vehicleno:"",carparkno:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:0,rowid:0},PI_vehicleno:{cValidate:"required|max:10",cName:"vehicleno",cLabel:"Vehicle No",cLabelSize:4,cOrder:0,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_carparkno:{dataLookUp:{LookUpCd:"GetLookupTNCarpark",ColumnDB:"CarparkNo",InitialWhere:"STATUS='AVAILABLE' AND SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"'",ParamWhere:""},cValidate:"required",cName:"carparkno",cLabel:"Carpark No",cKey:!1,cLabelSize:4,cOrder:0,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"CarparkNo,CarparkType"},PI_remarks:{cValidate:"",cName:"remarks",cLabel:"Remarks",cLabelSize:4,cOrder:0,cKey:!1,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage2Data},DataRowPage1:function(){return this.$store.getters.GetPage1Data}},methods:{OncarparknoChange:function(e){var t=this;this.$nextTick(function(){t.M_TN_LotVehicleRegistration.carparkno=e.id,t.M_TN_LotVehicleRegistration.carparknoLabel=e.label,t.inputStatus}),this.$forceUpdate()},OnremarksChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},setToolbarButton:function(){},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,t){},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){this.$parent.showForm=!1;var e=this.$store.getters.GetPage1Data;this.M_TN_LotVehicleRegistration.lotno=e.LotNo,this.propList.initialWhere=" LotNo = '"+e.LotNo+"' ",this.FormToABSList().doGetList("","eb_getList")},M_Insert:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCD:this.getDataUser().SubPortfolioCd,LotNo:this.M_TN_LotVehicleRegistration.lotno,VehicleNo:this.M_TN_LotVehicleRegistration.vehicleno,CarparkNo:""==this.M_TN_LotVehicleRegistration.carparkno||null==this.M_TN_LotVehicleRegistration.carparkno?"NULL":this.M_TN_LotVehicleRegistration.carparkno,Remarks:this.M_TN_LotVehicleRegistration.remarks,UserInput:this.getDataUser().UserId,UserEdit:this.getDataUser().UserId};this.postJSON(this.getUrlInsert(),t).then(function(t){null!=t&&e.$parent.resultInsert(t.Message)})},M_Update:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCD:this.getDataUser().SubPortfolioCd,LotNo:this.M_TN_LotVehicleRegistration.lotno,VehicleNo:this.M_TN_LotVehicleRegistration.vehicleno,CarparkNo:""==this.M_TN_LotVehicleRegistration.carparkno||null==this.M_TN_LotVehicleRegistration.carparkno?"NULL":this.M_TN_LotVehicleRegistration.carparkno,Remarks:this.M_TN_LotVehicleRegistration.remarks,UserEdit:this.getDataUser().UserId,LastUpdateStamp:this.M_TN_LotVehicleRegistration.lastupdatestamp};this.postJSON(this.getUrlUpdate(),t).then(function(t){null!=t&&e.$parent.resultUpdate(t.Message)})},M_ClearForm:function(){this.M_TN_LotVehicleRegistration={subportfoliocd:this.getDataUser().SubPortfolioCd,lotno:"",vehicleno:"",carparkno:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:0,rowid:0}},M_New:function(){var e=this.$store.getters.GetPage1Data;this.M_TN_LotVehicleRegistration.lotno=e.LotNo},M_Edit:function(){},M_Delete:function(e){var t=this,i={OptionSeq:this.getOptionSeq().OptionSeq,SubPortfolioCd:this.getDataUser().SubPortfolioCd,PortfolioCd:this.getDataUser().PortfolioCd,LineNo:this.$parent.data.PageOrder,Data:e};this.postJSONMulti(this.getUrlDeleteMulti(),i).then(function(e){if(null!=e){var i="Deleting Data Successfully";t.$parent.resultDelete(i)}})},getDataBy:function(e){var t=this,i={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCD:this.getDataUser().SubPortfolioCd,lotno:e.LotNo,vehicleno:e.VehicleNo};this.postEncode(this.getUrlById(),i).then(function(i){if(null!=i){var a=i.Data[0];t.M_TN_LotVehicleRegistration={subportfoliocd:a.subportfoliocd,lotno:a.lotno,vehicleno:a.vehicleno,carparkno:a.carparkno,remarks:a.remarks,userinput:a.userinput,useredit:a.useredit,timeinput:a.timeinput,timeedit:a.timeedit,lastupdatestamp:e.LastUpdateStamp,rowid:t.isCurrency(a.rowid,t.decimal)},t.M_TN_LotVehicleRegistration.carparknoLabel=null!=t.M_TN_LotVehicleRegistration.carparkno&&""!=t.M_TN_LotVehicleRegistration.carparkno?a.carparkno+t.separator:"",t.IEBy.Input=a.userinput,t.IEBy.Edit=a.useredit}})}},created:function(){},beforeMount:function(){},mounted:function(){this.hideSideBarMenu()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},s=r,n=i("2877"),l=Object(n["a"])(s,a,o,!1,null,null,null);l.options.__file="TN_LotVehicleRegistration.vue";t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0d2f15.20f82e73.js.map