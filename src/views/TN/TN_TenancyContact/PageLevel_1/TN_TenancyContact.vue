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
                                        <ABSinputTextVuex :prop="PI_contactid" v-model="M_TN_TenancyContact.contactid"  ref="ref_contactid"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncontactclasscdChange" :prop="PI_contactclasscd" :value="M_TN_TenancyContact.contactclasscd" :label="M_TN_TenancyContact.contactclasscdLabel" ref="ref_contactclasscd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnparentidChange" :prop="PI_parentid" :value="M_TN_TenancyContact.parentid" :label="M_TN_TenancyContact.parentidLabel" ref="ref_parentid"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OncategoryChange" :prop="PI_category" v-model="M_TN_TenancyContact.category"  ref="ref_category" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OngovernmentChange" :prop="PI_government" v-model="M_TN_TenancyContact.government"  ref="ref_government" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_name" v-model="M_TN_TenancyContact.name"  ref="ref_name"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_website" v-model="M_TN_TenancyContact.website"  ref="ref_website"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OntaxcollectableChange" :prop="PI_taxcollectable" v-model="M_TN_TenancyContact.taxcollectable"  ref="ref_taxcollectable" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_taxno" v-model="M_TN_TenancyContact.taxno"  ref="ref_taxno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_taxreferenceno" v-model="M_TN_TenancyContact.taxreferenceno"  ref="ref_taxreferenceno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OntaxregistrationdateChange" :prop="PI_taxregistrationdate" v-model="M_TN_TenancyContact.taxregistrationdate"  ref="ref_taxregistrationdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_TenancyContact.remarks"  ref="ref_remarks" />
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
		Module:"TN",
            propList: {
                initialWhere: "",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			
            ContactRunningCd: '',

            M_TN_TenancyContact :{
                contactid: '',
                contactclasscd: '',
                parentid: '',
                category: 'P',
                government: 'Y',
                name: '',
                website: '',
                taxno: '',
                taxreferenceno: '',
                taxregistrationdate: '',
                taxcollectable: '',
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
                cProtect: false, 
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
            PI_parentid: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMContact'    , 
                    ColumnDB: 'ContactId'   , 
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
                cDisplayColumn: 'ContactId,Name' ,
            }, 
            PI_category: { 
                cValidate :'', 
                cName: 'category', 
                cId: 'rdbcategory', 
                cRadioOptions: [{ text: 'Personal', value: 'P' }, { text: 'Company', value: 'C' }], 
                cRadioDefaultOption: 'P', 
                cLabel:'Category ', 
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
                cRadioDefaultOption: 'Y', 
                cLabel:'Government ', 
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
                cOrder: 7, 
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
                cRadioDefaultOption: '', 
                cLabel:'Tax Collectable ', 
                cLabelSize: 4, 
                cOrder: 8, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_taxno: { 
                cValidate :'max:30', 
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
                cValidate :'max:30', 
                cName: 'taxreferenceno', 
                cLabel: 'Tax Reference No', 
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
            PI_taxregistrationdate: { 
                cValidate :'', 
                cName: 'taxregistrationdate', 
                cLabel: 'Tax Reg. Date', 
                cLabelSize: 4, 
                cOrder: 11, 
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
            this.M_TN_TenancyContact.contactclasscd = data.id
            this.M_TN_TenancyContact.contactclasscdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{contactclasscd}
            }
        })
        this.$forceUpdate()
        },
        OnparentidChange (data) {
        this.$nextTick(() => {
            this.M_TN_TenancyContact.parentid = data.id
            this.M_TN_TenancyContact.parentidLabel = data.label
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
           this.getToolbar().statusFunction[1].disabled = true
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
        M_Post(dt){
        },
        M_Insert() {
        if (this.M_TN_TenancyContact.contactid == "(auto)")
             { this.FnGenerateRunningCode(this.getDataUser().SubPortfolioCd,this.ContactRunningCd,this.getDataUser().UserId,this.M_TN_TenancyContact.gettoday()).then(dt9 =>
         { if (dt9 != null) {
                  this.M_TN_TenancyContact.contactid = dt9.RunningCode } })  }
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                ContactId: this.M_TN_TenancyContact.contactid,
                ContactClassCd: this.M_TN_TenancyContact.contactclasscd == '' || this.M_TN_TenancyContact.contactclasscd == null ? 'NULL' : this.M_TN_TenancyContact.contactclasscd ,
                Category: this.M_TN_TenancyContact.category,
                ParentId: this.M_TN_TenancyContact.parentid == '' || this.M_TN_TenancyContact.parentid == null ? 'NULL' : this.M_TN_TenancyContact.parentid ,
                Government: this.M_TN_TenancyContact.government,
                TaxCollectable: this.M_TN_TenancyContact.taxcollectable,
                TaxRegistrationDate: this.M_TN_TenancyContact.taxregistrationdate == '' || this.M_TN_TenancyContact.taxregistrationdate == null ? 'NULL' : this.M_TN_TenancyContact.taxregistrationdate ,
                Name: this.M_TN_TenancyContact.name,
                Website: this.M_TN_TenancyContact.website,
                TaxNo: this.M_TN_TenancyContact.taxno,
                TaxReferenceNo: this.M_TN_TenancyContact.taxreferenceno,
                Remarks: this.M_TN_TenancyContact.remarks,
                UserInput: this.getDataUser().UserId ,
                ClassificationLocalID: this.M_TN_TenancyContact.classificationlocalid,
                ClassificationCentralID: this.M_TN_TenancyContact.classificationcentralid,
                ClassificationGroupID: this.M_TN_TenancyContact.classificationgroupid                
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
                ContactId: this.M_TN_TenancyContact.contactid,
                ContactClassCd: this.M_TN_TenancyContact.contactclasscd == '' || this.M_TN_TenancyContact.contactclasscd == null ? 'NULL' : this.M_TN_TenancyContact.contactclasscd ,
                Category: this.M_TN_TenancyContact.category,
                Government: this.M_TN_TenancyContact.government,
                Name: this.M_TN_TenancyContact.name,
                ParentId: this.M_TN_TenancyContact.parentid == '' || this.M_TN_TenancyContact.parentid == null ? 'NULL' : this.M_TN_TenancyContact.parentid ,
                Website: this.M_TN_TenancyContact.website,
                TaxNo: this.M_TN_TenancyContact.taxno,
                TaxReferenceNo: this.M_TN_TenancyContact.taxreferenceno,
                TaxRegistrationDate: this.M_TN_TenancyContact.taxregistrationdate == '' || this.M_TN_TenancyContact.taxregistrationdate == null ? 'NULL' : this.M_TN_TenancyContact.taxregistrationdate ,
                TaxCollectable: this.M_TN_TenancyContact.taxcollectable,
                Remarks: this.M_TN_TenancyContact.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_TenancyContact.lastupdatestamp,
                ClassificationLocalID: this.M_TN_TenancyContact.classificationlocalid,
                ClassificationCentralID: this.M_TN_TenancyContact.classificationcentralid,
                ClassificationGroupID: this.M_TN_TenancyContact.classificationgroupid                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_TN_TenancyContact = {
                contactid: '',
                contactclasscd: '',
                parentid: '',
                category: 'P',
                government: 'Y',
                name: '',
                website: '',
                taxno: '',
                taxreferenceno: '',
                taxregistrationdate: '',
                taxcollectable: '',
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
             if (dt21.ContactRunningCd != "" )
                  { this.PI_contactid.cProtect = true
                  this.M_TN_TenancyContact.contactid = "(auto)" }
        else {
             this.PI_contactid.cProtect = false
                  this.M_TN_TenancyContact.contactid = "" } } })
                  
        this.$refs.ref_contactid.focus()          
			
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
          _Message_:''
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
this.M_TN_TenancyContact = {
                contactid: data.contactid,
                contactclasscd: data.contactclasscd,
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
                rowid: this.isCurrency(data.rowid, this.decimal)
                    }
                 

                this.M_TN_TenancyContact.contactclasscdLabel = this.M_TN_TenancyContact.contactclasscd != null && this.M_TN_TenancyContact.contactclasscd != '' ? data.contactclasscd + this.separator + data.classdescs :'' 
                this.M_TN_TenancyContact.parentidLabel = this.M_TN_TenancyContact.parentid != null && this.M_TN_TenancyContact.parentid != '' ? data.parentid + this.separator + data.parentname :'' 
         

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

