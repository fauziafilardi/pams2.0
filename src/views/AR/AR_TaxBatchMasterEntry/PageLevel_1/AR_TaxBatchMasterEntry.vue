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
                                        <ABSinputTextVuex @input="OnvatprefixChange" :prop="PI_vatprefix" v-model="M_AR_TaxBatchMasterEntry.vatprefix"  ref="ref_vatprefix"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OnstartingnoChange" :prop="PI_startingno" v-model="M_AR_TaxBatchMasterEntry.startingno"  ref="ref_startingno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_endingno" v-model="M_AR_TaxBatchMasterEntry.endingno"  ref="ref_endingno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OndigitsChange" :prop="PI_digits" v-model="M_AR_TaxBatchMasterEntry.digits"  ref="ref_digits"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateRangeVuex :prop="PI_usagefrom" :valueFrom="M_AR_TaxBatchMasterEntry.usagefrom" :valueTo="M_AR_TaxBatchMasterEntry.usageto" ref="ref_usagefrom" @from="MdtRange_usagefrom" @to="MdtRange_usageto" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_sampleno" v-model="M_AR_TaxBatchMasterEntry.sampleno"  ref="ref_sampleno" />
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
		Module:"AR",
            propList: {
                initialWhere: "Status ='N' AND  ( BaseOnTaxHandling ='P') OR  ( SubPortfolioCd ='" + this.getDataUser().SubPortfolioCd + "' AND BaseOnTaxHandling ='S')",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_AR_TaxBatchMasterEntry :{
                batchno: 0,
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                vatprefix: '',
                startingno: '0',
                digits: '0',
                endingno: '0',
                usagefrom: '',
                usageto: '',
                status: 'N',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                rowid: 0,
                sampleno: ''
                    }
            ,
            PI_vatprefix: { 
                cValidate :'required|max:50', 
                cName: 'vatprefix', 
                cLabel: 'VAT Prefix', 
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
            PI_startingno: { 
                cValidate :'required|max:8', 
                cName: 'startingno', 
                cLabel: 'Starting No', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_endingno: { 
                cValidate :'required|max:20', 
                cName: 'endingno', 
                cLabel: 'Ending No', 
                cLabelSize: 4, 
                cOrder: 3, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_digits: { 
                cValidate :'required|max:60', 
                cName: 'digits', 
                cLabel: 'No Digit', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_usagefrom: { 
                cValidate :'', 
                cName: 'usagefrom', 
                cLabel: 'From Date Usage', 
                cLabelSize: 4, 
                cOrder: 5, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_sampleno: { 
                cLabel: 'Sample No', 
                cLabelSize: 4, 
                cValue: '', 
                cKey: false, 
                cVisible:  true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
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
        OnvatprefixChange (data){
            // console.log(data)
            this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
                this.GetSampleNo(data, this.M_AR_TaxBatchMasterEntry.digits, this.M_AR_TaxBatchMasterEntry.startingno)
            }
        })
        this.$forceUpdate()
        },
        OnstartingnoChange (data){
            // console.log(data)
            this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
                this.GetSampleNo(this.M_AR_TaxBatchMasterEntry.vatprefix, this.M_AR_TaxBatchMasterEntry.digits, data)
            }
        })
        this.$forceUpdate()
        },
        OndigitsChange (data){
            // console.log(data)
            this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
                this.GetSampleNo(this.M_AR_TaxBatchMasterEntry.vatprefix, data, this.M_AR_TaxBatchMasterEntry.startingno)
            }
        })
        this.$forceUpdate()
        },
        repeatStr(str, count) {
	        return new Array(count + 1).join(str);
	    },
        Right(str, n) {
	        if (n <= 0)
	            return "";
	        else if (n > String(str).length)
	            return str;
	        else {
	            var iLen = String(str).length;
	            return String(str).substring(iLen, iLen - n);
	        }
        },
        GetSampleNo (data,data1,data2) {
            if(data == ''){
                return
            }
            var Nol = "0"
            var Digits=parseInt(data1);
            console.log(Digits)
            var Code = this.Right( (this.repeatStr(Nol, Digits) + parseInt(data2)), Digits);

            this.M_AR_TaxBatchMasterEntry.sampleno = data + Code
        },
		setToolbarButton () {
           this.getToolbar().statusFunction[2].disabled = true
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
                // dt = dt + value.RowId + ','
                dataPost.push({
                    _Message_ : "Batch No = "+value.BatchNo,
                    SubPortfolioCd : this.getDataUser().SubPortfolioCd,
                    BatchNo: value.BatchNo,
                    UserEdit:this.getDataUser().UserId,
                    Source: value.Source
                })
            })

            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                Data:dataPost
            }

            this.postJSONMulti( this.getUrlPostMulti(), param )
            .then(response => {
                if (response == null) return

                this.$parent.resultPost()
            })
        },
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                VATPrefix: this.M_AR_TaxBatchMasterEntry.vatprefix,
                StartingNo: this.M_AR_TaxBatchMasterEntry.startingno,
                Digits: this.M_AR_TaxBatchMasterEntry.digits,
                EndingNo: this.M_AR_TaxBatchMasterEntry.endingno,
                UsageFrom: this.M_AR_TaxBatchMasterEntry.usagefrom == '' || this.M_AR_TaxBatchMasterEntry.usagefrom == null ? 'NULL' : this.M_AR_TaxBatchMasterEntry.usagefrom ,
                UsageTo: this.M_AR_TaxBatchMasterEntry.usageto,
                Status: this.M_AR_TaxBatchMasterEntry.status,
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
                BatchNo: this.M_AR_TaxBatchMasterEntry.batchno,
                VATPrefix: this.M_AR_TaxBatchMasterEntry.vatprefix,
                StartingNo: this.M_AR_TaxBatchMasterEntry.startingno,
                Digits: this.M_AR_TaxBatchMasterEntry.digits,
                EndingNo: this.M_AR_TaxBatchMasterEntry.endingno,
                UsageFrom: this.M_AR_TaxBatchMasterEntry.usagefrom == '' || this.M_AR_TaxBatchMasterEntry.usagefrom == null ? 'NULL' : this.M_AR_TaxBatchMasterEntry.usagefrom ,
                UsageTo: this.M_AR_TaxBatchMasterEntry.usageto,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_AR_TaxBatchMasterEntry.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })

        },
		M_ClearForm(){
            this.M_AR_TaxBatchMasterEntry = {
                batchno: 0,
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                vatprefix: '',
                startingno: '0',
                digits: '0',
                endingno: '0',
                usagefrom: '',
                usageto: '',
                status: 'N',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                rowid: 0,
                sampleno: ''
                    }
            		
		},
        M_New(){
			
        },
        M_Edit(){
        },
        M_Delete(dt){
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                subportfoliocd: record.SubportfolioCd,
                batchno: record.BatchNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_AR_TaxBatchMasterEntry = {
                batchno: data.batchno,
                subportfoliocd: data.subportfoliocd,
                vatprefix: data.vatprefix,
                startingno: data.startingno,
                digits: data.digits,
                endingno: data.endingno,
                usagefrom: data.usagefrom,
                usageto: data.usageto,
                status: data.status,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                timeinput: data.timeinput,
                timeedit: data.timeedit,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid,
                sampleno: data.sampleno
                    }
                 

         

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }
        ,MdtRange_usagefrom (data) {
            this.M_AR_TaxBatchMasterEntry.usagefrom = data
        }
        ,MdtRange_usageto (data) {
            this.M_AR_TaxBatchMasterEntry.usageto = data
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

