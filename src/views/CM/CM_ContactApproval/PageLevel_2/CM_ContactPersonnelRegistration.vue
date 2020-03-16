<template>
    <div>        
    <ABSListVuex
      :prop = "propList"
      :title = "data.QueryName"
      @rowClicked = "$parent.rowClicked"
      @rowDblClicked = "$parent.doDoubleClick"
      @rowLinkClick = "$parent.rowLink"
      @pageSize = "$parent.M_PageSize"
      @pagination = "$parent.M_Pagination"
      @filter = "$parent.M_Advance_Filter"
      @headTable = "$parent.M_Head_Table"
      @refreshColumn = "$parent.refreshColumn"
    />


        <div v-show="$parent.showForm"  :style="'margin-top:10px;'" class="el" mousetip mousetip-msg="I'm a tooltip">
            <div class="div-collapse" v-b-toggle.collapse1>
                <span class="master-span" v-show="IEBy.Input && IEBy.Edit">
                    Input By : {{IEBy.Input}} | Edit By : {{IEBy.Edit}} <font-awesome-icon icon="sort-down" class="icon-style-1__master" /> 
                </span>
            </div>
            <b-collapse id="collapse1" :visible="true">
                <b-row  style="padding-left: 10px; padding-bottom: 10px; !important;">     
					<b-col md="12" id="col-left" class="bColMasterForm">	
						<b-form :data-vv-scope="'FormScope_' + PageLevel + '_' + TabIndex" :data-vv-value-path="'FormScope_' + PageLevel + '_' + TabIndex">
                            <b-row style="padding-left:10px;">					
                                <b-col md="12" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_contactpersonnelid" v-model="M_CM_ContactPersonnelRegistration.contactpersonnelid"  ref="ref_contactpersonnelid"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OngroupcdChange" :prop="PI_groupcd" :value="M_CM_ContactPersonnelRegistration.groupcd" :label="M_CM_ContactPersonnelRegistration.groupcdLabel" ref="ref_groupcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnsalutationcdChange" :prop="PI_salutationcd" :value="M_CM_ContactPersonnelRegistration.salutationcd" :label="M_CM_ContactPersonnelRegistration.salutationcdLabel" ref="ref_salutationcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_jobtitle" v-model="M_CM_ContactPersonnelRegistration.jobtitle"  ref="ref_jobtitle"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_fullname" v-model="M_CM_ContactPersonnelRegistration.fullname"  ref="ref_fullname"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OnbirthdateChange" :prop="PI_birthdate" v-model="M_CM_ContactPersonnelRegistration.birthdate"  ref="ref_birthdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_familyname" v-model="M_CM_ContactPersonnelRegistration.familyname"  ref="ref_familyname"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnnationalitycdChange" :prop="PI_nationalitycd" :value="M_CM_ContactPersonnelRegistration.nationalitycd" :label="M_CM_ContactPersonnelRegistration.nationalitycdLabel" ref="ref_nationalitycd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_address1" v-model="M_CM_ContactPersonnelRegistration.address1"  ref="ref_address1"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnreligioncdChange" :prop="PI_religioncd" :value="M_CM_ContactPersonnelRegistration.religioncd" :label="M_CM_ContactPersonnelRegistration.religioncdLabel" ref="ref_religioncd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_address2" v-model="M_CM_ContactPersonnelRegistration.address2"  ref="ref_address2"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnmaritalstatusChange" :prop="PI_maritalstatus" :value="M_CM_ContactPersonnelRegistration.maritalstatus" :label="M_CM_ContactPersonnelRegistration.maritalstatusLabel" ref="ref_maritalstatus"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_address3" v-model="M_CM_ContactPersonnelRegistration.address3"  ref="ref_address3"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_children" v-model="M_CM_ContactPersonnelRegistration.children"  ref="ref_children"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_address4" v-model="M_CM_ContactPersonnelRegistration.address4"  ref="ref_address4"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputRadioButtonVuex @input="OngenderChange" :prop="PI_gender" v-model="M_CM_ContactPersonnelRegistration.gender"  ref="ref_gender" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_zipcode" v-model="M_CM_ContactPersonnelRegistration.zipcode"  ref="ref_zipcode"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_icno" v-model="M_CM_ContactPersonnelRegistration.icno"  ref="ref_icno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncitycdChange" :prop="PI_citycd" :value="M_CM_ContactPersonnelRegistration.citycd" :label="M_CM_ContactPersonnelRegistration.citycdLabel" ref="ref_citycd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_passportno" v-model="M_CM_ContactPersonnelRegistration.passportno"  ref="ref_passportno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_phoneno" v-model="M_CM_ContactPersonnelRegistration.phoneno"  ref="ref_phoneno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_kimsno" v-model="M_CM_ContactPersonnelRegistration.kimsno"  ref="ref_kimsno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_faxno" v-model="M_CM_ContactPersonnelRegistration.faxno"  ref="ref_faxno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_kitano" v-model="M_CM_ContactPersonnelRegistration.kitano"  ref="ref_kitano"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_handphone" v-model="M_CM_ContactPersonnelRegistration.handphone"  ref="ref_handphone"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_CM_ContactPersonnelRegistration.remarks"  ref="ref_remarks" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_email" v-model="M_CM_ContactPersonnelRegistration.email"  ref="ref_email"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnattentionstatusChange" :prop="PI_attentionstatus" v-model="M_CM_ContactPersonnelRegistration.attentionstatus"  ref="ref_attentionstatus" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSFileUpload :prop="PI_referencefilename" @fileName="getFileName" 
                                                                        v-model="M_CM_ContactPersonnelRegistration.referencefilename" 
                                                                        :file="M_CM_ContactPersonnelRegistration.picturefilename" 
                                                                        :image="M_CM_ContactPersonnelRegistration.referencefilename"
                                                                         ref="ref_referencefilename" />
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close -->
                  
							</b-row>
							<ABSTAnalysis :prop="PTAnalysis" />
						</b-form>
					</b-col>
                </b-row>
            </b-collapse>
        </div>
    </div>
