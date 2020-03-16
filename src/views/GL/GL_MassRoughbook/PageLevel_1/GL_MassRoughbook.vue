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
                                        <ABSInputSelectList @change="OnfromreferencenoChange" :prop="PI_fromreferenceno" :value="M_GL_MassRoughbook.fromreferenceno" :label="M_GL_MassRoughbook.fromreferencenoLabel" ref="ref_fromreferenceno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OntoreferencenoChange" :prop="PI_toreferenceno" :value="M_GL_MassRoughbook.toreferenceno" :label="M_GL_MassRoughbook.toreferencenoLabel" ref="ref_toreferenceno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <!-- <ABSinputDateRange @input="OnfromreferencedateChange" :prop="PI_fromreferencedate" v-model="M_GL_MassRoughbook.fromreferencedate"  ref="ref_fromreferencedate" /> -->
                                        <ABSinputDateRangeVuex :prop="PI_referencedate" :valueFrom="M_GL_MassRoughbook.fromreferencedate" :valueTo="M_GL_MassRoughbook.toreferencedate" @from="OnfromreferencedateChange" @to="OntoreferencedateChange" />
                                      </b-col>
                                    </b-row>
                                    <div class="div-collapse">
                                        <span class="master-span-form">
                                            Authorized Signature
                                        </span>
                                    </div>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnroughbookstatusChange" :prop="PI_roughbookstatus" v-model="M_GL_MassRoughbook.roughbookstatus"  ref="ref_roughbookstatus" />
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

            M_GL_MassRoughbook :{
                fromreferenceno: '',
                toreferenceno: '',
                fromreferencedate: '',
                toreferencedate: '',
                roughbookstatus: 'Y'
                    }
            ,					
            PI_fromreferenceno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLReferenceNo'    , 
                    ColumnDB: 'SubPortfolioCd'   , 
                    InitialWhere: " SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' "   , 
                    ParamWhere: ''  ,
                    SourceField: "ReferenceNo,Descs,TimeEdit",
                    DisplayLookUp: "ReferenceNo,Descs"
                        }, 
                cValidate :'', 
                cName: 'fromreferenceno', 
                cLabel: 'From Reference No', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 0, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: '' ,
                cDisplayColumn: 'ReferenceNo,Descs' ,
            }, 
            PI_toreferenceno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLReferenceNo'    , 
                    ColumnDB: 'SubPortfolioCd'   , 
                    InitialWhere: " SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' "   , 
                    ParamWhere: ''  ,
                    SourceField: "ReferenceNo,Descs,TimeEdit",
                    DisplayLookUp: "ReferenceNo,Descs"
                        }, 
                cValidate :'', 
                cName: 'toreferenceno', 
                cLabel: 'To', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 0, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: '' ,
                cDisplayColumn: 'ReferenceNo,Descs' ,
            }, 
            PI_referencedate: { 
                cValidate :'', 
                cName: 'fromreferencedate', 
                cLabel: 'From Journal Date', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1
            }, 
            PI_roughbookstatus: { 
                cValidate :'', 
                cName: 'roughbookstatus', 
                cId: 'rdbroughbookstatus', 
                cRadioOptions: [{ text: 'Mark', value: 'Y' },{ text: 'Unmark', value: 'N' },], 
                cRadioDefaultOption: '', 
                cLabel:'Rough Book', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1 
            }, 
            
            PTAnalysis: {
                cPageLevel: 1,
                cTabIndex: 1,
                cPageMasterSeq: this.data.PageMasterSeq,
                cFormPageNo: this.data.PageOrder
            }
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
    }
  },
    methods: {		
        OnfromreferencenoChange (data) {
        this.$nextTick(() => {
            this.M_GL_MassRoughbook.fromreferenceno = data.id
            this.M_GL_MassRoughbook.fromreferencenoLabel = data.label
            if (this.inputStatus != "VIEW") {
                this.M_GL_MassRoughbook.toreferenceno = data.id
                this.M_GL_MassRoughbook.toreferencenoLabel = data.label
            }
        })
        this.$forceUpdate()
        },
        OntoreferencenoChange (data) {
        this.$nextTick(() => {
            this.M_GL_MassRoughbook.toreferenceno = data.id
            this.M_GL_MassRoughbook.toreferencenoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{toreferenceno}
            }
        })
        this.$forceUpdate()
        },
        OnfromreferencedateChange (data) {
            console.log(data)
            this.M_GL_MassRoughbook.fromreferencedate = data
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
                this.M_GL_MassRoughbook.toreferencedate = data
//{fromreferencedate}
            }
        })
        this.$forceUpdate()
        },
        OntoreferencedateChange (data) {
            this.M_GL_MassRoughbook.toreferencedate = data
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{toreferencedate}
            }
        })
        this.$forceUpdate()
        },
        OnroughbookstatusChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{roughbookstatus}
            }
        })
        this.$forceUpdate()
        },
	
		setToolbarButton () {
            this.getToolbar().isNew = true
            this.getToolbar().statusFunction[0].disabled = true
            // this.getToolbar().statusFunction[5].disabled = false
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
            this.M_ClearForm()
            this.$store.commit('setStatus', 'view')
            this.$store.commit('setStatus', 'edit')
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
        M_Update() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                FromReferenceNo: this.M_GL_MassRoughbook.fromreferenceno,
                ToReferenceNo: this.M_GL_MassRoughbook.toreferenceno,
                FromReferenceDate: this.M_GL_MassRoughbook.fromreferencedate,
                ToReferenceDate: this.M_GL_MassRoughbook.toreferencedate,
                RoughbookStatus: this.M_GL_MassRoughbook.roughbookstatus,
                UserEdit: this.getDataUser().UserId
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return
                
                this.alertSuccess("Roughbook Status Updated!")
                .then(() => {
                    this.M_ClearForm()
                    this.$store.commit('setStatus', 'view')
                    this.$store.commit('setStatus', 'edit')
                })
            })
        },
        M_Insert() {
        },
		M_ClearForm(){
            this.M_GL_MassRoughbook = {
                fromreferenceno: '',
                toreferenceno: '',
                fromreferencedate: '',
                toreferencedate: '',
                roughbookstatus: 'Y'
                    }
        },
        M_New(){
            this.$refs.ref_fromreferenceno.focus()
        },
        M_Edit(){
            this.$refs.ref_fromreferenceno.focus()
        },
        M_Delete(dt){
        },        
        getDataBy (record) {
        }
		
    },
    beforeCreate: function () {
    },
    created: function() {
        this.$store.commit('setStatus','EDIT')
        // this.isDetail = true
    },
    beforeMount: function() {
    },
    mounted: function() {
        // this.getDataBy()
        this.$store.commit('setFormType','Form')
        this.getToolbar().FormStatus = 'EDIT'
        this.getToolbar().ProcessPS()
        
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
