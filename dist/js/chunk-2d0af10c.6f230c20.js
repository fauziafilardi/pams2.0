(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0af10c"],{"0d79":function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("ABSListVuex",{attrs:{prop:e.propList,title:e.data.QueryName},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table,refreshColumn:e.$parent.refreshColumn}}),t("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[t("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[t("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                    Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),t("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),t("b-collapse",{attrs:{id:"collapse1",visible:!0}},[t("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[t("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[t("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[t("b-row",{staticStyle:{"padding-left":"10px"}},[t("b-col",{attrs:{md:"12",id:"col-left"}},[t("b-row",[t("b-col",{attrs:{md:"6"}},[t("ABSInputSelectList",{ref:"ref_customercategorycd",attrs:{prop:e.PI_customercategorycd,value:e.M_TN_LeasingPolicyRevenueShare.customercategorycd,label:e.M_TN_LeasingPolicyRevenueShare.customercategorycdLabel},on:{change:e.OncustomercategorycdChange}})],1),t("b-col",{attrs:{md:"6"}},[t("ABSCompute",{ref:"ref_xxx120827",attrs:{prop:e.PI_xxx120827},model:{value:e.M_TN_LeasingPolicyRevenueShare.xxx120827,callback:function(a){e.$set(e.M_TN_LeasingPolicyRevenueShare,"xxx120827",a)},expression:"M_TN_LeasingPolicyRevenueShare.xxx120827"}})],1)],1),t("b-row",[t("b-col",{attrs:{md:"6"}},[t("ABSinputTextVuex",{ref:"ref_revenueshareminpercentage",attrs:{prop:e.PI_revenueshareminpercentage},model:{value:e.M_TN_LeasingPolicyRevenueShare.revenueshareminpercentage,callback:function(a){e.$set(e.M_TN_LeasingPolicyRevenueShare,"revenueshareminpercentage",a)},expression:"M_TN_LeasingPolicyRevenueShare.revenueshareminpercentage"}})],1)],1),t("b-row",[t("b-col",{attrs:{md:"6"}},[t("ABSinputTextVuex",{ref:"ref_revenuesharemaxpercentage",attrs:{prop:e.PI_revenuesharemaxpercentage},on:{change:e.OnrevenuesharemaxpercentageChange},model:{value:e.M_TN_LeasingPolicyRevenueShare.revenuesharemaxpercentage,callback:function(a){e.$set(e.M_TN_LeasingPolicyRevenueShare,"revenuesharemaxpercentage",a)},expression:"M_TN_LeasingPolicyRevenueShare.revenuesharemaxpercentage"}})],1)],1),t("b-row",[t("b-col",{directives:[{name:"show",rawName:"v-show",value:e.err1,expression:"err1"}],attrs:{md:"6"}},[t("b-row",{directives:[{name:"show",rawName:"v-show",value:e.err1,expression:"err1"}]},[t("b-col",{attrs:{offset:"4"}},[t("label",{staticClass:"lbl-value-view-form",staticStyle:{color:"red"}},[e._v(" * RS. Max Percentage Must Be Greater Than RS. Min. Percentage  ")])])],1)],1)],1),t("b-row",[t("b-col",{attrs:{md:"6"}},[t("ABSTextAreaVuex",{ref:"ref_remarks",attrs:{prop:e.PI_remarks},on:{input:e.OnremarksChange},model:{value:e.M_TN_LeasingPolicyRevenueShare.remarks,callback:function(a){e.$set(e.M_TN_LeasingPolicyRevenueShare,"remarks",a)},expression:"M_TN_LeasingPolicyRevenueShare.remarks"}})],1)],1)],1)],1),t("ABSTAnalysis",{attrs:{prop:e.PTAnalysis}})],1)],1)],1)],1)],1)],1)},i=[],n=(t("ac6a"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{ValKey:null,FormType:"List",Module:"TN",error:!1,err1:!1,propList:{initialWhere:"SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' And LeasingPolicyYear = '"+this.ValKey+"'",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_TN_LeasingPolicyRevenueShare:{leasingpolicyyear:0,customercategorycd:"",descs:"",revenueshareminpercentage:"0",revenuesharemaxpercentage:"0",remarks:"",userinput:"",useredit:this.getDataUser().UserId,subportfoliocd:this.getDataUser().SubPortfolioCd,lastupdatestamp:0,rowid:0},PI_customercategorycd:{dataLookUp:{LookUpCd:"GetLookupTNCustomerCategory",ColumnDB:"CustomerCategoryCd",InitialWhere:"SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' and LeasingStatus = 'Y'",ParamWhere:""},cValidate:"",cName:"customercategorycd",cLabel:"Customer Category",cKey:!0,cLabelSize:4,cOrder:1,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"CustomerCategoryCd,Descs"},PI_xxx120827:{cLabel:"",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_revenueshareminpercentage:{cValidate:"max:22",cName:"revenueshareminpercentage",cLabel:"RS. Min. Percentage",cLabelSize:4,cOrder:2,cKey:!1,cType:"decimal",cDecimal:2,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_revenuesharemaxpercentage:{cValidate:"max:22",cName:"revenuesharemaxpercentage",cLabel:"RS. Max. Percentage",cLabelSize:4,cOrder:3,cKey:!1,cType:"decimal",cDecimal:2,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_remarks:{cValidate:"",cName:"remarks",cLabel:"Remarks",cLabelSize:4,cOrder:4,cKey:!1,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder,cProtect:!1}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage2Data},DataRowPage1:function(){return this.$store.getters.GetPage1Data}},methods:{OncustomercategorycdChange:function(e){var a=this;this.$nextTick(function(){a.M_TN_LeasingPolicyRevenueShare.customercategorycd=e.id,a.M_TN_LeasingPolicyRevenueShare.customercategorycdLabel=e.id+"|"+e.label,a.inputStatus}),this.$forceUpdate()},OnrevenuesharemaxpercentageChange:function(e){var a=this;this.$nextTick(function(){0==e?(a.error=!0,a.err1=!0):(a.err1=!1,a.error=!1)}),this.$forceUpdate()},OnremarksChange:function(e){var a=this;this.$nextTick(function(){a.inputStatus}),this.$forceUpdate()},setToolbarButton:function(){},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,a){},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){this.$parent.showForm=!1;var e=this.$store.getters.GetPage1Data;this.M_TN_LeasingPolicyRevenueShare.leasingpolicyyear=e.LeasingPolicyYear,this.propList.initialWhere="SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' And LeasingPolicyYear = '"+e.LeasingPolicyYear+"' ",this.FormToABSList().doGetList("","eb_getList")},M_Insert:function(){var e=this,a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,LeasingPolicyYear:this.M_TN_LeasingPolicyRevenueShare.leasingpolicyyear,CustomerCategoryCd:""==this.M_TN_LeasingPolicyRevenueShare.customercategorycd||null==this.M_TN_LeasingPolicyRevenueShare.customercategorycd?"NULL":this.M_TN_LeasingPolicyRevenueShare.customercategorycd,RevenueShareMinPercentage:""==this.M_TN_LeasingPolicyRevenueShare.revenueshareminpercentage?0:this.replaceAllString(this.M_TN_LeasingPolicyRevenueShare.revenueshareminpercentage,",","","number"),RevenueShareMaxPercentage:""==this.M_TN_LeasingPolicyRevenueShare.revenuesharemaxpercentage?0:this.replaceAllString(this.M_TN_LeasingPolicyRevenueShare.revenuesharemaxpercentage,",","","number"),Remarks:this.M_TN_LeasingPolicyRevenueShare.remarks,UserInput:this.getDataUser().UserId};this.postJSON(this.getUrlInsert(),a).then(function(a){null!=a&&e.$parent.resultInsert(a.Message)})},M_Update:function(){var e=this,a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,LeasingPolicyYear:this.M_TN_LeasingPolicyRevenueShare.leasingpolicyyear,RevenueShareMinPercentage:""==this.M_TN_LeasingPolicyRevenueShare.revenueshareminpercentage?0:this.replaceAllString(this.M_TN_LeasingPolicyRevenueShare.revenueshareminpercentage,",","","number"),RevenueShareMaxPercentage:""==this.M_TN_LeasingPolicyRevenueShare.revenuesharemmaxpercentage?0:this.replaceAllString(this.M_TN_LeasingPolicyRevenueShare.revenuesharemaxpercentage,",","","number"),CustomerCategoryCd:""==this.M_TN_LeasingPolicyRevenueShare.customercategorycd||null==this.M_TN_LeasingPolicyRevenueShare.customercategorycd?"NULL":this.M_TN_LeasingPolicyRevenueShare.customercategorycd,Remarks:this.M_TN_LeasingPolicyRevenueShare.remarks,UserEdit:this.getDataUser().UserId,LastUpdateStamp:this.M_TN_LeasingPolicyRevenueShare.lastupdatestamp};this.postJSON(this.getUrlUpdate(),a).then(function(a){null!=a&&e.$parent.resultUpdate(a.Message)})},M_ClearForm:function(){this.M_TN_LeasingPolicyRevenueShare={leasingpolicyyear:"",customercategorycd:"",descs:"",revenueshareminpercentage:"",revenuesharemaxpercentage:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,subportfoliocd:this.getDataUser().SubPortfolioCd,lastupdatestamp:0,rowid:0}},M_New:function(){var e=this.$store.getters.GetPage1Data;this.M_TN_LeasingPolicyRevenueShare.leasingpolicyyear=e.LeasingPolicyYear},M_Edit:function(){},M_Delete:function(e){var a=this,t=this.FormToABSList().getRowSelected(),r=[];t.forEach(function(e){r.push({SubPortfolioCd:a.getDataUser().SubPortfolioCd,LeasingPolicyYear:e.LeasingPolicyYear,LastUpdateStamp:e.LastUpdateStamp,_Message_:""})});var i={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:r};this.postJSONMulti(this.getUrlNewDeleteMulti(),i).then(function(e){null!=e&&a.$parent.resultDelete()})},getDataBy:function(e){var a=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,leasingpolicyyear:e.LeasingPolicyYear,customercategorycd:e.CustomerCategoryCd};this.postEncode(this.getUrlById(),t).then(function(t){if(null!=t){var r=t.Data[0];a.M_TN_LeasingPolicyRevenueShare={leasingpolicyyear:r.leasingpolicyyear,customercategorycd:r.customercategorycd,descs:r.descs,revenueshareminpercentage:a.isCurrency(r.revenueshareminpercentage,a.decimal),revenuesharemaxpercentage:a.isCurrency(r.revenuesharemaxpercentage,a.decimal),remarks:r.remarks,userinput:r.userinput,useredit:r.useredit,subportfoliocd:r.subportfoliocd,lastupdatestamp:e.LastUpdateStamp,rowid:r.rowid},a.M_TN_LeasingPolicyRevenueShare.customercategorycdLabel=null!=a.M_TN_LeasingPolicyRevenueShare.customercategorycd&&""!=a.M_TN_LeasingPolicyRevenueShare.customercategorycd?r.customercategorycd+a.separator+r.descs:"",a.IEBy.Input=r.userinput,a.IEBy.Edit=r.useredit}})}},created:function(){},beforeMount:function(){},mounted:function(){this.hideSideBarMenu()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),s=n,o=t("2877"),c=Object(o["a"])(s,r,i,!1,null,null,null);c.options.__file="TN_LeasingPolicyRevenueShare.vue";a["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0af10c.6f230c20.js.map