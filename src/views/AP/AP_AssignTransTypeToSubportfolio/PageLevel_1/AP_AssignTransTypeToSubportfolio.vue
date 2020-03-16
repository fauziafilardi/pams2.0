<template>
    <div>
        <div v-show="$parent.isDetail" :style="'margin-top:10px;'" class="el" mousetip mousetip-msg="I'm a tooltip">
            <div class="div-collapse" v-b-toggle.collapse1>
            </div>
            <b-collapse id="collapse1" :visible="true">
                <b-row  style="padding-left: 10px; padding-bottom: 10px; !important;">     
					<b-col md="12" id="col-left" class="bColMasterForm">
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
                                            @keyup.enter="onSearchEnter"
                                            >
                                    </b-col>
                                    <b-col md="4" style="padding-right: 15px !important;padding-left: 95 px !important;">
                                        <input
                                            v-model="search2"
                                            type="text"
                                            class="form-control text-field-form"
                                            style="margin-left: 20px !important;"
                                            placeholder="Search..."
                                            autofocus
                                            autocomplete="off"
                                            @keyup.enter="onSearch2Enter"
                                            >
                                    </b-col>
                                    </b-row>
                                    <b-row style="padding-top:10px; padding-right: 10px; padding-left: 20px; padding-bottom: 10px; !important;">
                                      <b-col md="4">
                                        Available Trans. Type
                                        <ABSMultiSelect
                                            v-model="leftData"
                                            :options="leftDataOptions"
                                            size=10
                                            class="selectCustom"
                                        />
                                      </b-col>
                                      <b-col md="1" style="padding: 120px 8px;">
                                        <b-button size="sm" variant="primary" @click="moveAllToRight" style="width:50px">
                                            &gt;&gt;
                                        </b-button>
                                        <br>
                                        <b-button size="sm" variant="primary" @click="moveToRight" style="width:50px;margin-top:10px;">
                                            &gt;
                                        </b-button>
                                        <br>
                                        <b-button size="sm" variant="primary" @click="moveToLeft" style="width:50px;margin-top:10px;">
                                            &lt;
                                        </b-button>
                                        <br>
                                        <b-button size="sm" variant="primary" @click="moveAllToLeft" style="width:50px;margin-top:10px;">
                                            &lt;&lt;
                                        </b-button>
                                      </b-col>
                                      <b-col md="4">
                                        Assigned Trans. Type
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
            Module:"GL",
            subportfolio: '',
            allDataOptions: [],
            leftData: [],
            leftDataOptions: [],
            rightData: [],
            rightDataOptions: [],
            search: '',
            search2: ''
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
    }
  },
    methods: {
        onSearchEnter () {
            this.getAllColumn(this.search)
        },
        onSearch2Enter () {
            this.getRight2Column(this.search2)
        },
        getAllColumn (search) {

            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                UserId: this.getDataUser().UserId,
                PortfolioCd: this.getDataUser().PortfolioCd, 
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                LineNo: 0,
                InitialWhere: "ModuleCd = 'AP' AND (TrxType like '%" + search + "%' OR Descs like '%" + search + "%')",
                SortField: '',
                ParamView: ""
            }
            this.postEncode( this.getUrlDataList(), param )
            .then( response => {
                this.$store.commit('setStatusLoader', false)
                if (response == null) return
                this.allDataOptions = response.Data
                this.leftDataOptions = []
                var status = false
                for (var x = 0; x < this.allDataOptions.length; x++) {
                    status = false
                    for (var y = 0; y < this.rightDataOptions.length; y++) {
                        if (this.allDataOptions[x].TrxType == this.rightDataOptions[y].value) {
                            status = true
                            break
                        }
                    }
                    if (status == false) {
                        this.leftDataOptions.push({
                            value: this.allDataOptions[x].TrxType,
                            key: this.allDataOptions[x].TrxType + ' - ' + this.allDataOptions[x].Descs,
                            RowId: this.allDataOptions[x].RowId
                        })
                    }
                }
                this.$forceUpdate()
            })
        },
        getRightColumn () {
            this.$store.commit('setStatusLoader', true)
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                UserId: this.getDataUser().UserId,
                PortfolioCd: this.getDataUser().PortfolioCd, 
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                LineNo: 1,
                InitialWhere: "SubportfolioCd = '" + this.getDataUser().SubPortfolioCd+ "' AND ModuleCd = 'AP'",
                SortField: '',
                ParamView: ""
            }
            this.postEncode( this.getUrlDataList(), param )
            .then( response => {
                if (response == null) return
                var data = response.Data
                this.rightDataOptions = []
                for (var x = 0; x < data.length; x++) {
                    this.rightDataOptions.push({
                        value: data[x].TrxType,
                        key: data[x].TrxType + ' - ' + data[x].Descs,
                        RowId: data[x].RowId,
                    })
                }
                this.getAllColumn('')
            })
        },
        getRight2Column (search2) {
            this.$store.commit('setStatusLoader', true)
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                UserId: this.getDataUser().UserId,
                PortfolioCd: this.getDataUser().PortfolioCd, 
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                LineNo: 1,
                InitialWhere: "SubportfolioCd = '" + this.getDataUser().SubPortfolioCd+ "' AND ModuleCd = 'AP' AND (TrxType like '%" + search2 + "%' OR Descs like '%" + search2 + "%')",
                SortField: '',
                ParamView: ""
            }
            this.postEncode( this.getUrlDataList(), param )
            .then( response => {
                if (response == null) return
                var data = response.Data
                this.rightDataOptions = []
                // console.log(this.rightDataOptions.length)
                for (var x = 0; x < data.length; x++) {
                    this.rightDataOptions.push({
                        value: data[x].TrxType,
                        key: data[x].TrxType + ' - ' + data[x].Descs,
                        RowId: data[x].RowId,
                    })
                }
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
            this.getToolbar().isNew = true
            this.getToolbar().statusFunction[5].disabled = false
		},
        M_Head_Table () {
        },
        M_PageSize(){
        },
        M_TabClick () {
        },
        M_Pagination () {
        },
        M_Advance_Filter(){
        },
        M_Search (data) {
        },
        M_Post () {
        },
        M_Refresh () {
        },
		doDoubleClick () {
        },
        SaveData () {
        },
        UpdateData () {
        },
		m_ClearForm () {
		},
        M_New () {
        },
        M_Edit () {
        },
        M_Delete () {
        },
        M_Save () {
            this.MainSave()
        },
        M_Update(){
            this.MainSave()
        },
        MainSave(){
            if (this.leftDataOptions.length <= 0) {
               // insert data
                for (var x = 0; x < this.rightDataOptions.length; x++) {
                    dataToSave.push({
                        TrxType: this.rightDataOptions[x].value,
                        ModuleCd: 'AP',
                        SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                        UserInput: this.getDataUser().UserId
                        
                    })
                }
                param = {			
                    OptionSeq: this.getOptionSeq().OptionSeq,
                    LineNo: 0,
                    Data: dataToSave         
                }

                this.postJSONMulti(this.getUrlInsertMulti(), param)
                .then((response) => {
                    if (response == null) return
                    this.$parent.resultInsert('Success...!')
                    this.getRightColumn()
                })
            }
            else {
                var dataPost = []
                var param1 = []
                var param2 = []

                for (let x = 0 ; x < this.leftDataOptions.length ; x ++) {
                    param1.push({
                        _Method_: 'DELETE',
                        _LineNo_: 0,
                        SubportfolioCd: this.getDataUser().SubPortfolioCd,
                        ModuleCd: 'AP',
                        TrxType: this.leftDataOptions[x].value                        
                    })
                }

                for (let x = 0 ; x < this.rightDataOptions.length ; x ++) {
                    param2.push({
                        _Method_: 'SAVE',
                        _LineNo_: 0,
                        TrxType: this.rightDataOptions[x].value,
                        ModuleCd: 'AP',
                        SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                        UserInput: this.getDataUser().UserId
                    })
                }

                dataPost.push({
                    A_Looping: param1,
                    B_Looping: param2.length > 0 ? param2 : null
                })

                var param = {
                    OptionSeq: this.getOptionSeq().OptionSeq,
                    LineNo: 1,
                    Data: dataPost
                }
                    
                this.postJSONMulti (this.getUrlProsesDataPostMulti(), param)
                .then(response => {
                    if (response == null) return
                    this.alertSuccess('Success...!')
                })
            }
        },
        paramFromParent(){
        },
		M_Cancel() {
            this.search = ''
            this.search2 = ''
            this.getRightColumn()
            
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
        this.$parent.isDetail = true
        this.$store.commit('setStatus','new')
        // this.setToolbarButton()
        this.subportfolio = this.getDataUser().label
    },
    beforeMount: function() {
    },
    mounted: function() {
        this.$store.commit('setFormType','Form')
        this.getToolbar().ProcessPS()
        this.hideSideBarMenu()
        this.getToolbar().doEdit(true)
        // this.getAllColumn()
        // this.getLeftColumn()
        this.getRightColumn()
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

