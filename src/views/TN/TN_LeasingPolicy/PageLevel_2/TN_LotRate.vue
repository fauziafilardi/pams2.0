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
                                        <ABSinputRadioButtonVuex @input="OnchargetypeChange" :prop="PI_chargetype" v-model="M_TN_LotRate.chargetype"  ref="ref_chargetype" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntrxtypeChange" :prop="PI_trxtype" :value="M_TN_LotRate.trxtype" :label="M_TN_LotRate.trxtypeLabel" ref="ref_trxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnfromdateChange" :prop="PI_fromdate" v-model="M_TN_LotRate.fromdate"  ref="ref_fromdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_chargerate" v-model="M_TN_LotRate.chargerate"  ref="ref_chargerate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_chargeamt" v-model="M_TN_LotRate.chargeamt"  ref="ref_chargeamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_LotRate.remarks"  ref="ref_remarks" />
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
			Module:"TN",
            propList: {
                initialWhere:"LotNo = '" + this.ValKey + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_TN_LotRate :{
                sequenceno: 0,
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                lotno: '',
                chargetype: '',
                trxtype: '',
                fromdate: '',
                todate: '',
                chargerate: '0',
                chargeamt: '0',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                trxtypedescs: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_chargetype: { 
                cValidate :'', 
                cName: 'chargetype', 
                cId: 'rdbchargetype', 
                cRadioOptions: [{ text: 'Rental', value: 'R' },{ text: 'SC', value: 'C' },{ text: 'SF', value: 'F' },{ text: 'Other', value: 'O' },], 
                cRadioDefaultOption: '', 
                cLabel:'Charge Type', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_trxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeBySubPortfolio'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"' AND MODULECD = @MODULECD"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'trxtype', 
                cLabel: 'Transaction Type', 
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
                cMasterUrl: 'AR/AR_TransactionTypeMaster' ,
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_fromdate: { 
                cValidate :'', 
                cName: 'fromdate', 
                cLabel: ' From Date', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_chargerate: { 
                cValidate :'required|max:13', 
                cName: 'chargerate', 
                cLabel: 'Charge Rate', 
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
            PI_chargeamt: { 
                cValidate :'required|max:13', 
                cName: 'chargeamt', 
                cLabel: 'Charge Amount', 
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
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks', 
                cLabelSize: 4, 
                cOrder:7, 
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
        OnchargetypeChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{chargetype}
            }
        })
        this.$forceUpdate()
        },
        OntrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_TN_LotRate.trxtype = data.id
            this.M_TN_LotRate.trxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{trxtype}
            }
        })
        this.$forceUpdate()
        },
        OnfromdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{fromdate}
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
            this.M_TN_LotRate.lotno = data.LotNo 
            this.propList.initialWhere =" LotNo = '" + data.LotNo + "' "
        

            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                ChargeType: this.M_TN_LotRate.chargetype,
                LotNo: this.M_TN_LotRate.lotno,
                TrxType: this.M_TN_LotRate.trxtype == '' || this.M_TN_LotRate.trxtype == null ? 'NULL' : this.M_TN_LotRate.trxtype ,
                FromDate: this.M_TN_LotRate.fromdate == '' || this.M_TN_LotRate.fromdate == null ? 'NULL' : this.M_TN_LotRate.fromdate ,
                ToDate: this.M_TN_LotRate.todate,
                ChargeRate: this.M_TN_LotRate.chargerate ? this.replaceAllString(this.M_TN_LotRate.chargerate,',','','number') : 0 ,
                ChargeAmt: this.M_TN_LotRate.chargeamt ? this.replaceAllString(this.M_TN_LotRate.chargeamt,',','','number') : 0 ,
                Remarks: this.M_TN_LotRate.remarks,
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
                SequenceNo: this.M_TN_LotRate.sequenceno,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                LotNo: this.M_TN_LotRate.lotno,
                ChargeType: this.M_TN_LotRate.chargetype,
                TrxType: this.M_TN_LotRate.trxtype == '' || this.M_TN_LotRate.trxtype == null ? 'NULL' : this.M_TN_LotRate.trxtype ,
                FromDate: this.M_TN_LotRate.fromdate == '' || this.M_TN_LotRate.fromdate == null ? 'NULL' : this.M_TN_LotRate.fromdate ,
                ToDate: this.M_TN_LotRate.todate,
                ChargeRate: this.M_TN_LotRate.chargerate ? this.replaceAllString(this.M_TN_LotRate.chargerate,',','','number') : 0 ,
                ChargeAmt: this.M_TN_LotRate.chargeamt ? this.replaceAllString(this.M_TN_LotRate.chargeamt,',','','number') : 0 ,
                Remarks: this.M_TN_LotRate.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_LotRate.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_TN_LotRate = {
                sequenceno: 0,
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                lotno: '',
                chargetype: '',
                trxtype: '',
                fromdate: '',
                todate: '',
                chargerate: '0',
                chargeamt: '0',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                trxtypedescs: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_TN_LotRate.lotno = data.LotNo 



        },
        M_Edit(){
        },
        M_Delete(dt){           

            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                SubPortfolioCd:this.getDataUser().SubPortfolioCd,
                PortfolioCd:this.getDataUser().PortfolioCd,
                LineNo: this.$parent.data.PageOrder,
                Data: dt
				//,SourceValue:''
            }
            
            this.postJSONMulti( this.getUrlDeleteMulti(), param )
            .then(response => {
                if (response == null) return
				
				var message = "Deleting Data Successfully"   				
				//kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
				this.$parent.resultDelete(message)
                    
					
            })
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                sequenceno: record.SequenceNo,
                lotno: record.LotNo				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_TN_LotRate = {
                sequenceno: this.isCurrency(data.sequenceno, this.decimal),
                subportfoliocd: data.subportfoliocd,
                lotno: data.lotno,
                chargetype: data.chargetype,
                trxtype: data.trxtype,
                fromdate: data.fromdate,
                todate: data.todate,
                chargerate: this.isCurrency(data.chargerate, this.decimal),
                chargeamt: this.isCurrency(data.chargeamt, this.decimal),
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                trxtypedescs: data.trxtypedescs,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: this.isCurrency(data.rowid, this.decimal)
                    }
                 

                this.M_TN_LotRate.trxtypeLabel = this.M_TN_LotRate.trxtype != null && this.M_TN_LotRate.trxtype != '' ? data.trxtype + this.separator  :'' 
  

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

