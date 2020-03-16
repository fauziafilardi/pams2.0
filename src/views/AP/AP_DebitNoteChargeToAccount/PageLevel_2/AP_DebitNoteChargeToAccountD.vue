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
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnaccountcdChange" :prop="PI_accountcd" :value="M_AP_DebitNoteChargeToAccountD.accountcd" :label="M_AP_DebitNoteChargeToAccountD.accountcdLabel" ref="ref_accountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_AP_DebitNoteChargeToAccountD.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_trxamt" v-model="M_AP_DebitNoteChargeToAccountD.trxamt"  ref="ref_trxamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_AP_DebitNoteChargeToAccountD.remarks"  ref="ref_remarks" />
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close -->

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
    props: {PageLevel:'', TabIndex: '', data: ''},
    data() {
        return {
			ValKey:null,
            FormType: "List",
			Module:"AP",
            propList: {
                initialWhere:"DebitNo = '" + this.ValKey + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_AP_DebitNoteChargeToAccountD :{
                debitaccountsequenceno: 0,
                accountcd: '',
                descs: '',
                trxamt: '0',
                t0: '',
                t1: '',
                t2: '',
                t3: '',
                t4: '',
                t5: '',
                t6: '',
                t7: '',
                t8: '',
                t9: '',
                t10: '',
                t11: '',
                t12: '',
                t13: '',
                t14: '',
                t15: '',
                t16: '',
                t17: '',
                t18: '',
                t19: '',
                t20: '',
                t21: '',
                t22: '',
                t23: '',
                t24: '',
                t25: '',
                t26: '',
                t27: '',
                t28: '',
                t29: '',
                t30: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                accountdescs: '',
                debitno: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_accountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCodeBySubportfolio'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "Status = 'A' And SubportfolioCd = '"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'AccountCd,Description' 
                        }, 
                cValidate :'required', 
                cName: 'accountcd', 
                cLabel: 'Account Code ', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 101, 
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
                cMasterUrl: 'GL/GL_ChartOfAccount' ,
                cDisplayColumn: 'AccountCd,Description' ,
            }, 
            PI_descs: { 
                cValidate :'max:150', 
                cName: 'descs', 
                cLabel: 'Description', 
                cLabelSize: 4, 
                cOrder: 102, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_trxamt: { 
                cValidate :'required', 
                cName: 'trxamt', 
                cLabel: 'Trans .Amount ', 
                cLabelSize: 4, 
                cOrder: 103, 
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
                cOrder: 104, 
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
	,GetDataBy1(){
		return this.$store.getters.GetPage1GetDataBy
	}
  },
    methods: {
        OnaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_AP_DebitNoteChargeToAccountD.accountcd = data.id
            this.M_AP_DebitNoteChargeToAccountD.accountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{accountcd}
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
        },
		paramFromParent(){
            this.$parent.showForm = false
			
            let data = this.$store.getters.GetPage1Data
            this.M_AP_DebitNoteChargeToAccountD.debitno = data.DebitNo 
            this.propList.initialWhere ="SubportfolioCd='"+this.getDataUser().SubPortfolioCd+"' and DebitNo='"+data.DebitNo+"'"


            this.FormToABSList().doGetList('','eb_getList')
        },		
		M_CheckboxChecked(data, status, index){

        },		
        M_Insert() {
            var dataSave = []
            var param1 = {			
                _Method_:'SAVE',
                _LineNo_: this.$parent.data.PageOrder ,
                OptionSeq: this.getOptionSeq().OptionSeq,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                DebitNo: this.DataRowPage1.DebitNo,
                AccountCd: this.M_AP_DebitNoteChargeToAccountD.accountcd == '' || this.M_AP_DebitNoteChargeToAccountD.accountcd == null ? 'NULL' : this.M_AP_DebitNoteChargeToAccountD.accountcd ,
                Descs: this.M_AP_DebitNoteChargeToAccountD.descs,
                TrxAmt: this.M_AP_DebitNoteChargeToAccountD.trxamt ? this.replaceAllString(this.M_AP_DebitNoteChargeToAccountD.trxamt,',','','number') : 0 ,
                Remarks: this.M_AP_DebitNoteChargeToAccountD.remarks,
                UserInput: this.getDataUser().UserId 
            }

            var param2 = {			
              _Method_:'SAVE2',
              _LineNo_: this.$parent.data.PageOrder ,
              SubPortfolioCd: this.getDataUser().SubPortfolioCd,
              DebitNo: this.DataRowPage1.DebitNo, //this.M_AP_DebitNoteChargeToAccountD.debitno,
              UserEdit: this.getDataUser().UserId 
            }

            var param3 = {			
              _Method_:'SAVE3',
              _LineNo_: this.$parent.data.PageOrder ,
              SubPortfolioCd: this.getDataUser().SubPortfolioCd,
              DebitNo: this.DataRowPage1.DebitNo, //this.M_AP_DebitNoteChargeToAccountD.debitno,
              UserEdit: this.getDataUser().UserId ,
              EntryType: 'D' 
            }

            dataSave.push({
                A_Insert : param1,
                B_Insert : param2,
                C_Insert : param3
            })
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                Data: dataSave
            }
            
            this.postJSONMulti( this.getUrlProsesDataPostMulti(), param )
            .then(response => {
                if (response == null) return

                this.$parent.resultInsert('Data Has Been Inserted Successfully')
                this.refreshListParent(true)
            })
        },
        M_Update() {
            var dataUpdate = []
            var param1 = {			
                _Method_:'UPDATE',
                _LineNo_: this.$parent.data.PageOrder ,
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                DebitAccountSequenceNo: this.M_AP_DebitNoteChargeToAccountD.debitaccountsequenceno,
                AccountCd: this.M_AP_DebitNoteChargeToAccountD.accountcd == '' || this.M_AP_DebitNoteChargeToAccountD.accountcd == null ? 'NULL' : this.M_AP_DebitNoteChargeToAccountD.accountcd ,
                Descs: this.M_AP_DebitNoteChargeToAccountD.descs,
                TrxAmt: this.M_AP_DebitNoteChargeToAccountD.trxamt ? this.replaceAllString(this.M_AP_DebitNoteChargeToAccountD.trxamt,',','','number') : 0 ,
                Remarks: this.M_AP_DebitNoteChargeToAccountD.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_AP_DebitNoteChargeToAccountD.lastupdatestamp
            }

            var param2 = {			
                _Method_:'UPDATE2',
                _LineNo_: this.$parent.data.PageOrder ,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                DebitNo: this.DataRowPage1.DebitNo,
                UserEdit: this.getDataUser().UserId                
            }
            
            var param3 = {			
                _Method_:'UPDATE3',
                _LineNo_: this.$parent.data.PageOrder ,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                DebitNo: this.DataRowPage1.DebitNo,
                EntryType: 'D',
                UserEdit: this.getDataUser().UserId                
            }

            
            dataUpdate.push({
                A_Update : param1,
                B_Update : param2,
                C_Update : param3
            })
             var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                Data: dataUpdate
            }
            
            this.postJSONMulti( this.getUrlProsesDataPostMulti(), param )
            .then(response => {
                if (response == null) return

                this.$parent.resultUpdate('Data Has Been Updated Successfully')
                this.refreshListParent(true)
            })
        },
		M_ClearForm(){
            this.M_AP_DebitNoteChargeToAccountD = {
                debitaccountsequenceno: 0,
                accountcd: '',
                descs: '',
                trxamt: '0',
                t0: '',
                t1: '',
                t2: '',
                t3: '',
                t4: '',
                t5: '',
                t6: '',
                t7: '',
                t8: '',
                t9: '',
                t10: '',
                t11: '',
                t12: '',
                t13: '',
                t14: '',
                t15: '',
                t16: '',
                t17: '',
                t18: '',
                t19: '',
                t20: '',
                t21: '',
                t22: '',
                t23: '',
                t24: '',
                t25: '',
                t26: '',
                t27: '',
                t28: '',
                t29: '',
                t30: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                accountdescs: '',
                debitno: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_AP_DebitNoteChargeToAccountD.debitno = data.DebitNo 

            this.$refs.ref_accountcd.focus()

        },
        M_Edit(){
            this.$refs.ref_accountcd.focus()
        },
        M_Delete(dt){           
			var data = this.FormToABSList().getRowSelected()  
            var dataDelete = []
            var dataDelete2 = []
            var dataDelete3 = []
        
            data.forEach((value) => {
                dataDelete2.push({
                    _MethodApi_ : 'DELETE2',
                    _LineNo_ : this.$parent.data.PageOrder,
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    DebitNo: value.DebitNo,
                    UserEdit: this.getDataUser().UserId,
                    _Message_:''
                })

                dataDelete3.push({
                    _MethodApi_ : 'DELETE3',
                    _LineNo_ : this.$parent.data.PageOrder,
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    EntryType: 'D',
                    DebitNo: value.DebitNo,
                    UserEdit: this.getDataUser().UserId,
                    _Message_:''
                })
                
                dataDelete.push({
                    DebitAccountSequenceNo : value.DebitAccountSequenceNo,
                    LastUpdateStamp : value.LastUpdateStamp,
                    _Delete2_ : dataDelete2,
                    _Delete3_ : dataDelete3,
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
                this.refreshListParent(true)
            })
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                debitno: record.DebitNo,
                debitaccountsequenceno: record.DebitAccountSequenceNo
            }

            this.postJSON( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_AP_DebitNoteChargeToAccountD = {
                debitaccountsequenceno: data.debitaccountsequenceno,
                accountcd: data.accountcd,
                descs: data.descs,
                trxamt: this.isCurrency(data.trxamt, this.decimal),
                t0: data.t0,
                t1: data.t1,
                t2: data.t2,
                t3: data.t3,
                t4: data.t4,
                t5: data.t5,
                t6: data.t6,
                t7: data.t7,
                t8: data.t8,
                t9: data.t9,
                t10: data.t10,
                t11: data.t11,
                t12: data.t12,
                t13: data.t13,
                t14: data.t14,
                t15: data.t15,
                t16: data.t16,
                t17: data.t17,
                t18: data.t18,
                t19: data.t19,
                t20: data.t20,
                t21: data.t21,
                t22: data.t22,
                t23: data.t23,
                t24: data.t24,
                t25: data.t25,
                t26: data.t26,
                t27: data.t27,
                t28: data.t28,
                t29: data.t29,
                t30: data.t30,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                accountdescs: data.accountdescs,
                debitno: data.debitno,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
            

                this.M_AP_DebitNoteChargeToAccountD.accountcdLabel = this.M_AP_DebitNoteChargeToAccountD.accountcd != null && this.M_AP_DebitNoteChargeToAccountD.accountcd != '' ? data.accountcd + this.separator + data.accountdescs :'' 


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

