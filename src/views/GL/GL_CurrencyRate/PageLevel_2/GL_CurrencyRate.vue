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
                                        <ABSInputSelectList @change="OnfromaccountcdChange" :prop="PI_fromaccountcd" :value="M_GL_CurrencyRate.fromaccountcd" :label="M_GL_CurrencyRate.fromaccountcdLabel" ref="ref_fromaccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntoaccountcdChange" :prop="PI_toaccountcd" :value="M_GL_CurrencyRate.toaccountcd" :label="M_GL_CurrencyRate.toaccountcdLabel" ref="ref_toaccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnstartdateChange" :prop="PI_startdate" v-model="M_GL_CurrencyRate.startdate"  ref="ref_startdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnenddateChange" :prop="PI_enddate" v-model="M_GL_CurrencyRate.enddate"  ref="ref_enddate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_rate" v-model="M_GL_CurrencyRate.rate"  ref="ref_rate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_GL_CurrencyRate.remarks"  ref="ref_remarks" />
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
			Module:"GL",
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

            M_GL_CurrencyRate :{
                currencycd: '',
                sequenceno: 0,
                fromaccountcd: '',
                toaccountcd: '',
                startdate: '',
                enddate: '',
                rate: '0',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                startaccountdescs: '',
                endaccountdescs: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_fromaccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCode'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "Status = 'A'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'fromaccountcd', 
                cLabel: 'Start Account', 
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
                cDisplayColumn: 'AccountCd,Description_1' ,
            }, 
            PI_toaccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCode'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "Status = 'A'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'toaccountcd', 
                cLabel: 'End Account', 
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
                cMasterUrl: 'GL/GL_ChartOfAccount' ,
                cDisplayColumn: 'AccountCd,Description_1' ,
            }, 
            PI_startdate: { 
                cValidate :'', 
                cName: 'startdate', 
                cLabel: 'Start Date', 
                cLabelSize: 4, 
                cOrder: 3, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_enddate: { 
                cValidate :'', 
                cName: 'enddate', 
                cLabel: 'End Date', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_rate: { 
                cValidate :'required', 
                cName: 'rate', 
                cLabel: 'Rate ', 
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
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks', 
                cLabelSize: 4, 
                cOrder:6, 
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
        OnfromaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_GL_CurrencyRate.fromaccountcd = data.id
            this.M_GL_CurrencyRate.fromaccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{fromaccountcd}
            }
        })
        this.$forceUpdate()
        },
        OntoaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_GL_CurrencyRate.toaccountcd = data.id
            this.M_GL_CurrencyRate.toaccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{toaccountcd}
            }
        })
        this.$forceUpdate()
        },
        OnstartdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{startdate}
            }
        })
        this.$forceUpdate()
        },
        OnenddateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{enddate}
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
            this.M_GL_CurrencyRate.currencycd = data.CurrencyCd 
            this.propList.initialWhere =" CurrencyCd = '" + data.CurrencyCd + "' "
        

            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                CurrencyCd: this.M_GL_CurrencyRate.currencycd,
                FromAccountCd: this.M_GL_CurrencyRate.fromaccountcd == '' || this.M_GL_CurrencyRate.fromaccountcd == null ? 'NULL' : this.M_GL_CurrencyRate.fromaccountcd ,
                ToAccountCd: this.M_GL_CurrencyRate.toaccountcd == '' || this.M_GL_CurrencyRate.toaccountcd == null ? 'NULL' : this.M_GL_CurrencyRate.toaccountcd ,
                StartDate: this.M_GL_CurrencyRate.startdate == '' || this.M_GL_CurrencyRate.startdate == null ? 'NULL' : this.M_GL_CurrencyRate.startdate ,
                EndDate: this.M_GL_CurrencyRate.enddate == '' || this.M_GL_CurrencyRate.enddate == null ? 'NULL' : this.M_GL_CurrencyRate.enddate ,
                Rate: this.M_GL_CurrencyRate.rate ? this.replaceAllString(this.M_GL_CurrencyRate.rate,',','','number') : 0 ,
                Remarks: this.M_GL_CurrencyRate.remarks,
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
                CurrencyCd: this.M_GL_CurrencyRate.currencycd,
                SequenceNo: this.M_GL_CurrencyRate.sequenceno,
                FromAccountCd: this.M_GL_CurrencyRate.fromaccountcd == '' || this.M_GL_CurrencyRate.fromaccountcd == null ? 'NULL' : this.M_GL_CurrencyRate.fromaccountcd ,
                ToAccountCd: this.M_GL_CurrencyRate.toaccountcd == '' || this.M_GL_CurrencyRate.toaccountcd == null ? 'NULL' : this.M_GL_CurrencyRate.toaccountcd ,
                StartDate: this.M_GL_CurrencyRate.startdate == '' || this.M_GL_CurrencyRate.startdate == null ? 'NULL' : this.M_GL_CurrencyRate.startdate ,
                EndDate: this.M_GL_CurrencyRate.enddate == '' || this.M_GL_CurrencyRate.enddate == null ? 'NULL' : this.M_GL_CurrencyRate.enddate ,
                Rate: this.M_GL_CurrencyRate.rate ? this.replaceAllString(this.M_GL_CurrencyRate.rate,',','','number') : 0 ,
                Remarks: this.M_GL_CurrencyRate.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_GL_CurrencyRate.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_GL_CurrencyRate = {
                currencycd: '',
                sequenceno: 0,
                fromaccountcd: '',
                toaccountcd: '',
                startdate: '',
                enddate: '',
                rate: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                startaccountdescs: '',
                endaccountdescs: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_GL_CurrencyRate.currencycd = data.CurrencyCd 

            this.$refs.ref_fromaccountcd.focus()

        },
        M_Edit(){
            this.$refs.ref_fromaccountcd.focus()
        },
        M_Delete(dt){           

            var data = this.FormToABSList().getRowSelected()  
          var dataDelete = []
          
          data.forEach((value) => {
            
            dataDelete.push({
                CurrencyCd: value.CurrencyCd,
                SequenceNo: value.SequenceNo,
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
,                currencycd: record.CurrencyCd,
                sequenceno: record.SequenceNo				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_GL_CurrencyRate = {
                currencycd: data.currencycd,
                sequenceno: data.sequenceno,
                fromaccountcd: data.fromaccountcd,
                toaccountcd: data.toaccountcd,
                startdate: data.startdate,
                enddate: data.enddate,
                rate: this.isCurrency(data.rate, this.decimal),
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                startaccountdescs: data.startaccountdescs,
                endaccountdescs: data.endaccountdescs,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
                 

                this.M_GL_CurrencyRate.fromaccountcdLabel = this.M_GL_CurrencyRate.fromaccountcd != null ? data.fromaccountcd + this.separator + data.startaccountdescs :'' 
                this.M_GL_CurrencyRate.toaccountcdLabel = this.M_GL_CurrencyRate.toaccountcd != null ? data.toaccountcd + this.separator + data.endaccountdescs :'' 
  

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

