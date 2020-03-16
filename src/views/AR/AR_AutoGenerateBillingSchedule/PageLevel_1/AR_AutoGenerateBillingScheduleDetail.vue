<template>    
    <div class="height--full">
        <HeaderFormListVuex2 :isProcess = "true" />
        <!-- <div class="content-app-form__body" style="background-color: white;padding-top: 1px !important;margin-left: 15px;margin-right: 15px;height: 95%;overflow-y: auto;overflow-x: hidden;padding-bottom: 80px;">  -->
          <div class="content-app-form__body form-process">  
            <div class="tab-list-process">
            <ABSListVuex
                :prop = "propList"
                :title = "'AutoGenerateBillingScheduleDetail'"
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
                initialWhere: "",
                LineNo: 1,
                PageLevel: 1,
                TabIndex: 1,
                OrderBy: '', 
                SourceField: '', 
                // ParamView: "" 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_AR_AutoGenerateBillingScheduleDetail :{}
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
        toList() {
            return this.$children[1]
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
            this.M_AR_AutoGenerateBillingScheduleDetail ={
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

            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
                this.M_AR_AutoGenerateBillingScheduleDetail = {
                }
                 

                // this.M_GL_JournalInquiry.frombatchnoLabel = this.M_GL_JournalInquiry.frombatchno != null ? data.frombatchno + this.separator  :'' 
                // this.M_GL_JournalInquiry.tobatchnoLabel = this.M_GL_JournalInquiry.tobatchno != null ? data.tobatchno + this.separator  :'' 
         

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
        var subport = this.$route.query.SubPort
        var postingtype = this.$route.query.PostingType
        var wsubport = ''
        var wpostingtype = ''
        if (subport.includes(',')) {
            var temp = subport.split(',')
            for(var a = 0; a < temp.length; a++) {
                wsubport += "'" + temp[a] + "',"
            }

            wsubport = wsubport.slice(0,-1)
        }
        else {
            wsubport = "'" + subport + "'"
        }
        if (postingtype.includes(',')) {
            var temp = postingtype.split(',')
            for(var a = 0; a < temp.length; a++) {
                wpostingtype += "'" + temp[a] + "',"
            }

            wpostingtype = wpostingtype.slice(0,-1)
        }
        else {
            wpostingtype = "'" + postingtype + "'"
        }

        this.propList.initialWhere = " SubPortfolioCd in (" + wsubport + ") AND PostingType in (" + wpostingtype + ")"
        this.toList().doGetList('','eb_getList')

        // this.M_GL_JournalInquiry.batchno  = this.$route.query.BatchNo
        // this.M_GL_JournalInquiry.ledgersource  = this.$route.query.LedgerFlag
        

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

