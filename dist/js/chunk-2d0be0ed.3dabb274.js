(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0be0ed"],{"2f47":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ABSListVuex",{attrs:{prop:t.propList,title:t.data.QueryName},on:{rowClicked:t.$parent.rowClicked,rowDblClicked:t.$parent.doDoubleClick,rowLinkClick:t.$parent.rowLink,pageSize:t.$parent.M_PageSize,pagination:t.$parent.M_Pagination,filter:t.$parent.M_Advance_Filter,headTable:t.$parent.M_Head_Table,refreshColumn:t.$parent.refreshColumn}}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[a("span",{directives:[{name:"show",rawName:"v-show",value:t.IEBy.Input&&t.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[t._v("\n                    Input By : "+t._s(t.IEBy.Input)+" | Edit By : "+t._s(t.IEBy.Edit)+" "),a("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),a("b-collapse",{attrs:{id:"collapse1",visible:!0}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[a("b-form",{attrs:{"data-vv-scope":"FormScope_"+t.PageLevel+"_"+t.TabIndex,"data-vv-value-path":"FormScope_"+t.PageLevel+"_"+t.TabIndex}},[a("b-row",{staticStyle:{"padding-left":"10px"}},[a("b-col",{attrs:{md:"12",id:"col-left"}},[a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_trxtype",attrs:{prop:t.PI_trxtype},model:{value:t.M_CB_TransactionTypeMaster.trxtype,callback:function(e){t.$set(t.M_CB_TransactionTypeMaster,"trxtype",e)},expression:"M_CB_TransactionTypeMaster.trxtype"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_descs",attrs:{prop:t.PI_descs},model:{value:t.M_CB_TransactionTypeMaster.descs,callback:function(e){t.$set(t.M_CB_TransactionTypeMaster,"descs",e)},expression:"M_CB_TransactionTypeMaster.descs"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_shortdescs",attrs:{prop:t.PI_shortdescs},model:{value:t.M_CB_TransactionTypeMaster.shortdescs,callback:function(e){t.$set(t.M_CB_TransactionTypeMaster,"shortdescs",e)},expression:"M_CB_TransactionTypeMaster.shortdescs"}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelect2",{ref:"ref_trxclass",attrs:{prop:t.PI_trxclass,value:t.M_CB_TransactionTypeMaster.trxclass,label:t.M_CB_TransactionTypeMaster.trxclassLabel},on:{change:t.OntrxclassChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_debtorcreditoraccountcd",attrs:{prop:t.PI_debtorcreditoraccountcd,value:t.M_CB_TransactionTypeMaster.debtorcreditoraccountcd,label:t.M_CB_TransactionTypeMaster.debtorcreditoraccountcdLabel},on:{change:t.OndebtorcreditoraccountcdChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_roundingaccountcd",attrs:{prop:t.PI_roundingaccountcd,value:t.M_CB_TransactionTypeMaster.roundingaccountcd,label:t.M_CB_TransactionTypeMaster.roundingaccountcdLabel},on:{change:t.OnroundingaccountcdChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_runningcd",attrs:{prop:t.PI_runningcd,value:t.M_CB_TransactionTypeMaster.runningcd,label:t.M_CB_TransactionTypeMaster.runningcdLabel},on:{change:t.OnrunningcdChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_glamortizationrunningcd",attrs:{prop:t.PI_glamortizationrunningcd,value:t.M_CB_TransactionTypeMaster.glamortizationrunningcd,label:t.M_CB_TransactionTypeMaster.glamortizationrunningcdLabel},on:{change:t.OnglamortizationrunningcdChange}})],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_taxcd",attrs:{prop:t.PI_taxcd,value:t.M_CB_TransactionTypeMaster.taxcd,label:t.M_CB_TransactionTypeMaster.taxcdLabel},on:{change:t.OntaxcdChange}})],1)],1),a("b-row",[a("b-col",{directives:[{name:"show",rawName:"v-show",value:t.err3,expression:"err3"}],attrs:{md:"6"}},[a("b-row",{directives:[{name:"show",rawName:"v-show",value:t.err3,expression:"err3"}]},[a("b-col",{attrs:{offset:"4"}},[a("label",{staticClass:"lbl-value-view-form",staticStyle:{color:"red"}},[t._v("  * Tax is Required ")])])],1)],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSinputTextVuex",{ref:"ref_taxbasepercent",attrs:{prop:t.PI_taxbasepercent},on:{input:t.OntaxbasepercentChange},model:{value:t.M_CB_TransactionTypeMaster.taxbasepercent,callback:function(e){t.$set(t.M_CB_TransactionTypeMaster,"taxbasepercent",e)},expression:"M_CB_TransactionTypeMaster.taxbasepercent"}})],1)],1),a("b-row",[a("b-col",{directives:[{name:"show",rawName:"v-show",value:t.err1||t.err2,expression:"err1 || err2"}],attrs:{md:"6"}},[a("b-row",{directives:[{name:"show",rawName:"v-show",value:t.err1,expression:"err1"}]},[a("b-col",{attrs:{offset:"4"}},[a("label",{staticClass:"lbl-value-view-form",staticStyle:{color:"red"}},[t._v(" * Invalid Tax is Based ")])])],1),a("b-row",{directives:[{name:"show",rawName:"v-show",value:t.err2,expression:"err2"}]},[a("b-col",{attrs:{offset:"4"}},[a("label",{staticClass:"lbl-value-view-form",staticStyle:{color:"red"}},[t._v("  * Tax Based is Required ")])])],1)],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("ABSInputSelectList",{ref:"ref_gltrxtype",attrs:{prop:t.PI_gltrxtype,value:t.M_CB_TransactionTypeMaster.gltrxtype,label:t.M_CB_TransactionTypeMaster.gltrxtypeLabel},on:{change:t.OngltrxtypeChange}})],1)],1)],1)],1),a("ABSTAnalysis",{attrs:{prop:t.PTAnalysis}})],1)],1)],1)],1)],1)],1)},c=[],n=a("ade3"),s=(a("ac6a"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{cInsertKey:"",error:!1,err1:!1,err2:!1,err3:!1,FormType:"List",Module:"CB",propList:{initialWhere:"ModuleCd = 'CB'",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"TimeEdit DESC",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_CB_TransactionTypeMaster:{descs1:"",runningcodedescs:"",taxdescs:"",gltrxtypedescs:"",trxtype:"",descs:"",shortdescs:"",trxclass:"M",roundingaccountcd:"",roundingaccountcddescs:"",debtorcreditoraccountcd:"",runningcd:"",taxcd:"",taxbasepercent:"",gltrxtype:"",t0:"",t1:"",t2:"",t3:"",t4:"",t5:"",t6:"",t7:"",t8:"",t9:"",t10:"",t11:"",t12:"",t13:"",t14:"",t15:"",t16:"",t17:"",t18:"",t19:"",t20:"",t21:"",t22:"",t23:"",t24:"",t25:"",t26:"",t27:"",t28:"",t29:"",t30:"",userinput:"",useredit:this.getDataUser().UserId,timeedit:"",glamortizationrunningcddescs:"",glamortizationrunningcd:"",roundingaccountdescs:"",lastupdatestamp:0,rowid:0},PI_trxtype:{cValidate:"required|max:8",cName:"trxtype",cLabel:"Trans. Type",cLabelSize:4,cOrder:1,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_descs:{cValidate:"required|max:60",cName:"descs",cLabel:"Description",cLabelSize:4,cOrder:2,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_shortdescs:{cValidate:"max:30",cName:"shortdescs",cLabel:"Short Description",cLabelSize:4,cOrder:3,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_trxclass:{dataLookUp:null,cValidate:"",cName:"trxclass",cLabel:"Trans. Class",cLabelSize:4,cOrder:4,cKey:!1,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!0,cOption:[{label:"Payment",id:"M"},{label:"Cash Purchase",id:"C"},{label:"Bank Transfer",id:"B"},{label:"Bank Reconcile",id:"R"},{label:"Bank Receipt",id:"T"},{label:"Forex",id:"F"},{label:"Advance Payment",id:"A"},{label:"Advance Received",id:"D"},{label:"PA Settlement",id:"S"}],cMasterUrl:"",cDisplayColumn:""},PI_debtorcreditoraccountcd:{dataLookUp:{LookUpCd:"GetLookupGLAccountCode",ColumnDB:"AccountCd",InitialWhere:"Status = 'A'",ParamWhere:""},cValidate:"",cName:"debtorcreditoraccountcd",cLabel:"Account Code",cKey:!1,cLabelSize:4,cOrder:5,cTriggered:!1,cDefault:"",cProtect:!0,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"GL/GL_ChartOfAccount",cDisplayColumn:"AccountCd,Descs1"},PI_roundingaccountcd:{dataLookUp:{LookUpCd:"GetLookupGLAccountCode",ColumnDB:"AccountCd",InitialWhere:"Status = 'A'",ParamWhere:""},cValidate:"",cName:"roundingaccountcd",cLabel:"Rounding Account Code",cKey:!1,cLabelSize:4,cOrder:6,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"GL/GL_ChartOfAccount",cDisplayColumn:"AccountCd,Descs1"},PI_runningcd:{dataLookUp:{LookUpCd:"GetLookupCMRunningCode",ColumnDB:"RunningCd",InitialWhere:"(ModuleCd IS NULL OR ModuleCd = 'CB')",ParamWhere:""},cValidate:"",cName:"runningcd",cLabel:"Running Code",cKey:!1,cLabelSize:4,cOrder:7,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"CM/CM_RunningCd",cDisplayColumn:"RunningCd,Descs"},PI_glamortizationrunningcd:{dataLookUp:{LookUpCd:"GetLookupCMRunningCode",ColumnDB:"RunningCd",InitialWhere:"(ModuleCd IS NULL OR ModuleCd = 'CB')",ParamWhere:""},cValidate:"",cName:"glamortizationrunningcd",cLabel:"Deposit Allocation Running Code",cKey:!1,cLabelSize:4,cOrder:8,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"CM/CM_RunningCd",cDisplayColumn:"RunningCd,Descs"},PI_taxcd:{dataLookUp:{LookUpCd:"GetLookupCMTaxCode",ColumnDB:"TaxCd",InitialWhere:"",ParamWhere:""},cValidate:"required",cName:"taxcd",cLabel:"Tax",cKey:!1,cLabelSize:4,cOrder:9,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"CM/CM_TaxMaster",cDisplayColumn:"TaxCd, Descs"},PI_taxbasepercent:{cValidate:"required",cName:"taxbasepercent",cLabel:"Tax Based",cLabelSize:4,cOrder:10,cKey:!1,cType:"numeric",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cLastLabel:"%"},PI_gltrxtype:{dataLookUp:{LookUpCd:"GetLookupCMTransTypeMaster",ColumnDB:"TrxType",InitialWhere:"ModuleCd='GL'",ParamWhere:""},cValidate:"",cName:"gltrxtype",cLabel:"GL Trans. Type",cKey:!1,cLabelSize:4,cOrder:11,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"GL/GL_TransactionType",cDisplayColumn:"TrxType,Descs"},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder}}},watch:{},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage1Data}},methods:{OntaxbasepercentChange:function(t){var e=this;this.$nextTick(function(){"VIEW"!=e.inputStatus&&(""==t&&null==t||(e.err2=!1,e.error=!1),t>100?(e.error=!0,e.err1=!0):(e.err1=!1,e.error=!1))})},OndebtorcreditoraccountcdChange:function(t){var e=this;this.$nextTick(function(){e.M_CB_TransactionTypeMaster.debtorcreditoraccountcd=t.id,e.M_CB_TransactionTypeMaster.debtorcreditoraccountcdLabel=t.label,e.inputStatus}),this.$forceUpdate()},OnrunningcdChange:function(t){var e=this;this.$nextTick(function(){e.M_CB_TransactionTypeMaster.runningcd=t.id,e.M_CB_TransactionTypeMaster.runningcdLabel=t.label,e.inputStatus}),this.$forceUpdate()},OnglamortizationrunningcdChange:function(t){var e=this;this.$nextTick(function(){e.M_CB_TransactionTypeMaster.glamortizationrunningcd=t.id,e.M_CB_TransactionTypeMaster.glamortizationrunningcdLabel=t.label,e.inputStatus}),this.$forceUpdate()},OntaxcdChange:function(t){var e=this;this.$nextTick(function(){e.M_CB_TransactionTypeMaster.taxcd=t.id,e.M_CB_TransactionTypeMaster.taxcdLabel=t.label,""==e.M_CB_TransactionTypeMaster.taxcd&&null==e.M_CB_TransactionTypeMaster.taxcd||(e.err3=!1,e.error=!1),e.inputStatus}),this.$forceUpdate()},OngltrxtypeChange:function(t){var e=this;this.$nextTick(function(){e.M_CB_TransactionTypeMaster.gltrxtype=t.id,e.M_CB_TransactionTypeMaster.gltrxtypeLabel=t.label,e.inputStatus}),this.$forceUpdate()},OnroundingaccountcdChange:function(t){var e=this;this.$nextTick(function(){e.M_CB_TransactionTypeMaster.roundingaccountcd=t.id,e.M_CB_TransactionTypeMaster.roundingaccountcdLabel=t.label,e.inputStatus}),this.$forceUpdate()},OntrxclassChange:function(t){var e=this;this.M_CB_TransactionTypeMaster.trxclass=t.id,this.M_CB_TransactionTypeMaster.trxclassLabel=t.label,this.$nextTick(function(){"VIEW"!=e.inputStatus&&("C"==t.id?(e.PI_taxcd.cProtect=!1,e.PI_debtorcreditoraccountcd.cProtect=!0,e.PI_taxbasepercent.cProtect=!1,e.M_CB_TransactionTypeMaster.taxbasepercent="",e.PI_taxcd.cValidate="required",e.PI_debtorcreditoraccountcd.cValidate="",e.PI_taxbasepercent.cValidate="required",e.$refs.ref_taxcd.isRequired=!0,e.$refs.ref_debtorcreditoraccountcd.isRequired=!1,e.$refs.ref_taxbasepercent.isRequired=!0):"A"==t.id?(e.PI_taxcd.cProtect=!0,e.PI_debtorcreditoraccountcd.cProtect=!1,e.PI_taxbasepercent.cProtect=!0,e.M_CB_TransactionTypeMaster.taxbasepercent="100",e.PI_taxcd.cValidate="",e.PI_debtorcreditoraccountcd.cValidate="required",e.PI_taxbasepercent.cValidate="",e.$refs.ref_taxcd.isRequired=!1,e.$refs.ref_debtorcreditoraccountcd.isRequired=!0,e.$refs.ref_taxbasepercent.isRequired=!1):"T"==t.id?(e.PI_taxcd.cProtect=!0,e.PI_debtorcreditoraccountcd.cProtect=!1,e.PI_taxbasepercent.cProtect=!0,e.M_CB_TransactionTypeMaster.taxbasepercent="100",e.PI_taxcd.cValidate="",e.PI_debtorcreditoraccountcd.cValidate="required",e.PI_taxbasepercent.cValidate="",e.$refs.ref_taxcd.isRequired=!1,e.$refs.ref_debtorcreditoraccountcd.isRequired=!0,e.$refs.ref_taxbasepercent.isRequired=!1):(e.PI_taxcd.cProtect=!1,e.PI_debtorcreditoraccountcd.cProtect=!0,e.PI_taxbasepercent.cProtect=!1,e.PI_taxcd.cValidate="required",e.PI_debtorcreditoraccountcd.cValidate="",e.PI_taxbasepercent.cValidate="required",e.$refs.ref_taxcd.isRequired=!0,e.$refs.ref_debtorcreditoraccountcd.isRequired=!1,e.$refs.ref_taxbasepercent.isRequired=!0),e.M_CB_TransactionTypeMaster.trxclass=t.id)}),this.$forceUpdate()},setToolbarButton:function(){},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(t){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(t,e){},rowLink:function(t){this.$refs.modalTest.show()},paramFromParent:function(){},M_Post:function(t){},M_Insert:function(){var t=this;if(!(""!=this.M_CB_TransactionTypeMaster.taxbasepercent&&null!=this.M_CB_TransactionTypeMaster.taxbasepercent||""!=this.M_CB_TransactionTypeMaster.taxcd&&null!=this.M_CB_TransactionTypeMaster.taxcd))return this.error=!0,this.err3=!0,void(this.err2=!0);this.err3=!1,this.err2=!1,this.error=!1;var e={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,TrxType:this.M_CB_TransactionTypeMaster.trxtype,Descs:this.M_CB_TransactionTypeMaster.descs,ShortDescs:this.M_CB_TransactionTypeMaster.shortdescs,TrxClass:this.M_CB_TransactionTypeMaster.trxclass,RoundingAccountCd:""==this.M_CB_TransactionTypeMaster.roundingaccountcd||null==this.M_CB_TransactionTypeMaster.runningaccountcd?"NULL":this.M_CB_TransactionTypeMaster.runningaccountcd,AccountCd:""==this.M_CB_TransactionTypeMaster.debtorcreditoraccountcd||null==this.M_CB_TransactionTypeMaster.debtorcreditoraccountcd?"NULL":this.M_CB_TransactionTypeMaster.debtorcreditoraccountcd,RunningCd:""==this.M_CB_TransactionTypeMaster.runningcd||null==this.M_CB_TransactionTypeMaster.runningcd?"NULL":this.M_CB_TransactionTypeMaster.runningcd,GLAmortizationRunningCd:""==this.M_CB_TransactionTypeMaster.glamortizationrunningcd||null==this.M_CB_TransactionTypeMaster.glamortizationrunningcd?"NULL":this.M_CB_TransactionTypeMaster.glamortizationrunningcd,TaxCd:""==this.M_CB_TransactionTypeMaster.taxcd||null==this.M_CB_TransactionTypeMaster.taxcd?"NULL":this.M_CB_TransactionTypeMaster.taxcd,TaxBasePercent:this.M_CB_TransactionTypeMaster.taxbasepercent,GLTrxType:""==this.M_CB_TransactionTypeMaster.gltrxtype||null==this.M_CB_TransactionTypeMaster.gltrxtype?"NULL":this.M_CB_TransactionTypeMaster.gltrxtype,UserInput:this.getDataUser().UserId};this.postJSON(this.getUrlInsert(),e).then(function(e){null!=e&&t.$parent.resultInsert(e.Message)})},M_Update:function(){var t=this,e={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,TrxType:this.M_CB_TransactionTypeMaster.trxtype,Descs:this.M_CB_TransactionTypeMaster.descs,ShortDescs:this.M_CB_TransactionTypeMaster.shortdescs,TrxClass:this.M_CB_TransactionTypeMaster.trxclass,AccountCd:""==this.M_CB_TransactionTypeMaster.debtorcreditoraccountcd||null==this.M_CB_TransactionTypeMaster.debtorcreditoraccountcd?"NULL":this.M_CB_TransactionTypeMaster.debtorcreditoraccountcd,RoundingAccountCd:""==this.M_CB_TransactionTypeMaster.roundingaccountcd||null==this.M_CB_TransactionTypeMaster.roundingaccountcd?"NULL":this.M_CB_TransactionTypeMaster.roundingaccountcd,RunningCd:""==this.M_CB_TransactionTypeMaster.runningcd||null==this.M_CB_TransactionTypeMaster.runningcd?"NULL":this.M_CB_TransactionTypeMaster.runningcd,GLAmortizationRunningCd:""==this.M_CB_TransactionTypeMaster.glamortizationrunningcd||null==this.M_CB_TransactionTypeMaster.glamortizationrunningcd?"NULL":this.M_CB_TransactionTypeMaster.glamortizationrunningcd,TaxCd:""==this.M_CB_TransactionTypeMaster.taxcd||null==this.M_CB_TransactionTypeMaster.taxcd?"NULL":this.M_CB_TransactionTypeMaster.taxcd,TaxBasePercent:this.M_CB_TransactionTypeMaster.taxbasepercent,GLTrxType:""==this.M_CB_TransactionTypeMaster.gltrxtype||null==this.M_CB_TransactionTypeMaster.gltrxtype?"NULL":this.M_CB_TransactionTypeMaster.gltrxtype,UserEdit:this.getDataUser().UserId,LastUpdateStamp:this.M_CB_TransactionTypeMaster.lastupdatestamp};this.postJSON(this.getUrlUpdate(),e).then(function(e){null!=e&&t.$parent.resultUpdate(e.Message)})},M_ClearForm:function(){this.M_CB_TransactionTypeMaster={descs1:"",runningcodedescs:"",taxdescs:"",gltrxtypedescs:"",trxtype:"",descs:"",shortdescs:"",trxclass:"M",roundingaccountcd:"",roundingaccountcddescs:"",debtorcreditoraccountcd:"",runningcd:"",taxcd:"",taxbasepercent:"",gltrxtype:"",t0:"",t1:"",t2:"",t3:"",t4:"",t5:"",t6:"",t7:"",t8:"",t9:"",t10:"",t11:"",t12:"",t13:"",t14:"",t15:"",t16:"",t17:"",t18:"",t19:"",t20:"",t21:"",t22:"",t23:"",t24:"",t25:"",t26:"",t27:"",t28:"",t29:"",t30:"",userinput:"",useredit:this.getDataUser().UserId,timeedit:"",glamortizationrunningcddescs:"",glamortizationrunningcd:"",roundingaccountdescs:"",lastupdatestamp:0,rowid:0}},M_New:function(){this.$refs.ref_trxtype.focus()},M_Edit:function(){this.$refs.ref_shortdescs.focus(),"M"==this.M_CB_TransactionTypeMaster.trxclass||"D"==this.M_CB_TransactionTypeMaster.trxclass||"B"==this.M_CB_TransactionTypeMaster.trxclass||"C"==this.M_CB_TransactionTypeMaster.trxclass||"S"==this.M_CB_TransactionTypeMaster.trxclass?(this.PI_debtorcreditoraccountcd.cProtect=!0,this.PI_taxcd.cProtect=!1,this.PI_taxbasepercent.cProtect=!1):"T"==this.M_CB_TransactionTypeMaster.trxclass&&(this.PI_taxcd.cProtect=!0,this.PI_taxbasepercent.cProtect=!0,this.PI_debtorcreditoraccountcd.cProtect=!1)},M_Delete:function(t){var e=this,a=this.FormToABSList().getRowSelected(),r=[];a.forEach(function(t){r.push({TrxType:t.TrxType,LastUpdateStamp:t.LastUpdateStamp,_Message_:""})});var c={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:r};this.postJSONMulti(this.getUrlNewDeleteMulti(),c).then(function(t){null!=t&&e.$parent.resultDelete()})},getDataBy:function(t){var e=this,a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,trxtype:t.TrxType};this.postEncode(this.getUrlById(),a).then(function(a){var r;if(null!=a){var c=a.Data[0];e.M_CB_TransactionTypeMaster=(r={descs1:c.descs1,runningcodedescs:c.runningcodedescs,taxdescs:c.taxdescs,gltrxtypedescs:c.gltrxtypedescs,trxtype:c.trxtype,descs:c.descs,shortdescs:c.shortdescs,trxclass:c.trxclass,roundingaccountcd:c.roundingaccountcd,debtorcreditoraccountcd:c.debtorcreditoraccountcd,runningcd:c.runningcd,roundingaccountdescs:c.roundingaccountdescs,taxcd:c.taxcd,taxbasepercent:c.taxbasepercent,gltrxtype:c.gltrxtype,t0:c.t0,t1:c.t1,t2:c.t2,t3:c.t3,t4:c.t4,t5:c.t5,t6:c.t6,t7:c.t7,t8:c.t8,t9:c.t9,t10:c.t10,t11:c.t11,t12:c.t12,t13:c.t13,t14:c.t14,t15:c.t15,t16:c.t16,t17:c.t17,t18:c.t18,t19:c.t19,t20:c.t20,t21:c.t21,t22:c.t22,t23:c.t23,t24:c.t24,t25:c.t25,t26:c.t26,t27:c.t27,t28:c.t28,t29:c.t29,t30:c.t30,userinput:c.userinput,useredit:c.useredit,timeedit:c.timeedit,glamortizationrunningcddescs:c.glamortizationrunningcddescs,glamortizationrunningcd:c.glamortizationrunningcd},Object(n["a"])(r,"roundingaccountdescs",c.roundingaccountdescs),Object(n["a"])(r,"lastupdatestamp",t.LastUpdateStamp),Object(n["a"])(r,"rowid",c.rowid),r),e.M_CB_TransactionTypeMaster.debtorcreditoraccountcdLabel=null!=e.M_CB_TransactionTypeMaster.debtorcreditoraccountcd&&""!=e.M_CB_TransactionTypeMaster.debtorcreditoraccountcd?c.debtorcreditoraccountcd+e.separator+c.descs1:"",e.M_CB_TransactionTypeMaster.runningcdLabel=null!=e.M_CB_TransactionTypeMaster.runningcd&&""!=e.M_CB_TransactionTypeMaster.runningcd?c.runningcd+e.separator+c.runningcodedescs:"",e.M_CB_TransactionTypeMaster.glamortizationrunningcdLabel=null!=e.M_CB_TransactionTypeMaster.glamortizationrunningcd&&""!=e.M_CB_TransactionTypeMaster.glamortizationrunningcd?c.glamortizationrunningcd+e.separator+c.glamortizationrunningcddescs:"",e.M_CB_TransactionTypeMaster.taxcdLabel=null!=e.M_CB_TransactionTypeMaster.taxcd&&""!=e.M_CB_TransactionTypeMaster.taxcd?c.taxcd+e.separator+c.taxdescs:"",e.M_CB_TransactionTypeMaster.gltrxtypeLabel=null!=e.M_CB_TransactionTypeMaster.gltrxtype&&""!=e.M_CB_TransactionTypeMaster.gltrxtype?c.gltrxtype+e.separator+c.gltrxtypedescs:"",e.M_CB_TransactionTypeMaster.roundingaccountcdLabel=null!=e.M_CB_TransactionTypeMaster.roundingaccountcd&&""!=e.M_CB_TransactionTypeMaster.roundingaccountcd?c.roundingaccountcd+e.separator+c.roundingaccountdescs:"","C"==c.trxclass?(e.PI_taxcd.cProtect=!1,e.PI_debtorcreditoraccountcd.cProtect=!0,e.PI_taxbasepercent.cProtect=!1,e.PI_taxcd.cValidate="required",e.PI_debtorcreditoraccountcd.cValidate="",e.PI_taxbasepercent.cValidate="required"):"A"==c.trxclass?(e.PI_taxcd.cProtect=!0,e.PI_debtorcreditoraccountcd.cProtect=!1,e.PI_taxbasepercent.cProtect=!0,e.PI_taxcd.cValidate="",e.PI_debtorcreditoraccountcd.cValidate="required",e.PI_taxbasepercent.cValidate=""):"T"==c.trxclass?(e.PI_taxcd.cProtect=!0,e.PI_debtorcreditoraccountcd.cProtect=!1,e.PI_taxbasepercent.cProtect=!0,e.PI_taxcd.cValidate="",e.PI_debtorcreditoraccountcd.cValidate="required",e.PI_taxbasepercent.cValidate=""):(e.PI_taxcd.cProtect=!1,e.PI_debtorcreditoraccountcd.cProtect=!0,e.PI_taxbasepercent.cProtect=!1,e.PI_taxcd.cValidate="required",e.PI_debtorcreditoraccountcd.cValidate="",e.PI_taxbasepercent.cValidate="required"),e.IEBy.Input=c.userinput,e.IEBy.Edit=c.useredit}})}},beforeCreate:function(){},created:function(){this.$store.commit("setFormType","List"),this.getToolbar().ProcessPS()},beforeMount:function(){},mounted:function(){this.hideSideBarMenu(),this.FormToABSList().doGetList("","eb_getList")},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),i=s,o=a("2877"),d=Object(o["a"])(i,r,c,!1,null,null,null);d.options.__file="CB_TransactionTypeMaster.vue";e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0be0ed.3dabb274.js.map