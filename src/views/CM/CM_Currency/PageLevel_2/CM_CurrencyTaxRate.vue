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
                                        <ABSinputDateRangeVuex :prop="PI_startdate" :valueFrom="M_CM_CurrencyTaxRate.startdate" :valueTo="M_CM_CurrencyTaxRate.enddate" ref="ref_startdate" @from="MdtRange_startdate" @to="MdtRange_enddate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_rate" v-model="M_CM_CurrencyTaxRate.rate"  ref="ref_rate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_referenceno" v-model="M_CM_CurrencyTaxRate.referenceno"  ref="ref_referenceno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnreferencedateChange" :prop="PI_referencedate" v-model="M_CM_CurrencyTaxRate.referencedate"  ref="ref_referencedate" />
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
                initialWhere:"CurrencyCd = '" + this.ValKey + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_CM_CurrencyTaxRate :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                currencycd: '',
                startdate: '',
                enddate: '',
                rate: '0',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                referenceno: '',
                referencedate: '',
                rowid: 0
                    }
            ,
            PI_startdate: { 
                cValidate :'required', 
                cName: 'startdatesatu', 
                cLabel: 'Start Date - End Date', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: true, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_rate: { 
                cValidate :'required|max:13|greater:0.00', 
                cName: 'ratesatu', 
                cLabel: 'Rate', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 0, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_referenceno: { 
                cValidate :'max:20', 
                cName: 'referenceno', 
                cLabel: 'Reference No', 
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
            PI_referencedate: { 
                cValidate :'', 
                cName: 'referencedate', 
                cLabel: 'Reference Date', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cVisible:  true, 
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
		return this.$store.getters.GetPage2Data
	},
    DataRowPage1(){
		return this.$store.getters.GetPage1Data
	}
  },
    methods: {
        OnreferencedateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{referencedate}
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
            this.M_CM_CurrencyTaxRate.currencycd = data.CurrencyCd 
            this.propList.initialWhere =" CurrencyCd = '" + data.CurrencyCd + "' "
        

            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                CurrencyCd: this.M_CM_CurrencyTaxRate.currencycd,
                StartDate: this.M_CM_CurrencyTaxRate.startdate == '' || this.M_CM_CurrencyTaxRate.startdate == null ? 'NULL' : this.M_CM_CurrencyTaxRate.startdate ,
                EndDate: this.M_CM_CurrencyTaxRate.enddate == '' || this.M_CM_CurrencyTaxRate.enddate == null ? 'NULL' : this.M_CM_CurrencyTaxRate.enddate ,
                Rate: this.M_CM_CurrencyTaxRate.rate ? this.replaceAllString(this.M_CM_CurrencyTaxRate.rate,',','','number') : 0 ,
                RefDate: this.M_CM_CurrencyTaxRate.referencedate == '' || this.M_CM_CurrencyTaxRate.referencedate == null ? 'NULL' : this.M_CM_CurrencyTaxRate.referencedate ,
                RefNo: this.M_CM_CurrencyTaxRate.referenceno,
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
                CurrencyCd: this.M_CM_CurrencyTaxRate.currencycd,
                StartDate: this.M_CM_CurrencyTaxRate.startdate == '' || this.M_CM_CurrencyTaxRate.startdate == null ? 'NULL' : this.M_CM_CurrencyTaxRate.startdate ,
                EndDate: this.M_CM_CurrencyTaxRate.enddate == '' || this.M_CM_CurrencyTaxRate.enddate == null ? 'NULL' : this.M_CM_CurrencyTaxRate.enddate ,
                Rate: this.M_CM_CurrencyTaxRate.rate ? this.replaceAllString(this.M_CM_CurrencyTaxRate.rate,',','','number') : 0 ,
                RefDate: this.M_CM_CurrencyTaxRate.referencedate == '' || this.M_CM_CurrencyTaxRate.referencedate == null ? 'NULL' : this.M_CM_CurrencyTaxRate.referencedate ,
                RefNo: this.M_CM_CurrencyTaxRate.referenceno,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_CM_CurrencyTaxRate.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })

        },
		M_ClearForm(){
            this.M_CM_CurrencyTaxRate = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                currencycd: '',
                startdate: '',
                enddate: '',
                rate: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                referenceno: '',
                referencedate: '',
                rowid: 0
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_CM_CurrencyTaxRate.currencycd = data.CurrencyCd 

            this.$refs.ref_startdate.focus()
        },
        M_Edit(){
            this.$refs.ref_rate.focus()
        },
        M_Delete(dt){           

            var data = this.FormToABSList().getRowSelected()  
            var dataDelete = []

            
            data.forEach((value) => {
            dataDelete.push({
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                CurrencyCd: value.CurrencyCd,
                StartDate: value.StartDate,
                EndDate: value.EndDate,
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
,                subportfoliocd: record.SubPortfolioCd,
                currencycd: record.CurrencyCd,
                startdate: record.StartDate,
                enddate: record.EndDate				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_CM_CurrencyTaxRate = {
                subportfoliocd: data.subportfoliocd,
                currencycd: data.currencycd,
                startdate: data.startdate,
                enddate: data.enddate,
                rate: this.isCurrency(data.rate, this.decimal),
                userinput: data.userinput,
                useredit: data.useredit,
                timeinput: data.timeinput,
                timeedit: data.timeedit,
                lastupdatestamp: record.LastUpdateStamp,
                referenceno: data.referenceno,
                referencedate: data.referencedate,
                rowid: data.rowid
                    }
                 

  

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }
        ,MdtRange_startdate (data) {
            this.M_CM_CurrencyTaxRate.startdate = data
        }
        ,MdtRange_enddate (data) {
            this.M_CM_CurrencyTaxRate.enddate = data
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

