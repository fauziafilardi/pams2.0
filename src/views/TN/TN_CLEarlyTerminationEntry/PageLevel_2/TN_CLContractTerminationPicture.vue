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
                                        <ABSTextAreaVuex :prop="PI_descs" v-model="M_TN_CLContractTerminationPicture.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_CLContractTerminationPicture.remarks"  ref="ref_remarks" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSFileUpload :prop="PI_referencefilename" @fileName="getFileName" 
                                                                        v-model="M_TN_CLContractTerminationPicture.referencefilename" 
                                                                        :file="M_TN_CLContractTerminationPicture.picturefilename" 
                                                                        :image="M_TN_CLContractTerminationPicture.referencefilename"
                                                                         ref="ref_referencefilename" />
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
                initialWhere:"ApplicationNo = '" + this.ValKey + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_TN_CLContractTerminationPicture :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                terminationno: '',
                picturesequenceno: 0,
                descs: '',
                picturefilename: '',
                referencefilename: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                applicationno: 0,
                rowid: 0
                    }
            ,
            PI_descs: { 
                cValidate :'required|max:150', 
                cName:'descs', 
                cLabel:'Description', 
                cLabelSize: 4, 
                cOrder:1, 
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
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks', 
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
            PI_referencefilename: { 
                cValidate :'required', 
                cName:'referencefilename', 
                cLabel: 'Picture', 
                cLabelSize: 4, 
                cOrder:3, 
                cPath:"SaveLocation/SubPortfolio/"+this.getDataUser().SubPortfolioCd+"/ContractTermination",
                cVisible: true, 
                cModule: 'TN', 
                cPlaceholder: 'Choose a file...', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
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
		return this.$store.getters.GetPage2Data
	},
    DataRowPage1(){
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
            this.$parent.showForm = false
			
            let data = this.$store.getters.GetPage1Data
            if(data.StatusCode=='N'){
              this.$store.commit('setEditStatus', true)
            }else{
              this.$store.commit('setEditStatus', false)
            }
            this.M_TN_CLContractTerminationPicture.applicationno = data.ApplicationNo
            this.M_TN_CLContractTerminationPicture.terminationno = data.TerminationNo
            this.propList.initialWhere = " SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' and TerminationNo = '" + data.TerminationNo + "' "

            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                TerminationNo: this.M_TN_CLContractTerminationPicture.terminationno,
                ApplicationNo: this.M_TN_CLContractTerminationPicture.applicationno,
                Descs: this.M_TN_CLContractTerminationPicture.descs,
                PictureFileName: this.M_TN_CLContractTerminationPicture.picturefilename,
                ReferenceFileName: this.M_TN_CLContractTerminationPicture.referencefilename,
                Remarks: this.M_TN_CLContractTerminationPicture.remarks,
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
                SubPortfolioCD: this.getDataUser().SubPortfolioCd,
                ApplicationNo: this.M_TN_CLContractTerminationPicture.applicationno,
                TerminationNo: this.M_TN_CLContractTerminationPicture.terminationno,
                PictureSequenceNo: this.M_TN_CLContractTerminationPicture.picturesequenceno,
                Descs: this.M_TN_CLContractTerminationPicture.descs,
                PictureFileName: this.M_TN_CLContractTerminationPicture.picturefilename,
                ReferenceFileName: this.M_TN_CLContractTerminationPicture.referencefilename,
                Remarks: this.M_TN_CLContractTerminationPicture.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_CLContractTerminationPicture.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_TN_CLContractTerminationPicture = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                terminationno: '',
                picturesequenceno: 0,
                descs: '',
                picturefilename: '',
                referencefilename: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                applicationno: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_TN_CLContractTerminationPicture.applicationno = data.ApplicationNo
            this.M_TN_CLContractTerminationPicture.terminationno = data.TerminationNo
        },
        M_Edit(){
        },
        M_Delete(dt){           
			var data = this.FormToABSList().getRowSelected()  
            var dataDelete = []
            
			data.forEach((value) => {	
				dataDelete.push({
                    SubPortfolioCD: this.getDataUser().SubPortfolioCd,
                    TerminationNo: this.DataRowPage1.TerminationNo,
                    ApplicationNo: this.DataRowPage1.ApplicationNo,
                    PictureSequenceNo: value.PictureSequenceNo,
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
                this.$parent.resultDelete()
            })
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                terminationno: record.TerminationNo,
                applicationno: record.ApplicationNo,
                picturesequenceno: record.PictureSequenceNo				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_TN_CLContractTerminationPicture = {
                subportfoliocd: data.subportfoliocd,
                terminationno: data.terminationno,
                picturesequenceno: data.picturesequenceno,
                descs: data.descs,
                picturefilename: data.picturefilename,
                referencefilename: data.referencefilename,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                timeinput: data.timeinput,
                timeedit: data.timeedit,
                lastupdatestamp: record.LastUpdateStamp,
                applicationno: this.isCurrency(data.applicationno, this.decimal),
                rowid: data.rowid
                    }
                 

  

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }
        ,getFileName(fileName) {
         this.M_TN_CLContractTerminationPicture.picturefilename = fileName 
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

