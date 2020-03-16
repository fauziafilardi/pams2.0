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
                                        <ABSInputSelectList @change="OnrunningcdChange" :prop="PI_runningcd" :value="M_CB_BankStatControl.runningcd" :label="M_CB_BankStatControl.runningcdLabel" ref="ref_runningcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_bankstatementno" v-model="M_CB_BankStatControl.bankstatementno"  ref="ref_bankstatementno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_CB_BankStatControl.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnbankcdChange" :prop="PI_bankcd" :value="M_CB_BankStatControl.bankcd" :label="M_CB_BankStatControl.bankcdLabel" ref="ref_bankcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_bankname" v-model="M_CB_BankStatControl.bankname"  ref="ref_bankname"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_bankaccountno" v-model="M_CB_BankStatControl.bankaccountno"  ref="ref_bankaccountno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_bankcurrencycd" v-model="M_CB_BankStatControl.bankcurrencycd"  ref="ref_bankcurrencycd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnstatementdateChange" :prop="PI_statementdate" v-model="M_CB_BankStatControl.statementdate"  ref="ref_statementdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_statementbalance" v-model="M_CB_BankStatControl.statementbalance"  ref="ref_statementbalance"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_CB_BankStatControl.remarks"  ref="ref_remarks" />
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
		FormType: "ListProcess",
		Module:"CB",
            propList: {
                initialWhere: "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND Status='N'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_CB_BankStatControl :{
                runningcd: '',
                bankstatementno: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                descs: '',
                bankcd: '',
                bankname: '',
                runningdescs: '',
                bankaccountno: '',
                bankcurrencycd: '',
                statementdate: '',
                statementbalance: '0',
                userinput: '',
                useredit: this.getDataUser().UserId,
                remarks: '',
                timeedit: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_runningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMRunningCode'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: " ModuleCd is null OR ModuleCd = 'CB'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'runningcd', 
                cLabel: 'Running Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 0, 
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
                cMasterUrl: 'CM/CM_RunningCd' ,
                cDisplayColumn: 'RunningCd,Descs' ,
            }, 
            PI_bankstatementno: { 
                cValidate :'required|max:20', 
                cName: 'bankstatementno', 
                cLabel: 'Statement No ', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_descs: { 
                cValidate :'max:150', 
                cName: 'descs', 
                cLabel: 'Description', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_bankcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCBBank'    , 
                    ColumnDB: 'BankCd'   , 
                    InitialWhere: "SubPortfolioCd='" + this.getDataUser().SubPortfolioCd + "' And STATUS = 'A'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'bankcd', 
                cLabel: 'Bank ', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 0, 
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
                cMasterUrl: 'CB/CB_Bank' ,
                cDisplayColumn: 'BankCd,ContactId' ,
            }, 
            PI_bankname: { 
                cValidate :'', 
                cName: 'bankname', 
                cLabel: 'Bank Name', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_bankaccountno: { 
                cValidate :'', 
                cName: 'bankaccountno', 
                cLabel: 'Bank Account No', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_bankcurrencycd: { 
                cValidate :'', 
                cName: 'bankcurrencycd', 
                cLabel: 'Currency', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_statementdate: { 
                cValidate :'required', 
                cName: 'statementdate', 
                cLabel: 'Statement Date ', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_statementbalance: { 
                cValidate :'required', 
                cName: 'statementbalance', 
                cLabel: 'Statement Balance ', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
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
                cOrder:0, 
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
        OnrunningcdChange (data) {
        this.$nextTick(() => {
            this.M_CB_BankStatControl.runningcd = data.id
            this.M_CB_BankStatControl.runningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
                if (data.id && data.id != '') {
                    this.M_CB_BankStatControl.bankstatementno = "(auto number)"
                    this.PI_bankstatementno.cProtect = true
                }
                else {
                    this.M_CB_BankStatControl.bankstatementno = ""
                    this.PI_bankstatementno.cProtect = false
                }
            }
        })
        this.$forceUpdate()
        },
        OnbankcdChange (data) {
        this.$nextTick(() => {
            this.M_CB_BankStatControl.bankcd = data.id
            this.M_CB_BankStatControl.bankcdLabel = data.label
            if (this.inputStatus != "VIEW") {
                this.M_CB_BankStatControl.bankname = data.BankName
                this.M_CB_BankStatControl.bankaccountno = data.BankAccountNo
                this.M_CB_BankStatControl.bankcurrencycd = data.Currency
            }
        })
        this.$forceUpdate()
        },
        OnstatementdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{statementdate}
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
            this.getToolbar().statusFunction[4].text = "Post"
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
            var data = this.FormToABSList().getRowSelected()
            var dataPost = []

            data.forEach((value) => {
                dataPost.push({
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    BankStatementNo: value.BankStatementNo,
                    PostBy: this.getDataUser().UserId,
                    _Message_: "Bank Statement No = "+value.BankStatementNo
                })
            })

            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                Data: dataPost
            }
            
            this.postJSONMulti( this.getUrlPostMulti(), param )
            .then(response => {
                if (response == null) return
                this.$parent.resultPost()
            })
        },
        M_Insert() {
        if (this.M_CB_BankStatControl.runningcd != "")
             { this.FnGenerateRunningCode(this.getDataUser().SubPortfolioCd,this.M_CB_BankStatControl.runningcd,this.getDataUser().UserId,this.getToday()).then(dt9 =>
         { if (dt9 != null) {
                  this.M_CB_BankStatControl.bankstatementno = dt9.RunningCode
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                RunningCd: this.M_CB_BankStatControl.runningcd == '' || this.M_CB_BankStatControl.runningcd == null ? 'NULL' : this.M_CB_BankStatControl.runningcd ,
                BankStatementNo: this.M_CB_BankStatControl.bankstatementno,
                Descs: this.M_CB_BankStatControl.descs,
                BankCd: this.M_CB_BankStatControl.bankcd == '' || this.M_CB_BankStatControl.bankcd == null ? 'NULL' : this.M_CB_BankStatControl.bankcd ,
                StatementDate: this.M_CB_BankStatControl.statementdate == '' || this.M_CB_BankStatControl.statementdate == null ? 'NULL' : this.M_CB_BankStatControl.statementdate ,
                StatementBalance: this.M_CB_BankStatControl.statementbalance ? this.replaceAllString(this.M_CB_BankStatControl.statementbalance,',','','number') : 0 ,
                Remarks: this.M_CB_BankStatControl.remarks,
                UserInput: this.getDataUser().UserId                 
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return

				//kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultInsert(response.Message)
					
				
            })
           } })  }
        else {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                RunningCd: this.M_CB_BankStatControl.runningcd == '' || this.M_CB_BankStatControl.runningcd == null ? 'NULL' : this.M_CB_BankStatControl.runningcd ,
                BankStatementNo: this.M_CB_BankStatControl.bankstatementno,
                Descs: this.M_CB_BankStatControl.descs,
                BankCd: this.M_CB_BankStatControl.bankcd == '' || this.M_CB_BankStatControl.bankcd == null ? 'NULL' : this.M_CB_BankStatControl.bankcd ,
                StatementDate: this.M_CB_BankStatControl.statementdate == '' || this.M_CB_BankStatControl.statementdate == null ? 'NULL' : this.M_CB_BankStatControl.statementdate ,
                StatementBalance: this.M_CB_BankStatControl.statementbalance ? this.replaceAllString(this.M_CB_BankStatControl.statementbalance,',','','number') : 0 ,
                Remarks: this.M_CB_BankStatControl.remarks,
                UserInput: this.getDataUser().UserId                 
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return

				//kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultInsert(response.Message)
					
				
            })
      }

        },
        M_Update() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                RunningCd: this.M_CB_BankStatControl.runningcd == '' || this.M_CB_BankStatControl.runningcd == null ? 'NULL' : this.M_CB_BankStatControl.runningcd ,
                BankStatementNo: this.M_CB_BankStatControl.bankstatementno,
                Descs: this.M_CB_BankStatControl.descs,
                BankCd: this.M_CB_BankStatControl.bankcd == '' || this.M_CB_BankStatControl.bankcd == null ? 'NULL' : this.M_CB_BankStatControl.bankcd ,
                StatementDate: this.M_CB_BankStatControl.statementdate == '' || this.M_CB_BankStatControl.statementdate == null ? 'NULL' : this.M_CB_BankStatControl.statementdate ,
                StatementBalance: this.M_CB_BankStatControl.statementbalance ? this.replaceAllString(this.M_CB_BankStatControl.statementbalance,',','','number') : 0 ,
                Remarks: this.M_CB_BankStatControl.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_CB_BankStatControl.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_CB_BankStatControl = {
                runningcd: '',
                bankstatementno: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                descs: '',
                bankcd: '',
                bankname: '',
                runningdescs: '',
                bankaccountno: '',
                bankcurrencycd: '',
                statementdate: '',
                statementbalance: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                remarks: '',
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
                    SubportfolioCd: this.getDataUser().SubPortfolioCd,
                    BankStatementNo: value.BankStatementNo,
                    lastupdatestamp: value.LastUpdateStamp,
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
,                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                bankstatementno: record.BankStatementNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_CB_BankStatControl = {
                runningcd: data.runningcd,
                bankstatementno: data.bankstatementno,
                subportfoliocd: data.subportfoliocd,
                descs: data.descs,
                bankcd: data.bankcd,
                bankname: data.bankname,
                runningdescs: data.runningdescs,
                bankaccountno: data.bankaccountno,
                bankcurrencycd: data.bankcurrencycd,
                statementdate: data.statementdate,
                statementbalance: this.isCurrency(data.statementbalance, this.decimal),
                userinput: data.userinput,
                useredit: data.useredit,
                remarks: data.remarks,
                timeedit: data.timeedit,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
                 

                this.M_CB_BankStatControl.runningcdLabel = this.M_CB_BankStatControl.runningcd != null && this.M_CB_BankStatControl.runningcd != '' ? data.runningcd + this.separator + data.runningdescs :'' 
                this.M_CB_BankStatControl.bankcdLabel = this.M_CB_BankStatControl.bankcd != null && this.M_CB_BankStatControl.bankcd != '' ? data.bankcd + this.separator  :'' 
         

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }

    },
    beforeCreate: function () {
    },
    created: function() {
        this.$store.commit('setFormType','ListProcess')
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

