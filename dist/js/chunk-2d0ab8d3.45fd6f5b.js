(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ab8d3"],{1680:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ABSListVuex",{attrs:{prop:t.propList,title:t.data.QueryName},on:{rowClicked:t.$parent.rowClicked,rowDblClicked:t.$parent.doDoubleClick,rowLinkClick:t.$parent.rowLink,pageSize:t.$parent.M_PageSize,pagination:t.$parent.M_Pagination,filter:t.$parent.M_Advance_Filter,headTable:t.$parent.M_Head_Table,refreshColumn:t.$parent.refreshColumn}}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[a("span",{directives:[{name:"show",rawName:"v-show",value:t.IEBy.Input&&t.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[t._v("\n                    Input By : "+t._s(t.IEBy.Input)+" | Edit By : "+t._s(t.IEBy.Edit)+" "),a("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),a("b-collapse",{attrs:{id:"collapse1",visible:!0}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[a("b-form",{attrs:{"data-vv-scope":"FormScope_"+t.PageLevel+"_"+t.TabIndex,"data-vv-value-path":"FormScope_"+t.PageLevel+"_"+t.TabIndex}},[a("b-row",{staticStyle:{"padding-left":"10px"}},[a("b-col",{attrs:{md:"12",id:"col-left"}},[a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_vatprefix",attrs:{prop:t.PI_vatprefix},on:{input:t.OnvatprefixChange},model:{value:t.M_AR_TaxBatchMasterEntry.vatprefix,callback:function(e){t.$set(t.M_AR_TaxBatchMasterEntry,"vatprefix",e)},expression:"M_AR_TaxBatchMasterEntry.vatprefix"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_startingno",attrs:{prop:t.PI_startingno},on:{input:t.OnstartingnoChange},model:{value:t.M_AR_TaxBatchMasterEntry.startingno,callback:function(e){t.$set(t.M_AR_TaxBatchMasterEntry,"startingno",e)},expression:"M_AR_TaxBatchMasterEntry.startingno"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_endingno",attrs:{prop:t.PI_endingno},model:{value:t.M_AR_TaxBatchMasterEntry.endingno,callback:function(e){t.$set(t.M_AR_TaxBatchMasterEntry,"endingno",e)},expression:"M_AR_TaxBatchMasterEntry.endingno"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_digits",attrs:{prop:t.PI_digits},on:{input:t.OndigitsChange},model:{value:t.M_AR_TaxBatchMasterEntry.digits,callback:function(e){t.$set(t.M_AR_TaxBatchMasterEntry,"digits",e)},expression:"M_AR_TaxBatchMasterEntry.digits"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputDateRangeVuex",{ref:"ref_usagefrom",attrs:{prop:t.PI_usagefrom,valueFrom:t.M_AR_TaxBatchMasterEntry.usagefrom,valueTo:t.M_AR_TaxBatchMasterEntry.usageto},on:{from:t.MdtRange_usagefrom,to:t.MdtRange_usageto}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_sampleno",attrs:{prop:t.PI_sampleno},model:{value:t.M_AR_TaxBatchMasterEntry.sampleno,callback:function(e){t.$set(t.M_AR_TaxBatchMasterEntry,"sampleno",e)},expression:"M_AR_TaxBatchMasterEntry.sampleno"}})],1)],1)],1)],1),a("ABSTAnalysis",{attrs:{prop:t.PTAnalysis}})],1)],1)],1)],1)],1)],1)},i=[],n=(a("ac6a"),a("ade3")),s={props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{cInsertKey:"",FormType:"ListProcess",Module:"AR",propList:{initialWhere:"Status ='N' AND  ( BaseOnTaxHandling ='P') OR  ( SubPortfolioCd ='"+this.getDataUser().SubPortfolioCd+"' AND BaseOnTaxHandling ='S')",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_AR_TaxBatchMasterEntry:{batchno:0,subportfoliocd:this.getDataUser().SubPortfolioCd,vatprefix:"",startingno:"0",digits:"0",endingno:"0",usagefrom:"",usageto:"",status:"N",remarks:"",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:0,rowid:0,sampleno:""},PI_vatprefix:{cValidate:"required|max:50",cName:"vatprefix",cLabel:"VAT Prefix",cLabelSize:4,cOrder:1,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_startingno:{cValidate:"required|max:8",cName:"startingno",cLabel:"Starting No",cLabelSize:4,cOrder:2,cKey:!1,cType:"numeric",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_endingno:{cValidate:"required|max:20",cName:"endingno",cLabel:"Ending No",cLabelSize:4,cOrder:3,cKey:!1,cType:"numeric",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_digits:{cValidate:"required|max:60",cName:"digits",cLabel:"No Digit",cLabelSize:4,cOrder:4,cKey:!1,cType:"numeric",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_usagefrom:{cValidate:"",cName:"usagefrom",cLabel:"From Date Usage",cLabelSize:4,cOrder:5,cKey:!1,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_sampleno:Object(n["a"])({cLabel:"Sample No",cLabelSize:4,cValue:"",cKey:!1,cVisible:!0,cProtect:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex},"cVisible",!0),PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage1Data}},methods:{OnvatprefixChange:function(t){var e=this;this.$nextTick(function(){"VIEW"!=e.inputStatus&&e.GetSampleNo(t,e.M_AR_TaxBatchMasterEntry.digits,e.M_AR_TaxBatchMasterEntry.startingno)}),this.$forceUpdate()},OnstartingnoChange:function(t){var e=this;this.$nextTick(function(){"VIEW"!=e.inputStatus&&e.GetSampleNo(e.M_AR_TaxBatchMasterEntry.vatprefix,e.M_AR_TaxBatchMasterEntry.digits,t)}),this.$forceUpdate()},OndigitsChange:function(t){var e=this;this.$nextTick(function(){"VIEW"!=e.inputStatus&&e.GetSampleNo(e.M_AR_TaxBatchMasterEntry.vatprefix,t,e.M_AR_TaxBatchMasterEntry.startingno)}),this.$forceUpdate()},repeatStr:function(t,e){return new Array(e+1).join(t)},Right:function(t,e){if(e<=0)return"";if(e>String(t).length)return t;var a=String(t).length;return String(t).substring(a,a-e)},GetSampleNo:function(t,e,a){if(""!=t){var r="0",i=parseInt(e);console.log(i);var n=this.Right(this.repeatStr(r,i)+parseInt(a),i);this.M_AR_TaxBatchMasterEntry.sampleno=t+n}},setToolbarButton:function(){this.getToolbar().statusFunction[2].disabled=!0},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(t){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(t,e){},rowLink:function(t){this.$refs.modalTest.show()},paramFromParent:function(){},M_Post:function(t){var e=this,a=this.FormToABSList().getRowSelected(),r=[];a.forEach(function(t){r.push({_Message_:"Batch No = "+t.BatchNo,SubPortfolioCd:e.getDataUser().SubPortfolioCd,BatchNo:t.BatchNo,UserEdit:e.getDataUser().UserId,Source:t.Source})});var i={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:r};this.postJSONMulti(this.getUrlPostMulti(),i).then(function(t){null!=t&&e.$parent.resultPost()})},M_Insert:function(){var t=this,e={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,VATPrefix:this.M_AR_TaxBatchMasterEntry.vatprefix,StartingNo:this.M_AR_TaxBatchMasterEntry.startingno,Digits:this.M_AR_TaxBatchMasterEntry.digits,EndingNo:this.M_AR_TaxBatchMasterEntry.endingno,UsageFrom:""==this.M_AR_TaxBatchMasterEntry.usagefrom||null==this.M_AR_TaxBatchMasterEntry.usagefrom?"NULL":this.M_AR_TaxBatchMasterEntry.usagefrom,UsageTo:this.M_AR_TaxBatchMasterEntry.usageto,Status:this.M_AR_TaxBatchMasterEntry.status,UserInput:this.getDataUser().UserId};this.postJSON(this.getUrlInsert(),e).then(function(e){null!=e&&t.$parent.resultInsert(e.Message)})},M_Update:function(){var t=this,e={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,BatchNo:this.M_AR_TaxBatchMasterEntry.batchno,VATPrefix:this.M_AR_TaxBatchMasterEntry.vatprefix,StartingNo:this.M_AR_TaxBatchMasterEntry.startingno,Digits:this.M_AR_TaxBatchMasterEntry.digits,EndingNo:this.M_AR_TaxBatchMasterEntry.endingno,UsageFrom:""==this.M_AR_TaxBatchMasterEntry.usagefrom||null==this.M_AR_TaxBatchMasterEntry.usagefrom?"NULL":this.M_AR_TaxBatchMasterEntry.usagefrom,UsageTo:this.M_AR_TaxBatchMasterEntry.usageto,UserEdit:this.getDataUser().UserId,LastUpdateStamp:this.M_AR_TaxBatchMasterEntry.lastupdatestamp};this.postJSON(this.getUrlUpdate(),e).then(function(e){null!=e&&t.$parent.resultUpdate(e.Message)})},M_ClearForm:function(){this.M_AR_TaxBatchMasterEntry={batchno:0,subportfoliocd:this.getDataUser().SubPortfolioCd,vatprefix:"",startingno:"0",digits:"0",endingno:"0",usagefrom:"",usageto:"",status:"N",remarks:"",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:0,rowid:0,sampleno:""}},M_New:function(){},M_Edit:function(){},M_Delete:function(t){},getDataBy:function(t){var e=this,a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,subportfoliocd:t.SubportfolioCd,batchno:t.BatchNo};this.postEncode(this.getUrlById(),a).then(function(a){if(null!=a){var r=a.Data[0];e.M_AR_TaxBatchMasterEntry={batchno:r.batchno,subportfoliocd:r.subportfoliocd,vatprefix:r.vatprefix,startingno:r.startingno,digits:r.digits,endingno:r.endingno,usagefrom:r.usagefrom,usageto:r.usageto,status:r.status,remarks:r.remarks,userinput:r.userinput,useredit:r.useredit,timeinput:r.timeinput,timeedit:r.timeedit,lastupdatestamp:t.LastUpdateStamp,rowid:r.rowid,sampleno:r.sampleno},e.IEBy.Input=r.userinput,e.IEBy.Edit=r.useredit}})},MdtRange_usagefrom:function(t){this.M_AR_TaxBatchMasterEntry.usagefrom=t},MdtRange_usageto:function(t){this.M_AR_TaxBatchMasterEntry.usageto=t}},beforeCreate:function(){},created:function(){this.$store.commit("setFormType","List"),this.getToolbar().ProcessPS()},beforeMount:function(){},mounted:function(){this.hideSideBarMenu(),this.FormToABSList().doGetList("","eb_getList")},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},o=s,c=a("2877"),u=Object(c["a"])(o,r,i,!1,null,null,null);u.options.__file="AR_TaxBatchMasterEntry.vue";e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0ab8d3.45fd6f5b.js.map