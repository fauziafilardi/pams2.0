(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bce22"],{"2a41":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[a("span",{directives:[{name:"show",rawName:"v-show",value:t.IEBy.Input&&t.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[t._v("\n                    Input By : "+t._s(t.IEBy.Input)+" | Edit By : "+t._s(t.IEBy.Edit)+" "),a("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),a("b-collapse",{attrs:{id:"collapse1",visible:!0}},[a("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[a("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[a("b-form",{attrs:{"data-vv-scope":"FormScope_"+t.PageLevel+"_"+t.TabIndex,"data-vv-value-path":"FormScope_"+t.PageLevel+"_"+t.TabIndex},on:{submit:function(t){t.preventDefault()}}},[a("b-row",{staticStyle:{"padding-left":"10px"}},[a("b-col",{attrs:{md:"12",id:"col-left"}},[a("b-row",{staticStyle:{"padding-left":"10px"}},[a("b-col",{attrs:{md:"12",id:"col-left"}},[a("b-row",{staticStyle:{"padding-top":"10px","padding-right":"10px","padding-left":"25px","padding-bottom":"10px"}},[t._v("\n                                        Subportfolio : "+t._s(t.subportfolio)+"\n                                    ")]),a("b-row",[a("b-col",{staticStyle:{"padding-right":"15px !important"},attrs:{md:"4"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],ref:"ref_search",staticClass:"form-control text-field-form",staticStyle:{"margin-left":"20px !important"},attrs:{type:"text",placeholder:"Search...",autofocus:"",autocomplete:"off",disabled:t.ButtonDisabled},domProps:{value:t.search},on:{keyup:t.onSearchEnter,input:function(e){e.target.composing||(t.search=e.target.value)}}})])],1),a("b-row",{staticStyle:{"padding-top":"10px","padding-right":"10px","padding-left":"20px","padding-bottom":"10px"}},[a("b-col",{attrs:{md:"4"}},[t._v("\n                                        Address Code Available Option(s)\n                                        "),a("ABSMultiSelect",{staticClass:"selectCustom",attrs:{options:t.leftDataOptions,size:"10",disabled:t.isDisabled},model:{value:t.leftData,callback:function(e){t.leftData=e},expression:"leftData"}})],1),a("b-col",{staticStyle:{padding:"120px 8px"},attrs:{md:"1"}},[a("b-button",{staticStyle:{width:"50px"},attrs:{id:"satu",disabled:t.ButtonDisabled,size:"sm",variant:"primary"},on:{click:t.moveAllToRight}},[t._v("\n                                            >>\n                                        ")]),a("br"),a("b-button",{staticStyle:{width:"50px","margin-top":"10px"},attrs:{disabled:t.ButtonDisabled,size:"sm",variant:"primary"},on:{click:t.moveToRight}},[t._v("\n                                            >\n                                        ")]),a("br"),a("b-button",{staticStyle:{width:"50px","margin-top":"10px"},attrs:{disabled:t.ButtonDisabled,size:"sm",variant:"primary"},on:{click:t.moveToLeft}},[t._v("\n                                            <\n                                        ")]),a("br"),a("b-button",{staticStyle:{width:"50px","margin-top":"10px"},attrs:{disabled:t.ButtonDisabled,size:"sm",variant:"primary"},on:{click:t.moveAllToLeft}},[t._v("\n                                            <<\n                                        ")])],1),a("b-col",{attrs:{md:"4"}},[t._v("\n                                        Address Code Selected Option(s)\n                                        "),a("ABSMultiSelect",{staticClass:"selectCustom",attrs:{options:t.rightDataOptions,size:"10",disabled:t.isDisabled},model:{value:t.rightData,callback:function(e){t.rightData=e},expression:"rightData"}})],1)],1)],1)],1)],1)],1),a("ABSTAnalysis",{attrs:{prop:t.PTAnalysis}})],1)],1)],1)],1)],1)])},i=[],o=(a("ac6a"),a("386d"),a("cadf"),a("551c"),a("097d"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{ValKey:null,FormType:"Form",Module:"CM",subportfolio:"",allDataOptions:[],leftData:[],leftDataOptions:[],rightData:[],rightDataOptions:[],search:"",DataRow:[],isCanLoad:!0,IEBy:{Input:"",Edit:""},M_CM_AssignAddressToSubPortfolioRegistration:{sequenceregistrationno:"",addresscd:"",billingstatus:"",mailingstatus:"",taxstatus:"",rentalbillingstatus:"",servicechargestatus:"",meterutilitystatus:"",addresstype:"",salutationcd:"",attention:"",address1:"",address2:"",address3:"",address4:"",mainaddressstatus:"",email:"",citycd:"",zipcode:"",phoneno:"",faxno:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:0,controlsequenceno:0,idno:"",passportno:"",rowid:0,salutationdescs:"",citydescs:"",debtorcd:""},PI_Search:{cValidate:"",cName:"search",cLabel:"",cLabelSize:4,cOrder:1,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder}}},watch:{leftDataOptions:function(t,e){this.tempLeftFilter=t}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage2Data},DataRowPage1:function(){return this.$store.getters.GetPage1Data},ButtonDisabled:function(){return!(this.isCanLoad=!0)}},methods:{GetCMSpecification:function(){var t=this,e={OptionFunctionCd:"GetCMSpecification",ModuleCd:this.Module};this.FnDynamicFunction(e).then(function(e){if(null!=e){var a=e[0];"Y"==a.ContactApproval?(t.isCanLoad=!0,t.$store.commit("setFormType","Form"),t.FormType="Form",t.getToolbar().ProcessPS()):(t.isCanLoad=!1,t.FormType="View",t.$store.commit("setFormType","View"),t.getToolbar().ProcessPS())}})},onSearchEnter:function(t){13===t.keyCode&&this.getRightColumn(this.search)},getDataList:function(t){var e=this,a={OptionSeq:this.getOptionSeq().OptionSeq,UserId:this.getDataUser().UserId,PortfolioCd:this.getDataUser().PortfolioCd,SubPortfolioCd:this.getDataUser().SubPortfolioCd,SequenceRegistrationNo:this.DataRowPage1.SequenceRegistrationNo,LineNo:7,InitialWhere:t&&""!=t?"AddressCd like '%"+t+"%'":"",ParamView:"'"+this.getDataUser().SubPortfolioCd+"', '"+this.DataRowPage1.SequenceRegistrationNo+"'",SortField:"AddressCd"};this.postEncode(this.getUrlDataList(),a).then(function(t){if(e.$store.commit("setStatusLoader",!1),null!=t){e.allDataOptions=t.Data,e.leftDataOptions=[];for(var a=!1,s=0;s<e.allDataOptions.length;s++){a=!1;for(var i=0;i<e.rightDataOptions.length;i++)if(e.allDataOptions[s].AddressCd==e.rightDataOptions[i].value){a=!0;break}0==a&&e.leftDataOptions.push({value:e.allDataOptions[s].AddressCd,key:e.allDataOptions[s].AddressCd})}e.$forceUpdate()}})},getAllColumn:function(){var t=this,e={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:7,SubPortfolioCd:this.getDataUser().SubPortfolioCd,SequenceRegistrationNo:this.DataRowPage1.SequenceRegistrationNo};this.postEncode(this.getUrlById(),e).then(function(e){if(t.$store.commit("setStatusLoader",!1),null!=e){t.allDataOptions=e.Data,t.leftDataOptions=[];for(var a=!1,s=0;s<t.allDataOptions.length;s++){a=!1;for(var i=0;i<t.rightDataOptions.length;i++)if(t.allDataOptions[s].AddressCd==t.rightDataOptions[i].value){a=!0;break}0==a&&t.leftDataOptions.push({value:t.allDataOptions[s].addresscd,key:t.allDataOptions[s].addresscd})}t.$forceUpdate()}})},getRightColumn:function(t){var e=this;this.$store.commit("setStatusLoader",!0);var a={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:3,SubPortfolioCd:this.getDataUser().SubPortfolioCd,SequenceRegistrationNo:this.DataRowPage1.SequenceRegistrationNo};this.postEncode(this.getUrlById(),a).then(function(a){if(null!=a){var s=a.Data;e.rightDataOptions=[];for(var i=0;i<s.length;i++)e.rightDataOptions.push({value:s[i].addresscd,key:s[i].addresscd,RowId:s[i].addresscd});e.getDataList(t)}})},moveAllToRight:function(){for(var t=0;t<this.leftDataOptions.length;t++){var e=this.leftDataOptions[t];this.rightDataOptions.push({value:e.value,key:e.key,RowId:e.RowId})}this.leftDataOptions=[],this.$forceUpdate()},moveToRight:function(){for(var t=0;t<this.leftData.length;t++){for(var e,a=-1,s=0;s<this.leftDataOptions.length;s++)this.leftData[t]==this.leftDataOptions[s].value&&(e=this.leftDataOptions[s],a=s);this.rightDataOptions.push({value:e.value,key:e.key,RowId:e.RowId}),this.leftDataOptions.splice(a,1)}this.$forceUpdate()},moveToLeft:function(){for(var t=0;t<this.rightData.length;t++){for(var e,a=-1,s=0;s<this.rightDataOptions.length;s++)this.rightData[t]==this.rightDataOptions[s].value&&(e=this.rightDataOptions[s],a=s);this.leftDataOptions.push({value:e.value,key:e.key,RowId:e.RowId}),this.rightDataOptions.splice(a,1)}this.$forceUpdate()},moveAllToLeft:function(){for(var t=0;t<this.rightDataOptions.length;t++){var e=this.rightDataOptions[t];this.leftDataOptions.push({value:e.value,key:e.key,RowId:e.RowId})}this.rightDataOptions=[],this.$forceUpdate()},setToolbarButton:function(){this.isCanLoad?(this.getToolbar().isNew=!0,this.getToolbar().statusFunction[6].disabled=!1,this.getToolbar().statusFunction[7].disabled=!0,this.getToolbar().isByPassCancel=!0):this.getToolbar().isByPassCancel=!1},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(t){},M_Refresh:function(){},M_Cancel:function(){this.getRightColumn("")},doDoubleClick:function(){},rowClicked:function(t,e){},rowLink:function(t){this.$refs.modalTest.show()},paramFromParent:function(){var t=this.$store.getters.GetPage1Data;this.DataRow=t,"New"!=t.Status?(this.getToolbar().statusFunction[5].disabled=!0,this.getToolbar().statusFunction[6].disabled=!0,this.isDisabled=!0):(this.getToolbar().statusFunction[5].disabled=!1,this.getToolbar().statusFunction[6].disabled=!1,this.isDisabled=!1),this.getRightColumn(""),this.GetCMSpecification()},M_Insert:function(){for(var t=this,e=[],a=[],s=[],i=0;i<this.leftDataOptions.length;i++)a.push({_Method_:"DELETE",_LineNo_:this.$parent.data.PageOrder,SubportfoliCd:this.getDataUser().SubPortfolioCd,SequenceRegistrationNo:this.DataRow.SequenceRegistrationNo,AddressCd:this.leftDataOptions[i].value});for(var o=0;o<this.rightDataOptions.length;o++)s.push({_Method_:"SAVE",_LineNo_:this.$parent.data.PageOrder,SubportfoliCd:this.getDataUser().SubPortfolioCd,SequenceRegistrationNo:this.DataRow.SequenceRegistrationNo,AddressCd:this.rightDataOptions[o].value,UserInput:this.getDataUser().UserId});e.push({A_Looping:a,B_Looping:s});var n={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:e};this.postJSONMulti(this.getUrlProsesDataPostMulti(),n).then(function(e){null!=e&&t.alertSuccess("Success...!")})},M_Update:function(){var t=this,e={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder};this.postJSON(this.getUrlUpdate(),e).then(function(e){null!=e&&t.$parent.resultUpdate(e.Message)})},M_ClearForm:function(){this.M_CM_AssignAddressToSubPortfolioRegistration={sequenceregistrationno:"",addresscd:"",billingstatus:"",mailingstatus:"",taxstatus:"",rentalbillingstatus:"",servicechargestatus:"",meterutilitystatus:"",addresstype:"",salutationcd:"",attention:"",address1:"",address2:"",address3:"",address4:"",mainaddressstatus:"",email:"",citycd:"",zipcode:"",phoneno:"",faxno:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:0,controlsequenceno:0,idno:"",passportno:"",rowid:0,salutationdescs:"",citydescs:"",debtorcd:""}},M_New:function(){this.$refs.ref_search.focus()},M_Edit:function(){this.$refs.ref_search.focus()},M_Delete:function(t){var e=this,a=this.FormToABSList().getRowSelected(),s=[];a.forEach(function(t){s.push({LastUpdateStamp:t.LastUpdateStamp,_Message_:""})});var i={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:s};this.postJSONMulti(this.getUrlNewDeleteMulti(),i).then(function(t){null!=t&&e.$parent.resultDelete()})},getDataBy:function(t){}},created:function(){this.subportfolio=this.getDataUser().label},beforeMount:function(){},mounted:function(){this.hideSideBarMenu()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),n=o,r=a("2877"),l=Object(r["a"])(n,s,i,!1,null,null,null);l.options.__file="CM_AssignAddressToSubPortfolioRegistration.vue";e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0bce22.aef9fd65.js.map