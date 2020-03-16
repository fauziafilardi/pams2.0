<template>    
    <div class="height--full">
        <HeaderFormListVuex2 :isProcess = "true" />
         <div class="content-app-form__body" style="background-color: white;padding-top: 1px !important;margin-left: 15px;margin-right: 15px;height: 85%;overflow-y: auto;overflow-x: hidden;padding-bottom: 80px;">  
            <div :style="'margin-top:10px;'" class="el" mousetip mousetip-msg="I'm a tooltip">            
                <b-collapse id="collapse1" :visible="true">
                    <b-row  style="padding-left: 10px; padding-bottom: 10px; !important;">     
                        <b-col md="12" id="col-left" class="bColMasterForm">	
                            <b-form :data-vv-scope="'FormScope_' + PageLevel + '_' + TabIndex" :data-vv-value-path="'FormScope_' + PageLevel + '_' + TabIndex">
                                <b-row style="padding-left:10px;">					
                                    <b-col md="12" id="col-left"> <!-- table open -->
                                        <!-- <b-row>
                                            <b-col md="6">
                                                <ABSInputTextPeriodYear :prop="PI_periodyear" :valuePeriod="M_GL_BatchInquiry.ledgersource" :valueYear="M_GL_BatchInquiry.ledgersource" @from="ledgersource" @to="ledgersource"/>
                                            </b-col>
                                        </b-row> -->
                                        <b-row>
                                            <b-col  md="6">
                                                <ABSinputTextVuex @input="OnledgersourceChange" :prop="PI_ledgersource" v-model="M_GL_BatchInquiry.ledgersource"  ref="ref_ledgersource"/>
                                            </b-col>
                                        </b-row>
                                        <b-row>
                                            <b-col  md="6">
                                                <ABSInputSelectList @change="OnfrombatchnoChange" :prop="PI_frombatchno" :value="M_GL_BatchInquiry.frombatchno" :label="M_GL_BatchInquiry.frombatchnoLabel" ref="ref_frombatchno"/>
                                            </b-col>
                                            <b-col md="6">
                                                <ABSInputSelectList @change="OntobatchnoChange" :prop="PI_tobatchno" :value="M_GL_BatchInquiry.tobatchno" :label="M_GL_BatchInquiry.tobatchnoLabel" ref="ref_tobatchno"/>
                                            </b-col>
                                        </b-row>
                                        <b-row style="padding-top:10px;">
                                            <b-col offset="6">
                                                <b-button style="font-size: 10px;padding-top: 3px;padding-bottom: 3px;" @click="doGenerate"><font-awesome-icon icon="list" class="icon-style-1"/> Generate Inquiry</b-button>
                                            </b-col>
                                        </b-row>
                                    </b-col> <!-- table close -->                    
                                </b-row>
                                <!-- <ABSTAnalysis :prop="PTAnalysis" /> -->
                            </b-form>
                        </b-col>
                    </b-row>
                </b-collapse>
            </div>
            <ABSListVuex
                :prop = "propList"
                :title = "'JournalInquiry'"
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
</template>

<script>

