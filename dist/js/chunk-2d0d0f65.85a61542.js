(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d0f65"],{"69e1":function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[e("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"}),e("b-collapse",{attrs:{id:"collapse1",visible:!0}},[e("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[e("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[e("b-row",{staticStyle:{"padding-left":"10px"}},[e("b-col",{attrs:{md:"12",id:"col-left"}},[e("b-row",[e("b-col",{staticStyle:{"padding-right":"15px !important"},attrs:{md:"4"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control text-field-form",staticStyle:{"margin-left":"20px !important"},attrs:{type:"text",placeholder:"Search...",autofocus:"",autocomplete:"off",disabled:t.ButtonDisabled},domProps:{value:t.search},on:{keyup:function(a){return"button"in a||!t._k(a.keyCode,"enter",13,a.key,"Enter")?t.onSearchEnter(a):null},input:function(a){a.target.composing||(t.search=a.target.value)}}})])],1),e("b-row",{staticStyle:{"padding-top":"10px","padding-right":"10px","padding-left":"20px","padding-bottom":"10px"}},[e("b-col",{attrs:{md:"4"}},[t._v("\n                                        Available Lot No\n                                        "),e("ABSMultiSelect",{staticClass:"selectCustom",attrs:{options:t.leftDataOptions,size:"10"},model:{value:t.leftData,callback:function(a){t.leftData=a},expression:"leftData"}})],1),e("b-col",{staticStyle:{padding:"120px 8px"},attrs:{md:"1"}},[e("b-button",{staticStyle:{width:"50px"},attrs:{id:"satu",disabled:t.ButtonDisabled,size:"sm",variant:"primary"},on:{click:t.moveAllToRight}},[t._v("\n                                            >>\n                                        ")]),e("br"),e("b-button",{staticStyle:{width:"50px","margin-top":"10px"},attrs:{disabled:t.ButtonDisabled,size:"sm",variant:"primary"},on:{click:t.moveToRight}},[t._v("\n                                            >\n                                        ")]),e("br"),e("b-button",{staticStyle:{width:"50px","margin-top":"10px"},attrs:{disabled:t.ButtonDisabled,size:"sm",variant:"primary"},on:{click:t.moveToLeft}},[t._v("\n                                            <\n                                        ")]),e("br"),e("b-button",{staticStyle:{width:"50px","margin-top":"10px"},attrs:{disabled:t.ButtonDisabled,size:"sm",variant:"primary"},on:{click:t.moveAllToLeft}},[t._v("\n                                            <<\n                                        ")])],1),e("b-col",{attrs:{md:"4"}},[t._v("\n                                        Assigned Lot No\n                                        "),e("ABSMultiSelect",{staticClass:"selectCustom",attrs:{options:t.rightDataOptions,size:"10"},model:{value:t.rightData,callback:function(a){t.rightData=a},expression:"rightData"}})],1)],1)],1)],1)],1)],1)],1)],1)])},i=[],n=(e("386d"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{FormType:"Form",Module:"TN",subportfolio:"",allDataOptions:[],leftData:[],leftDataOptions:[],rightData:[],rightDataOptions:[],search:"",DataRow:[]}},watch:{leftDataOptions:function(t,a){this.tempLeftFilter=t}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRowPage1:function(){return this.$store.getters.GetPage1Data},ButtonDisabled:function(){return"EDIT"==this.inputStatus}},methods:{onSearchEnter:function(){this.ButtonDisabled||this.getRightColumn(this.search)},getDataList:function(t){var a=this,e={OptionSeq:this.getOptionSeq().OptionSeq,UserId:this.getDataUser().UserId,PortfolioCd:this.getDataUser().PortfolioCd,SubPortfolioCd:this.getDataUser().SubPortfolioCd,EventNo:this.DataRowPage1.EventNo,LineNo:1,InitialWhere:t&&""!=t?"(LotNo like '%"+t+"%')":"",ParamView:"'"+this.getDataUser().SubPortfolioCd+"','"+this.DataRowPage1.EventNo+"'",SortField:"LotNo"};this.postEncode(this.getUrlDataList(),e).then(function(t){if(a.$store.commit("setStatusLoader",!1),null!=t){a.allDataOptions=t.Data,a.leftDataOptions=[];for(var e=!1,o=0;o<a.allDataOptions.length;o++){e=!1;for(var i=0;i<a.rightDataOptions.length;i++)if(a.allDataOptions[o].LotNo==a.rightDataOptions[i].value){e=!0;break}0==e&&a.leftDataOptions.push({value:a.allDataOptions[o].LotNo,key:a.allDataOptions[o].LotNo})}a.$forceUpdate()}})},getAllColumn:function(t){var a=this,e={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:1,SubPortfolioCd:this.getDataUser().SubPortfolioCd,EventNo:this.DataRowPage1.EventNo};this.postEncode(this.getUrlById(),e).then(function(t){if(a.$store.commit("setStatusLoader",!1),null!=t){a.allDataOptions=t.Data,a.leftDataOptions=[];for(var e=!1,o=0;o<a.allDataOptions.length;o++){e=!1;for(var i=0;i<a.rightDataOptions.length;i++)if(a.allDataOptions[o].lotno==a.rightDataOptions[i].value){e=!0;break}0==e&&a.leftDataOptions.push({value:a.allDataOptions[o].lotno,key:a.allDataOptions[o].lotno})}a.$forceUpdate()}})},getRightColumn:function(t){var a=this;this.$store.commit("setStatusLoader",!0);var e={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:2,SubPortfolioCd:this.getDataUser().SubPortfolioCd,EventNo:this.DataRowPage1.EventNo};this.postEncode(this.getUrlById(),e).then(function(e){if(null!=e){var o=e.Data;a.rightDataOptions=[];for(var i=0;i<o.length;i++)a.rightDataOptions.push({value:o[i].lotno,key:o[i].lotno,RowId:o[i].rowid});a.getAllColumn(t)}})},moveAllToRight:function(){for(var t=0;t<this.leftDataOptions.length;t++){var a=this.leftDataOptions[t];this.rightDataOptions.push({value:a.value,key:a.key,RowId:a.RowId})}this.leftDataOptions=[],this.$forceUpdate()},moveToRight:function(){for(var t=0;t<this.leftData.length;t++){for(var a,e=-1,o=0;o<this.leftDataOptions.length;o++)this.leftData[t]==this.leftDataOptions[o].value&&(a=this.leftDataOptions[o],e=o);this.rightDataOptions.push({value:a.value,key:a.key,RowId:a.RowId}),this.leftDataOptions.splice(e,1)}this.$forceUpdate()},moveToLeft:function(){for(var t=0;t<this.rightData.length;t++){for(var a,e=-1,o=0;o<this.rightDataOptions.length;o++)this.rightData[t]==this.rightDataOptions[o].value&&(a=this.rightDataOptions[o],e=o);this.leftDataOptions.push({value:a.value,key:a.key,RowId:a.RowId}),this.rightDataOptions.splice(e,1)}this.$forceUpdate()},moveAllToLeft:function(){for(var t=0;t<this.rightDataOptions.length;t++){var a=this.rightDataOptions[t];this.leftDataOptions.push({value:a.value,key:a.key,RowId:a.RowId})}this.rightDataOptions=[],this.$forceUpdate()},setToolbarButton:function(){this.getToolbar().isNew=!0,this.getToolbar().statusFunction[6].disabled=!1,this.getToolbar().statusFunction[7].disabled=!0,this.getToolbar().isByPassCancel=!0},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(t){},M_Post:function(){},M_Refresh:function(){},doDoubleClick:function(){},SaveData:function(){},UpdateData:function(){},m_ClearForm:function(){},M_New:function(){},M_Edit:function(){},M_Delete:function(){},M_Insert:function(){for(var t=this,a=[],e=[],o=[],i=0;i<this.leftDataOptions.length;i++)e.push({_Method_:"DELETE",_LineNo_:this.$parent.data.PageOrder,SubportfolioCd:this.getDataUser().SubPortfolioCd,LotNo:this.leftDataOptions[i].value,EventNo:this.DataRow.EventNo});for(var n=0;n<this.rightDataOptions.length;n++)o.push({_Method_:"SAVE",_LineNo_:this.$parent.data.PageOrder,SubportfolioCd:this.getDataUser().SubPortfolioCd,LotNo:this.rightDataOptions[n].value,EventNo:this.DataRow.EventNo,UserInput:this.getDataUser().UserId});a.push({A_Looping:e,B_Looping:o});var s={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:a};this.postJSONMulti(this.getUrlProsesDataPostMulti(),s).then(function(a){null!=a&&t.alertSuccess("Success...!")})},paramFromParent:function(){var t=this.$store.getters.GetPage1Data;this.DataRow=t,this.getRightColumn("")},M_Cancel:function(){this.getRightColumn("")},rowClicked:function(t,a){},rowLink:function(t){},getDataBy:function(t){}},beforeCreate:function(){},created:function(){},beforeMount:function(){},mounted:function(){this.hideSideBarMenu()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),s=n,l=e("2877"),r=Object(l["a"])(s,o,i,!1,null,null,null);r.options.__file="TN_EventLot.vue";a["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d0d0f65.85a61542.js.map