<template>
    <div>
        <ABSListVuex
            :prop="propList"
            :title="data.QueryName"
            @rowClicked="rowClicked"
            @rowDblClicked="doDoubleClick"
            @rowLinkClick="rowLink" />
              
        <div v-show="$parent.isDetail" style="margin-top:10px;">
            <div class="div-collapse" v-b-toggle.collapse2>
                <span class="master-span" v-show="IEBy.Input && IEBy.Edit">
                    Input By : {{IEBy.Input}} | Edit By : {{IEBy.Edit}} <font-awesome-icon icon="sort-down" class="icon-style-1__master" />  
                </span>
            </div>
            <b-collapse id="collapse2" :visible="true">
                <b-row style="padding-left: 10px; !important; padding-bottom: 5px; !important;">
                    <b-col md="5" id="col-left">
                        <b-form :data-vv-scope="'FormScope_' + PageLevel + '_' + TabIndex" :data-vv-value-path="'FormScope_' + PageLevel + '_' + TabIndex">
                            <ABSinputTextVuex :prop="PI.Caption" v-model="M_SS_CustomField.Caption"/>                            
                            <ABSInputSelectVuex @change="onChange" :prop="PI.DataType" v-model="M_SS_CustomField.DataType"/>
                            <ABSinputTextVuex :prop="PI.Length" v-model="M_SS_CustomField.Length"/>
                            <ABSinputRadioButtonVuex :prop="PI.Mandatory" v-model="M_SS_CustomField.Mandatory"/>
                            <ABSinputRadioButtonVuex :prop="PI.LookupStatus" v-model="M_SS_CustomField.LookupStatus"/>
                            <ABSInputSelectVuex @change="onChange" :prop="PI.LookupTable" v-model="M_SS_CustomField.LookupTable"/>
                            <ABSinputTextVuex :prop="PI.LookupField" v-model="M_SS_CustomField.LookupField"/>                            
                            <ABSinputTextVuex :prop="PI.LookupCondition" v-model="M_SS_CustomField.LookupCondition"/>
                            <ABSinputTextVuex v-show="DefaultDescs" :prop="PI.DefaultDescs" v-model="M_SS_CustomField.DefaultDescs"/>
                            <ABSinputTextVuex v-show="DefaultNumeric" :prop="PI.DefaultNumeric" v-model="M_SS_CustomField.DefaultNumeric"/>
                            <ABSinputTextVuex v-show="DefaultDate" :prop="PI.DefaultDate" v-model="M_SS_CustomField.DefaultDate"/>
                            <ABSinputTextVuex :prop="PI.Remarks" v-model="M_SS_CustomField.Remarks"/>                             
                        </b-form>
                    </b-col>
                </b-row>
            </b-collapse>            
        </div>
    </div>
</template>

<script>

