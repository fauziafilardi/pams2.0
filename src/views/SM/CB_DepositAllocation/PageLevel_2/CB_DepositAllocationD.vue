<template>
    <div>        
    <!-- <ABSListVuex
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
    /> -->
    <ABSGrid
        :prop="param"
        @changeCheckbox="changeCheckbox"
        :PageLevel="PageLevel"
        :TabIndex="TabIndex"
        v-model="dataDetail"
    />
        <!-- @changeTextfield="changeTextField" -->


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
    props: {PageLevel:'', TabIndex: '', data: ''},
    data() {
        return {
			ValKey:null,
            FormType: "Grid",
			Module:"SM",
            // propList: {
            //     initialWhere:" TotalAmount > AllocatedByOtherDocAmt ",
            //     LineNo: this.$parent.data.PageOrder,
            //     PageLevel: this.PageLevel,
            //     TabIndex: this.TabIndex, 
            //     OrderBy: '', 
            //     SourceField: '', 
            //     ParamView: ''
            // },
       
            IEBy: {Input: '', Edit: ''},   			

            M_CB_DepositAllocationD :{
            },

			PTAnalysis: {
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cPageMasterSeq: this.data.PageMasterSeq,
                cFormPageNo: this.data.PageOrder
            },
            dataDetail: [],
            param: {
                propList: {
                    initialWhere:" TotalAmount > AllocatedByOtherDocAmt ",
                    LineNo: this.$parent.data.PageOrder,
                    OrderBy: '', 
                    SourceField: '', 
                    ParamView: ''
                },
                cDisplayColumn: 'TransType,Description,DueDate,TotalAmount=decimal,Balance=decimal,Allocated=decimal',                
                showCheckBoxDelete: false,
                comp: [
                    // Allocated: 0
                    // AllocatedByOtherDocAmt: 5000000
                    // Balance: 190000000
                    // Description: "00099 / DP01 - Down Payment ( 2 of 10 )"
                    // DueDate: "11/12/2017"
                    // LastUpdateStamp: 850452257
                    // No: 1
                    // PaymentReceivedSequenceNo: 0
                    // PaymentSequenceNo: 267
                    // Priority: 9
                    // SalesStatus: "Y"
                    // ScheduleStatus: "N"
                    // TimeEdit: "18/09/2017"
                    // TotalAmount: 195000000
                    // TransType: "DP01"

                    // {
                    //     slot: '',
                    //     cType: 'None',
                    // },
                    // {
                    //     slot: 'Allocated',
                    //     cType: 'ABSinputTextVuex',
                    //     cValidate: '',
                    //     cLabel: 'Doc. No',
                    //     cLabelSize: 4,
                    //     cValue: '',
                    //     cOrder: 0,
                    //     cKey: false,
                    //     cVisible: true,
                    //     cProtect: true,
                    //     cDefault: '',
                    //     cPageLevel: this.PageLevel,
                    //     cTabIndex: this.TabIndex,
                    //     cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
                    // },
                    {
                        slot: 'Allocated',
                        compType: 'ABSTextBoxOnly',
                        cIsAlwaysShow: false,
                        cValidate :'', 
                        cName: 'Allocated', 
                        cLabel: '', 
                        cLabelSize: 4, 
                        cOrder: 0, 
                        cKey: false, 
                        cType: 'decimal',
                        cVisible: true, 
                        cProtect: false, 
                        cPageLevel: this.PageLevel, 
                        cTabIndex: this.TabIndex, 
                        cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex  
                    },
                    {
                        slot: 'CheckBoxCustom',
                        compType: 'CheckBoxCustom'
                    }
                ]
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
        changeTextField () {

        },
		changeCheckbox (index, isChecked) {
            if (isChecked) {
                this.dataDetail[index].Allocated = this.dataDetail[index].Balance
            }
        },
		setToolbarButton () {
            // this.getToolbar().isNew = true
            // this.getToolbar().statusFunction[6].disabled = true
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
            this.param.propList.ParamView = "'" + this.getDataUser().SubPortfolioCd + "', '" + this.DataRowPage1.PaymentNo + "', '" + this.DataRowPage1.DebtorCd + "', '" + this.DataRowPage1.CurrencyCd + "'"
            this.param.propList.OrderBy = "Priority ASC, PaymentSequenceNo ASC"
            this.$children[0].doGetList('','eb_getList')

            // this.header = [
            //     'no',
            //     'revenueyear',
            //     'revenuemonth',
            //     'revenueamt',
            //     'allocatednetamt',
            //     'allocatedwhtamt',
            //     'currentnetallocamt',
            //     'currentwhtallocamt'
            // ]

            // var param = {
            //     OptionSeq: this.getOptionSeq().OptionSeq,
            //     LineNo: this.$parent.data.PageOrder
				
            // }

            // this.postEncode( this.getUrlById(), param )
            // .then(response => {
            //     if(response == null) return
                
            //     var data = response.Data
            //     this.body = data

            // })
        },		       
        M_Insert() {
            // var param = {			
            //     OptionSeq: this.getOptionSeq().OptionSeq,
            //     LineNo: this.$parent.data.PageOrder,
            //     SubportfolioCd: this.getDataUser().SubPortfolioCd,
            //     PaymentNo: this.M_CB_DepositAllocationD.paymentno,
            //     PaymentSequenceNo: this.M_CB_DepositAllocationD.paymentsequenceno,
            //     PaymentReceivedSequenceNo: this.M_CB_DepositAllocationD.paymentreceivedsequenceno,
            //     ReceivedAmt: this.M_CB_DepositAllocationD.receivedamt,
            //     UserEdit: this.getDataUser().UserId                 
            // }

            // this.postJSON(this.getUrlInsert(), param)
            // .then((response) => {
            //     if(response == null) return

			// 	//kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
            //     this.$parent.resultInsert(response.Message)
					
				
            // })

            var dataToSave = []
            for (var x = 0; x < this.dataDetail.length; x++) {
                var data = this.dataDetail[x]
                dataToSave.push({
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    PaymentNo: this.DataRowPage1.PaymentNo,
                    PaymentSequenceNo: data.PaymentSequenceNo,
                    PaymentReceivedSequenceNo: data.PaymentReceivedSequenceNo,
                    ReceivedAmt: this.replaceAllString(data.Allocated, ',', '', 'number'),
                    UserEdit: this.getDataUser().UserId,
                    _Message_: 'Description: ' + data.Description
                })
            }

            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                Data: dataToSave
            }

            this.postJSONMulti(this.getUrlUpdateMulti(), param)
            .then((response) => {
                if (response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                // this.$parent.resultUpdate(response.Message)
				
            })
        },
        M_Update() {
        },
		M_ClearForm(){
            this.M_CB_DepositAllocationD = {

                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_CB_DepositAllocationD.currencycd = data.CurrencyCd 



        },
        M_Edit(){
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
                if(response == null) return

                var data = response.Data[0]
this.M_CB_DepositAllocationD = {

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

