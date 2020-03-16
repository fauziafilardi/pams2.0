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
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OndeviationprocesstypeChange" :prop="PI_deviationprocesstype" v-model="M_TN_DeviationChannelStep.deviationprocesstype"  ref="ref_deviationprocesstype" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_TN_DeviationChannelStep.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnparentsequencenoChange" :prop="PI_parentsequenceno" :value="M_TN_DeviationChannelStep.parentsequenceno" :label="M_TN_DeviationChannelStep.parentsequencenoLabel" ref="ref_parentsequenceno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_sortsequenceno" v-model="M_TN_DeviationChannelStep.sortsequenceno"  ref="ref_sortsequenceno"/>
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
		FormType: "List",
		Module:"TN",
            propList: {
                initialWhere: "WorkFlowType = 'D' AND DeviationProcessTypeCode IN (1,2,3)",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_TN_DeviationChannelStep :{
                formsequenceno: 0,
                pagemasterseq: 0,
                notificationcd: '',
                deviationprocesstype: '1',
                descs: '',
                descsdev: '',
                alertcd: '',
                parentsequenceno: 0,
                inserttrigger: '',
                updatetrigger: '',
                deletetrigger: '',
                fromlimittrigger: 0,
                tolimittrigger: 0,
                sortsequenceno: '0',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_deviationprocesstype: { 
                cValidate :'', 
                cName: 'deviationprocesstype', 
                cId: 'rdbdeviationprocesstype', 
                cRadioOptions: [{ text: 'LOO', value: '1' },{ text: 'LOI', value: '2' },{ text: 'LA', value: '3' },], 
                cRadioDefaultOption: '1', 
                cLabel:'Process Type', 
                cLabelSize: 4, 
                cOrder: 1, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_descs: { 
                cValidate :'required|max:60', 
                cName: 'descs', 
                cLabel: 'Description', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_parentsequenceno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupFormSequenceNo'    , 
                    ColumnDB: 'FormSequenceNo'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'parentsequenceno', 
                cLabel: 'Parent Sequence No         ', 
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
                cDisplayColumn: 'FormSequenceNo,Descs' ,
            }, 
            PI_sortsequenceno: { 
                cValidate :'', 
                cName: 'sortsequenceno', 
                cLabel: 'Sort Sequence No', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 

			PTAnalysis: {
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cPageMasterSeq: this.data.PageMasterSeq,
                cFormPageNo: this.data.PageOrder,
				cProtect: false
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
        OndeviationprocesstypeChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{deviationprocesstype}
            }
        })
        this.$forceUpdate()
        },
        OnparentsequencenoChange (data) {
        this.$nextTick(() => {
            this.M_TN_DeviationChannelStep.parentsequenceno = data.id
            this.M_TN_DeviationChannelStep.parentsequencenoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{parentsequenceno}
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
        M_Post(dt){
        },
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                DeviationProcessType: this.M_TN_DeviationChannelStep.deviationprocesstype,
                Descs: this.M_TN_DeviationChannelStep.descs,
                WorkFlowType: 'D',
                ParentSequenceNo: this.M_TN_DeviationChannelStep.parentsequenceno == '' || this.M_TN_DeviationChannelStep.parentsequenceno == null ? 'NULL' : this.M_TN_DeviationChannelStep.parentsequenceno ,
                SortSequenceNo: this.M_TN_DeviationChannelStep.sortsequenceno,
                Remarks: this.M_TN_DeviationChannelStep.remarks,
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
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                FormSequenceNo: this.M_TN_DeviationChannelStep.formsequenceno,
                DeviationProcessType: this.M_TN_DeviationChannelStep.deviationprocesstype,
                Descs: this.M_TN_DeviationChannelStep.descs,
                WorkFlowType: 'D',
                ParentSequenceNo: this.M_TN_DeviationChannelStep.parentsequenceno == '' || this.M_TN_DeviationChannelStep.parentsequenceno == null ? 'NULL' : this.M_TN_DeviationChannelStep.parentsequenceno ,
                SortSequenceNo: this.M_TN_DeviationChannelStep.sortsequenceno,
                Remarks: this.M_TN_DeviationChannelStep.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_DeviationChannelStep.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_TN_DeviationChannelStep = {
                formsequenceno: 0,
                pagemasterseq: 0,
                notificationcd: '',
                deviationprocesstype: '1',
                descs: '',
                descsdev: '',
                alertcd: '',
                parentsequenceno: 0,
                inserttrigger: '',
                updatetrigger: '',
                deletetrigger: '',
                fromlimittrigger: 0,
                tolimittrigger: 0,
                sortsequenceno: '0',
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
			
        },
        M_Edit(){
        },
        M_Delete(dt){       
			var data = this.FormToABSList().getRowSelected()  
			var dataDelete = []

			
			data.forEach((value) => {

				
				dataDelete.push({
                    FormSequenceNo: value.FormSequenceNo,
                    LastUpdateStamp: value.LastUpdateStamp,
                    _Message_:''


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
,                formsequenceno: record.FormSequenceNo
            }
            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
                
this.M_TN_DeviationChannelStep = {
                formsequenceno: data.formsequenceno,
                pagemasterseq: this.isCurrency(data.pagemasterseq, this.decimal),
                notificationcd: data.notificationcd,
                deviationprocesstype: data.deviationprocesstype,
                descs: data.descs,
                descsdev: data.descsdev,
                alertcd: data.alertcd,
                parentsequenceno: data.parentsequenceno,
                inserttrigger: data.inserttrigger,
                updatetrigger: data.updatetrigger,
                deletetrigger: data.deletetrigger,
                fromlimittrigger: this.isCurrency(data.fromlimittrigger, this.decimal),
                tolimittrigger: this.isCurrency(data.tolimittrigger, this.decimal),
                sortsequenceno: data.sortsequenceno,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                timeinput: data.timeinput,
                timeedit: data.timeedit,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
                 

                this.M_TN_DeviationChannelStep.parentsequencenoLabel = this.M_TN_DeviationChannelStep.parentsequenceno != null && this.M_TN_DeviationChannelStep.parentsequenceno != '' ? data.parentsequenceno + this.separator + data.descs :'' 
         

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }

    },
    beforeCreate: function () {
    },
    created: function() {
	this.$store.commit('setFormType','List')
    this.getToolbar().ProcessPS()
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