export default {
    props: {PageLevel: '', TabIndex: '', data: ''},
    data() {
        return {
        oid:'',
		cInsertKey:'',
		FormType: "Process",
		Module:"GL",
            propList: {
                initialWhere: "StatusCd = 'P' AND LedgerFlag = 'A'",
                LineNo: 0,
                PageLevel: 1,
                TabIndex: 1,
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_GL_BatchInquiry :{
                ledgersource: 'A',
                frombatchno: '',
                tobatchno: ''
                    }
            ,
            // PI_periodyear:{
            //     cValidate :'', 
            //     cName: 'periodyear', 
            //     cLabel: 'From Period Year', 
            //     cLabelSize: 4, 
            //     cOrder: 1, 
            //     cKey: false, 
            //     cType: 'text',
            //     cVisible: true, 
            //     cProtect: false, 
            //     cPageLevel: 1, 
            //     cTabIndex: 1, 
            //     cParentForm: 'FormScope_' + 1 + '_' + 1 
            // },
            PI_ledgersource: { 
                cValidate :'max:1', 
                cName: 'ledgersource', 
                cLabel: 'Ledger Source', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1 ,
                cLastLabel: 'A(Active), B..L(Budget)'
            }, 
            PI_frombatchno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLBatch'    , 
                    ColumnDB: 'BatchNo'   , 
                    InitialWhere: ""   , 
                    ParamWhere: '',
                    SourceField:"BatchNo,DocumentCount,BatchTotal,TimeEdit",
                    DisplayLookUp:'BatchNo'  
                        }, 
                cValidate :'', 
                cName: 'frombatchno', 
                cLabel: 'From Batch No', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 2, 
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
                cDisplayColumn: 'BatchNo' ,
            }, 
            PI_tobatchno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLBatch'    , 
                    ColumnDB: 'BatchNo'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'tobatchno', 
                cLabel: 'To Batch No ', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 3, 
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
                cDisplayColumn: 'BatchNo' ,
            }, 

			// PTAnalysis: {
            //     cPageLevel: 1,
            //     cTabIndex: 1,
            //     cPageMasterSeq: this.data.PageMasterSeq,
            //     cFormPageNo: this.data.PageOrder
            // }
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
        OnledgersourceChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
                var letters = /^[A-La-l]+$/;
                if(data.match(letters))
                {
                    // return true
                    // console.log('yes')
                    this.M_GL_BatchInquiry.ledgersource = data
                }
                else
                {
                    // alert("message");
                    // console.log('lho')
                    // return false
                    this.M_GL_BatchInquiry.ledgersource = ''
                }
            }
        })
        this.$forceUpdate()
        },	
        doGenerate(){
            this.propList.initialWhere = "StatusCd='P'"    

            if (this.M_GL_BatchInquiry.frombatchno != '' && this.M_GL_BatchInquiry.tobatchno != '') {
                this.propList.initialWhere += " AND BatchNo BETWEEN '" + this.M_GL_BatchInquiry.frombatchno + "' AND '" + this.M_GL_BatchInquiry.tobatchno + "' AND LedgerFlag = '"+ this.M_GL_BatchInquiry.ledgersource +"'" 
            }
            
            if (this.M_GL_BatchInquiry.ledgersource != ''){
                this.propList.initialWhere += " AND LedgerFlag = '" + this.M_GL_BatchInquiry.ledgersource + "'"
            }

            this.toList().doGetList('','eb_getList')
        },
        toList() {
            return this.$children[2]
        },
        OnfrombatchnoChange (data) {
        this.$nextTick(() => {
            this.M_GL_BatchInquiry.frombatchno = data.id
            this.M_GL_BatchInquiry.frombatchnoLabel = data.label

            this.M_GL_BatchInquiry.tobatchno = data.id
            this.M_GL_BatchInquiry.tobatchnoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{frombatchno}
            }
        })
        this.$forceUpdate()
        },
        OntobatchnoChange (data) {
        this.$nextTick(() => {
            this.M_GL_BatchInquiry.tobatchno = data.id
            this.M_GL_BatchInquiry.tobatchnoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{tobatchno}
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
            this.toList().doGetList(data,'eb_getList')
        },
        M_Refresh(){
        },
		M_Cancel() {			
		},		
		doDoubleClick(){
        },
        rowClicked (record, index) {
            this.masterUrlPopUp(
                `${window.location.origin}` + '/GL/GL_JournalInquiry?oid=' +this.getOptionSeq().OptionSeq+'&isCallBack=true&LedgerFlag='+record.LedgerFlag+'&BatchNo='+record.BatchNo+'',
                '',
                '1000',
                '600',
                ''
            )
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
            this.M_GL_BatchInquiry = {
                ledgersource: 'A',
                frombatchno: '',
                tobatchno: ''
                    }
            		
		},
        M_New(){
			this.$refs.ref_ledgersource.focus()
        },
        M_Edit(){
            this.$refs.ref_ledgersource.focus()
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
                this.M_GL_BatchInquiry = {
                    ledgersource: data.ledgersource,
                    frombatchno: data.frombatchno,
                    tobatchno: data.tobatchno
                }
                 

                this.M_GL_BatchInquiry.frombatchnoLabel = this.M_GL_BatchInquiry.frombatchno != null ? data.frombatchno + this.separator  :'' 
                this.M_GL_BatchInquiry.tobatchnoLabel = this.M_GL_BatchInquiry.tobatchno != null ? data.tobatchno + this.separator  :'' 
         

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
        this.M_ClearForm()
        this.toList().doGetList('','eb_getList')

        // untuk ambil oid
        // var event = this.getMenu().EventWithChild
        // var url = '/GL/GL_JournalInquiry?oid='
        // var oi = ''
        // var arrFilter = event.filter(function(menu) {

        // var x = menu.Child.filter(function(child) {
        //     var menu = child.menu_url
        //     if (menu.includes(url)) {
        //     oi = menu
        //     }
        // })
        // })
        // this.oid = oi
        
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

