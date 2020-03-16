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
                                        <ABSInputSelectList @change="OncontactclasscdChange" :prop="PI_contactclasscd" :value="M_CM_ContactApproval.contactclasscd" :label="M_CM_ContactApproval.contactclasscdLabel" ref="ref_contactclasscd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnclassificationidChange" :prop="PI_classificationid" v-model="M_CM_ContactApproval.classificationid"  ref="ref_classificationid" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnparentidChange" :prop="PI_parentid" :value="M_CM_ContactApproval.parentid" :label="M_CM_ContactApproval.parentidLabel" ref="ref_parentid"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OncategoryChange" :prop="PI_category" v-model="M_CM_ContactApproval.category"  ref="ref_category" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OngovernmentChange" :prop="PI_government" v-model="M_CM_ContactApproval.government"  ref="ref_government" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_name" v-model="M_CM_ContactApproval.name"  ref="ref_name"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_website" v-model="M_CM_ContactApproval.website"  ref="ref_website"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OntaxcollectableChange" :prop="PI_taxcollectable" v-model="M_CM_ContactApproval.taxcollectable"  ref="ref_taxcollectable" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_taxno" v-model="M_CM_ContactApproval.taxno"  ref="ref_taxno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_taxreferenceno" v-model="M_CM_ContactApproval.taxreferenceno"  ref="ref_taxreferenceno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OntaxregistrationdateChange" :prop="PI_taxregistrationdate" v-model="M_CM_ContactApproval.taxregistrationdate"  ref="ref_taxregistrationdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnstatusChange" :prop="PI_status" v-model="M_CM_ContactApproval.status"  ref="ref_status" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnreasoncdChange" :prop="PI_reasoncd" :value="M_CM_ContactApproval.reasoncd" :label="M_CM_ContactApproval.reasoncdLabel" ref="ref_reasoncd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_reasondescs" v-model="M_CM_ContactApproval.reasondescs"  ref="ref_reasondescs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_CM_ContactApproval.remarks"  ref="ref_remarks" />
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
    props: {PageLevel: '', TabIndex: '', data: ''},
    data() {
        return {
		cInsertKey:'',
		FormType: "List",
		Module:"CM",
            propList: {
                initialWhere: "Status = 'N'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_CM_ContactApproval :{
                contactid: '',
                contactclasscd: '',
                parentid: '',
                category: 'P',
                government: 'N',
                reasoncd: '',
                reasondescs: '',
                name: '',
                website: '',
                taxno: '',
                taxreferenceno: '',
                taxregistrationdate: '',
                taxcollectable: 'Y',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                classdescs: '',
                parentname: '',
                classificationlocalid: '',
                classificationcentralid: '',
                classificationgroupid: '',
                sequenceregistrationno: 0,
                lastupdatestamp: 0,
                rowid: 0,
                insurancestatus: '',
                financierstatus: '',
                status: 'A',
                classificationid: ''
                    }
            ,
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
                cOrder: 2, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_parentid: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCentral'    , 
                    ColumnDB: 'ParentId'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'parentid', 
                cLabel: 'Parent ID', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 3, 
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
                cDisplayColumn: '' ,
            }, 
            PI_category: { 
                cValidate :'', 
                cName: 'category', 
                cId: 'rdbcategory', 
                cRadioOptions: [{ text: 'Personal', value: 'P' }, { text: 'Company', value: 'C' }], 
                cRadioDefaultOption: 'P', 
                cLabel:'Category', 
                cLabelSize: 4, 
                cOrder: 4, 
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
                cOrder: 5, 
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
                cOrder: 6, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_website: { 
                cValidate :'', 
                cName: 'website', 
                cLabel: 'Website', 
                cLabelSize: 4, 
                cOrder: 7, 
                cKey: true, 
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
                cLabel:'		Tax Collectable', 
                cLabelSize: 4, 
                cOrder: 8, 
                cKey: true,
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_taxno: { 
                cValidate :'required|max:30', 
                cName: 'taxno', 
                cLabel: 'Tax Reg. No', 
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
            PI_taxreferenceno: { 
                cValidate :'', 
                cName: 'taxreferenceno', 
                cLabel: 'Tax Reference No', 
                cLabelSize: 4, 
                cOrder: 10, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_taxregistrationdate: { 
                cValidate :'required', 
                cName: 'taxregistrationdate', 
                cLabel: 'Tax Reg. Date', 
                cLabelSize: 4, 
                cOrder: 11, 
                cKey: true, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_status: { 
                cValidate :'', 
                cName: 'status', 
                cId: 'rdbstatus', 
                cRadioOptions: [{ text: 'Approve', value: 'A' },{ text: 'Cancel', value: 'X' },], 
                cRadioDefaultOption: 'A', 
                cLabel:'Approval Status', 
                cLabelSize: 4, 
                cOrder: 12, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_reasoncd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMReason'    , 
                    ColumnDB: 'ReasonCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'reasoncd', 
                cLabel: 'Reason Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 13, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: true, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: 'CM/CM_Reason' ,
                cDisplayColumn: 'ReasonCd,Descs' ,
            }, 
            PI_reasondescs: { 
                cValidate :'', 
                cName: 'reasondescs', 
                cLabel: 'Reason Description', 
                cLabelSize: 4, 
                cOrder: 14, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks', 
                cLabelSize: 4, 
                cOrder:15, 
                cKey: false, 
                cDefault: '', 
                cProtect: true, 
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
		return this.$store.getters.GetPage1Data
	}
  },
    methods: {		
        OncontactclasscdChange (data) {
        this.$nextTick(() => {
            this.M_CM_ContactApproval.contactclasscd = data.id
            this.M_CM_ContactApproval.contactclasscdLabel = data.label
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
             { this.M_CM_ContactApproval.classificationcentralid = "Y"
             this.M_CM_ContactApproval.classificationlocalid = "N"
             this.M_CM_ContactApproval.classificationgroupid = "N"
             this.$refs.ref_parentid.prop.dataLookUp.InitialWhere = " Classification = 'Group' "
             this.$refs.ref_parentid.prop.dataLookUp.LookUpCd = "GetLookupClassificationID"
             this.PI_parentid.cProtect = false
             this.PI_taxno.cProtect = false
             this.$refs.ref_taxno.isRequired = true
             this.PI_taxno.cValidate = "required"
             this.PI_taxregistrationdate.cValidate = "required"
             this.$refs.ref_taxregdate.isRequired = true
             this.M_CM_ContactApproval.taxcollectable = "Y" }
        if (data == "L")
             { this.M_CM_ContactApproval.classificationcentralid = "N"
             this.M_CM_ContactApproval.classificationlocalid = "Y"
             this.M_CM_ContactApproval.classificationgroupid = "N"
             this.$refs.ref_parentid.prop.dataLookUp.InitialWhere = " Classification = 'Central' "
             this.$refs.ref_parentid.prop.dataLookUp.LookUpCd = "GetLookupClassificationID"
             this.PI_parentid.cProtect = false
             this.PI_taxno.cProtect = false
             this.$refs.ref_taxno.isRequired = true
             this.PI_taxno.cValidate = "required"
             this.PI_taxregistrationdate.cValidate = "required"
             this.$refs.ref_taxregdate.isRequired = true
             this.M_CM_ContactApproval.taxcollectable = "Y" }
        if (data == "G")
             { this.M_CM_ContactApproval.classificationcentralid = "N"
             this.M_CM_ContactApproval.classificationlocalid = "N"
             this.M_CM_ContactApproval.classificationgroupid = "Y"
             this.$refs.ref_parentid.prop.dataLookUp.InitialWhere = ""
             this.$refs.ref_parentid.prop.dataLookUp.LookUpCd = "GetLookupCMContact"
             this.PI_parentid.cProtect = true
             this.PI_taxno.cProtect = true
             this.$refs.ref_taxno.isRequired = false
             this.PI_taxno.cValidate = ""
             this.PI_taxregistrationdate.cValidate = ""
             this.$refs.ref_taxregdate.isRequired = false
             this.M_CM_ContactApproval.taxcollectable = "N" }

            }
        })
        this.$forceUpdate()
        },
        OnparentidChange (data) {
        this.$nextTick(() => {
            this.M_CM_ContactApproval.parentid = data.id
            this.M_CM_ContactApproval.parentidLabel = data.label
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
        OntaxcollectableChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{taxcollectable}
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
        OnstatusChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
               if ( data == 'X') {
                    this.PI_reasoncd.cProtect = false
                    this.PI_reasondescs.cProtect = false
                    this.PI_reasoncd.cValidate = 'required'
                    this.PI_reasondescs.cValidate = 'required'

                } 
                else {
                    this.PI_reasoncd.cProtect = true
                    this.PI_reasondescs.cProtect = true
                    this.PI_reasoncd.cValidate = ''
                    this.PI_reasondescs.cValidate = ''
                    this.M_CM_ContactApproval.reasoncd = ""
                    this.M_CM_ContactApproval.reasoncdLabel = ""
                    this.M_CM_ContactApproval.reasondescs = ""
                } 
            }
        })
        this.$forceUpdate()
        },
        OnreasoncdChange (data) {
        this.$nextTick(() => {
            this.M_CM_ContactApproval.reasoncd = data.id
            this.M_CM_ContactApproval.reasoncdLabel = data.label
            this.M_CM_ContactApproval.reasondescs = data.Descs
            if (this.inputStatus != "VIEW") {
//{reasoncd}
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
           this.getToolbar().statusFunction[2].disabled = true
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
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return

				//kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultInsert(response.Message)
					
				
            })
        },
        M_Update() {
            // console.log(this.M_CM_ContactApproval.status)
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SequenceRegistrationNo: this.M_CM_ContactApproval.sequenceregistrationno,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                ContactClassCd: this.M_CM_ContactApproval.contactclasscd == '' || this.M_CM_ContactApproval.contactclasscd == null ? 'NULL' : this.M_CM_ContactApproval.contactclasscd ,
                Category: this.M_CM_ContactApproval.category,
                ParentId: this.M_CM_ContactApproval.parentid == '' || this.M_CM_ContactApproval.parentid == null ? 'NULL' : this.M_CM_ContactApproval.parentid ,
                Government: this.M_CM_ContactApproval.government,
                TaxCollectable: this.M_CM_ContactApproval.taxcollectable,
                TaxRegistrationDate: this.M_CM_ContactApproval.taxregistrationdate == '' || this.M_CM_ContactApproval.taxregistrationdate == null ? 'NULL' : this.M_CM_ContactApproval.taxregistrationdate ,
                Name: this.M_CM_ContactApproval.name,
                Website: this.M_CM_ContactApproval.website,
                TaxNo: this.M_CM_ContactApproval.taxno,
                TaxReferenceNo: this.M_CM_ContactApproval.taxreferenceno,
                Remarks: this.M_CM_ContactApproval.remarks,
                ClassificationLocalID: this.M_CM_ContactApproval.classificationlocalid,
                ClassificationCentralID: this.M_CM_ContactApproval.classificationcentralid,
                ClassificationGroupID: this.M_CM_ContactApproval.classificationgroupid,
                Status: this.M_CM_ContactApproval.status == undefined || this.M_CM_ContactApproval.status == null ? 'NULL' : this.M_CM_ContactApproval.status,
                ReasonCd: this.M_CM_ContactApproval.reasoncd == '' || this.M_CM_ContactApproval.reasoncd == null ? 'NULL' : this.M_CM_ContactApproval.reasoncd ,
                ReasonDescs: this.M_CM_ContactApproval.reasondescs,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_CM_ContactApproval.lastupdatestamp                
            }

            // console.log(param)

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return
                // console.log(update)

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })

        },
		M_ClearForm(){
            this.M_CM_ContactApproval = {
                contactid: '',
                contactclasscd: '',
                parentid: '',
                category: 'P',
                government: 'N',
                reasoncd: '',
                reasondescs: '',
                name: '',
                website: '',
                taxno: '',
                taxreferenceno: '',
                taxregistrationdate: '',
                taxcollectable: 'Y',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                classdescs: '',
                parentname: '',
                classificationlocalid: '',
                classificationcentralid: '',
                classificationgroupid: '',
                sequenceregistrationno: 0,
                lastupdatestamp: 0,
                rowid: 0,
                insurancestatus: '',
                financierstatus: '',
                status: 'A',
                classificationid: ''
                    }
            		
		},
        M_New(){
            this.$refs.ref_contactclasscd.focus()
        },
        M_Edit(){
          this.$refs.ref_contactclasscd.focus()
        },
        M_Delete(dt){       

            var data = this.FormToABSList().getRowSelected()  
            var dataDelete = []

            
            data.forEach((value) => {
            dataDelete.push({
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
,                sequenceregistrationno: record.SequenceRegistrationNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
                // console.log(data)
this.M_CM_ContactApproval = {
                contactid: data.contactid,
                status: data.status,
                contactclasscd: data.contactclasscd,
                parentid: data.parentid,
                category: data.category,
                government: data.government,
                reasoncd: data.reasoncd,
                reasondescs: data.reasondescs,
                name: data.name,
                website: data.website,
                taxno: data.taxno,
                taxreferenceno: data.taxreferenceno,
                taxregistrationdate: data.taxregistrationdate,
                taxcollectable: data.taxcollectable,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                classdescs: data.classdescs,
                parentname: data.parentname,
                classificationlocalid: data.classificationlocalid,
                classificationcentralid: data.classificationcentralid,
                classificationgroupid: data.classificationgroupid,
                sequenceregistrationno: record.SequenceRegistrationNo,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid,
                insurancestatus: data.insurancestatus,
                financierstatus: data.financierstatus,
                
                classificationid: data.classificationid
                    }

                    if(data.classificationlocalid == "Y"){
                      this.M_CM_ContactApproval.classificationid = "L"
                      this.M_CM_ContactApproval.taxcollectable = "Y"
                    }

                    if(data.classificationcentralid == "Y"){
                      this.M_CM_ContactApproval.classificationid = "C"
                      this.M_CM_ContactApproval.taxcollectable = "Y"
                    }
                    
                    if(data.classificationgroupid == "Y"){
                      this.M_CM_ContactApproval.classificationid = "G"
                      this.M_CM_ContactApproval.taxcollectable = "N"
                    }
                 

                this.M_CM_ContactApproval.contactclasscdLabel = this.M_CM_ContactApproval.contactclasscd != null ? data.contactclasscd + this.separator + data.classdescs :'' 
                this.M_CM_ContactApproval.parentidLabel = this.M_CM_ContactApproval.parentid != null ? data.parentid + this.separator + data.parentname :'' 
                this.M_CM_ContactApproval.reasoncdLabel = this.M_CM_ContactApproval.reasoncd != null ? data.reasoncd + this.separator + data.reasondescs :'' 

                if ( data.status == 'X') {
                    this.PI_reasoncd.cProtect = false
                    this.PI_reasondescs.cProtect = false
                    this.PI_reasoncd.cValidate = 'required'
                    this.PI_reasondescs.cValidate = 'required'

                } 
                else {
                    this.PI_reasoncd.cProtect = true
                    this.PI_reasondescs.cProtect = true
                    this.PI_reasoncd.cValidate = ''
                    this.PI_reasondescs.cValidate = ''
                    this.M_CM_ContactApproval.reasoncd = ""
                    this.M_CM_ContactApproval.reasoncdLabel = ""
                    this.M_CM_ContactApproval.reasondescs = ""
                } 

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }

    },
    beforeCreate: function () {
    },
    created: function() {
	this.$store.commit('setFormType','List')
    this.getToolbar().ProcessPS()
    },
    beforeMount: function() {
    },
    mounted: function() {
        this.hideSideBarMenu()
        this.FormToABSList().doGetList('','eb_getList')

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

