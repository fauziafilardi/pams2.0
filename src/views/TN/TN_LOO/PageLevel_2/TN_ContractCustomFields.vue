<template>
    <div>        
        <!-- <HeaderFormListVuex2 :isProcess = "true" /> -->

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
                                <b-col md="12" id="col-left"> 
                                  <span v-for="(data, index) in DataDetail" :key="index">
                                    <b-row v-if="data.lookupstatus=='Y'">
                                        <b-col md="6">
                                          <ABSInputSelectList
                                            @change="OnCodeChangeLookup"
                                            :prop="{ 
                                                    dataLookUp: { 
                                                      LookUpCd: data.lookuptable,
                                                      ColumnDB: data.lookupfield,
                                                      InitialWhere: data.lookupcondition,
                                                      ParamWhere: ''
                                                    },
                                                    cValidate: data.mandatory=='Y'?'required':'',
                                                    cName: data.fieldsequenceno.toString() ,
                                                    cLabel:data.caption,
                                                    cKey: false,
                                                    cOrder: index,
                                                    cLabelSize: 4,
                                                    cPageLevel: PageLevel,
                                                    cTabIndex: TabIndex,
                                                    cParentForm: 'FormScope_' + PageLevel + '_' + TabIndex,
                                                    cMasterUrl: undefined,
                                                    cDisplayColumn: '',
                                                    cProtect: false,
                                                    cVisible: true,
                                                    cDisplayColumn:data.lookupfield,
                                                    cIsAlwaysShow: true
                                                  }"
                                            :value="data.fielddescs"
                                            :label="data.datatype=='D'?data.fielddescs:data.datatype=='A'?data.fielddate:data.datatype=='N'?data.fieldnumeric:data.datatype=='T'?data.fieldtext:''"
                                            :index="index"
                                            :ref="data.fieldsequenceno.toString()"
                                            
                                          />
                                        </b-col>
                                    </b-row>
                                    <b-row v-else-if="data.lookupstatus=='N'">
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="
                                        { 
                                            cValidate: data.mandatory=='Y'?'required':'',
                                            cName: data.fieldsequenceno.toString(),
                                            cLabel: data.caption,
                                            cLabelSize: 4,
                                            cOrder: index,
                                            cKey: false,
                                            cType: 'text',
                                            cProtect: false,
                                            cVisible: true,
                                            cPageLevel: PageLevel,
                                            cTabIndex: TabIndex,
                                            cParentForm: 'FormScope_' + PageLevel + '_' + TabIndex,
                                            cIsAlwaysShow: true
                                        }"
                                        v-model="data.fielddescs"
                                        @input="OnChangeInput(index,data.fielddescs)"
                                        />
                                      </b-col>
                                    </b-row>
                                  </span>
                                   <!-- :label="((data.fielddescs == null || data.fielddescs == ''))
                                                    ? '' : data.fielddescs " -->
                                   
                                </b-col> 
                  
							</b-row>
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
        FormType: "Process",
        Module:"TN",
        IEBy: {Input: '', Edit: ''}, 
        DataDetail :null,
        dataPost :[],
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
      OnChangeInput(index,data){
   

         if(this.DataDetail[index].datatype=='D'){
        this.DataDetail[index].fielddescs = data
      }
      else if(this.DataDetail[index].datatype=='A'){
        this.DataDetail[index].fieldnumeric = data
      }
      else if(this.DataDetail[index].datatype=='N'){
        this.DataDetail[index].fielddate = data
      }
      else if(this.DataDetail[index].datatype=='T'){
        this.DataDetail[index].fieldtext = data
      }
      },
		OnCodeChangeLookup(data){

      if(this.DataDetail[data._index].datatype=='D'){
        this.DataDetail[data._index].fielddescs = data.id
      }
      else if(this.DataDetail[data._index].datatype=='A'){
        this.DataDetail[data._index].fieldnumeric = data.id
      }
      else if(this.DataDetail[data._index].datatype=='N'){
        this.DataDetail[data._index].fielddate = data.id
      }
      else if(this.DataDetail[data._index].datatype=='T'){
        this.DataDetail[data._index].fieldtext = data.id
      }

    },
		setToolbarButton () {
        //    this.getToolbar().statusFunction[0].disabled = true
        //    this.getToolbar().statusFunction[1].disabled = true
        //    this.getToolbar().statusFunction[5].disabled = false//save
      // this.getToolbar().isNew = true
      // this.getToolbar().statusFunction[6].disabled = true

      this.getToolbar().isNew = true
      this.getToolbar().statusFunction[6].disabled = false
      this.getToolbar().statusFunction[7].disabled = true
      // this.getToolbar().isByPassCancel = true
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
      this.$parent.showForm = true
      this.getToolbar().isNew = true
      this.getToolbar().statusFunction[6].disabled = true
      
      this.getDataBy(this.DataRowPage1);
      // this.$parent.showForm = true
      // this.$store.commit('setFormType','Edit')
      // this.$store.commit('setStatus', 'new')
      // this.getToolbar().ProcessPS()
      // this.getToolbar().isNew = true
      // this.getToolbar().statusFunction[6].disabled = true



            // this.FormType = "List"
                   
        //      this.getToolbar().statusFunction[0].disabled = true
        //    this.getToolbar().statusFunction[1].disabled = true
        //    this.getToolbar().statusFunction[3].disabled = false
            
      // this.getDataBy(this.DataRowPage1);

			
            // this.getToolbar().doEdit(true)

            // this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
         var dataUpdate =[]
         for (let x = 0 ; x < this.DataDetail.length ; x ++) {

          var fd = this.DataDetail[x].datatype=='D'?this.DataDetail[x].fielddescs:'NULL'
          var fdt = this.DataDetail[x].datatype=='A'?this.DataDetail[x].fielddate:'NULL'
          var fn = this.DataDetail[x].datatype=='N'?this.DataDetail[x].fieldnumeric:'NULL'
          var ft = this.DataDetail[x].datatype=='T'?this.DataDetail[x].fieldtext:'NULL'

           dataUpdate.push({
            //  _Method_:'SAVE',
            //  _LineNo : this.$parent.data.PageOrder ,
             SubportfolioCd : this.getDataUser().SubPortfolioCd,
             ApplicationNo : this.DataRowPage1.ApplicationNo,
             FieldSequenceNo : this.DataDetail[x].fieldsequenceno,
             FieldDescs : fd,
             FieldDate : fdt,
             FieldNumeric : fn,
             FieldText : ft,
             UserInput : this.getDataUser().UserId
           })

         }

           var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                Data: dataUpdate
            }

            this.postJSONMulti(this.getUrlInsertMulti(), param)
            .then((response) => {
                if(response == null) return
                var mess = response.Message==null?'Information Saved ':response.Message//Information Saved 
                this.alertSuccess(mess)
                // this.$parent.resultUpdate(response.Message)
            })
        },
        M_Update() {
        },
        M_ClearForm(){                    
        },
        M_New(){
        },
        M_Edit(){
        },
        M_Delete(dt){           
        
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubportfolioCd : this.getDataUser().SubPortfolioCd,
                ApplicationNo : record.ApplicationNo,
                PageMasterSeq : this.$parent.data.PageMasterSeq			
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
                this.DataDetail = response.Data


  

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit
                // this.$forceUpdate()
                this.$nextTick(() => {
                  this.$forceUpdate();
                });

            })
        }
		
    },
    created: function() {
        // this.$store.commit('setFormType','Edit')
        // this.$store.commit('setStatus', 'new')
    },
    beforeMount: function() {
    },
    mounted: function() {
        // this.getDataBy(this.DataRowPage1);
        // console.log('2')
        
        // this.$store.commit('setListDisable', true)
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


