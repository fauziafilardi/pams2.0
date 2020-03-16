<template>
    <div class="height--full">
        <HeaderFormListVuex2 :isProcess = "true" />
        <div class="content-app-form__body form-process">
            <div class="tab-list-process"> 
                <ABSListVuex
                    :prop = "propList"
                    :title = "''"
                    :isProcess = "true"
                    @rowClicked = "rowClicked"
                    @rowDblClicked = "doDoubleClick"
                    @rowLinkClick = "rowLink"
                    @pageSize = "M_PageSize"
                    @pagination = "M_Pagination"
                    @filter = "M_Advance_Filter"
                    @headTable = "M_Head_Table"
                />
                <div :style="'margin-top:10px;'" class="el" mousetip mousetip-msg="I'm a tooltip">               
                    <b-collapse id="collapse1" :visible="true">
                        <b-row  style="padding-left: 10px; padding-bottom: 10px; !important;">
                            <b-col md="12" id="col-left" class="bColMasterForm">	
                                <b-form :data-vv-scope="'FormScope_' + PageLevel + '_' + TabIndex" :data-vv-value-path="'FormScope_' + PageLevel + '_' + TabIndex">
                                    <b-row style="padding-left:10px;">
                                        <b-col md="12" id="col-left">
                                            <b-row>
                                                <b-col md=6>
                                                    <ABSinputDateVuex :prop="PI_PostingDate" v-model="PostingDate"/>
                                                </b-col>
                                            </b-row> 
                                            <b-row>
                                                <b-col  md="6">
                                                    <ABSInputSelectList @change="OntrxtypefromChange" :prop="PI_trxtypefrom" :value="trxtypefrom" :label="trxtypefromLabel" ref="ref_trxtypefrom"/>
                                                </b-col>
                                                <b-col  md="6">
                                                    <ABSInputSelectList @change="OntrxtypetoChange" :prop="PI_trxtypeto" :value="trxtypeto" :label="trxtypetoLabel" ref="ref_trxtypeto"/>
                                                </b-col>
                                            </b-row>                                     
                                        </b-col>
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
    data() {
        return {
            propList: {
                initialWhere: "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "'",
                // initialWhere: "",
                LineNo: 0,
                PageLevel: 1,
                TabIndex: 1
            },
		    FormType: "Process",
       
            IEBy: {Input: '', Edit: ''},
            trxtypefrom:'',
            trxtypefromLabel:'',
            trxtypeto:'',
            trxtypetoLabel:'',
            PI_PostingDate: {
                cValidate :'required', 
                cName: "PostingDate",
                cNameError: "Amortization Date",
                cLabel: "Amortization Date",
                cOrder: 1,
                cPageLevel: 1,
                cTabIndex: 1,
                cParentForm: "FormScope_1_1"
            },
            PI_trxtypefrom: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeBySubPortfolio'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' AND ModuleCd='AP' AND TrxClass='D'"   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'TransactionType,Descs' 
                        }, 
                cValidate :'', 
                cName: 'trxtype', 
                cLabel: 'Trans. Type From', 
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
                cParentForm: 'FormScope_1_1', 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: 'AP/AP_TransTypeSubportfolioMaintenance' ,
                cDisplayColumn: 'TransactionType,Descs' ,
            },
            PI_trxtypeto: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeBySubPortfolio'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' AND ModuleCd='AP' AND TrxClass='D'"   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'TransactionType,Descs' 
                        }, 
                cValidate :'', 
                cName: 'trxtype', 
                cLabel: 'Trans. Type To', 
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
                cParentForm: 'FormScope_1_1', 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: 'AP/AP_TransTypeSubportfolioMaintenance' ,
                cDisplayColumn: 'TransactionType,Descs' ,
            },
            PI_Detail: { 
                cValidate :'', 
                cName: 'Detail', 
                cId: 'rdbDetail', 
                cRadioOptions: [{ text: 'Detailed', value: 'Y' }, { text: 'Summarized', value: 'N' }], 
                cRadioDefaultOption: '', 
                cLabel:'Generated Billing', 
                cLabelSize: 4, 
                cOrder: 2, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_1_1' 
            },
            // BillingMonthTolerance: '',
            // ToleranceDate: 0,
            PostingDate: '',
            Detail:'N',
            // TrxTypeGroup: '',
            // TrxTypeGroupLabel: ''
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
        PageLevel () {
            return 1
        },
        TabIndex () {
            return 1
        },
  },
    methods: {
        OnDetailChange(){

        },     
        OntrxtypefromChange (data) {
        this.$nextTick(() => {
            this.trxtypefrom = data.id
            this.trxtypefromLabel = data.label
            if (this.inputStatus != "VIEW") {
//{trxtype}
            }
        })
        this.$forceUpdate()
        },
        OntrxtypetoChange (data) {
        this.$nextTick(() => {
            this.trxtypeto = data.id
            this.trxtypetoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{trxtype}
            }
        })
        this.$forceUpdate()
        },
        toToolbar() {
            // console.log(this.$children)
            return this.$children[0].$children[0]
        },
        toList() {
            return this.$children[1]
        },
        Loader() {
            return this.$children[3]
        },
        rowClicked (record, index) {},
        doDoubleClick () {},
        rowLink (url) {},
        M_PageSize () {},
        M_Pagination () {},
        M_Advance_Filter () {},
        M_Head_Table () {},
        M_Search(data){
           this.toList().doGetList(data,'eb_getList')
       },
       M_ClearForm(){
           this.PostingDate = ""
           this.Detail = "N"
       },
         M_Post(dt) {
        //    alert('post')
        var data = this.toList().getRowSelected()
        var dataPost = []

        var postingdt = this.PostingDate == '' || this.PostingDate == null ? 'NULL' : this.PostingDate
            // console.log(postingdt)
            data.forEach((value) => {
                // dt = dt + value.RowId + ','
                // console.log(value)
                dataPost.push({
                    _Message_: "",//"Generated Amortization For Creditor : "+value.CreditorCd,
                    SubPortfolioCd : this.getDataUser().SubPortfolioCd,
                    TrxTypeFrom : this.trxtypefrom,
                    TrxTypeTo : this.trxtypeto,
                    GenerateDate : postingdt,
                    CreditorCd : value.CreditorCd,                    
                    UserInput : this.getDataUser().UserId,
                    OutputMessage_Output:''
                })
            })

            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: 0,
                Data: dataPost
            }
            
             this.postJSONMulti(this.getUrlPostMulti(), param).then(response => {
                if (response == null) return
                if(response.Data.length==0){
                    this.$parent.resultPost()
                }
                    this.BillingDate = ''
                    // this.$store.commit('setStatus', 'view')
                    this.$store.commit('setStatus', 'new')
                    this.$store.commit('setEventStatus', 'POST')
                    this.toList().doGetList("", "eb_getList")
                
            })
        },
        setToolbarButton() {},
        
    },
    beforeCreate: function () {
    },
    created: function() {
    },
    beforeMount: function() {
    },
    mounted: function() {
        this.$store.commit('setFormType','Process')
        this.$store.commit('setStatus', 'new')
        this.$store.commit('setListDisable', false)
        this.$store.commit('setLevel', 1)
        this.$store.commit('setTab', 1)
        this.toToolbar().ProcessPS()
        this.hideSideBarMenu()
        this.toList().doGetList('','eb_getList')
        
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

