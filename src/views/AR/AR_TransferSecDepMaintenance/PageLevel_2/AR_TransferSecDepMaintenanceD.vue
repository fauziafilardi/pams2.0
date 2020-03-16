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
            FormType: "View",
			Module:"AR",
            propList: {
                initialWhere:"SequenceNo = '" + this.ValKey + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_AR_TransferSecDepMaintenanceD :{
                sequenceno: 0,
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                transferdate: '',
                subportfolioto: '',
                dntransactiontype: '',
                dnaccountcd: '',
                altransactiontype: '',
                bankcd: '',
                cbtrxtype: '',
                gltrxtype: '',
                debitaccountcd: '',
                creditaccountcd: '',
                status: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,

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
		return this.$store.getters.GetPage2Data
	},
    DataRowPage1(){
		return this.$store.getters.GetPage1Data
	}
	,GetDataBy1(){
		return this.$store.getters.GetPage1GetDataBy
	}
  },
    methods: {
		
		setToolbarButton () {
        //    this.getToolbar().statusFunction[0].disabled = true
        //    this.getToolbar().statusFunction[1].disabled = true
        //    this.getToolbar().statusFunction[2].disabled = true           
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
            this.M_AR_TransferSecDepMaintenanceD.sequenceno = data.SequenceNo 
            this.propList.initialWhere =" SequenceNo = '" + data.SequenceNo + "' "

            this.FormType = "View"
	        this.$store.commit('setFormType','View')
            this.getToolbar().ProcessPS()
        

            this.FormToABSList().doGetList('','eb_getList')
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
            this.M_AR_TransferSecDepMaintenanceD = {
                sequenceno: 0,
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                transferdate: '',
                subportfolioto: '',
                dntransactiontype: '',
                dnaccountcd: '',
                altransactiontype: '',
                bankcd: '',
                cbtrxtype: '',
                gltrxtype: '',
                debitaccountcd: '',
                creditaccountcd: '',
                status: '',
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
            this.M_AR_TransferSecDepMaintenanceD.sequenceno = data.SequenceNo 



        },
        M_Edit(){
        },
        M_Delete(dt){
        },        
        getDataBy (record) {
//             var param = {
//                 OptionSeq: this.getOptionSeq().OptionSeq,
//                 LineNo: this.$parent.data.PageOrder
				
//             }

//             this.postEncode( this.getUrlById(), param )
//             .then(response => {
//                 if(response == null) return

//                 var data = response.Data[0]
// this.M_AR_TransferSecDepMaintenanceD = {
//                 sequenceno: data.sequenceno,
//                 subportfoliocd: data.subportfoliocd,
//                 transferdate: data.transferdate,
//                 subportfolioto: data.subportfolioto,
//                 dntransactiontype: data.dntransactiontype,
//                 dnaccountcd: data.dnaccountcd,
//                 altransactiontype: data.altransactiontype,
//                 bankcd: data.bankcd,
//                 cbtrxtype: data.cbtrxtype,
//                 gltrxtype: data.gltrxtype,
//                 debitaccountcd: data.debitaccountcd,
//                 creditaccountcd: data.creditaccountcd,
//                 status: data.status,
//                 userinput: data.userinput,
//                 useredit: data.useredit,
//                 timeinput: data.timeinput,
//                 timeedit: data.timeedit,
//                 lastupdatestamp: record.LastUpdateStamp,
//                 rowid: data.rowid
//                     }
                 

  

//                 this.IEBy.Input = data.userinput
//                 this.IEBy.Edit = data.useredit

//             })
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