export default {
    props: {PageLevel:'', TabIndex: '', data: ''},
    data() {
        return { 
            ValKey:null,
            QuerySequenceNo: null,
            propList: {
                initialWhere: "PageMasterSeq = '" + this.ValKey + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex
            },
            M_SS_CustomField_Temp:{},
            M_SS_CustomField: {

                Caption: null,
                DataType: null,
                Length: null,
                Mandatory: null,
                LookupStatus: null,
                LookupTable: null,
                LookupField: null,
                LookupCondition: null,
                DefaultDescs: null,
                DefaultDate: null,
                DefaultNumeric: null,
                Remarks: null

            },
            IEBy: {Input: '', Edit: ''},
            PI: {
                Caption: {
                    cValidate: 'required|min:2|max:60',
                    cName: 'Caption',
                    cLabel: 'Caption',
                    // cLabelSize: 5,
                    cOrder: 1,
                    cKey: false,
                    cPageLevel: this.PageLevel,
                    cTabIndex: this.TabIndex,
                    cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
                },
                DataType: {
                    dataLookUp: {
                            LookUpCd: '',
                            ColumnDB: '',
                            InitialWhere: '',
                            ParamWhere: ''
                        },
                        cValidate: '',
                        cName: 'DataType',
                        cLabel: 'Data Type',
                        cOrder: 2,
                        cSelected: null,
                        cType: 'lookup',
                        cPageLevel: this.PageLevel,
                        cTabIndex: this.TabIndex,
                        cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                        cStatic: true,
                        cOption: [
                            {id:'D', label:'Description'},
                            {id:'N', label:'Numeric'},
                            {id:'A', label:'Datetime'},
                            {id:'T', label:'Text'}
                        ]
                },
                Length: {
                    cValidate: 'min:2|max:60',
                    cName: 'Length',
                    cLabel: 'Length',
                    // cLabelSize: 5,
                    cOrder: 3,
                    cKey: false,
                    cPageLevel: this.PageLevel,
                    cTabIndex: this.TabIndex,
                    cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
                },
                Mandatory: {
                    cId: 'rdMandatory',
                    cName: 'Mandatory',
                    cRadioOptions: [
                                { text: 'Yes', value: 'Y' },
                                { text: 'No', value: 'N' }
                            ],
                    cLabel: 'Mandatory',
                    //cLabelSize: 5,
                    cOrder: 4,
                    cKey: false,
                    cRadioDefaultOption: '',
                    cPageLevel: this.PageLevel,
                    cTabIndex: this.TabIndex,
                    cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
                },
                LookupStatus: {
                    cId: 'rdLookupStatus',
                    cName: 'LookupStatus',
                    cRadioOptions: [
                                { text: 'Yes', value: 'Y' },
                                { text: 'No', value: 'N' }
                            ],
                    cLabel: 'Lookup Status',
                    //cLabelSize: 5,
                    cOrder: 5,
                    cKey: false,
                    cRadioDefaultOption: '',
                    cPageLevel: this.PageLevel,
                    cTabIndex: this.TabIndex,
                    cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
                },
                LookupTable: {
                    dataLookUp: {
                            LookUpCd: 'GetLookupTable',
                            ColumnDB: 'name',
                            InitialWhere: '',
                            ParamWhere: ''
                        },
                        cValidate: '',
                        cName: 'LookupTable',
                        cLabel: 'Lookup Table',
                        cOrder: 6,
                        cSelected: null,
                        cType: 'lookup',
                        cPageLevel: this.PageLevel,
                        cTabIndex: this.TabIndex,
                        cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
                },
                LookupField: {
                    cValidate: 'min:2|max:60',
                    cName: 'LookupField',
                    cLabel: 'Lookup Field',
                    // cLabelSize: 5,
                    cOrder: 7,
                    cKey: false,
                    cPageLevel: this.PageLevel,
                    cTabIndex: this.TabIndex,
                    cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
                },
                LookupCondition: {
                    cValidate: 'min:2|max:60',
                    cName: 'LookupCondition',
                    cLabel: 'Lookup Condition',
                    // cLabelSize: 5,
                    cOrder: 8,
                    cKey: false,
                    cPageLevel: this.PageLevel,
                    cTabIndex: this.TabIndex,
                    cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
                },
                DefaultDescs: {
                    cValidate: 'min:2|max:60',
                    cName: 'DefaultDescs',
                    cLabel: 'Default Description',
                    // cLabelSize: 5,
                    cOrder: 9,
                    cKey: false,
                    cPageLevel: this.PageLevel,
                    cTabIndex: this.TabIndex,
                    cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
                },
                DefaultNumeric: {
                    cValidate: 'min:2|max:60',
                    cName: 'DefaultNumeric',
                    cLabel: 'Default Numeric',
                    // cLabelSize: 5,
                    cOrder: 10,
                    cKey: false,
                    cPageLevel: this.PageLevel,
                    cTabIndex: this.TabIndex,
                    cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
                },
                DefaultDate: {
                    cValidate: 'min:2|max:60',
                    cName: 'DefaultDate',
                    cLabel: 'Default Date',
                    // cLabelSize: 5,
                    cOrder: 11,
                    cKey: false,
                    cPageLevel: this.PageLevel,
                    cTabIndex: this.TabIndex,
                    cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
                },
                Remarks: {
                    cValidate: 'min:2|max:60',
                    cName: 'Remarks',
                    cLabel: 'Remarks',
                    // cLabelSize: 5,
                    cOrder: 12,
                    cKey: false,
                    cPageLevel: this.PageLevel,
                    cTabIndex: this.TabIndex,
                    cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
                }
            }            
        }
    },
    computed: {
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
        M_PageSize(){

        },
        M_TabClick(){

        },
        M_Pagination(){

        },
        M_Advance_Filter(){

        },
        M_Refresh(){
            this.$parent.isDetail = false
            this.FormToABSList().doGetList('','refresh')
        },
        M_New(){
            this.$parent.state = 'NEW'
            this.$parent.isDetail = true
           


            this.M_SS_CustomField.Caption = ''
            this.M_SS_CustomField.DataType = null
            EventBus.$emit('ebSetValue' + this.PI.DataType.cName + '_' + this.PageLevel + '_' + this.TabIndex, {data: ''})
            this.M_SS_CustomField.Length = ''
            this.M_SS_CustomField.Mandatory = ''
            this.M_SS_CustomField.LookupStatus = ''
            this.M_SS_CustomField.LookupField = ''
            this.M_SS_CustomField.LookupTable = null
             EventBus.$emit('ebSetValue' + this.PI.LookupTable.cName + '_' + this.PageLevel + '_' + this.TabIndex, {data: ''})
            this.M_SS_CustomField.LookupCondition = ''
            this.M_SS_CustomField.DefaultDescs = ''
            // this.M_SS_CustomField.DefaultNumeric = ''
            // this.M_SS_CustomField.DefaultDate = ''
            this.M_SS_CustomField.Remarks = ''            

            this.FormToMasterPage().ValidasiPage()
            
            this.$nextTick().then(() => {
                document.getElementById("Caption").focus()
            })
        },
        M_Edit(){
            this.$nextTick().then(() => {
                document.getElementById("Caption").focus()
            })
        },
        M_Delete(){
            var data = this.FormToABSList().getRowSelected()
            var dataDelete = []

            data.forEach((value) => {
                dataDelete.push({
                    PageMasterSeq: this.DataRowPage1.PageMasterSeq,
                    FieldSequenceNo:  value.FieldSequenceNo,
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

                this.$parent.resultDelete("Deleting Data Successfully")
            })
        },
        M_Save(){
            this.M_SS_CustomField.OptionSeq = this.getOptionSeq().OptionSeq
            this.M_SS_CustomField.LineNo = this.$parent.data.PageOrder

            if(this.$parent.state !== 'NEW'){
                this.M_SS_CustomField.UserEdit = this.getDataUser().UserId
                this.M_SS_CustomField.FieldSequenceNo = this.FieldSequenceNo
                this.M_SS_CustomField.LastUpdateStamp = this.LastUpdateStamp
                this.postJSON(this.getUrlUpdate(), this.M_SS_CustomField)
                .then((response) => {
                    if(response == null) {
                        return
                    }

                    delete this.M_SS_CustomField['UserEdit']
                    delete this.M_SS_CustomField['FieldSequenceNo']
                    delete this.M_SS_CustomField['LastUpdateStamp']
                    
                    this.FormToABSList().doGetList('','eb_getList')

                    this.alertSuccess(response.Message)
                    .then(() => {
                        this.getToolbar().setButton(false)
                        this.$store.commit('setListDisable', false)
                        this.$store.commit('setStatus', 'view')
                        this.FormToABSList().doGetList('','eb_getList')                       
                    })
                })
            }
            else {//insert
                this.M_SS_CustomField.UserInput = this.getDataUser().UserId                
                this.postJSON(this.getUrlInsert(), this.M_SS_CustomField)
                .then((response) => {
                    if(response == null) {
                        return
                    }

                    this.FormToABSList().doGetList('','eb_getList')

                    this.$parent.isDetail = false
                    this.alertSuccess(response.Message)
                    .then(() => {
                        this.getToolbar().setButton(false)
                        this.$store.commit('setListDisable', false)
                        this.$store.commit('setStatus', 'view')
                        this.FormToABSList().doGetList('','eb_getList')
                    })
                })
            }

            this.FormToMasterPage().ValidasiPage()
        },
        paramFromParent(){
            this.$parent.isDetail = false
            let data = this.$store.getters.GetPage1Data

            this.propList.initialWhere = "PageMasterSeq = '" + data.PageMasterSeq + "'"
            this.ValKey = data.PageMasterSeq
            this.M_SS_CustomField.PageMasterSeq = data.PageMasterSeq
        
            this.FormToABSList().doGetList('','eb_getList')
            
        },
        rowClicked (record, index) {
            this.$parent.state = 'UPDATE'
            this.$parent.isDetail = true
            
            this.$store.commit('SetPage2Data', record)
            this.$store.commit('setEventStatus', 'rowClick')
            this.$store.commit('setLevel',this.PageLevel)
            
            this.FieldSequenceNo = record.FieldSequenceNo
            this.LastUpdateStamp = record.LastUpdateStamp

            this.getDataBy(record)

            //selalu taro paling bawah
            this.FormToMasterPage().ValidasiPage()
        },
        rowLink: function(url){
            this.$refs.modalTest.show()
        },
        getDataBy (record) {
            console.log(record)
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
               FieldSequenceNo: record.FieldSequenceNo,
                PageMasterSeq: record.PageMasterSeq
            }           

            this.postEncode( this.getUrlById(), param )
                .then( response => {
                // this.clearForm('edit')
                if(response == null) return
                var data = response.Data
                if(data.length > 0){
                    data = data[0]
                    this.$nextTick(() => {
                        
                        this.M_SS_CustomField.PageMasterSeq = data.PageMasterSeq
                        this.M_SS_CustomField.Caption = data.Caption
                        this.M_SS_CustomField.DataType = data.DataType
                        this.M_SS_CustomField.Length = data.Length
                        this.M_SS_CustomField.Mandatory = data.Mandatory
                        this.M_SS_CustomField.LookupStatus = data.LookupStatus
                        this.M_SS_CustomField.LookupTable = data.LookupTable
                        this.M_SS_CustomField.LookupField = data.LookupField                        
                        this.M_SS_CustomField.LookupCondition = data.LookupCondition
                        this.M_SS_CustomField.DefaultDescs = data.DefaultDescs                        
                        this.M_SS_CustomField.DefaultNumeric = data.DefaultNumeric
                        this.M_SS_CustomField.DefaultDate = data.DefaultDate
                        this.M_SS_CustomField.Remarks = data.Remarks

                        this.M_SS_CustomField_Temp.DefaultDescs = data.DefaultDescs
                        
                        //SetLookup
                        EventBus.$emit('ebSetValue' + this.PI.DataType.cName + '_' + this.PageLevel + '_' + this.TabIndex, {data: data.DataType, action: 'getByID'})
                        EventBus.$emit('ebSetValue' + this.PI.LookupTable.cName + '_' + this.PageLevel + '_' + this.TabIndex, {data: data.LookupTable, action: 'getByID'})
                                                
                    })
                    
                    this.IEBy.Input = data.userinput
                    this.IEBy.Edit = data.useredit
                }
            })
        },
        onChange (data) {            
            var from = data.from
            //DataType
            if (from == (this.PI.DataType.cName + "_" + this.PageLevel + "_" + this.TabIndex)) {               
                if(data.value && data.value.id !== ''){
                    this.M_SS_CustomField.DataType = data.value.id

                    if(data.value.id == 'D'){
                        this.DefaultDescs = true
                        this.DefaultNumeric = false
                        this.DefaultDate = false

                        if(this.M_SS_CustomField.DefaultDescs && this.M_SS_CustomField.DefaultDate && this.M_SS_CustomField.DefaultNumeric !=='' ){
                            this.M_SS_CustomField.DefaultDescs = this.M_SS_CustomField.DefaultDescs
                            this.M_SS_CustomField.DefaultDate = this.M_SS_CustomField.DefaultDate
                            this.M_SS_CustomField.DefaultNumeric = this.M_SS_CustomField.DefaultNumeric
                        } else {
                            this.M_SS_CustomField.DefaultDate = 'NULL'
                            this.M_SS_CustomField.DefaultNumeric = 'NULL'
                        }

                        // this.M_SS_CustomField_Temp.DefaultDescs
                    } else if(data.value.id == 'N') {
                        this.DefaultDescs = false
                        this.DefaultNumeric = true
                        this.DefaultDate = false


                        if(this.M_SS_CustomField.DefaultDescs && this.M_SS_CustomField.DefaultDate && this.M_SS_CustomField.DefaultNumeric !=='' ){
                            this.M_SS_CustomField.DefaultDescs = this.M_SS_CustomField.DefaultDescs
                            this.M_SS_CustomField.DefaultDate = this.M_SS_CustomField.DefaultDate
                            this.M_SS_CustomField.DefaultNumeric = this.M_SS_CustomField.DefaultNumeric
                        } else {
                            this.M_SS_CustomField.DefaultDescs = 'NULL'
                            this.M_SS_CustomField.DefaultDate = 'NULL'
                        }
                    } else if (data.value.id == 'A'){
                        this.DefaultDescs = false
                        this.DefaultNumeric = false
                        this.DefaultDate = true  
                        
                        if(this.M_SS_CustomField.DefaultDescs && this.M_SS_CustomField.DefaultDate && this.M_SS_CustomField.DefaultNumeric !=='' ){
                            this.M_SS_CustomField.DefaultDescs = this.M_SS_CustomField.DefaultDescs
                            this.M_SS_CustomField.DefaultDate = this.M_SS_CustomField.DefaultDate
                            this.M_SS_CustomField.DefaultNumeric = this.M_SS_CustomField.DefaultNumeric
                        } else {
                            this.M_SS_CustomField.DefaultDescs = 'NULL'
                            this.M_SS_CustomField.DefaultNumeric = 'NULL'
                        }
                    
                    }
                }
            } 
            
            //LookupTable
            else if (from == (this.PI.LookupTable.cName + "_" + this.PageLevel + "_" + this.TabIndex)) {
                if(data.value && data.value.id !== ''){
                    this.M_SS_CustomField.LookupTable = data.value.id
                }
            }

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
