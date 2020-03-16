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
                                        <ABSInputSelectList @change="OnaccountcdChange" :prop="PI_accountcd" :value="M_AR_CNChargeToAccountD.accountcd" :label="M_AR_CNChargeToAccountD.accountcdLabel" ref="ref_accountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex :prop="PI_descs" v-model="M_AR_CNChargeToAccountD.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_trxamt" v-model="M_AR_CNChargeToAccountD.trxamt"  ref="ref_trxamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_AR_CNChargeToAccountD.remarks"  ref="ref_remarks" />
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
			Module:"AR",
            propList: {
                initialWhere:"CreditNo = '" + this.ValKey + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_AR_CNChargeToAccountD :{
                creditsequenceno: 0,
                accountcd: '',
                descs: '',
                trxamt: '0',
                t0: '',
                t1: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                accountdescs: '',
                creditno: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_accountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCodeBySubportfolio'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "STATUS = 'A' AND SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'accountcd', 
                cLabel: 'Account Code', 
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
                cMasterUrl: 'GL/GL_ChartOfAccount' ,
                cDisplayColumn: 'AccountCd,Descs1' ,
            }, 
            PI_descs: { 
                cValidate :'', 
                cName:'descs', 
                cLabel:'Description', 
                cLabelSize: 4, 
                cOrder:2, 
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
            PI_trxamt: { 
                cValidate :'required', 
                cName: 'trxamt', 
                cLabel: 'Trans .Amount', 
                cLabelSize: 4, 
                cOrder: 3, 
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
                cOrder:4, 
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
        OnaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_CNChargeToAccountD.accountcd = data.id
            this.M_AR_CNChargeToAccountD.accountcdLabel = data.label
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
            this.M_AR_CNChargeToAccountD.creditno = data.CreditNo 
            this.propList.initialWhere =" CreditNo = '" + data.CreditNo + "' "
        

            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                CreditNo: this.DataRowPage1.CreditNo,
                AccountCd: this.M_AR_CNChargeToAccountD.accountcd == '' || this.M_AR_CNChargeToAccountD.accountcd == null ? 'NULL' : this.M_AR_CNChargeToAccountD.accountcd ,                
                Descs: this.M_AR_CNChargeToAccountD.descs,
                TrxAmt: this.M_AR_CNChargeToAccountD.trxamt ? this.replaceAllString(this.M_AR_CNChargeToAccountD.trxamt,',','','number') : 0 ,
                T0: this.getDataUser().PortfolioCd,
                T1: this.getDataUser().SubPortfolioCd,
                Remarks: this.M_AR_CNChargeToAccountD.remarks,
                UserInput: this.getDataUser().UserId                 
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return
                this.saveData2()
                this.saveData3()
				//kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultInsert(response.Message)
					
				
            })
        },
        saveData2(){
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                CreditNo: this.DataRowPage1.CreditNo,
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                UserEdit: this.getDataUser().UserId ,
                EntryType: this.ARFieldHelper.BATCH_MASTER_ENTRY_TYPE_CREDIT_NOTE_TO_ACCOUNT     
            }

            this.postEncode(this.getUrlInsert2(), param)
            .then((response) => {
                if(response == null) return
				
            })

        },
        saveData3(){
             var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                CreditNo: this.DataRowPage1.CreditNo,
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                UserEdit: this.getDataUser().UserId              
            }

            this.postEncode(this.getUrlInsert3(), param)
            .then((response) => {
                if(response == null) return
				
            })
        },
        M_Update() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                CreditSequenceNo: this.M_AR_CNChargeToAccountD.creditsequenceno,
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                AccountCd: this.M_AR_CNChargeToAccountD.accountcd == '' || this.M_AR_CNChargeToAccountD.accountcd == null ? 'NULL' : this.M_AR_CNChargeToAccountD.accountcd ,
                Descs: this.M_AR_CNChargeToAccountD.descs,
                TrxAmt: this.M_AR_CNChargeToAccountD.trxamt ? this.replaceAllString(this.M_AR_CNChargeToAccountD.trxamt,',','','number') : 0 ,
                T0: this.getDataUser().PortfolioCd,
                T1: this.getDataUser().SubPortfolioCd,
                Remarks: this.M_AR_CNChargeToAccountD.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_AR_CNChargeToAccountD.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return
                    this.updateData3()
                    this.updateData2()
                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
        updateData3(){
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                CreditNo: this.DataRowPage1.CreditNo,
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                UserEdit: this.getDataUser().UserId              
            }

            this.postEncode(this.getUrlUpdate3(), param)
            .then((response) => {
                if(response == null) return
				
            })
        },
        updateData2(){
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                CreditNo: this.DataRowPage1.CreditNo,
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                UserEdit: this.getDataUser().UserId ,
                EntryType: this.ARFieldHelper.BATCH_MASTER_ENTRY_TYPE_CREDIT_NOTE_TO_ACCOUNT     
            }

            this.postEncode(this.getUrlUpdate2(), param)
            .then((response) => {
                if(response == null) return
				
            })
        },
		M_ClearForm(){
            this.M_AR_CNChargeToAccountD = {
                creditsequenceno: 0,
                accountcd: '',
                descs: '',
                trxamt: '0',
                t0: '',
                t1: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                accountdescs: '',
                creditno: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_AR_CNChargeToAccountD.creditno = data.CreditNo 



        },
        M_Edit(){
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
                    CreditNo: this.DataRowPage1.CreditNo,
                    UserEdit: this.getDataUser().UserId,
                    _Message_:''
                })

                dataDelete3.push({
                    _MethodApi_ : 'DELETE3',
                    _LineNo_ : this.$parent.data.PageOrder,
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    EntryType: 'C',
                    CreditNo: this.DataRowPage1.CreditNo,
                    UserEdit: this.getDataUser().UserId,
                    _Message_:''
                })
                
                dataDelete.push({
                    CreditSequenceNo : value.CreditSequenceNo,
                    LastUpdateStamp : value.LastUpdateStamp,
                    RowId : value.RowId,
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
            })
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                creditno: record.CreditNo,
                creditsequenceno: record.CreditSequenceNo				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_AR_CNChargeToAccountD = {
                creditsequenceno: data.creditsequenceno,
                accountcd: data.accountcd,
                descs: data.descs,
                trxamt: this.isCurrency(data.trxamt, this.decimal),
                t0: data.t0,
                t1: data.t1,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                accountdescs: data.accountdescs,
                creditno: data.creditno,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
                 

                this.M_AR_CNChargeToAccountD.accountcdLabel = this.M_AR_CNChargeToAccountD.accountcd != null && this.M_AR_CNChargeToAccountD.accountcd != '' ? data.accountcd + this.separator + data.accountdescs :'' 
  

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

