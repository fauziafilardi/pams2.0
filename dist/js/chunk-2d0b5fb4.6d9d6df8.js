(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b5fb4"],{"1ae3":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ABSListVuex",{attrs:{prop:t.propList,title:t.data.QueryName},on:{rowClicked:t.$parent.rowClicked,rowDblClicked:t.$parent.doDoubleClick,rowLinkClick:t.$parent.rowLink,pageSize:t.$parent.M_PageSize,pagination:t.$parent.M_Pagination,filter:t.$parent.M_Advance_Filter,headTable:t.$parent.M_Head_Table,refreshColumn:t.$parent.refreshColumn}}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[a("span",{directives:[{name:"show",rawName:"v-show",value:t.IEBy.Input&&t.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[t._v("\n                    Input By : "+t._s(t.IEBy.Input)+" | Edit By : "+t._s(t.IEBy.Edit)+" "),a("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),a("b-collapse",{attrs:{id:"collapse1",visible:!0}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[a("b-row",{staticStyle:{"padding-left":"10px"}},[a("b-col",{attrs:{md:"12",id:"col-left"}},[a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSCompute",{ref:"ref_contactid",attrs:{prop:t.PI_contactid},model:{value:t.M_CM_ContactPersonnelGreeting.contactid,callback:function(e){t.$set(t.M_CM_ContactPersonnelGreeting,"contactid",e)},expression:"M_CM_ContactPersonnelGreeting.contactid"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSCompute",{ref:"ref_contactpersonnelid",attrs:{prop:t.PI_contactpersonnelid},model:{value:t.M_CM_ContactPersonnelGreeting.contactpersonnelid,callback:function(e){t.$set(t.M_CM_ContactPersonnelGreeting,"contactpersonnelid",e)},expression:"M_CM_ContactPersonnelGreeting.contactpersonnelid"}})],1)],1)],1),a("b-col",{attrs:{md:"12",id:"col-left"}},[a("b-row",{staticStyle:{"padding-left":"10px"}},[a("b-col",{attrs:{md:"12",id:"col-left"}},[a("b-row",{staticStyle:{"padding-left":"10px"}},[a("b-col",{attrs:{md:"12",id:"col-left"}},[a("b-row",{staticStyle:{"padding-top":"10px","padding-right":"10px","padding-left":"25px","padding-bottom":"10px"}}),a("b-row",[a("b-col",{staticStyle:{"padding-right":"15px !important"},attrs:{md:"4"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],ref:"ref_search",staticClass:"form-control text-field-form",staticStyle:{"margin-left":"20px !important"},attrs:{type:"text",placeholder:"Search...",autofocus:"",autocomplete:"off",disabled:t.ButtonDisabled},domProps:{value:t.search},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.onSearchEnter(e):null},input:function(e){e.target.composing||(t.search=e.target.value)}}})])],1),a("b-row",{staticStyle:{"padding-top":"10px","padding-right":"10px","padding-left":"20px","padding-bottom":"10px"}},[a("b-col",{attrs:{md:"4"}},[t._v("\n                                        All Greeting\n                                        "),a("ABSMultiSelect",{staticClass:"selectCustom",attrs:{options:t.leftDataOptions,size:"10"},model:{value:t.leftData,callback:function(e){t.leftData=e},expression:"leftData"}})],1),a("b-col",{staticStyle:{padding:"120px 8px"},attrs:{md:"1"}},[a("b-button",{staticStyle:{width:"50px"},attrs:{id:"satu",disabled:t.ButtonDisabled,size:"sm",variant:"primary"},on:{click:t.moveAllToRight}},[t._v("\n                                            >>\n                                        ")]),a("br"),a("b-button",{staticStyle:{width:"50px","margin-top":"10px"},attrs:{disabled:t.ButtonDisabled,size:"sm",variant:"primary"},on:{click:t.moveToRight}},[t._v("\n                                            >\n                                        ")]),a("br"),a("b-button",{staticStyle:{width:"50px","margin-top":"10px"},attrs:{disabled:t.ButtonDisabled,size:"sm",variant:"primary"},on:{click:t.moveToLeft}},[t._v("\n                                            <\n                                        ")]),a("br"),a("b-button",{staticStyle:{width:"50px","margin-top":"10px"},attrs:{disabled:t.ButtonDisabled,size:"sm",variant:"primary"},on:{click:t.moveAllToLeft}},[t._v("\n                                            <<\n                                        ")])],1),a("b-col",{attrs:{md:"4"}},[t._v("\n                                        Selected Greeting\n                                        "),a("ABSMultiSelect",{staticClass:"selectCustom",attrs:{options:t.rightDataOptions,size:"10"},model:{value:t.rightData,callback:function(e){t.rightData=e},expression:"rightData"}})],1)],1)],1)],1)],1)],1)],1)],1),a("ABSTAnalysis",{attrs:{prop:t.PTAnalysis}})],1)],1)],1)],1)],1)},i=[],o=(a("7f7f"),a("ac6a"),a("386d"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{cInsertKey:"",FormType:"List",Module:"CM",subportfolio:"",allDataOptions:[],leftData:[],leftDataOptions:[],rightData:[],rightDataOptions:[],search:"",DataRow:[],propList:{initialWhere:"",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},rowSelected:"",M_CM_ContactPersonnelGreeting:{contactid:"",fullname:"",contactpersonnelid:"",name:"",userinput:"",useredit:this.getDataUser().UserId,lastupdatestamp:0,rowid:0},PI_contactid:{cLabel:"Contact ID",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PI_contactpersonnelid:{cLabel:"Contact Personnel ID",cLabelSize:4,cValue:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cVisible:!0},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder,cProtect:!1}}},watch:{leftDataOptions:function(t,e){this.tempLeftFilter=t}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage1Data},GetDataBy1:function(){return this.$store.getters.GetPage1GetDataBy},ButtonDisabled:function(){return"EDIT"!=this.inputStatus}},methods:{onSearchEnter:function(){this.ButtonDisabled||this.getRightColumn(this.search)},getDataList:function(t){var e=this,a={OptionSeq:this.getOptionSeq().OptionSeq,UserId:this.getDataUser().UserId,PortfolioCd:this.getDataUser().PortfolioCd,SubPortfolioCd:this.getDataUser().SubPortfolioCd,LineNo:0,InitialWhere:"GreetingCd like '%"+t+"%' OR Descs like '%"+t+"%'",ParamView:"",SortField:"GreetingCd"};this.postEncode(this.getUrlDataList(),a).then(function(t){if(e.$store.commit("setStatusLoader",!1),null!=t){e.allDataOptions=t.Data,e.leftDataOptions=[];for(var a=!1,n=0;n<e.allDataOptions.length;n++){a=!1;for(var i=0;i<e.rightDataOptions.length;i++)if(e.allDataOptions[n].greetingcd==e.rightDataOptions[i].value){a=!0;break}0==a&&e.leftDataOptions.push({value:e.allDataOptions[n].greetingcd,key:e.allDataOptions[n].descs})}e.$forceUpdate()}})},getRightColumn:function(t,e,a){var n=this;this.$store.commit("setStatusLoader",!0);var i={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:2,ContactID:e,ContactPersonnelID:a};this.postEncode(this.getUrlById(),i).then(function(e){if(null!=e){var a=e.Data;n.rightDataOptions=[];for(var i=0;i<a.length;i++)n.rightDataOptions.push({value:a[i].greetingcd,key:a[i].descs});n.getDataList(t)}})},moveAllToRight:function(){for(var t=0;t<this.leftDataOptions.length;t++){var e=this.leftDataOptions[t];this.rightDataOptions.push({value:e.value,key:e.key,RowId:e.RowId})}this.leftDataOptions=[],this.$forceUpdate()},moveToRight:function(){for(var t=0;t<this.leftData.length;t++){for(var e,a=-1,n=0;n<this.leftDataOptions.length;n++)this.leftData[t]==this.leftDataOptions[n].value&&(e=this.leftDataOptions[n],a=n);this.rightDataOptions.push({value:e.value,key:e.key,RowId:e.RowId}),this.leftDataOptions.splice(a,1)}this.$forceUpdate()},moveToLeft:function(){for(var t=0;t<this.rightData.length;t++){for(var e,a=-1,n=0;n<this.rightDataOptions.length;n++)this.rightData[t]==this.rightDataOptions[n].value&&(e=this.rightDataOptions[n],a=n);this.leftDataOptions.push({value:e.value,key:e.key,RowId:e.RowId}),this.rightDataOptions.splice(a,1)}this.$forceUpdate()},moveAllToLeft:function(){for(var t=0;t<this.rightDataOptions.length;t++){var e=this.rightDataOptions[t];this.leftDataOptions.push({value:e.value,key:e.key,RowId:e.RowId})}this.rightDataOptions=[],this.$forceUpdate()},setToolbarButton:function(){this.getToolbar().statusFunction[0].disabled=!0,this.getToolbar().statusFunction[2].disabled=!0},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(t){},M_Refresh:function(){},M_Cancel:function(){this.rowClicked(),this.search=""},doDoubleClick:function(){},rowClicked:function(t,e){this.getRightColumn("",t.ContactId,t.ContactPersonnelID)},rowLink:function(t){this.$refs.modalTest.show()},paramFromParent:function(){},M_Post:function(t){},M_Insert:function(){var t=this,e={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder};this.postJSON(this.getUrlInsert(),e).then(function(e){null!=e&&t.$parent.resultInsert(e.Message)})},M_Update:function(){var t=this,e=[],a=null,n=[],i={_Method_:"DELETE",_LineNo_:this.$parent.data.PageOrder,SubportfoliCd:this.getDataUser().SubPortfolioCd,ContactID:this.M_CM_ContactPersonnelGreeting.contactid,ContactPersonnelID:this.M_CM_ContactPersonnelGreeting.contactpersonnelid};a=0==this.rowSelected.length?{_Method_:"UPDATE",_LineNo_:this.$parent.data.PageOrder,ContactID:this.M_CM_ContactPersonnelGreeting.contactid,ContactPersonnelID:this.M_CM_ContactPersonnelGreeting.contactpersonnelid,GreetingCd:"",UserEdit:this.getDataUser().UserId}:{_Method_:"UPDATE2",_LineNo_:this.$parent.data.PageOrder,ContactID:this.M_CM_ContactPersonnelGreeting.contactid,ContactPersonnelID:this.M_CM_ContactPersonnelGreeting.contactpersonnelid,GreetingCd:this.M_CM_ContactPersonnelGreeting.greetingcd,UserEdit:this.getDataUser().UserId};for(var o=0;o<this.rightDataOptions.length;o++)n.push({_Method_:"UPDATE2",_LineNo_:this.$parent.data.PageOrder,CONTACTID:this.M_CM_ContactPersonnelGreeting.contactid,CONTACTPERSONNELID:this.M_CM_ContactPersonnelGreeting.contactpersonnelid,GREETINGCD:this.rightDataOptions[o].value,UserEdit:this.getDataUser().UserId});e.push({A_Delete:i,B_Update:a}),n.length>0&&(e[0].C_Looping=n);var s={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:e,search:this.search=""};this.postJSONMulti(this.getUrlProsesDataPostMulti(),s).then(function(e){null!=e&&t.$parent.resultInsert("Success...!")})},M_ClearForm:function(){this.M_CM_ContactPersonnelGreeting={contactid:"",fullname:"",contactpersonnelid:"",name:"",userinput:"",useredit:this.getDataUser().UserId,lastupdatestamp:0,rowid:0}},M_New:function(){this.$refs.ref_search.focus()},M_Edit:function(){this.$refs.ref_search.focus()},M_Delete:function(t){var e=this,a=this.FormToABSList().getRowSelected(),n=[];a.forEach(function(t){n.push({_Message_:""})});var i={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:n};this.postJSONMulti(this.getUrlNewDeleteMulti(),i).then(function(t){null!=t&&e.$parent.resultDelete()})},getDataBy:function(t){var e=this,a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,contactid:t.ContactId,contactpersonnelid:t.ContactPersonnelID};this.postEncode(this.getUrlById(),a).then(function(a){if(null!=a){var n=a.Data[0];e.M_CM_ContactPersonnelGreeting={contactid:n.contactid,fullname:n.fullname,contactpersonnelid:n.contactpersonnelid,name:n.name,userinput:n.userinput,useredit:n.useredit,lastupdatestamp:t.LastUpdateStamp,rowid:n.rowid},e.M_CM_ContactPersonnelGreeting.contactid=n.contactid+" - "+n.name,e.M_CM_ContactPersonnelGreeting.contactpersonnelid=n.contactpersonnelid+" - "+n.fullname,e.IEBy.Input=n.userinput,e.IEBy.Edit=n.useredit}})}},beforeCreate:function(){},created:function(){this.$store.commit("setFormType","List"),this.getToolbar().ProcessPS()},beforeMount:function(){},mounted:function(){this.hideSideBarMenu(),this.FormToABSList().doGetList("","eb_getList")},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),s=o,r=a("2877"),l=Object(r["a"])(s,n,i,!1,null,null,null);l.options.__file="CM_ContactPersonnelGreeting.vue";e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0b5fb4.6d9d6df8.js.map