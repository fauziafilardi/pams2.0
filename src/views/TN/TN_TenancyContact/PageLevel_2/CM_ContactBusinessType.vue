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
                                        <ABSInputSelectList @change="OnbusinesstypecdChange" :prop="PI_businesstypecd" :value="M_CM_ContactBusinessType.businesstypecd" :label="M_CM_ContactBusinessType.businesstypecdLabel" ref="ref_businesstypecd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OncorebusinessChange" :prop="PI_corebusiness" v-model="M_CM_ContactBusinessType.corebusiness"  ref="ref_corebusiness" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_businessname" v-model="M_CM_ContactBusinessType.businessname"  ref="ref_businessname"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_CM_ContactBusinessType.remarks"  ref="ref_remarks" />
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
            TesGlobalVariable: '',

            M_CM_ContactBusinessType :{
                sequenceregistrationno: '',
                contactid: '',
                businesstypecd: '',
                businessname: '',
                corebusiness: 'Y',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                businesstypedescs: '',
                debtorcd: '',
                timeedit: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_businesstypecd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMBusinessType'    , 
                    ColumnDB: 'BusinessTypeCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'businesstypecd', 
                cLabel: 'Business Type', 
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
                cMasterUrl: 'CM/CM_BusinessType' ,
                cDisplayColumn: 'BusinessTypeCd,Descs' ,
            }, 
            PI_corebusiness: { 
                cValidate :'', 
                cName: 'corebusiness', 
                cId: 'rdbcorebusiness', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' }, { text: 'No', value: 'N' }], 
                cRadioDefaultOption: 'Y', 
                cLabel:'Core Business', 
                cLabelSize: 4, 
                cOrder: 2, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_businessname: { 
                cValidate :'required|max:50', 
                cName: 'businessname', 
                cLabel: 'Business Name', 
                cLabelSize: 4, 
                cOrder: 3, 
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
        OnbusinesstypecdChange (data) {
        this.$nextTick(() => {
            this.M_CM_ContactBusinessType.businesstypecd = data.id
            this.M_CM_ContactBusinessType.businesstypecdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{businesstypecd}
            }
        })
        this.$forceUpdate()
        },
        OncorebusinessChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{corebusiness}
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
            console.log(data)
            this.M_CM_ContactBusinessType.contactid = data.ContactId 
            this.propList.initialWhere =" ContactId = '" + data.ContactId + "' "
        

            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
            console.log(this.M_CM_ContactBusinessType)
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                ContactId: this.M_CM_ContactBusinessType.contactid,
                BusinessType: this.M_CM_ContactBusinessType.businesstypecd == '' || this.M_CM_ContactBusinessType.businesstypecd == null ? 'NULL' : this.M_CM_ContactBusinessType.businesstypecd ,
                BusinessName: this.M_CM_ContactBusinessType.businessname,
                CoreBusiness: this.M_CM_ContactBusinessType.corebusiness,
                Remarks: this.M_CM_ContactBusinessType.remarks,
                UserInput: this.getDataUser().UserId ,
                DebtorCd: this.M_CM_ContactBusinessType.debtorcd                
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return

				//kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultInsert(response.Message)
					
				
            })
        },
        M_Update() {
            console.log(this.M_CM_ContactBusinessType)
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                ContactId: this.M_CM_ContactBusinessType.contactid,
                BusinessType: this.M_CM_ContactBusinessType.businesstypecd == '' || this.M_CM_ContactBusinessType.businesstypecd == null ? 'NULL' : this.M_CM_ContactBusinessType.businesstypecd ,
                BusinessName: this.M_CM_ContactBusinessType.businessname,
                CoreBusiness: this.M_CM_ContactBusinessType.corebusiness,
                Remarks: this.M_CM_ContactBusinessType.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_CM_ContactBusinessType.lastupdatestamp,
                DebtorCd: this.M_CM_ContactBusinessType.debtorcd                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_CM_ContactBusinessType = {
                sequenceregistrationno: '',
                contactid: '',
                businesstypecd: '',
                businessname: '',
                corebusiness: 'Y',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                businesstypedescs: '',
                debtorcd: '',
                timeedit: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_CM_ContactBusinessType.contactid = data.ContactId

            this.$refs.ref_businesstypecd.focus()
        },
        M_Edit(){
            let data = this.$store.getters.GetPage1Data
            this.M_CM_ContactBusinessType.contactid = data.ContactId
            
            this.$refs.ref_corebusiness.focus()
        },
        M_Delete(dt){       
        var data = this.FormToABSList().getRowSelected()  
        var dataDelete = []

        
        data.forEach((value) => {
          dataDelete.push({
          ContactId: value.ContactId,
          BusinessType: value.BusinessTypeCd,
          LastUpdateStamp: value.LastUpdateStamp,
          DebtorCd: '',
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
,                contactid: record.ContactId,
                businesstypecd: record.BusinessTypeCd,
                debtorcd: record.DebtorCd				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
                console.log(data)
this.M_CM_ContactBusinessType = {
                contactid: data.contactid,
                businesstypecd: data.businesstypecd,
                businessname: data.businessname,
                corebusiness: data.corebusiness,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                businesstypedescs: data.businesstypedescs,
                debtorcd: data.debtorcd,
                timeedit: data.timeedit,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
                 

                this.M_CM_ContactBusinessType.businesstypecdLabel = this.M_CM_ContactBusinessType.businesstypecd != null ? data.businesstypecd + this.separator + data.businesstypedescs :'' 
  

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
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

