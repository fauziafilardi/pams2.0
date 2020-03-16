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
                                        <ABSInputSelectList @change="OnfromsubportfoliocdChange" :prop="PI_fromsubportfoliocd" :value="M_GL_MassRoughbookAllSubportfolio.fromsubportfoliocd" :label="M_GL_MassRoughbookAllSubportfolio.fromsubportfoliocdLabel" ref="ref_fromsubportfoliocd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OntosubportfoliocdChange" :prop="PI_tosubportfoliocd" :value="M_GL_MassRoughbookAllSubportfolio.tosubportfoliocd" :label="M_GL_MassRoughbookAllSubportfolio.tosubportfoliocdLabel" ref="ref_tosubportfoliocd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnfromreferencenoChange" :prop="PI_fromreferenceno" :value="M_GL_MassRoughbookAllSubportfolio.fromreferenceno" :label="M_GL_MassRoughbookAllSubportfolio.fromreferencenoLabel" ref="ref_fromreferenceno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OntoreferencenoChange" :prop="PI_toreferenceno" :value="M_GL_MassRoughbookAllSubportfolio.toreferenceno" :label="M_GL_MassRoughbookAllSubportfolio.toreferencenoLabel" ref="ref_toreferenceno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <!-- <ABSinputDateVuex @input="OnfromreferencedateChange" :prop="PI_fromreferencedate" v-model="M_GL_MassRoughbookAllSubportfolio.fromreferencedate"  ref="ref_fromreferencedate" /> -->
                                        <ABSinputDateRangeVuex :prop="PI_fromreferencedate" :valueFrom="M_GL_MassRoughbookAllSubportfolio.fromreferencedate" :valueTo="M_GL_MassRoughbookAllSubportfolio.toreferencedate" @from="OnfromreferencedateChange" @to="OntoreferencedateChange" />
                                      </b-col>
                                    </b-row>
                                    <div class="div-collapse">
                                        <span class="master-span-form">
                                            Rough Book
                                        </span>
                                    </div>
                                    <b-row>
                                      <b-col  md="6">
                                        <!-- <ABSCompute :prop="PI_currentlyinroughbook" v-model="M_GL_MassRoughbookAllSubportfolio.currentlyinroughbook"  ref="ref_currentlyinroughbook" /> -->
                                        <b-row>
                                            <b-col md="4" style="text-align: right !important;">
                                                <label class="text-field-form"> {{ PI_currentlyinroughbook.cLabel }} </label>
                                            </b-col>
                                            <b-col md="7">
                                                <span v-for="spc in SubPortfolioCd_in">
                                                    <label class="text-field-form"> <u>{{'Subportfolio: ' + spc}}</u> </label> <br>
                                                    <span v-for="data in allRB">
                                                        <span v-show="data.SubPortfolioCd === spc">
                                                            <label class="text-field-form">
                                                                {{ 'Year: ' + data.FinYear + ' Period: ' + data.FinPeriod }}
                                                            </label> <br>
                                                        </span>
                                                    </span>
                                                </span>
                                            </b-col>
                                        </b-row>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <!-- <ABSCompute :prop="PI_currentlynotinroughbook" v-model="M_GL_MassRoughbookAllSubportfolio.currentlynotinroughbook"  ref="ref_currentlynotinroughbook" /> -->
                                        <b-row>
                                            <b-col md="4" style="text-align: right !important;">
                                                <label class="text-field-form"> {{ PI_currentlynotinroughbook.cLabel }} </label>
                                            </b-col>
                                            <b-col md="7">
                                                <span v-for="spc in SubPortfolioCd_notin">
                                                    <label class="text-field-form"> <u>{{'Subportfolio: ' + spc}}</u> </label> <br>
                                                    <span v-for="data in allRB_n">
                                                        <span v-show="data.SubPortfolioCd === spc">
                                                            <label class="text-field-form">
                                                                {{ 'Year: ' + data.FinYear + ' Period: ' + data.FinPeriod }}
                                                            </label> <br>
                                                        </span>
                                                    </span>
                                                </span>
                                            </b-col>
                                        </b-row>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnroughbookstatusChange" :prop="PI_roughbookstatus" v-model="M_GL_MassRoughbookAllSubportfolio.roughbookstatus"  ref="ref_roughbookstatus" />
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

            M_GL_MassRoughbookAllSubportfolio :{
                fromsubportfoliocd: '',
                tosubportfoliocd: '',
                fromreferenceno: '',
                toreferenceno: '',
                fromreferencedate: '',
                toreferencedate: '',
                currentlyinroughbook: '',
                currentlynotinroughbook: '',
                roughbookstatus: 'Y'
                    }
            ,					
            PI_fromsubportfoliocd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMSubPortfolio_New'    , 
                    ColumnDB: 'SubPortFolioCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'fromsubportfoliocd', 
                cLabel: 'From Subportfolio Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 1, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: '' ,
                cDisplayColumn: 'SubPortFolioCd,Name' ,
            }, 
            PI_tosubportfoliocd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMSubPortfolio_New'    , 
                    ColumnDB: 'SubPortFolioCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'tosubportfoliocd', 
                cLabel: 'To', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 2, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: '' ,
                cDisplayColumn: 'SubPortFolioCd,Name' ,
            }, 
            PI_fromreferenceno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLReferenceNo_New'    , 
                    ColumnDB: 'ReferenceNo'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'fromreferenceno', 
                cLabel: 'From Reference No', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 3, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: '' ,
                cDisplayColumn: 'ReferenceNo' ,
            }, 
            PI_toreferenceno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLReferenceNo_New'    , 
                    ColumnDB: 'ReferenceNo'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'toreferenceno', 
                cLabel: 'To', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 4, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: '' ,
                cDisplayColumn: 'ReferenceNo' ,
            }, 
            PI_fromreferencedate: { 
                cValidate :'', 
                cName: 'fromreferencedate', 
                cLabel: 'From Journal Date', 
                cLabelSize: 4, 
                cOrder: 5, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_currentlyinroughbook: { 
                cLabel: 'Currently In RoughBook', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_currentlynotinroughbook: { 
                cLabel: 'Currently Not In RoughBook', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_roughbookstatus: { 
                cValidate :'', 
                cName: 'roughbookstatus', 
                cId: 'rdbroughbookstatus', 
                cRadioOptions: [{ text: 'Mark', value: 'Y' },{ text: 'Unmark', value: 'N' },], 
                cRadioDefaultOption: '', 
                cLabel:'Rough Book', 
                cLabelSize: 4, 
                cOrder: 6, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            
            PTAnalysis: {
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cPageMasterSeq: this.data.PageMasterSeq,
                cFormPageNo: this.data.PageOrder
            },

            allRB: [],
            SubPortfolioCd_in: [],
            SubPortfolioCd_notin: [],
            allRB_n: [],
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
        OnfromsubportfoliocdChange (data) {
        this.$nextTick(() => {
            this.M_GL_MassRoughbookAllSubportfolio.fromsubportfoliocd = data.id
            this.M_GL_MassRoughbookAllSubportfolio.fromsubportfoliocdLabel = data.label
            this.M_GL_MassRoughbookAllSubportfolio.tosubportfoliocd = data.id
            this.M_GL_MassRoughbookAllSubportfolio.tosubportfoliocdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{fromsubportfoliocd}
            }
        })
        this.$forceUpdate()
        },
        OntosubportfoliocdChange (data) {
        this.$nextTick(() => {
            this.M_GL_MassRoughbookAllSubportfolio.tosubportfoliocd = data.id
            this.M_GL_MassRoughbookAllSubportfolio.tosubportfoliocdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{tosubportfoliocd}
            }
        })
        this.$forceUpdate()
        },
        OnfromreferencenoChange (data) {
        this.$nextTick(() => {
            this.M_GL_MassRoughbookAllSubportfolio.fromreferenceno = data.id
            this.M_GL_MassRoughbookAllSubportfolio.fromreferencenoLabel = data.label
            this.M_GL_MassRoughbookAllSubportfolio.toreferenceno = data.id
            this.M_GL_MassRoughbookAllSubportfolio.toreferencenoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{fromreferenceno}
            }
        })
        this.$forceUpdate()
        },
        OntoreferencenoChange (data) {
        this.$nextTick(() => {
            this.M_GL_MassRoughbookAllSubportfolio.toreferenceno = data.id
            this.M_GL_MassRoughbookAllSubportfolio.toreferencenoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{toreferenceno}
            }
        })
        this.$forceUpdate()
        },
        OnfromreferencedateChange (data) {
            this.M_GL_MassRoughbookAllSubportfolio.fromreferencedate = data
            this.M_GL_MassRoughbookAllSubportfolio.toreferencedate = data
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{fromreferencedate}
            }
        })
        this.$forceUpdate()
        },
        OntoreferencedateChange (data) {
            this.M_GL_MassRoughbookAllSubportfolio.toreferencedate = data
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{fromreferencedate}
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
            this.getToolbar().doEdit(true)
            this.M_ClearForm()
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
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                FromSubportfolioCd: this.M_GL_MassRoughbookAllSubportfolio.fromsubportfoliocd,
                ToSubportfolioCd: this.M_GL_MassRoughbookAllSubportfolio.tosubportfoliocd,
                FromReferenceNo: this.M_GL_MassRoughbookAllSubportfolio.fromreferenceno,
                ToReferenceNo: this.M_GL_MassRoughbookAllSubportfolio.toreferenceno,
                FromReferenceDate: this.M_GL_MassRoughbookAllSubportfolio.fromreferencedate,
                ToReferenceDate: this.M_GL_MassRoughbookAllSubportfolio.toreferencedate,
                RoughbookStatus: this.M_GL_MassRoughbookAllSubportfolio.roughbookstatus,
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
		M_ClearForm(){
            this.M_GL_MassRoughbookAllSubportfolio = {
                fromsubportfoliocd: '',
                tosubportfoliocd: '',
                fromreferenceno: '',
                toreferenceno: '',
                fromreferencedate: '',
                toreferencedate: '',
                currentlyinroughbook: '',
                currentlynotinroughbook: '',
                roughbookstatus: 'Y'
                    }
            		
		},
        M_New(){
			this.$refs.ref_fromsubportfoliocd.focus()
        },
        M_Edit(){
            this.$refs.ref_fromsubportfoliocd.focus()
        },
        M_Delete(dt){       

          //nothing
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder

            }

            this.postEncode( this.getUrlGetById2Obj(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data1 = response.Data.data1
                var data2 = response.Data.data2

                var s = data1.map(x => x.SubportfolioCd)

                var new_s = [... new Set(s)]
                this.SubPortfolioCd_in = new_s

                for ( let a = 0 ; a < new_s.length ; a ++ ) {
                    var y = data1.filter(ss => { 
                        return ss.SubportfolioCd === new_s[a]
                    }).map(x => x.FinYear)

                    var new_y = [... new Set(y)]

                    for ( let b = 0 ; b < new_y.length ; b ++ ) {
                        var p = data1.filter(xx => { 
                            return (xx.SubportfolioCd === new_s[a] && xx.FinYear === new_y[b])
                        }).map(x => x.FinPeriod)

                        var new_p = [... new Set(p)]
                        
                        var Periods = ""
                        for ( let c = 0 ; c < new_p.length ; c ++ ) {
                            Periods += new_p[c] + ","
                        }

                        this.allRB.push({
                            SubPortfolioCd: new_s[a],
                            FinYear: new_y[b],
                            FinPeriod: Periods.slice(0,-1)
                        })
                    }
                }

                // data not in
                var s_n = data2.map(x => x.SubportfolioCd)

                var new_s_n = [... new Set(s_n)]
                this.SubPortfolioCd_notin = new_s_n

                for ( let a = 0 ; a < new_s_n.length ; a ++ ) {
                    var y_n = data2.filter(ss => { 
                        return ss.SubportfolioCd === new_s_n[a]
                    }).map(x => x.FinYear)

                    var new_y_n = [... new Set(y_n)]

                    for ( let b = 0 ; b < new_y_n.length ; b ++ ) {
                        var p_n = data2.filter(xx => { 
                            return (xx.SubportfolioCd === new_s_n[a] && xx.FinYear === new_y_n[b])
                        }).map(x => x.FinPeriod)

                        var new_p_n = [... new Set(p_n)]
                        
                        var Periods_n = ""
                        for ( let c = 0 ; c < new_p_n.length ; c ++ ) {
                            Periods_n += new_p_n[c] + ","
                        }

                        this.allRB_n.push({
                            SubPortfolioCd: new_s_n[a],
                            FinYear: new_y_n[b],
                            FinPeriod: Periods_n.slice(0,-1)
                        })
                    }
                }

                // console.log(this.allRB)
                
// this.M_GL_MassRoughbookAllSubportfolio = {
//                 fromsubportfoliocd: data.fromsubportfoliocd,
//                 tosubportfoliocd: data.tosubportfoliocd,
//                 fromreferenceno: data.fromreferenceno,
//                 toreferenceno: data.toreferenceno,
//                 fromreferencedate: data.fromreferencedate,
//                 currentlyinroughbook: data.currentlyinroughbook,
//                 currentlynotinroughbook: data.currentlynotinroughbook,
//                 roughbookstatus: data.roughbookstatus
//                     }
                 

                // this.M_GL_MassRoughbookAllSubportfolio.fromsubportfoliocdLabel = this.M_GL_MassRoughbookAllSubportfolio.fromsubportfoliocd != null ? data.fromsubportfoliocd + this.separator  :'' 
                // this.M_GL_MassRoughbookAllSubportfolio.tosubportfoliocdLabel = this.M_GL_MassRoughbookAllSubportfolio.tosubportfoliocd != null ? data.tosubportfoliocd + this.separator  :'' 
                // this.M_GL_MassRoughbookAllSubportfolio.fromreferencenoLabel = this.M_GL_MassRoughbookAllSubportfolio.fromreferenceno != null ? data.fromreferenceno + this.separator  :'' 
                // this.M_GL_MassRoughbookAllSubportfolio.toreferencenoLabel = this.M_GL_MassRoughbookAllSubportfolio.toreferenceno != null ? data.toreferenceno + this.separator  :'' 
         

                // this.IEBy.Input = data.userinput
                // this.IEBy.Edit = data.useredit

            })
        }
		
    },
    beforeCreate: function () {
    },
    created: function() {
        this.$store.commit('setStatus','EDIT')
    },
    beforeMount: function() {
    },
    mounted: function() {
        this.$store.commit('setFormType','Form')
        this.getToolbar().FormStatus = 'EDIT'
        this.getToolbar().ProcessPS()
        
        this.getToolbar().doEdit(true)
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
