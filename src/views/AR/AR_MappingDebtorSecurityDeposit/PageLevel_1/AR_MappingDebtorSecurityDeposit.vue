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
                                        <ABSInputSelectList @change="OndebtorcdChange" :prop="PI_debtorcd" :value="M_AR_MappingDebtorSecurityDeposit.debtorcd" :label="M_AR_MappingDebtorSecurityDeposit.debtorcdLabel" ref="ref_debtorcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnsubportfoliocdtoChange" :prop="PI_subportfoliocdto" :value="M_AR_MappingDebtorSecurityDeposit.subportfoliocdto" :label="M_AR_MappingDebtorSecurityDeposit.subportfoliocdtoLabel" ref="ref_subportfoliocdto"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OndebtorcdtoChange" :prop="PI_debtorcdto" :value="M_AR_MappingDebtorSecurityDeposit.debtorcdto" :label="M_AR_MappingDebtorSecurityDeposit.debtorcdtoLabel" ref="ref_debtorcdto"/>
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
                initialWhere: "SubPortfolioCd='"+ this.getDataUser().SubPortfolioCd +"'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_AR_MappingDebtorSecurityDeposit :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                debtorcd: '',
                debtorname: '',
                subportfoliocdto: '',
                debtorcdto: '',
                debtornameto: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_debtorcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupARDebtor'    , 
                    ColumnDB: 'DebtorCd'   , 
                    InitialWhere: "SUBPORTFOLIOCD='"+this.getDataUser().SubPortfolioCd+"' AND STATUS = 'Y'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'debtorcdto', 
                cLabel: 'Debtor Code', 
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
                cDisplayColumn: 'DebtorCd,DebtorName' ,
            }, 
            PI_subportfoliocdto: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMSubPortfolioByUser'    , 
                    ColumnDB: 'SubPortFolioCd'   , 
                    InitialWhere: "UserId='"+ this.getDataUser().UserId +"' AND STATUS = 'Y'"   , 
                    // InitialWhere:'',
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'subportfoliocdto', 
                cLabel: 'SubPortfolio To', 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'SubPortFolioCd,Name' ,
            }, 
            PI_debtorcdto: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupARDebtor'    , 
                    ColumnDB: 'DebtorCd'   , 
                    InitialWhere: "SubPortfolioCd='' AND [Status] = 'Y'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'debtorcdto', 
                cLabel: 'Debtor Code To', 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'DebtorCd,DebtorName' ,
            }, 

			PTAnalysis: {
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cPageMasterSeq: this.data.PageMasterSeq,
                cFormPageNo: this.data.PageOrder,
				cProtect: false
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
	},
	GetDataBy1(){
		return this.$store.getters.GetPage1GetDataBy
	}
  },
    methods: {		
        OndebtorcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_MappingDebtorSecurityDeposit.debtorcd = data.id
            this.M_AR_MappingDebtorSecurityDeposit.debtorcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{debtorcdto}
            }
        })
        this.$forceUpdate()
        },
        OnsubportfoliocdtoChange (data) {
        this.$nextTick(() => {
            this.M_AR_MappingDebtorSecurityDeposit.subportfoliocdto = data.id
            this.M_AR_MappingDebtorSecurityDeposit.subportfoliocdtoLabel = data.label
            if(this.M_AR_MappingDebtorSecurityDeposit.subportfoliocdto != '' || this.M_AR_MappingDebtorSecurityDeposit.subportfoliocdto != null){
                this.PI_debtorcdto.dataLookUp.InitialWhere =  "SubPortfolioCd = '"+ this.M_AR_MappingDebtorSecurityDeposit.subportfoliocdto +"' AND [Status] = 'Y'"
            }
            if (this.inputStatus != "VIEW") {
//{subportfoliocdto}
            }
        })
        this.$forceUpdate()
        },
        OndebtorcdtoChange (data) {
        this.$nextTick(() => {
            this.M_AR_MappingDebtorSecurityDeposit.debtorcdto = data.id
            this.M_AR_MappingDebtorSecurityDeposit.debtorcdtoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{debtorcdto}
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
                DebtorCd: this.M_AR_MappingDebtorSecurityDeposit.debtorcd == '' || this.M_AR_MappingDebtorSecurityDeposit.debtorcd == null ? 'NULL' : this.M_AR_MappingDebtorSecurityDeposit.debtorcd ,
                SubPortfolioCdTo: this.M_AR_MappingDebtorSecurityDeposit.subportfoliocdto == '' || this.M_AR_MappingDebtorSecurityDeposit.subportfoliocdto == null ? 'NULL' : this.M_AR_MappingDebtorSecurityDeposit.subportfoliocdto ,
                DebtorCdTo: this.M_AR_MappingDebtorSecurityDeposit.debtorcdto == '' || this.M_AR_MappingDebtorSecurityDeposit.debtorcdto == null ? 'NULL' : this.M_AR_MappingDebtorSecurityDeposit.debtorcdto ,
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
                DebtorCd: this.M_AR_MappingDebtorSecurityDeposit.debtorcd == '' || this.M_AR_MappingDebtorSecurityDeposit.debtorcd == null ? 'NULL' : this.M_AR_MappingDebtorSecurityDeposit.debtorcd ,
                SubPortfolioCdTo: this.M_AR_MappingDebtorSecurityDeposit.subportfoliocdto == '' || this.M_AR_MappingDebtorSecurityDeposit.subportfoliocdto == null ? 'NULL' : this.M_AR_MappingDebtorSecurityDeposit.subportfoliocdto ,
                DebtorCdTo: this.M_AR_MappingDebtorSecurityDeposit.debtorcdto == '' || this.M_AR_MappingDebtorSecurityDeposit.debtorcdto == null ? 'NULL' : this.M_AR_MappingDebtorSecurityDeposit.debtorcdto ,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_AR_MappingDebtorSecurityDeposit.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })

        },
		M_ClearForm(){
            this.M_AR_MappingDebtorSecurityDeposit = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                debtorcd: '',
                debtorname: '',
                subportfoliocdto: '',
                debtorcdto: '',
                debtornameto: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
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
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    DebtorCd: value.DebtorCd,
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
                debtorcd: record.DebtorCd
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_AR_MappingDebtorSecurityDeposit = {
                subportfoliocd: data.subportfoliocd,
                debtorcd: data.debtorcd,
                debtorname: data.debtorname,
                subportfoliocdto: data.subportfoliocdto,
                debtorcdto: data.debtorcdto,
                debtornameto: data.debtornameto,
                userinput: data.userinput,
                useredit: data.useredit,
                timeinput: data.timeinput,
                timeedit: data.timeedit,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
                 

                this.M_AR_MappingDebtorSecurityDeposit.debtorcdLabel = this.M_AR_MappingDebtorSecurityDeposit.debtorcd != null && this.M_AR_MappingDebtorSecurityDeposit.debtorcd != '' ? data.debtorcd + this.separator + data.debtorname :'' 
                this.M_AR_MappingDebtorSecurityDeposit.subportfoliocdtoLabel = this.M_AR_MappingDebtorSecurityDeposit.subportfoliocdto != null && this.M_AR_MappingDebtorSecurityDeposit.subportfoliocdto != '' ? data.subportfoliocdto  :'' 
                this.M_AR_MappingDebtorSecurityDeposit.debtorcdtoLabel = this.M_AR_MappingDebtorSecurityDeposit.debtorcdto != null && this.M_AR_MappingDebtorSecurityDeposit.debtorcdto != '' ? data.debtorcdto + this.separator  + data.debtornameto :'' 
         

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

