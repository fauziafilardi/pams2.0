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
                <span>
                    <span style="float:Left; color: #81b3e9 !important;letter-spacing: 1px;margin-top: 2px;margin-left: 3px" >
                        Record Information <font-awesome-icon icon="sort-down" class="icon-style-1__master" /> 
                    </span>
                    <span v-show="IEBy.Input && IEBy.Edit" class="master-span">
                        Input By : {{IEBy.Input}} | Edit By : {{IEBy.Edit}} <font-awesome-icon icon="sort-down" class="icon-style-1__master" /> 
                    </span>
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
                                        <ABSinputTextVuex @input="OnfromamtChange" :prop="PI_fromamt" v-model="M_CM_StampDuty.fromamt"  ref="ref_fromamt"/>
                                      </b-col>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_toamt" @input="OntoamtInput" v-model="M_CM_StampDuty.toamt"  ref="ref_toamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_stampdutyamt" v-model="M_CM_StampDuty.stampdutyamt"  ref="ref_stampdutyamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_CM_StampDuty.remarks"  ref="ref_remarks" />
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
    watch: {
        'M_CM_StampDuty.fromamt' (newData, oldData) {
            // var fromamt = this.replaceAllString(this.M_CM_StampDuty.fromamt, ',', '', 'number')
            var fromamt = this.replaceAllString(newData, ',', '', 'number')
            // console.log(fromamt)
            this.PI_toamt.cValidate = "required|min_value:0.00|greater:" + fromamt
        }
    },
    data() {
        return {
		cInsertKey:'',
		FormType: "List",
		Module:"CM",
            propList: {
                initialWhere: "",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_CM_StampDuty :{
                sequenceno: 0,
                fromamt: '0',
                toamt: '0',
                stampdutyamt: '0',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                controlsequenceno: 0,
                rowid: 0
                    }
            ,
            PI_fromamt: { 
                cValidate :'required|max:16|min_value:0.00', 
                cName: 'fromamt', 
                cLabel: 'Trans Amount From', 
                cLabelSize: 4, 
                cLastLabel: '(Base Amount)',
                cOrder: 1, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cAllowMinus: false,
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            }, 
            PI_toamt: { 
                cValidate :'required|max:16|min_value:0.00', 
                cName: 'toamt', 
                cLabel: 'Trans Amount To', 
                cLabelSize: 4, 
                cLastLabel: '(Base Amount)',
                cOrder: 2, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cAllowMinus: false,
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_stampdutyamt: { 
                cValidate :'required|max:13|min_value:0.00', 
                cName: 'stampdutyamt', 
                cLabel: 'Stamp Duty Amount', 
                cLastLabel: '(Base Amount)',
                cLabelSize: 4, 
                cOrder: 3, 
                cKey: false, 
                cType: 'decimal',
                cAllowMinus: false,
                cDecimal: 2, 
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
                cOrder:4, 
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
		return this.$store.getters.GetPage1Data
	}
  },
    methods: {
        OntoamtInput (data) {

        },
        OnfromamtChange	(data) {
//         this.$nextTick(() => {
//             if (this.inputStatus != "VIEW") {
// //{remarks}
//             }
//         })
        // this.$forceUpdate()
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
        },		
        M_Post(){
        },
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                FromAmt: this.M_CM_StampDuty.fromamt ? this.replaceAllString(this.M_CM_StampDuty.fromamt,',','','number') : 0 ,
                ToAmt: this.M_CM_StampDuty.toamt ? this.replaceAllString(this.M_CM_StampDuty.toamt,',','','number') : 0 ,
                StampDutyAmt: this.M_CM_StampDuty.stampdutyamt ? this.replaceAllString(this.M_CM_StampDuty.stampdutyamt,',','','number') : 0 ,
                Remarks: this.M_CM_StampDuty.remarks,
                userInput: this.getDataUser().UserId                 
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
                SequenceNo: this.M_CM_StampDuty.sequenceno,
                FromAmt: this.M_CM_StampDuty.fromamt ? this.replaceAllString(this.M_CM_StampDuty.fromamt,',','','number') : 0 ,
                ToAmt: this.M_CM_StampDuty.toamt ? this.replaceAllString(this.M_CM_StampDuty.toamt,',','','number') : 0 ,
                StampDutyAmt: this.M_CM_StampDuty.stampdutyamt ? this.replaceAllString(this.M_CM_StampDuty.stampdutyamt,',','','number') : 0 ,
                Remarks: this.M_CM_StampDuty.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_CM_StampDuty.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })

        },
		M_ClearForm(){
            this.M_CM_StampDuty = {
                sequenceno: 0,
                fromamt: '',
                toamt: '',
                stampdutyamt: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                controlsequenceno: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
            this.$refs.ref_fromamt.focus()
			
        },
        M_Edit(){
            this.$refs.ref_fromamt.focus()
        },
        M_Delete(dt){       

        var data = this.FormToABSList().getRowSelected()  
        var dataDelete = []

        
        data.forEach((value) => {
          dataDelete.push({
          SequenceNo: value.SequenceNo,
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
                LineNo: this.$parent.data.PageOrder
,                sequenceno: record.SequenceNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_CM_StampDuty = {
                sequenceno: data.sequenceno,
                fromamt: this.isCurrency(data.fromamt, this.decimal),
                toamt: this.isCurrency(data.toamt, this.decimal),
                stampdutyamt: this.isCurrency(data.stampdutyamt, this.decimal),
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                timeinput: data.timeinput,
                timeedit: data.timeedit,
                lastupdatestamp: record.LastUpdateStamp,
                controlsequenceno: data.controlsequenceno,
                rowid: data.rowid
                    }
                 

         

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }

    },
    beforeCreate: function () {
    },
    created: function() {
        // var vm = this
        this.$store.commit('setFormType','List')
        this.getToolbar().ProcessPS()

        // this.$validator.extend('invalidTransAmt', {
        // getMessage(field, val) {
        //     return "Trans Amount To can't be lower than Trans Amount From"
        // },
        // validate(value, field) {
        //     var trxamtto = vm.replaceAllString(value, ',', '', 'number')
        //     var amtfrom = vm.replaceAllString(vm.M_CM_StampDuty.fromamt, ',', '', 'number')
        //     return trxamtto < amtfrom
        // }
        // })

        // this.PI_toamt.cValidate = "required|invalidTransAmt"
    },
    beforeMount: function() {
    },
    mounted: function() {
        this.hideSideBarMenu()
        this.FormToABSList().doGetList('','eb_getList')

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

