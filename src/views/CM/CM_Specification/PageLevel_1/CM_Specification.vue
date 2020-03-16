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
                                <b-col md="12" id="col-left">
                                    <b-row>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnContactRunningCdChange" :prop="PI_ContactRunningCd" :value="M_CM_Specification.ContactRunningCd" :label="M_CM_Specification.ContactRunningCdLabel" ref="ref_ContactRunningCd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex :prop="PI_Remarks" v-model="M_CM_Specification.Remarks" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_TaxRegMin" v-model="M_CM_Specification.TaxRegMin"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_TaxRegMax" v-model="M_CM_Specification.TaxRegMax"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="6">
                                        <ABSinputRadioButtonVuex :prop="PI_ClassificationMandatory" v-model="M_CM_Specification.ClassificationMandatory" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnContactApprovalInput" :prop="PI_ContactApproval" v-model="M_CM_Specification.ContactApproval" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex :prop="PI_DocumentApproval" v-model="M_CM_Specification.DocumentApproval" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_IdNoMin" v-model="M_CM_Specification.IdNoMin"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_IdNoMax" v-model="M_CM_Specification.IdNoMax"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_PassportNoMin" v-model="M_CM_Specification.PassportNoMin"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_PassportNoMax" v-model="M_CM_Specification.PassportNoMax"/>
                                      </b-col>
                                    </b-row>
                                </b-col>
                                                                    
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
            FormType: "Form",
			Module:"CM",

            M_CM_Specification :{
                ContactRunningCd: '',
                Remarks: '',
                UserInput: '',
                UserEdit: this.getDataUser().UserId,
                TimeInput: '',
                TimeEdit: '',
                LastUpdateStamp: 0,
                ControlSequenceNo: 0,
                TaxRegMin: '',
                TaxRegMax: '',
                ClassificationMandatory: 'Y',
                ContactApproval: 'Y',
                IdNoMin: '',
                IdNoMax: '',
                PassportNoMin: '',
                PassportNoMax: '',
                DocumentApproval: 'Y',
                RowId: 0,
                RunningCdDescs: ''
                    }
            ,			
            IEBy: {Input: '', Edit: ''},
            PI_ContactRunningCd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMRunningCode'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: " ModuleCd IS NULL OR ModuleCd = 'CM' "   , 
                    ParamWhere: ""
                        }, 
                cValidate :'', 
                cName:'ContactRunningCd', 
                cLabel:'Contact Running Code', 
                cKey: false, 
                cOrder:1, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cMasterUrl:'CM/CM_RunningCd' ,
                cDisplayColumn:'RunningCd,Descs' ,
            }, 
            PI_Remarks: { 
                cValidate :'', 
                cName:'Remarks', 
                cLabel:'Remarks', 
                cOrder:2, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_TaxRegMin: { 
                cValidate :'required|max:5|min_value:1', 
                cName:'Tax Reg. Min', 
                cLabel:'Tax Reg. Min', 
                cOrder:3, 
                cKey: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cType: 'numeric' 
            }, 
            PI_TaxRegMax: { 
                cValidate :'required|max:5|min_value:1', 
                cName:'Tax Reg. Max', 
                cLabel:'Tax Reg. Max', 
                cOrder:4, 
                cKey: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cType: 'numeric' 
            }, 
            PI_ClassificationMandatory: { 
                cValidate :'', 
                cName:'ClassificationMandatory', 
                cId:'rdbClassificationMandatory', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cLabel:'Classification Mandatory', 
                cOrder:5, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_ContactApproval: { 
                cValidate :'', 
                cName:'ContactApproval', 
                cId:'rdbContactApproval', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cLabel:'Contact Approval', 
                cOrder:6, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_DocumentApproval: { 
                cValidate :'', 
                cName:'DocumentApproval', 
                cId:'rdbDocumentApproval', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cLabel:'Document Approval', 
                cOrder:7, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cProtect: true 
            }, 
            PI_IdNoMin: { 
                cValidate :'required|max:5|min_value:1', 
                cName:'NIK Min', 
                cLabel:'NIK Min', 
                cOrder:8, 
                cKey: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cType: 'numeric' 
            }, 
            PI_IdNoMax: { 
                cValidate :'required|max:5|min_value:1',
                cName:'NIK Max', 
                cLabel:'NIK Max', 
                cOrder:9, 
                cKey: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cType: 'numeric' 
            }, 
            PI_PassportNoMin: { 
                cValidate :'required|max:5|min_value:1', 
                cName:'Passport No. Min', 
                cLabel:'Passport No. Min', 
                cOrder:10, 
                cKey: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cType: 'numeric' 
            }, 
            PI_PassportNoMax: { 
                cValidate :'required|max:5|min_value:1', 
                cName:'Passport No. Max', 
                cLabel:'Passport No. Max', 
                cOrder:11, 
                cKey: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cType: 'numeric' 
            }            
            ,PTAnalysis: {
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
        OnContactApprovalInput (data) {
            // console.log(data)
            if ( data == 'Y') {
                this.PI_DocumentApproval.cProtect = false
            } else {
                this.PI_DocumentApproval.cProtect = true
                this.M_CM_Specification.DocumentApproval = 'N'
            }
            
            // this.$nextTick(() => {
            //     this.M_CM_Specification.ContactRunningCd = data.id
            //     this.M_CM_Specification.ContactRunningCdLabel = data.label
            // //{ContactRunningCd}
            // })
            // this.$forceUpdate()
        },
        OnContactRunningCdChange (data) {
            this.$nextTick(() => {
                this.M_CM_Specification.ContactRunningCd = data.id
                this.M_CM_Specification.ContactRunningCdLabel = data.label
                //{ContactRunningCd}
            })
            this.$forceUpdate()
        },
	
		setToolbarButton () {
           //this.getToolbar().statusFunction[4].disabled = false
		},		
        M_Post(){            
        },
        M_Refresh(){
        },
        M_New(){            
            // this.$nextTick().then(() => document.getElementById("???").focus())
        },
        M_Edit(){
            this.$refs.ref_ContactRunningCd.focus()
            // this.$nextTick().then(() => document.getElementById("???").focus())
        },
        M_Delete(dt){
            var data = this.FormToABSList().getRowSelected()
            var dataDelete = []

            data.forEach((value) => {
                dataDelete.push({
                _Message_: ''
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
        M_Insert () {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                ContactRunningCd: this.M_CM_Specification.ContactRunningCd,
                TaxRegMin: this.M_CM_Specification.TaxRegMin,
                TaxRegMax: this.M_CM_Specification.TaxRegMax,
                IdNoMin: this.M_CM_Specification.IdNoMin,
                IdNoMax: this.M_CM_Specification.IdNoMax,
                PassportNoMin: this.M_CM_Specification.PassportNoMin,
                PassportNoMax: this.M_CM_Specification.PassportNoMax,
                DocumentApproval: this.M_CM_Specification.DocumentApproval,
                Remarks: this.M_CM_Specification.Remarks,
                UserInput: this.getDataUser().UserId ,
                ClassificationMandatory: this.M_CM_Specification.ClassificationMandatory,
                ContactApproval: this.M_CM_Specification.ContactApproval,
                LastUpdateStamp: this.M_CM_Specification.LastUpdateStamp                
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return
                this.getToolbar().FormStatus = 'EDIT'
                this.getToolbar().ProcessPS()
                this.$parent.resultInsert(response.Message)
            })
        },
        M_Update () {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                ContactRunningCd: this.M_CM_Specification.ContactRunningCd,
                TaxRegMin: this.M_CM_Specification.TaxRegMin,
                TaxRegMax: this.M_CM_Specification.TaxRegMax,
                IdNoMin: this.M_CM_Specification.IdNoMin,
                IdNoMax: this.M_CM_Specification.IdNoMax,
                PassportNoMin: this.M_CM_Specification.PassportNoMin,
                PassportNoMax: this.M_CM_Specification.PassportNoMax,
                DocumentApproval: this.M_CM_Specification.DocumentApproval,
                Remarks: this.M_CM_Specification.Remarks,
                UserEdit: this.getDataUser().UserId ,
                ClassificationMandatory: this.M_CM_Specification.ClassificationMandatory,
                ContactApproval: this.M_CM_Specification.ContactApproval,
                LastUpdateStamp: this.M_CM_Specification.LastUpdateStamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return
                this.getToolbar().FormStatus = 'EDIT'
                this.getToolbar().ProcessPS()
                this.$parent.resultUpdate(response.Message)
            })			
        },
        // M_ClearForm(){
        //     this.M_CM_Specification ={
        //         ContactRunningCd: '',
        //         Remarks: '',
        //         UserInput: '',
        //         UserEdit: this.getDataUser().UserId,
        //         TimeInput: '',
        //         TimeEdit: '',
        //         LastUpdateStamp: 0,
        //         ControlSequenceNo: 0,
        //         TaxRegMin: '',
        //         TaxRegMax: '',
        //         ClassificationMandatory: 'Y',
        //         ContactApproval: 'Y',
        //         IdNoMin: '',
        //         IdNoMax: '',
        //         PassportNoMin: '',
        //         PassportNoMax: '',
        //         DocumentApproval: 'Y',
        //         RowId: 0, 
        //         RunningCdDescs: ''
        //     }
        // },        
        paramFromParent(){
        },
        rowLink: function(url){
        },
        getDataBy () {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
            }            

            this.postEncode( this.getUrlById(), param )
                .then( response => {

                if(response == null) return
				var data = response.Data[0]
                if(response.Data.length > 0){
                    // this.$store.commit('setStatus', 'EDIT')
                    this.getToolbar().FormStatus = 'EDIT'
                    this.getToolbar().ProcessPS()
                this.M_CM_Specification = {
                    ContactRunningCd: data.contactrunningcd,
                    ContactRunningCdLabel: data.contactrunningcd + " | " + data.runningcddescs,
                    Remarks: data.remarks,
                    UserInput: data.userinput,
                    UserEdit: data.useredit,
                    TimeInput: data.timeinput,
                    TimeEdit: data.timeedit,
                    LastUpdateStamp: data.lastupdatestamp,
                    ControlSequenceNo: data.controlsequenceno,
                    TaxRegMin: data.taxregmin,
                    TaxRegMax: data.taxregmax,
                    ClassificationMandatory: data.classificationmandatory,
                    ContactApproval: data.contactapproval,
                    IdNoMin: data.idnomin,
                    IdNoMax: data.idnomax,
                    PassportNoMin: data.passportnomin,
                    PassportNoMax: data.passportnomax,
                    DocumentApproval: data.documentapproval,
                    RowId: data.rowid,
                    RunningCdDescs: data.runningcddescs
                }   
                    this.IEBy.Input = data.userinput 
                    this.IEBy.Edit = data.useredit
                }
                else {
                    // this.$store.commit('setStatus', 'NEW')
                    this.getToolbar().FormStatus = 'NEW'
                    this.getToolbar().ProcessPS()
                }
            })
        },
        setToolbarButton () {            
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
        this.getDataBy()
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
