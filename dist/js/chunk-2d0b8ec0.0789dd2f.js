(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b8ec0"],{"316b":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("ABSListVuex",{attrs:{prop:e.propList,title:e.data.QueryName},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table,refreshColumn:e.$parent.refreshColumn}}),i("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[i("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[i("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                    Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),i("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),i("b-collapse",{attrs:{id:"collapse1",visible:!0}},[i("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[i("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[i("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[i("b-row",{staticStyle:{"padding-left":"10px"}},[i("b-col",{attrs:{md:"6",id:"col-left"}},[i("b-row",[i("b-col",{attrs:{md:"12"}},[i("ABSinputTextVuex",{ref:"ref_leasingpolicyyear",attrs:{prop:e.PI_leasingpolicyyear},model:{value:e.M_TN_LeasingPolicy.leasingpolicyyear,callback:function(t){e.$set(e.M_TN_LeasingPolicy,"leasingpolicyyear",t)},expression:"M_TN_LeasingPolicy.leasingpolicyyear"}})],1)],1),i("b-row",[i("b-col",{attrs:{md:"12"}},[i("ABSinputTextVuex",{ref:"ref_promotionlevy",attrs:{prop:e.PI_promotionlevy},model:{value:e.M_TN_LeasingPolicy.promotionlevy,callback:function(t){e.$set(e.M_TN_LeasingPolicy,"promotionlevy",t)},expression:"M_TN_LeasingPolicy.promotionlevy"}})],1)],1),i("b-row",[i("b-col",{attrs:{md:"12"}},[i("ABSinputTextVuex",{ref:"ref_sinkingfund",attrs:{prop:e.PI_sinkingfund},model:{value:e.M_TN_LeasingPolicy.sinkingfund,callback:function(t){e.$set(e.M_TN_LeasingPolicy,"sinkingfund",t)},expression:"M_TN_LeasingPolicy.sinkingfund"}})],1)],1),i("b-row",[i("b-col",{attrs:{md:"12"}},[i("ABSinputTextVuex",{ref:"ref_telephonedeposit",attrs:{prop:e.PI_telephonedeposit},model:{value:e.M_TN_LeasingPolicy.telephonedeposit,callback:function(t){e.$set(e.M_TN_LeasingPolicy,"telephonedeposit",t)},expression:"M_TN_LeasingPolicy.telephonedeposit"}})],1)],1),i("b-row",[i("b-col",{attrs:{md:"12"}},[i("ABSinputTextVuex",{ref:"ref_fitoutdeposit",attrs:{prop:e.PI_fitoutdeposit},model:{value:e.M_TN_LeasingPolicy.fitoutdeposit,callback:function(t){e.$set(e.M_TN_LeasingPolicy,"fitoutdeposit",t)},expression:"M_TN_LeasingPolicy.fitoutdeposit"}})],1)],1)],1),i("b-col",{attrs:{md:"6",id:"col-left"}},[i("b-row",[i("b-col",{attrs:{md:"12"}},[i("ABSinputTextVuex",{ref:"ref_occupancyrate",attrs:{prop:e.PI_occupancyrate},model:{value:e.M_TN_LeasingPolicy.occupancyrate,callback:function(t){e.$set(e.M_TN_LeasingPolicy,"occupancyrate",t)},expression:"M_TN_LeasingPolicy.occupancyrate"}})],1)],1),i("b-row",[i("b-col",{attrs:{md:"12"}},[i("ABSinputTextVuex",{ref:"ref_stepuppercentage",attrs:{prop:e.PI_stepuppercentage},model:{value:e.M_TN_LeasingPolicy.stepuppercentage,callback:function(t){e.$set(e.M_TN_LeasingPolicy,"stepuppercentage",t)},expression:"M_TN_LeasingPolicy.stepuppercentage"}})],1)],1),i("b-row",[i("b-col",{attrs:{md:"12"}},[i("ABSinputTextVuex",{ref:"ref_flatpercentage",attrs:{prop:e.PI_flatpercentage},model:{value:e.M_TN_LeasingPolicy.flatpercentage,callback:function(t){e.$set(e.M_TN_LeasingPolicy,"flatpercentage",t)},expression:"M_TN_LeasingPolicy.flatpercentage"}})],1)],1),i("b-row",[i("b-col",{attrs:{md:"12"}},[i("ABSTextAreaVuex",{ref:"ref_remarks",attrs:{prop:e.PI_remarks},on:{input:e.OnremarksChange},model:{value:e.M_TN_LeasingPolicy.remarks,callback:function(t){e.$set(e.M_TN_LeasingPolicy,"remarks",t)},expression:"M_TN_LeasingPolicy.remarks"}})],1)],1)],1)],1),i("ABSTAnalysis",{attrs:{prop:e.PTAnalysis}})],1)],1)],1)],1)],1)],1)},o=[],n=(i("ac6a"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{cInsertKey:"",FormType:"List",Module:"TN",propList:{initialWhere:"SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"'",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_TN_LeasingPolicy:{leasingpolicyyear:"0",promotionlevy:"0",sinkingfund:"0",stepuppercentage:"0",flatpercentage:"0",telephonedeposit:"0",fitoutdeposit:"0",occupancyrate:"0",remarks:"",userinput:"",useredit:this.getDataUser().UserId,subportfoliocd:this.getDataUser().SubPortfolioCd,lastupdatestamp:0,rowid:0},PI_leasingpolicyyear:{cValidate:"required|max:4",cName:"leasingpolicyyear",cLabel:"Budget Year",cLabelSize:4,cOrder:1,cKey:!0,cType:"numeric",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_occupancyrate:{cValidate:"max:22",cName:"occupancyrate",cLabel:"Occupancy",cLabelSize:4,cOrder:6,cKey:!1,cType:"decimal",cDecimal:2,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_promotionlevy:{cValidate:"max:22",cName:"promotionlevy",cLabel:"Promotion Levy",cLabelSize:4,cOrder:2,cKey:!1,cType:"decimal",cDecimal:2,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_stepuppercentage:{cValidate:"max:22",cName:"stepuppercentage",cLabel:"Yearly Step up",cLabelSize:4,cOrder:7,cKey:!1,cType:"decimal",cDecimal:2,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_sinkingfund:{cValidate:"max:22",cName:"sinkingfund",cLabel:"Sinking Fund",cLabelSize:4,cOrder:3,cKey:!1,cType:"decimal",cDecimal:2,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_flatpercentage:{cValidate:"max:22",cName:"flatpercentage",cLabel:"Yearly Flat",cLabelSize:4,cOrder:8,cKey:!1,cType:"decimal",cDecimal:2,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_telephonedeposit:{cValidate:"max:22",cName:"telephonedeposit",cLabel:"Telephone Deposit",cLabelSize:4,cOrder:4,cKey:!1,cType:"decimal",cDecimal:2,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_remarks:{cValidate:"",cName:"remarks",cLabel:"Remarks",cLabelSize:4,cOrder:9,cKey:!1,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_fitoutdeposit:{cValidate:"max:22",cName:"fitoutdeposit",cLabel:"Fit Out Deposit",cLabelSize:4,cOrder:5,cKey:!1,cType:"decimal",cDecimal:2,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder,cProtect:!1}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage1Data}},methods:{OnremarksChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},setToolbarButton:function(){},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,t){},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){},M_Post:function(e){},M_Insert:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,LeasingPolicyYear:this.M_TN_LeasingPolicy.leasingpolicyyear,PromotionLevy:this.M_TN_LeasingPolicy.promotionlevy?this.replaceAllString(this.M_TN_LeasingPolicy.promotionlevy,",","","number"):0,SinkingFund:this.M_TN_LeasingPolicy.sinkingfund?this.replaceAllString(this.M_TN_LeasingPolicy.sinkingfund,",","","number"):0,StepUpPercentage:this.M_TN_LeasingPolicy.stepuppercentage?this.replaceAllString(this.M_TN_LeasingPolicy.stepuppercentage,",","","number"):0,FlatPercentage:this.M_TN_LeasingPolicy.flatpercentage?this.replaceAllString(this.M_TN_LeasingPolicy.flatpercentage,",","","number"):0,TelephoneDeposit:this.M_TN_LeasingPolicy.telephonedeposit?this.replaceAllString(this.M_TN_LeasingPolicy.telephonedeposit,",","","number"):0,FitOutDeposit:this.M_TN_LeasingPolicy.fitoutdeposit?this.replaceAllString(this.M_TN_LeasingPolicy.fitoutdeposit,",","","number"):0,OccupancyRate:this.M_TN_LeasingPolicy.occupancyrate?this.replaceAllString(this.M_TN_LeasingPolicy.occupancyrate,",","","number"):0,Remarks:this.M_TN_LeasingPolicy.remarks,UserInput:this.getDataUser().UserId};this.postJSON(this.getUrlInsert(),t).then(function(t){null!=t&&e.$parent.resultInsert(t.Message)})},M_Update:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,LeasingPolicyYear:this.M_TN_LeasingPolicy.leasingpolicyyear,PromotionLevy:this.M_TN_LeasingPolicy.promotionlevy?this.replaceAllString(this.M_TN_LeasingPolicy.promotionlevy,",","","number"):0,SinkingFund:this.M_TN_LeasingPolicy.sinkingfund?this.replaceAllString(this.M_TN_LeasingPolicy.sinkingfund,",","","number"):0,StepUpPercentage:this.M_TN_LeasingPolicy.stepuppercentage?this.replaceAllString(this.M_TN_LeasingPolicy.stepuppercentage,",","","number"):0,FlatPercentage:this.M_TN_LeasingPolicy.flatpercentage?this.replaceAllString(this.M_TN_LeasingPolicy.flatpercentage,",","","number"):0,TelephoneDeposit:this.M_TN_LeasingPolicy.telephonedeposit?this.replaceAllString(this.M_TN_LeasingPolicy.telephonedeposit,",","","number"):0,FitOutDeposit:this.M_TN_LeasingPolicy.fitoutdeposit?this.replaceAllString(this.M_TN_LeasingPolicy.fitoutdeposit,",","","number"):0,OccupancyRate:this.M_TN_LeasingPolicy.occupancyrate?this.replaceAllString(this.M_TN_LeasingPolicy.occupancyrate,",","","number"):0,Remarks:this.M_TN_LeasingPolicy.remarks,UserEdit:this.getDataUser().UserId,LastUpdateStamp:this.M_TN_LeasingPolicy.lastupdatestamp};this.postJSON(this.getUrlUpdate(),t).then(function(t){null!=t&&e.$parent.resultUpdate(t.Message)})},M_ClearForm:function(){this.M_TN_LeasingPolicy={leasingpolicyyear:"",promotionlevy:"",sinkingfund:"",stepuppercentage:"",flatpercentage:"",telephonedeposit:"",fitoutdeposit:"",occupancyrate:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,subportfoliocd:this.getDataUser().SubPortfolioCd,lastupdatestamp:0,rowid:0}},M_New:function(){},M_Edit:function(){},M_Delete:function(e){var t=this,i=this.FormToABSList().getRowSelected(),a=[];i.forEach(function(e){a.push({SubPortfolioCd:t.getDataUser().SubPortfolioCd,LeasingPolicyYear:e.LeasingPolicyYear,LastUpdateStamp:e.LastUpdateStamp,_Message_:""})});var o={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:a};this.postJSONMulti(this.getUrlNewDeleteMulti(),o).then(function(e){null!=e&&t.$parent.resultDelete()})},getDataBy:function(e){var t=this,i={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,leasingpolicyyear:e.LeasingPolicyYear};this.postEncode(this.getUrlById(),i).then(function(i){if(null!=i){var a=i.Data[0];t.M_TN_LeasingPolicy={leasingpolicyyear:a.leasingpolicyyear,promotionlevy:t.isCurrency(a.promotionlevy,t.decimal),sinkingfund:t.isCurrency(a.sinkingfund,t.decimal),stepuppercentage:t.isCurrency(a.stepuppercentage,t.decimal),flatpercentage:t.isCurrency(a.flatpercentage,t.decimal),telephonedeposit:t.isCurrency(a.telephonedeposit,t.decimal),fitoutdeposit:t.isCurrency(a.fitoutdeposit,t.decimal),occupancyrate:t.isCurrency(a.occupancyrate,t.decimal),remarks:a.remarks,userinput:a.userinput,useredit:a.useredit,subportfoliocd:a.subportfoliocd,lastupdatestamp:e.LastUpdateStamp,rowid:a.rowid},t.IEBy.Input=a.userinput,t.IEBy.Edit=a.useredit}})}},beforeCreate:function(){},created:function(){this.$store.commit("setFormType","List"),this.getToolbar().ProcessPS()},beforeMount:function(){},mounted:function(){this.hideSideBarMenu(),this.FormToABSList().doGetList("","eb_getList")},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),s=n,r=i("2877"),c=Object(r["a"])(s,a,o,!1,null,null,null);c.options.__file="TN_LeasingPolicy.vue";t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0b8ec0.0789dd2f.js.map