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
                            <ABSinputTextVuex :prop="PI.QueryName" v-model="M_SS_PageMasterFileInfoH.QueryName"/>
                            <ABSinputRadioButtonVuex :prop="PI.QueryType" v-model="M_SS_PageMasterFileInfoH.QueryType"/>
                            <ABSinputTextVuex :prop="PI.SourceTable" v-model="M_SS_PageMasterFileInfoH.SourceTable"/>
                            <ABSinputTextVuex :prop="PI.PageOrder" v-model="M_SS_PageMasterFileInfoH.PageOrder"/>
                            <ABSinputRadioButtonVuex :prop="PI.FilterBySubPortfolio" v-model="M_SS_PageMasterFileInfoH.FilterBySubPortfolio"/>
                            <ABSinputTextVuex :prop="PI.SubPortfolioColumnName" v-model="M_SS_PageMasterFileInfoH.SubPortfolioColumnName"/>
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
            M_SS_PageMasterFileInfoH: {
                QueryName:null,
                QueryType:null,
                SourceTable:null,
                PageOrder:null,
                FilterBySubPortfolio:null,
                SubPortfolioColumnName:null
            },
            IEBy: {Input: '', Edit: ''},
            PI: {
                QueryName: {
                    cValidate: 'min:2|max:60',
                    cName: 'QueryName',
                    cLabel: 'Query Name',
                    // cLabelSize: 5,
                    cOrder: 1,
                    cKey: false,
                    cPageLevel: this.PageLevel,
                    cTabIndex: this.TabIndex,
                    cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
                },
                QueryType: {
                    cId: 'rdQueryType',
                    cName: 'QueryType',
                    cRadioOptions: [
                                { text: 'List', value: 'L' },
                                { text: 'Grid', value: 'G' }
                            ],
                    cLabel: 'Query Type',
                    //cLabelSize: 5,
                    cOrder: 2,
                    cKey: false,
                    cRadioDefaultOption: '',
                    cPageLevel: this.PageLevel,
                    cTabIndex: this.TabIndex,
                    cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
                },
                SourceTable: {
                    cValidate: 'min:2|max:60',
                    cName: 'SourceTable',
                    cLabel: 'Source Table',
                    // cLabelSize: 5,
                    cOrder: 3,
                    cKey: true,
                    cPageLevel: this.PageLevel,
                    cTabIndex: this.TabIndex,
                    cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
                },
                PageOrder: {
                    cValidate: 'min:1|max:60',
                    cName: 'PageOrder',
                    cLabel: 'Page Order',
                    // cLabelSize: 5,
                    cOrder: 4,
                    cKey: false,
                    cPageLevel: this.PageLevel,
                    cTabIndex: this.TabIndex,
                    cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
                },
                FilterBySubPortfolio: {
                    cId: 'rdFilterBySubPortfolio',
                    cName: 'FilterBySubPortfolio',
                    cRadioOptions: [
                                { text: 'Yes', value: 'Y' },
                                { text: 'No', value: 'N' }
                            ],
                    cLabel: 'Filter By SubPortfolio',
                    //cLabelSize: 5,
                    cOrder: 5,
                    cKey: false,
                    cRadioDefaultOption: '',
                    cPageLevel: this.PageLevel,
                    cTabIndex: this.TabIndex,
                    cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
                },
                SubPortfolioColumnName: {
                    cValidate: 'min:2|max:60',
                    cName: 'SubPortfolioColumnName',
                    cLabel: 'Sub Column Name',
                    // cLabelSize: 5,
                    cOrder: 6,
                    cKey: false,
                    cPageLevel: this.PageLevel,
                    cTabIndex: this.TabIndex,
                    cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
                }
            }            
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
           
            this.M_SS_PageMasterFileInfoH.QueryName = ''
            this.M_SS_PageMasterFileInfoH.QueryType = ''
            this.M_SS_PageMasterFileInfoH.SourceTable = ''
            this.M_SS_PageMasterFileInfoH.PageOrder = ''
            this.M_SS_PageMasterFileInfoH.FilterBySubPortfolio = ''
            this.M_SS_PageMasterFileInfoH.SubPortfolioColumnName = ''            

            this.FormToMasterPage().ValidasiPage()
            
            this.$nextTick().then(() => {
                document.getElementById("QueryName").focus()
            })
        },
        M_Edit(){
            this.$nextTick().then(() => {
                document.getElementById("QueryName").focus()
            })
        },
        M_Delete(){
            var data = this.FormToABSList().getRowSelected()
            var dataDelete = []

            data.forEach((value) => {
                dataDelete.push({
                    PageMasterSeq: value.PageMasterSeq,
                    QuerySequenceNo:  value.QuerySequenceNo,
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
            this.M_SS_PageMasterFileInfoH.OptionSeq = this.getOptionSeq().OptionSeq
            this.M_SS_PageMasterFileInfoH.LineNo = this.$parent.data.PageOrder

            if(this.$parent.state !== 'NEW'){
                this.M_SS_PageMasterFileInfoH.UserInput = this.getDataUser().UserId
                this.M_SS_PageMasterFileInfoH.QuerySequenceNo = this.QuerySequenceNo
                this.postJSON(this.getUrlUpdate(), this.M_SS_PageMasterFileInfoH)
                .then((response) => {
                    if(response == null) {
                        return
                    }

                    delete this.M_SS_PageMasterFileInfoH['UserInput']
                    delete this.M_SS_PageMasterFileInfoH['QuerySequenceNo']

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
                this.M_SS_PageMasterFileInfoH.UserInput = this.getDataUser().UserId                
                this.postJSON(this.getUrlInsert(), this.M_SS_PageMasterFileInfoH)
                .then((response) => {
                    if(response == null) {
                        return
                    }
                    delete this.M_SS_PageMasterFileInfoH['UserInput']
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
            this.M_SS_PageMasterFileInfoH.PageMasterSeq = data.PageMasterSeq
        
            this.FormToABSList().doGetList('','eb_getList')
        },
        rowClicked (record, index) {
            this.$parent.state = 'UPDATE'
            this.$parent.isDetail = true
            
            this.$store.commit('SetPage2Data', record)
            this.$store.commit('setEventStatus', 'rowClick')
            this.$store.commit('setLevel',this.PageLevel)

            this.QuerySequenceNo = record.QuerySequenceNo

            this.getDataBy(record)

            //selalu taro paling bawah
            this.FormToMasterPage().ValidasiPage()
        },
        rowLink: function(url){
            this.$refs.modalTest.show()
        },
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                PageMasterSeq: record.PageMasterSeq,
                QuerySequenceNo: record.QuerySequenceNo
            }           

            this.postEncode( this.getUrlById(), param )
                .then( response => {
                // this.clearForm('edit')
                if(response == null) return
                var data = response.Data
                if(data.length > 0){
                    data = data[0]
                    this.$nextTick(() => {

                        this.M_SS_PageMasterFileInfoH.PageMasterSeq = data.PageMasterSeq                        
                        this.M_SS_PageMasterFileInfoH.QueryName = data.QueryName
                        this.M_SS_PageMasterFileInfoH.QueryType = data.QueryType
                        this.M_SS_PageMasterFileInfoH.SourceTable = data.SourceTable
                        this.M_SS_PageMasterFileInfoH.PageOrder = data.PageOrder
                        this.M_SS_PageMasterFileInfoH.FilterBySubPortfolio = data.FilterBySubPortfolio
                        this.M_SS_PageMasterFileInfoH.SubPortfolioColumnName = data.SubPortfolioColumnName
                                                
                    })
                    
                    this.IEBy.Input = data.userinput
                    this.IEBy.Edit = data.useredit
                }
            })
        },
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
