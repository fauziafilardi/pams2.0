(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d2ba1"],{"5a76":function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("ABSListVuex",{attrs:{prop:t.propList,title:t.data.QueryName},on:{rowClicked:t.$parent.rowClicked,rowDblClicked:t.$parent.doDoubleClick,rowLinkClick:t.$parent.rowLink,pageSize:t.$parent.M_PageSize,pagination:t.$parent.M_Pagination,filter:t.$parent.M_Advance_Filter,headTable:t.$parent.M_Head_Table}}),r("div",{directives:[{name:"show",rawName:"v-show",value:t.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[r("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[r("span",{directives:[{name:"show",rawName:"v-show",value:t.IEBy.Input&&t.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[t._v("\n                    Input By : "+t._s(t.IEBy.Input)+" | Edit By : "+t._s(t.IEBy.Edit)+" "),r("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),r("b-collapse",{attrs:{id:"collapse1",visible:!0}},[r("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[r("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[r("b-form",{attrs:{"data-vv-scope":"FormScope_"+t.PageLevel+"_"+t.TabIndex,"data-vv-value-path":"FormScope_"+t.PageLevel+"_"+t.TabIndex}},[r("b-row",{staticStyle:{"padding-left":"10px"}},[r("b-col",{attrs:{md:"12",id:"col-left"}},[r("b-row",[r("b-col",{attrs:{md:"6"}},[r("ABSInputSelect2",{ref:"ref_usergroup",attrs:{prop:t.PI_usergroup,value:t.M_SS_UserGroupControl.usergroup},on:{change:t.OnusergroupChange}})],1)],1),r("b-row",[r("b-col",{attrs:{md:"6"}},[r("ABSinputTextVuex",{ref:"ref_descs",attrs:{prop:t.PI_descs},on:{input:t.OndescsChange},model:{value:t.M_SS_UserGroupControl.descs,callback:function(e){t.$set(t.M_SS_UserGroupControl,"descs",e)},expression:"M_SS_UserGroupControl.descs"}})],1)],1)],1)],1),r("ABSTAnalysis",{attrs:{prop:t.PTAnalysis}})],1)],1)],1)],1)],1)],1)},o=[],a=(r("ac6a"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{ValKey:null,FormType:"List",Module:"SS",propList:{initialWhere:"UserId = '"+this.ValKey+"'",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_SS_UserGroupControl:{userid:"",usergroup:"",descs:"",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:0,t0:"",t1:"",t2:"",t3:"",t4:"",t5:"",t6:"",t7:"",t8:"",t9:"",t10:"",t11:"",t12:"",t13:"",t14:"",t15:"",t16:"",t17:"",t18:"",t19:"",t20:"",t21:"",t22:"",t23:"",t24:"",t25:"",t26:"",t27:"",t28:"",t29:"",t30:"",controlsequenceno:0,rowid:0},PI_usergroup:{dataLookUp:{LookUpCd:"GetUserGroup",ColumnDB:"UserGroup",InitialWhere:"",ParamWhere:""},cValidate:"required",cName:"usergroup",cLabel:"Group",cKey:!1,cLabelSize:4,cOrder:0,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"SS/SS_Group",cDisplayColumn:"UserGroup"},PI_descs:{cValidate:"required",cName:"descs",cLabel:"Description",cLabelSize:4,cOrder:0,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage2Data},DataRowPage1:function(){return this.$store.getters.GetPage1Data}},methods:{OnusergroupChange:function(t){var e=this;this.M_SS_UserGroupControl.usergroup!=t.id&&(this.$nextTick(function(){e.M_SS_UserGroupControl.usergroup=t.id,e.M_SS_UserGroupControl.usergroupLabel=t.label,e.inputStatus}),this.$forceUpdate())},OndescsChange:function(t){var e=this;this.$nextTick(function(){e.inputStatus}),this.$forceUpdate()},setToolbarButton:function(){},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(t){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(t,e){},rowLink:function(t){this.$refs.modalTest.show()},paramFromParent:function(){this.$parent.showForm=!1;var t=this.$store.getters.GetPage1Data;this.M_SS_UserGroupControl.userid=t.UserId,this.propList.initialWhere=" UserId = '"+t.UserId+"' ",this.FormToABSList().doGetList("","eb_getList")},M_Insert:function(){var t=this,e={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,UserID:this.M_SS_UserGroupControl.this.getdatauser().userid,UserGroup:this.M_SS_UserGroupControl.this.getdatauser().userid,Descs:""==this.M_SS_UserGroupControl.usergroup||null==this.M_SS_UserGroupControl.usergroup?"NULL":this.M_SS_UserGroupControl.usergroup,UserInput:this.getDataUser().UserId};this.postJSON(this.getUrlInsert(),e).then(function(e){null!=e&&t.$parent.resultInsert(e.Message)})},M_Update:function(){var t=this,e={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,UserID:this.M_SS_UserGroupControl.this.getdatauser().userid,UserGroup:this.M_SS_UserGroupControl.this.getdatauser().userid,Descs:""==this.M_SS_UserGroupControl.usergroup||null==this.M_SS_UserGroupControl.usergroup?"NULL":this.M_SS_UserGroupControl.usergroup,UserEdit:this.getDataUser().UserId,LastUpdateStamp:this.M_SS_UserGroupControl.lastupdatestamp};this.postJSON(this.getUrlUpdate(),e).then(function(e){null!=e&&t.$parent.resultUpdate(e.Message)})},M_ClearForm:function(){this.M_SS_UserGroupControl={userid:"",usergroup:"",descs:"",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:0,t0:"",t1:"",t2:"",t3:"",t4:"",t5:"",t6:"",t7:"",t8:"",t9:"",t10:"",t11:"",t12:"",t13:"",t14:"",t15:"",t16:"",t17:"",t18:"",t19:"",t20:"",t21:"",t22:"",t23:"",t24:"",t25:"",t26:"",t27:"",t28:"",t29:"",t30:"",controlsequenceno:0,rowid:0}},M_New:function(){var t=this.$store.getters.GetPage1Data;this.M_SS_UserGroupControl.userid=t.UserId},M_Edit:function(){},M_Delete:function(t){var e=this,r=this.FormToABSList().getRowSelected(),s=[];r.forEach(function(t){s.push({UserID:e.DataRowPage1.UserId,UserGroup:t.UserGroup,LastUpdateStamp:t.LastUpdateStamp,UserEdit:e.getDataUser().UserId,_Message_:""})});var o={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:s};this.postJSONMulti(this.getUrlNewDeleteMulti(),o).then(function(t){null!=t&&e.$parent.resultDelete("Deleting Data Successfully")})},getDataBy:function(t){var e=this,r={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,UserId:t.UserId,UserGroup:t.UserGroup};this.postEncode(this.getUrlById(),r).then(function(r){if(null!=r){var s=r.Data[0];e.M_SS_UserGroupControl={userid:s.userid,usergroup:s.usergroup,descs:s.descs,userinput:s.userinput,useredit:s.useredit,timeinput:s.timeinput,timeedit:s.timeedit,lastupdatestamp:t.LastUpdateStamp,t0:s.t0,t1:s.t1,t2:s.t2,t3:s.t3,t4:s.t4,t5:s.t5,t6:s.t6,t7:s.t7,t8:s.t8,t9:s.t9,t10:s.t10,t11:s.t11,t12:s.t12,t13:s.t13,t14:s.t14,t15:s.t15,t16:s.t16,t17:s.t17,t18:s.t18,t19:s.t19,t20:s.t20,t21:s.t21,t22:s.t22,t23:s.t23,t24:s.t24,t25:s.t25,t26:s.t26,t27:s.t27,t28:s.t28,t29:s.t29,t30:s.t30,controlsequenceno:s.controlsequenceno,rowid:s.rowid},e.IEBy.Input=s.userinput,e.IEBy.Edit=s.useredit}})}},created:function(){},beforeMount:function(){},mounted:function(){this.hideSideBarMenu()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),i=a,n=r("2877"),u=Object(n["a"])(i,s,o,!1,null,null,null);u.options.__file="SS_UserGroupControl.vue";e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0d2ba1.000a376f.js.map