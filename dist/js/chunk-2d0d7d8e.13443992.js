(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d7d8e"],{"790f":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ABSListVuex",{attrs:{prop:t.propList,title:t.data.QueryName},on:{rowClicked:t.$parent.rowClicked,rowDblClicked:t.$parent.doDoubleClick,rowLinkClick:t.$parent.rowLink,pageSize:t.$parent.M_PageSize,pagination:t.$parent.M_Pagination,filter:t.$parent.M_Advance_Filter,headTable:t.$parent.M_Head_Table,refreshColumn:t.$parent.refreshColumn}}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[a("span",{directives:[{name:"show",rawName:"v-show",value:t.IEBy.Input&&t.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[t._v("\n                    Input By : "+t._s(t.IEBy.Input)+" | Edit By : "+t._s(t.IEBy.Edit)+" "),a("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),a("b-collapse",{attrs:{id:"collapse1",visible:!0}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[a("b-form",{attrs:{"data-vv-scope":"FormScope_"+t.PageLevel+"_"+t.TabIndex,"data-vv-value-path":"FormScope_"+t.PageLevel+"_"+t.TabIndex}},[a("b-row",{staticStyle:{"padding-left":"10px"}},[a("b-col",{attrs:{md:"12",id:"col-left"}},[a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_descs",attrs:{prop:t.PI_descs},model:{value:t.M_AR_BadDebtor.descs,callback:function(e){t.$set(t.M_AR_BadDebtor,"descs",e)},expression:"M_AR_BadDebtor.descs"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_amount",attrs:{prop:t.PI_amount},model:{value:t.M_AR_BadDebtor.amount,callback:function(e){t.$set(t.M_AR_BadDebtor,"amount",e)},expression:"M_AR_BadDebtor.amount"}})],1)],1)],1)],1),a("ABSTAnalysis",{attrs:{prop:t.PTAnalysis}})],1)],1)],1)],1)],1)],1)},i=[],s=(a("ac6a"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{DataRow:null,ValKey:null,FormType:"List",Module:"AR",propList:{initialWhere:"SubPortfolioCd= '"+this.getDataUser().SubPortfolioCd+"' And DebtorCd='"+this.ValKey+"'",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_AR_BadDebtor:{descs:"",amount:"0",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",contactid:"",subportfoliocd:this.getDataUser().SubPortfolioCd,debtorcd:"",sequenceno:0,lastupdatestamp:0,rowid:0},PI_descs:{cValidate:"required|max:60",cName:"descs",cLabel:"Description",cLabelSize:4,cOrder:1,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_amount:{cValidate:"max:60",cName:"amount",cLabel:"Amount",cLabelSize:4,cOrder:2,cKey:!1,cType:"decimal",cDecimal:2,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage2Data},DataRowPage1:function(){return this.$store.getters.GetPage1Data}},methods:{setToolbarButton:function(){},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(t){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(t,e){},rowLink:function(t){this.$refs.modalTest.show()},paramFromParent:function(){this.$parent.showForm=!1;var t=this.$store.getters.GetPage1Data;this.DataRow=t,this.M_AR_BadDebtor.debtorcd=t.DebtorCd,this.M_AR_BadDebtor.contactid=t.ContactID,this.propList.initialWhere=" DebtorCd = '"+t.DebtorCd+"' AND SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' ",this.FormToABSList().doGetList("","eb_getList")},M_Insert:function(){var t=this,e={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,ContactId:this.DataRow.ContactID,SubPortfolioCd:this.getDataUser().SubPortfolioCd,DebtorCd:this.DataRow.DebtorCd,Descs:this.M_AR_BadDebtor.descs,Amount:this.M_AR_BadDebtor.amount?this.replaceAllString(this.M_AR_BadDebtor.amount,",","","number"):0,UserInput:this.getDataUser().UserId};this.postJSON(this.getUrlInsert(),e).then(function(e){null!=e&&t.$parent.resultInsert(e.Message)})},M_Update:function(){var t=this,e={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,ContactId:this.DataRow.ContactID,SubPortfolioCd:this.getDataUser().SubPortfolioCd,SequenceNo:this.M_AR_BadDebtor.sequenceno,DebtorCd:this.DataRow.DebtorCd,Descs:this.M_AR_BadDebtor.descs,Amount:this.M_AR_BadDebtor.amount?this.replaceAllString(this.M_AR_BadDebtor.amount,",","","number"):0,UserEdit:this.getDataUser().UserId,LastUpdateStamp:this.M_AR_BadDebtor.lastupdatestamp};this.postJSON(this.getUrlUpdate(),e).then(function(e){null!=e&&t.$parent.resultUpdate(e.Message)})},M_ClearForm:function(){this.M_AR_BadDebtor={descs:"",amount:"0",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",contactid:"",subportfoliocd:this.getDataUser().SubPortfolioCd,debtorcd:"",sequenceno:0,lastupdatestamp:0,rowid:0}},M_New:function(){var t=this.$store.getters.GetPage1Data;this.M_AR_BadDebtor.debtorcd=t.DebtorCd,this.M_AR_BadDebtor.contactid=t.ContactID},M_Edit:function(){},M_Delete:function(t){var e=this,a=this.FormToABSList().getRowSelected(),o=[];a.forEach(function(t){o.push({SubPortfolioCd:t.SubPortfolioCd,SequenceNo:t.SequenceNo,LastUpdateStamp:t.LastUpdateStamp,_Message_:""})});var i={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:o};this.postJSONMulti(this.getUrlNewDeleteMulti(),i).then(function(t){null!=t&&e.$parent.resultDelete()})},getDataBy:function(t){var e=this,a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,contactid:t.ContactId,SubPortfolioCd:this.getDataUser().SubPortfolioCd,sequenceno:t.SequenceNo,debtorcd:t.DebtorCd};this.postEncode(this.getUrlById(),a).then(function(a){if(null!=a){var o=a.Data[0];console.log(o),e.M_AR_BadDebtor={descs:o.descs,amount:o.amount,userinput:o.userinput,useredit:o.useredit,timeinput:o.timeinput,timeedit:o.timeedit,contactid:o.contactid,subportfoliocd:o.subportfoliocd,debtorcd:o.debtorcd,sequenceno:t.SequenceNo,lastupdatestamp:t.LastUpdateStamp,rowid:o.rowid},e.IEBy.Input=o.userinput,e.IEBy.Edit=o.useredit}})}},created:function(){},beforeMount:function(){},mounted:function(){this.hideSideBarMenu()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),r=s,n=a("2877"),d=Object(n["a"])(r,o,i,!1,null,null,null);d.options.__file="AR_BadDebtor.vue";e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0d7d8e.13443992.js.map