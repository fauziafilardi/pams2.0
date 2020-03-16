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
                                        <ABSInputSelectList @change="OnsalutationcdChange" :prop="PI_salutationcd" :value="M_CM_ContactFamilyRegistration.salutationcd" :label="M_CM_ContactFamilyRegistration.salutationcdLabel" ref="ref_salutationcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_name" v-model="M_CM_ContactFamilyRegistration.name"  ref="ref_name"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnrelationChange" :prop="PI_relation" :value="M_CM_ContactFamilyRegistration.relation" :label="M_CM_ContactFamilyRegistration.relationLabel" ref="ref_relation"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnbirthdateChange" :prop="PI_birthdate" v-model="M_CM_ContactFamilyRegistration.birthdate"  ref="ref_birthdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OngenderChange" :prop="PI_gender" v-model="M_CM_ContactFamilyRegistration.gender"  ref="ref_gender" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnnationalitycdChange" :prop="PI_nationalitycd" :value="M_CM_ContactFamilyRegistration.nationalitycd" :label="M_CM_ContactFamilyRegistration.nationalitycdLabel" ref="ref_nationalitycd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnreligioncdChange" :prop="PI_religioncd" :value="M_CM_ContactFamilyRegistration.religioncd" :label="M_CM_ContactFamilyRegistration.religioncdLabel" ref="ref_religioncd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_icno" v-model="M_CM_ContactFamilyRegistration.icno"  ref="ref_icno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_handphone" v-model="M_CM_ContactFamilyRegistration.handphone"  ref="ref_handphone"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_email" v-model="M_CM_ContactFamilyRegistration.email"  ref="ref_email"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_CM_ContactFamilyRegistration.remarks"  ref="ref_remarks" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSFileUpload :prop="PI_referencefilename" @fileName="getFileName" 
                                                                        v-model="M_CM_ContactFamilyRegistration.referencefilename" 
                                                                        :file="M_CM_ContactFamilyRegistration.picturefilename" 
                                                                        :image="M_CM_ContactFamilyRegistration.referencefilename"
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
            FormType: "List",
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

            M_CM_ContactFamilyRegistration :{
                sequenceregistrationno: '',
                sequenceno: 0,
                salutationcd: '',
                name: '',
                relation: 'P',
                birthdate: '',
                nationalitycd: '',
                religioncd: '',
                gender: 'M',
                icno: '',
                handphone: '',
                email: '',
                picturefilename: '',
                referencefilename: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                controlsequenceno: 0,
                rowid: 0,
                salutationdescs: '',
                nationalitydescs: '',
                religiondescs: ''
                    }
            ,
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
                cOrder: 1, 
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
            PI_name: { 
                cValidate :'required|max:50', 
                cName: 'name', 
                cLabel: 'Name', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_relation: { 
                dataLookUp: null, 
                cValidate :'', 
                cName: 'relation', 
                cLabel: 'Relationship', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cTriggered: false, 
                cDefault: 'P', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: true, 
                cOption: [{ label: 'Parent', id: 'P' },{ label: 'Sibling', id: 'S' },{ label: 'Spouse', id: 'U' },{ label: 'Child', id: 'C' }], 
                cMasterUrl: '' ,
                cDisplayColumn: '' ,
            }, 
            PI_birthdate: { 
                cValidate :'required', 
                cName: 'birthdate', 
                cLabel: 'Birth Date', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cVisible:  true, 
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
                cOrder: 6, 
                cProtect: false, 
                cVisible:  true, 
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
                cOrder: 7, 
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
                cOrder: 8, 
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
            PI_icno: { 
                cValidate :'', 
                cName: 'icno', 
                cLabel: 'IC Number', 
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
            PI_handphone: { 
                cValidate :'', 
                cName: 'handphone', 
                cLabel: 'Handphone', 
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
            PI_email: { 
                cValidate :'', 
                cName: 'email', 
                cLabel: 'Email', 
                cLabelSize: 4, 
                cOrder: 11, 
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
                cOrder:12, 
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
        OnsalutationcdChange (data) {
        this.$nextTick(() => {
            this.M_CM_ContactFamilyRegistration.salutationcd = data.id
            this.M_CM_ContactFamilyRegistration.salutationcdLabel = data.label
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
        OngenderChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{gender}
            }
        })
        this.$forceUpdate()
        },
        OnnationalitycdChange (data) {
        this.$nextTick(() => {
            this.M_CM_ContactFamilyRegistration.nationalitycd = data.id
            this.M_CM_ContactFamilyRegistration.nationalitycdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{nationalitycd}
            }
        })
        this.$forceUpdate()
        },
        OnreligioncdChange (data) {
        this.$nextTick(() => {
            this.M_CM_ContactFamilyRegistration.religioncd = data.id
            this.M_CM_ContactFamilyRegistration.religioncdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{religioncd}
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
            this.M_CM_ContactFamilyRegistration.sequenceregistrationno = data.SequenceRegistrationNo 
            this.propList.initialWhere =" SequenceRegistrationNo = '" + data.SequenceRegistrationNo + "' "
        

            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SequenceRegistrationNo: this.M_CM_ContactFamilyRegistration.sequenceregistrationno,
                SalutationCd: this.M_CM_ContactFamilyRegistration.salutationcd == '' || this.M_CM_ContactFamilyRegistration.salutationcd == null ? 'NULL' : this.M_CM_ContactFamilyRegistration.salutationcd ,
                Name: this.M_CM_ContactFamilyRegistration.name,
                Relation: this.M_CM_ContactFamilyRegistration.relation,
                BirthDate: this.M_CM_ContactFamilyRegistration.birthdate == '' || this.M_CM_ContactFamilyRegistration.birthdate == null ? 'NULL' : this.M_CM_ContactFamilyRegistration.birthdate ,
                Gender: this.M_CM_ContactFamilyRegistration.gender,
                NationalityCd: this.M_CM_ContactFamilyRegistration.nationalitycd == '' || this.M_CM_ContactFamilyRegistration.nationalitycd == null ? 'NULL' : this.M_CM_ContactFamilyRegistration.nationalitycd ,
                ReligionCd: this.M_CM_ContactFamilyRegistration.religioncd == '' || this.M_CM_ContactFamilyRegistration.religioncd == null ? 'NULL' : this.M_CM_ContactFamilyRegistration.religioncd ,
                ICNo: this.M_CM_ContactFamilyRegistration.icno,
                Handphone: this.M_CM_ContactFamilyRegistration.handphone,
                Email: this.M_CM_ContactFamilyRegistration.email,
                PictureFileName: this.M_CM_ContactFamilyRegistration.picturefilename,
                ReferenceFileName: this.M_CM_ContactFamilyRegistration.referencefilename,
                Remarks: this.M_CM_ContactFamilyRegistration.remarks,
                UserInput: this.getDataUser().UserId                 
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
                SequenceRegistrationNo: this.M_CM_ContactFamilyRegistration.sequenceregistrationno,
                SequenceNo: this.M_CM_ContactFamilyRegistration.sequenceno,
                SalutationCd: this.M_CM_ContactFamilyRegistration.salutationcd == '' || this.M_CM_ContactFamilyRegistration.salutationcd == null ? 'NULL' : this.M_CM_ContactFamilyRegistration.salutationcd ,
                Name: this.M_CM_ContactFamilyRegistration.name,
                Relation: this.M_CM_ContactFamilyRegistration.relation,
                BirthDate: this.M_CM_ContactFamilyRegistration.birthdate == '' || this.M_CM_ContactFamilyRegistration.birthdate == null ? 'NULL' : this.M_CM_ContactFamilyRegistration.birthdate ,
                Gender: this.M_CM_ContactFamilyRegistration.gender,
                NationalityCd: this.M_CM_ContactFamilyRegistration.nationalitycd == '' || this.M_CM_ContactFamilyRegistration.nationalitycd == null ? 'NULL' : this.M_CM_ContactFamilyRegistration.nationalitycd ,
                ReligionCd: this.M_CM_ContactFamilyRegistration.religioncd == '' || this.M_CM_ContactFamilyRegistration.religioncd == null ? 'NULL' : this.M_CM_ContactFamilyRegistration.religioncd ,
                ICNo: this.M_CM_ContactFamilyRegistration.icno,
                Handphone: this.M_CM_ContactFamilyRegistration.handphone,
                Email: this.M_CM_ContactFamilyRegistration.email,
                PictureFileName: this.M_CM_ContactFamilyRegistration.picturefilename,
                ReferenceFileName: this.M_CM_ContactFamilyRegistration.referencefilename,
                Remarks: this.M_CM_ContactFamilyRegistration.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_CM_ContactFamilyRegistration.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_CM_ContactFamilyRegistration = {
                sequenceregistrationno: '',
                sequenceno: 0,
                salutationcd: '',
                name: '',
                relation: 'P',
                birthdate: '',
                nationalitycd: '',
                religioncd: '',
                gender: 'M',
                icno: '',
                handphone: '',
                email: '',
                picturefilename: '',
                referencefilename: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                controlsequenceno: 0,
                rowid: 0,
                salutationdescs: '',
                nationalitydescs: '',
                religiondescs: ''
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_CM_ContactFamilyRegistration.sequenceregistrationno = data.SequenceRegistrationNo 

            this.$refs.ref_salutationcd.focus()

        },
        M_Edit(){
            this.$refs.ref_salutationcd.focus()
        },
        M_Delete(dt){           

            var data = this.FormToABSList().getRowSelected()  
            var dataDelete = []

            
            data.forEach((value) => {
            dataDelete.push({
            SequenceRegistrationNo: value.SequenceRegistrationNo,  
            SequenceNo: value.SequenceNo,
            LastUpdateStamp: value.LastUpdateStamp,
            _Message_: ""
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
                sequenceno: record.SequenceNo				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_CM_ContactFamilyRegistration = {
                sequenceregistrationno: data.sequenceregistrationno,
                sequenceno: data.sequenceno,
                salutationcd: data.salutationcd,
                name: data.name,
                relation: data.relation,
                birthdate: data.birthdate,
                nationalitycd: data.nationalitycd,
                religioncd: data.religioncd,
                gender: data.gender,
                icno: data.icno,
                handphone: data.handphone,
                email: data.email,
                picturefilename: data.picturefilename,
                referencefilename: data.referencefilename,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                timeinput: data.timeinput,
                timeedit: data.timeedit,
                lastupdatestamp: record.LastUpdateStamp,
                controlsequenceno: data.controlsequenceno,
                rowid: data.rowid,
                salutationdescs: data.salutationdescs,
                nationalitydescs: data.nationalitydescs,
                religiondescs: data.religiondescs
                    }
                 

                this.M_CM_ContactFamilyRegistration.salutationcdLabel = this.M_CM_ContactFamilyRegistration.salutationcd != null ? data.salutationcd + this.separator  :'' 
                this.M_CM_ContactFamilyRegistration.nationalitycdLabel = this.M_CM_ContactFamilyRegistration.nationalitycd != null ? data.nationalitycd + this.separator  :'' 
                this.M_CM_ContactFamilyRegistration.religioncdLabel = this.M_CM_ContactFamilyRegistration.religioncd != null ? data.religioncd + this.separator  :'' 
  

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }
        ,getFileName(fileName) {
         this.CM_ContactFamilyRegistration.picturefilename = fileName 
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

