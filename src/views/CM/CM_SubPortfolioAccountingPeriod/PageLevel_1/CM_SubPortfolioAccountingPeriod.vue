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
                                <b-col md="12" id="col-left">
                                    <b-row>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_FinYear" v-model="M_CM_SubPortfolioAccountingPeriod.FinYear" ref="ref_FinYear"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_FinPeriod" v-model="M_CM_SubPortfolioAccountingPeriod.FinPeriod"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                          <ABSinputDateRangeVuex :prop="PI_PeriodDate" :valueFrom="M_CM_SubPortfolioAccountingPeriod.StartDate" :valueTo="M_CM_SubPortfolioAccountingPeriod.EndDate" ref="ref_PeriodDate" @from="StartDate" @to="EndDate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex :prop="PI_Remarks" v-model="M_CM_SubPortfolioAccountingPeriod.Remarks" />
                                      </b-col>
                                    </b-row>
                                </b-col>                  
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
            propList: {
                initialWhere: "",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex,
                OrderBy: '',
                SourceField: ''
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_CM_SubPortfolioAccountingPeriod :{
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                FinYear: '',
                FinPeriod: '',
                StartDate: '',
                EndDate: '',
                Remarks: '',
                UserInput: '',
                UserEdit: this.getDataUser().UserId,
                TimeInput: '',
                TimeEdit: '',
                LastUpdateStamp: 0,
                RowId: 0
                    }
            ,
            PI_FinYear: { 
                cValidate :'required|max:4|min_value:1900|max_value:2050', 
                cName:'FinYear', 
                cLabel:'Financial Year', 
                cOrder:10, 
                cKey:true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cType: 'numeric' 
            }, 
            PI_FinPeriod: { 
                // cValidate :'required|max:2|min_value:1|max_value:13', 
                cValidate :'required|max:2|min_value:1', 
                cName:'FinPeriod', 
                cLabel:'Financial Period', 
                cOrder:20, 
                cKey:true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cType: 'numeric' 
            },
            PI_PeriodDate: {
                cValidate :'required', 
                cName:'PeriodDate', 
                cLabel:'Start Date - End Date', 
                cOrder:30, 
                cKey:false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_Remarks: { 
                cValidate :'', 
                cName:'Remarks', 
                cLabel:'Remarks', 
                cOrder:40, 
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
    }
  },
    methods: {		
	
		setToolbarButton () {
            //    this.getToolbar().statusFunction[1].disabled = false
            //    this.getToolbar().statusFunction[2].disabled = false
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
        M_Post(){
        },
        M_Refresh(){
        },
        M_ClearForm(){
            this.M_CM_SubPortfolioAccountingPeriod ={
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                FinYear: '',
                FinPeriod: '',
                StartDate: '',
                EndDate: '',
                Remarks: '',
                UserInput: '',
                UserEdit: this.getDataUser().UserId,
                TimeInput: '',
                TimeEdit: '',
                LastUpdateStamp: 0,
                RowId: 0
            }
        },
        M_New () {
            this.$refs.ref_FinYear.focus()
            //this.$nextTick().then(() => document.getElementById("???").focus())
        },
        M_Edit(){
            this.$refs.ref_PeriodDate.focus()
            //this.$nextTick().then(() => document.getElementById("???").focus())
        },
        M_Delete (dt) {
            var data = this.FormToABSList().getRowSelected()  
            var dataDelete = []

            
            data.forEach((value) => {
            dataDelete.push({
            SubPortfolioCd: value.SubPortfolioCd,
            FinYear: value.FinYear,
            FinPeriod: value.FinPeriod,
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
        M_Insert () {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                LineNo: this.$parent.data.PageOrder,
                FinYear: this.M_CM_SubPortfolioAccountingPeriod.FinYear,
                FinPeriod: this.M_CM_SubPortfolioAccountingPeriod.FinPeriod,
                StartDate: this.M_CM_SubPortfolioAccountingPeriod.StartDate,
                EndDate: this.M_CM_SubPortfolioAccountingPeriod.EndDate,
                Remarks: this.M_CM_SubPortfolioAccountingPeriod.Remarks,
                UserInput: this.getDataUser().UserId                 
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return
                this.$parent.resultInsert(response.Message)
            })

        },
        M_Update () {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                LineNo: this.$parent.data.PageOrder,
                FinYear: this.M_CM_SubPortfolioAccountingPeriod.FinYear,
                FinPeriod: this.M_CM_SubPortfolioAccountingPeriod.FinPeriod,
                StartDate: this.M_CM_SubPortfolioAccountingPeriod.StartDate,
                EndDate: this.M_CM_SubPortfolioAccountingPeriod.EndDate,
                Remarks: this.M_CM_SubPortfolioAccountingPeriod.Remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_CM_SubPortfolioAccountingPeriod.LastUpdateStamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return
                this.$parent.resultUpdate(response.Message)
            })
        },
        M_Cancel() {},
        paramFromParent(){
        },
        rowClicked (record, index) {
        },
        doDoubleClick(){
        },		
        rowLink: function(url){            
        },
        getDataBy (record) {
            console.log(record)
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: record.SubPortfolioCd,
                FinYear: record.FinYear,
                FinPeriod: record.FinPeriod 
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
                console.log(data)
                this.M_CM_SubPortfolioAccountingPeriod ={
                    SubPortfolioCd: data.subportfoliocd,
                    FinYear: data.finyear,
                    FinPeriod: data.finperiod,
                    StartDate: data.startdate,
                    EndDate: data.enddate,
                    Remarks: data.remarks,
                    UserInput: data.userinput,
                    UserEdit: data.useredit,
                    TimeInput: data.timeinput,
                    TimeEdit: data.timeedit,
                    LastUpdateStamp: record.LastUpdateStamp,
                    RowId: data.rowid
                }

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        },
        StartDate (data) {
            this.M_CM_SubPortfolioAccountingPeriod.StartDate = data
        },
        EndDate (data) {
            this.M_CM_SubPortfolioAccountingPeriod.EndDate = data
        },

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

