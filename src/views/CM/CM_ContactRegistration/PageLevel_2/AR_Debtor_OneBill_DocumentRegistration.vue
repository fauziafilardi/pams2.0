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
                                        <ABSInputSelectList @change="OndocumenttypeChange" :prop="PI_documenttype" :value="M_AR_Debtor_OneBill_DocumentRegistration.documenttype" :label="M_AR_Debtor_OneBill_DocumentRegistration.documenttypeLabel" ref="ref_documenttype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_AR_Debtor_OneBill_DocumentRegistration.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <!-- <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_documentfilename" v-model="M_AR_Debtor_OneBill_DocumentRegistration.documentfilename"  ref="ref_documentfilename"/>
                                      </b-col>
                                    </b-row> -->
                                    <b-row>
                                      <b-col  md="6">
                                        <!-- <ABSinputTextVuex :prop="PI_documentfilename" v-model="M_TN_ContractDocument.documentfilename"  ref="ref_documentfilename"/> -->
                                        <ABSFileUpload :prop="PI_referencefilename" @fileName="getFileName" 
                                                                        @response ="getResponse"
                                                                        v-model="M_AR_Debtor_OneBill_DocumentRegistration.documentfilename" 
                                                                        :file="M_AR_Debtor_OneBill_DocumentRegistration.documentfilename" 
                                                                        :image="M_AR_Debtor_OneBill_DocumentRegistration.documentfilename"
                                                                         ref="ref_referencefilename" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_AR_Debtor_OneBill_DocumentRegistration.remarks"  ref="ref_remarks" />
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
                initialWhere:"ContactId = '" + this.ValKey + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_AR_Debtor_OneBill_DocumentRegistration :{
                contactid: '',
                sequenceno: 0,
                documenttype: '',
                descs: '',
                documentfilename: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                controlsequenceno: 0,
                rowid: 0
                    }
            ,
            PI_documenttype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupDocumentType'    , 
                    ColumnDB: 'DocumentType'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'documenttype', 
                cLabel: 'Document Type ', 
                cKey: true, 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'DocumentTypeCd,Descs' ,
            }, 
            PI_descs: { 
                cValidate :'required|max:150', 
                cName: 'descs', 
                cLabel: 'Description', 
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
             PI_referencefilename: { 
                cValidate :'required', 
                cName:'documentfilename', 
                cLabel: 'File Name', 
                cLabelSize: 4, 
                cAccept:'',
                cDelimiter:'',
                cSubPortfolio:this.getDataUser().SubPortfolioCd,
                cPath:"SaveLocation/SubPortfolio/"+this.getDataUser().SubPortfolioCd+"/Contract",
                cOrder:3, 
                cVisible: true, 
                cModule: 'CM', 
                cPlaceholder: 'Choose a file...', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true,
                cIsShowPreview: true
            },   
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks', 
                cLabelSize: 4, 
                cOrder:4, 
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
		return this.$store.getters.GetPage2Data
	},
    DataRowPage1(){
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
              if(data.ContactApproval == 'Y'){
                  this.$store.commit('setFormType','List')
                  this.FormType = 'List'
                  this.getToolbar().ProcessPS()
                // this.getToolbar().statusFunction[4].disabled = false
              }else{
                  this.$store.commit('setFormType','View')
                  this.FormType = 'View'
                  this.getToolbar().ProcessPS()
                // this.getToolbar().statusFunction[4].disabled = false
              }
            })
        },
        getFileName(fileName) {
            //   console.log('fileName',fileName)
            this.M_AR_Debtor_OneBill_DocumentRegistration.documentfilename = fileName 
        },
        getResponse(response){
            this.responseFile = response
                // console.log('response',response)
        },
        OndocumenttypeChange (data) {
        if (this.M_AR_Debtor_OneBill_DocumentRegistration.documenttype == data.id) return
        this.$nextTick(() => {
            this.M_AR_Debtor_OneBill_DocumentRegistration.documenttype = data.id
            this.M_AR_Debtor_OneBill_DocumentRegistration.documenttypeLabel = data.label
            this.M_AR_Debtor_OneBill_DocumentRegistration.descs = data.Descs
            if (this.inputStatus != "VIEW") {
//{documenttype}
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
           //this.getToolbar().statusFunction[4].disabled = false
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
            
            if ( data.Status != 'New') {
                  this.FormType = "View"
                  this.$store.commit('setFormType','View')
                  this.getToolbar().ProcessPS()
            } else {
                  this.FormType = "List"
                  this.$store.commit('setFormType','List')
                  this.getToolbar().ProcessPS()
            }

            this.M_AR_Debtor_OneBill_DocumentRegistration.sequenceregistrationno = data.SequenceRegistrationNo 
            this.propList.initialWhere =" SequenceRegistrationNo = '" + data.SequenceRegistrationNo + "' "
        

            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SequenceRegistrationNo: this.M_AR_Debtor_OneBill_DocumentRegistration.sequenceregistrationno,
                ContactID: this.M_AR_Debtor_OneBill_DocumentRegistration.contactid,
                DocumentType: this.M_AR_Debtor_OneBill_DocumentRegistration.documenttype == '' || this.M_AR_Debtor_OneBill_DocumentRegistration.documenttype == null ? 'NULL' : this.M_AR_Debtor_OneBill_DocumentRegistration.documenttype ,
                Descs: this.M_AR_Debtor_OneBill_DocumentRegistration.descs,
                DocumentFileName: this.M_AR_Debtor_OneBill_DocumentRegistration.documentfilename,
                Remarks: this.M_AR_Debtor_OneBill_DocumentRegistration.remarks,
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
                SequenceRegistrationNo: this.M_AR_Debtor_OneBill_DocumentRegistration.sequenceregistrationno,
                ContactID: this.M_AR_Debtor_OneBill_DocumentRegistration.contactid,
                SequenceNo: this.M_AR_Debtor_OneBill_DocumentRegistration.sequenceno,
                DocumentType: this.M_AR_Debtor_OneBill_DocumentRegistration.documenttype == '' || this.M_AR_Debtor_OneBill_DocumentRegistration.documenttype == null ? 'NULL' : this.M_AR_Debtor_OneBill_DocumentRegistration.documenttype ,
                Descs: this.M_AR_Debtor_OneBill_DocumentRegistration.descs,
                DocumentFileName: this.M_AR_Debtor_OneBill_DocumentRegistration.documentfilename,
                Remarks: this.M_AR_Debtor_OneBill_DocumentRegistration.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_AR_Debtor_OneBill_DocumentRegistration.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_AR_Debtor_OneBill_DocumentRegistration = {
                contactid: '',
                sequenceno: 0,
                documenttype: '',
                descs: '',
                documentfilename: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                controlsequenceno: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_AR_Debtor_OneBill_DocumentRegistration.contactid = data.ContactId 
            this.M_AR_Debtor_OneBill_DocumentRegistration.sequenceregistrationno = data.SequenceRegistrationNo 

            this.$refs.ref_documenttype.focus()

        },
        M_Edit(){
            this.$refs.ref_descs.focus()
        },
        M_Delete(dt){           

            var data = this.FormToABSList().getRowSelected()  
			var dataDelete = []

			
			data.forEach((value) => {			
				dataDelete.push({
                ContactID: value.ContactID,
                DocumentType: value.DocumentType,
                DocumentFileName: value.DocumentFileName,
                SequenceNo: value.SequenceNo,
                SequenceRegistrationNo: value.SequenceRegistrationNo,
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
,                contactid: record.ContactID,
                sequenceregistrationno: record.SequenceRegistrationNo,
                documenttype: record.DocumentType,
                sequenceno: record.SequenceNo				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_AR_Debtor_OneBill_DocumentRegistration = {
                contactid: data.contactid,
                sequenceno: data.sequenceno,
                documenttype: data.documenttype,
                descs: data.descs,
                documentfilename: data.documentfilename,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                timeinput: data.timeinput,
                timeedit: data.timeedit,
                lastupdatestamp: record.LastUpdateStamp,
                controlsequenceno: data.controlsequenceno,
                rowid: data.rowid,
                sequenceregistrationno: data.sequenceregistrationno
                    }
                 

                this.M_AR_Debtor_OneBill_DocumentRegistration.documenttypeLabel = this.M_AR_Debtor_OneBill_DocumentRegistration.documenttype != null ? data.documenttype + this.separator + data.descs :'' 
  

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }
		
    },
    created: function() {
        this.GetCMSpecification()
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

