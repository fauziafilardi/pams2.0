<template>
    <div>
      <div :style="'margin-top:10px;'" class="el" mousetip mousetip-msg="I'm a tooltip">          
          <b-collapse id="collapse1" :visible="true">
            <b-row  style="padding-left: 10px; padding-bottom: 10px; !important;">     
              <b-col md="12" id="col-left" class="bColMasterForm">	
                <b-form :data-vv-scope="'FormScope_' + PageLevel + '_' + TabIndex" :data-vv-value-path="'FormScope_' + PageLevel + '_' + TabIndex">
                  <ABSGrid
                    :prop="param"
                    @changeCheckbox="changeCheckbox"
                    @changeCheckbox_status="changeCheckbox_status"
                    @onBlur="onBlur"                    
                    :PageLevel="PageLevel"
                    :TabIndex="TabIndex"
                    v-model="dataDetail"
                    ref="ref_GridLooRental"
                  />
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
        data () {
            return {
                FormType: "Grid",
                Module:"AP",
                dataDetail: [],
                CreditorCd: '',
                DebitNo: '',
                param: {
                    cDisplayColumn: 'creditno,referenceno,descs,amt=decimal,withholdingamt=decimal,outstandingamt=decimal,allocationamt=decimal,status,balanceamt=decimal,timeedit',
                    showCheckBoxDelete: false,
                    showNumber: true,
                    // divStyle: '185',
                    comp: [
                        {
                            slot: 'allocationamt',
                            compType: 'ABSTextBoxOnly',
                            cIsAlwaysShow: false,
                            cHideRowColumnCSS: true,
                            cValidate :'', 
                            cName: 'allocationamt', 
                            cLabel: '', 
                            cLabelSize: 4, 
                            cOrder: 0, 
                            cKey: false, 
                            cType: 'decimal',
                            cVisible: true, 
                            cProtect: false, 
                            cPageLevel: this.PageLevel, 
                            cTabIndex: this.TabIndex, 
                            cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex  ,
                            cLastLabelShow: false,
                            cWhenLabel: false,
                            cRowDisable: []
                        },
                        {
                        slot: 'status',
                        compType: 'ABSinputCheckBoxOnly',
                        cName: 'status',
                        cKey: false,
                        cProtect: false,
                        checked: 'Y',
                        unchecked: 'N'
                        // cValidate :'',
                        // cLabel: '',
                        // cLabelSize: 4,
                        // cOptions: [{text:'', value: 'Y'}],
                        // cOrder: 0,
                        // cKey: false,
                        // cVisible: true,
                        // cProtect: false,
                        // cDefault: '',
                        // cPageLevel: this.PageLevel,
                        // cTabIndex: this.TabIndex,
                        // cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                        // cHideRowColumnCSS: true,
                        // cRowDisable: [] 
                    },
                    ]
                },
            }
        },
        watch : {
            dataDetail (newData, oldData) {                
                if (newData.length > 0) {
                this.isEditMode = true
                } else {
                this.isEditMode = false
                }
            }
        },
        computed : {
            inputStatus() {
                if (this.$store.getters.getLevel == this.PageLevel && this.$store.getters.getTab == this.TabIndex) {
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
        methods : {
            // onBlur () {
            //     // alert('blur')
            // },
            changeCheckbox (){
                // alert('cekbox')
            },
            changeCheckbox_status(index,value){
                if(value == 'Y'){
                    this.dataDetail[index].allocationamt = this.dataDetail[index].outstandingamt
                }else{
                    this.dataDetail[index].allocationamt = this.isCurrency(0, this.decimal)
                }
            },
            setToolbarButton () {
            },
            M_Head_Table () {
            },
            M_PageSize(){
            },
            M_TabClick(){
                // this.getDataBy(this.$store.getters.GetPage1Data)
                // this.paramFromParent()
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
                // this.paramFromParent()
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
                
                let record = this.$store.getters.GetPage1Data
                this.getDataBy2(record)
            },
            M_Insert() {   
            },
            M_Update () {  
                var dataUpdate = []           
                var param1 = []
                for (let x = 0; x < this.dataDetail.length; x++) {


                    param1.push({
                        _Method_: 'UPDATE',
                        _LineNo_: this.$parent.data.PageOrder,
                        SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                        DebitNoDetail: this.dataDetail[x].debitno,
                        CreditNo: this.dataDetail[x].creditno,
                        AllocationAmt: this.replaceAllString(this.dataDetail[x].allocationamt, ',', ''),                        
                        UserEdit: this.getDataUser().UserId,
                        CurrencyCd: this.dataDetail[x].currencycd,
                        CreditorCd: this.CreditorCd,
                        DebitNo: this.DebitNo
                    })   
                    // param1[x]._Method_ = 'UPDATE'                                  
                }
                
                dataUpdate.push({
                    A_Looping: param1
                })

                var param = {
                    OptionSeq: this.getOptionSeq().OptionSeq,
                    LineNo: this.$parent.data.PageOrder,
                    Data: dataUpdate
                }

                this.postJSONMulti (this.getUrlProsesDataPostMulti(), param)
                .then(response => {
                    if (response == null) return

                    var msg = ' Update Success.'
                    // if (this.isEditMode) {
                    //     msg = 'Update' + msg
                    // } else {
                    //     msg = 'Insert' + msg
                    // }
                    this.alertSuccess(msg)
                    this.$store.commit('setListDisable', false)
                    this.$store.commit('setStatus', 'view')
                    this.getToolbar().setButton(false)
                    this.refreshListParent(true)
                    this.$refs.ref_GridLooRental.doGetList('','eb_getList')
                })              
            },
            M_ClearForm(){

            },
            M_New(){
                
            },
            M_Edit(){
                let record = this.$store.getters.GetPage1Data
                this.CreditorCd = record.CreditorCd
                this.DebitNo = record.DebitNo
            },
            getDataBy(){
                this.getDataBy2()
            },
            getDataBy2 (record) {                
                var parameter = {
                    OptionSeq: this.getOptionSeq().OptionSeq,
                    LineNo: this.$parent.data.PageOrder,
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    CurrencyCd: record.CurrencyCd,
                    DebitNo: record.DebitNo,
                    CreditorCd: record.CreditorCd
                }
                
                this.param.propGetDataBy = parameter
                this.param.NoGetById = '2'
                this.$refs.ref_GridLooRental.doGetList('','eb_getList')

                
            },
        },
        created: function () {            
        },
        beforeMount: function() {
        },
        mounted: function() {   
            // this.toToolbar().doEdit(true)
                    
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