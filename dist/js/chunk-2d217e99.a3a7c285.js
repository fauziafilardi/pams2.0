(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d217e99"],{c96c:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ABSListVuex",{attrs:{prop:e.propList,title:e.data.QueryName},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table,refreshColumn:e.$parent.refreshColumn}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[a("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                    Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),a("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),a("b-collapse",{attrs:{id:"collapse1",visible:!0}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[a("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[a("b-row",{staticStyle:{"padding-left":"10px"}},[a("b-col",{attrs:{md:"12",id:"col-left"}},[a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSCompute",{ref:"ref_deviationprocesstype",attrs:{prop:e.PI_deviationprocesstype},model:{value:e.M_TN_CLDeviationCustomLookupFieldH.deviationprocesstype,callback:function(t){e.$set(e.M_TN_CLDeviationCustomLookupFieldH,"deviationprocesstype",t)},expression:"M_TN_CLDeviationCustomLookupFieldH.deviationprocesstype"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_descs",attrs:{prop:e.PI_descs},model:{value:e.M_TN_CLDeviationCustomLookupFieldH.descs,callback:function(t){e.$set(e.M_TN_CLDeviationCustomLookupFieldH,"descs",t)},expression:"M_TN_CLDeviationCustomLookupFieldH.descs"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelect2",{ref:"ref_mandatory",attrs:{prop:e.PI_mandatory,value:e.M_TN_CLDeviationCustomLookupFieldH.mandatory,label:e.M_TN_CLDeviationCustomLookupFieldH.mandatoryLabel},on:{change:e.OnmandatoryChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_caption",attrs:{prop:e.PI_caption},model:{value:e.M_TN_CLDeviationCustomLookupFieldH.caption,callback:function(t){e.$set(e.M_TN_CLDeviationCustomLookupFieldH,"caption",t)},expression:"M_TN_CLDeviationCustomLookupFieldH.caption"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_fieldsequenceno",attrs:{prop:e.PI_fieldsequenceno},model:{value:e.M_TN_CLDeviationCustomLookupFieldH.fieldsequenceno,callback:function(t){e.$set(e.M_TN_CLDeviationCustomLookupFieldH,"fieldsequenceno",t)},expression:"M_TN_CLDeviationCustomLookupFieldH.fieldsequenceno"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelect2",{ref:"ref_datatype",attrs:{prop:e.PI_datatype,value:e.M_TN_CLDeviationCustomLookupFieldH.datatype,label:e.M_TN_CLDeviationCustomLookupFieldH.datatypeLabel},on:{change:e.OndatatypeChange}})],1)],1)],1)],1),a("ABSTAnalysis",{attrs:{prop:e.PTAnalysis}})],1)],1)],1)],1)],1)],1)},i=[],n=(a("ac6a"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{cInsertKey:"",FormType:"List",Module:"TN",propList:{initialWhere:"LookupStatus = 'Y' And DeviationProcessType IN ('4','5')And UPPER(LookupTable) = 'WF_FORMCONTROLFIELDLOOKUP' ",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_TN_CLDeviationCustomLookupFieldH:{descs:"",caption:"",mandatory:"",deviationprocesstype:"",datatype:"",userinput:"",useredit:this.getDataUser().UserId,fieldsequenceno:"0",formsequenceno:0,lastupdatestamp:0,rowid:0},PI_deviationprocesstype:{cLabel:"Process Type",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_descs:{cValidate:"",cName:"descs",cLabel:"Description",cLabelSize:4,cOrder:0,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_mandatory:{dataLookUp:null,cValidate:"",cName:"mandatory",cLabel:"Mandatory",cLabelSize:4,cOrder:0,cKey:!1,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!0,cOption:[{label:"Yes",id:"Y"},{label:"No",id:"N"}],cMasterUrl:"",cDisplayColumn:""},PI_caption:{cValidate:"",cName:"caption",cLabel:"Caption",cLabelSize:4,cOrder:0,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_fieldsequenceno:{cValidate:"",cName:"fieldsequenceno",cLabel:"Field Sequence No",cLabelSize:4,cOrder:0,cKey:!0,cType:"numeric",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_datatype:{dataLookUp:null,cValidate:"",cName:"datatype",cLabel:"Data Type",cLabelSize:4,cOrder:0,cKey:!1,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!0,cOption:[{label:"Description",id:"D"},{label:"Numeric",id:"N"},{label:"Datetime",id:"A"},{label:"Text",id:"T"}],cMasterUrl:"",cDisplayColumn:""},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder,cProtect:!1}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage1Data}},methods:{OnmandatoryChange:function(e){this.$forceUpdate()},OndatatypeChange:function(e){this.$forceUpdate()},setToolbarButton:function(){this.getToolbar().statusFunction[0].disabled=!0,this.getToolbar().statusFunction[1].disabled=!0,this.getToolbar().statusFunction[2].disabled=!0},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,t){},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){},M_Post:function(e){},M_Insert:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder};this.postJSON(this.getUrlInsert(),t).then(function(t){null!=t&&e.$parent.resultInsert(t.Message)})},M_Update:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder};this.postJSON(this.getUrlUpdate(),t).then(function(t){null!=t&&e.$parent.resultUpdate(t.Message)})},M_ClearForm:function(){this.M_TN_CLDeviationCustomLookupFieldH={descs:"",caption:"",mandatory:"",deviationprocesstype:"",datatype:"",userinput:"",useredit:this.getDataUser().UserId,fieldsequenceno:"0",formsequenceno:0,lastupdatestamp:0,rowid:0}},M_New:function(){},M_Edit:function(){},M_Delete:function(e){var t=this,a=this.FormToABSList().getRowSelected(),o=[];a.forEach(function(e){o.push({})});var i={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:o};this.postJSONMulti(this.getUrlNewDeleteMulti(),i).then(function(e){null!=e&&t.$parent.resultPost()})},getDataBy:function(e){var t=this,a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,fieldsequenceno:e.FieldSequenceNo,formsequenceno:e.FormSequenceNo};this.postEncode(this.getUrlById(),a).then(function(a){if(null!=a){var o=a.Data[0];t.M_TN_CLDeviationCustomLookupFieldH={descs:o.descs,caption:o.caption,mandatory:o.mandatory,deviationprocesstype:o.deviationprocesstype,datatype:o.datatype,userinput:o.userinput,useredit:o.useredit,fieldsequenceno:e.FieldSequenceNo,formsequenceno:o.formsequenceno,lastupdatestamp:e.LastUpdateStamp,rowid:o.rowid},t.IEBy.Input=o.userinput,t.IEBy.Edit=o.useredit}})}},beforeCreate:function(){},created:function(){this.$store.commit("setFormType","List"),this.getToolbar().ProcessPS()},beforeMount:function(){},mounted:function(){this.hideSideBarMenu(),this.FormToABSList().doGetList("","eb_getList")},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),s=n,r=a("2877"),c=Object(r["a"])(s,o,i,!1,null,null,null);c.options.__file="TN_CLDeviationCustomLookupFieldH.vue";t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d217e99.a3a7c285.js.map