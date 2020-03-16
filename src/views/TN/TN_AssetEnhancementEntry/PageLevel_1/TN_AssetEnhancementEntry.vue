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
      @checkboxChecked = "$parent.checkboxChecked"
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
                                <b-col md="12" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_assetenhancementno" v-model="M_TN_AssetEnhancementEntry.assetenhancementno"  ref="ref_assetenhancementno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnassetenhancementdateChange" :prop="PI_assetenhancementdate" v-model="M_TN_AssetEnhancementEntry.assetenhancementdate"  ref="ref_assetenhancementdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnapplicationnoChange" :prop="PI_applicationno" :value="M_TN_AssetEnhancementEntry.applicationno" :label="M_TN_AssetEnhancementEntry.applicationnoLabel" ref="ref_applicationno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnlotnoChange" :prop="PI_lotno" :value="M_TN_AssetEnhancementEntry.lotno" :label="M_TN_AssetEnhancementEntry.lotnoLabel" ref="ref_lotno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_investmentamt" v-model="M_TN_AssetEnhancementEntry.investmentamt"  ref="ref_investmentamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_interestamt" v-model="M_TN_AssetEnhancementEntry.interestamt"  ref="ref_interestamt"/>
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close -->
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
                initialWhere: "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			
            TNSpec: [],
            DataSelected: [],
            CanDelete: true, 

            M_TN_AssetEnhancementEntry :{
                assetenhancementno: '',
                assetenhancementdate: this.momentDate(new Date()),
                lotno: '',
                investmentamt: '0.00',
                interestamt: '0.00',
                applicationno: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                applicationname: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_assetenhancementno: {
                cValidate :'', 
                cName: 'assetenhancementno', 
                cLabel: 'Asset Enhancement No', 
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
            PI_assetenhancementdate: { 
                cValidate :'', 
                cName: 'assetenhancementdate', 
                cLabel: 'Asset Enhancement Date', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: true, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_applicationno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookUp_ApplicationNo_V2', 
                    ColumnDB: 'ApplicationNo'   , 
                    InitialWhere: "Status = 'A' AND ContractStatus in ('2','3','4') AND GETDATE() between StartDate and EndDate AND TerminateStatus = 'N' AND ApplicationNo NOT IN ( SELECT ct.ApplicationNo FROM TN_ContractTermination ct WHERE ct.Status = 'N' ) AND ApplicationNo NOT IN ( SELECT ca.ApplicationNo FROM TN_ContractAddendum ca WHERE ca.Status = 'N' ) AND ApplicationNo NOT IN ( SELECT cs.ApplicationNo FROM TN_ContractSubleaseAssignment cs WHERE cs.Status = 'N' ) AND SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "'", 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'applicationno', 
                cLabel: 'Application No', 
                cKey: true, 
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
                cDisplayColumn: 'ApplicationNo,Name' ,
            }, 
            PI_lotno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNLotInContract'    , 
                    ColumnDB: 'LotNo'   , 
                    InitialWhere: "ApplicationNo = ''"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'lotno', 
                cLabel: 'Lot No', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 4, 
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
                cDisplayColumn: 'LotNo,ApplicationNo' ,
            }, 
            PI_investmentamt: { 
                cValidate :'', 
                cName: 'investmentamt', 
                cLabel: 'Investment Amount', 
                cLabelSize: 4, 
                cOrder: 5, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_interestamt: { 
                cValidate :'', 
                cName: 'interestamt', 
                cLabel: 'Interest Amount (%)', 
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
        OnassetenhancementdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{assetenhancementdate}
            }
        })
        this.$forceUpdate()
        },
        OnapplicationnoChange (data) {
        this.$nextTick(() => {
            this.M_TN_AssetEnhancementEntry.applicationno = data.id
            this.M_TN_AssetEnhancementEntry.applicationnoLabel = data.label
            if (this.inputStatus != "VIEW") {
                this.PI_lotno.dataLookUp.InitialWhere = "ApplicationNo = '" + data.id + "'"
            }
        })
        this.$forceUpdate()
        },
        OnlotnoChange (data) {
        this.$nextTick(() => {
            this.M_TN_AssetEnhancementEntry.lotno = data.id
            this.M_TN_AssetEnhancementEntry.lotnoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{lotno}
            }
        })
        this.$forceUpdate()
        },
	
		setToolbarButton () {
           //this.getToolbar().statusFunction[4].disabled = false
        },
        M_CheckboxChecked (data, status, index) {
          if (status === true) {
            if (
                (data.Status && data.Status != 'Complete') ||
                (data.Status && data.Status != 'Cancelled') ||
                (data.Status && data.Status != 'New')
            ) {
              // this.$store.commit('setDeleteStatus', true)
              this.DataSelected.push({idx: index, CanDelete: true})
            }
            else {
              // this.$store.commit('setDeleteStatus', false)
              this.DataSelected.push({idx: index, CanDelete: false})
            }
          }
          else {
            this.$store.commit('setDeleteStatus', true)
            var id = this.DataSelected.map(x => x.idx).indexOf(index)
            this.DataSelected.splice(id,1)
          }

          if (this.DataSelected.length == 0) {
            this.CanDelete = true
            // this.$store.commit('setDeleteStatus', this.CanDelete)
          }
          else {
            for (var a = 0; a < this.DataSelected.length; a++) {
              if (this.DataSelected[a].CanDelete == false) {
                this.CanDelete = false
                break
              }
            }
          }
          
          this.$store.commit('setDeleteStatus', this.CanDelete)
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
        if (this.M_TN_AssetEnhancementEntry.assetenhancementno == "(auto)")
             { this.M_TN_AssetEnhancementEntry.assetenhancementno = "null" }
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                AssetEnhancementNo: this.M_TN_AssetEnhancementEntry.assetenhancementno,
                AssetEnhancementDate: this.M_TN_AssetEnhancementEntry.assetenhancementdate == '' || this.M_TN_AssetEnhancementEntry.assetenhancementdate == null ? 'NULL' : this.M_TN_AssetEnhancementEntry.assetenhancementdate ,
                ApplicationNo: this.M_TN_AssetEnhancementEntry.applicationno,
                LotNo: this.M_TN_AssetEnhancementEntry.lotno == '' || this.M_TN_AssetEnhancementEntry.lotno == null ? 'NULL' : this.M_TN_AssetEnhancementEntry.lotno ,
                InvestmentAmt: this.M_TN_AssetEnhancementEntry.investmentamt ? this.replaceAllString(this.M_TN_AssetEnhancementEntry.investmentamt,',','','number') : 0 ,
                InterestAmt: this.M_TN_AssetEnhancementEntry.interestamt ? this.replaceAllString(this.M_TN_AssetEnhancementEntry.interestamt,',','','number') : 0 ,
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
                AssetEnhancementNo: this.M_TN_AssetEnhancementEntry.assetenhancementno,
                AssetEnhancementDate: this.M_TN_AssetEnhancementEntry.assetenhancementdate == '' || this.M_TN_AssetEnhancementEntry.assetenhancementdate == null ? 'NULL' : this.M_TN_AssetEnhancementEntry.assetenhancementdate ,
                ApplicationNo: this.M_TN_AssetEnhancementEntry.applicationno,
                LotNo: this.M_TN_AssetEnhancementEntry.lotno == '' || this.M_TN_AssetEnhancementEntry.lotno == null ? 'NULL' : this.M_TN_AssetEnhancementEntry.lotno ,
                InvestmentAmt: this.M_TN_AssetEnhancementEntry.investmentamt ? this.replaceAllString(this.M_TN_AssetEnhancementEntry.investmentamt,',','','number') : 0 ,
                InterestAmt: this.M_TN_AssetEnhancementEntry.interestamt ? this.replaceAllString(this.M_TN_AssetEnhancementEntry.interestamt,',','','number') : 0 ,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_AssetEnhancementEntry.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_TN_AssetEnhancementEntry = {
                assetenhancementno: '',
                assetenhancementdate: this.momentDate(new Date()),
                lotno: '',
                investmentamt: '0.00',
                interestamt: '0.00',
                applicationno: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                applicationname: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
            this.PI_lotno.dataLookUp.InitialWhere = "ApplicationNo = ''"
            if (this.TNSpec.AssetEnhancementRunningCd != null && this.TNSpec.AssetEnhancementRunningCd != "") {
                this.M_TN_AssetEnhancementEntry.assetenhancementno = "(auto)"
                this.PI_assetenhancementno.cProtect = true
            }
            else {
                this.M_TN_AssetEnhancementEntry.assetenhancementno = ""
                this.PI_assetenhancementno.cProtect = false
            }	
        },
        M_Edit(){
        },
        M_Delete(dt){       
			var data = this.FormToABSList().getRowSelected()  
			var dataDelete = []

			data.forEach((value) => {
				dataDelete.push({
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    AssetEnhancementNo: value.AssetEnhancementNo,
                    LastUpdateStamp: value.LastUpdateStamp,
                    _Message:""
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
                assetenhancementno: record.AssetEnhancementNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_TN_AssetEnhancementEntry = {
                assetenhancementno: data.assetenhancementno,
                assetenhancementdate: data.assetenhancementdate,
                lotno: data.lotno,
                investmentamt: this.isCurrency(data.investmentamt, this.decimal),
                interestamt: this.isCurrency(data.interestamt, this.decimal),
                applicationno: data.applicationno,
                userinput: data.userinput,
                useredit: data.useredit,
                applicationname: data.applicationname,
                subportfoliocd: data.subportfoliocd,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
                 

                this.M_TN_AssetEnhancementEntry.applicationnoLabel = this.M_TN_AssetEnhancementEntry.applicationno != null && this.M_TN_AssetEnhancementEntry.applicationno != '' ? data.applicationno + this.separator + data.applicationname :'' 
                this.M_TN_AssetEnhancementEntry.lotnoLabel = this.M_TN_AssetEnhancementEntry.lotno != null && this.M_TN_AssetEnhancementEntry.lotno != '' ? data.lotno :'' 

                if(record.StatusDescs != 'NEW'){
                  this.getToolbar().statusFunction[1].disabled = true
                } else {
                  this.getToolbar().statusFunction[1].disabled = false
                }
                
                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit
            })
        },
        getSpec () {
          var param = {
            OptionFunctionCd: "GetSpecification",
            ModuleCd: "TN",
            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
          }

          this.FnDynamicFunction(param)
          .then(ress => {
            if (ress == null) return
            if (ress.length < 1) {
              this.alertError("Please Check TN Specification")
              return
            }

            this.TNSpec = ress[0]
            this.FormToABSList().doGetList('','eb_getList')
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
        this.getSpec()
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

