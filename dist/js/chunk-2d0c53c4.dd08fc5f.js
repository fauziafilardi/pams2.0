(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c53c4"],{"3dda":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ABSListVuex",{attrs:{prop:e.propList,title:e.data.QueryName},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table,refreshColumn:e.$parent.refreshColumn}})],1)},i=[],r={props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{cInsertKey:"",FormType:"View",Module:"CB",propList:{initialWhere:"SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"'",LineNo:0,PageLevel:1,TabIndex:1,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""}}},computed:{inputStatus:function(){return 1==this.$store.getters.getLevel&&1==this.$store.getters.getTab?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage1Data}},methods:{setToolbarButton:function(){},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,t){this.masterUrlPopUp("".concat(window.location.origin)+"/GL/GL_JournalInquiry?oid="+this.getOptionSeq().OptionSeq+"&isCallBack=true&LedgerFlag="+e.LedgerFlag+"&BatchNo="+e.BatchNo,"","1000","600","")},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){},M_Post:function(e){},M_Insert:function(){},M_Update:function(){},M_ClearForm:function(){},M_New:function(){},M_Edit:function(){},M_Delete:function(e){},getDataBy:function(e){}},beforeCreate:function(){},created:function(){this.$store.commit("setFormType","View")},beforeMount:function(){},mounted:function(){this.hideSideBarMenu(),this.FormToABSList().doGetList("","eb_getList")},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},a=r,u=n("2877"),c=Object(u["a"])(a,o,i,!1,null,null,null);c.options.__file="CB_DebtorInquiry.vue";t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0c53c4.dd08fc5f.js.map