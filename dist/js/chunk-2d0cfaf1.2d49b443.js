(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cfaf1"],{6584:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("ABSListVuex",{attrs:{prop:t.propList,title:t.data.QueryName},on:{rowClicked:t.$parent.rowClicked,rowDblClicked:t.$parent.doDoubleClick,rowLinkClick:t.$parent.rowLink,pageSize:t.$parent.M_PageSize,pagination:t.$parent.M_Pagination,filter:t.$parent.M_Advance_Filter,headTable:t.$parent.M_Head_Table,refreshColumn:t.$parent.refreshColumn}}),s("div",{directives:[{name:"show",rawName:"v-show",value:t.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[s("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[s("span",{directives:[{name:"show",rawName:"v-show",value:t.IEBy.Input&&t.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[t._v("\n                    Input By : "+t._s(t.IEBy.Input)+" | Edit By : "+t._s(t.IEBy.Edit)+" "),s("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),s("b-collapse",{attrs:{id:"collapse1",visible:!0}},[s("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[s("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[s("b-form",{attrs:{"data-vv-scope":"FormScope_"+t.PageLevel+"_"+t.TabIndex,"data-vv-value-path":"FormScope_"+t.PageLevel+"_"+t.TabIndex}},[s("b-row",{staticStyle:{"padding-left":"10px"}},[s("b-col",{attrs:{md:"12",id:"col-left"}},[s("b-row",[s("b-col",{attrs:{md:"6"}},[s("ABSinputTextVuex",{ref:"ref_addresscd",attrs:{prop:t.PI_addresscd},model:{value:t.M_CM_ContactAddressRegistration.addresscd,callback:function(e){t.$set(t.M_CM_ContactAddressRegistration,"addresscd",e)},expression:"M_CM_ContactAddressRegistration.addresscd"}})],1),s("b-col",{attrs:{md:"6"}},[s("ABSinputTextVuex",{ref:"ref_idno",attrs:{prop:t.PI_idno},model:{value:t.M_CM_ContactAddressRegistration.idno,callback:function(e){t.$set(t.M_CM_ContactAddressRegistration,"idno",e)},expression:"M_CM_ContactAddressRegistration.idno"}})],1)],1),s("b-row",[s("b-col",{attrs:{md:"6"}},[s("ABSinputCheckBox",{ref:"ref_addresscategory",attrs:{prop:t.PI_addresscategory},on:{input:t.OnaddresscategoryChange},model:{value:t.M_CM_ContactAddressRegistration.addresscategory,callback:function(e){t.$set(t.M_CM_ContactAddressRegistration,"addresscategory",e)},expression:"M_CM_ContactAddressRegistration.addresscategory"}})],1),s("b-col",{attrs:{md:"6"}},[s("ABSinputTextVuex",{ref:"ref_passportno",attrs:{prop:t.PI_passportno},model:{value:t.M_CM_ContactAddressRegistration.passportno,callback:function(e){t.$set(t.M_CM_ContactAddressRegistration,"passportno",e)},expression:"M_CM_ContactAddressRegistration.passportno"}})],1)],1),s("b-row",[s("b-col",{attrs:{md:"6"}},[s("ABSinputRadioButtonVuex",{ref:"ref_addresstype",attrs:{prop:t.PI_addresstype},on:{input:t.OnaddresstypeChange},model:{value:t.M_CM_ContactAddressRegistration.addresstype,callback:function(e){t.$set(t.M_CM_ContactAddressRegistration,"addresstype",e)},expression:"M_CM_ContactAddressRegistration.addresstype"}})],1)],1),s("b-row",[s("b-col",{attrs:{md:"6"}},[s("ABSInputSelectList",{ref:"ref_salutationcd",attrs:{prop:t.PI_salutationcd,value:t.M_CM_ContactAddressRegistration.salutationcd,label:t.M_CM_ContactAddressRegistration.salutationcdLabel},on:{change:t.OnsalutationcdChange}})],1)],1),s("b-row",[s("b-col",{attrs:{md:"6"}},[s("ABSinputTextVuex",{ref:"ref_attention",attrs:{prop:t.PI_attention},model:{value:t.M_CM_ContactAddressRegistration.attention,callback:function(e){t.$set(t.M_CM_ContactAddressRegistration,"attention",e)},expression:"M_CM_ContactAddressRegistration.attention"}})],1)],1),s("b-row",[s("b-col",{attrs:{md:"6"}},[s("ABSinputTextVuex",{ref:"ref_address1",attrs:{prop:t.PI_address1},model:{value:t.M_CM_ContactAddressRegistration.address1,callback:function(e){t.$set(t.M_CM_ContactAddressRegistration,"address1",e)},expression:"M_CM_ContactAddressRegistration.address1"}})],1)],1),s("b-row",[s("b-col",{attrs:{md:"6"}},[s("ABSinputTextVuex",{ref:"ref_address2",attrs:{prop:t.PI_address2},model:{value:t.M_CM_ContactAddressRegistration.address2,callback:function(e){t.$set(t.M_CM_ContactAddressRegistration,"address2",e)},expression:"M_CM_ContactAddressRegistration.address2"}})],1)],1),s("b-row",[s("b-col",{attrs:{md:"6"}},[s("ABSinputTextVuex",{ref:"ref_address3",attrs:{prop:t.PI_address3},model:{value:t.M_CM_ContactAddressRegistration.address3,callback:function(e){t.$set(t.M_CM_ContactAddressRegistration,"address3",e)},expression:"M_CM_ContactAddressRegistration.address3"}})],1)],1),s("b-row",[s("b-col",{attrs:{md:"6"}},[s("ABSinputTextVuex",{ref:"ref_address4",attrs:{prop:t.PI_address4},model:{value:t.M_CM_ContactAddressRegistration.address4,callback:function(e){t.$set(t.M_CM_ContactAddressRegistration,"address4",e)},expression:"M_CM_ContactAddressRegistration.address4"}})],1)],1),s("b-row",[s("b-col",{attrs:{md:"6"}},[s("ABSinputTextVuex",{ref:"ref_zipcode",attrs:{prop:t.PI_zipcode},model:{value:t.M_CM_ContactAddressRegistration.zipcode,callback:function(e){t.$set(t.M_CM_ContactAddressRegistration,"zipcode",e)},expression:"M_CM_ContactAddressRegistration.zipcode"}})],1)],1),s("b-row",[s("b-col",{attrs:{md:"6"}},[s("ABSInputSelectList",{ref:"ref_citycd",attrs:{prop:t.PI_citycd,value:t.M_CM_ContactAddressRegistration.citycd,label:t.M_CM_ContactAddressRegistration.citycdLabel},on:{change:t.OncitycdChange}})],1)],1),s("b-row",[s("b-col",{attrs:{md:"6"}},[s("ABSinputTextVuex",{ref:"ref_phoneno",attrs:{prop:t.PI_phoneno},model:{value:t.M_CM_ContactAddressRegistration.phoneno,callback:function(e){t.$set(t.M_CM_ContactAddressRegistration,"phoneno",e)},expression:"M_CM_ContactAddressRegistration.phoneno"}})],1)],1),s("b-row",[s("b-col",{attrs:{md:"6"}},[s("ABSinputTextVuex",{ref:"ref_faxno",attrs:{prop:t.PI_faxno},model:{value:t.M_CM_ContactAddressRegistration.faxno,callback:function(e){t.$set(t.M_CM_ContactAddressRegistration,"faxno",e)},expression:"M_CM_ContactAddressRegistration.faxno"}})],1)],1),s("b-row",[s("b-col",{attrs:{md:"6"}},[s("ABSinputTextVuex",{ref:"ref_email",attrs:{prop:t.PI_email},model:{value:t.M_CM_ContactAddressRegistration.email,callback:function(e){t.$set(t.M_CM_ContactAddressRegistration,"email",e)},expression:"M_CM_ContactAddressRegistration.email"}})],1)],1),s("b-row",[s("b-col",{attrs:{md:"6"}},[s("ABSTextAreaVuex",{ref:"ref_remarks",attrs:{prop:t.PI_remarks},on:{input:t.OnremarksChange},model:{value:t.M_CM_ContactAddressRegistration.remarks,callback:function(e){t.$set(t.M_CM_ContactAddressRegistration,"remarks",e)},expression:"M_CM_ContactAddressRegistration.remarks"}})],1)],1)],1)],1),s("ABSTAnalysis",{attrs:{prop:t.PTAnalysis}})],1)],1)],1)],1)],1)],1)},i=[],r=(s("ac6a"),{props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{ValKey:null,FormType:"List",Module:"CM",propList:{initialWhere:"ContactId = '"+this.ValKey+"'",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_CM_ContactAddressRegistration:{contactid:"",addresscd:"",billingstatus:"",mailingstatus:"",taxstatus:"",rentalbillingstatus:"",servicechargestatus:"",meterutilitystatus:"",addresstype:"C",salutationcd:"",attention:"",address1:"",address2:"",address3:"",address4:"",mainaddressstatus:"",email:"",citycd:"",zipcode:"",phoneno:"",faxno:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:0,controlsequenceno:0,idno:"",passportno:"",rowid:0,salutationdescs:"",citydescs:"",debtorcd:"",addresscategory:[]},PI_addresscd:{cValidate:"required|max:5",cName:"addresscd",cLabel:"Address Code",cLabelSize:4,cOrder:1,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_idno:{cValidate:"required|max:20",cName:"idno",cLabel:"NIK",cLabelSize:4,cOrder:2,cKey:!1,cType:"numeric",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_addresscategory:{cValidate:"",cName:"addresscategory",cLabel:"Address Category",cLabelSize:4,cOptions:[{text:"Billing",value:"B"},{text:"Mailling",value:"M"},{text:"Tax",value:"T"}],cOrder:3,cKey:!1,cVisible:!0,cProtect:!1,cDefault:"",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_passportno:{cValidate:"max:20",cName:"passportno",cLabel:"Passport No",cLabelSize:4,cOrder:4,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_addresstype:{cValidate:"",cName:"addresstype",cId:"rdbaddresstype",cRadioOptions:[{text:"Company",value:"C"},{text:"Home",value:"H"},{text:"Other",value:"O"}],cRadioDefaultOption:"",cLabel:"Address Type",cLabelSize:4,cOrder:5,cProtect:!1,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_salutationcd:{dataLookUp:{LookUpCd:"GetLookupCMSalutation",ColumnDB:"SalutationCd",InitialWhere:"",ParamWhere:""},cValidate:"",cName:"salutationcd",cLabel:"Salutation",cKey:!1,cLabelSize:4,cOrder:6,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"CM/CM_Salutation",cDisplayColumn:"SalutationCd,Descs"},PI_attention:{cValidate:"max:50",cName:"attention",cLabel:"Attention",cLabelSize:4,cOrder:7,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_address1:{cValidate:"required|max:50",cName:"address1",cLabel:"Address",cLabelSize:4,cOrder:8,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_address2:{cValidate:"max:50",cName:"address2",cLabel:"",cLabelSize:4,cOrder:9,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_address3:{cValidate:"max:50",cName:"address3",cLabel:"",cLabelSize:4,cOrder:10,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_address4:{cValidate:"max:50",cName:"address4",cLabel:"",cLabelSize:4,cOrder:11,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_zipcode:{cValidate:"max:5",cName:"zipcode",cLabel:"Zip Code",cLabelSize:4,cOrder:12,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_citycd:{dataLookUp:{LookUpCd:"GetLookupCMCity",ColumnDB:"CityCd",InitialWhere:"",ParamWhere:""},cValidate:"",cName:"citycd",cLabel:"City",cKey:!1,cLabelSize:4,cOrder:13,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"CM/CM_CountryCity",cDisplayColumn:"CityCd,Descs"},PI_phoneno:{cValidate:"max:30",cName:"phoneno",cLabel:"Phone",cLabelSize:4,cOrder:14,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_faxno:{cValidate:"max:30",cName:"faxno",cLabel:"Fax",cLabelSize:4,cOrder:15,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_email:{cValidate:"max:50",cName:"email",cLabel:"Email",cLabelSize:4,cOrder:16,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_remarks:{cValidate:"",cName:"remarks",cLabel:"Remarks",cLabelSize:4,cOrder:17,cKey:!1,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage2Data},DataRowPage1:function(){return this.$store.getters.GetPage1Data}},methods:{OnaddresscategoryChange:function(t){var e=this;this.$nextTick(function(){e.inputStatus}),this.$forceUpdate()},OnaddresstypeChange:function(t){var e=this;this.$nextTick(function(){e.inputStatus}),this.$forceUpdate()},OnsalutationcdChange:function(t){var e=this;this.$nextTick(function(){e.M_CM_ContactAddressRegistration.salutationcd=t.id,e.M_CM_ContactAddressRegistration.salutationcdLabel=t.label,e.inputStatus}),this.$forceUpdate()},OncitycdChange:function(t){var e=this;this.$nextTick(function(){e.M_CM_ContactAddressRegistration.citycd=t.id,e.M_CM_ContactAddressRegistration.citycdLabel=t.label,e.inputStatus}),this.$forceUpdate()},OnremarksChange:function(t){var e=this;this.$nextTick(function(){e.inputStatus}),this.$forceUpdate()},setToolbarButton:function(){this.getToolbar().statusFunction[0].disabled=!0,this.getToolbar().statusFunction[1].disabled=!0,this.getToolbar().statusFunction[2].disabled=!0},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(t){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(t,e){},rowLink:function(t){this.$refs.modalTest.show()},paramFromParent:function(){this.$parent.showForm=!1;var t=this.$store.getters.GetPage1Data;this.M_CM_ContactAddressRegistration.sequenceregistrationno=t.SequenceRegistrationNo,this.propList.initialWhere=" SequenceRegistrationNo = '"+t.SequenceRegistrationNo+"' ",this.FormToABSList().doGetList("","eb_getList")},M_Insert:function(){var t=this,e={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,ContactId:this.M_CM_ContactAddressRegistration.contactid,AddressCd:this.M_CM_ContactAddressRegistration.addresscd,BillingStatus:this.M_CM_ContactAddressRegistration.addresscategory.indexOf("B")>=0?"Y":"N",MailingStatus:this.M_CM_ContactAddressRegistration.addresscategory.indexOf("M")>=0?"Y":"N",TaxStatus:this.M_CM_ContactAddressRegistration.addresscategory.indexOf("T")>=0?"Y":"N",AddressType:this.M_CM_ContactAddressRegistration.addresstype,SalutationCd:""==this.M_CM_ContactAddressRegistration.salutationcd||null==this.M_CM_ContactAddressRegistration.salutationcd?"NULL":this.M_CM_ContactAddressRegistration.salutationcd,Attention:this.M_CM_ContactAddressRegistration.attention,Address1:this.M_CM_ContactAddressRegistration.address1,Address2:this.M_CM_ContactAddressRegistration.address2,Address3:this.M_CM_ContactAddressRegistration.address3,Address4:this.M_CM_ContactAddressRegistration.address4,Email:this.M_CM_ContactAddressRegistration.email,CityCd:""==this.M_CM_ContactAddressRegistration.citycd||null==this.M_CM_ContactAddressRegistration.citycd?"NULL":this.M_CM_ContactAddressRegistration.citycd,PostCd:this.M_CM_ContactAddressRegistration.zipcode,PhoneNo:this.M_CM_ContactAddressRegistration.phoneno,FaxNo:this.M_CM_ContactAddressRegistration.faxno,Remarks:this.M_CM_ContactAddressRegistration.remarks,UserInput:this.getDataUser().UserId,DebtorCd:this.M_CM_ContactAddressRegistration.debtorcd,IDNo:this.M_CM_ContactAddressRegistration.idno,PassportNo:this.M_CM_ContactAddressRegistration.passportno};this.postJSON(this.getUrlInsert(),e).then(function(e){null!=e&&t.$parent.resultInsert(e.Message)})},M_Update:function(){var t=this,e={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,ContactId:this.M_CM_ContactAddressRegistration.contactid,AddressCd:this.M_CM_ContactAddressRegistration.addresscd,BillingStatus:this.M_CM_ContactAddressRegistration.addresscategory.indexOf("B")>=0?"Y":"N",MailingStatus:this.M_CM_ContactAddressRegistration.addresscategory.indexOf("M")>=0?"Y":"N",TaxStatus:this.M_CM_ContactAddressRegistration.addresscategory.indexOf("T")>=0?"Y":"N",AddressType:this.M_CM_ContactAddressRegistration.addresstype,SalutationCd:""==this.M_CM_ContactAddressRegistration.salutationcd||null==this.M_CM_ContactAddressRegistration.salutationcd?"NULL":this.M_CM_ContactAddressRegistration.salutationcd,Attention:this.M_CM_ContactAddressRegistration.attention,Address1:this.M_CM_ContactAddressRegistration.address1,Address2:this.M_CM_ContactAddressRegistration.address2,Address3:this.M_CM_ContactAddressRegistration.address3,Address4:this.M_CM_ContactAddressRegistration.address4,Email:this.M_CM_ContactAddressRegistration.email,CityCd:""==this.M_CM_ContactAddressRegistration.citycd||null==this.M_CM_ContactAddressRegistration.citycd?"NULL":this.M_CM_ContactAddressRegistration.citycd,PostCd:this.M_CM_ContactAddressRegistration.zipcode,PhoneNo:this.M_CM_ContactAddressRegistration.phoneno,FaxNo:this.M_CM_ContactAddressRegistration.faxno,Remarks:this.M_CM_ContactAddressRegistration.remarks,UserEdit:this.getDataUser().UserId,LastUpdateStamp:this.M_CM_ContactAddressRegistration.lastupdatestamp,DebtorCd:this.M_CM_ContactAddressRegistration.debtorcd,RentalBillingStatus:this.M_CM_ContactAddressRegistration.billingstatus,ServiceChargeStatus:this.M_CM_ContactAddressRegistration.servicechargestatus,MeterUtilityStatus:this.M_CM_ContactAddressRegistration.meterutilitystatus,IDNo:this.M_CM_ContactAddressRegistration.idno,PassportNo:this.M_CM_ContactAddressRegistration.passportno};this.postJSON(this.getUrlUpdate(),e).then(function(e){null!=e&&t.$parent.resultUpdate(e.Message)})},M_ClearForm:function(){this.M_CM_ContactAddressRegistration={contactid:"",addresscd:"",billingstatus:"",mailingstatus:"",taxstatus:"",rentalbillingstatus:"",servicechargestatus:"",meterutilitystatus:"",addresstype:"C",salutationcd:"",attention:"",address1:"",address2:"",address3:"",address4:"",mainaddressstatus:"",email:"",citycd:"",zipcode:"",phoneno:"",faxno:"",remarks:"",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",lastupdatestamp:0,controlsequenceno:0,idno:"",passportno:"",rowid:0,salutationdescs:"",citydescs:"",debtorcd:"",addresscategory:[]}},M_New:function(){var t=this.$store.getters.GetPage1Data;this.M_CM_ContactAddressRegistration.contactid=t.ContactID,this.$refs.ref_addresscd.focus()},M_Edit:function(){this.$refs.ref_addresscategory.focus()},M_Delete:function(t){var e=this,s=this.FormToABSList().getRowSelected(),a=[];s.forEach(function(t){a.push({SubportfolioCd:t.SubportfolioCd,ContactId:t.ContactID,AddressCd:t.AddressCd,LastUpdateStamp:t.LastUpdateStamp,_Message_:""})});var i={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:a};this.postJSONMulti(this.getUrlNewDeleteMulti(),i).then(function(t){null!=t&&e.$parent.resultDelete()})},getDataBy:function(t){var e=this,s={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,contactid:t.ContactID,sequenceregistrationno:t.SequenceRegistrationNo,addresscd:t.AddressCd,debtorcd:t.DebtorCd};this.postEncode(this.getUrlById(),s).then(function(s){if(null!=s){var a=s.Data[0],i=[];"Y"==a.billingstatus&&i.push("B"),"Y"==a.mailingstatus&&i.push("M"),"Y"==a.taxstatus&&i.push("T"),console.log(a),e.M_CM_ContactAddressRegistration={contactid:a.contactid,addresscd:a.addresscd,billingstatus:a.billingstatus,mailingstatus:a.mailingstatus,taxstatus:a.taxstatus,rentalbillingstatus:a.rentalbillingstatus,servicechargestatus:a.servicechargestatus,meterutilitystatus:a.meterutilitystatus,addresstype:a.addresstype,salutationcd:a.salutationcd,attention:a.attention,address1:a.address1,address2:a.address2,address3:a.address3,address4:a.address4,mainaddressstatus:a.mainaddressstatus,email:a.email,citycd:a.citycd,zipcode:a.zipcode,phoneno:a.phoneno,faxno:a.faxno,remarks:a.remarks,userinput:a.userinput,useredit:a.useredit,timeinput:a.timeinput,timeedit:a.timeedit,lastupdatestamp:t.LastUpdateStamp,controlsequenceno:a.controlsequenceno,idno:a.idno,passportno:a.passportno,rowid:a.rowid,salutationdescs:a.salutationdescs,citydescs:a.citydescs,debtorcd:a.debtorcd,addresscategory:i},e.M_CM_ContactAddressRegistration.salutationcdLabel=null!=e.M_CM_ContactAddressRegistration.salutationcd?a.salutationcd+e.separator+a.salutationdescs:"",e.M_CM_ContactAddressRegistrationRegistration.citycdLabel=null!=e.M_CM_ContactAddressRegistration.citycd?a.citycd+e.separator+a.citydescs:"",e.IEBy.Input=a.userinput,e.IEBy.Edit=a.useredit}})}},created:function(){},beforeMount:function(){},mounted:function(){this.hideSideBarMenu()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}}),d=r,o=s("2877"),n=Object(o["a"])(d,a,i,!1,null,null,null);n.options.__file="CM_ContactAddressRegistration.vue";e["default"]=n.exports}}]);
//# sourceMappingURL=chunk-2d0cfaf1.2d49b443.js.map