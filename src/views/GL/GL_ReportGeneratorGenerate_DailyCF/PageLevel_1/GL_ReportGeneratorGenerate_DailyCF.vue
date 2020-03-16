<template>
    <div>
    <HeaderFormListVuex2 :isProcess = "true" />

    <!-- <div class="content-app-form__body" style="background-color: white;padding-top: 1px !important;margin-left: 15px;margin-right: 15px;height: 95%;overflow-y: auto;overflow-x: hidden;padding-bottom: 80px;"> -->
    <div class="content-app-form__body form-process">    
        <div class="tab-list-process">
            <ABSListVuex
            :prop = "propList"
            :isProcess = "true"
            @rowClicked = "$parent.rowClicked"
            @rowDblClicked = "$parent.doDoubleClick"
            @rowLinkClick = "$parent.rowLink"
            @pageSize = "$parent.M_PageSize"
            @pagination = "$parent.M_Pagination"
            @filter = "$parent.M_Advance_Filter"
            @headTable = "$parent.M_Head_Table"
            @refreshColumn = "$parent.refreshColumn"
            />

      <!-- :title = "data.QueryName" -->

        <div v-show="true"  :style="'margin-top:10px;'" class="el" mousetip mousetip-msg="I'm a tooltip">
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
                                        <!-- <ABSCompute :prop="PI_xxx45895" v-model="M_GL_ReportGeneratorGenerate.xxx45895"  ref="ref_xxx45895" /> -->
                                        {{M_GL_ReportGeneratorGenerate.message}}
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
                initialWhere: "ResultDate IS NULL AND ISNULL(IsDailyCashFlow, '') = 'Y' AND UserEdit='"+this.getDataUser().UserId+"'",
                LineNo: 0,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_GL_ReportGeneratorGenerate :{
                message:''
                    }
            ,
            PI_xxx45895: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 

			PTAnalysis: {
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cPageMasterSeq: 0,
                cFormPageNo: 0
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
        toToolbar() {
            // console.log(this.$children)
            return this.$children[0].$children[0]
        },
        toList() {
            return this.$children[1]
        },
		setToolbarButton () {
            // this.getToolbar().isNew = true
            // this.getToolbar().statusFunction[0].disabled = true
            // this.getToolbar().statusFunction[4].disabled = false //utk aktifin
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
            this.toList().doGetList(data,'eb_getList')
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
            var data = this.toList().getRowSelected()
            var dt = ''
            
            data.forEach((value) => {
                dt = dt + value.RowId + ','
            })

            dt = dt.slice(0,-1)
            console.log(dt)
            var param = {
                Data: dt,
                UserId : this.getDataUser().UserId
            }

            this.postJSON(this.getUrlGenerateReportDaily(), param).then(response => {
                if (response == null) return
                // if(response.Data.length==0){
                //     this.alertSuccess("Posting Data Successfully")
                // }

                var data2 = response.Data
                localStorage.reportGenerator = JSON.stringify(data2)

                this.windowOpen(
                    `${window.location.origin}` + '/ReportGenerator',
                    '1000',
                    '600'
                )

                this.$store.commit('setEventStatus', 'POST')
                this.toList().doGetList("", "eb_getList")
            })

        },
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: 0,
                
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
                LineNo: 0,
                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_GL_ReportGeneratorGenerate = {

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
                LineNo: 0

            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_GL_ReportGeneratorGenerate = {

                    }
                 

         

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }

    },
    beforeCreate: function () {
    },
    created: function() {
    // this.$store.commit('setFormType','Process')
    // this.$store.commit('setStatus','new')
    // this.getToolbar().ProcessPS()
    },
    beforeMount: function() {
    },
    mounted: function() {
        // alert('otnay')
        // this.M_GL_ReportGeneratorGenerate.message ='asdfasdfasdfasdfasd adsfadsg adsg adsgagd </br> ashdfasdfhds </br>'
        // // this.$store.commit('setFormType','Form')
        // this.getToolbar().FormStatus = 'NEW'
        // this.hideSideBarMenu()
        // this.FormToABSList().doGetList('','eb_getList')

        // this.$store.commit('setFormType','Process')
        // this.$store.commit('setStatus', 'new')
        // this.$store.commit('setListDisable', false)
        // this.$store.commit('setLevel', 1)
        // this.$store.commit('setTab', 1)
        // // this.getToolbar().ProcessPS()
        // this.hideSideBarMenu()
        // this.FormToABSList().doGetList('','eb_getList')

        this.$store.commit('setFormType','Process')
        this.$store.commit('setStatus', 'new')
        this.$store.commit('setListDisable', false)
        this.$store.commit('setLevel', 1)
        this.$store.commit('setTab', 1)
        this.toToolbar().ProcessPS()
        this.hideSideBarMenu()
        this.toList().doGetList('','eb_getList')

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

