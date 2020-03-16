<template>
    <div>
        <div :style="'margin-top:10px;'" class="el" mousetip mousetip-msg="I'm a tooltip">
            <div class="div-collapse" v-b-toggle.collapse1>
            </div>
            <b-collapse id="collapse1" :visible="true">
                <b-row  style="padding-left: 10px; padding-bottom: 10px; !important;">     
					<b-col md="12" id="col-left" class="bColMasterForm">	
						<!-- <b-form :data-vv-scope="'FormScope_' + PageLevel + '_' + TabIndex" :data-vv-value-path="'FormScope_' + PageLevel + '_' + TabIndex"> -->
                            <b-row style="padding-left:10px;">					
                                <b-col md="12" id="col-left">                                    
                                    <!-- <b-row style="padding-top:10px; padding-right: 10px; padding-left: 25px; padding-bottom: 10px; !important;">
                                        Subportfolio : {{subportfolio}}
                                    </b-row> -->
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
                                            @keyup.enter="onSearchEnter"
                                            :disabled="ButtonDisabled"
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
                                        <!-- <b-row>
                                            <b-col>
                                                Subportfolio : &nbsp;
                                            </b-col>
                                        <b-row> -->
                                      <b-col md="4">
                                        Available Lot No
                                        <ABSMultiSelect
                                            v-model="leftData"
                                            :options="leftDataOptions"
                                            size=10
                                            class="selectCustom"
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
                                        <!-- <b-button size="sm" variant="primary" @click="M_Save">
                                            Save dong mas...
                                        </b-button> -->
                                      </b-col>
                                      <b-col md="4">
                                        Assigned Lot No
                                        <ABSMultiSelect
                                            v-model="rightData"
                                            :options="rightDataOptions"
                                            size=10
                                            class="selectCustom"
                                        />
                                      </b-col>
                                    </b-row>
                                </b-col>
                  
							</b-row>
						<!-- </b-form> -->
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
            FormType: "Form",
            Module:"TN",
            subportfolio: '',
            allDataOptions: [],
            leftData: [],
            leftDataOptions: [],
            rightData: [],
            rightDataOptions: [],
            search: '',
            DataRow: [],
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
    DataRowPage1(){
		return this.$store.getters.GetPage1Data
    },
    ButtonDisabled() {
        if (this.inputStatus != 'EDIT') {
            return false
        }
        else {
            return true
        }
    }
  },
    methods: {
        onSearchEnter () {   
            if (this.ButtonDisabled) return 
            
            this.getRightColumn(this.search)
            
        },
        getDataList (search) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                UserId: this.getDataUser().UserId,
                PortfolioCd: this.getDataUser().PortfolioCd,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                EventNo: this.DataRowPage1.EventNo,
                LineNo: 1,
                InitialWhere: search && search != '' ? ("(LotNo like '%" + search + "%')") : '',
                ParamView: "'"+this.getDataUser().SubPortfolioCd+"','"+this.DataRowPage1.EventNo+"'" ,
                SortField: 'LotNo',
                
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
                        if (this.allDataOptions[x].LotNo == this.rightDataOptions[y].value) {  
                            status = true
                            break
                        }
                    }
                    if (status == false) {
                        this.leftDataOptions.push({
                            value: this.allDataOptions[x].LotNo,                             
                            key: this.allDataOptions[x].LotNo
                            // ,
                            // RowId: this.allDataOptions[x].rowid
                        })
                    }
                }
                this.$forceUpdate()
            })
        },
        getAllColumn (search) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: 1,  
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                EventNo: this.DataRowPage1.EventNo
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
                        if (this.allDataOptions[x].lotno == this.rightDataOptions[y].value) {
                            status = true
                            break
                        }
                    }
                    if (status == false) {
                        this.leftDataOptions.push({
                            value: this.allDataOptions[x].lotno,
                            key: this.allDataOptions[x].lotno
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
                LineNo: 2,  
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                EventNo: this.DataRowPage1.EventNo
            }

            this.postEncode( this.getUrlById(), param )
            .then( response => {
                if (response == null) return
                var data = response.Data
                this.rightDataOptions = []
                for (var x = 0; x < data.length; x++) {
                    this.rightDataOptions.push({
                        value: data[x].lotno,                        
                        key: data[x].lotno,
                        RowId: data[x].rowid,
                    })
                }
                this.getAllColumn(search)
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
            // this.getToolbar().isNew = true
            // this.getToolbar().statusFunction[5].disabled = false
            this.getToolbar().isNew = true
            this.getToolbar().statusFunction[6].disabled = false
            this.getToolbar().statusFunction[7].disabled = true
            this.getToolbar().isByPassCancel = true
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
        M_Post(){
        },
        M_Refresh(){
        },
		doDoubleClick(){
        },
        SaveData () {
        },
        UpdateData () {
        },
		m_ClearForm(){            		
		},
        M_New(){            
        },
        M_Edit() {
        },
        M_Delete(){
        },
        M_Insert () {
            var dataPost = []
            var param1 = []
            var param2 = []
            // console.log(this.leftDataOptions) 
            // return

            for (let x = 0 ; x < this.leftDataOptions.length ; x ++) {
                param1.push({
                    _Method_: 'DELETE',
                    _LineNo_: this.$parent.data.PageOrder,
                    SubportfolioCd: this.getDataUser().SubPortfolioCd,
                    LotNo: this.leftDataOptions[x].value,
                    EventNo: this.DataRow.EventNo
                })
            }

            for (let x = 0 ; x < this.rightDataOptions.length ; x ++) {
                param2.push({
                    _Method_: 'SAVE',
                    _LineNo_: this.$parent.data.PageOrder,
                    SubportfolioCd: this.getDataUser().SubPortfolioCd,
                    LotNo: this.rightDataOptions[x].value,
                    EventNo: this.DataRow.EventNo,
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
        paramFromParent(){            
            let data = this.$store.getters.GetPage1Data
            this.DataRow = data
            
            this.getRightColumn('')
        },
		M_Cancel() {
            this.getRightColumn('')	
        },
        rowClicked (record, index) {
        },
        rowLink: function(url){
        },
        getDataBy (record) {           
        }

    },
    beforeCreate: function () {
    },
    created: function() {
        // this.$parent.isDetail = true
        // this.$store.commit('setStatus','Form')
        // this.setToolbarButton()
        // this.subportfolio = this.getDataUser().label
    },
    beforeMount: function() {
    },
    mounted: function() {
        // this.$store.commit('setFormType','Form')
        // this.getToolbar().ProcessPS()
        this.hideSideBarMenu()
        // this.getToolbar().doEdit(true)
        // this.getAllColumn()
        // this.getLeftColumn()
        
        // this.getRightColumn()
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

