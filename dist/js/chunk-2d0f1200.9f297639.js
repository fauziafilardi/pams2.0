(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f1200"],{"9efd":function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("ABSListVuex",{attrs:{prop:e.propList,title:e.data.QueryName},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table,refreshColumn:e.$parent.refreshColumn}}),s("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[s("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[s("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                    Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),s("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),s("b-collapse",{attrs:{id:"collapse1",visible:!0}},[s("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[s("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[s("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[s("b-row",{staticStyle:{"padding-left":"10px"}},[s("b-col",{attrs:{md:"12",id:"col-left"}},[s("b-row",[s("b-col",{attrs:{md:"6"}},[s("ABSInputSelectList",{ref:"ref_accessorycd",attrs:{prop:e.PI_accessorycd,value:e.M_TN_LotAccessory.accessorycd,label:e.M_TN_LotAccessory.accessorycdLabel},on:{change:e.OnaccessorycdChange}})],1)],1),s("b-row",[s("b-col",{attrs:{md:"6"}},[s("ABSinputTextVuex",{ref:"ref_qty",attrs:{prop:e.PI_qty},model:{value:e.M_TN_LotAccessory.qty,callback:function(t){e.$set(e.M_TN_LotAccessory,"qty",t)},expression:"M_TN_LotAccessory.qty"}})],1)],1),s("b-row",[s("b-col",{attrs:{md:"6"}},[s("ABSTextAreaVuex",{ref:"ref_remarks",attrs:{prop:e.PI_remarks},on:{input:e.OnremarksChange},model:{value:e.M_TN_LotAccessory.remarks,callback:function(t){e.$set(e.M_TN_LotAccessory,"remarks",t)},expression:"M_TN_LotAccessory.remarks"}})],1)],1)],1)],1),s("ABSTAnalysis",{attrs:{prop:e.PTAnalysis}})],1)],1)],1)],1)],1)],1)},a=[],r=(s("ac6a"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{ValKey:null,FormType:"List",Module:"TN",propList:{initialWhere:"LotNo = '"+this.ValKey+"'",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_TN_LotAccessory:{subportfoliocd:this.getDataUser().SubPortfolioCd,lotno:"",accessorycd:"",accessorydesc:"",qty:"0",hostatus:"",hodate:"",endofwarrantyperiod:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:0,rowid:0},PI_accessorycd:{dataLookUp:{LookUpCd:"GetLookupTNAccessoryBySubportfolio",ColumnDB:"AccessoryCd",InitialWhere:"SUBPORTFOLIOCD='"+this.getDataUser().SubPortfolioCd+"'",ParamWhere:""},cValidate:"required",cName:"accessorycd",cLabel:"Accessory",cKey:!0,cLabelSize:4,cOrder:1,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"AccessoryCd,Descs"},PI_qty:{cValidate:"required",cName:"qty",cLabel:"Quantity",cLabelSize:4,cOrder:2,cKey:!1,cType:"numeric",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_remarks:{cValidate:"",cName:"remarks",cLabel:"Remarks",cLabelSize:4,cOrder:3,cKey:!1,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage2Data},DataRowPage1:function(){return this.$store.getters.GetPage1Data}},methods:{OnaccessorycdChange:function(e){var t=this;this.$nextTick(function(){t.M_TN_LotAccessory.accessorycd=e.id,t.M_TN_LotAccessory.accessorycdLabel=e.label,t.inputStatus}),this.$forceUpdate()},OnremarksChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},setToolbarButton:function(){this.getToolbar().statusFunction[1].disabled=!1},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,t){},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){this.$parent.showForm=!1;var e=this.$store.getters.GetPage1Data;this.M_TN_LotAccessory.lotno=e.LotNo,this.propList.initialWhere=" SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' AND LotNo = '"+e.LotNo+"' ","Rented"==e.Status||"Available"==e.Status?(this.FormType="List",this.$store.commit("setFormType","List"),this.getToolbar().ProcessPS()):(this.FormType="View",this.$store.commit("setFormType","View"),this.getToolbar().ProcessPS()),this.FormToABSList().doGetList("","eb_getList")},M_Insert:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCD:this.getDataUser().SubPortfolioCd,LotNo:this.M_TN_LotAccessory.lotno,AccessoryCd:""==this.M_TN_LotAccessory.accessorycd||null==this.M_TN_LotAccessory.accessorycd?"NULL":this.M_TN_LotAccessory.accessorycd,Qty:""==this.M_TN_LotAccessory.qty||null==this.M_TN_LotAccessory.qty?0:this.M_TN_LotAccessory.qty,Remarks:this.M_TN_LotAccessory.remarks,UserInput:this.getDataUser().UserId,UserEdit:this.getDataUser().UserId};this.postJSON(this.getUrlInsert(),t).then(function(t){null!=t&&e.$parent.resultInsert(t.Message)})},M_Update:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCD:this.getDataUser().SubPortfolioCd,LotNo:this.M_TN_LotAccessory.lotno,AccessoryCd:""==this.M_TN_LotAccessory.accessorycd||null==this.M_TN_LotAccessory.accessorycd?"NULL":this.M_TN_LotAccessory.accessorycd,Qty:""==this.M_TN_LotAccessory.qty||null==this.M_TN_LotAccessory.qty?0:this.M_TN_LotAccessory.qty,Remarks:this.M_TN_LotAccessory.remarks,UserEdit:this.getDataUser().UserId,LastUpdateStamp:this.M_TN_LotAccessory.lastupdatestamp};this.postJSON(this.getUrlUpdate(),t).then(function(t){null!=t&&e.$parent.resultUpdate(t.Message)})},M_ClearForm:function(){this.M_TN_LotAccessory={subportfoliocd:this.getDataUser().SubPortfolioCd,lotno:"",accessorycd:"",accessorydesc:"",qty:"0",hostatus:"",hodate:"",endofwarrantyperiod:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:0,rowid:0}},M_New:function(){var e=this.$store.getters.GetPage1Data;this.M_TN_LotAccessory.lotno=e.LotNo,this.$refs.ref_accessorycd.focus()},M_Edit:function(){this.$refs.ref_qty.focus()},M_Delete:function(e){var t=this,s=this.FormToABSList().getRowSelected(),o=[];s.forEach(function(e){o.push({SubPortfolioCd:t.getDataUser().SubPortfolioCd,LotNo:e.LotNo,AccessoryCd:e.AccessoryCd,LastUpdateStamp:e.LastUpdateStamp,_Message_:"Accessory Code "+e.AccessoryCd})});var a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:o};this.postJSONMulti(this.getUrlNewDeleteMulti(),a).then(function(e){null!=e&&t.$parent.resultDelete()})},getDataBy:function(e){var t=this,s={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCD:this.getDataUser().SubPortfolioCd,lotno:e.LotNo,accessorycd:e.AccessoryCd};this.postEncode(this.getUrlById(),s).then(function(s){if(null!=s){var o=s.Data[0];t.M_TN_LotAccessory={subportfoliocd:o.subportfoliocd,lotno:o.lotno,accessorycd:o.accessorycd,accessorydesc:o.accessorydesc,qty:t.isCurrency(o.qty,t.decimal),hostatus:o.hostatus,hodate:o.hodate,endofwarrantyperiod:o.endofwarrantyperiod,remarks:o.remarks,userinput:o.userinput,useredit:o.useredit,timeinput:o.timeinput,timeedit:o.timeedit,lastupdatestamp:e.LastUpdateStamp,rowid:t.isCurrency(o.rowid,t.decimal)},t.M_TN_LotAccessory.accessorycdLabel=null!=t.M_TN_LotAccessory.accessorycd&&""!=t.M_TN_LotAccessory.accessorycd?o.accessorycd+t.separator+o.accessorydesc:"",t.IEBy.Input=o.userinput,t.IEBy.Edit=o.useredit}})}},created:function(){},beforeMount:function(){},mounted:function(){this.hideSideBarMenu()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),c=r,i=s("2877"),n=Object(i["a"])(c,o,a,!1,null,null,null);n.options.__file="TN_LotAccessory.vue";t["default"]=n.exports}}]);
//# sourceMappingURL=chunk-2d0f1200.9f297639.js.map