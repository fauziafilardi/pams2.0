<template>
    <div>
        <div :style="'margin-top:10px;'" class="el" mousetip mousetip-msg="I'm a tooltip">
            <div class="div-collapse" v-b-toggle.collapse1>
                <span class="master-span" v-show="IEBy.Input && IEBy.Edit">
                    Input By : {{IEBy.Input}} | Edit By : {{IEBy.Edit}} <font-awesome-icon icon="sort-down" class="icon-style-1__master" /> 
                </span>
            </div>
            <b-collapse id="collapse1" :visible="true">
                <b-row  style="padding-left: 10px; padding-bottom: 10px; !important;">              
                    <b-col md="12" id="col-left" class="bColMasterForm">
                        <b-form :data-vv-scope="'FormScope_' + PageLevel + '_' + TabIndex" :data-vv-value-path="'FormScope_' + PageLevel + '_' + TabIndex">
                            <b-row  style="padding-left: 10px; padding-bottom: 10px; !important;">              
                                <b-col md="12" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnpostingdateChange" :prop="PI_postingdate" v-model="M_GL_PostingRevaluation.postingdate"  ref="ref_postingdate" />
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
            FormType: "Form",
			Module:"GL",	
            IEBy: {Input: '', Edit: ''},

            M_GL_PostingRevaluation :{
                postingdate: ''
            },					
            PI_postingdate: { 
                cValidate :'required', 
                cName: 'postingdate', 
                cLabel: 'Posting Date', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
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
    }
  },
    methods: {		
        OnpostingdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{postingdate}
            }
        })
        this.$forceUpdate()
        },
	
		setToolbarButton () {
           this.getToolbar().statusFunction[4].text = 'Post'
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
            this.M_GL_PostingRevaluation.postingdate = ''
            this.getDataBy()
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
            // var param = {			
            //     OptionSeq: this.getOptionSeq().OptionSeq,
            //     LineNo: this.$parent.data.PageOrder,
            //     SubportfolioCd: this.getDataUser().SubPortfolioCd,
            //     PostingDate: this.M_GL_PostingRevaluation.postingdate == '' || this.M_GL_PostingRevaluation.postingdate == null ? 'NULL' : this.M_GL_PostingRevaluation.postingdate ,
            //     User: this.M_GL_PostingRevaluation.this.getdatauser().userid                
            // }

            // this.postJSON(this.getUrlInsert(), param)
            // .then((response) => {
            //     if(response == null) return
                
            //     this.alertSuccess(response.Message)
            //     .then(() => {
            //         this.getToolbar().FormStatus = 'EDIT'
            //         this.getToolbar().ProcessPS()
            //         this.$store.commit('setStatus', 'view')
			// 		this.$store.commit('setEventStatus', 'Save')

            //         this.FormToMasterPage().ValidasiPage()
										
					
            //     })
            // })
        },
        M_Update() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                PostingDate: this.M_GL_PostingRevaluation.postingdate == '' || this.M_GL_PostingRevaluation.postingdate == null ? 'NULL' : this.M_GL_PostingRevaluation.postingdate,
                User: this.getDataUser().UserId
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                this.alertSuccess('Posting Revaluation Succeed!')
                .then(() => {
                    // this.getToolbar().setButton(false)
                    this.M_ClearForm()
                    this.$store.commit('setStatus', 'view')
                    this.$store.commit('setStatus', 'new')
                    this.getToolbar().doEdit(true)
                    // this.FormToMasterPage().ValidasiPage()
					
                })
            })
        },
		M_ClearForm(){
            this.M_GL_PostingRevaluation = {
            }
		},
        M_New(){
			this.$refs.ref_postingdate.focus()
        },
        M_Edit(){
            this.$refs.ref_postingdate.focus()
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
                this.M_GL_PostingRevaluation = {

                }
                // this.IEBy.Input = data.userinput
                // this.IEBy.Edit = data.useredit

            })
        }
		
    },
    beforeCreate: function () {
    },
    created: function() {
        this.$store.commit('setFormType','Form')
        // this.isDetail = true
    },
    beforeMount: function() {
    },
    mounted: function() {
        // this.getToolbar().FormStatus = 'EDIT'
        // this.getToolbar().ProcessPS()
        this.getDataBy()
        this.getToolbar().doEdit(true)
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
