<template>    
    <div class="height--full">
        <HeaderFormListVuex2 :isProcess = "true" />
        <div class="content-app-form__body" style="background-color: white;padding-top: 1px !important;margin-left: 15px;margin-right: 15px;height: 95%;overflow-y: auto;overflow-x: hidden;padding-bottom: 80px;"> 
            <div :style="'margin-top:10px;'" class="el" mousetip mousetip-msg="I'm a tooltip">            
                <b-collapse id="collapse1" :visible="true">
                    <b-row  style="padding-left: 10px; padding-bottom: 10px; !important;">     
                        <b-col md="12" id="col-left" class="bColMasterForm">	
                            <b-form :data-vv-scope="'FormScope_' + PageLevel + '_' + TabIndex" :data-vv-value-path="'FormScope_' + PageLevel + '_' + TabIndex">
                                <b-row style="padding-left:10px;">					
                                    <b-col md="12" id="col-left"> <!-- table open -->
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_subportfoliocd" v-model="M_GL_JournalInquiryDetail.subportfoliocd"  ref="ref_subportfoliocd" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_batchno" v-model="M_GL_JournalInquiryDetail.batchno"  ref="ref_batchno" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_journalno" v-model="M_GL_JournalInquiryDetail.journalno"  ref="ref_journalno" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_ledgersource" v-model="M_GL_JournalInquiryDetail.ledgersource"  ref="ref_ledgersource" />
                                        </b-col>
                                    </b-row>                                    
                                    <b-row>
                                        <b-col offset="5">
                                            <b-button style="font-size: 10px;padding-top: 3px;padding-bottom: 3px;" @click="doGenerate"><font-awesome-icon icon="list" class="icon-style-1"/> Generate Inquiry</b-button>
                                        </b-col>
                                    </b-row>                                    
                                </b-col> <!-- table close -->                    
                                </b-row>
                                <!-- <ABSTAnalysis :prop="PTAnalysis" /> -->
                            </b-form>
                        </b-col>
                    </b-row>
                </b-collapse>
            </div>
            <ABSListVuex
                :prop = "propList"
                :title = "'JournalInquiryDetail'"
                :isProcess = "false"
                @rowClicked = "rowClicked"
                @rowDblClicked = "doDoubleClick"
                @rowLinkClick = "rowLink"
                @pageSize = "M_PageSize"
                @pagination = "M_Pagination"
                @filter = "M_Advance_Filter"
            />            
        </div>
    </div>
</template>

<script>

export default {
    props: {PageLevel: '', TabIndex: '', data: ''},
    data() {
        return {
		cInsertKey:'',
		FormType: "Process",
		Module:"GL",
            propList: {
                initialWhere: " SubPortfolioCd ='" + this.$route.query.SubPortfolioCd + "' AND BatchNo='" + this.$route.query.BatchNo + "' AND JournalNo='"+ this.$route.query.JournalNo +"'",
                LineNo: 2,
                PageLevel: 1,
                TabIndex: 1,
                OrderBy: '', 
                SourceField: '', 
                ParamView: "'"+ this.$route.query.LedgerFlag +"'"
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_GL_JournalInquiryDetail :{
                subportfoliocd: '',
                batchno:'',
                journalno:'',
                ledgersource:''
            },
            PI_subportfoliocd: { 
                cLabel: 'Subportfolio', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cVisible: true 
            },
            PI_batchno: { 
                cLabel: 'Batch No', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cVisible: true 
            },
            PI_journalno: { 
                cLabel: 'Journal No', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cVisible: true 
            },
            PI_ledgersource: { 
                cLabel: 'Ledger Source', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cVisible: true 
            },
            

			// PTAnalysis: {
            //     cPageLevel: 1,
            //     cTabIndex: 1,
            //     cPageMasterSeq: this.data.PageMasterSeq,
            //     cFormPageNo: this.data.PageOrder
            // }
        }
    },
	computed : {
    inputStatus() {
      if(this.$store.getters.getLevel == 1 && this.$store.getters.getTab == 1){
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
        doGenerate(){          
            this.propList.initialWhere = "SubPortfolioCd ='" + this.$route.query.SubPortfolioCd + "' AND BatchNo='" + this.$route.query.BatchNo + "' And JournalNo='" + this.$route.query.JournalNo +"'"
            this.toList().doGetList('','eb_getList')
        },
        toList() {
            return this.$children[2]
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
        M_Post(){
        },
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                
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
                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_GL_JournalInquiryDetail ={
                subportfoliocd: '',
                batchno:'',
                journalno:'',
                ledgersource:''
            }
            		
		},
        M_New(){
			
        },
        M_Edit(){
        },
        M_Delete(dt){       

           //nothing
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder

            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
                this.M_GL_JournalInquiryDetail = {
                    ledgersource: data.ledgersource,
                    frombatchno: data.frombatchno,
                    tobatchno: data.tobatchno
                }
                 

                this.M_GL_JournalInquiryDetail.frombatchnoLabel = this.M_GL_JournalInquiryDetail.frombatchno != null ? data.frombatchno + this.separator  :'' 
                this.M_GL_JournalInquiryDetail.tobatchnoLabel = this.M_GL_JournalInquiryDetail.tobatchno != null ? data.tobatchno + this.separator  :'' 
         

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }

    },
    beforeCreate: function () {
    },
    created: function() {
        this.$store.commit('setFormType','View')
        this.$store.commit('setStatus', 'new')        
    },
    beforeMount: function() {
    },
    mounted: function() {
        this.hideSideBarMenu()
        this.$store.commit('setLevel', 1)
        this.$store.commit('setTab', 1)
        this.$store.commit('setListDisable', false)

        // this.propList.ParamView = "'"+ this.$route.query.LedgerFlag + "'"
        this.toList().doGetList('','eb_getList')        

        this.M_GL_JournalInquiryDetail.subportfoliocd  = this.$route.query.SubPortfolioCd
        this.M_GL_JournalInquiryDetail.batchno  = this.$route.query.BatchNo
        this.M_GL_JournalInquiryDetail.journalno  = this.$route.query.JournalNo
        this.M_GL_JournalInquiryDetail.ledgersource  = this.$route.query.LedgerFlag
        

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

