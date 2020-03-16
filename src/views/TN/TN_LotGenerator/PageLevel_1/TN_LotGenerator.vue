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
                        <b-form :data-vv-scope="'FormScope_' + PageLevel + '_' + TabIndex" :data-vv-value-path="'FormScope_' + PageLevel + '_' + TabIndex">
                            <b-row  style="padding-left: 10px; padding-bottom: 10px; !important;">              
                                <b-col md="12" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnbaselotnoChange" :prop="PI_baselotno" :value="M_TN_LotGenerator.baselotno" :label="M_TN_LotGenerator.baselotnoLabel" ref="ref_baselotno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputCheckBox @input="OnincludelotdetailChange" :prop="PI_includelotdetail" v-model="M_TN_LotGenerator.includelotdetail"  ref="ref_includelotdetail" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OnlayoutChange" :prop="PI_layout" v-model="M_TN_LotGenerator.layout"  ref="ref_layout"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OnformatChange" :prop="PI_format" v-model="M_TN_LotGenerator.format"  ref="ref_format"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <b-row>
                                                <b-col md="4" class="lbl-col-align"></b-col>                                                
                                                <b-col><label class="lbl-value-view-form">$N(Running Number)</label></b-col>
                                            </b-row>                                              
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OnoutputlengthChange" :prop="PI_outputlength" v-model="M_TN_LotGenerator.outputlength"  ref="ref_outputlength"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_startlotno" v-model="M_TN_LotGenerator.startlotno"  ref="ref_startlotno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_lotno" v-model="M_TN_LotGenerator.lotno"  ref="ref_lotno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_skip" v-model="M_TN_LotGenerator.skip"  ref="ref_skip"/>
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
    props: {PageLevel: '', TabIndex: '', data: ''},
    data() {
        return {
			cInsertKey:'',
            FormType: "Form",
			Module:"TN",	
            IEBy: {Input: '', Edit: ''},

            M_TN_LotGenerator :{
                includelotdetail: ['F','A','C','L'],
                skip: '',
                lotno: '',
                startlotno: '',
                outputlength: '',
                format: '',
                layout: '',
                baselotno: ''
                    }
            ,					
            PI_baselotno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNLot'    , 
                    ColumnDB: 'LotNo'   , 
                    InitialWhere: "SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'baselotno', 
                cLabel: 'Base Lot No', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 1, 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'LotNo,Descs' ,
            }, 
            PI_includelotdetail: { 
                cValidate :'', 
                cName: 'includelotdetail', 
                cLabel: 'Include Lot Detail', 
                cLabelSize: 4, 
                cOptions: [{ text: 'Facility', value: 'F' }, { text: 'Accessory', value: 'A' }, { text: 'Accomodation', value: 'C' }, { text: 'Layout', value: 'L' }], 
                cOrder: 2, 
                cKey: false, 
                cVisible: true, 
                cProtect: false, 
                cDefault: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_layout: { 
                cValidate :'required|max_value:10', 
                cName: 'layout', 
                cLabel: 'Number of Digit', 
                cLabelSize: 4, 
                cOrder: 3, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_format: { 
                cValidate :'required|max:100', 
                cName: 'format', 
                cLabel: 'Format', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_outputlength: { 
                cValidate :'max:30',
                cLabel: 'Output Length', 
                cLabelSize: 4, 
                cValue: '', 
                cOrder: 5, 
                cType: 'numeric',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true,
                cProtect: true 
            }, 
            PI_startlotno: { 
                cValidate :'required|max:20|min_value:1', 
                cName: 'startlotno', 
                cLabel: 'Start Lot No', 
                cLabelSize: 4, 
                cOrder: 6, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_lotno: { 
                cValidate :'required|min_value:1|max:16', 
                cName: 'lotno', 
                cLabel: 'No of Lot(s)', 
                cLabelSize: 4, 
                cOrder: 7, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_skip: { 
                cValidate :'required|min_value:0|max:16', 
                cName: 'skip', 
                cLabel: 'Skip', 
                cLabelSize: 4, 
                cOrder: 8, 
                cKey: false, 
                cType: 'numeric',
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
      OnlayoutChange(data){
        
        this.$nextTick(() => {
          this.PI_lotno.cValidate = "required|min_value:1|max:"+data+""        
          if(this.M_TN_LotGenerator.format != ''){
          //   if(this.M_TN_LotGenerator.format.includes('$N') || this.M_TN_LotGenerator.format.includes('$n')){
              var n = this.M_TN_LotGenerator.format.indexOf('$')
              this.M_TN_LotGenerator.outputlength = parseInt(data) + parseInt(n)
          //   }
          }
        })
        this.$forceUpdate()
      },
      OnoutputlengthChange(data){
        this.$nextTick(() => {
          
        })
        this.$forceUpdate()
      },
        OnformatChange(data){          
          this.$nextTick(() => {
            if(data.includes('$N') || data.includes('$n')){
                var n = data.indexOf('$')
                this.M_TN_LotGenerator.outputlength = parseInt(this.M_TN_LotGenerator.layout) + parseInt(n)
            }
          })
          this.$forceUpdate()
        },	
        OnbaselotnoChange (data) {
          console.log(data)
        this.$nextTick(() => {
            this.M_TN_LotGenerator.baselotno = data.id
            this.M_TN_LotGenerator.baselotnoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{baselotno}
            }
        })
        this.$forceUpdate()
        },
        OnincludelotdetailChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{includelotdetail}
            }
        })
        this.$forceUpdate()
        },
	
		setToolbarButton () {
           this.getToolbar().doEdit(true)
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
        },		
        M_Post(dt){
        },
        M_Insert() {
        },
        M_Update() {
            var param = {			
              OptionSeq: this.getOptionSeq().OptionSeq,
              LineNo: this.$parent.data.PageOrder,
              SubPortfolioCd: this.getDataUser().SubPortfolioCd,
              BaseLotNo: this.M_TN_LotGenerator.baselotno,
              FormatLot: this.M_TN_LotGenerator.format,
              OutputLength: this.M_TN_LotGenerator.outputlength,
              NumberOfDigit: this.M_TN_LotGenerator.layout,
              StartLotNo: this.M_TN_LotGenerator.startlotno,
              TotalLot: this.M_TN_LotGenerator.lotno,
              UserInput: this.getDataUser().UserId,
              Skip: this.M_TN_LotGenerator.skip,
              Accessory: this.M_TN_LotGenerator.includelotdetail.indexOf('A') >= 0 ? 'Y' : 'N',
              Accomodation: this.M_TN_LotGenerator.includelotdetail.indexOf('C') >= 0 ? 'Y' : 'N',
              Facility: this.M_TN_LotGenerator.includelotdetail.indexOf('F') >= 0 ? 'Y' : 'N',
              Layout: this.M_TN_LotGenerator.includelotdetail.indexOf('L') >= 0 ? 'Y' : 'N'
            }
            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
              if(response == null) return
              this.$parent.resultInsert("Lot Successful Generated")
            })
        },
		M_ClearForm(){
            this.M_TN_LotGenerator = {
                includelotdetail: ['F','A','C','L'],
                skip: '',
                lotno: '',
                startlotno: '',
                outputlength: '',
                format: '',
                layout: '',
                baselotno: ''
            }
		},
        M_New(){
        },
        M_Edit(){
        },
        M_Delete(dt){
        },        
        getDataBy (record) {
        }
		
    },
    beforeCreate: function () {
    },
    created: function() {
        this.$store.commit('setFormType','Form')
        this.getToolbar().ProcessPS()
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
