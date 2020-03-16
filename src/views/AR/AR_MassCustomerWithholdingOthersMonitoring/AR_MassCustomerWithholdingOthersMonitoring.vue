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
                                            <b-col  md="6">
                                                <ABSinputTextVuex :prop="PI_CustomerWithholdingNo" v-model="CustomerWithholdingNo"  ref="ref_debitno"/>
                                            </b-col>
                                        </b-row>
                                        <b-row>
                                            <b-col md=6>
                                                <ABSinputDateVuex :prop="PI_WithholdingDate" v-model="WithholdingDate"/>
                                            </b-col>
                                        </b-row>
                                        <b-row>
                                            <b-col  md="6">
                                                <ABSinputTextVuex :prop="PI_BaseTaxRate" v-model="BaseTaxRate"  ref="ref_debitno"/>
                                            </b-col>
                                        </b-row>
                                        <b-row>
                                            <b-col md="6">
                                                <b-row>
                                                    <b-col md="4" class="lbl-col-align"></b-col>                                                
                                                    <b-col><label class="lbl-value-view-form">(Value 0 will default to Tax Currency Rate value)</label></b-col>
                                                </b-row>                                              
                                            </b-col>
                                        </b-row>
                                        <b-row>
                                            <b-col  md="6">
                                                <ABSinputTextVuex :prop="PI_TotalWithholding" v-model="TotalWithholding"  ref="ref_debitno"/>
                                            </b-col>
                                        </b-row>
                                        <b-row>
                                            <b-col  md="6">
                                                <ABSinputTextVuex :prop="PI_TotalWithholdingBaseAmt" v-model="TotalWithholdingBaseAmt"  ref="ref_debitno"/>
                                            </b-col>
                                        </b-row>
                                        <b-row>
                                            <b-col md="6">
                                                <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="Remarks"  ref="ref_remarks" />
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
                initialWhere: "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND AllocatedAmt <> ChargeAmt",
                // initialWhere: "",
                LineNo: 0,
                PageLevel: 1,
                TabIndex: 1
            },
		    FormType: "Process",
       
            IEBy: {Input: '', Edit: ''},

            PI_CustomerWithholdingNo: {
                cValidate :'', 
                cName:'CustomerWithholdingNo', 
                cLabel:'Customer Withholding No', 
                cOrder:0, 
                cProtect: false,
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1
            },
            PI_WithholdingDate: {
                cValidate :'required', 
                cName: "WithholdingDate",
                cNameError: "Withholding Date",
                cLabel: "Withholding Date",
                cOrder: 1,
                cPageLevel: 1,
                cTabIndex: 1,
                cParentForm: "FormScope_1_1"
            },
            PI_BaseTaxRate: {
                cValidate :'', 
                cName:'BaseTaxRate', 
                cLabel:'Base Tax Rate', 
                cOrder:0, 
                cProtect: false,
                cType: 'decimal',
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1
            },
            PI_TotalWithholding: { 
                cValidate :'required|min_value:1', 
                cName:'TotalWithholding', 
                cLabel:'Total Withholding', 
                cOrder:10, 
                cType: 'decimal',
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1,
                cProtect: true 
            },
            PI_TotalWithholdingBaseAmt: { 
                cValidate :'required|min_value:1', 
                cName:'TotalWithholdingBaseAmt', 
                cLabel:'Total Withholding (Base Amount)', 
                cOrder:10, 
                cType: 'decimal',
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1 ,
                cProtect: true
            },
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks', 
                cLabelSize: 4, 
                cOrder:32, 
                cKey: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible: true, 
                cResize: false, 
                cReadOnly: false, 
                cRows: 3, 
                cMaxRows: 3, 
                cSize: 'md', 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1, 
            },
            CustomerWithholdingNo:'',
            WithholdingDate:'',
            BaseTaxRate:'',
            TotalWithholding:0,
            TotalWithholdingBaseAmt:0,
            Remarks:''
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
           this.WithholdingDate = ""
           this.CustomerWithholdingNo = ""
           this.BaseTaxRate = ""
           this.Remarks = ""
       },
        M_Post() {
            var dataPost = []
            var data = this.toList().getRowSelected()
            var dt = ''
            
            var GenerateDate = this.GenerateDate == '' || this.GenerateDate == null ? 'NULL' : this.GenerateDate

            data.forEach((value) => {
                console.log(value)

                dataPost.push({
                    SubportfolioCd: this.getDataUser().SubPortfolioCd,
                    DebitNo: value.DebitNo,
                    UserEdit: this.getDataUser().UserId,
                    WithholdingDate: this.WithholdingDate,
                    WithholdingReferenceNo: this.CustomerWithholdingNo,
                    WithHoldingStatus: 'T',
                    BaseTaxCurrencyRate: this.BaseTaxRate,
                    Remarks: this.Remarks,
                    LastUpdateStamp: value.LastUpdateStamp,                    
                    _Message_: "Withholding No : '"+ this.CustomerWithholdingNo +"' Assigned For Invoice No: '"+ value.DebitNo +"'" 
                })
            })

            var param ={
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: 0,
                Data:dataPost
            }

            this.postJSONMulti(this.getUrlPostMulti(), param).then(response => {
                
                if (response == null) return
                // if(response.Data.length==0){
                    // this.alertSuccess(response.Data[0].OutputMessage)
                // }
                this.M_ClearForm()
                this.$store.commit('setStatus', 'view')
                this.$store.commit('setStatus', 'new')
                this.$store.commit('setEventStatus', 'POST')
                this.toList().doGetList("", "eb_getList")
            })
            
            // alert('test')
            // var data = this.toList().getRowSelected()     
            // console.log('data')
            // console.log(data)      
            // // return
            
            // // var dt = ''
            
            // // data.forEach((value) => {
            // //     dt = dt + value.RowId + ','
            // // })
            
            // // dt = dt.slice(0,-1)


            // var param = {
            //     OptionSeq: this.getOptionSeq().OptionSeq,
            //     LineNo: 0,
            //     SubPortfolioCd:this.getDataUser().SubPortfolioCd,
            //     DebitNo: data[0].DebitNo,
            //     UserEdit: this.getDataUser().UserId,
            //     WithHoldingDate: this.WithholdingDate,
            //     WithholdingReferenceNo: this.CustomerWithholdingNo,
            //     WithHoldingStatus: 'T',                
            //     BaseTaxCurrencyRate: this.BaseTaxRate,                
            //     Remarks: this.Remarks,
            //     LastUpdateStamp: data[0].LastUpdateStamp
            // }
            // console.log('param')
            // console.log(param)            

            // // this.postJSON(this.getUrlUpdate(), param)
            // // .then((response) => {
            // //     if(response == null) return

            // //     this.$parent.resultUpdate(response.Message)
            // // })

            // this.postJSON(this.getUrlUpdate(), param)
            // .then((response) => {
            //     if(response == null) return

            //     this.alertSuccess(response.Message)
            //     .then(() => {
            //         this.getToolbar().setButton(false)
            //         this.$store.commit('setStatus', 'process')

            //         this.FormToMasterPage().ValidasiPage()
					
            //     })
            // })
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

