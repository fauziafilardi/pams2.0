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
                                    <!-- <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_targetfinperiod" v-model="M_GL_ConsolidationPeriod.targetfinperiod"  ref="ref_targetfinperiod"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_targetfinyear" v-model="M_GL_ConsolidationPeriod.targetfinyear"  ref="ref_targetfinyear"/>
                                      </b-col>
                                    </b-row> -->
                                    <b-row>
                                      <b-col md="6">
                                        <b-row>
                                          <b-col md="4" class="lbl-col-align">
                                            <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for="">Period / Year Target <span style="color:red;">*</span></label>
                                          </b-col>
                                          <b-col md="1">                                            
                                            <ABSTextBoxOnly @input="OntargetfinperiodChange" :prop="PI_targetfinperiod" v-model="M_GL_ConsolidationPeriod.targetfinperiod"  ref="ref_targetfinperiod"/>
                                          </b-col>
                                          <b-col md="1">/</b-col>
                                          <b-col md="1">                                            
                                            <ABSTextBoxOnly :prop="PI_targetfinyear" v-model="M_GL_ConsolidationPeriod.targetfinyear"  ref="ref_targetfinyear"/>
                                          </b-col>
                                        </b-row>                                       
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6" v-show="err3">
                                            <b-row v-show="err3">
                                                <b-col offset="4"><label class="lbl-value-view-form" style="color:red"> * Periode must be less then or equal 12 </label></b-col>
                                            </b-row>
                                        </b-col>
                                    </b-row>
                                    <!-- <b-row>
                                      <b-col  md="3">
                                        <ABSinputTextVuex :prop="PI_fromsourcefinperiod" v-model="M_GL_ConsolidationPeriod.fromsourcefinperiod"  ref="ref_fromsourcefinperiod"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_fromsourcefinyear" v-model="M_GL_ConsolidationPeriod.fromsourcefinyear"  ref="ref_fromsourcefinyear"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_tosourcefinperiod" v-model="M_GL_ConsolidationPeriod.tosourcefinperiod"  ref="ref_tosourcefinperiod"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_tosourcefinyear" v-model="M_GL_ConsolidationPeriod.tosourcefinyear"  ref="ref_tosourcefinyear"/>
                                      </b-col>
                                    </b-row> -->
                                    <b-row>
                                      <b-col md="6">
                                        <b-row>
                                          <b-col md="4" class="lbl-col-align">
                                            <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for="">Period / Year Source From  <span style="color:red;">*</span></label>
                                          </b-col>
                                          <b-col md="1">                                            
                                            <ABSTextBoxOnly @input="OnfromsourcefinperiodChange" :prop="PI_fromsourcefinperiod" v-model="M_GL_ConsolidationPeriod.fromsourcefinperiod"  ref="ref_fromsourcefinperiod"/>
                                          </b-col>
                                          <b-col md="1">/</b-col>
                                          <b-col md="1">                                            
                                            <ABSTextBoxOnly :prop="PI_fromsourcefinyear" v-model="M_GL_ConsolidationPeriod.fromsourcefinyear"  ref="ref_fromsourcefinyear"/>
                                          </b-col>
                                        </b-row>  
                                        <b-row>
                                        <b-col md="8" v-show="err4">
                                            <b-row v-show="err4">
                                                <b-col offset="6"><label class="lbl-value-view-form" style="color:red"> * Periode must be less then or equal 12 </label></b-col>
                                            </b-row>
                                        </b-col>
                                    </b-row>                                     
                                      </b-col>
                                      <b-col md="6">
                                        <b-row>
                                          <b-col md="4" class="lbl-col-align">
                                            <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for="">To <span style="color:red;">*</span></label>
                                          </b-col>
                                          <b-col md="1">                                            
                                            <ABSTextBoxOnly @input="OntosourcefinperiodChange" :prop="PI_tosourcefinperiod" v-model="M_GL_ConsolidationPeriod.tosourcefinperiod"  ref="ref_tosourcefinperiod"/>
                                          </b-col>
                                          <b-col md="1">/</b-col>
                                          <b-col md="1">                                            
                                            <ABSTextBoxOnly :prop="PI_tosourcefinyear" v-model="M_GL_ConsolidationPeriod.tosourcefinyear"  ref="ref_tosourcefinyear"/>
                                          </b-col>
                                        </b-row>  
                                        <b-row>
                                        <b-col md="8" v-show="err5">
                                            <b-row v-show="err5">
                                                <b-col offset="6"><label class="lbl-value-view-form" style="color:red"> * Periode must be less then or equal 12 </label></b-col>
                                            </b-row>
                                        </b-col>
                                    </b-row>                                     
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6" v-show="err1 || err2">
                                            <b-row v-show="err1">
                                                <b-col offset="4"><label class="lbl-value-view-form" style="color:red"> * Source Year From Must Less Than Source Year To</label></b-col>
                                            </b-row>
                                            <b-row v-show="err2">
                                                <b-col offset="4"><label class="lbl-value-view-form" style="color:red"> * Source Period From Must Less Than Source Period To</label></b-col>
                                            </b-row>
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_GL_ConsolidationPeriod.remarks"  ref="ref_remarks" />
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
import { truncate } from 'fs';

