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
                                        <ABSinputTextVuex @input="OncontactidChange" :prop="PI_contactid" v-model="M_CM_Contact.contactid"  ref="ref_contactid"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncontactclasscdChange" :prop="PI_contactclasscd" :value="M_CM_Contact.contactclasscd" :label="M_CM_Contact.contactclasscdLabel" ref="ref_contactclasscd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnclassificationidChange" :prop="PI_classificationid" v-model="M_CM_Contact.classificationid"  ref="ref_classificationid" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnparentidChange" :prop="PI_parentid" :value="M_CM_Contact.parentid" :label="M_CM_Contact.parentidLabel" ref="ref_parentid" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OncategoryChange" :prop="PI_category" v-model="M_CM_Contact.category"  ref="ref_category" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OngovernmentChange" :prop="PI_government" v-model="M_CM_Contact.government"  ref="ref_government" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OnnameChange" :prop="PI_name" v-model="M_CM_Contact.name"  ref="ref_name"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OnwebsiteChange" :prop="PI_website" v-model="M_CM_Contact.website"  ref="ref_website"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OntaxcollectableChange" :prop="PI_taxcollectable" v-model="M_CM_Contact.taxcollectable"  ref="ref_taxcollectable" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OntaxnoChange" :prop="PI_taxno" v-model="M_CM_Contact.taxno"  ref="ref_taxno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OntaxreferencenoChange" :prop="PI_taxreferenceno" v-model="M_CM_Contact.taxreferenceno"  ref="ref_taxreferenceno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OntaxregistrationdateChange" :prop="PI_taxregistrationdate" v-model="M_CM_Contact.taxregistrationdate"  ref="ref_taxregistrationdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_CM_Contact.remarks"  ref="ref_remarks" />
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close -->
                  
							</b-row>
						</b-form>
					</b-col>
                </b-row>
            </b-collapse>
        </div>
    </div>
</template>

<script>

