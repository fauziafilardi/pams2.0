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
                                        <ABSInputSelectList @change="OnapplicationnoChange" :prop="PI_applicationno" :value="M_AR_AmortizeRevenueMaintenance.applicationno" :label="M_AR_AmortizeRevenueMaintenance.applicationnoLabel" ref="ref_applicationno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_revenuemonth" v-model="M_AR_AmortizeRevenueMaintenance.revenuemonth"  ref="ref_revenuemonth"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_revenueyear" v-model="M_AR_AmortizeRevenueMaintenance.revenueyear"  ref="ref_revenueyear"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_revenueamt" v-model="M_AR_AmortizeRevenueMaintenance.revenueamt"  ref="ref_revenueamt"/>
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
		Module:"AR",
            propList: {
                initialWhere: "SubPortfolioCd = '"+ this.getDataUser().SubPortfolioCd +"' AND ISConfirmed='N'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_AR_AmortizeRevenueMaintenance :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                applicationno: '',
                revenuesequenceno: 0,
                revenuemonth: '',
                revenueyear: '',
                revenueamt: '',
                status: '',
                debtorcd: '',
                debtorname: '',
                businessname: '',
                brandcd: '',
                brandname: '',
                timeedit: '',
                useredit: this.getDataUser().UserId,
                userinput: '',
                timeinput: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_applicationno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupContract'    , 
                    ColumnDB: 'ApplicationNo'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'applicationno', 
                cLabel: 'Application No', 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'ApplicationNo,BrandName' ,
            }, 
            PI_revenuemonth: { 
                cValidate :'required|max:3', 
                cName: 'revenuemonth', 
                cLabel: 'Revenue Month', 
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
            PI_revenueyear: { 
                cValidate :'required|max:6', 
                cName: 'revenueyear', 
                cLabel: 'Revenue Year', 
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
            PI_revenueamt: { 
                cValidate :'required|max:20', 
                cName: 'revenueamt', 
                cLabel: 'Revenue Amount', 
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
        OnapplicationnoChange (data) {
        this.$nextTick(() => {
            this.M_AR_AmortizeRevenueMaintenance.applicationno = data.id
            this.M_AR_AmortizeRevenueMaintenance.applicationnoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{applicationno}
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
        M_Post(dt){
        },
        M_Insert() {
            //nothing
        },
        M_Update() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                RevenueSequenceNo: this.M_AR_AmortizeRevenueMaintenance.revenuesequenceno,
                ApplicationNo: this.M_AR_AmortizeRevenueMaintenance.applicationno == '' || this.M_AR_AmortizeRevenueMaintenance.applicationno == null ? 'NULL' : this.M_AR_AmortizeRevenueMaintenance.applicationno ,
                RevenueMonth: this.M_AR_AmortizeRevenueMaintenance.revenuemonth,
                RevenueYear: this.M_AR_AmortizeRevenueMaintenance.revenueyear,
                RevenueAmt: this.M_AR_AmortizeRevenueMaintenance.revenueamt ? this.replaceAllString(this.M_AR_AmortizeRevenueMaintenance.revenueamt,',','','number') : 0 ,//this.M_AR_AmortizeRevenueMaintenance.revenueamt,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_AR_AmortizeRevenueMaintenance.lastupdatestamp,
                OutputMessage_Output: ''//this.M_AR_AmortizeRevenueMaintenance.outputmessage                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })

        },
		M_ClearForm(){
            this.M_AR_AmortizeRevenueMaintenance = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                applicationno: '',
                revenuesequenceno: 0,
                revenuemonth: '',
                revenueyear: '',
                revenueamt: '',
                status: '',
                debtorcd: '',
                debtorname: '',
                businessname: '',
                brandcd: '',
                brandname: '',
                timeedit: '',
                useredit: this.getDataUser().UserId,
                userinput: '',
                timeinput: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
			
        },
        M_Edit(){
        },
        M_Delete(dt){
            var data = this.FormToABSList().getRowSelected()
            var dataDelete = []

            data.forEach((value) => {
                dataDelete.push({
                    RevenueSequenceNo: value.RevenueSequenceNo,  
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

                this.$parent.resultDelete("Deleting Data Successfully")
            })
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                revenuesequenceno: record.RevenueSequenceNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_AR_AmortizeRevenueMaintenance = {
                subportfoliocd: data.subportfoliocd,
                applicationno: data.applicationno,
                revenuesequenceno: data.revenuesequenceno,
                revenuemonth: data.revenuemonth,
                revenueyear: data.revenueyear,
                revenueamt: this.isCurrency(data.revenueamt, this.decimal),
                status: data.status,
                debtorcd: data.debtorcd,
                debtorname: data.debtorname,
                businessname: data.businessname,
                brandcd: data.brandcd,
                brandname: data.brandname,
                timeedit: data.timeedit,
                useredit: data.useredit,
                userinput: data.userinput,
                timeinput: data.timeinput,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
                 

                this.M_AR_AmortizeRevenueMaintenance.applicationnoLabel = this.M_AR_AmortizeRevenueMaintenance.applicationno != null && this.M_AR_AmortizeRevenueMaintenance.applicationno != '' ? data.applicationno + this.separator + data.brandname :'' 
         

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

