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
      isCheckAsStatus="RoughBookStatus=Y"
      statusFalse="N"
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
                                        <ABSinputTextVuex :prop="PI_trxtype" v-model="M_GL_RoughBook.trxtype"  ref="ref_trxtype"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_debitamountidr" v-model="M_GL_RoughBook.debitamountidr"  ref="ref_debitamountidr" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_referenceno" v-model="M_GL_RoughBook.referenceno"  ref="ref_referenceno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_creditamountidr" v-model="M_GL_RoughBook.creditamountidr"  ref="ref_creditamountidr" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_journaldate" v-model="M_GL_RoughBook.journaldate"  ref="ref_journaldate"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_balanceidr" v-model="M_GL_RoughBook.balanceidr"  ref="ref_balanceidr" />
                                      </b-col>
                                      <!-- <b-col md="4">
                                        <ABSCompute :prop="PI_debitcredit" v-model="M_GL_RoughBook.debitcredit"  ref="ref_debitcredit" />
                                      </b-col> -->
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_currencycd" v-model="M_GL_RoughBook.currencycd"  ref="ref_currencycd"/>
                                      </b-col>
                                      <!-- <b-col md="4">
                                        <ABSCompute :prop="PI_basecurrencycd" v-model="M_GL_RoughBook.basecurrencycd"  ref="ref_basecurrencycd" />
                                      </b-col> -->
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_trxdate" v-model="M_GL_RoughBook.trxdate"  ref="ref_trxdate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnjournaladjustmentChange" :prop="PI_journaladjustment" v-model="M_GL_RoughBook.journaladjustment"  ref="ref_journaladjustment" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_currencyrate" v-model="M_GL_RoughBook.currencyrate"  ref="ref_currencyrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_GL_RoughBook.descs"  ref="ref_descs"/>
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
		FormType: "ListEdit",
		Module:"GL",
            propList: {
                initialWhere: " StatusCd = 'B' AND SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' ",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_GL_RoughBook :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                journalno: 0,
                trxtype: '',
                modulecd: '',
                journaldate: '',
                finperiod: 0,
                finyear: 0,
                trxdate: '',
                descs: '',
                currencycd: '',
                currencyrate: '0',
                referenceno: '',
                cashierno: '',
                roughbookstatus: '',
                batchno: 0,
                ledgerflag: '',
                journalsource: '',
                status: '',
                auditstatus: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                controlsequenceno: 0,
                debtorcd: '',
                creditorcd: '',
                bankcd: '',
                rowid: 0,
                debitamountidr: '',
                creditamountidr: '',
                balanceidr: '',
                basecurrencycd: '',
                journaladjustment: '',
                debitcredit: ''
                    }
            ,
            PI_trxtype: { 
                cValidate :'', 
                cName: 'trxtype', 
                cLabel: 'Transaction Type', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_debitamountidr: { 
                cLabel: 'Debit Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_referenceno: { 
                cValidate :'', 
                cName: 'referenceno', 
                cLabel: 'Reference No', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_creditamountidr: { 
                cLabel: 'Credit Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_journaldate: { 
                cValidate :'', 
                cName: 'journaldate', 
                cLabel: 'Journal Date', 
                cLabelSize: 4, 
                cOrder: 3, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_balanceidr: { 
                cLabel: 'Balance', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_debitcredit: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: false 
            }, 
            PI_currencycd: { 
                cValidate :'', 
                cName: 'currencycd', 
                cLabel: 'Currency', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_basecurrencycd: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: false 
            }, 
            PI_trxdate: { 
                cValidate :'', 
                cName: 'trxdate', 
                cLabel: 'Transaction Date', 
                cLabelSize: 4, 
                cOrder: 6, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_journaladjustment: { 
                cValidate :'', 
                cName: 'journaladjustment', 
                cId: 'rdbjournaladjustment', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: '', 
                cLabel:'Journal Adjustment', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: true, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_currencyrate: { 
                cValidate :'', 
                cName: 'currencyrate', 
                cLabel: 'Rate', 
                cLabelSize: 4, 
                cOrder: 7, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_descs: { 
                cValidate :'', 
                cName: 'descs', 
                cLabel: 'Description', 
                cLabelSize: 4, 
                cOrder: 5, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
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
        OnjournaladjustmentChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{journaladjustment}
            }
        })
        this.$forceUpdate()
        },
	
        setToolbarButton () {
          // this.getToolbar().statusFunction[6].disabled = true
          // this.getToolbar().statusFunction[6].disabled = true
          // this.getToolbar().doEdit(true)
          // this.$store.commit('setListDisable', false)
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
          this.FormToABSList().doGetList('','eb_getList')
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
        M_Post(){
        },
        M_Insert() {
        },
        M_Update() {
            var data = this.$parent.M_GetAllData()
            var dataPost = []
            console.log(data)

            for (let i = 0 ; i < data.length ; i ++) {
                dataPost.push({
                    JournalNo: data[i].JournalNo,
                    Checked: data[i].RoughBookStatus,
                    User: this.getDataUser().UserId
                })

                // if (i == data.length - 1) {
                //     var param = {			
                //         OptionSeq: this.getOptionSeq().OptionSeq,
                //         LineNo: this.$parent.data.PageOrder,
                //         Data: dataPost
                //     }

                //     this.postJSONMulti(this.getUrlUpdateMulti(), param)
                //     .then((response) => {
                //         if(response == null) return
                //         this.$parent.resultUpdate(response.Message)
                //     })
                // }
            }

            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                Data: dataPost
            }

            this.postJSONMulti(this.getUrlUpdateMulti(), param)
            .then((response) => {
                if(response == null) return
                this.alertSuccess("Data Has Been Saved Successfully")
                .then(res => {
                  this.FormToABSList().doGetList('','eb_getList')
                })
            })
        },
		M_ClearForm(){
            this.M_GL_RoughBook = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                journalno: 0,
                trxtype: '',
                modulecd: '',
                journaldate: '',
                finperiod: 0,
                finyear: 0,
                trxdate: '',
                descs: '',
                currencycd: '',
                currencyrate: '0',
                referenceno: '',
                cashierno: '',
                roughbookstatus: '',
                batchno: 0,
                ledgerflag: '',
                journalsource: '',
                status: '',
                auditstatus: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                controlsequenceno: 0,
                debtorcd: '',
                creditorcd: '',
                bankcd: '',
                rowid: 0,
                debitamountidr: '',
                creditamountidr: '',
                balanceidr: '',
                basecurrencycd: '',
                journaladjustment: '',
                debitcredit: ''
                    }
            		
		},
        M_New(){
          this.$refs.ref_trxtype.focus()
        },
        M_Edit(){
          this.$refs.ref_trxtype.focus()
        },
        M_Delete(dt){
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                batchno: record.BatchNo,
                journalno: record.JournalNo,
                referenceno: record.ReferenceNo,
                subportfoliocd: record.SubPortfolioCd
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_GL_RoughBook = {
                subportfoliocd: data.subportfoliocd,
                journalno: data.journalno,
                trxtype: data.trxtype,
                modulecd: data.modulecd,
                journaldate: this.momentDateFormat(data.journaldate, 'YYYY-MM-DD'),
                finperiod: data.finperiod,
                finyear: data.finyear,
                trxdate: this.momentDateFormat(data.trxdate, 'YYYY-MM-DD'),
                descs: data.descs,
                currencycd: data.currencycd,
                currencyrate: this.isCurrency(data.currencyrate, this.decimal),
                referenceno: data.referenceno,
                cashierno: data.cashierno,
                roughbookstatus: data.roughbookstatus,
                batchno: data.batchno,
                ledgerflag: data.ledgerflag,
                journalsource: data.journalsource,
                status: data.status,
                auditstatus: data.auditstatus,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                timeinput: data.timeinput,
                timeedit: data.timeedit,
                lastupdatestamp: record.LastUpdateStamp,
                controlsequenceno: data.controlsequenceno,
                debtorcd: data.debtorcd,
                creditorcd: data.creditorcd,
                bankcd: data.bankcd,
                rowid: data.rowid,
                debitamountidr: this.isCurrency(data.baseamountdebit, this.decimal),
                creditamountidr: this.isCurrency(data.baseamountcredit, this.decimal),
                balanceidr: this.isCurrency(data.basebalance, this.decimal),
                basecurrencycd: data.basecurrencycd,
                journaladjustment: data.auditstatus,
                debitcredit: data.debitcredit
                    }

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }

    },
    beforeCreate: function () {
    },
    created: function() {
        this.$store.commit('setStatus','View')
        this.$store.commit('setFormType','ListEdit')
        this.getToolbar().ProcessPS()
        // this.getToolbar().doEdit(true)
        // this.$store.commit('setListDisable', false)
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

