(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c572c"],{"3eae":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ABSListVuex",{attrs:{prop:e.propList,title:e.data.QueryName},on:{rowClicked:e.$parent.rowClicked,rowDblClicked:e.$parent.doDoubleClick,rowLinkClick:e.$parent.rowLink,pageSize:e.$parent.M_PageSize,pagination:e.$parent.M_Pagination,filter:e.$parent.M_Advance_Filter,headTable:e.$parent.M_Head_Table,refreshColumn:e.$parent.refreshColumn}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.showForm,expression:"$parent.showForm"}],staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[n("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"div-collapse"},[n("span",{directives:[{name:"show",rawName:"v-show",value:e.IEBy.Input&&e.IEBy.Edit,expression:"IEBy.Input && IEBy.Edit"}],staticClass:"master-span"},[e._v("\n                    Input By : "+e._s(e.IEBy.Input)+" | Edit By : "+e._s(e.IEBy.Edit)+" "),n("font-awesome-icon",{staticClass:"icon-style-1__master",attrs:{icon:"sort-down"}})],1)]),n("b-collapse",{attrs:{id:"collapse1",visible:!0}},[n("b-row",{staticStyle:{"padding-left":"10px","padding-bottom":"10px"}},[n("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[n("b-form",{attrs:{"data-vv-scope":"FormScope_"+e.PageLevel+"_"+e.TabIndex,"data-vv-value-path":"FormScope_"+e.PageLevel+"_"+e.TabIndex}},[n("b-row",{staticStyle:{"padding-left":"10px"}},[n("b-col",{attrs:{md:"12",id:"col-left"}},[n("b-row",[n("b-col",{attrs:{md:"6"}},[n("ABSinputTextVuex",{ref:"ref_contactpersonnelid",attrs:{prop:e.PI_contactpersonnelid},model:{value:e.M_CM_ContactPersonnel.contactpersonnelid,callback:function(t){e.$set(e.M_CM_ContactPersonnel,"contactpersonnelid",t)},expression:"M_CM_ContactPersonnel.contactpersonnelid"}})],1)],1),n("b-row",[n("b-col",{attrs:{md:"6"}},[n("ABSInputSelectList",{ref:"ref_groupcd",attrs:{prop:e.PI_groupcd,value:e.M_CM_ContactPersonnel.groupcd,label:e.M_CM_ContactPersonnel.groupcdLabel},on:{change:e.OngroupcdChange}})],1)],1),n("b-row",[n("b-col",{attrs:{md:"6"}},[n("ABSInputSelectList",{ref:"ref_salutationcd",attrs:{prop:e.PI_salutationcd,value:e.M_CM_ContactPersonnel.salutationcd,label:e.M_CM_ContactPersonnel.salutationcdLabel},on:{change:e.OnsalutationcdChange}})],1),n("b-col",{attrs:{md:"6"}},[n("ABSinputTextVuex",{ref:"ref_jobtitle",attrs:{prop:e.PI_jobtitle},model:{value:e.M_CM_ContactPersonnel.jobtitle,callback:function(t){e.$set(e.M_CM_ContactPersonnel,"jobtitle",t)},expression:"M_CM_ContactPersonnel.jobtitle"}})],1)],1),n("b-row",[n("b-col",{attrs:{md:"6"}},[n("ABSinputTextVuex",{ref:"ref_fullname",attrs:{prop:e.PI_fullname},model:{value:e.M_CM_ContactPersonnel.fullname,callback:function(t){e.$set(e.M_CM_ContactPersonnel,"fullname",t)},expression:"M_CM_ContactPersonnel.fullname"}})],1),n("b-col",{attrs:{md:"6"}},[n("ABSinputDateVuex",{ref:"ref_birthdate",attrs:{prop:e.PI_birthdate},on:{input:e.OnbirthdateChange},model:{value:e.M_CM_ContactPersonnel.birthdate,callback:function(t){e.$set(e.M_CM_ContactPersonnel,"birthdate",t)},expression:"M_CM_ContactPersonnel.birthdate"}})],1)],1),n("b-row",[n("b-col",{attrs:{md:"6"}},[n("ABSinputTextVuex",{ref:"ref_familyname",attrs:{prop:e.PI_familyname},model:{value:e.M_CM_ContactPersonnel.familyname,callback:function(t){e.$set(e.M_CM_ContactPersonnel,"familyname",t)},expression:"M_CM_ContactPersonnel.familyname"}})],1),n("b-col",{attrs:{md:"6"}},[n("ABSInputSelectList",{ref:"ref_nationalitycd",attrs:{prop:e.PI_nationalitycd,value:e.M_CM_ContactPersonnel.nationalitycd,label:e.M_CM_ContactPersonnel.nationalitycdLabel},on:{change:e.OnnationalitycdChange}})],1)],1),n("b-row",[n("b-col",{attrs:{md:"6"}},[n("ABSinputTextVuex",{ref:"ref_address1",attrs:{prop:e.PI_address1},model:{value:e.M_CM_ContactPersonnel.address1,callback:function(t){e.$set(e.M_CM_ContactPersonnel,"address1",t)},expression:"M_CM_ContactPersonnel.address1"}})],1),n("b-col",{attrs:{md:"6"}},[n("ABSInputSelectList",{ref:"ref_religioncd",attrs:{prop:e.PI_religioncd,value:e.M_CM_ContactPersonnel.religioncd,label:e.M_CM_ContactPersonnel.religioncdLabel},on:{change:e.OnreligioncdChange}})],1)],1),n("b-row",[n("b-col",{attrs:{md:"6"}},[n("ABSinputTextVuex",{ref:"ref_address2",attrs:{prop:e.PI_address2},model:{value:e.M_CM_ContactPersonnel.address2,callback:function(t){e.$set(e.M_CM_ContactPersonnel,"address2",t)},expression:"M_CM_ContactPersonnel.address2"}})],1),n("b-col",{attrs:{md:"6"}},[n("ABSInputSelect2",{ref:"ref_maritalstatus",attrs:{prop:e.PI_maritalstatus,value:e.M_CM_ContactPersonnel.maritalstatus,label:e.M_CM_ContactPersonnel.maritalstatusLabel},on:{change:e.OnmaritalstatusChange}})],1)],1),n("b-row",[n("b-col",{attrs:{md:"6"}},[n("ABSinputTextVuex",{ref:"ref_address3",attrs:{prop:e.PI_address3},model:{value:e.M_CM_ContactPersonnel.address3,callback:function(t){e.$set(e.M_CM_ContactPersonnel,"address3",t)},expression:"M_CM_ContactPersonnel.address3"}})],1),n("b-col",{attrs:{md:"6"}},[n("ABSinputTextVuex",{ref:"ref_children",attrs:{prop:e.PI_children},model:{value:e.M_CM_ContactPersonnel.children,callback:function(t){e.$set(e.M_CM_ContactPersonnel,"children",t)},expression:"M_CM_ContactPersonnel.children"}})],1)],1),n("b-row",[n("b-col",{attrs:{md:"6"}},[n("ABSinputTextVuex",{ref:"ref_address4",attrs:{prop:e.PI_address4},model:{value:e.M_CM_ContactPersonnel.address4,callback:function(t){e.$set(e.M_CM_ContactPersonnel,"address4",t)},expression:"M_CM_ContactPersonnel.address4"}})],1),n("b-col",{attrs:{md:"6"}},[n("ABSinputRadioButtonVuex",{ref:"ref_gender",attrs:{prop:e.PI_gender},on:{input:e.OngenderChange},model:{value:e.M_CM_ContactPersonnel.gender,callback:function(t){e.$set(e.M_CM_ContactPersonnel,"gender",t)},expression:"M_CM_ContactPersonnel.gender"}})],1)],1),n("b-row",[n("b-col",{attrs:{md:"6"}}),n("b-col",{attrs:{md:"6"}},[n("ABSinputTextVuex",{ref:"ref_icno",attrs:{prop:e.PI_icno},model:{value:e.M_CM_ContactPersonnel.icno,callback:function(t){e.$set(e.M_CM_ContactPersonnel,"icno",t)},expression:"M_CM_ContactPersonnel.icno"}})],1)],1),n("b-row",[n("b-col",{attrs:{md:"6"}},[n("ABSinputTextVuex",{ref:"ref_zipcode",attrs:{prop:e.PI_zipcode},model:{value:e.M_CM_ContactPersonnel.zipcode,callback:function(t){e.$set(e.M_CM_ContactPersonnel,"zipcode",t)},expression:"M_CM_ContactPersonnel.zipcode"}})],1),n("b-col",{attrs:{md:"6"}},[n("ABSinputTextVuex",{ref:"ref_passportno",attrs:{prop:e.PI_passportno},model:{value:e.M_CM_ContactPersonnel.passportno,callback:function(t){e.$set(e.M_CM_ContactPersonnel,"passportno",t)},expression:"M_CM_ContactPersonnel.passportno"}})],1)],1),n("b-row",[n("b-col",{attrs:{md:"6"}},[n("ABSInputSelectList",{ref:"ref_citycd",attrs:{prop:e.PI_citycd,value:e.M_CM_ContactPersonnel.citycd,label:e.M_CM_ContactPersonnel.citycdLabel},on:{change:e.OncitycdChange}})],1),n("b-col",{attrs:{md:"6"}},[n("ABSinputTextVuex",{ref:"ref_kimsno",attrs:{prop:e.PI_kimsno},model:{value:e.M_CM_ContactPersonnel.kimsno,callback:function(t){e.$set(e.M_CM_ContactPersonnel,"kimsno",t)},expression:"M_CM_ContactPersonnel.kimsno"}})],1)],1),n("b-row",[n("b-col",{attrs:{md:"6"}},[n("ABSinputTextVuex",{ref:"ref_phoneno",attrs:{prop:e.PI_phoneno},model:{value:e.M_CM_ContactPersonnel.phoneno,callback:function(t){e.$set(e.M_CM_ContactPersonnel,"phoneno",t)},expression:"M_CM_ContactPersonnel.phoneno"}})],1),n("b-col",{attrs:{md:"6"}},[n("ABSinputTextVuex",{ref:"ref_kitano",attrs:{prop:e.PI_kitano},model:{value:e.M_CM_ContactPersonnel.kitano,callback:function(t){e.$set(e.M_CM_ContactPersonnel,"kitano",t)},expression:"M_CM_ContactPersonnel.kitano"}})],1)],1),n("b-row",[n("b-col",{attrs:{md:"6"}},[n("ABSinputTextVuex",{ref:"ref_faxno",attrs:{prop:e.PI_faxno},model:{value:e.M_CM_ContactPersonnel.faxno,callback:function(t){e.$set(e.M_CM_ContactPersonnel,"faxno",t)},expression:"M_CM_ContactPersonnel.faxno"}})],1),n("b-col",{attrs:{md:"6"}},[n("ABSTextAreaVuex",{ref:"ref_remarks",attrs:{prop:e.PI_remarks},on:{input:e.OnremarksChange},model:{value:e.M_CM_ContactPersonnel.remarks,callback:function(t){e.$set(e.M_CM_ContactPersonnel,"remarks",t)},expression:"M_CM_ContactPersonnel.remarks"}})],1)],1),n("b-row",[n("b-col",{attrs:{md:"6"}},[n("ABSinputTextVuex",{ref:"ref_handphone",attrs:{prop:e.PI_handphone},model:{value:e.M_CM_ContactPersonnel.handphone,callback:function(t){e.$set(e.M_CM_ContactPersonnel,"handphone",t)},expression:"M_CM_ContactPersonnel.handphone"}})],1)],1),n("b-row",[n("b-col",{attrs:{md:"6"}},[n("ABSinputTextVuex",{ref:"ref_email",attrs:{prop:e.PI_email},model:{value:e.M_CM_ContactPersonnel.email,callback:function(t){e.$set(e.M_CM_ContactPersonnel,"email",t)},expression:"M_CM_ContactPersonnel.email"}})],1)],1),n("b-row",[n("b-col",{attrs:{md:"6"}},[n("ABSinputRadioButtonVuex",{ref:"ref_attentionstatus",attrs:{prop:e.PI_attentionstatus},on:{input:e.OnattentionstatusChange},model:{value:e.M_CM_ContactPersonnel.attentionstatus,callback:function(t){e.$set(e.M_CM_ContactPersonnel,"attentionstatus",t)},expression:"M_CM_ContactPersonnel.attentionstatus"}})],1)],1),n("b-row",[n("b-col",{attrs:{md:"6"}},[n("ABSFileUpload",{ref:"ref_referencefilename",attrs:{prop:e.PI_referencefilename,file:e.M_CM_ContactPersonnel.picturefilename,image:e.M_CM_ContactPersonnel.referencefilename},on:{fileName:e.getFileName},model:{value:e.M_CM_ContactPersonnel.referencefilename,callback:function(t){e.$set(e.M_CM_ContactPersonnel,"referencefilename",t)},expression:"M_CM_ContactPersonnel.referencefilename"}})],1)],1)],1)],1),n("ABSTAnalysis",{attrs:{prop:e.PTAnalysis}})],1)],1)],1)],1)],1)],1)},o=[],c=(n("ac6a"),n("ade3")),i={props:{PageLevel:"",TabIndex:"",data:""},data:function(){return{ValKey:null,FormType:"List",Module:"CM",propList:{initialWhere:"ContactId = '"+this.ValKey+"'",LineNo:this.$parent.data.PageOrder,PageLevel:this.PageLevel,TabIndex:this.TabIndex,OrderBy:"",SourceField:"",ParamView:""},IEBy:{Input:"",Edit:""},M_CM_ContactPersonnel:{contactid:"",contactpersonnelid:"",contacttype:"",primarycontactpersonnel:"",salutationcd:"",fullname:"",familyname:"",address1:"",address2:"",address3:"",address4:"",citycd:"",zipcode:"",phoneno:"",faxno:"",handphone:"",email:"",jobtitle:"",birthdate:"",nationalitycd:"",religioncd:"",gender:"M",maritalstatus:"S",children:"",icno:"",passportno:"",kimsno:"",kitano:"",picturefilename:"",referencefilename:"",groupcd:"",descs:"",attentionstatus:"N",remarks:"",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",controlsequenceno:0,groupdescs:"",salutationdescs:"",nationalitydescs:"",religiondescs:"",citydescs:"",debtorcd:"",lastupdatestamp:0,rowid:0},PI_contactpersonnelid:{cValidate:"required|max:10",cName:"contactpersonnelid",cLabel:"Personnel ID",cLabelSize:4,cOrder:1,cKey:!0,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_groupcd:{dataLookUp:{LookUpCd:"GetLookupPersonelGroup",ColumnDB:"GroupCd",InitialWhere:"",ParamWhere:""},cValidate:"",cName:"groupcd",cLabel:"Contact Personnel Group",cKey:!1,cLabelSize:4,cOrder:2,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"CM/CM_ContactPersonnelGroup",cDisplayColumn:"GroupCd,Descs"},PI_salutationcd:{dataLookUp:{LookUpCd:"GetLookupCMSalutation",ColumnDB:"SalutationCd",InitialWhere:"",ParamWhere:""},cValidate:"",cName:"salutationcd",cLabel:"Salutation",cKey:!1,cLabelSize:4,cOrder:2,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"CM/CM_Salutation",cDisplayColumn:"SalutationCd,Descs"},PI_jobtitle:{cValidate:"max:30",cName:"jobtitle",cLabel:"Job Title",cLabelSize:4,cOrder:18,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_fullname:{cValidate:"required|max:50",cName:"fullname",cLabel:"Full Name",cLabelSize:4,cOrder:4,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_birthdate:{cValidate:"",cName:"birthdate",cLabel:"Birth Date",cLabelSize:4,cOrder:19,cKey:!1,cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_familyname:{cValidate:"max:50",cName:"familyname",cLabel:"Family Name",cLabelSize:4,cOrder:5,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_nationalitycd:{dataLookUp:{LookUpCd:"GetLookupCMNationality",ColumnDB:"NationalityCd",InitialWhere:"",ParamWhere:""},cValidate:"",cName:"nationalitycd",cLabel:"Nationality",cKey:!1,cLabelSize:4,cOrder:20,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"CM/CM_Nationality",cDisplayColumn:"NationalityCd,Descs"},PI_address1:{cValidate:"required|max:50",cName:"address1",cLabel:"Address",cLabelSize:4,cOrder:6,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_religioncd:{dataLookUp:{LookUpCd:"GetLookupCMReligion",ColumnDB:"ReligionCd",InitialWhere:"",ParamWhere:""},cValidate:"",cName:"religioncd",cLabel:"Religion",cKey:!1,cLabelSize:4,cOrder:22,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"CM/CM_Religion",cDisplayColumn:"ReligionCd,Descs"},PI_address2:{cValidate:"max:50",cName:"address2",cLabel:"",cLabelSize:4,cOrder:7,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_maritalstatus:{dataLookUp:null,cValidate:"",cName:"maritalstatus",cLabel:"Marital Status",cLabelSize:4,cOrder:24,cKey:!1,cTriggered:!1,cDefault:"S",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!0,cOption:[{label:"Single",id:"S"},{label:"Married",id:"M"},{label:"Widow",id:"W"},{label:"Widower",id:"R"}],cMasterUrl:"",cDisplayColumn:""},PI_address3:{cValidate:"max:50",cName:"address3",cLabel:"",cLabelSize:4,cOrder:8,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_children:{cValidate:"max:2",cName:"children",cLabel:"Children",cLabelSize:4,cOrder:25,cKey:!1,cType:"numeric",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_address4:{cValidate:"max:50",cName:"address4",cLabel:"",cLabelSize:4,cOrder:9,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_gender:{cValidate:"",cName:"gender",cId:"rdbgender",cRadioOptions:[{text:"Male",value:"M"},{text:"Female",value:"F"}],cRadioDefaultOption:"M",cLabel:"Gender",cLabelSize:4,cOrder:27,cProtect:!1,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_icno:{cValidate:"max:30",cName:"icno",cLabel:"IC No",cLabelSize:4,cOrder:28,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_zipcode:{cValidate:"max:5",cName:"zipcode",cLabel:"Zip Code",cLabelSize:4,cOrder:10,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_passportno:{cValidate:"max:30",cName:"passportno",cLabel:"Passport No",cLabelSize:4,cOrder:29,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_citycd:{dataLookUp:{LookUpCd:"GetLookupCMCity",ColumnDB:"CityCd",InitialWhere:"",ParamWhere:""},cValidate:"",cName:"citycd",cLabel:"City",cKey:!1,cLabelSize:4,cOrder:11,cTriggered:!1,cDefault:"",cProtect:!1,cVisible:!0,cAsync:!1,cFilter:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex,cStatic:!1,cOption:[],cMasterUrl:"CM/CM_CountryCity",cDisplayColumn:"CityCd,CountryCd,Descs"},PI_kimsno:{cValidate:"max:30",cName:"kimsno",cLabel:"KIMS No",cLabelSize:4,cOrder:30,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_phoneno:{cValidate:"max:30",cName:"phoneno",cLabel:"Phone",cLabelSize:4,cOrder:13,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_kitano:{cValidate:"max:30",cName:"kitano",cLabel:"KITA No",cLabelSize:4,cOrder:31,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_faxno:{cValidate:"max:30",cName:"faxno",cLabel:"Fax",cLabelSize:4,cOrder:14,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_remarks:{cValidate:"",cName:"remarks",cLabel:"Remarks",cLabelSize:4,cOrder:32,cKey:!1,cDefault:"",cProtect:!1,cVisible:!0,cResize:!1,cReadOnly:!1,cRows:3,cMaxRows:3,cSize:"md",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_handphone:{cValidate:"",cName:"handphone",cLabel:"Handphone",cLabelSize:4,cOrder:15,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_email:{cValidate:"max:60",cName:"email",cLabel:"Email",cLabelSize:4,cOrder:17,cKey:!1,cType:"text",cVisible:!0,cProtect:!1,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_attentionstatus:{cValidate:"",cName:"attentionstatus",cId:"rdbattentionstatus",cRadioOptions:[{text:"Yes",value:"Y"},{text:"No",value:"N"}],cRadioDefaultOption:"N",cLabel:"UP / Attention",cLabelSize:4,cOrder:0,cProtect:!1,cVisible:!0,cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cParentForm:"FormScope_"+this.PageLevel+"_"+this.TabIndex},PI_referencefilename:Object(c["a"])({cValidate:"",cName:"referencefilename",cLabel:"Picture File",cSubPortfolio:this.getDataUser().SubPortfolioCd,cPath:"SaveLocation/SubPortfolio",cLabelSize:4,cOrder:0,cVisible:!0,cModule:"TN",cPlaceholder:"Choose a file...",cPageLevel:this.PageLevel,cTabIndex:this.TabIndex},"cVisible",!0),PTAnalysis:{cPageLevel:this.PageLevel,cTabIndex:this.TabIndex,cPageMasterSeq:this.data.PageMasterSeq,cFormPageNo:this.data.PageOrder}}},computed:{inputStatus:function(){return this.$store.getters.getLevel==this.PageLevel&&this.$store.getters.getTab==this.TabIndex?this.$store.getters.getStatus.toUpperCase():"VIEW"},DataRow:function(){return this.$store.getters.GetPage2Data},DataRowPage1:function(){return this.$store.getters.GetPage1Data}},methods:{OngroupcdChange:function(e){var t=this;this.M_CM_ContactPersonnel.groupcd!=e.id&&(this.$nextTick(function(){t.M_CM_ContactPersonnel.groupcd=e.id,t.M_CM_ContactPersonnel.groupcdLabel=e.label,t.inputStatus}),this.$forceUpdate())},OnsalutationcdChange:function(e){var t=this;this.$nextTick(function(){t.M_CM_ContactPersonnel.salutationcd=e.id,t.M_CM_ContactPersonnel.salutationcdLabel=e.label,t.inputStatus}),this.$forceUpdate()},OnbirthdateChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},OnnationalitycdChange:function(e){var t=this;this.$nextTick(function(){t.M_CM_ContactPersonnel.nationalitycd=e.id,t.M_CM_ContactPersonnel.nationalitycdLabel=e.label,t.inputStatus}),this.$forceUpdate()},OnreligioncdChange:function(e){var t=this;this.$nextTick(function(){t.M_CM_ContactPersonnel.religioncd=e.id,t.M_CM_ContactPersonnel.religioncdLabel=e.label,t.inputStatus}),this.$forceUpdate()},OnmaritalstatusChange:function(e){var t=this;this.$nextTick(function(){"VIEW"!=t.inputStatus&&(t.M_CM_ContactPersonnel.maritalstatus=e.id,t.M_CM_ContactPersonnel.maritalstatusLabel=e.label)}),this.$forceUpdate()},OngenderChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},OncitycdChange:function(e){var t=this;this.$nextTick(function(){t.M_CM_ContactPersonnel.citycd=e.id,t.M_CM_ContactPersonnel.citycdLabel=e.label,t.inputStatus}),this.$forceUpdate()},OnremarksChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},OnattentionstatusChange:function(e){var t=this;this.$nextTick(function(){t.inputStatus}),this.$forceUpdate()},setToolbarButton:function(){},M_Head_Table:function(){},M_PageSize:function(){},M_TabClick:function(){},M_Pagination:function(){},M_Advance_Filter:function(){},M_Search:function(e){},M_Refresh:function(){},M_Cancel:function(){},doDoubleClick:function(){},rowClicked:function(e,t){},rowLink:function(e){this.$refs.modalTest.show()},paramFromParent:function(){this.$parent.showForm=!1;var e=this.$store.getters.GetPage1Data;this.M_CM_ContactPersonnel.contactid=e.ContactID,this.propList.initialWhere=" ContactId = '"+e.ContactID+"' ";var t=this.momentDate(this.dateAdd2("d",new Date,1));this.PI_birthdate.cValidate&&""!=this.PI_birthdate.cValidate?this.PI_birthdate.cValidate+="|date_format:YYYY-MM-DD|before:"+t:this.PI_birthdate.cValidate="date_format:YYYY-MM-DD|before:"+t,this.FormToABSList().doGetList("","eb_getList")},M_Insert:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,ContactId:this.M_CM_ContactPersonnel.contactid,ContactPersonnelID:this.M_CM_ContactPersonnel.contactpersonnelid,ContactType:this.M_CM_ContactPersonnel.contacttype,SalutationCd:""==this.M_CM_ContactPersonnel.salutationcd||null==this.M_CM_ContactPersonnel.salutationcd?"NULL":this.M_CM_ContactPersonnel.salutationcd,FullName:this.M_CM_ContactPersonnel.fullname,FamilyName:this.M_CM_ContactPersonnel.familyname,Address1:this.M_CM_ContactPersonnel.address1,Address2:this.M_CM_ContactPersonnel.address2,Address3:this.M_CM_ContactPersonnel.address3,Address4:this.M_CM_ContactPersonnel.address4,GroupCd:""==this.M_CM_ContactPersonnel.groupcd||null==this.M_CM_ContactPersonnel.groupcd?"NULL":this.M_CM_ContactPersonnel.groupcd,Descs:this.M_CM_ContactPersonnel.descs,CityCd:""==this.M_CM_ContactPersonnel.citycd||null==this.M_CM_ContactPersonnel.citycd?"NULL":this.M_CM_ContactPersonnel.citycd,ZipCode:this.M_CM_ContactPersonnel.zipcode,PhoneNo:this.M_CM_ContactPersonnel.phoneno,FaxNo:this.M_CM_ContactPersonnel.faxno,Handphone:this.M_CM_ContactPersonnel.handphone,Email:this.M_CM_ContactPersonnel.email,JobTitle:this.M_CM_ContactPersonnel.jobtitle,BirthDate:""==this.M_CM_ContactPersonnel.birthdate||null==this.M_CM_ContactPersonnel.birthdate?"NULL":this.M_CM_ContactPersonnel.birthdate,NationalityCd:""==this.M_CM_ContactPersonnel.nationalitycd||null==this.M_CM_ContactPersonnel.nationalitycd?"NULL":this.M_CM_ContactPersonnel.nationalitycd,ReligionCd:""==this.M_CM_ContactPersonnel.religioncd||null==this.M_CM_ContactPersonnel.religioncd?"NULL":this.M_CM_ContactPersonnel.religioncd,Gender:this.M_CM_ContactPersonnel.gender,MaritalStatus:this.M_CM_ContactPersonnel.maritalstatus,Children:this.M_CM_ContactPersonnel.children,ICNo:this.M_CM_ContactPersonnel.icno,PassportNo:this.M_CM_ContactPersonnel.passportno,KIMSNo:this.M_CM_ContactPersonnel.kimsno,KITANo:this.M_CM_ContactPersonnel.kitano,PictureFileName:this.M_CM_ContactPersonnel.picturefilename,ReferenceFileName:this.M_CM_ContactPersonnel.referencefilename,Remarks:this.M_CM_ContactPersonnel.remarks,UserInput:this.getDataUser().UserId,DebtorCd:this.M_CM_ContactPersonnel.debtorcd,AttentionStatus:this.M_CM_ContactPersonnel.attentionstatus};this.postJSON(this.getUrlInsert(),t).then(function(t){null!=t&&e.$parent.resultInsert(t.Message)})},M_Update:function(){var e=this,t={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,ContactId:this.M_CM_ContactPersonnel.contactid,ContactPersonnelID:this.M_CM_ContactPersonnel.contactpersonnelid,ContactType:this.M_CM_ContactPersonnel.contacttype,SalutationCd:""==this.M_CM_ContactPersonnel.salutationcd||null==this.M_CM_ContactPersonnel.salutationcd?"NULL":this.M_CM_ContactPersonnel.salutationcd,FullName:this.M_CM_ContactPersonnel.fullname,FamilyName:this.M_CM_ContactPersonnel.familyname,Address1:this.M_CM_ContactPersonnel.address1,Address2:this.M_CM_ContactPersonnel.address2,Address3:this.M_CM_ContactPersonnel.address3,Address4:this.M_CM_ContactPersonnel.address4,CityCd:""==this.M_CM_ContactPersonnel.citycd||null==this.M_CM_ContactPersonnel.citycd?"NULL":this.M_CM_ContactPersonnel.citycd,GroupCd:""==this.M_CM_ContactPersonnel.groupcd||null==this.M_CM_ContactPersonnel.groupcd?"NULL":this.M_CM_ContactPersonnel.groupcd,Descs:this.M_CM_ContactPersonnel.descs,ZipCode:this.M_CM_ContactPersonnel.zipcode,PhoneNo:this.M_CM_ContactPersonnel.phoneno,FaxNo:this.M_CM_ContactPersonnel.faxno,Handphone:this.M_CM_ContactPersonnel.handphone,Email:this.M_CM_ContactPersonnel.email,JobTitle:this.M_CM_ContactPersonnel.jobtitle,BirthDate:""==this.M_CM_ContactPersonnel.birthdate||null==this.M_CM_ContactPersonnel.birthdate?"NULL":this.M_CM_ContactPersonnel.birthdate,NationalityCd:""==this.M_CM_ContactPersonnel.nationalitycd||null==this.M_CM_ContactPersonnel.nationalitycd?"NULL":this.M_CM_ContactPersonnel.nationalitycd,ReligionCd:""==this.M_CM_ContactPersonnel.religioncd||null==this.M_CM_ContactPersonnel.religioncd?"NULL":this.M_CM_ContactPersonnel.religioncd,Gender:this.M_CM_ContactPersonnel.gender,MaritalStatus:this.M_CM_ContactPersonnel.maritalstatus,Children:this.M_CM_ContactPersonnel.children,ICNo:this.M_CM_ContactPersonnel.icno,PassportNo:this.M_CM_ContactPersonnel.passportno,KIMSNo:this.M_CM_ContactPersonnel.kimsno,KITANo:this.M_CM_ContactPersonnel.kitano,PictureFileName:this.M_CM_ContactPersonnel.picturefilename,ReferenceFileName:this.M_CM_ContactPersonnel.referencefilename,Remarks:this.M_CM_ContactPersonnel.remarks,UserEdit:this.getDataUser().UserId,LastUpdateStamp:this.M_CM_ContactPersonnel.lastupdatestamp,DebtorCd:this.M_CM_ContactPersonnel.debtorcd,AttentionStatus:this.M_CM_ContactPersonnel.attentionstatus};this.postJSON(this.getUrlUpdate(),t).then(function(t){null!=t&&e.$parent.resultUpdate(t.Message)})},M_ClearForm:function(){this.M_CM_ContactPersonnel={contactid:"",contactpersonnelid:"",contacttype:"",primarycontactpersonnel:"",salutationcd:"",fullname:"",familyname:"",address1:"",address2:"",address3:"",address4:"",citycd:"",zipcode:"",phoneno:"",faxno:"",handphone:"",email:"",jobtitle:"",birthdate:"",nationalitycd:"",religioncd:"",gender:"M",maritalstatus:"S",children:"",icno:"",passportno:"",kimsno:"",kitano:"",picturefilename:"",referencefilename:"",groupcd:"",descs:"",attentionstatus:"N",remarks:"",userinput:"",useredit:this.getDataUser().UserId,timeinput:"",timeedit:"",controlsequenceno:0,groupdescs:"",salutationdescs:"",nationalitydescs:"",religiondescs:"",citydescs:"",debtorcd:"",lastupdatestamp:0,rowid:0}},M_New:function(){var e=this.$store.getters.GetPage1Data;this.M_CM_ContactPersonnel.contactid=e.ContactID},M_Edit:function(){},M_Delete:function(e){var t=this,n=this.FormToABSList().getRowSelected(),a=[];n.forEach(function(e){a.push({ContactId:e.ContactID,ContactPersonnelID:e.ContactPersonnelID,LastUpdateStamp:e.LastUpdateStamp,DebtorCd:"",_Message_:""})});var o={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,Data:a};this.postJSONMulti(this.getUrlNewDeleteMulti(),o).then(function(e){null!=e&&t.$parent.resultDelete()})},getDataBy:function(e){var t=this,n={OptionSeq:this.getOptionSeq().OptionSeq,LineNo:this.$parent.data.PageOrder,contactid:e.ContactID,contactpersonnelid:e.ContactPersonnelID,debtorcd:e.DebtorCd};this.postEncode(this.getUrlById(),n).then(function(n){if(null!=n){var a=n.Data[0];t.M_CM_ContactPersonnel={contactid:a.contactid,contactpersonnelid:a.contactpersonnelid,contacttype:a.contacttype,primarycontactpersonnel:a.primarycontactpersonnel,salutationcd:a.salutationcd,fullname:a.fullname,familyname:a.familyname,address1:a.address1,address2:a.address2,address3:a.address3,address4:a.address4,citycd:a.citycd,zipcode:a.zipcode,phoneno:a.phoneno,faxno:a.faxno,handphone:a.handphone,email:a.email,jobtitle:a.jobtitle,birthdate:t.momentDate(a.birthdate),nationalitycd:a.nationalitycd,religioncd:a.religioncd,gender:a.gender,maritalstatus:a.maritalstatus,children:a.children,icno:a.icno,passportno:a.passportno,kimsno:a.kimsno,kitano:a.kitano,picturefilename:a.picturefilename,referencefilename:a.referencefilename,groupcd:a.groupcd,descs:a.descs,attentionstatus:a.attentionstatus,remarks:a.remarks,userinput:a.userinput,useredit:a.useredit,timeinput:a.timeinput,timeedit:a.timeedit,controlsequenceno:a.controlsequenceno,groupdescs:a.groupdescs,salutationdescs:a.salutationdescs,nationalitydescs:a.nationalitydescs,religiondescs:a.religiondescs,citydescs:a.citydescs,debtorcd:a.debtorcd,lastupdatestamp:e.LastUpdateStamp,rowid:a.rowid},t.M_CM_ContactPersonnel.groupcdLabel=null!=t.M_CM_ContactPersonnel.groupcd?a.groupcd+t.separator+a.groupdescs:"",t.M_CM_ContactPersonnel.salutationcdLabel=null!=t.M_CM_ContactPersonnel.salutationcd?a.salutationcd+t.separator+a.salutationdescs:"",t.M_CM_ContactPersonnel.nationalitycdLabel=null!=t.M_CM_ContactPersonnel.nationalitycd?a.nationalitycd+t.separator+a.nationalitydescs:"",t.M_CM_ContactPersonnel.religioncdLabel=null!=t.M_CM_ContactPersonnel.religioncd?a.religioncd+t.separator+a.religiondescs:"",t.M_CM_ContactPersonnel.citycdLabel=null!=t.M_CM_ContactPersonnel.citycd?a.citycd+t.separator+a.citydescs:"",t.IEBy.Input=a.userinput,t.IEBy.Edit=a.useredit}})},getFileName:function(e){this.M_CM_ContactPersonnel.picturefilename=e}},created:function(){},beforeMount:function(){},mounted:function(){this.hideSideBarMenu()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},s=i,r=n("2877"),l=Object(r["a"])(s,a,o,!1,null,null,null);l.options.__file="CM_ContactPersonnel.vue";t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0c572c.7a0e314a.js.map