</template>

<script>

export default {
    props: {PageLevel:'', TabIndex: '', data: ''},
    data() {
        return {
			ValKey:null,
            FormType: "View",
			Module:"CM",
            propList: {
                initialWhere:"SequenceRegistrationNo = '" + this.ValKey + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			
            DeleteError: '',

            M_CM_ContactPersonnelRegistration :{
                sequenceregistrationno: 0,
                contactpersonnelid: '',
                contacttype: '',
                primarycontactpersonnel: '',
                salutationcd: '',
                fullname: '',
                familyname: '',
                address1: '',
                address2: '',
                address3: '',
                address4: '',
                citycd: '',
                zipcode: '',
                phoneno: '',
                faxno: '',
                handphone: '',
                email: '',
                jobtitle: '',
                birthdate: '',
                nationalitycd: '',
                religioncd: '',
                gender: 'M',
                maritalstatus: 'S',
                children: '0',
                icno: '',
                passportno: '',
                kimsno: '',
                kitano: '',
                picturefilename: '',
                referencefilename: '',
                groupcd: '',
                descs: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                controlsequenceno: 0,
                attentionstatus: 'N',
                groupdescs: '',
                salutationdescs: '',
                nationalitydescs: '',
                religiondescs: '',
                citydescs: '',
                debtorcd: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_contactpersonnelid: { 
                cValidate :'required|max:10', 
                cName: 'contactpersonnelid', 
                cLabel: 'Personnel ID', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_groupcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupPersonelGroup'    , 
                    ColumnDB: 'GroupCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'groupcd', 
                cLabel: 'Contact Personnel Group', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 2, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: 'CM/CM_ContactPersonnelGroup' ,
                cDisplayColumn: 'GroupCd,Descs' ,
            }, 
            PI_salutationcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMSalutation'    , 
                    ColumnDB: 'SalutationCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'salutationcd', 
                cLabel: 'Salutation', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 2, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: 'CM/CM_Salutation' ,
                cDisplayColumn: 'SalutationCd,Descs' ,
            }, 
            PI_jobtitle: { 
                cValidate :'', 
                cName: 'jobtitle', 
                cLabel: 'Job Title', 
                cLabelSize: 4, 
                cOrder: 18, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_fullname: { 
                cValidate :'', 
                cName: 'fullname', 
                cLabel: 'Full Name', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_birthdate: { 
                cValidate :'required', 
                cName: 'birthdate', 
                cLabel: 'Birth Date', 
                cLabelSize: 4, 
                cOrder: 19, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_familyname: { 
                cValidate :'', 
                cName: 'familyname', 
                cLabel: 'Family Name', 
                cLabelSize: 4, 
                cOrder: 5, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_nationalitycd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMNationality'    , 
                    ColumnDB: 'NationalityCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'nationalitycd', 
                cLabel: 'Nationality', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 20, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: 'CM/CM_Nationality' ,
                cDisplayColumn: 'NationalityCd,Descs' ,
            }, 
            PI_address1: { 
                cValidate :'required|max:50', 
                cName: 'address1', 
                cLabel: 'Address', 
                cLabelSize: 4, 
                cOrder: 6, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_religioncd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMReligion'    , 
                    ColumnDB: 'ReligionCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'religioncd', 
                cLabel: 'Religion', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 22, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: 'CM/CM_Religion' ,
                cDisplayColumn: 'ReligionCd,Descs' ,
            }, 
            PI_address2: { 
                cValidate :'', 
                cName: 'address2', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 7, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_maritalstatus: { 
                dataLookUp: null, 
                cValidate :'', 
                cName: 'maritalstatus', 
                cLabel: 'Marital Status', 
                cLabelSize: 4, 
                cOrder: 24, 
                cKey: false, 
                cTriggered: false, 
                cDefault: 'S', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: true, 
                cOption: [{ label: 'Single', id: 'S' },{ label: 'Married', id: 'M' },{ label: 'Widow', id: 'W' },{ label: 'Widower', id: 'R' }], 
                cMasterUrl: '' ,
                cDisplayColumn: '' ,
            }, 
            PI_address3: { 
                cValidate :'', 
                cName: 'address3', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 8, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_children: { 
                cValidate :'', 
                cName: 'children', 
                cLabel: 'Children', 
                cLabelSize: 4, 
                cOrder: 25, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_address4: { 
                cValidate :'', 
                cName: 'address4', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 9, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_gender: { 
                cValidate :'', 
                cName: 'gender', 
                cId: 'rdbgender', 
                cRadioOptions: [{ text: 'Male', value: 'M' }, { text: 'Female', value: 'F' }], 
                cRadioDefaultOption: 'M', 
                cLabel:'Gender', 
                cLabelSize: 4, 
                cOrder: 27, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_zipcode: { 
                cValidate :'', 
                cName: 'zipcode', 
                cLabel: 'Zip Code', 
                cLabelSize: 4, 
                cOrder: 10, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_icno: { 
                cValidate :'', 
                cName: 'icno', 
                cLabel: 'IC No', 
                cLabelSize: 4, 
                cOrder: 28, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_citycd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMCity'    , 
                    ColumnDB: 'CityCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'citycd', 
                cLabel: 'City', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 11, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: 'CM/CM_CountryCity' ,
                cDisplayColumn: 'CityCd,CountryCd,Descs' ,
            }, 
            PI_passportno: { 
                cValidate :'', 
                cName: 'passportno', 
                cLabel: 'Passport No', 
                cLabelSize: 4, 
                cOrder: 29, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_phoneno: { 
                cValidate :'', 
                cName: 'phoneno', 
                cLabel: 'Phone', 
                cLabelSize: 4, 
                cOrder: 13, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_kimsno: { 
                cValidate :'', 
                cName: 'kimsno', 
                cLabel: 'KIMS No', 
                cLabelSize: 4, 
                cOrder: 30, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_faxno: { 
                cValidate :'', 
                cName: 'faxno', 
                cLabel: 'Fax', 
                cLabelSize: 4, 
                cOrder: 14, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_kitano: { 
                cValidate :'', 
                cName: 'kitano', 
                cLabel: 'KITA No', 
                cLabelSize: 4, 
                cOrder: 31, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_handphone: { 
                cValidate :'', 
                cName: 'handphone', 
                cLabel: 'Handphone', 
                cLabelSize: 4, 
                cOrder: 15, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks', 
                cLabelSize: 4, 
                cOrder:32, 
                cKey: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible: true, 
                cResize: false, 
                cReadOnly: false, 
                cRows: 3, 
                cMaxRows: 3, 
                cSize: 'md', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
            }, 
            PI_email: { 
                cValidate :'', 
                cName: 'email', 
                cLabel: 'Email', 
                cLabelSize: 4, 
                cOrder: 17, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_attentionstatus: { 
                cValidate :'', 
                cName: 'attentionstatus', 
                cId: 'rdbattentionstatus', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' }, { text: 'No', value: 'N' }], 
                cRadioDefaultOption: 'N', 
                cLabel:'UP/Attention', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_referencefilename: { 
                cValidate :'', 
                cName:'referencefilename', 
                cLabel: 'Picture File', 
                cLabelSize: 4, 
                cOrder:0, 
                cVisible: true, 
                cModule: 'CM', 
                cPlaceholder: 'Choose a file...', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 

			PTAnalysis: {
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cPageMasterSeq: this.data.PageMasterSeq,
                cFormPageNo: this.data.PageOrder
            }         
        }
    },
	computed : {
    inputStatus() {
      if(this.$store.getters.getLevel == this.PageLevel && this.$store.getters.getTab == this.TabIndex){
        return this.$store.getters.getStatus.toUpperCase()
      }
      else {
        return 'VIEW'
      }
    },
	DataRow(){
		return this.$store.getters.GetPage2Data
	},
    DataRowPage1(){
		return this.$store.getters.GetPage1Data
	}
  },
    methods: {
        OngroupcdChange (data) {
        this.$nextTick(() => {
            this.M_CM_ContactPersonnelRegistration.groupcd = data.id
            this.M_CM_ContactPersonnelRegistration.groupcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{groupcd}
            }
        })
        this.$forceUpdate()
        },
        OnsalutationcdChange (data) {
        this.$nextTick(() => {
            this.M_CM_ContactPersonnelRegistration.salutationcd = data.id
            this.M_CM_ContactPersonnelRegistration.salutationcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{salutationcd}
            }
        })
        this.$forceUpdate()
        },
        OnbirthdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{birthdate}
            }
        })
        this.$forceUpdate()
        },
        OnnationalitycdChange (data) {
        this.$nextTick(() => {
            this.M_CM_ContactPersonnelRegistration.nationalitycd = data.id
            this.M_CM_ContactPersonnelRegistration.nationalitycdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{nationalitycd}
            }
        })
        this.$forceUpdate()
        },
        OnreligioncdChange (data) {
        this.$nextTick(() => {
            this.M_CM_ContactPersonnelRegistration.religioncd = data.id
            this.M_CM_ContactPersonnelRegistration.religioncdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{religioncd}
            }
        })
        this.$forceUpdate()
        },
        OngenderChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{gender}
            }
        })
        this.$forceUpdate()
        },
        OncitycdChange (data) {
        this.$nextTick(() => {
            this.M_CM_ContactPersonnelRegistration.citycd = data.id
            this.M_CM_ContactPersonnelRegistration.citycdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{citycd}
            }
        })
        this.$forceUpdate()
        },
        OnremarksChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{remarks}
            }
        })
        this.$forceUpdate()
        },
        OnattentionstatusChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{attentionstatus}
            }
        })
        this.$forceUpdate()
        },
		
		setToolbarButton () {
           this.getToolbar().statusFunction[0].disabled = true
		},
        M_Head_Table () {
        },
        M_PageSize(){
        },
        M_TabClick(){
        },
        M_Pagination(){
        },
        M_Advance_Filter(){
        },
		M_Search(data){
        },
        M_Refresh(){
        },
		M_Cancel() {			
		},		
		doDoubleClick(){
        },
		rowClicked (record, index) {
        },
        rowLink: function(url){
            this.$refs.modalTest.show()
        },
		paramFromParent(){
            this.$parent.showForm = false
			
            let data = this.$store.getters.GetPage1Data
            this.M_CM_ContactPersonnelRegistration.sequenceregistrationno = data.SequenceRegistrationNo 
            this.propList.initialWhere =" SequenceRegistrationNo = '" + data.SequenceRegistrationNo + "' "
        

            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SequenceRegistrationNo: this.M_CM_ContactPersonnelRegistration.sequenceregistrationno,
                ContactPersonnelID: this.M_CM_ContactPersonnelRegistration.contactpersonnelid,
                ContactType: this.M_CM_ContactPersonnelRegistration.contacttype,
                SalutationCd: this.M_CM_ContactPersonnelRegistration.salutationcd == '' || this.M_CM_ContactPersonnelRegistration.salutationcd == null ? 'NULL' : this.M_CM_ContactPersonnelRegistration.salutationcd ,
                FullName: this.M_CM_ContactPersonnelRegistration.fullname,
                FamilyName: this.M_CM_ContactPersonnelRegistration.familyname,
                Address1: this.M_CM_ContactPersonnelRegistration.address1,
                Address2: this.M_CM_ContactPersonnelRegistration.address2,
                Address3: this.M_CM_ContactPersonnelRegistration.address3,
                Address4: this.M_CM_ContactPersonnelRegistration.address4,
                GroupCd: this.M_CM_ContactPersonnelRegistration.groupcd == '' || this.M_CM_ContactPersonnelRegistration.groupcd == null ? 'NULL' : this.M_CM_ContactPersonnelRegistration.groupcd ,
                Descs: this.M_CM_ContactPersonnelRegistration.descs,
                CityCd: this.M_CM_ContactPersonnelRegistration.citycd == '' || this.M_CM_ContactPersonnelRegistration.citycd == null ? 'NULL' : this.M_CM_ContactPersonnelRegistration.citycd ,
                ZipCode: this.M_CM_ContactPersonnelRegistration.zipcode,
                PhoneNo: this.M_CM_ContactPersonnelRegistration.phoneno,
                FaxNo: this.M_CM_ContactPersonnelRegistration.faxno,
                Handphone: this.M_CM_ContactPersonnelRegistration.handphone,
                Email: this.M_CM_ContactPersonnelRegistration.email,
                JobTitle: this.M_CM_ContactPersonnelRegistration.jobtitle,
                BirthDate: this.M_CM_ContactPersonnelRegistration.birthdate == '' || this.M_CM_ContactPersonnelRegistration.birthdate == null ? 'NULL' : this.M_CM_ContactPersonnelRegistration.birthdate ,
                NationalityCd: this.M_CM_ContactPersonnelRegistration.nationalitycd == '' || this.M_CM_ContactPersonnelRegistration.nationalitycd == null ? 'NULL' : this.M_CM_ContactPersonnelRegistration.nationalitycd ,
                ReligionCd: this.M_CM_ContactPersonnelRegistration.religioncd == '' || this.M_CM_ContactPersonnelRegistration.religioncd == null ? 'NULL' : this.M_CM_ContactPersonnelRegistration.religioncd ,
                Gender: this.M_CM_ContactPersonnelRegistration.gender,
                MaritalStatus: this.M_CM_ContactPersonnelRegistration.maritalstatus,
                Children: this.M_CM_ContactPersonnelRegistration.children,
                ICNo: this.M_CM_ContactPersonnelRegistration.icno,
                PassportNo: this.M_CM_ContactPersonnelRegistration.passportno,
                KIMSNo: this.M_CM_ContactPersonnelRegistration.kimsno,
                KITANo: this.M_CM_ContactPersonnelRegistration.kitano,
                PictureFileName: this.M_CM_ContactPersonnelRegistration.picturefilename,
                ReferenceFileName: this.M_CM_ContactPersonnelRegistration.referencefilename,
                Remarks: this.M_CM_ContactPersonnelRegistration.remarks,
                UserInput: this.getDataUser().UserId ,
                DebtorCd: this.M_CM_ContactPersonnelRegistration.debtorcd,
                AttentionStatus: this.M_CM_ContactPersonnelRegistration.attentionstatus                
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return

				//kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultInsert(response.Message)
					
				
            })
        },
        M_Update() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SequenceRegistrationNo: this.M_CM_ContactPersonnelRegistration.sequenceregistrationno,
                ContactPersonnelID: this.M_CM_ContactPersonnelRegistration.contactpersonnelid,
                ContactType: this.M_CM_ContactPersonnelRegistration.contacttype,
                SalutationCd: this.M_CM_ContactPersonnelRegistration.salutationcd == '' || this.M_CM_ContactPersonnelRegistration.salutationcd == null ? 'NULL' : this.M_CM_ContactPersonnelRegistration.salutationcd ,
                FullName: this.M_CM_ContactPersonnelRegistration.fullname,
                FamilyName: this.M_CM_ContactPersonnelRegistration.familyname,
                Address1: this.M_CM_ContactPersonnelRegistration.address1,
                Address2: this.M_CM_ContactPersonnelRegistration.address2,
                Address3: this.M_CM_ContactPersonnelRegistration.address3,
                Address4: this.M_CM_ContactPersonnelRegistration.address4,
                CityCd: this.M_CM_ContactPersonnelRegistration.citycd == '' || this.M_CM_ContactPersonnelRegistration.citycd == null ? 'NULL' : this.M_CM_ContactPersonnelRegistration.citycd ,
                GroupCd: this.M_CM_ContactPersonnelRegistration.groupcd == '' || this.M_CM_ContactPersonnelRegistration.groupcd == null ? 'NULL' : this.M_CM_ContactPersonnelRegistration.groupcd ,
                Descs: this.M_CM_ContactPersonnelRegistration.descs,
                ZipCode: this.M_CM_ContactPersonnelRegistration.zipcode,
                PhoneNo: this.M_CM_ContactPersonnelRegistration.phoneno,
                FaxNo: this.M_CM_ContactPersonnelRegistration.faxno,
                Handphone: this.M_CM_ContactPersonnelRegistration.handphone,
                Email: this.M_CM_ContactPersonnelRegistration.email,
                JobTitle: this.M_CM_ContactPersonnelRegistration.jobtitle,
                BirthDate: this.M_CM_ContactPersonnelRegistration.birthdate == '' || this.M_CM_ContactPersonnelRegistration.birthdate == null ? 'NULL' : this.M_CM_ContactPersonnelRegistration.birthdate ,
                NationalityCd: this.M_CM_ContactPersonnelRegistration.nationalitycd == '' || this.M_CM_ContactPersonnelRegistration.nationalitycd == null ? 'NULL' : this.M_CM_ContactPersonnelRegistration.nationalitycd ,
                ReligionCd: this.M_CM_ContactPersonnelRegistration.religioncd == '' || this.M_CM_ContactPersonnelRegistration.religioncd == null ? 'NULL' : this.M_CM_ContactPersonnelRegistration.religioncd ,
                Gender: this.M_CM_ContactPersonnelRegistration.gender,
                MaritalStatus: this.M_CM_ContactPersonnelRegistration.maritalstatus,
                Children: this.M_CM_ContactPersonnelRegistration.children,
                ICNo: this.M_CM_ContactPersonnelRegistration.icno,
                PassportNo: this.M_CM_ContactPersonnelRegistration.passportno,
                KIMSNo: this.M_CM_ContactPersonnelRegistration.kimsno,
                KITANo: this.M_CM_ContactPersonnelRegistration.kitano,
                PictureFileName: this.M_CM_ContactPersonnelRegistration.picturefilename,
                ReferenceFileName: this.M_CM_ContactPersonnelRegistration.referencefilename,
                Remarks: this.M_CM_ContactPersonnelRegistration.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_CM_ContactPersonnelRegistration.lastupdatestamp,
                DebtorCd: this.M_CM_ContactPersonnelRegistration.debtorcd,
                AttentionStatus: this.M_CM_ContactPersonnelRegistration.attentionstatus                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_CM_ContactPersonnelRegistration = {
                sequenceregistrationno: 0,
                contactpersonnelid: '',
                contacttype: '',
                primarycontactpersonnel: '',
                salutationcd: '',
                fullname: '',
                familyname: '',
                address1: '',
                address2: '',
                address3: '',
                address4: '',
                citycd: '',
                zipcode: '',
                phoneno: '',
                faxno: '',
                handphone: '',
                email: '',
                jobtitle: '',
                birthdate: '',
                nationalitycd: '',
                religioncd: '',
                gender: 'M',
                maritalstatus: 'S',
                children: '0',
                icno: '',
                passportno: '',
                kimsno: '',
                kitano: '',
                picturefilename: '',
                referencefilename: '',
                groupcd: '',
                descs: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                controlsequenceno: 0,
                attentionstatus: 'N',
                groupdescs: '',
                salutationdescs: '',
                nationalitydescs: '',
                religiondescs: '',
                citydescs: '',
                debtorcd: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_CM_ContactPersonnelRegistration.sequenceregistrationno = data.SequenceRegistrationNo 

            this.$refs.ref_contactpersonnelid.focus()

        },
        M_Edit(){
          this.$refs.ref_groupcd.focus()
        },
        M_Delete(dt){           

            var data = this.FormToABSList().getRowSelected()  
            var dataDelete = []

            
            data.forEach((value) => {
            dataDelete.push({
            SequenceRegistrationNo: value.SequenceRegistrationNo,
            ContactPersonnelID: value.ContactPersonnelID,
            LastUpdateStamp: value.LastUpdateStamp,
            _Message_: "",
            DebtorCd: ''
                    })
            })
            
            var param = {
                    OptionSeq: this.getOptionSeq().OptionSeq,
                    LineNo: this.$parent.data.PageOrder,
                    Data: dataDelete
                }
                
                this.postJSONMulti( this.getUrlNewDeleteMulti(), param )
                .then(response => {
                    if (response == null) return

                    this.$parent.resultDelete()
                }) 
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                sequenceregistrationno: record.SequenceRegistrationNo,
                contactpersonnelid: record.ContactPersonnelID,
                debtorcd: record.DebtorCd				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_CM_ContactPersonnelRegistration = {
                sequenceregistrationno: data.sequenceregistrationno,
                contactpersonnelid: data.contactpersonnelid,
                contacttype: data.contacttype,
                primarycontactpersonnel: data.primarycontactpersonnel,
                salutationcd: data.salutationcd,
                fullname: data.fullname,
                familyname: data.familyname,
                address1: data.address1,
                address2: data.address2,
                address3: data.address3,
                address4: data.address4,
                citycd: data.citycd,
                zipcode: data.zipcode,
                phoneno: data.phoneno,
                faxno: data.faxno,
                handphone: data.handphone,
                email: data.email,
                jobtitle: data.jobtitle,
                birthdate: data.birthdate,
                nationalitycd: data.nationalitycd,
                religioncd: data.religioncd,
                gender: data.gender,
                maritalstatus: data.maritalstatus,
                children: data.children,
                icno: data.icno,
                passportno: data.passportno,
                kimsno: data.kimsno,
                kitano: data.kitano,
                picturefilename: data.picturefilename,
                referencefilename: data.referencefilename,
                groupcd: data.groupcd,
                descs: data.descs,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                timeinput: data.timeinput,
                timeedit: data.timeedit,
                controlsequenceno: data.controlsequenceno,
                attentionstatus: data.attentionstatus,
                groupdescs: data.groupdescs,
                salutationdescs: data.salutationdescs,
                nationalitydescs: data.nationalitydescs,
                religiondescs: data.religiondescs,
                citydescs: data.citydescs,
                debtorcd: data.debtorcd,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
                 

                this.M_CM_ContactPersonnelRegistration.groupcdLabel = this.M_CM_ContactPersonnelRegistration.groupcd != null ? data.groupcd + this.separator  :'' 
                this.M_CM_ContactPersonnelRegistration.salutationcdLabel = this.M_CM_ContactPersonnelRegistration.salutationcd != null ? data.salutationcd + this.separator  :'' 
                this.M_CM_ContactPersonnelRegistration.nationalitycdLabel = this.M_CM_ContactPersonnelRegistration.nationalitycd != null ? data.nationalitycd + this.separator  :'' 
                this.M_CM_ContactPersonnelRegistration.religioncdLabel = this.M_CM_ContactPersonnelRegistration.religioncd != null ? data.religioncd + this.separator  :'' 
                this.M_CM_ContactPersonnelRegistration.citycdLabel = this.M_CM_ContactPersonnelRegistration.citycd != null ? data.citycd + this.separator  :'' 
  

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }
        ,getFileName(fileName) {
         this.CM_ContactPersonnelRegistration.picturefilename = fileName 
        }
		
    },
    created: function() {
    },
    beforeMount: function() {
    },
    mounted: function() {
        this.hideSideBarMenu()
		
    },
    beforeUpdate: function() {
    },
    updated: function() {
    },
    beforeDestroy: function() {
    },
    destroyed: function() {
    }
}
</script>

