(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c18d9"],{4711:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("ABSListVuex",{attrs:{prop:e.propList,title:e.data.QueryName},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table,refreshColumn:e.$parent.refreshColumn}}),r("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[r("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[r("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                    Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),r("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),r("b-collapse",{attrs:{id:"collapse1",visible:!0}},[r("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[r("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[r("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[r("b-row",{staticStyle:{"padding-left":"10px"}},[r("b-col",{attrs:{md:"12",id:"col-left"}},[r("b-row",[r("b-col",{attrs:{md:"6"}},[r("ABSinputTextVuex",{ref:"ref_propertycd",attrs:{prop:e.PI_propertycd},model:{value:e.M_TN_Property.propertycd,callback:function(t){e.$set(e.M_TN_Property,"propertycd",t)},expression:"M_TN_Property.propertycd"}})],1)],1),r("b-row",[r("b-col",{attrs:{md:"6"}},[r("ABSInputSelectList",{ref:"ref_subportfoliocd",attrs:{prop:e.PI_subportfoliocd,value:e.M_TN_Property.subportfoliocd,label:e.M_TN_Property.subportfoliocdLabel},on:{change:e.OnsubportfoliocdChange}})],1)],1),r("b-row",[r("b-col",{attrs:{md:"6"}},[r("ABSinputTextVuex",{ref:"ref_descs",attrs:{prop:e.PI_descs},model:{value:e.M_TN_Property.descs,callback:function(t){e.$set(e.M_TN_Property,"descs",t)},expression:"M_TN_Property.descs"}})],1)],1),r("b-row",[r("b-col",{attrs:{md:"6"}},[r("ABSinputTextVuex",{ref:"ref_colourcd",attrs:{prop:e.PI_colourcd},model:{value:e.M_TN_Property.colourcd,callback:function(t){e.$set(e.M_TN_Property,"colourcd",t)},expression:"M_TN_Property.colourcd"}})],1)],1),r("b-row",[r("b-col",{attrs:{md:"6"}},[r("ABSFileUpload",{ref:"ref_referencefilename",attrs:{prop:e.PI_referencefilename,file:e.M_TN_Property.picturefilename,image:e.M_TN_Property.referencefilename},on:{fileName:e.getFileName},model:{value:e.M_TN_Property.referencefilename,callback:function(t){e.$set(e.M_TN_Property,"referencefilename",t)},expression:"M_TN_Property.referencefilename"}})],1)],1)],1)],1),r("ABSTAnalysis",{attrs:{prop:e.PTAnalysis}})],1)],1)],1)],1)],1)],1)},i=[],a=(r("ac6a"),r("ade3")),s={props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{cInsertKey:"",FormType:"List",Module:"TN",propList:{initialWhere:"",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_TN_Property:{subportfoliocd:"",propertyid:0,propertycd:"",descs:"",latitude:"",longitude:"",referencefilename:"",picturefilename:"",colourcd:""},PI_subportfoliocd:{dataLookUp:{LookUpCd:"GetLookupCMSubPortfolioByUser",ColumnDB:"SubPortfolioCd",InitialWhere:"UserId='"+this.getDataUser().UserId+"'",ParamWhere:""},cValidate:"required",cName:"SubPortfolioCd",cLabel:"SubPortfolio",cKey:!1,cLabelSize:4,cOrder:2,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"SubPortFolioCd,Name"},PI_propertycd:{cValidate:"required|max:10",cName:"propertycd",cLabel:"Property Code",cLabelSize:4,cOrder:1,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_descs:{cValidate:"required|max:60",cName:"descs",cLabel:"Description",cLabelSize:4,cOrder:3,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_colourcd:{cValidate:"required|max:60",cName:"colourcd",cLabel:"Colour Code",cLabelSize:4,cOrder:4,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_referencefilename:Object(a["a"])({cValidate:"",cName:"referencefilename",cLabel:"Picture File Name",cSubPortfolio:this.getDataUser().SubPortfolioCd,cPath:"SaveLocation/SubPortfolio/"+this.getDataUser().SubPortfolioCd+"/FloorPlan",cLabelSize:4,cOrder:5,cVisible:!0,cModule:"TN",cPlaceholder:"Choose a file...",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex},"cVisible",!0),PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage1Data}},methods:{OnsubportfoliocdChange:function(e){var t=this;this.$nextTick(function(){t.M_TN_Property.subportfoliocd=e.id,t.M_TN_Property.subportfoliocdLabel=e.label,t.inputStatus}),this.$forceUpdate()},getFileName:function(e){this.M_TN_Property.picturefilename=e},setToolbarButton:function(){},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,t){},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){},M_Post:function(e){},M_Insert:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortFolioCd:this.M_TN_Property.subportfoliocd,PropertyCd:this.M_TN_Property.propertycd,ColourCd:this.M_TN_Property.colourcd,Descs:this.M_TN_Property.descs,ReferenceFileName:this.M_TN_Property.referencefilename,PathFile:this.PI_referencefilename.cPath,PictureFileName:this.M_TN_Property.picturefilename,UserInput:this.getDataUser().UserId,UserEdit:this.getDataUser().UserId};this.postJSON(this.getUrlInsert(),t).then(function(t){null!=t&&e.$parent.resultInsert(t.Message)})},M_Update:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortFolioCd:this.M_TN_Property.subportfoliocd,PropertyId:this.M_TN_Property.propertyid,PropertyCd:this.M_TN_Property.propertycd,ColourCd:this.M_TN_Property.colourcd,Descs:this.M_TN_Property.descs,ReferenceFileName:this.M_TN_Property.referencefilename,PathFile:this.PI_referencefilename.cPath,PictureFileName:this.M_TN_Property.picturefilename,UserEdit:this.getDataUser().UserId};this.postJSON(this.getUrlUpdate(),t).then(function(t){null!=t&&e.$parent.resultUpdate(t.Message)})},M_ClearForm:function(){this.M_TN_Property={subportfoliocd:"",propertyid:0,propertycd:"",descs:"",latitude:"",longitude:"",referencefilename:"",picturefilename:""}},M_New:function(){},M_Edit:function(){},M_Delete:function(e){var t=this,r=this.FormToABSList().getRowSelected(),o=[];r.forEach(function(e){o.push({SubPortfolioCd:e.SubPortfolioCd,PropertyId:e.PropertyId})});var i={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:o};this.postJSONMulti(this.getUrlNewDeleteMulti(),i).then(function(e){null!=e&&t.$parent.resultDelete()})},getDataBy:function(e){var t=this,r={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:e.SubPortfolioCd,PropertyId:e.PropertyId};this.postEncode(this.getUrlById(),r).then(function(e){if(null!=e){var r=e.Data[0];t.M_TN_Property={subportfoliocd:r.subportfoliocd,propertyid:r.propertyid,propertycd:r.propertycd,descs:r.descs,referencefilename:r.referencefilename,picturefilename:r.picturefilename,colourcd:r.colourcd},t.M_TN_Property.subportfoliocdLabel=null!=t.M_TN_Property.subportfoliocd&&""!=t.M_TN_Property.subportfoliocd?r.subportfoliocd+t.separator+r.subportfolioname:"",t.IEBy.Input=r.userinput,t.IEBy.Edit=r.useredit,t.$nextTick(function(){t.$forceUpdate()})}})}},beforeCreate:function(){},created:function(){this.$store.commit("setFormType","List"),this.getToolbar().ProcessPS()},beforeMount:function(){},mounted:function(){this.hideSideBarMenu(),this.FormToABSList().doGetList("","eb_getList")},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},c=s,n=r("2877"),l=Object(n["a"])(c,o,i,!1,null,null,null);l.options.__file="TN_Property.vue";t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0c18d9.84efd528.js.map