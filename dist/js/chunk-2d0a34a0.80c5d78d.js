(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a34a0"],{"0219":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ABSListVuex",{attrs:{prop:e.propList,title:e.data.QueryName,hideCheckboxAndGear:!0},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table,refreshColumn:e.$parent.refreshColumn}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[a("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),a("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),a("b-collapse",{attrs:{id:"collapse1",visible:!0}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[a("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{attrs:{md:"12",id:"col-left"}},[a("b-col",{attrs:{md:"12",id:"col-left"}},[a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_lotno",attrs:{prop:e.PI_lotno,value:e.M_TN_StrataChangeOwner.lotno,label:e.M_TN_StrataChangeOwner.lotnoLabel},on:{change:e.OnlotnoChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputDateVuex",{ref:"ref_changedate",attrs:{prop:e.PI_changedate},on:{input:e.OnchangedateChange},model:{value:e.M_TN_StrataChangeOwner.changedate,callback:function(t){e.$set(e.M_TN_StrataChangeOwner,"changedate",t)},expression:"M_TN_StrataChangeOwner.changedate"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_ownerid",attrs:{prop:e.PI_ownerid,value:e.M_TN_StrataChangeOwner.ownerid,label:e.M_TN_StrataChangeOwner.owneridLabel},on:{change:e.OnowneridChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_occupantid",attrs:{prop:e.PI_occupantid,value:e.M_TN_StrataChangeOwner.occupantid,label:e.M_TN_StrataChangeOwner.occupantidLabel},on:{change:e.OnoccupantidChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSTextAreaVuex",{ref:"ref_remarks",attrs:{prop:e.PI_remarks},on:{input:e.OnremarksChange},model:{value:e.M_TN_StrataChangeOwner.remarks,callback:function(t){e.$set(e.M_TN_StrataChangeOwner,"remarks",t)},expression:"M_TN_StrataChangeOwner.remarks"}})],1)],1)],1)],1)],1),a("ABSTAnalysis",{attrs:{prop:e.PTAnalysis}})],1)],1)],1)],1)],1)],1)},r=[],o=(a("7f7f"),a("ac6a"),a("cadf"),a("551c"),a("097d"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{cInsertKey:"",FormType:"List",Module:"TN",propList:{initialWhere:"SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' AND ISNULL(OwnerID, OccupantId) IS NOT NULL AND StrataStatus = 'Y' AND Status = 'Y' AND GETDATE() BETWEEN StartDate AND EndDate ",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_TN_StrataChangeOwner:{lotno:"",changedate:"",ownerid:"",owneriddescs:"",occupantid:"",name:"",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:0,subportfoliocd:this.getDataUser().SubPortfolioCd,rowid:0,remarks:""},PI_lotno:{dataLookUp:{LookUpCd:"GetLookupLotNo",ColumnDB:"LotNo",InitialWhere:"SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' AND ISNULL(OwnerID, OccupantId) IS NOT NULL AND StrataBillingStatus = 'Y'",ParamWhere:""},cValidate:"",cName:"lotno",cLabel:"Lot No",cKey:!0,cLabelSize:4,cOrder:1,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"LotNo"},PI_changedate:{cValidate:"required",cName:"changedate",cLabel:"Date",cLabelSize:4,cOrder:2,cKey:!1,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_ownerid:{dataLookUp:{LookUpCd:"GetLookupOwnerId",ColumnDB:"ContactId",InitialWhere:"ContactId <> ''",ParamWhere:""},cValidate:"",cName:"ownerid",cLabel:"Owner ID",cKey:!1,cLabelSize:4,cOrder:3,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"ContactId,Name"},PI_occupantid:{dataLookUp:{LookUpCd:"GetLookupOccupantId",ColumnDB:"ContactId",InitialWhere:"ContactId <> ''",ParamWhere:""},cValidate:"",cName:"occupantid",cLabel:"Occupant ID",cKey:!1,cLabelSize:4,cOrder:4,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"",cDisplayColumn:"ContactId,Name"},PI_remarks:{cValidate:"",cName:"remarks",cLabel:"Remarks",cLabelSize:4,cOrder:5,cKey:!1,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage1Data}},methods:{OnlotnoChange:function(e){var t=this;this.$nextTick(function(){t.M_TN_StrataChangeOwner.lotno=e.id,t.M_TN_StrataChangeOwner.lotnoLabel=e.label,t.inputStatus}),this.$forceUpdate()},OnchangedateChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},OnowneridChange:function(e){var t=this;this.$nextTick(function(){t.M_TN_StrataChangeOwner.ownerid=e.id,t.M_TN_StrataChangeOwner.owneridLabel=e.label,t.inputStatus}),this.$forceUpdate()},OnoccupantidChange:function(e){var t=this;this.$nextTick(function(){t.M_TN_StrataChangeOwner.occupantid=e.id,t.M_TN_StrataChangeOwner.occupantidLabel=e.label,t.inputStatus}),this.$forceUpdate()},OnremarksChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},setToolbarButton:function(){this.getToolbar().statusFunction[0].disabled=!0,this.getToolbar().statusFunction[2].disabled=!0},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,t){},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){},M_Post:function(e){},M_Insert:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,LotNo:""==this.M_TN_StrataChangeOwner.lotno||null==this.M_TN_StrataChangeOwner.lotno?"NULL":this.M_TN_StrataChangeOwner.lotno,ChangeDate:""==this.M_TN_StrataChangeOwner.changedate||null==this.M_TN_StrataChangeOwner.changedate?"NULL":this.M_TN_StrataChangeOwner.changedate,ChangeType:this.M_TN_StrataChangeOwner.changetype,OwnerID:""==this.M_TN_StrataChangeOwner.ownerid||null==this.M_TN_StrataChangeOwner.ownerid?"NULL":this.M_TN_StrataChangeOwner.ownerid,OccupantID:""==this.M_TN_StrataChangeOwner.occupantid||null==this.M_TN_StrataChangeOwner.occupantid?"NULL":this.M_TN_StrataChangeOwner.occupantid,UserInput:this.getDataUser().UserId};this.postJSON(this.getUrlInsert(),t).then(function(t){null!=t&&e.$parent.resultUpdate(t.Message)})},M_Update:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,LotNo:""==this.M_TN_StrataChangeOwner.lotno||null==this.M_TN_StrataChangeOwner.lotno?"NULL":this.M_TN_StrataChangeOwner.lotno,ChangeDate:""==this.M_TN_StrataChangeOwner.changedate||null==this.M_TN_StrataChangeOwner.changedate?"NULL":this.M_TN_StrataChangeOwner.changedate,ChangeType:"O",OwnerID:""==this.M_TN_StrataChangeOwner.ownerid||null==this.M_TN_StrataChangeOwner.ownerid?"NULL":this.M_TN_StrataChangeOwner.ownerid,OccupantID:""==this.M_TN_StrataChangeOwner.occupantid||null==this.M_TN_StrataChangeOwner.occupantid?"NULL":this.M_TN_StrataChangeOwner.occupantid,UserEdit:this.getDataUser().UserId,LastUpdateStamp:this.M_TN_StrataChangeOwner.lastupdatestamp};this.postJSON(this.getUrlUpdate(),t).then(function(t){null!=t&&e.$parent.resultUpdate(t.Message)})},M_ClearForm:function(){this.M_TN_StrataChangeOwner={lotno:"",changedate:"",ownerid:"",owneriddescs:"",occupantid:"",name:"",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:0,subportfoliocd:this.getDataUser().SubPortfolioCd,rowid:0,remarks:""}},M_New:function(){this.$refs.ref_lotno.focus()},M_Edit:function(){this.$refs.ref_changedate.focus()},M_Delete:function(e){var t=this,a=this.FormToABSList().getRowSelected(),n=[];a.forEach(function(e){n.push({SubPortfolioCd:t.getDataUser().SubPortfolioCd,SequenceNo:e.SequenceNo,LastUpdateStamp:e.LastUpdateStamp,_Message_:""})});var r={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:n};this.postJSONMulti(this.getUrlNewDeleteMulti(),r).then(function(e){null!=e&&t.$parent.resultDelete()})},getDataBy:function(e){var t=this,a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,SubPortfolioCd:this.getDataUser().SubPortfolioCd,lotno:e.LotNo,changedate:e.ChangeDate};this.postEncode(this.getUrlById(),a).then(function(a){if(null!=a){var n=a.Data[0];t.M_TN_StrataChangeOwner={lotno:n.lotno,changedate:n.changedate,changetype:n.changetype,ownerid:n.ownerid,owneriddescs:n.owneriddescs,occupantid:n.occupantid,name:n.name,userinput:n.userinput,useredit:n.useredit,timeinput:n.timeinput,timeedit:n.timeedit,lastupdatestamp:e.LastUpdateStamp,subportfoliocd:n.subportfoliocd,rowid:n.rowid,remarks:n.remarks},t.M_TN_StrataChangeOwner.lotnoLabel=null!=t.M_TN_StrataChangeOwner.lotno&&""!=t.M_TN_StrataChangeOwner.lotno?n.lotno:"",t.M_TN_StrataChangeOwner.owneridLabel=null!=t.M_TN_StrataChangeOwner.ownerid&&""!=t.M_TN_StrataChangeOwner.ownerid?n.ownerid+t.separator+n.owneriddescs:"",t.M_TN_StrataChangeOwner.occupantidLabel=null!=t.M_TN_StrataChangeOwner.occupantid&&""!=t.M_TN_StrataChangeOwner.occupantid?n.occupantid+t.separator+n.name:"",t.IEBy.Input=n.userinput,t.IEBy.Edit=n.useredit}})}},beforeCreate:function(){},created:function(){this.$store.commit("setFormType","List"),this.getToolbar().ProcessPS()},beforeMount:function(){},mounted:function(){this.hideSideBarMenu(),this.FormToABSList().doGetList("","eb_getList")},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),i=o,s=a("2877"),c=Object(s["a"])(i,n,r,!1,null,null,null);c.options.__file="TN_StrataChangeOwner.vue";t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0a34a0.80c5d78d.js.map