(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-746934e7"],{"36bdb":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ABSListVuex",{attrs:{prop:e.propList,title:e.data.QueryName},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table,refreshColumn:e.$parent.refreshColumn}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[a("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                    Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),a("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),a("b-collapse",{attrs:{id:"collapse1",visible:!0}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[a("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[a("b-row",{staticStyle:{"padding-left":"10px"}},[a("b-col",{attrs:{md:"12",id:"col-left"}},[a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_customercategorycd",attrs:{prop:e.PI_customercategorycd,value:e.M_TN_LeasingPolicyServiceCharge.customercategorycd,label:e.M_TN_LeasingPolicyServiceCharge.customercategorycdLabel},on:{change:e.OncustomercategorycdChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_servicecharge",attrs:{prop:e.PI_servicecharge},model:{value:e.M_TN_LeasingPolicyServiceCharge.servicecharge,callback:function(t){e.$set(e.M_TN_LeasingPolicyServiceCharge,"servicecharge",t)},expression:"M_TN_LeasingPolicyServiceCharge.servicecharge"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_directterminationsc",attrs:{prop:e.PI_directterminationsc},model:{value:e.M_TN_LeasingPolicyServiceCharge.directterminationsc,callback:function(t){e.$set(e.M_TN_LeasingPolicyServiceCharge,"directterminationsc",t)},expression:"M_TN_LeasingPolicyServiceCharge.directterminationsc"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_replacementterminationsc",attrs:{prop:e.PI_replacementterminationsc},model:{value:e.M_TN_LeasingPolicyServiceCharge.replacementterminationsc,callback:function(t){e.$set(e.M_TN_LeasingPolicyServiceCharge,"replacementterminationsc",t)},expression:"M_TN_LeasingPolicyServiceCharge.replacementterminationsc"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSTextAreaVuex",{ref:"ref_remarks",attrs:{prop:e.PI_remarks},on:{input:e.OnremarksChange},model:{value:e.M_TN_LeasingPolicyServiceCharge.remarks,callback:function(t){e.$set(e.M_TN_LeasingPolicyServiceCharge,"remarks",t)},expression:"M_TN_LeasingPolicyServiceCharge.remarks"}})],1)],1)],1)],1),a("ABSTAnalysis",{attrs:{prop:e.PTAnalysis}})],1)],1)],1)],1)],1)],1)},r=[],c=(a("ac6a"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{ValKey:null,FormType:"List",Module:"TN",propList:{initialWhere:"SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' And LeasingPolicyYear = '"+this.ValKey+"'",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_TN_LeasingPolicyServiceCharge:{leasingpolicyyear:0,customercategorycd:"",descs:"",servicecharge:"",directterminationsc:"",replacementterminationsc:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,subportfoliocd:this.getDataUser().SubPortfolioCd,lastupdatestamp:0,rowid:0},PI_customercategorycd:{dataLookUp:{LookUpCd:"GetLookupTNCustomerCategory",ColumnDB:"CustomerCategoryCd",InitialWhere:"SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' and LeasingStatus = 'Y'",ParamWhere:""},cValidate:"",cName:"customercategorycd",cLabel:"Customer Category",cKey:!0,cLabelSize:4,cOrder:1,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"CustomerCategoryCd,Descs"},PI_xxx120807:{cLabel:"",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_servicecharge:{cValidate:"max:22",cName:"servicecharge",cLabel:"Service Charge",cLabelSize:4,cOrder:2,cKey:!1,cType:"decimal",cDecimal:2,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_directterminationsc:{cValidate:"max:22",cName:"directterminationsc",cLabel:"Direct Termination SC.",cLabelSize:4,cOrder:3,cKey:!1,cType:"numeric",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_replacementterminationsc:{cValidate:"max:22",cName:"replacementterminationsc",cLabel:"Replacement Termination SC.",cLabelSize:4,cOrder:4,cKey:!1,cType:"numeric",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_remarks:{cValidate:"",cName:"remarks",cLabel:"Remarks",cLabelSize:4,cOrder:5,cKey:!1,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder,cProtect:!1}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage2Data},DataRowPage1:function(){return this.$store.getters.GetPage1Data}},methods:{OncustomercategorycdChange:function(e){var t=this;this.$nextTick(function(){t.M_TN_LeasingPolicyServiceCharge.customercategorycd=e.id,t.M_TN_LeasingPolicyServiceCharge.customercategorycdLabel=e.label,t.inputStatus}),this.$forceUpdate()},OnremarksChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},setToolbarButton:function(){},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,t){},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){this.$parent.showForm=!1;var e=this.$store.getters.GetPage1Data;this.M_TN_LeasingPolicyServiceCharge.leasingpolicyyear=e.LeasingPolicyYear,this.propList.initialWhere="SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' And LeasingPolicyYear = '"+e.LeasingPolicyYear+"' ",this.FormToABSList().doGetList("","eb_getList")},M_Insert:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,LeasingPolicyYear:this.M_TN_LeasingPolicyServiceCharge.leasingpolicyyear,CustomerCategoryCd:""==this.M_TN_LeasingPolicyServiceCharge.customercategorycd||null==this.M_TN_LeasingPolicyServiceCharge.customercategorycd?"NULL":this.M_TN_LeasingPolicyServiceCharge.customercategorycd,ServiceCharge:this.M_TN_LeasingPolicyServiceCharge.servicecharge?this.replaceAllString(this.M_TN_LeasingPolicyServiceCharge.servicecharge,",","","number"):0,DirectTerminationSC:this.M_TN_LeasingPolicyServiceCharge.directterminationsc,ReplacementTerminationSC:this.M_TN_LeasingPolicyServiceCharge.replacementterminationsc,Remarks:this.M_TN_LeasingPolicyServiceCharge.remarks,UserInput:this.getDataUser().UserId};this.postJSON(this.getUrlInsert(),t).then(function(t){null!=t&&e.$parent.resultInsert(t.Message)})},M_Update:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,LeasingPolicyYear:this.M_TN_LeasingPolicyServiceCharge.leasingpolicyyear,ServiceCharge:this.M_TN_LeasingPolicyServiceCharge.servicecharge?this.replaceAllString(this.M_TN_LeasingPolicyServiceCharge.servicecharge,",","","number"):0,DirectTerminationSC:this.M_TN_LeasingPolicyServiceCharge.directterminationsc,ReplacementTerminationSC:this.M_TN_LeasingPolicyServiceCharge.replacementterminationsc,CustomerCategoryCd:""==this.M_TN_LeasingPolicyServiceCharge.customercategorycd||null==this.M_TN_LeasingPolicyServiceCharge.customercategorycd?"NULL":this.M_TN_LeasingPolicyServiceCharge.customercategorycd,Remarks:this.M_TN_LeasingPolicyServiceCharge.remarks,UserEdit:this.getDataUser().UserId,LastUpdateStamp:this.M_TN_LeasingPolicyServiceCharge.lastupdatestamp};this.postJSON(this.getUrlUpdate(),t).then(function(t){null!=t&&e.$parent.resultUpdate(t.Message)})},M_ClearForm:function(){this.M_TN_LeasingPolicyServiceCharge={leasingpolicyyear:0,customercategorycd:"",descs:"",servicecharge:"",directterminationsc:"",replacementterminationsc:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,subportfoliocd:this.getDataUser().SubPortfolioCd,lastupdatestamp:0,rowid:0}},M_New:function(){var e=this.$store.getters.GetPage1Data;this.M_TN_LeasingPolicyServiceCharge.leasingpolicyyear=e.LeasingPolicyYear},M_Edit:function(){},M_Delete:function(e){var t=this,a=this.FormToABSList().getRowSelected(),i=[];a.forEach(function(e){i.push({SubPortfolioCd:t.getDataUser().SubPortfolioCd,LeasingPolicyYear:e.LeasingPolicyYear,LastUpdateStamp:e.LastUpdateStamp,_Message_:""})});var r={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:i};this.postJSONMulti(this.getUrlNewDeleteMulti(),r).then(function(e){null!=e&&t.$parent.resultDelete()})},getDataBy:function(e){var t=this,a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,leasingpolicyyear:e.LeasingPolicyYear,customercategorycd:e.CustomerCategoryCd};this.postEncode(this.getUrlById(),a).then(function(a){if(null!=a){var i=a.Data[0];t.M_TN_LeasingPolicyServiceCharge={leasingpolicyyear:i.leasingpolicyyear,customercategorycd:i.customercategorycd,descs:i.descs,servicecharge:t.isCurrency(i.servicecharge,t.decimal),directterminationsc:i.directterminationsc,replacementterminationsc:i.replacementterminationsc,remarks:i.remarks,userinput:i.userinput,useredit:i.useredit,subportfoliocd:i.subportfoliocd,lastupdatestamp:e.LastUpdateStamp,rowid:i.rowid},t.M_TN_LeasingPolicyServiceCharge.customercategorycdLabel=null!=t.M_TN_LeasingPolicyServiceCharge.customercategorycd&&""!=t.M_TN_LeasingPolicyServiceCharge.customercategorycd?i.customercategorycd+t.separator+i.descs:"",t.IEBy.Input=i.userinput,t.IEBy.Edit=i.useredit}})}},created:function(){},beforeMount:function(){},mounted:function(){this.hideSideBarMenu()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),s=c,o=a("2877"),n=Object(o["a"])(s,i,r,!1,null,null,null);n.options.__file="TN_LeasingPolicyServiceCharge.vue";t["default"]=n.exports}}]);
//# sourceMappingURL=chunk-746934e7.38f81515.js.map