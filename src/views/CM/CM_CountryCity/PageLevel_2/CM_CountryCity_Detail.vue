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
                                <b-col md="12" id="col-left"> <!-- table open -->
                                    <!-- <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_citycd" v-model="M_CM_CountryCity_Detail.citycd"  ref="ref_citycd"/>
                                      </b-col>
                                    </b-row> -->
                                    <b-row>
                                        <b-col md="6">
                                            <b-row>
                                                <b-col md="4" class="lbl-col-align">
                                                    <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for="">City Code</label>
                                                </b-col>
                                                <b-col md="1" style="margin-left: 10px;">
                                                    {{M_CM_CountryCity_Detail.countrycd}}    
                                                </b-col>  
                                                <b-col md="4">
                                                    <ABSTextBoxOnly :prop="PI_citycd" v-model="M_CM_CountryCity_Detail.citycd"  ref="ref_citycd"/>                                            
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_CM_CountryCity_Detail.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnprovincecdChange" :prop="PI_provincecd" :value="M_CM_CountryCity_Detail.provincecd" :label="M_CM_CountryCity_Detail.provincecdLabel" ref="ref_provincecd"/>
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
            FormType: "List",
			Module:"CM",
            propList: {
                initialWhere:"CountryCd = '" + this.ValKey + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_CM_CountryCity_Detail :{
                citycd: '',
                countrycd: '',
                provincecd: '',
                descs: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                provincedescs: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_citycd: { 
                cValidate :'required|max:3', 
                cName: 'citycd', 
                cLabel: 'City Code', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_descs: { 
                cValidate :'required|max:60', 
                cName: 'descs', 
                cLabel: 'Description', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_provincecd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMProvince'    , 
                    ColumnDB: 'ProvinceCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'provincecd', 
                cLabel: 'Province', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 3, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: 'CM/CM_Province' ,
                cDisplayColumn: 'ProvinceCd,Descs' ,
            }, 

			PTAnalysis: {
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cPageMasterSeq: this.data.PageMasterSeq,
                cFormPageNo: this.data.PageOrder
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
        OnprovincecdChange (data) {
        if (this.M_CM_CountryCity_Detail.provincecd == data.id) return
        this.$nextTick(() => {
            this.M_CM_CountryCity_Detail.provincecd = data.id
            this.M_CM_CountryCity_Detail.provincecdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{provincecd}
            }
        })
        this.$forceUpdate()
        },
		
		setToolbarButton () {
           //this.getToolbar().statusFunction[4].disabled = false
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
            this.M_CM_CountryCity_Detail.countrycd = data.CountryCd 
            this.propList.initialWhere =" CountryCd = '" + data.CountryCd + "' "
            this.PI_provincecd.dataLookUp.InitialWhere = " CountryCd = '" + data.CountryCd + "' "
        

            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
        var cityCd =  this.M_CM_CountryCity_Detail.citycd
        this.M_CM_CountryCity_Detail.citycd = cityCd
        
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                CountryCd: this.M_CM_CountryCity_Detail.countrycd,
                CityCd: this.M_CM_CountryCity_Detail.citycd,
                ProvinceCd: this.M_CM_CountryCity_Detail.provincecd == '' || this.M_CM_CountryCity_Detail.provincecd == null ? 'NULL' : this.M_CM_CountryCity_Detail.provincecd ,
                Descs: this.M_CM_CountryCity_Detail.descs,
                UserInput: this.getDataUser().UserId                 
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
                CountryCd: this.M_CM_CountryCity_Detail.countrycd,
                ProvinceCd: this.M_CM_CountryCity_Detail.provincecd == '' || this.M_CM_CountryCity_Detail.provincecd == null ? 'NULL' : this.M_CM_CountryCity_Detail.provincecd ,
                CityCd: this.M_CM_CountryCity_Detail.citycd,
                Descs: this.M_CM_CountryCity_Detail.descs,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_CM_CountryCity_Detail.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })

        },
		M_ClearForm(){
            this.M_CM_CountryCity_Detail = {
                citycd: '',
                countrycd: '',
                provincecd: '',
                descs: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                provincedescs: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_CM_CountryCity_Detail.countrycd = data.CountryCd 
            this.$refs.ref_citycd.focus()


        },
        M_Edit(){
            this.$refs.ref_provincecd.focus()
        },
        M_Delete(dt){ 
            var data = this.FormToABSList().getRowSelected()
            var dataDelete = []

            data.forEach((value) => {
                dataDelete.push({
                CountryCd: value.CountryCd,
                CityCd: value.CityCd,
                LastUpdateStamp: value.LastUpdateStamp,
                _Message_: "Data "
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
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                countrycd: record.CountryCd,
                citycd: record.CityCd				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_CM_CountryCity_Detail = {
                citycd: data.citycd,
                countrycd: data.countrycd,
                provincecd: data.provincecd,
                descs: data.descs,
                userinput: data.userinput,
                useredit: data.useredit,
                timeinput: data.timeinput,
                timeedit: data.timeedit,
                provincedescs: data.provincedescs,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
                 

                this.M_CM_CountryCity_Detail.provincecdLabel = this.M_CM_CountryCity_Detail.provincecd != null ? data.provincecd + this.separator + data.provincedescs :'' 
  

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

