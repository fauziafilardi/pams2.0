<template>
    <div>        


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
                                        <ABSinputTextVuex :prop="PI_totaloutlet" v-model="M_TN_ContactDetail.totaloutlet"  ref="ref_totaloutlet"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OneventorganizerChange" :prop="PI_eventorganizer" v-model="M_TN_ContactDetail.eventorganizer"  ref="ref_eventorganizer" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnbrandcdChange" :prop="PI_brandcd" :value="M_TN_ContactDetail.brandcd" :label="M_TN_ContactDetail.brandcdLabel" ref="ref_brandcd"/>
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
            FormType: "Form",
            Module:"TN",
            
            IEBy: {Input: '', Edit: ''},   			

            M_TN_ContactDetail :{
                contactid: '',
                totaloutlet: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeedit: '',
                timeinput: '',
                lastupdatestamp: 0,
                eventorganizer: 'N',
                brandcd: '',
                brandname: '',
                rowid: 0
                    }
            ,
            PI_totaloutlet: { 
                cValidate :'max:50', 
                cName: 'totaloutlet', 
                cLabel: 'Total Outlet ', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_eventorganizer: { 
                cValidate :'', 
                cName: 'eventorganizer', 
                cId: 'rdbeventorganizer', 
                cRadioOptions: [{ text: 'No', value: 'N' },{ text: 'Yes', value: 'Y' },], 
                cRadioDefaultOption: 'N', 
                cLabel:'Event Organizer', 
                cLabelSize: 4, 
                cOrder: 2, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_brandcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetBrandCd'    , 
                    ColumnDB: 'BrandCd'   , 
                    InitialWhere: "1=0"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'brandcd', 
                cLabel: 'Product Type', 
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
                cMasterUrl: 'TN/TN_BrandMaster' ,
                cDisplayColumn: 'BrandCd,BrandName' ,
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
        OneventorganizerChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{eventorganizer}
            }
        })
        this.$forceUpdate()
        },
        OnbrandcdChange (data) {
        this.$nextTick(() => {
            this.M_TN_ContactDetail.brandcd = data.id
            this.M_TN_ContactDetail.brandcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{brandcd}
            }
        })
        this.$forceUpdate()
        },
		
		setToolbarButton () {
        //    this.getToolbar().statusFunction[0].disabled = false
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
            this.$parent.showForm = true
			
            let data = this.$store.getters.GetPage1Data
            this.M_TN_ContactDetail.contactid = data.ContactId

            this.PI_brandcd.dataLookUp.InitialWhere = "(ISNULL(BrandOwnerID,'') ='' OR BrandOwnerID = '" + data.ContactId + "')"

            this.getDataBy()
        },		       
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().UserId,
                ContactId: this.DataRowPage1.ContactId,
                TotalOutlet: this.M_TN_ContactDetail.totaloutlet && this.M_TN_ContactDetail.totaloutlet != '' ? this.M_TN_ContactDetail.totaloutlet : 0,
                EventOrganizer: this.M_TN_ContactDetail.eventorganizer,
                BrandCd: this.M_TN_ContactDetail.brandcd,
                UserInput: this.getDataUser().UserId
                
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return
                this.alertSuccess(response.Message)
                .then(() => {
                    this.getToolbar().FormStatus = 'EDIT'
                    this.getToolbar().ProcessPS()
                    this.$store.commit('setStatus', 'view')
					this.$store.commit('setEventStatus', 'Save')
                    this.FormToMasterPage().ValidasiPage()
                })
            })
        },
        M_Update() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().UserId,
                ContactId: this.DataRowPage1.ContactId,
                TotalOutlet: this.M_TN_ContactDetail.totaloutlet && this.M_TN_ContactDetail.totaloutlet != '' ? this.M_TN_ContactDetail.totaloutlet : 0,
                EventOrganizer: this.M_TN_ContactDetail.eventorganizer,
                BrandCd: this.M_TN_ContactDetail.brandcd,
                UserInput: this.getDataUser().UserId
                
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return
                this.alertSuccess(response.Message)
                .then(() => {
                    this.getToolbar().setButton(false)
                    this.$store.commit('setStatus', 'view')
                    this.FormToMasterPage().ValidasiPage()
                })
            })
        },
		M_ClearForm(){
            alert('heyho')
            this.M_TN_ContactDetail = {
                contactid: '',
                totaloutlet: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeedit: '',
                timeinput: '',
                lastupdatestamp: 0,
                eventorganizer: 'N',
                brandcd: '',
                brandname: '',
                rowid: 0
                    }
            		
		},
        M_New(){
            this.$refs.ref_totaloutlet.focus()
        },
        M_Edit(){
            this.$refs.ref_totaloutlet.focus()
        },
        M_Delete(dt){           

        var data = this.FormToABSList().getRowSelected()  
        var dataDelete = []

        
        data.forEach((value) => {
          dataDelete.push({
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
        getDataBy () {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                contactid: this.DataRowPage1.ContactId
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                if(response.Data.length > 0){
                var data = response.Data[0]
                    this.getToolbar().FormStatus = 'EDIT'
                    this.getToolbar().ProcessPS()
this.M_TN_ContactDetail = {
                contactid: data.contactid,
                totaloutlet: data.totaloutlet,
                userinput: data.userinput,
                useredit: data.useredit,
                timeedit: data.timeedit,
                timeinput: data.timeinput,
                lastupdatestamp: this.DataRowPage1.LastUpdateStamp,
                eventorganizer: data.eventorganizer,
                brandcd: data.brandcd,
                brandname: data.brandname
                    }
                 

                this.M_TN_ContactDetail.brandcdLabel = this.M_TN_ContactDetail.brandcd != null && this.M_TN_ContactDetail.brandcd != '' ? data.brandcd + this.separator + data.brandname :'' 
  

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit
                }
                else {
                    this.getToolbar().FormStatus = 'NEW'
                    this.getToolbar().ProcessPS()
                    
                }

            })
        }
		
    },
    created: function() {
        // this.$store.commit('setFormType','Form')
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

