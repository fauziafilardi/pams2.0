<template>
    <div>        


        <div :style="'margin-top:10px;'" class="el" mousetip mousetip-msg="I'm a tooltip">
            <div class="div-collapse" v-b-toggle.collapse1>
                <span class="master-span" v-show="IEBy.Input && IEBy.Edit">
                    Input By : {{IEBy.Input}} | Edit By : {{IEBy.Edit}} <font-awesome-icon icon="sort-down" class="icon-style-1__master" /> 
                </span>
            </div>
            <b-collapse id="collapse1" :visible="true">
                <b-row  style="padding-left: 10px; padding-bottom: 10px; !important;">     
					<b-col md="12" id="col-left" class="bColMasterForm">	
						<b-form v-on:submit.prevent :data-vv-scope="'FormScope_' + PageLevel + '_' + TabIndex" :data-vv-value-path="'FormScope_' + PageLevel + '_' + TabIndex">
                            <b-row style="padding-left:10px;">					
                                <b-col md="12" id="col-left"> <!-- table open -->
                                   <b-row style="padding-left:10px;">					
                                <b-col md="12" id="col-left">                                    
                                    <b-row style="padding-top:10px; padding-right: 10px; padding-left: 25px; padding-bottom: 10px; !important;">
                                        Subportfolio : {{subportfolio}}
                                    </b-row>
                                    <b-row>
                                    <b-col md="4" style="padding-right: 15px !important;">
                                        <input
                                            v-model="search"
                                            type="text"
                                            class="form-control text-field-form"
                                            style="margin-left: 20px !important;"
                                            placeholder="Search..."
                                            autofocus
                                            autocomplete="off"   
                                            :disabled="ButtonDisabled"                                         
                                            v-on:keyup="onSearchEnter"
                                            ref="ref_search"                                            
                                            >
                                            <!-- <ABSTextBoxOnly
                                            @keyup.enter.native="onSearchEnter"
                                            @onEnterPress="onSearchEnter"
                                          :prop="PI_Search"
                                          v-model="search"
                                          :ref="'ref_search'"
                                        /> -->
                                    </b-col>
                                    </b-row>
                                    <b-row style="padding-top:10px; padding-right: 10px; padding-left: 20px; padding-bottom: 10px; !important;">                                        
                                      <b-col md="4">
                                        Address Code Available Option(s)
                                        <ABSMultiSelect
                                            v-model="leftData"
                                            :options="leftDataOptions"
                                            size=10
                                            class="selectCustom"
                                            :disabled="isDisabled"
                                        />
                                      </b-col>
                                      <b-col md="1" style="padding: 120px 8px;">
                                        <b-button id="satu" :disabled="ButtonDisabled" size="sm" variant="primary" @click="moveAllToRight" style="width:50px">
                                            &gt;&gt;
                                        </b-button>
                                        <br>
                                        <b-button :disabled="ButtonDisabled" size="sm" variant="primary" @click="moveToRight" style="width:50px;margin-top:10px;">
                                            &gt;
                                        </b-button>
                                        <br>
                                        <b-button :disabled="ButtonDisabled" size="sm" variant="primary" @click="moveToLeft" style="width:50px;margin-top:10px;">
                                            &lt;
                                        </b-button>
                                        <br>
                                        <b-button :disabled="ButtonDisabled" size="sm" variant="primary" @click="moveAllToLeft" style="width:50px;margin-top:10px;">
                                            &lt;&lt;
                                        </b-button>
                                      </b-col>
                                      <b-col md="4">
                                        Address Code Selected Option(s)
                                        <ABSMultiSelect
                                            v-model="rightData"
                                            :options="rightDataOptions"
                                            size=10
                                            class="selectCustom"
                                            :disabled="isDisabled"
                                        />
                                      </b-col>
                                    </b-row>
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
    props: {PageLevel:'', TabIndex: '', data: ''},
    data() {
        return {
			ValKey:null,
            FormType: "Form",
            Module:"CM",
            subportfolio: '',
            allDataOptions: [],
            leftData: [],
            leftDataOptions: [],
            rightData: [],
            rightDataOptions: [],
            search: '',
            DataRow: [],
            isCanLoad: true,
       
            IEBy: {Input: '', Edit: ''},   			

            M_CM_AssignAddressToSubPortfolioRegistration :{
                sequenceregistrationno: '',
                addresscd: '',
                billingstatus: '',
                mailingstatus: '',
                taxstatus: '',
                rentalbillingstatus: '',
                servicechargestatus: '',
                meterutilitystatus: '',
                addresstype: '',
                salutationcd: '',
                attention: '',
                address1: '',
                address2: '',
                address3: '',
                address4: '',
                mainaddressstatus: '',
                email: '',
                citycd: '',
                zipcode: '',
                phoneno: '',
                faxno: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                controlsequenceno: 0,
                idno: '',
                passportno: '',
                rowid: 0,
                salutationdescs: '',
                citydescs: '',
                debtorcd: ''
                    }
            ,
            PI_Search:{
                    cValidate :'', 
                    cName: 'search', 
                    cLabel: '', 
                    cLabelSize: 4, 
                    cOrder: 1, 
                    cKey: false, 
                    cType: 'text',
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
                cFormPageNo: this.data.PageOrder
            }         
        }
    },
    watch : {
        leftDataOptions (newData, oldData) {
            this.tempLeftFilter = newData
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
    },
    ButtonDisabled() {
        if (this.isCanLoad = true) {
            return false
        }
        else {
            return true
        }
    }
    
  },
    methods: {
        GetCMSpecification(){
            var param = {
            OptionFunctionCd: "GetCMSpecification",
            ModuleCd: this.Module            
          }

          this.FnDynamicFunction(param)
            .then(ress => {
              if(ress == null) return
              var data = ress[0]
              if(data.ContactApproval == 'Y'){
                    this.isCanLoad = true
                    this.$store.commit('setFormType','Form')
                    this.FormType = 'Form'
                    this.getToolbar().ProcessPS()
                    // this.getToolbar().isNew = true
                    // this.getToolbar().statusFunction[6].disabled = false
                    // this.getToolbar().statusFunction[7].disabled = true
                    // this.getToolbar().isByPassCancel = true
                // this.getToolbar().statusFunction[4].disabled = false
              }else{
                    this.isCanLoad = false
                    // this.$store.commit('setFormType','Form')
                    this.FormType = 'View'
                    this.$store.commit('setFormType','View')
                    this.getToolbar().ProcessPS()
                //   this.getToolbar().isNew = false
                  
                // this.getToolbar().statusFunction[4].disabled = false
              }
            })
        },
		onSearchEnter (e) {   

        if (e.keyCode === 13) {//ENTER
        this.getRightColumn(this.search)
        }
        // else if (e.keyCode === 50) {
        // alert('@ was pressed');
        // }         
        },
        getDataList (search) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                UserId: this.getDataUser().UserId,
                PortfolioCd: this.getDataUser().PortfolioCd,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                SequenceRegistrationNo: this.DataRowPage1.SequenceRegistrationNo,
                LineNo: 7,
                InitialWhere: search && search != '' ? ("AddressCd like '%" + search + "%'") : '',
                ParamView: "'"+this.getDataUser().SubPortfolioCd+"', '"+this.DataRowPage1.SequenceRegistrationNo+"'" ,
                SortField: 'AddressCd'
                
            }
            
            this.postEncode( this.getUrlDataList(), param )
            .then( response => {
                this.$store.commit('setStatusLoader', false)
                if (response == null) return
                this.allDataOptions = response.Data
                // console.log(this.allDataOptions)
                this.leftDataOptions = []
                var status = false
                for (var x = 0; x < this.allDataOptions.length; x++) {
                    status = false
                    for (var y = 0; y < this.rightDataOptions.length; y++) {
                        if (this.allDataOptions[x].AddressCd == this.rightDataOptions[y].value) {  
                            status = true
                            break
                        }
                    }
                    if (status == false) {
                        this.leftDataOptions.push({
                            value: this.allDataOptions[x].AddressCd,                             
                            key: this.allDataOptions[x].AddressCd
                            // ,
                            // RowId: this.allDataOptions[x].rowid
                        })
                    }
                }
                this.$forceUpdate()
            })
        },
        getAllColumn () {
            // console.log(search)
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: 7,  
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                SequenceRegistrationNo: this.DataRowPage1.SequenceRegistrationNo,
                // InitialWhere: "AddressCd like '%" + search + "%'",
            }
            this.postEncode( this.getUrlById(), param )
            .then( response => {
                this.$store.commit('setStatusLoader', false)
                if (response == null) return
                this.allDataOptions = response.Data
                // console.log(this.allDataOptions)
                this.leftDataOptions = []
                var status = false
                for (var x = 0; x < this.allDataOptions.length; x++) {
                    status = false
                    for (var y = 0; y < this.rightDataOptions.length; y++) {
                        if (this.allDataOptions[x].AddressCd == this.rightDataOptions[y].value) {
                            status = true
                            break
                        }
                    }
                    if (status == false) {
                        this.leftDataOptions.push({
                            value: this.allDataOptions[x].addresscd,                            
                            key: this.allDataOptions[x].addresscd
                            // ,
                            // RowId: this.allDataOptions[x].rowid
                        })
                    }
                }
                this.$forceUpdate()
            })
        },
        getRightColumn (search) {
            this.$store.commit('setStatusLoader', true)           
            
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: 3,  
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                SequenceRegistrationNo: this.DataRowPage1.SequenceRegistrationNo
            }

            this.postEncode( this.getUrlById(), param )
            .then( response => {
                if (response == null) return
                var data = response.Data
                this.rightDataOptions = []
                for (var x = 0; x < data.length; x++) {
                    this.rightDataOptions.push({
                        value: data[x].addresscd,                        
                        key: data[x].addresscd,
                        RowId: data[x].addresscd,
                    })
                }
                this.getDataList(search)
            })
        },
        moveAllToRight () {
            for (var x = 0; x < this.leftDataOptions.length; x++) {
                var data = this.leftDataOptions[x]
                this.rightDataOptions.push({
                    value: data.value,
                    key: data.key,
                    RowId: data.RowId,
                })
            }
            this.leftDataOptions = []
            this.$forceUpdate()
        },
        moveToRight () {
            for (var x = 0; x < this.leftData.length; x++) {
                var index = -1
                var data
                for (var y = 0; y < this.leftDataOptions.length; y++) {
                    if (this.leftData[x] == this.leftDataOptions[y].value) {
                        data = this.leftDataOptions[y]
                        index = y
                    }
                }
                this.rightDataOptions.push({
                    value: data.value,
                    key: data.key,
                    RowId: data.RowId,
                })
                this.leftDataOptions.splice(index, 1)
            }
            this.$forceUpdate()
        },
        moveToLeft () {
            for (var x = 0; x < this.rightData.length; x++) {
                var index = -1
                var data
                for (var y = 0; y < this.rightDataOptions.length; y++) {
                    if (this.rightData[x] == this.rightDataOptions[y].value) {
                        data = this.rightDataOptions[y]
                        index = y
                    }
                }
                this.leftDataOptions.push({
                    value: data.value,
                    key: data.key,
                    RowId: data.RowId,
                })
                this.rightDataOptions.splice(index, 1)
            }
            this.$forceUpdate()
        },
        moveAllToLeft () {
            for (var x = 0; x < this.rightDataOptions.length; x++) {
                var data = this.rightDataOptions[x]
                this.leftDataOptions.push({
                    value: data.value,
                    key: data.key,
                    RowId: data.RowId,
                })
            }
            this.rightDataOptions = []
            this.$forceUpdate()
        },
		setToolbarButton () {            
            if (this.isCanLoad) {
                this.getToolbar().isNew = true
                this.getToolbar().statusFunction[6].disabled = false
                this.getToolbar().statusFunction[7].disabled = true
                this.getToolbar().isByPassCancel = true
            }
            else {
                this.getToolbar().isByPassCancel = false
            }
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
            this.getRightColumn('')			
		},		
		doDoubleClick(){
        },
		rowClicked (record, index) {
        },
        rowLink: function(url){
            this.$refs.modalTest.show()
        },
		paramFromParent(){
            // this.$parent.showForm = false
            let data = this.$store.getters.GetPage1Data
            this.DataRow = data

            if ( data.Status != 'New') {
                //   this.FormType = "View"
                //   this.$store.commit('setFormType','View')
                //   this.getToolbar().ProcessPS()
                  this.getToolbar().statusFunction[5].disabled = true
                    this.getToolbar().statusFunction[6].disabled = true
                    this.isDisabled = true                  
            } else {
                //   this.FormType = "Form"
                //   this.$store.commit('setFormType','Form')
                //   this.getToolbar().ProcessPS()
                this.getToolbar().statusFunction[5].disabled = false
                    this.getToolbar().statusFunction[6].disabled = false
                    this.isDisabled = false  
            }
            
            this.getRightColumn('')
            this.GetCMSpecification()
			

            // this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
            var dataPost = []
            var param1 = []
            var param2 = []
            // console.log(this.leftDataOptions) 
            // console.log(this.rightDataOptions) 
            // return

            for (let x = 0 ; x < this.leftDataOptions.length ; x ++) {
                param1.push({
                    _Method_: 'DELETE',
                    _LineNo_: this.$parent.data.PageOrder,
                    SubportfoliCd: this.getDataUser().SubPortfolioCd,
                    SequenceRegistrationNo: this.DataRow.SequenceRegistrationNo,
                    AddressCd: this.leftDataOptions[x].value
                })
            }

            for (let x = 0 ; x < this.rightDataOptions.length ; x ++) {
                param2.push({
                    _Method_: 'SAVE',
                    _LineNo_: this.$parent.data.PageOrder,
                    SubportfoliCd: this.getDataUser().SubPortfolioCd,
                    SequenceRegistrationNo: this.DataRow.SequenceRegistrationNo,
                    AddressCd: this.rightDataOptions[x].value,
                    UserInput: this.getDataUser().UserId
                })
            }

            dataPost.push({
                A_Looping: param1,
                B_Looping: param2
            })

            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                Data: dataPost
            }
                
            this.postJSONMulti (this.getUrlProsesDataPostMulti(), param)
            .then(response => {
                if (response == null) return
                this.alertSuccess('Success...!')
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
            this.M_CM_AssignAddressToSubPortfolioRegistration = {
                sequenceregistrationno: '',
                addresscd: '',
                billingstatus: '',
                mailingstatus: '',
                taxstatus: '',
                rentalbillingstatus: '',
                servicechargestatus: '',
                meterutilitystatus: '',
                addresstype: '',
                salutationcd: '',
                attention: '',
                address1: '',
                address2: '',
                address3: '',
                address4: '',
                mainaddressstatus: '',
                email: '',
                citycd: '',
                zipcode: '',
                phoneno: '',
                faxno: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                controlsequenceno: 0,
                idno: '',
                passportno: '',
                rowid: 0,
                salutationdescs: '',
                citydescs: '',
                debtorcd: ''
                    }
            		
		},
        M_New(){

            this.$refs.ref_search.focus()

        },
        M_Edit(){
            this.$refs.ref_search.focus()
        },
        M_Delete(dt){           

            var data = this.FormToABSList().getRowSelected()  
            var dataDelete = []

            
            data.forEach((value) => {
            dataDelete.push({
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
//             var param = {
//                 OptionSeq: this.getOptionSeq().OptionSeq,
//                 LineNo: this.$parent.data.PageOrder
				
//             }

//             this.postEncode( this.getUrlById(), param )
//             .then(response => {
//                 if(response == null) return

//                 var data = response.Data[0]
// this.M_CM_AssignAddressToSubPortfolioRegistration = {
//                 contactid: data.contactid,
//                 addresscd: data.addresscd,
//                 billingstatus: data.billingstatus,
//                 mailingstatus: data.mailingstatus,
//                 taxstatus: data.taxstatus,
//                 rentalbillingstatus: data.rentalbillingstatus,
//                 servicechargestatus: data.servicechargestatus,
//                 meterutilitystatus: data.meterutilitystatus,
//                 addresstype: data.addresstype,
//                 salutationcd: data.salutationcd,
//                 attention: data.attention,
//                 address1: data.address1,
//                 address2: data.address2,
//                 address3: data.address3,
//                 address4: data.address4,
//                 mainaddressstatus: data.mainaddressstatus,
//                 email: data.email,
//                 citycd: data.citycd,
//                 zipcode: data.zipcode,
//                 phoneno: data.phoneno,
//                 faxno: data.faxno,
//                 remarks: data.remarks,
//                 userinput: data.userinput,
//                 useredit: data.useredit,
//                 timeinput: data.timeinput,
//                 timeedit: data.timeedit,
//                 lastupdatestamp: record.LastUpdateStamp,
//                 controlsequenceno: data.controlsequenceno,
//                 idno: data.idno,
//                 passportno: data.passportno,
//                 rowid: data.rowid,
//                 salutationdescs: data.salutationdescs,
//                 citydescs: data.citydescs,
//                 debtorcd: data.debtorcd
//                     }
                 

  

//                 this.IEBy.Input = data.userinput
//                 this.IEBy.Edit = data.useredit

//             })
        }
		
    },
    created: function() {
        this.subportfolio = this.getDataUser().label
        // this.GetCMSpecification()
    },
    beforeMount: function() {
    },
    mounted: function() {
        this.hideSideBarMenu()
        // this.GetCMSpecification()
		
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

