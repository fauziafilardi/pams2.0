(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d230872"],{ed52:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"}),a("b-collapse",{attrs:{id:"collapse1",visible:!0}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[a("b-row",{staticStyle:{"padding-left":"10px"}},[a("b-col",{attrs:{md:"12",id:"col-left"}},[a("b-row",{staticStyle:{"padding-top":"10px","padding-right":"10px","padding-left":"25px","padding-bottom":"10px"}}),a("b-row",[a("b-col",{staticStyle:{"padding-right":"15px !important"},attrs:{md:"4"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control text-field-form",staticStyle:{"margin-left":"20px !important"},attrs:{type:"text",placeholder:"Search...",autofocus:"",autocomplete:"off"},domProps:{value:t.search},on:{keyup:t.onSearchEnter,input:function(e){e.target.composing||(t.search=e.target.value)}}})])],1),a("b-row",{staticStyle:{"padding-top":"10px","padding-right":"10px","padding-left":"20px","padding-bottom":"10px"}},[a("b-col",{attrs:{md:"4"}},[t._v("\n                                        Available User \n                                        "),a("ABSMultiSelect",{staticClass:"selectCustom",attrs:{options:t.leftDataOptions,size:"10"},model:{value:t.leftData,callback:function(e){t.leftData=e},expression:"leftData"}})],1),a("b-col",{staticStyle:{padding:"120px 8px"},attrs:{md:"1"}},[a("b-button",{staticStyle:{width:"50px"},attrs:{size:"sm",variant:"primary"},on:{click:t.moveAllToRight}},[t._v("\n                                            >>\n                                        ")]),a("br"),a("b-button",{staticStyle:{width:"50px","margin-top":"10px"},attrs:{size:"sm",variant:"primary"},on:{click:t.moveToRight}},[t._v("\n                                            >\n                                        ")]),a("br"),a("b-button",{staticStyle:{width:"50px","margin-top":"10px"},attrs:{size:"sm",variant:"primary"},on:{click:t.moveToLeft}},[t._v("\n                                            <\n                                        ")]),a("br"),a("b-button",{staticStyle:{width:"50px","margin-top":"10px"},attrs:{size:"sm",variant:"primary"},on:{click:t.moveAllToLeft}},[t._v("\n                                            <<\n                                        ")])],1),a("b-col",{attrs:{md:"4"}},[t._v("\n                                        Assigned User\n                                        "),a("ABSMultiSelect",{staticClass:"selectCustom",attrs:{options:t.rightDataOptions,size:"10"},model:{value:t.rightData,callback:function(e){t.rightData=e},expression:"rightData"}})],1)],1)],1)],1)],1)],1)],1)],1)])},o=[],s=(a("ac6a"),a("386d"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{FormType:"Form",Module:"TN",subportfolio:"",allDataOptions:[],leftData:[],leftDataOptions:[],rightData:[],rightDataOptions:[],search:""}},watch:{leftDataOptions:function(t,e){this.tempLeftFilter=t}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRowPage1:function(){return this.$store.getters.GetPage1Data}},methods:{onSearchEnter:function(t){13===t.keyCode&&this.getRightColumn(this.search)},getDataList:function(t){var e=this,a={OptionSeq:this.getOptionSeq().OptionSeq,UserId:this.getDataUser().UserId,PortfolioCd:this.getDataUser().PortfolioCd,SubPortfolioCd:this.getDataUser().SubPortfolioCd,FormSequenceNo:this.DataRowPage1.FormSequenceNo,LineNo:3,InitialWhere:t&&""!=t?"userid like '%"+t+"%'":"",ParamView:"'"+this.DataRowPage1.FormSequenceNo+"'",SortField:"userid"};this.postEncode(this.getUrlDataList(),a).then(function(t){if(e.$store.commit("setStatusLoader",!1),null!=t){e.allDataOptions=t.Data,e.leftDataOptions=[];for(var a=!1,i=0;i<e.allDataOptions.length;i++){a=!1;for(var o=0;o<e.rightDataOptions.length;o++)if(e.allDataOptions[i].userid==e.rightDataOptions[o].value){a=!0;break}0==a&&e.leftDataOptions.push({value:e.allDataOptions[i].userid,key:e.allDataOptions[i].userid+" - "+e.allDataOptions[i].username})}e.$forceUpdate()}})},getAllColumn:function(t){var e=this,a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:3,SubPortfolioCd:this.getDataUser().SubPortfolioCd,FormSequenceNo:this.DataRowPage1.FormSequenceNo};this.postEncode(this.getUrlById(),a).then(function(t){if(e.$store.commit("setStatusLoader",!1),null!=t){e.allDataOptions=t.Data,e.leftDataOptions=[];for(var a=!1,i=0;i<e.allDataOptions.length;i++){a=!1;for(var o=0;o<e.rightDataOptions.length;o++)if(e.allDataOptions[i].userid==e.rightDataOptions[o].value){a=!0;break}0==a&&e.leftDataOptions.push({value:e.allDataOptions[i].userid,key:e.allDataOptions[i].userid+" - "+e.allDataOptions[i].username})}e.$forceUpdate()}})},getRightColumn:function(t){var e=this;this.$store.commit("setStatusLoader",!0);var a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:2,FormSequenceNo:this.DataRowPage1.FormSequenceNo};this.postEncode(this.getUrlById(),a).then(function(a){if(null!=a){var i=a.Data;e.rightDataOptions=[];for(var o=0;o<i.length;o++)e.rightDataOptions.push({value:i[o].userid,key:i[o].userid+" - "+i[o].username});e.getDataList(t)}})},moveAllToRight:function(){for(var t=0;t<this.leftDataOptions.length;t++){var e=this.leftDataOptions[t];this.rightDataOptions.push({value:e.value,key:e.key,RowId:e.RowId})}this.leftDataOptions=[],this.$forceUpdate()},moveToRight:function(){for(var t=0;t<this.leftData.length;t++){for(var e,a=-1,i=0;i<this.leftDataOptions.length;i++)this.leftData[t]==this.leftDataOptions[i].value&&(e=this.leftDataOptions[i],a=i);this.rightDataOptions.push({value:e.value,key:e.key,RowId:e.RowId}),this.leftDataOptions.splice(a,1)}this.$forceUpdate()},moveToLeft:function(){for(var t=0;t<this.rightData.length;t++){for(var e,a=-1,i=0;i<this.rightDataOptions.length;i++)this.rightData[t]==this.rightDataOptions[i].value&&(e=this.rightDataOptions[i],a=i);this.leftDataOptions.push({value:e.value,key:e.key,RowId:e.RowId}),this.rightDataOptions.splice(a,1)}this.$forceUpdate()},moveAllToLeft:function(){for(var t=0;t<this.rightDataOptions.length;t++){var e=this.rightDataOptions[t];this.leftDataOptions.push({value:e.value,key:e.key,RowId:e.RowId})}this.rightDataOptions=[],this.$forceUpdate()},setToolbarButton:function(){this.getToolbar().isNew=!0,this.getToolbar().statusFunction[6].disabled=!1,this.getToolbar().statusFunction[7].disabled=!0,this.getToolbar().isByPassCancel=!0},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(t){},M_Refresh:function(){},M_Cancel:function(){this.getRightColumn("")},doDoubleClick:function(){},rowClicked:function(t,e){},rowLink:function(t){this.$refs.modalTest.show()},paramFromParent:function(){var t=this.$store.getters.GetPage1Data;this.DataRow=t,this.getRightColumn("")},M_Save:function(){},M_Insert:function(){for(var t=this,e=[],a=[],i=[],o=0;o<this.leftDataOptions.length;o++)a.push({_Method_:"DELETE",_LineNo_:this.$parent.data.PageOrder,FormSequenceNo:this.DataRowPage1.FormSequenceNo,UserID:this.leftDataOptions[o].value});for(var s=0;s<this.rightDataOptions.length;s++)i.push({_Method_:"SAVE",_LineNo_:this.$parent.data.PageOrder,FormSequenceNo:this.DataRowPage1.FormSequenceNo,UserID:this.rightDataOptions[s].value,UserInput:this.getDataUser().UserId});e.push({A_Looping:a,B_Looping:i});var n={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:e};this.postJSONMulti(this.getUrlProsesDataPostMulti(),n).then(function(e){null!=e&&(t.alertSuccess("Success...!"),t.search="")})},M_Update:function(){},M_ClearForm:function(){},M_New:function(){},M_Edit:function(){},M_Delete:function(t){var e=this,a=this.FormToABSList().getRowSelected(),i=[];a.forEach(function(t){i.push({})});var o={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:i};this.postJSONMulti(this.getUrlNewDeleteMulti(),o).then(function(t){null!=t&&e.$parent.resultDelete()})},getDataBy:function(t){},created:function(){},beforeMount:function(){},mounted:function(){this.hideSideBarMenu()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}}),n=s,r=a("2877"),l=Object(r["a"])(n,i,o,!1,null,null,null);l.options.__file="TN_DeviationChannelStepAuthorizedUser.vue";e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d230872.1fd677e1.js.map