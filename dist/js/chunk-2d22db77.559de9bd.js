(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22db77"],{f94b:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ABSListVuex",{attrs:{prop:t.propList,title:t.data.QueryName},on:{rowClicked:t.$parent.rowClicked,rowDblClicked:t.$parent.doDoubleClick,rowLinkClick:t.$parent.rowLink,pageSize:t.$parent.M_PageSize,pagination:t.$parent.M_Pagination,filter:t.$parent.M_Advance_Filter,headTable:t.$parent.M_Head_Table,refreshColumn:t.$parent.refreshColumn}}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[a("span",{directives:[{name:"show",rawName:"v-show",value:t.IEBy.Input&&t.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[t._v("\n                    Input By : "+t._s(t.IEBy.Input)+" | Edit By : "+t._s(t.IEBy.Edit)+" "),a("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),a("b-collapse",{attrs:{id:"collapse1",visible:!0}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[a("b-form",{attrs:{"data-vv-scope":"FormScope_"+t.PageLevel+"_"+t.TabIndex,"data-vv-value-path":"FormScope_"+t.PageLevel+"_"+t.TabIndex}},[a("b-row",{staticStyle:{"padding-left":"10px"}},[a("b-col",{attrs:{md:"12",id:"col-left"}},[a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_vehicleno",attrs:{prop:t.PI_vehicleno},model:{value:t.M_TN_ContractVehicleRegistration.vehicleno,callback:function(e){t.$set(t.M_TN_ContractVehicleRegistration,"vehicleno",e)},expression:"M_TN_ContractVehicleRegistration.vehicleno"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_carparkno",attrs:{prop:t.PI_carparkno,value:t.M_TN_ContractVehicleRegistration.carparkno,label:t.M_TN_ContractVehicleRegistration.carparknoLabel},on:{change:t.OncarparknoChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSTextAreaVuex",{ref:"ref_descs",attrs:{prop:t.PI_descs},model:{value:t.M_TN_ContractVehicleRegistration.descs,callback:function(e){t.$set(t.M_TN_ContractVehicleRegistration,"descs",e)},expression:"M_TN_ContractVehicleRegistration.descs"}})],1)],1)],1)],1),a("ABSTAnalysis",{attrs:{prop:t.PTAnalysis}})],1)],1)],1)],1)],1)],1)},o=[],r=(a("ac6a"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{ValKey:null,FormType:"List",Module:"TN",propList:{initialWhere:"ApplicationNo = '"+this.ValKey+"'",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_TN_ContractVehicleRegistration:{subportfoliocd:this.getDataUser().SubPortfolioCd,applicationno:"",vehicleno:"",carparkno:"",descs:"",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:0,rowid:0},PI_vehicleno:{cValidate:"required|max:10",cName:"vehicleno",cLabel:"Vehicle No",cLabelSize:4,cOrder:1,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_carparkno:{dataLookUp:{LookUpCd:"GetLookupTNCarpark",ColumnDB:"CarparkNo",InitialWhere:"STATUS='AVAILABLE' AND SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"' and CarParkNo Not In (Select CarParkNo from VW_TN_CarPark_Used)",ParamWhere:""},cValidate:"",cName:"carparkno",cLabel:"Carpark No",cKey:!1,cLabelSize:4,cOrder:2,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"TN/TN_SubPortfolio",cDisplayColumn:"CarparkNo,CarparkType"},PI_descs:{cValidate:"max:150",cName:"descs",cLabel:"Description",cLabelSize:4,cOrder:3,cKey:!1,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage2Data},DataRowPage1:function(){return this.$store.getters.GetPage1Data}},methods:{OncarparknoChange:function(t){var e=this;this.$nextTick(function(){e.M_TN_ContractVehicleRegistration.carparkno=t.id,e.M_TN_ContractVehicleRegistration.carparknoLabel=t.label,e.inputStatus}),this.$forceUpdate()},setToolbarButton:function(){},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(t){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(t,e){},rowLink:function(t){this.$refs.modalTest.show()},paramFromParent:function(){this.$parent.showForm=!1;var t=this.$store.getters.GetPage1Data;"A"!=t.Status&&1!=t.ContractStatus||"N"!=t.Status&&1!=t.ContractStatus||"C"==t.Status||"X"==t.Status?(this.FormType="View",this.$store.commit("setFormType","View"),this.getToolbar().ProcessPS()):(this.FormType="List",this.$store.commit("setFormType","List"),this.getToolbar().ProcessPS()),this.M_TN_ContractVehicleRegistration.applicationno=t.ApplicationNo,this.propList.initialWhere=" SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' and ApplicationNo = '"+t.ApplicationNo+"' ",this.FormToABSList().doGetList("","eb_getList")},M_Insert:function(){var t=this,e={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCD:this.getDataUser().SubPortfolioCd,ApplicationNo:this.M_TN_ContractVehicleRegistration.applicationno,VehicleNo:this.M_TN_ContractVehicleRegistration.vehicleno,CarparkNo:""==this.M_TN_ContractVehicleRegistration.carparkno||null==this.M_TN_ContractVehicleRegistration.carparkno?"NULL":this.M_TN_ContractVehicleRegistration.carparkno,Descs:this.M_TN_ContractVehicleRegistration.descs,UserInput:this.getDataUser().UserId,UserEdit:this.getDataUser().UserId};this.postJSON(this.getUrlInsert(),e).then(function(e){null!=e&&t.$parent.resultInsert(e.Message)})},M_Update:function(){var t=this,e={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCD:this.getDataUser().SubPortfolioCd,ApplicationNo:this.M_TN_ContractVehicleRegistration.applicationno,VehicleNo:this.M_TN_ContractVehicleRegistration.vehicleno,CarparkNo:""==this.M_TN_ContractVehicleRegistration.carparkno||null==this.M_TN_ContractVehicleRegistration.carparkno?"NULL":this.M_TN_ContractVehicleRegistration.carparkno,Descs:this.M_TN_ContractVehicleRegistration.descs,UserEdit:this.getDataUser().UserId,LastUpdateStamp:this.M_TN_ContractVehicleRegistration.lastupdatestamp};this.postJSON(this.getUrlUpdate(),e).then(function(e){null!=e&&t.$parent.resultUpdate(e.Message)})},M_ClearForm:function(){this.M_TN_ContractVehicleRegistration={subportfoliocd:this.getDataUser().SubPortfolioCd,applicationno:"",vehicleno:"",carparkno:"",descs:"",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:0,rowid:0}},M_New:function(){var t=this.$store.getters.GetPage1Data;this.M_TN_ContractVehicleRegistration.applicationno=t.ApplicationNo},M_Edit:function(){},M_Delete:function(t){var e=this,a=this.FormToABSList().getRowSelected(),i=[];a.forEach(function(t){i.push({ApplicationNo:e.DataRowPage1.ApplicationNo,SubPortfolioCd:e.getDataUser().SubPortfolioCd,VehicleNo:t.VehicleNo,LastUpdateStamp:t.LastUpdateStamp,_Message_:"Vehicle No "+t.VehicleNo})});var o={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:i};this.postJSONMulti(this.getUrlNewDeleteMulti(),o).then(function(t){null!=t&&e.$parent.resultDelete()})},getDataBy:function(t){var e=this,a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCD:this.getDataUser().SubPortfolioCd,applicationno:t.ApplicationNo,vehicleno:t.VehicleNo};this.postEncode(this.getUrlById(),a).then(function(a){if(null!=a){var i=a.Data[0];e.M_TN_ContractVehicleRegistration={subportfoliocd:i.subportfoliocd,applicationno:i.applicationno,vehicleno:i.vehicleno,carparkno:i.carparkno,descs:i.descs,userinput:i.userinput,useredit:i.useredit,timeinput:i.timeinput,timeedit:i.timeedit,lastupdatestamp:t.LastUpdateStamp,rowid:i.rowid},e.M_TN_ContractVehicleRegistration.carparknoLabel=null!=e.M_TN_ContractVehicleRegistration.carparkno&&""!=e.M_TN_ContractVehicleRegistration.carparkno?i.carparkno+e.separator:"",e.IEBy.Input=i.userinput,e.IEBy.Edit=i.useredit}})}},created:function(){},beforeMount:function(){},mounted:function(){this.hideSideBarMenu()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),n=r,s=a("2877"),c=Object(s["a"])(n,i,o,!1,null,null,null);c.options.__file="TN_ContractVehicleRegistration.vue";e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d22db77.559de9bd.js.map