export default {
    props: {PageLevel:'', TabIndex: '', data: ''},
    data() {
        return {
			ValKey:null,
            FormType: "List",
            Module:"GL",
            error: false,
            err1: false,
            err2: false,
            err3: false,
            err4: false,
            err5: false,
            propList: {
                initialWhere:"ConsolidationCd = '" + this.ValKey + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_GL_ConsolidationPeriod :{
                consolidationcd: '',
                targetfinperiod: '',
                targetfinyear: '',
                fromsourcefinperiod: '',
                fromsourcefinyear: '',
                tosourcefinperiod: '',
                tosourcefinyear: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_targetfinperiod: { 
                cValidate :'required|max:2', 
                cName: 'targetfinperiod', 
                cLabel: 'Period / Year Target *', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: true, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_targetfinyear: { 
                cValidate :'required|max:4', 
                cName: 'targetfinyear', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 5, 
                cKey: true, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_fromsourcefinperiod: { 
                cValidate :'required|max:2', 
                cName: 'fromsourcefinperiod', 
                cLabel: 'Period / Year Source From *', 
                cLabelSize: 4, 
                cOrder: 6, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_fromsourcefinyear: { 
                cValidate :'required|max:4', 
                cName: 'fromsourcefinyear', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 7, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_tosourcefinperiod: { 
                cValidate :'required|max:2', 
                cName: 'tosourcefinperiod', 
                cLabel: 'To', 
                cLabelSize: 4, 
                cOrder: 8, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_tosourcefinyear: { 
                cValidate :'required|max:4', 
                cName: 'tosourcefinyear', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 9, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks', 
                cLabelSize: 4, 
                cOrder:10, 
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
		return this.$store.getters.GetPage2Data
	},
    DataRowPage1(){
		return this.$store.getters.GetPage1Data
	}
  },
    methods: {
      OntargetfinperiodChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
                if (data > 12){
                    this.error = true
                    this.err3 = true
                } else {
                    this.err3 = false
                    this.error = false
                }
            }
        })
        this.$forceUpdate()
        },
      OnfromsourcefinperiodChange(data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
                if (data > 12){
                    this.error = true
                    this.err4 = true
                } else {
                    this.err4 = false
                    this.error = false
                }
            }
        })
        this.$forceUpdate()
        },
      OntosourcefinperiodChange(data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
                if (data > 12){
                    this.error = true
                    this.err5 = true
                } else {
                    this.err5 = false
                    this.error = false
                }
            }
        })
        this.$forceUpdate()
        },
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
            this.M_GL_ConsolidationPeriod.consolidationcd = data.ConsolidationCd 
            this.propList.initialWhere =" ConsolidationCd = '" + data.ConsolidationCd + "' "

            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
          if(this.M_GL_ConsolidationPeriod.targetfinperiod > 12){              
              return
            }

            if(this.M_GL_ConsolidationPeriod.fromsourcefinperiod > 12){
              return
            }

            if(this.M_GL_ConsolidationPeriod.tosourcefinperiod > 12){
              return
            }
            if(this.M_GL_ConsolidationPeriod.fromsourcefinyear > this.M_GL_ConsolidationPeriod.tosourcefinyear){
                this.err1 = true
                this.error = true
                return
            }else{
                this.err1 = false
                this.error = false

                if(this.M_GL_ConsolidationPeriod.fromsourcefinperiod > this.M_GL_ConsolidationPeriod.tosourcefinperiod && this.M_GL_ConsolidationPeriod.fromsourcefinyear == this.M_GL_ConsolidationPeriod.tosourcefinyear){
                    this.err2 = true
                    this.error = true
                    return
                }else{                    
                    this.err2 = false
                    this.error = false

                }
            }

            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                ConsolidationCd: this.M_GL_ConsolidationPeriod.consolidationcd,
                TargetFinPeriod: this.M_GL_ConsolidationPeriod.targetfinperiod,
                TargetFinYear: this.M_GL_ConsolidationPeriod.targetfinyear,
                FromSourceFinPeriod: this.M_GL_ConsolidationPeriod.fromsourcefinperiod,
                FromSourceFinYear: this.M_GL_ConsolidationPeriod.fromsourcefinyear,
                ToSourceFinPeriod: this.M_GL_ConsolidationPeriod.tosourcefinperiod,
                ToSourceFinYear: this.M_GL_ConsolidationPeriod.tosourcefinyear,
                Remarks: this.M_GL_ConsolidationPeriod.remarks,
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
          if(this.M_GL_ConsolidationPeriod.targetfinperiod > 12){              
              return
            }

            if(this.M_GL_ConsolidationPeriod.fromsourcefinperiod > 12){
              return
            }

            if(this.M_GL_ConsolidationPeriod.tosourcefinperiod > 12){
              return
            }
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                ConsolidationCd: this.M_GL_ConsolidationPeriod.consolidationcd,
                TargetFinPeriod: this.M_GL_ConsolidationPeriod.targetfinperiod,
                TargetFinYear: this.M_GL_ConsolidationPeriod.targetfinyear,
                FromSourceFinPeriod: this.M_GL_ConsolidationPeriod.fromsourcefinperiod,
                FromSourceFinYear: this.M_GL_ConsolidationPeriod.fromsourcefinyear,
                ToSourceFinPeriod: this.M_GL_ConsolidationPeriod.tosourcefinperiod,
                ToSourceFinYear: this.M_GL_ConsolidationPeriod.tosourcefinyear,
                Remarks: this.M_GL_ConsolidationPeriod.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_GL_ConsolidationPeriod.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_GL_ConsolidationPeriod = {
                consolidationcd: '',
                targetfinperiod: '',
                targetfinyear: '',
                fromsourcefinperiod: '',
                fromsourcefinyear: '',
                tosourcefinperiod: '',
                tosourcefinyear: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_GL_ConsolidationPeriod.consolidationcd = data.ConsolidationCd 
            this.propList.initialWhere =" ConsolidationCd = '" + data.ConsolidationCd + "' "
            this.$refs.ref_targetfinperiod.focus()
        },
        M_Edit(){
          this.$refs.ref_targetfinperiod.focus()
        },
        M_Delete(dt){           

            var data = this.FormToABSList().getRowSelected()  
          var dataDelete = []
          
          data.forEach((value) => {
            
            dataDelete.push({
                ConsolidationCd: value.ConsolidationCd,
                TargetFinPeriod: value.TargetFinPeriod,
                TargetFinYear: value.TargetFinYear,
                LastUpdateStamp: value.LastUpdateStamp,
                _Message_: ""
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
                LineNo: this.$parent.data.PageOrder,                
                consolidationcd: record.ConsolidationCd,
                targetfinperiod: record.TargetFinPeriod,
                targetfinyear: record.TargetFinYear		
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
                this.M_GL_ConsolidationPeriod = {
                    consolidationcd: data.consolidationcd,
                    targetfinperiod: data.targetfinperiod,
                    targetfinyear: data.targetfinyear,
                    fromsourcefinperiod: data.fromsourcefinperiod,
                    fromsourcefinyear: data.fromsourcefinyear,
                    tosourcefinperiod: data.tosourcefinperiod,
                    tosourcefinyear: data.tosourcefinyear,
                    remarks: data.remarks,
                    userinput: data.userinput,
                    useredit: data.useredit,
                    timeinput: data.timeinput,
                    timeedit: data.timeedit,
                    lastupdatestamp: record.LastUpdateStamp,
                    rowid: data.rowid
                }
                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
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

