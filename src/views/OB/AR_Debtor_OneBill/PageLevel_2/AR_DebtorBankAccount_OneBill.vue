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
                                        <ABSinputTextVuex :prop="PI_bankaccountno" v-model="M_AR_DebtorBankAccount_OneBill.bankaccountno"  ref="ref_bankaccountno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnbanknameChange" :prop="PI_bankname" :value="M_AR_DebtorBankAccount_OneBill.bankname" :label="M_AR_DebtorBankAccount_OneBill.banknameLabel" ref="ref_bankname"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntrxtypegroupcdChange" :prop="PI_trxtypegroupcd" :value="M_AR_DebtorBankAccount_OneBill.trxtypegroupcd" :label="M_AR_DebtorBankAccount_OneBill.trxtypegroupcdLabel" ref="ref_trxtypegroupcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_referenceno" v-model="M_AR_DebtorBankAccount_OneBill.referenceno"  ref="ref_referenceno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_AR_DebtorBankAccount_OneBill.remarks"  ref="ref_remarks" />
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
            DataRow:null,
			ValKey:null,
            FormType: "List",
			Module:"OB",
            propList: {
                initialWhere:"DebtorCd = '" + this.ValKey + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_AR_DebtorBankAccount_OneBill :{
                bankaccountno: '',
                bankname: '',
                trxtypegroupcd: '',
                descs: '',
                referenceno: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                subportfoliocd: '',
                debtorcd: '',
                contactid: '',
                bankcd: '',
                timeedit: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_bankaccountno: { 
                cValidate :'required|max:30', 
                cName: 'bankaccountno', 
                cLabel: 'Bank Account No', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_bankname: { 
                dataLookUp: { 
                    LookUpCd: 'GetluBankCd'    , 
                    ColumnDB: 'BankCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'bankname', 
                cLabel: 'Bank Name', 
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
                cDisplayColumn: 'BankCd,BankName' ,
            }, 
            PI_trxtypegroupcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTrxTypeGroup'    , 
                    ColumnDB: 'TrxTypeGroupCd'   , 
                    InitialWhere: "ModuleCd = 'AR'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'trxtypegroupcd', 
                cLabel: 'TrxType Group Code (For Upload Bank)', 
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
                cDisplayColumn: 'TrxTypeGroupCd,Descs' ,
            }, 
            PI_referenceno: { 
                cValidate :'max:20', 
                cName: 'referenceno', 
                cLabel: 'Reference No', 
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
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks', 
                cLabelSize: 4, 
                cOrder:5, 
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
        OnbanknameChange (data) {
        this.$nextTick(() => {
            this.M_AR_DebtorBankAccount_OneBill.bankname = data.id
            this.M_AR_DebtorBankAccount_OneBill.banknameLabel = data.label
            if (this.inputStatus != "VIEW") {
//{bankname}
            }
        })
        this.$forceUpdate()
        },
        OntrxtypegroupcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_DebtorBankAccount_OneBill.trxtypegroupcd = data.id
            this.M_AR_DebtorBankAccount_OneBill.trxtypegroupcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{trxtypegroupcd}
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
            this.DataRow = data
            console.log(data)
            // console.log(this.DataRow)
            this.M_AR_DebtorBankAccount_OneBill.subportfoliocd = data.SubPortFolioCd
            this.M_AR_DebtorBankAccount_OneBill.debtorcd = data.DebtorCd 
            this.propList.initialWhere =" DebtorCd = '" + data.DebtorCd + "' "
        

            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.M_AR_DebtorBankAccount_OneBill.subportfoliocd,
                DebtorCd: this.M_AR_DebtorBankAccount_OneBill.debtorcd,
                BankAccountNo: this.M_AR_DebtorBankAccount_OneBill.bankaccountno,
                BankCd: this.M_AR_DebtorBankAccount_OneBill.bankname,
                TrxTypeGroupCd: this.M_AR_DebtorBankAccount_OneBill.trxtypegroupcd == '' || this.M_AR_DebtorBankAccount_OneBill.trxtypegroupcd == null ? 'NULL' : this.M_AR_DebtorBankAccount_OneBill.trxtypegroupcd ,
                ReferenceNo: this.M_AR_DebtorBankAccount_OneBill.referenceno,
                Remarks: this.M_AR_DebtorBankAccount_OneBill.remarks,
                UserInput: this.getDataUser().UserId ,
                ContactID: this.M_AR_DebtorBankAccount_OneBill.contactid                
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
                SubPortfolioCd: this.M_AR_DebtorBankAccount_OneBill.subportfoliocd,
                DebtorCd: this.M_AR_DebtorBankAccount_OneBill.debtorcd,
                BankAccountNo: this.M_AR_DebtorBankAccount_OneBill.bankaccountno,
                BankCd: this.M_AR_DebtorBankAccount_OneBill.bankname,
                TrxTypeGroupCd: this.M_AR_DebtorBankAccount_OneBill.trxtypegroupcd == '' || this.M_AR_DebtorBankAccount_OneBill.trxtypegroupcd == null ? 'NULL' : this.M_AR_DebtorBankAccount_OneBill.trxtypegroupcd ,
                ReferenceNo: this.M_AR_DebtorBankAccount_OneBill.referenceno,
                Remarks: this.M_AR_DebtorBankAccount_OneBill.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_AR_DebtorBankAccount_OneBill.lastupdatestamp,
                ContactID: this.M_AR_DebtorBankAccount_OneBill.contactid                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_AR_DebtorBankAccount_OneBill = {
                bankaccountno: '',
                bankname: '',
                trxtypegroupcd: '',
                descs: '',
                referenceno: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                subportfoliocd: '',
                debtorcd: '',
                contactid: '',
                bankcd: '',
                timeedit: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_AR_DebtorBankAccount_OneBill.subportfoliocd = data.SubPortFolioCd
            this.M_AR_DebtorBankAccount_OneBill.debtorcd = data.DebtorCd
            this.M_AR_DebtorBankAccount_OneBill.contactid = data.ContactID 



        },
        M_Edit(){
        },
        M_Delete(dt){           

        var data = this.FormToABSList().getRowSelected()  
        var dataDelete = []

        
        data.forEach((value) => {
          dataDelete.push({
          DebtorCd: value.DebtorCd,
          ContactID: value.ContactID,
          SubPortFolioCd: value.SubPortfolioCd,
          BankAccountNo: value.BankAccountNo,
          LastUpdateStamp: value.LastUpdateStamp,
          _Message_: ''
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
                debtorcd: record.DebtorCd,
                bankaccountno: record.BankAccountNo,
                contactid: record.ContactID				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_AR_DebtorBankAccount_OneBill = {
                bankaccountno: data.bankaccountno,
                bankname: data.bankname,
                trxtypegroupcd: data.trxtypegroupcd,
                descs: data.descs,
                referenceno: data.referenceno,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                subportfoliocd: data.subportfoliocd,
                debtorcd: data.debtorcd,
                contactid: data.contactid,
                bankcd: data.bankcd,
                timeedit: data.timeedit,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
                 

                this.M_AR_DebtorBankAccount_OneBill.banknameLabel = this.M_AR_DebtorBankAccount_OneBill.bankname != null ? data.bankcd + this.separator + data.bankname :'' 
                this.M_AR_DebtorBankAccount_OneBill.trxtypegroupcdLabel = this.M_AR_DebtorBankAccount_OneBill.trxtypegroupcd != null ? data.trxtypegroupcd + this.separator + data.descs :'' 
  

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        },
        getSpec () {
            var param = {
                OptionFunctionCd: "GetSubPortfolioOneBill",
                ModuleCd: "AR"
            }

            this.FnDynamicFunction(param)
            .then(FnOpt2 => {
                if (FnOpt2 == null) return
                if (FnOpt2.length > 0) {
                    var data = FnOpt2[0]
                    this.SubPortfolioCd = data.SubPortfolioCd
                
                this.PI_bankname.dataLookUp.InitialWhere= "SubPortfolioCd='" + data.SubPortfolioCd + "' AND Status='A' "
                this.FormToABSList().doGetList('','eb_getList')
                }
            })
        }
		
    },
    created: function() {
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

