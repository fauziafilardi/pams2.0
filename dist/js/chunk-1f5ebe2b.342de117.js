(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f5ebe2b"],{"894e":function(e,t,n){"use strict";var i=n("d5ef"),o=n.n(i);o.a},d0b4:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{style:"margin-top:10px;"},[n("keep-alive",[n("b-collapse",{attrs:{id:"collapse3",visible:!0}},[n("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[n("b-col",{staticClass:"bColMasterForm",attrs:{md:"5",id:"col-left"}},[n("ABSProcessInputSelectList",{attrs:{prop:e.PI_SubPortfolio,value:e.M_SubPortfolio,label:e.M_SubPortfolioLabel},on:{change:e.onSubPortfolioChange}})],1)],1),n("b-row",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[n("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-mid"}},[n("b-container",e._l(e.allModules,function(t,i){return n("div",{key:i},[n("b-row",{attrs:{"no-gutters":!0}},[n("b-col",{attrs:{cols:"auto"}},[n("span",{staticClass:"module",attrs:{id:"module_"+t.ModuleSeq},on:{click:function(n){e.showEventMethod(t.ModuleSeq,i)}}},[n("font-awesome-icon",{staticClass:"icon-expand",attrs:{icon:t.icon?t.icon:"plus-circle"}})],1)]),n("b-col",{attrs:{cols:"auto"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.Checked,expression:"module.Checked"}],staticStyle:{"vertical-align":"middle !important"},attrs:{disabled:!e.canUpdate,type:"checkbox",name:"cb_module",id:"M_"+t.ModuleSeq},domProps:{checked:Array.isArray(t.Checked)?e._i(t.Checked,null)>-1:t.Checked},on:{click:function(n){e.Update("M",t.ModuleSeq)},change:function(n){var i=t.Checked,o=n.target,s=!!o.checked;if(Array.isArray(i)){var l=null,a=e._i(i,l);o.checked?a<0&&e.$set(t,"Checked",i.concat([l])):a>-1&&e.$set(t,"Checked",i.slice(0,a).concat(i.slice(a+1)))}else e.$set(t,"Checked",s)}}})]),n("b-col",{attrs:{cols:"auto"}},[n("span",[e._v(e._s(t.ModuleName))])])],1),n("b-row",{directives:[{name:"show",rawName:"v-show",value:e.showEvent==t.ModuleSeq,expression:"showEvent == module.ModuleSeq"}],attrs:{"no-gutters":!0}},[e.onFilteredEvents.length>0?n("b-container",e._l(e.onFilteredEvents,function(i,o){return n("div",{key:o},[n("b-row",{staticStyle:{"margin-left":"26px"},attrs:{"no-gutters":!0}},[n("b-col",{attrs:{cols:"auto"}},[n("span",{staticClass:"event",attrs:{id:"event_"+i.EventSeq},on:{click:function(n){e.showOptionMethod(t.ModuleSeq,i.EventSeq,o)}}},[n("font-awesome-icon",{staticClass:"icon-expand",attrs:{icon:i.icon?i.icon:"plus-circle"}})],1)]),n("b-col",{attrs:{cols:"auto"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:i.Checked,expression:"event.Checked"}],staticStyle:{"vertical-align":"middle !important"},attrs:{disabled:!e.canUpdate,type:"checkbox",name:"cb_event",id:"E_"+i.EventSeq},domProps:{checked:Array.isArray(i.Checked)?e._i(i.Checked,null)>-1:i.Checked},on:{click:function(t){e.Update("E",i.EventSeq)},change:function(t){var n=i.Checked,o=t.target,s=!!o.checked;if(Array.isArray(n)){var l=null,a=e._i(n,l);o.checked?a<0&&e.$set(i,"Checked",n.concat([l])):a>-1&&e.$set(i,"Checked",n.slice(0,a).concat(n.slice(a+1)))}else e.$set(i,"Checked",s)}}})]),n("b-col",{attrs:{cols:"auto"}},[n("span",[e._v(e._s(i.EventName))])])],1),n("b-row",{attrs:{"no-gutters":!0}},[n("b-container",[n("table",{staticStyle:{"margin-left":"55px"}},[n("tr",[n("td"),n("td"),n("td",{staticClass:"col-auto",staticStyle:{"text-align":"center !important"}},[e._v(" Add ")]),n("td",{staticClass:"col-auto",staticStyle:{"text-align":"center !important"}},[e._v(" Edit ")]),n("td",{staticClass:"col-auto",staticStyle:{"text-align":"center !important"}},[e._v(" Delete ")]),n("td",{staticClass:"col-auto",staticStyle:{"text-align":"center !important"}},[e._v(" Print ")]),n("td",{staticClass:"col-auto",staticStyle:{"text-align":"center !important"}},[e._v(" View ")])]),e._v("\n                                                    "+e._s(e.onFilteredEvents.Options)+"\n                                                    "),e._l(e.onFilteredEvents.Options,function(t,i){return n("tr",{key:i},[n("td",{staticClass:"col-auto"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.set,expression:"option.set"}],staticStyle:{"vertical-align":"middle !important"},attrs:{disabled:!e.canUpdate,type:"checkbox",name:"cb_option",id:"O_"+t.OptionSeq},domProps:{checked:t.Checked,checked:Array.isArray(t.set)?e._i(t.set,null)>-1:t.set},on:{click:function(n){e.Update("O",t.OptionSeq)},change:function(n){var i=t.set,o=n.target,s=!!o.checked;if(Array.isArray(i)){var l=null,a=e._i(i,l);o.checked?a<0&&e.$set(t,"set",i.concat([l])):a>-1&&e.$set(t,"set",i.slice(0,a).concat(i.slice(a+1)))}else e.$set(t,"set",s)}}})]),n("td",{staticClass:"col-auto"},[n("span",[e._v(e._s(t.OptionName))])]),n("td",{staticClass:"col-auto",staticStyle:{"text-align":"center !important"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.add,expression:"option.add"}],attrs:{disabled:!e.canUpdate,type:"checkbox",name:"cb_optionStatus",id:"OS_Add_"+t.OptionSeq},domProps:{checked:t.add,checked:Array.isArray(t.add)?e._i(t.add,null)>-1:t.add},on:{click:function(n){e.Update("OS_Add",t.OptionSeq)},change:function(n){var i=t.add,o=n.target,s=!!o.checked;if(Array.isArray(i)){var l=null,a=e._i(i,l);o.checked?a<0&&e.$set(t,"add",i.concat([l])):a>-1&&e.$set(t,"add",i.slice(0,a).concat(i.slice(a+1)))}else e.$set(t,"add",s)}}})]),n("td",{staticClass:"col-auto",staticStyle:{"text-align":"center !important"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.edit,expression:"option.edit"}],attrs:{disabled:!e.canUpdate,type:"checkbox",name:"cb_optionStatus",id:"OS_Edit_"+t.OptionSeq},domProps:{checked:t.edit,checked:Array.isArray(t.edit)?e._i(t.edit,null)>-1:t.edit},on:{click:function(n){e.Update("OS_Edit",t.OptionSeq)},change:function(n){var i=t.edit,o=n.target,s=!!o.checked;if(Array.isArray(i)){var l=null,a=e._i(i,l);o.checked?a<0&&e.$set(t,"edit",i.concat([l])):a>-1&&e.$set(t,"edit",i.slice(0,a).concat(i.slice(a+1)))}else e.$set(t,"edit",s)}}})]),n("td",{staticClass:"col-auto",staticStyle:{"text-align":"center !important"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.delete,expression:"option.delete"}],attrs:{disabled:!e.canUpdate,type:"checkbox",name:"cb_optionStatus",id:"OS_Delete_"+t.OptionSeq},domProps:{checked:t.delete,checked:Array.isArray(t.delete)?e._i(t.delete,null)>-1:t.delete},on:{click:function(n){e.Update("OS_Delete",t.OptionSeq)},change:function(n){var i=t.delete,o=n.target,s=!!o.checked;if(Array.isArray(i)){var l=null,a=e._i(i,l);o.checked?a<0&&e.$set(t,"delete",i.concat([l])):a>-1&&e.$set(t,"delete",i.slice(0,a).concat(i.slice(a+1)))}else e.$set(t,"delete",s)}}})]),n("td",{staticClass:"col-auto",staticStyle:{"text-align":"center !important"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.print,expression:"option.print"}],attrs:{disabled:!e.canUpdate,type:"checkbox",name:"cb_optionStatus",id:"OS_Print_"+t.OptionSeq},domProps:{checked:t.print,checked:Array.isArray(t.print)?e._i(t.print,null)>-1:t.print},on:{click:function(n){e.Update("OS_Print",t.OptionSeq)},change:function(n){var i=t.print,o=n.target,s=!!o.checked;if(Array.isArray(i)){var l=null,a=e._i(i,l);o.checked?a<0&&e.$set(t,"print",i.concat([l])):a>-1&&e.$set(t,"print",i.slice(0,a).concat(i.slice(a+1)))}else e.$set(t,"print",s)}}})]),n("td",{staticClass:"col-auto",staticStyle:{"text-align":"center !important"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.view,expression:"option.view"}],attrs:{disabled:!e.canUpdate,type:"checkbox",name:"cb_optionStatus",id:"OS_View_"+t.OptionSeq},domProps:{checked:t.view,checked:Array.isArray(t.view)?e._i(t.view,null)>-1:t.view},on:{click:function(n){e.Update("OS_View",t.OptionSeq)},change:function(n){var i=t.view,o=n.target,s=!!o.checked;if(Array.isArray(i)){var l=null,a=e._i(i,l);o.checked?a<0&&e.$set(t,"view",i.concat([l])):a>-1&&e.$set(t,"view",i.slice(0,a).concat(i.slice(a+1)))}else e.$set(t,"view",s)}}})])])})],2)])],1)],1)})):n("b-container",{staticStyle:{"margin-left":"26px"}},[n("span",[e._v("No Event Available")])])],1)],1)}))],1)],1)],1)],1)],1)])},o=[],s=(n("ac6a"),{props:{PageLevel:"",TabIndex:""},data:function(){return{FormType:"Form",propList:{initialWhere:"",LineNo:1,PageLevel:this.PageLevel,TabIndex:this.TabIndex},M_SubPortfolio:"",M_SubPortfolioLabel:"",IEBy:{Input:"",Edit:""},PI_SubPortfolio:{dataLookUp:{LookUpCd:"GetSubPortfolioCd",ColumnDB:"SubPortfolioCd",InitialWhere:"",ParamWhere:""},cValidate:"",cName:"SubPortfolio",cLabel:"SubPortfolio",cOrder:2,cSelected:null,cType:"lookup",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cDisplayColumn:"SubPortfolioCd,Name"},record:{UserGroup:null,SubPortfolio:null},DataFromParent:null,isShow:!1,allModules:[],allEvents:[],allOptions:[],allModules_Temp:[],allEvents_Temp:[],allOptions_Temp:[],onFilteredEvents:[],onFilteredOptions:[],showEvent:null,showOption:null,canUpdate:!1,indexModuleOld:-1,indexEventOld:-1}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"}},methods:{M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Post:function(){},M_Refresh:function(){},M_Delete:function(){},M_New:function(){},M_Cancel:function(){},M_Insert:function(){var e=this,t=[];this.allOptions.forEach(function(e){1!=e.add&&1!=e.edit&&1!=e.delete&&1!=e.print&&1!=e.view||t.push({OptionSeq:e.OptionSeq,AddStatus:1==e.add?1:0,EditStatus:1==e.edit?1:0,DeleteStatus:1==e.delete?1:0,PrintStatus:1==e.print?1:0,ViewStatus:1==e.view?1:0})});var n={UserGroup:this.DataFromParent.UserGroup,SubPortfolioCd:this.getDataUser().SubPortfolioCd,UserInput:this.getDataUser().UserId,data:t};this.postJSON(this.getUrlSaveSecuritySetting(),n).then(function(t){null!=t&&e.alertSuccess(t.Message)})},M_Update:function(){},M_ClearForm:function(){this.M_SubPortfolio="",this.M_SubPortfolioLabel=""},paramFromParent:function(){this.isShow=!1,this.M_ClearForm(),this.DataFromParent=this.$store.getters.GetPage1Data,this.allOptions=this.allOptions_Temp,this.canUpdate=!1},resetButtonExpand:function(e,t){e=e.toUpperCase();var n=this.allModules_Temp,i=this.allEvents_Temp,o=this.allOptions_Temp,s="+"==t?"plus-circle":"minus-circle";if("ALL"==e){if(null!==this.showOption){var l=this.allEvents.map(function(e){return e.EventSeq}).indexOf(this.showOption);this.allEvents[l].icon="plus-circle",this.showOption=null,this.onFilteredOptions=[]}if(null!==this.showEvent){var a=this.allModules.map(function(e){return e.ModuleSeq}).indexOf(this.showEvent);this.allModules[a].icon="plus-circle",this.showEvent=null,this.onFilteredEvents=[]}}else if("M"==e)for(var r=0;r<n.length;r++)n[r].icon=s;else if("E"==e)for(r=0;r<i.length;r++)i[r].icon=s;else if("O"==e)for(r=0;r<o.length;r++)o[r].icon=s},expand:function(e,t){var n=this;this.$store.commit("setStatusLoader",!0),setTimeout(function(){if("M"==e)if(t==n.showEvent){n.onFilteredEvents=[],n.onFilteredOptions=[];var i=n.allModules.map(function(e){return e.ModuleSeq}).indexOf(t),o=n.allEvents.map(function(e){return e.EventSeq}).indexOf(n.showOption);n.allModules[i].icon="plus-circle",o>-1&&(n.allEvents[o].icon="plus-circle"),n.showEvent=null,n.showOption=null}else{for(var s=0;s<n.allEvents.length;s++)n.allEvents[s].ModuleSeq==t&&n.onFilteredEvents.push(n.allEvents[s]);n.showEvent=t,n.resetButtonExpand(e,"+");i=n.allModules.map(function(e){return e.ModuleSeq}).indexOf(t);n.allModules[i].icon="minus-circle"}else if(t==n.showOption){n.showOption=null,n.onFilteredOptions=[];o=n.allEvents.map(function(e){return e.EventSeq}).indexOf(t);n.allEvents[o].icon="plus-circle"}else{for(var l=0;l<n.allOptions.length;l++)n.allOptions[l].ModuleSeq==n.showEvent&&n.allOptions[l].EventSeq==t&&n.onFilteredOptions.push(n.allOptions[l]);n.showOption=t,n.resetButtonExpand(e,"+");o=n.allEvents.map(function(e){return e.EventSeq}).indexOf(t);n.allEvents[o].icon="minus-circle"}n.$store.commit("setStatusLoader",!1)},1e3)},onSubPortfolioChange:function(e){var t=this;this.M_SubPortfolio=e.id,this.M_SubPortfolioLabel=e.label,this.showEvent=null;var n={SubPortfolioCd:this.M_SubPortfolio,Usergroup:this.DataFromParent.UserGroup,UserId:this.getDataUser().UserId};this.postEncode(this.getUrlGetGroupPermisionModule(),n).then(function(e){if(null!=e){var n=e.Data;t.$nextTick(function(){var e,i=n.length;for(e=0;e<i;e++)"0"==n[e].Checked?n[e].Checked=!1:n[e].Checked=!0;t.allModules=n,t.canUpdate=!0,t.isShow=!0}),t.$forceUpdate()}})},showEventMethod:function(e,t){var n=this;-1!=this.indexModuleOld&&(this.allModules[this.indexModuleOld].icon="plus-circle"),this.indexModuleOld=t,this.allModules[t].icon="minus-circle",this.onFilteredEvents=[],this.showEvent=e;var i={SubPortfolioCd:this.M_SubPortfolio,Usergroup:this.DataFromParent.UserGroup,ModuleSeq:e,UserId:this.getDataUser().UserId};this.postEncode(this.getUrlGetGroupPermisionEvent(),i).then(function(e){if(null!=e){var t=e.Data;n.$nextTick(function(){var e,i=t.length;for(e=0;e<i;e++)"0"==t[e].Checked?t[e].Checked=!1:t[e].Checked=!0,t[e].Options=[];n.onFilteredEvents=t}),n.$forceUpdate()}})},showOptionMethod:function(e,t,n){var i=this;-1!=this.indexEventOld&&(this.onFilteredEvents[this.indexEventOld].icon="plus-circle"),this.indexEventOld=n,this.onFilteredEvents[n].icon="minus-circle",this.onFilteredOptions=[],this.showOption=t;var o={SubPortfolioCd:this.M_SubPortfolio,Usergroup:this.DataFromParent.UserGroup,ModuleSeq:e,EventSeq:t,UserId:this.getDataUser().UserId};this.postEncode(this.getUrlGetGroupPermisionOption(),o).then(function(e){if(null!=e){var t=e.Data;i.$nextTick(function(){var e,o=t.length;for(e=0;e<o;e++)"0"==t[e].Checked?t[e].Checked=!1:t[e].Checked=!0;i.onFilteredEvents[n].Options=t}),i.$forceUpdate()}})},getGroupSubPortfolio:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:2,UserGroup:this.DataFromParent.UserGroup,SubPortfolioCd:this.M_SubPortfolio};this.postEncode(this.getUrlById(),t).then(function(t){if(null!=t){var n=t.Data;e.allOptions=e.allOptions_Temp;var i=e.allOptions,o=e.allEvents,s=e.allModules;e.$nextTick(function(){n.forEach(function(t){var n=i.map(function(e){return e.OptionSeq}).indexOf(t.optionseq);if(n>-1){e.allOptions[n].set=!0,e.allOptions[n].add=1==t.addstatus,e.allOptions[n].edit=1==t.editstatus,e.allOptions[n].delete=1==t.deletestatus,e.allOptions[n].print=1==t.printstatus,e.allOptions[n].view=1==t.viewstatus;var l=o.map(function(e){return e.EventSeq}).indexOf(e.allOptions[n].EventSeq);e.allEvents[l].set=!0;var a=s.map(function(e){return e.ModuleSeq}).indexOf(e.allOptions[n].ModuleSeq);e.allModules[a].set=!0}}),e.canUpdate=!0,e.isShow=!0}),e.$forceUpdate()}})},Update:function(e,t){var n=this;this.$nextTick(function(){"M"==e?n.checkedTheChild("M",t):"E"==e?n.checkedTheParent("E",t):"O"==e?n.checkedTheParent("O",t):n.checkedTheParent("OS",t)}),this.$forceUpdate()},checkedTheParent:function(e,t){if("E"==e){var n=this.allEvents_Temp.map(function(e){return e.EventSeq}).indexOf(t),i=this.onFilteredEvents.map(function(e){return e.EventSeq}).indexOf(t),o=this.allModules_Temp.map(function(e){return e.ModuleSeq}).indexOf(this.allEvents[n].ModuleSeq),s=this.isUnCheckAll("E",this.allEvents[n].ModuleSeq);this.allModules[o].set=s,document.getElementById("M_"+this.allEvents[n].ModuleSeq).checked=s,this.checkedTheChild("E",t,null,this.allEvents[n].ModuleSeq)}else if("O"==e){var l=this.allOptions_Temp.map(function(e){return e.OptionSeq}).indexOf(t),a=this.onFilteredOptions.map(function(e){return e.OptionSeq}).indexOf(t),r=(n=this.allEvents_Temp.map(function(e){return e.EventSeq}).indexOf(this.allOptions[l].EventSeq),i=this.onFilteredEvents.map(function(e){return e.EventSeq}).indexOf(this.allOptions[l].EventSeq),o=this.allModules_Temp.map(function(e){return e.ModuleSeq}).indexOf(this.allOptions[l].ModuleSeq),this.isUnCheckAll("O",this.allOptions[l].EventSeq));this.allEvents[n].set=r,this.onFilteredEvents[i].set=r,document.getElementById("E_"+this.allOptions[l].EventSeq).checked=r;s=this.isUnCheckAll("E",this.allOptions[l].ModuleSeq);this.allModules[o].set=s,document.getElementById("M_"+this.allOptions[l].ModuleSeq).checked=s,this.checkedTheChild("O",t,this.showOption,this.showEvent)}else if("OS"==e){l=this.allOptions_Temp.map(function(e){return e.OptionSeq}).indexOf(t),a=this.onFilteredOptions.map(function(e){return e.OptionSeq}).indexOf(t),n=this.allEvents_Temp.map(function(e){return e.EventSeq}).indexOf(this.allOptions[l].EventSeq),i=this.onFilteredEvents.map(function(e){return e.EventSeq}).indexOf(this.allOptions[l].EventSeq),o=this.allModules_Temp.map(function(e){return e.ModuleSeq}).indexOf(this.allOptions[l].ModuleSeq);var c=this.isUnCheckAll("OS",t);this.allOptions[l].set=c,this.onFilteredOptions[a].set=c,document.getElementById("O_"+t).checked=c;r=this.isUnCheckAll("O",this.allOptions[l].EventSeq);this.allEvents[n].set=r,this.onFilteredEvents[i].set=r,document.getElementById("E_"+this.allOptions[l].EventSeq).checked=r;s=this.isUnCheckAll("E",this.allOptions[l].ModuleSeq);this.allModules[o].set=s,document.getElementById("M_"+this.allOptions[l].ModuleSeq).checked=s}},checkedTheChild:function(e,t){var n=this,i=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],arguments.length>3&&void 0!==arguments[3]?arguments[3]:null);if("O"==e){var o=this.allOptions_Temp.map(function(e){return e.OptionSeq}).indexOf(t);this.allOptions[o].add=this.allOptions[o].set,this.allOptions[o].edit=this.allOptions[o].set,this.allOptions[o].delete=this.allOptions[o].set,this.allOptions[o].print=this.allOptions[o].set,this.allOptions[o].view=this.allOptions[o].set,this.showOption==t&&(document.getElementById("OS_Add_"+t).checked=this.allOptions[o].set,document.getElementById("OS_Edit_"+t).checked=this.allOptions[o].set,document.getElementById("OS_Delete_"+t).checked=this.allOptions[o].set,document.getElementById("OS_Print_"+t).checked=this.allOptions[o].set,document.getElementById("OS_View_"+t).checked=this.allOptions[o].set)}else if("E"==e){var s=this.allEvents_Temp.map(function(e){return e.EventSeq}).indexOf(t),l=this.allOptions.filter(function(e){return e.ModuleSeq==i&&e.EventSeq==t});l.forEach(function(e,o){var l=n.allOptions.map(function(e){return e.OptionSeq}).indexOf(e.OptionSeq);n.allOptions[l].set=n.allEvents[s].set,e.EventSeq==n.showOption&&(document.getElementById("O_"+e.OptionSeq).checked=n.allEvents[s].set),n.checkedTheChild("O",e.OptionSeq,t,i)})}else if("M"==e){var a=this.allModules_Temp.map(function(e){return e.ModuleSeq}).indexOf(t),r=this.allEvents.filter(function(e){return e.ModuleSeq==t});r.forEach(function(e,i){var o=n.allEvents.map(function(e){return e.EventSeq}).indexOf(e.EventSeq);n.allEvents[o].set=n.allModules[a].set,e.ModuleSeq==n.showEvent&&(document.getElementById("E_"+e.EventSeq).checked=n.allModules[a].set),n.checkedTheChild("E",n.allEvents[o].EventSeq,null,t)})}},isUnCheckAll:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if("OS"==e){var n=this.allOptions_Temp.map(function(e){return e.OptionSeq}).indexOf(t);return!0===this.allOptions[n].add||!0===this.allOptions[n].edit||!0===this.allOptions[n].delete||!0===this.allOptions[n].print||!0===this.allOptions[n].view}if("O"==e)for(var i=0;i<this.onFilteredOptions.length;i++)return 1==this.onFilteredOptions[i].set;else if("E"==e)for(var o=0;o<this.onFilteredEvents.length;o++)return 1==this.onFilteredEvents[o].set},setToolbarButton:function(){this.getToolbar().isNew=!0,this.getToolbar().statusFunction[6].disabled=!0}},beforeCreate:function(){},created:function(){},beforeMount:function(){},mounted:function(){this.hideSideBarMenu()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),l=s,a=(n("894e"),n("2877")),r=Object(a["a"])(l,i,o,!1,null,null,null);r.options.__file="SS_Group_Permission_SecuritySettingDanniel.vue";t["default"]=r.exports},d5ef:function(e,t,n){}}]);
//# sourceMappingURL=chunk-1f5ebe2b.342de117.js.map