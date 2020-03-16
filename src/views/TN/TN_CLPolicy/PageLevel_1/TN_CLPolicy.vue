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
                                        <ABSinputTextVuex :prop="PI_clpolicyyear" v-model="M_TN_CLPolicy.clpolicyyear"  ref="ref_clpolicyyear"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_rentalrateincrement" v-model="M_TN_CLPolicy.rentalrateincrement"  ref="ref_rentalrateincrement"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_occupancyrate" v-model="M_TN_CLPolicy.occupancyrate"  ref="ref_occupancyrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnmonthoccupancytypeChange" :prop="PI_monthoccupancytype" v-model="M_TN_CLPolicy.monthoccupancytype"  ref="ref_monthoccupancytype" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_fixdaysinmonth" v-model="M_TN_CLPolicy.fixdaysinmonth"  ref="ref_fixdaysinmonth"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_previousyearincome" v-model="M_TN_CLPolicy.previousyearincome"  ref="ref_previousyearincome"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_telephonedeposit" v-model="M_TN_CLPolicy.telephonedeposit"  ref="ref_telephonedeposit"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OneventendonsundayChange" :prop="PI_eventendonsunday" v-model="M_TN_CLPolicy.eventendonsunday"  ref="ref_eventendonsunday" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_CLPolicy.remarks"  ref="ref_remarks" />
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
                initialWhere: "SubPortfolioCd='"+this.getDataUser().SubPortfolioCd+"'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_TN_CLPolicy :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                clpolicyyear: 0,
                rentalrateincrement: '0',
                occupancyrate: '0',
                monthoccupancytype: 'F',
                fixdaysinmonth: '0',
                previousyearincome: '0',
                telephonedeposit: '0',
                eventendonsunday: 'Y',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_clpolicyyear: { 
                cValidate :'required|max:4|min_value:2000|max:12', 
                cName: 'clpolicyyear', 
                cLabel: 'Policy Year', 
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
            PI_rentalrateincrement: { 
                cValidate :'min_value:0|max:12', 
                cName: 'rentalrateincrement', 
                cLabel: 'Rental Rate Increment', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: false, 
                cLastLabel: '%',
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_occupancyrate: { 
                cValidate :'min_value:0|max:12', 
                cName: 'occupancyrate', 
                cLabel: 'Occupancy', 
                cLabelSize: 4, 
                cOrder: 3, 
                cKey: false, 
                cLastLabel: '%',
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_monthoccupancytype: { 
                cValidate :'', 
                cName: 'monthoccupancytype', 
                cId: 'rdbmonthoccupancytype', 
                cRadioOptions: [{ text: 'Fix', value: 'F' },{ text: 'Normal', value: 'N' },], 
                cRadioDefaultOption: 'F', 
                cLabel:'Days In Month', 
                cLabelSize: 4, 
                cOrder: 4, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_fixdaysinmonth: { 
                cValidate :'min_value:1|max_value:31', 
                cName: 'fixdaysinmonth', 
                cLabel: 'Fix Days In Month', 
                cLabelSize: 4, 
                cOrder: 5, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_previousyearincome: { 
                cValidate :'greater:-0.00|max:12', 
                cName: 'previousyearincome', 
                cLabel: 'Previous Year Income', 
                cLabelSize: 4, 
                cOrder: 6, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_telephonedeposit: { 
                cValidate :'max:12', 
                cName: 'telephonedeposit', 
                cLabel: 'Telephone Deposit', 
                cLabelSize: 4, 
                cOrder: 7, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_eventendonsunday: { 
                cValidate :'', 
                cName: 'eventendonsunday', 
                cId: 'rdbeventendonsunday', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: 'Y', 
                cLabel:'Event End On Sunday   ', 
                cLabelSize: 4, 
                cOrder: 8, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks', 
                cLabelSize: 4, 
                cOrder:9, 
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
        OnmonthoccupancytypeChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
                if(data == 'N'){
                    this.PI_fixdaysinmonth.cProtect = true
                }
                else{
                    this.PI_fixdaysinmonth.cProtect = false
                }
            }
        })
        this.$forceUpdate()
        },
        OneventendonsundayChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{eventendonsunday}
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
        },		
        M_Post(dt){
        },
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                CLPolicyYear: this.M_TN_CLPolicy.clpolicyyear,
                RentalRateIncrement: this.M_TN_CLPolicy.rentalrateincrement ? this.replaceAllString(this.M_TN_CLPolicy.rentalrateincrement,',','','number') : 0,
                OccupancyRate: this.M_TN_CLPolicy.occupancyrate? this.replaceAllString(this.M_TN_CLPolicy.occupancyrate,',','','number') : 0,
                MonthOccupancyType: this.M_TN_CLPolicy.monthoccupancytype,
                FixDaysInMonth: this.M_TN_CLPolicy.fixdaysinmonth ? this.replaceAllString(this.M_TN_CLPolicy.fixdaysinmonth,',','','number') : 0,
                PreviousYearIncome: this.M_TN_CLPolicy.previousyearincome ? this.replaceAllString(this.M_TN_CLPolicy.previousyearincome,',','','number') : 0 ,
                TelephoneDeposit: this.M_TN_CLPolicy.telephonedeposit ? this.replaceAllString(this.M_TN_CLPolicy.telephonedeposit,',','','number') : 0 ,
                EventEndOnSunday: this.M_TN_CLPolicy.eventendonsunday,
                Remarks: this.M_TN_CLPolicy.remarks,
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
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                CLPolicyYear: this.M_TN_CLPolicy.clpolicyyear,
                RentalRateIncrement: this.M_TN_CLPolicy.rentalrateincrement,
                OccupancyRate: this.M_TN_CLPolicy.occupancyrate,
                MonthOccupancyType: this.M_TN_CLPolicy.monthoccupancytype,
                FixDaysInMonth: this.M_TN_CLPolicy.fixdaysinmonth,
                PreviousYearIncome: this.M_TN_CLPolicy.previousyearincome ? this.replaceAllString(this.M_TN_CLPolicy.previousyearincome,',','','number') : 0 ,
                TelephoneDeposit: this.M_TN_CLPolicy.telephonedeposit ? this.replaceAllString(this.M_TN_CLPolicy.telephonedeposit,',','','number') : 0 ,
                EventEndOnSunday: this.M_TN_CLPolicy.eventendonsunday,
                Remarks: this.M_TN_CLPolicy.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_CLPolicy.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_TN_CLPolicy = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                clpolicyyear: '',
                rentalrateincrement: '',
                occupancyrate: '',
                monthoccupancytype: 'F',
                fixdaysinmonth: '',
                previousyearincome: '',
                telephonedeposit: '',
                eventendonsunday: 'Y',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
            this.$refs.ref_clpolicyyear.focus()
			
        },
        M_Edit(){
            this.$refs.ref_rentalrateincrement.focus()
        },
        M_Delete(dt){       

        var data = this.FormToABSList().getRowSelected()  
        var dataDelete = []

        
        data.forEach((value) => {
          dataDelete.push({
          SubportfolioCd: this.getDataUser().SubPortfolioCd,
          CLPolicyYear: value.CLPolicyYear,
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
,                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                clpolicyyear: record.CLPolicyYear
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_TN_CLPolicy = {
                subportfoliocd: data.subportfoliocd,
                clpolicyyear: data.clpolicyyear,
                rentalrateincrement: data.rentalrateincrement,
                occupancyrate: data.occupancyrate,
                monthoccupancytype: data.monthoccupancytype,
                fixdaysinmonth: data.fixdaysinmonth,
                previousyearincome: this.isCurrency(data.previousyearincome, this.decimal),
                telephonedeposit: this.isCurrency(data.telephonedeposit, this.decimal),
                eventendonsunday: data.eventendonsunday,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: this.isCurrency(data.rowid, this.decimal)
                    }
                 

         

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit
                
                if(data.monthoccupancytype == 'N'){
                    this.PI_fixdaysinmonth.cProtect = true
                }
                else{
                    this.PI_fixdaysinmonth.cProtect = false
                }
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

