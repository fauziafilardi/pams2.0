(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d222184"],{ccc1:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ABSListVuex",{attrs:{prop:e.propList,title:e.data.QueryName},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[a("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                    Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),a("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),a("b-collapse",{attrs:{id:"collapse1",visible:"true"}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[a("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[a("b-row",{staticStyle:{"padding-left":"10px"}},[a("b-col",{attrs:{md:"12",id:"col-left"}},[a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{attrs:{prop:e.PI_caption},model:{value:e.M_SS_CustomField.caption,callback:function(t){e.$set(e.M_SS_CustomField,"caption",t)},expression:"M_SS_CustomField.caption"}})],1)],1),a("b-col",{attrs:{md:"12",id:"col-left"}}),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelect2",{attrs:{prop:e.PI_datatype,value:e.M_SS_CustomField.datatype},on:{change:e.OndatatypeChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{attrs:{prop:e.PI_length},model:{value:e.M_SS_CustomField.length,callback:function(t){e.$set(e.M_SS_CustomField,"length",t)},expression:"M_SS_CustomField.length"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputRadioButtonVuex",{attrs:{prop:e.PI_mandatory},model:{value:e.M_SS_CustomField.mandatory,callback:function(t){e.$set(e.M_SS_CustomField,"mandatory",t)},expression:"M_SS_CustomField.mandatory"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputRadioButtonVuex",{attrs:{prop:e.PI_lookupstatus},model:{value:e.M_SS_CustomField.lookupstatus,callback:function(t){e.$set(e.M_SS_CustomField,"lookupstatus",t)},expression:"M_SS_CustomField.lookupstatus"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelect2",{attrs:{prop:e.PI_lookuptable,value:e.M_SS_CustomField.lookuptable},on:{change:e.OnlookuptableChange}})],1),a("b-col",{attrs:{md:"6"}},[a("div",[a("label",[a("b",[e._v("Available Field (for Lookup)")])])]),a("label",e._l(e.AvailableColumn,function(t,i){return a("label",[e._v("                                                  \n                                                  "+e._s(t)+"\n                                                  "+e._s(i==e.AvailableColumn.length-1?"":" ,")+"\n                                              ")])}))])],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{attrs:{prop:e.PI_lookupfield},model:{value:e.M_SS_CustomField.lookupfield,callback:function(t){e.$set(e.M_SS_CustomField,"lookupfield",t)},expression:"M_SS_CustomField.lookupfield"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{attrs:{prop:e.PI_lookupcondition},model:{value:e.M_SS_CustomField.lookupcondition,callback:function(t){e.$set(e.M_SS_CustomField,"lookupcondition",t)},expression:"M_SS_CustomField.lookupcondition"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{attrs:{prop:e.PI_defaultdescs},model:{value:e.M_SS_CustomField.defaultdescs,callback:function(t){e.$set(e.M_SS_CustomField,"defaultdescs",t)},expression:"M_SS_CustomField.defaultdescs"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{attrs:{prop:e.PI_defaultnumeric},model:{value:e.M_SS_CustomField.defaultnumeric,callback:function(t){e.$set(e.M_SS_CustomField,"defaultnumeric",t)},expression:"M_SS_CustomField.defaultnumeric"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputDateVuex",{attrs:{prop:e.PI_defaultdate},model:{value:e.M_SS_CustomField.defaultdate,callback:function(t){e.$set(e.M_SS_CustomField,"defaultdate",t)},expression:"M_SS_CustomField.defaultdate"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSTextAreaVuex",{attrs:{prop:e.PI_remarks},model:{value:e.M_SS_CustomField.remarks,callback:function(t){e.$set(e.M_SS_CustomField,"remarks",t)},expression:"M_SS_CustomField.remarks"}})],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)},o=[],s=(a("ac6a"),a("7f7f"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{AvailableColumn:[],ValKey:null,FormType:"List",Module:"SS",propList:{initialWhere:"PageMasterSeq = '"+this.ValKey+"'",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_SS_CustomField:{fieldsequenceno:0,pagemasterseq:0,caption:"",datatype:"D",length:"",mandatory:"Y",lookupstatus:"N",lookuptable:"",lookupfield:"",lookupcondition:"",defaultdescs:"",defaultnumeric:"",defaultdate:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:0,rowid:0},PI_caption:{cValidate:"required",cName:"caption",cLabel:"Caption",cOrder:0,cKey:!1,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_datatype:{dataLookUp:null,cValidate:"",cName:"datatype",cLabel:"Data Type",cKey:!0,cOrder:0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!0,cOption:[{label:"Description",id:"D"},{label:"Numeric",id:"N"},{label:"Datetime",id:"A"},{label:"Text",id:"T"}]},PI_length:{cValidate:"required",cName:"length",cLabel:"Length",cOrder:0,cKey:!1,cType:"numeric",cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_mandatory:{cValidate:"",cName:"mandatory",cId:"rdbmandatory",cRadioOptions:[{text:"Yes",value:"Y"},{text:"No",value:"N"}],cLabel:"Mandatory",cOrder:0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_lookupstatus:{cValidate:"",cName:"lookupstatus",cId:"rdblookupstatus",cRadioOptions:[{text:"Yes",value:"Y"},{text:"No",value:"N"}],cLabel:"Lookup Status",cOrder:0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_lookuptable:{dataLookUp:{LookUpCd:"GetLookupTableName",ColumnDB:"name",InitialWhere:"",ParamWhere:""},cValidate:"required",cName:"lookuptable",cLabel:"Lookup Table",cKey:!1,cStatic:!1,cOrder:0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cMasterUrl:"",cDisplayColumn:""},PI_lookupfield:{cValidate:"required",cName:"lookupfield",cLabel:"Lookup Field",cOrder:0,cKey:!1,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_lookupcondition:{cValidate:"",cName:"lookupcondition",cLabel:"Lookup Condition",cOrder:0,cKey:!1,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_defaultdescs:{cValidate:"",cName:"defaultdescs",cLabel:"Default Descs",cOrder:0,cKey:!1,cVisible:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_defaultnumeric:{cValidate:"",cName:"defaultnumeric",cLabel:"Default Numeric",cOrder:0,cKey:!1,cType:"decimal",cVisible:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_defaultdate:{cValidate:"",cName:"defaultdate",cLabel:"Default Date",cOrder:0,cKey:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cVisible:!1},PI_remarks:{cValidate:"",cName:"remarks",cLabel:"Remarks",cOrder:0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cVisible:!0},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage2Data},DataRowPage1:function(){return this.$store.getters.GetPage1Data}},methods:{OndatatypeChange:function(e){var t=this;this.$nextTick(function(){t.M_SS_CustomField.datatype=e.id,t.M_SS_CustomField.datatypeLabel=e.label,"D"==e.id?(t.PI_defaultdescs.cVisible=!0,t.PI_defaultnumeric.cVisible=!1,t.PI_defaultdate.cVisible=!1):"N"==e.id?(t.PI_defaultdescs.cVisible=!1,t.PI_defaultnumeric.cVisible=!0,t.PI_defaultdate.cVisible=!1):"A"==e.id?(t.PI_defaultdescs.cVisible=!1,t.PI_defaultnumeric.cVisible=!1,t.PI_defaultdate.cVisible=!0):(t.PI_defaultdescs.cVisible=!1,t.PI_defaultnumeric.cVisible=!1,t.PI_defaultdate.cVisible=!1)}),this.$forceUpdate()},OnlookuptableChange:function(e){var t=this;this.$nextTick(function(){t.M_SS_CustomField.lookuptable=e.id,t.M_SS_CustomField.lookuptableLabel=e.label;var a={OptionFunctionCd:"GetColumns",ModuleCd:t.Module,TableName:e.id};t.FnDynamicFunction(a).then(function(e){null!=e&&(t.AvailableColumn=e.map(function(e){return e.name}))})}),this.$forceUpdate()},setToolbarButton:function(){},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Insert:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,PageMasterSeq:this.M_SS_CustomField.pagemasterseq,Caption:this.M_SS_CustomField.caption,DataType:this.M_SS_CustomField.datatype,Length:this.M_SS_CustomField.length,Mandatory:this.M_SS_CustomField.mandatory,LookupStatus:this.M_SS_CustomField.lookupstatus,LookupTable:this.M_SS_CustomField.lookuptable,LookupField:this.M_SS_CustomField.lookupfield,LookupCondition:this.M_SS_CustomField.lookupcondition,DefaultDescs:this.M_SS_CustomField.defaultdescs,DefaultNumeric:""==this.M_SS_CustomField.defaultnumeric?"NULL":this.M_SS_CustomField.defaultnumeric,DefaultDate:""==this.M_SS_CustomField.defaultdate?"NULL":this.M_SS_CustomField.defaultdate,Remarks:this.M_SS_CustomField.remarks,UserInput:this.getDataUser().UserId};this.postJSON(this.getUrlInsert(),t).then(function(t){null!=t&&e.$parent.resultInsert(t.Message)})},M_Update:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,FieldSequenceNo:this.M_SS_CustomField.fieldsequenceno,PageMasterSeq:this.M_SS_CustomField.pagemasterseq,Caption:this.M_SS_CustomField.caption,DataType:this.M_SS_CustomField.datatype,Length:this.M_SS_CustomField.length,Mandatory:this.M_SS_CustomField.mandatory,LookupStatus:this.M_SS_CustomField.lookupstatus,LookupTable:this.M_SS_CustomField.lookuptable,LookupField:this.M_SS_CustomField.lookupfield,LookupCondition:this.M_SS_CustomField.lookupcondition,DefaultDescs:this.M_SS_CustomField.defaultdescs,DefaultNumeric:null==this.M_SS_CustomField.defaultnumeric?"NULL":this.M_SS_CustomField.defaultnumeric,DefaultDate:null==this.M_SS_CustomField.defaultdate?"NULL":this.M_SS_CustomField.defaultdate,Remarks:this.M_SS_CustomField.remarks,UserEdit:this.getDataUser().UserId,LastUpdateStamp:this.M_SS_CustomField.lastupdatestamp};this.postJSON(this.getUrlUpdate(),t).then(function(t){null!=t&&e.$parent.resultUpdate(t.Message)})},M_ClearForm:function(){this.M_SS_CustomField={fieldsequenceno:0,pagemasterseq:0,caption:"",datatype:"D",length:"",mandatory:"Y",lookupstatus:"N",lookuptable:"",lookupfield:"",lookupcondition:"",defaultdescs:"",defaultnumeric:"",defaultdate:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:0,rowid:0}},M_New:function(){var e=this.$store.getters.GetPage1Data;this.M_SS_CustomField.pagemasterseq=e.PageMasterSeq},M_Edit:function(){},M_Delete:function(e){var t=this,a=this.FormToABSList().getRowSelected(),i=[];a.forEach(function(e){i.push({PageMasterSeq:t.DataRowPage1.PageMasterSeq,FieldSequenceNo:e.FieldSequenceNo,LastUpdateStamp:e.LastUpdateStamp,_Message_:""})});var o={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:i};this.postJSONMulti(this.getUrlNewDeleteMulti(),o).then(function(e){null!=e&&t.$parent.resultDelete("Deleting Data Successfully")})},paramFromParent:function(){this.$parent.showForm=!1;var e=this.$store.getters.GetPage1Data;this.M_SS_CustomField.pagemasterseq=e.PageMasterSeq,this.propList.initialWhere=" PageMasterSeq = '"+e.PageMasterSeq+"' ",this.FormToABSList().doGetList("","eb_getList")},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,t){},rowLink:function(e){},getDataBy:function(e){var t=this,a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,fieldsequenceno:e.FieldSequenceNo,pagemasterseq:e.PageMasterSeq};this.postEncode(this.getUrlById(),a).then(function(a){if(null!=a){var i=a.Data[0];t.M_SS_CustomField={fieldsequenceno:i.fieldsequenceno,pagemasterseq:i.pagemasterseq,caption:i.caption,datatype:i.datatype,length:i.length,mandatory:i.mandatory,lookupstatus:i.lookupstatus,lookuptable:i.lookuptable,lookupfield:i.lookupfield,lookupcondition:i.lookupcondition,defaultdescs:i.defaultdescs,defaultnumeric:i.defaultnumeric,defaultdate:i.defaultdate,remarks:i.remarks,userinput:i.userinput,useredit:i.useredit,timeinput:i.timeinput,timeedit:i.timeedit,lastupdatestamp:e.LastUpdateStamp,rowid:i.rowid},t.IEBy.Input=i.userinput,t.IEBy.Edit=i.useredit}})}},created:function(){},beforeMount:function(){},mounted:function(){this.hideSideBarMenu()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),l=s,n=a("2877"),d=Object(n["a"])(l,i,o,!1,null,null,null);d.options.__file="SS_CustomField.vue";t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d222184.52072f60.js.map