export default {
    props: {PageLevel: '', TabIndex: '', data: ''},
    data() {
        return {
		FormType: "List",
        Module:"CM",
        ValKey:null,
        cInsertKey:'id=ContactId,label=ContactId+|+Name',
        DataSpec: null,
       propList: {
                initialWhere:"",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
            IEBy: {Input: '', Edit: ''},   			
            ContactApproval: '',
            ContactRunningCd: '',

            M_CM_Contact :{
                contactid: '',
                contactclasscd: '',
                classificationid: [],
                parentid: '',
                category: 'P',
                government: 'N',
                name: '',
                website: '',
                taxno: '',
                taxreferenceno: '',
                taxregistrationdate: '',
                taxcollectable: 'Y',
                remarks: '',
                userinput: '',
                timeinput: '',
                useredit: this.getDataUser().UserId,
                timeedit: '',
                classdescs: '',
                parentname: '',
                classificationlocalid: '',
                classificationcentralid: '',
                classificationgroupid: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_contactid: { 
                cValidate :'required|max:20', 
                cName: 'contactid', 
                cLabel: 'Contact ID', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_contactclasscd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMContactClass'    , 
                    ColumnDB: 'ContactClassCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'contactclasscd', 
                cLabel: 'Contact Class Code', 
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
                cMasterUrl: 'CM/CM_ContactClass' ,
                cDisplayColumn: 'ContactClassCd,Descs' ,
            }, 
            PI_classificationid: { 
                cValidate :'', 
                cName: 'classificationid', 
                cId: 'rdbclassificationid', 
                cRadioOptions: [{ text: 'Local ID', value: 'L' }, { text: 'Central ID', value: 'C' }, { text: 'Group ID', value : 'G'}], 
                cRadioDefaultOption: '', 
                cLabel:'Contact ID Classification', 
                cLabelSize: 4, 
                cOrder: 3, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cShowClearButton: true
            }, 
            PI_parentid: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCentral'    , 
                    ColumnDB: 'ContactID'   , 
                    InitialWhere: "Classification = 'Central'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'parentid', 
                cLabel: 'Parent ID', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 4, 
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
                cMasterUrl: 'CM/CM_Contact' ,
                cDisplayColumn: 'ContactID,Name' ,
            }, 
            PI_category: { 
                cValidate :'', 
                cName: 'category', 
                cId: 'rdbcategory', 
                cRadioOptions: [{ text: 'Personal', value: 'P' }, { text: 'Company', value: 'C' }], 
                cRadioDefaultOption: 'P', 
                cLabel:'Category', 
                cLabelSize: 4, 
                cOrder: 5, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_government: { 
                cValidate :'', 
                cName: 'government', 
                cId: 'rdbgovernment', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' }, { text: 'No', value: 'N' }], 
                cRadioDefaultOption: 'N', 
                cLabel:'Government', 
                cLabelSize: 4, 
                cOrder: 6, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_name: { 
                cValidate :'required|max:50', 
                cName: 'name', 
                cLabel: 'Name', 
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
            PI_website: { 
                cValidate :'max:50', 
                cName: 'website', 
                cLabel: 'Website', 
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
            PI_taxcollectable: { 
                cValidate :'', 
                cName: 'taxcollectable', 
                cId: 'rdbtaxcollectable', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' }, { text: 'No', value: 'N' }], 
                cRadioDefaultOption: 'Y', 
                cLabel:'Tax Collectable', 
                cLabelSize: 4, 
                cOrder: 9, 
                cProtect: true, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_taxno: { 
                cValidate :'max:30|required', 
                cName: 'taxno', 
                cLabel: 'Tax Reg. No', 
                cLabelSize: 4, 
                cOrder: 10, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_taxreferenceno: { 
                cValidate :'max:30', 
                cName: 'taxreferenceno', 
                cLabel: 'Tax Reference No', 
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
            PI_taxregistrationdate: { 
                cValidate :'', 
                cName: 'taxregistrationdate', 
                cLabel: 'Tax Reg. Date', 
                cLabelSize: 4, 
                cOrder: 12, 
                cKey: false, 
                cVisible:  true, 
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
                cOrder:13, 
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
		return this.$store.getters.GetPage1Data
	}
  },
    methods: {
        GetCMSpecification(){
            var param = {
            OptionFunctionCd: "GetCMSpecification",
            ModuleCd: this.Module
          }

          this.FnDynamicFunction(param)
            .then(ress => {
              if(ress == null) return
              var data = ress[0]
              console.log(data)
              this.DataSpec = data
              if(data.ContactApproval == 'Y'){
                //   this.$store.commit('setFormType','Edit')
                //   this.FormType = 'Edit'
                //   this.getToolbar().ProcessPS()
                  this.getToolbar().statusFunction[0].disabled = true
                //   this.getToolbar().statusFunction[1].disabled = false
                //     this.getToolbar().statusFunction[2].disabled = false
                // this.getToolbar().statusFunction[4].disabled = false
              }else{
                  this.getToolbar().statusFunction[0].disabled = false
                //   this.$store.commit('setFormType','List')
                //   this.FormType = 'List'
                // this.getToolbar().ProcessPS()
                // this.getToolbar().statusFunction[4].disabled = false
              }
            })
        },
        OncontactidChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{contactid}
            }
        })
        this.$forceUpdate()
        },
        OncontactclasscdChange (data) {
        this.$nextTick(() => {
            this.M_CM_Contact.contactclasscd = data.id
            this.M_CM_Contact.contactclasscdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{contactclasscd}
            }
        })
        this.$forceUpdate()
        },
        OnclassificationidChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
        if (data == "C")
             { this.M_CM_Contact.classificationcentralid = "Y"
             this.M_CM_Contact.classificationlocalid = "N"
             this.M_CM_Contact.classificationgroupid = "N"
             this.$refs.ref_parentid.prop.dataLookUp.InitialWhere = " Classification = 'Group' AND ContactId <> '" + this.M_CM_Contact.contactid + "' "
             this.$refs.ref_parentid.prop.dataLookUp.LookUpCd = "GetLookupClassificationID"
             this.$refs.ref_parentid.prop.dataLookUp.ColumnDB = "ParentId"
             this.PI_parentid.cProtect = false
             this.PI_parentid.cValidate = "required"
             this.PI_taxno.cProtect = false
             this.$refs.ref_taxno.isRequired = true
             this.PI_taxno.cValidate = "required"
            //  this.PI_taxregistrationdate.cValidate = "required"
            //  this.$refs.ref_taxregdate.isRequired = true 
             }
        if (data == "L")
             { this.M_CM_Contact.classificationcentralid = "N"
             this.M_CM_Contact.classificationlocalid = "Y"
             this.M_CM_Contact.classificationgroupid = "N"
             this.$refs.ref_parentid.prop.dataLookUp.InitialWhere = " Classification = 'Central' AND ContactId <> '" + this.M_CM_Contact.contactid + "' "
             this.$refs.ref_parentid.prop.dataLookUp.LookUpCd = "GetLookupClassificationID"
            //  this.PI_parentid.dataLookUp.ColumnDB = "ParentId"
             this.$refs.ref_parentid.prop.dataLookUp.ColumnDB = "ParentId"
             this.PI_parentid.cProtect = false
             this.PI_parentid.cValidate = "required"
             this.PI_taxno.cProtect = false
             this.$refs.ref_taxno.isRequired = true
             this.PI_taxno.cValidate = "required"
            //  this.PI_taxregistrationdate.cValidate = "required"
            //  this.$refs.ref_taxregdate.isRequired = true 
             }
        if (data == "G")
             { this.M_CM_Contact.classificationcentralid = "N"
             this.M_CM_Contact.classificationlocalid = "N"
             this.M_CM_Contact.classificationgroupid = "Y"
             this.M_CM_Contact.taxcollectable = "N"
             this.PI_taxcollectable.cProtect = true
             this.$refs.ref_parentid.prop.dataLookUp.InitialWhere = " ContactId <> '" + this.M_CM_Contact.contactid + "' "
             this.$refs.ref_parentid.prop.dataLookUp.LookUpCd = "GetLookupCMContact"
             this.PI_parentid.cProtect = true
            this.PI_parentid.cValidate = ''
             this.PI_taxno.cProtect = true
             this.$refs.ref_taxno.isRequired = false
             this.PI_taxno.cValidate = ""
             this.M_CM_Contact.parentidLabel = ""
             this.M_CM_Contact.parentid = ""
            //  this.PI_taxregistrationdate.cValidate = ""
            //  this.$refs.ref_taxregdate.isRequired = false 
             }
        if (data == null && data == '')
             { this.M_CM_Contact.classificationcentralid = "N"
             this.M_CM_Contact.classificationlocalid = "N"
             this.M_CM_Contact.classificationgroupid = "N"
             this.M_CM_Contact.taxcollectable = "Y"
             this.$refs.ref_parentid.prop.dataLookUp.InitialWhere = " ContactId <> '" + this.M_CM_Contact.contactid + "' "
             this.$refs.ref_parentid.prop.dataLookUp.LookUpCd = "GetLookupCMContact"
             this.PI_parentid.cProtect = false
            //  this.PI_taxno.cProtect = true
             this.$refs.ref_taxno.isRequired = true
             this.PI_taxno.cValidate = "required"
            //  this.PI_taxregistrationdate.cValidate = ""
             this.$refs.ref_taxno.isRequired = true 
             }

            }
        })
        this.$forceUpdate()
        },
        OnparentidChange (data) {
            
        this.$nextTick(() => {
            this.M_CM_Contact.parentid = data.id
            this.M_CM_Contact.parentidLabel = data.label
            if (this.inputStatus != "VIEW") {
//{parentid}
            }
        })
        this.$forceUpdate()
        },
        OncategoryChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{category}
            }
        })
        this.$forceUpdate()
        },
        OngovernmentChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{government}
            }
        })
        this.$forceUpdate()
        },
        OnnameChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{name}
            }
        })
        this.$forceUpdate()
        },
        OnwebsiteChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{website}
            }
        })
        this.$forceUpdate()
        },
        OntaxcollectableChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{taxcollectable}
            }
        })
        this.$forceUpdate()
        },
        OntaxnoChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{taxno}
            }
        })
        this.$forceUpdate()
        },
        OntaxreferencenoChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{taxreferenceno}
            }
        })
        this.$forceUpdate()
        },
        OntaxregistrationdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{taxregistrationdate}
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
            if(this.DataSpec.ContactApproval == 'Y'){
                this.getToolbar().statusFunction[0].disabled = true
            }else{
                this.getToolbar().statusFunction[0].disabled = false
            }
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
        },		
        M_Post(){
        },
        M_Insert() {
        if (this.ContactRunningCd != "")
             { this.FnGenerateRunningCode(this.getDataUser().SubPortfolioCd,this.ContactRunningCd,this.getDataUser().UserId,this.getToday()).then(dt9 =>
         { if (dt9 != null) {
                  this.M_CM_Contact.contactid = dt9.RunningCode
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                ContactId: this.M_CM_Contact.contactid,
                ContactClassCd: this.M_CM_Contact.contactclasscd == '' || this.M_CM_Contact.contactclasscd == null ? 'NULL' : this.M_CM_Contact.contactclasscd ,
                Category: this.M_CM_Contact.category,
                ParentId: this.M_CM_Contact.parentid == '' || this.M_CM_Contact.parentid == null ? 'NULL' : this.M_CM_Contact.parentid ,
                Government: this.M_CM_Contact.government,
                TaxCollectable: this.M_CM_Contact.taxcollectable,
                TaxRegistrationDate: this.M_CM_Contact.taxregistrationdate == '' || this.M_CM_Contact.taxregistrationdate == null ? 'NULL' : this.M_CM_Contact.taxregistrationdate ,
                Name: this.M_CM_Contact.name,
                Website: this.M_CM_Contact.website,
                TaxNo: this.M_CM_Contact.taxno,
                TaxReferenceNo: this.M_CM_Contact.taxreferenceno,
                Remarks: this.M_CM_Contact.remarks,
                UserInput: this.getDataUser().UserId ,
                ClassificationLocalID: this.M_CM_Contact.classificationid.indexOf('L') >= 0 ? 'Y' : 'N',
                ClassificationCentralID: this.M_CM_Contact.classificationid.indexOf('C') >= 0 ? 'Y' : 'N',
                ClassificationGroupID: this.M_CM_Contact.classificationid.indexOf('G') >= 0 ? 'Y' : 'N'              
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return

				//kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultInsert(response.Message)
					
				
            })
           } 
           })  
           }
        else {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                ContactId: this.M_CM_Contact.contactid,
                ContactClassCd: this.M_CM_Contact.contactclasscd == '' || this.M_CM_Contact.contactclasscd == null ? 'NULL' : this.M_CM_Contact.contactclasscd ,
                Category: this.M_CM_Contact.category,
                ParentId: this.M_CM_Contact.parentid == '' || this.M_CM_Contact.parentid == null ? 'NULL' : this.M_CM_Contact.parentid ,
                Government: this.M_CM_Contact.government,
                TaxCollectable: this.M_CM_Contact.taxcollectable,
                TaxRegistrationDate: this.M_CM_Contact.taxregistrationdate == '' || this.M_CM_Contact.taxregistrationdate == null ? 'NULL' : this.M_CM_Contact.taxregistrationdate ,
                Name: this.M_CM_Contact.name,
                Website: this.M_CM_Contact.website,
                TaxNo: this.M_CM_Contact.taxno,
                TaxReferenceNo: this.M_CM_Contact.taxreferenceno,
                Remarks: this.M_CM_Contact.remarks,
                UserInput: this.getDataUser().UserId ,
                ClassificationLocalID: this.M_CM_Contact.classificationid.indexOf('L') >= 0 ? 'Y' : 'N',
                ClassificationCentralID: this.M_CM_Contact.classificationid.indexOf('C') >= 0 ? 'Y' : 'N',
                ClassificationGroupID: this.M_CM_Contact.classificationid.indexOf('G') >= 0 ? 'Y' : 'N'                   
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return

				//kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultInsert(response.Message)
					
				
            })
      }

        },
        M_Update() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                ContactId: this.M_CM_Contact.contactid,
                ContactClassCd: this.M_CM_Contact.contactclasscd == '' || this.M_CM_Contact.contactclasscd == null ? 'NULL' : this.M_CM_Contact.contactclasscd ,
                Category: this.M_CM_Contact.category,
                Government: this.M_CM_Contact.government,
                Name: this.M_CM_Contact.name,
                ParentId: this.M_CM_Contact.parentid == '' || this.M_CM_Contact.parentid == null ? 'NULL' : this.M_CM_Contact.parentid ,
                Website: this.M_CM_Contact.website,
                TaxNo: this.M_CM_Contact.taxno,
                TaxReferenceNo: this.M_CM_Contact.taxreferenceno,
                TaxRegistrationDate: this.M_CM_Contact.taxregistrationdate == '' || this.M_CM_Contact.taxregistrationdate == null ? 'NULL' : this.M_CM_Contact.taxregistrationdate ,
                TaxCollectable: this.M_CM_Contact.taxcollectable,
                Remarks: this.M_CM_Contact.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_CM_Contact.lastupdatestamp,
                ClassificationLocalID: this.M_CM_Contact.classificationlocalid,
                ClassificationCentralID: this.M_CM_Contact.classificationcentralid,
                ClassificationGroupID: this.M_CM_Contact.classificationgroupid                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })

        },
		M_ClearForm(){
            this.M_CM_Contact = {
                contactid: '',
                contactclasscd: '',
                classificationid: [],
                parentid: '',
                category: 'P',
                government: 'N',
                name: '',
                website: '',
                taxno: '',
                taxreferenceno: '',
                taxregistrationdate: '',
                taxcollectable: 'Y',
                remarks: '',
                userinput: '',
                timeinput: '',
                useredit: this.getDataUser().UserId,
                timeedit: '',
                classdescs: '',
                parentname: '',
                classificationlocalid: '',
                classificationcentralid: '',
                classificationgroupid: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
        this.FnGetRunningCdFromCMSpecification().then(dt21 => 
        { if (dt21 != null) { 
             this.ContactRunningCd = dt21.ContactRunningCd
             if (this.ContactRunningCd != "")
                  { this.PI_contactid.cProtect = true
                  this.M_CM_Contact.contactid = "(auto)"
                  this.$refs.ref_contactclasscd.focus()
                   }
        else {
             this.PI_contactid.cProtect = false
                  this.M_CM_Contact.contactid = ""
                  this.$refs.ref_contactid.focus() } } 
                  })

                  
        },
        M_Edit(){
            this.$refs.ref_contactclasscd.focus()
        },
        M_Delete(dt){       

        var data = this.FormToABSList().getRowSelected()  
        var dataDelete = []

        
        data.forEach((value) => {
          dataDelete.push({
          ContactId: value.ContactId,
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
,                contactid: record.ContactId
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
                var classificationid = null

                if (data.classificationcentralid == "Y")
                    {
                    this.$refs.ref_parentid.prop.dataLookUp.InitialWhere = " Classification = 'Group' AND ContactId <> '" + this.M_CM_Contact.contactid + "' "
                    this.$refs.ref_parentid.prop.dataLookUp.LookUpCd = "GetLookupClassificationID"
                    this.$refs.ref_parentid.prop.dataLookUp.ColumnDB = "ParentId"
                    this.PI_parentid.cProtect = false
                    this.PI_taxno.cProtect = false
                    this.$refs.ref_taxno.isRequired = true
                    this.PI_taxno.cValidate = "required"
                    classificationid = "C" 
                    }
                if (data.classificationlocalid == "Y")
                    {
                    this.$refs.ref_parentid.prop.dataLookUp.InitialWhere = " Classification = 'Central' AND ContactId <> '" + this.M_CM_Contact.contactid + "' "
                    this.$refs.ref_parentid.prop.dataLookUp.LookUpCd = "GetLookupClassificationID"
                    this.$refs.ref_parentid.prop.dataLookUp.ColumnDB = "ParentId"
                    this.PI_parentid.cProtect = false
                    this.PI_taxno.cProtect = false
                    this.$refs.ref_taxno.isRequired = true
                    this.PI_taxno.cValidate = "required"
                    classificationid = "L" 
                    }
                if (data.classificationgroupid == "Y")
                    {
                    this.$refs.ref_parentid.prop.dataLookUp.InitialWhere = " ContactId <> '" + this.M_CM_Contact.contactid + "' "
                    this.$refs.ref_parentid.prop.dataLookUp.LookUpCd = "GetLookupCMContact"
                    this.PI_parentid.cProtect = true
                    this.PI_taxno.cProtect = true
                    this.$refs.ref_taxno.isRequired = false
                    this.PI_taxno.cValidate = ""
                    classificationid = "G" 
                    }
                
this.M_CM_Contact = {
                contactid: data.contactid,
                contactclasscd: data.contactclasscd,
                classificationid: classificationid,
                parentid: data.parentid,
                category: data.category,
                government: data.government,
                name: data.name,
                website: data.website,
                taxno: data.taxno,
                taxreferenceno: data.taxreferenceno,
                taxregistrationdate: data.taxregistrationdate,
                taxcollectable: data.taxcollectable,
                remarks: data.remarks,
                userinput: data.userinput,
                timeinput: data.timeinput,
                useredit: data.useredit,
                timeedit: data.timeedit,
                classdescs: data.classdescs,
                parentname: data.parentname,
                classificationlocalid: data.classificationlocalid,
                classificationcentralid: data.classificationcentralid,
                classificationgroupid: data.classificationgroupid,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                }
                 
                this.M_CM_Contact.contactclasscdLabel = this.M_CM_Contact.contactclasscd != null ? data.contactclasscd + this.separator + data.classdescs :'' 
                this.M_CM_Contact.parentidLabel = this.M_CM_Contact.parentid != null ? data.parentid + this.separator + data.parentname :'' 
         

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        },
        getContactApproval () {
            var param = {
                OptionFunctionCd: 'GetContactApproval',
                ModuleCd: this.Module
            }

            this.FnDynamicFunction(param)
            .then(FnOpt2 => { 
                if (FnOpt2 != null) { 
                    this.ContactApproval = FnOpt2[0].ContactApproval
                    if (this.ContactApproval == "Y"){
                        this.getToolbar().statusFunction[0].disabled = true
                        // this.$store.commit('setNewStatus', false)
                    } 
                }
            })
        }

    },
    beforeCreate: function () {
    },
    created: function() {
    this.GetCMSpecification()
	// this.$store.commit('setFormType','List')
    // this.getToolbar().ProcessPS()
    },
    beforeMount: function() {
    },
    mounted: function() {
        this.hideSideBarMenu()
        this.FormToABSList().doGetList('','eb_getList')
        // this.getContactApproval()
    },
    beforeUpdate: function() {
    },
    updated: function() {
    },
    beforeDestroy: function() {
        // this.$store.commit('setNewStatus', true)
    },
    destroyed: function() {
    }
}
</script>

