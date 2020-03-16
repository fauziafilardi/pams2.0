<template>    
    <div class="height--full">
        <HeaderFormListVuex2 :isProcess = "true" />
        <!-- <div class="content-app-form__body" style="background-color: white;padding-top: 1px !important;margin-left: 15px;margin-right: 15px;height: 95%;overflow-y: auto;overflow-x: hidden;padding-bottom: 80px;">  -->
        <div class="content-app-form__body form-process">
            <div class="tab-list-process">
            <div :style="'margin-top:10px;'" class="el" mousetip mousetip-msg="I'm a tooltip">            
               <div class="div-collapse" v-b-toggle.collapse1> 
                    <span>
                        <span style="float:Left; color: #81b3e9 !important;letter-spacing: 1px;margin-top: 2px;margin-left: 3px" >
                            Debtor Information <font-awesome-icon icon="sort-down" class="icon-style-1__master" /> 
                        </span>
                    </span>
                </div>
                <b-collapse id="collapse1" :visible="true">
                    <b-row  style="padding-left: 10px; padding-bottom: 10px; !important;">     
                        <b-col md="12" id="col-left" class="bColMasterForm">	
                            <b-form :data-vv-scope="'FormScope_1_1'" :data-vv-value-path="'FormScope_1_1'">
                                <b-row style="padding-left:10px;">					
                                    <b-col md="12" id="col-left"> <!-- table open -->
                                        <b-row>
                                            <b-col md="6">
                                                <ABSinputTextVuex :prop="PI_lotno" v-model="lotno"  ref="ref_lotno"/>
                                            </b-col>
                                        </b-row>
                                        <b-row>
                                            <b-col md="6">
                                                <ABSinputTextVuex :prop="PI_applicationno" v-model="applicationno"  ref="ref_applicationno"/>
                                            </b-col>
                                        </b-row>
                                        <b-row>
                                            <b-col md="6">
                                                <ABSinputTextVuex :prop="PI_debtorcd" v-model="debtorcd"  ref="ref_debtorcd"/>
                                            </b-col>
                                        </b-row>
                                        <b-row>
                                            <b-col md="6">
                                                <ABSinputTextVuex :prop="PI_businessname" v-model="businessname"  ref="ref_businessname"/>
                                            </b-col>
                                        </b-row>
                                    </b-col> <!-- table close -->                    
                                </b-row>
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
            FormType: "View",
            Module:"CB",
            IEBy: {Input: '', Edit: ''},
            
            lotno: '',
            applicationno: '',
            debtorcd: '',
            businessname: '',

            PI_lotno: {
                cValidate :'', 
                cName: 'lotno', 
                cLabel: 'Lot No', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_1_1'
            },
            PI_applicationno: {
                cValidate :'', 
                cName: 'applicationno', 
                cLabel: 'Application No', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_1_1'
            },
            PI_debtorcd: {
                cValidate :'', 
                cName: 'debtorcd', 
                cLabel: 'Debtor Code', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_1_1'
            },
            PI_businessname: {
                cValidate :'', 
                cName: 'businessname', 
                cLabel: 'Business Name', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_1_1'
            },
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
        setToolbarButton () {
           this.getToolbar().statusFunction[7].disabled = true
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
        },
        M_Update() {
        },
		M_ClearForm(){
		},
        M_New(){
        },
        M_Edit(){
        },
        M_Delete(dt){
        },        
        getDataBy () {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: 0,
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                LotNo: this.$route.query.LotNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return
                
                var data = response.Data[0]
                this.lotno = this.$route.query.LotNo
                this.applicationno = data.applicationno
                this.debtorcd = data.debtorcd && data.debtorcd != "" ? data.debtorcd + this.separator + data.debtorname : ""
                this.businessname = data.businessname
            })
        }
    },
    beforeCreate: function () {
    },
    created: function() {
        this.$store.commit('setFormType','View')
    },
    beforeMount: function() {
    },
    mounted: function() {
        this.hideSideBarMenu()
        this.$store.commit('setLevel', 1)
        this.$store.commit('setTab', 1)
        
        this.getDataBy()
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

