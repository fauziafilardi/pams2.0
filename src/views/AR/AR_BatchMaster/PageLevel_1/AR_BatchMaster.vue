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
                                        <ABSCompute :prop="PI_batchno" v-model="M_AR_BatchMaster.batchno"  ref="ref_batchno" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_documentcount" v-model="M_AR_BatchMaster.documentcount"  ref="ref_documentcount"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_batchtotal" v-model="M_AR_BatchMaster.batchtotal"  ref="ref_batchtotal"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_entrytype" v-model="M_AR_BatchMaster.entrytype"  ref="ref_entrytype" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_status" v-model="M_AR_BatchMaster.status"  ref="ref_status" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_source" v-model="M_AR_BatchMaster.source"  ref="ref_source" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_AR_BatchMaster.remarks"  ref="ref_remarks" />
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
                initialWhere: "SubportfolioCd='"+this.getDataUser().SubPortfolioCd+"'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_AR_BatchMaster :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                batchno: '(Auto Number)',
                documentcount: '0',
                batchtotal: '0',
                entrytype: '',
                source: '',
                status: 'New',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                batchcontrol: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_batchno: { 
                cLabel: 'Batch No', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_documentcount: { 
                cValidate :'required|max:12|min_value:0|max:12', 
                cName: 'documentcount', 
                cLabel: 'Document Count', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: true, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_batchtotal: { 
                cValidate :'required|max:21|greater:0.00|max:12', 
                cName: 'batchtotal', 
                cLabel: 'Batch Total', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: true, 
                cType: 'decimal',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_entrytype: { 
                cLabel: 'Entry Type', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_status: { 
                cLabel: 'Status', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_source: { 
                cLabel: 'Source', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks', 
                cLabelSize: 4, 
                cOrder:3, 
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
        },		
        M_Post(dt){
        },
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                DocumentCount: this.M_AR_BatchMaster.documentcount,
                BatchTotal: this.M_AR_BatchMaster.batchtotal,
                Remarks: this.M_AR_BatchMaster.remarks,
                UserInput: this.getDataUser().UserId ,
                UserEdit: this.getDataUser().UserId                 
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
                BatchNo: this.M_AR_BatchMaster.batchno,
                DocumentCount: this.M_AR_BatchMaster.documentcount,
                BatchTotal: this.M_AR_BatchMaster.batchtotal,
                Remarks: this.M_AR_BatchMaster.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_AR_BatchMaster.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })

        },
		M_ClearForm(){
            this.M_AR_BatchMaster = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                batchno: '(Auto Number)',
                documentcount: '',
                batchtotal: '',
                entrytype: '',
                source: '',
                status: 'New',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                batchcontrol: '',
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
            console.log(value)
            dataDelete.push({
              SubPortfolioCd: value.SubportfolioCd,
              BatchNo: value.BatchNo,
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

            this.$parent.resultDelete("Deleting Data Successfully")
          })  
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                batchno: record.BatchNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
                var entrytype = ""
                if(data.entrytype) {
                  if(data.entrytype == 'A') {
                    entrytype = "Advance"
                  }
                  else if(data.entrytype == 'L'){
                    entrytype = "Allocation"
                  }
                  else if(data.entrytype == 'C'){
                    entrytype = "Credit Note To Account"
                  }
                  else if(data.entrytype == 'E'){
                    entrytype = "Credit Note To Invoice"
                  }
                  else if(data.entrytype == 'D'){
                    entrytype = "Debit Note"
                  }
                  else if(data.entrytype == 'T'){
                    entrytype = "Deposit Receipt"
                  }
                  else if(data.entrytype == 'I'){
                    entrytype = "Invoice"
                  }
                  else if(data.entrytype == 'G'){
                    entrytype = "Invoice Generated"
                  }
                  else if(data.entrytype == 'R'){
                    entrytype = "Official Receipt"
                  }
                  else if(data.entrytype == 'F'){
                    entrytype = "Refund"
                  }
                  else if(data.entrytype == 'V'){
                    entrytype = "Revaluation"
                  }
                  else if(data.entrytype == 'Z'){
                    entrytype = "CN Allocation"
                  }
                  else if(data.entrytype == 'S'){
                    entrytype = "Invoice Deposit"
                  }
                  else{
                    entrytype = ""
                  }
                }

                var status = ""
                if(data.status) {
                  if(data.status == 'N') {
                    status = "New"
                  }
                  else if(data.status == 'B'){
                    status = "Balance"
                  }
                  else if(data.status == 'P'){
                    status = "Posted"
                  }
                  else if(data.status == 'E'){
                    status = "Error"
                  }
                  else{
                    status = ""
                  }
                }
this.M_AR_BatchMaster = {
                subportfoliocd: data.subportfoliocd,
                batchno: data.batchno,
                documentcount: data.documentcount,
                batchtotal: this.isCurrency(data.batchtotal, data.decimal),
                entrytype: entrytype,
                source: data.source,
                status: status,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                timeinput: data.timeinput,
                timeedit: data.timeedit,
                batchcontrol: data.batchcontrol,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
                 

                if (data.status == 'N'){
                    this.PI_documentcount.cKey = false
                    this.PI_batchtotal.cKey = false
                }
                else{
                    this.PI_documentcount.cKey = true
                    this.PI_batchtotal.cKey = true
                }

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

