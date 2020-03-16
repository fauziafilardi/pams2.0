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
                <b-col md="12" id="col-left">
                  <b-row>
                    <b-col md="6">
                      <ABSInputSelect2 @change="OnMasterChange" :prop="PI_MasterType" :value="M_WF_Master.masterCd" :label="M_WF_Master.masterLabel" ref="ref_mastertype"/>
                    </b-col>
                  </b-row>
                  <!-- <subPortfolio v-show="isSubportfolio" ref="SubPortfolio" /> -->
                  <Alert v-show="isAlert" :PageLevel="PageLevel" :TabIndex="TabIndex" :data="data" ref="wf_alert" />
                  <Notification v-show="isNotification" :PageLevel="PageLevel" :TabIndex="TabIndex" :data="data" ref="wf_notification" />
                  <Process v-show="isProcess" :PageLevel="PageLevel" :TabIndex="TabIndex" :data="data" ref="wf_process" />
                </b-col>
              </b-row>
              <!-- <ABSTAnalysis :prop="PTAnalysis" /> -->
            </b-form>
          </b-col>
        </b-row>
      </b-collapse>
    </div>
  </div>
</template>

<script>
import Alert from '@/views/WF/WF_Master/PageLevel_1/WF_Alert'
import Notification from '@/views/WF/WF_Master/PageLevel_1/WF_Notification'
import Process from '@/views/WF/WF_Master/PageLevel_1/WF_Process'

export default {
  components: {
    Alert,
    Notification,
    Process
  },
    props: {PageLevel: '', TabIndex: '', data: ''},
    data() {
      return {
        cInsertKey: '',
        FormType: "List",
        Module: "WF",
        propList: {
          // initialWhere: "SubPortfolioCd='" + this.getDataUser().SubPortfolioCd+ "'",
          initialWhere: "",
          LineNo: this.$parent.data.PageOrder,
          PageLevel: this.PageLevel,
          TabIndex: this.TabIndex, 
          OrderBy: '', 
          SourceField: '', 
          ParamView: '' 
        },
    
        IEBy: {Input: '', Edit: ''},
        
        isAlert: false,
        isNotification: false,
        isProcess: false,

        M_WF_Master : {
          masterCd: '',
          masterLabel: ''
        },

        PI_MasterType: { 
          dataLookUp: null, 
          cValidate :'', 
          cName: 'mastertype', 
          cLabel: 'Master Type', 
          cLabelSize: 4, 
          cOrder: 0, 
          cKey: true, 
          cTriggered: false, 
          cDefault: '', 
          cProtect: false, 
          cVisible:  true, 
          cAsync:  false, 
          cFilter: true, 
          cPageLevel: this.PageLevel, 
          cTabIndex: this.TabIndex, 
          cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
          cStatic: true, 
          cOption: [{ label: 'Alert', id: '1' },{ label: 'Notification', id: '2' },{ label: 'Process', id: '3' }], 
          cMasterUrl: '' ,
          cDisplayColumn: '' ,
        },
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
        return this.$store.getters.GetPage1Data
      }
    },
    methods: {		
      OnMasterChange (data) {
        if (this.M_WF_Master.masterCd == data.id) return
        this.$nextTick(() => {
          this.M_WF_Master.masterCd = data.id
          this.M_WF_Master.masterLabel = data.label
          if (this.inputStatus != "VIEW") {
            // this.M_WF_Master.descs = data.Descs
            // this.M_WF_Master.currencysign = data.CurrencySign
          }
          if (data.id == '1') {
            this.isAlert = true
            this.isNotification = false
            this.isProcess = false
          } else if (data.id == '2') {
            this.isAlert = false
            this.isNotification = true
            this.isProcess = false
          } else if (data.id == '3') {
            this.isAlert = false
            this.isNotification = false
            this.isProcess = true
          } else {
            this.isAlert = false
            this.isNotification = false
            this.isProcess = false
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
        // this.$refs.modalTest.show()
      },		
      paramFromParent(){
      },		
      M_Post(){
      },
      M_Insert() {
        var param = {
            OptionSeq: this.getOptionSeq().OptionSeq,
            LineNo: this.$parent.data.PageOrder,
            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
            CurrencyCd: this.M_CM_Currency.currencycd == '' || this.M_CM_Currency.currencycd == null ? 'NULL' : this.M_CM_Currency.currencycd ,
            Operator: this.M_CM_Currency.operator,
            Rate: this.M_CM_Currency.rate ? this.replaceAllString(this.M_CM_Currency.rate,',','','number') : 0 ,
            RealizeForexGainAccountCd: this.M_CM_Currency.realizeforexgainaccountcd == '' || this.M_CM_Currency.realizeforexgainaccountcd == null ? 'NULL' : this.M_CM_Currency.realizeforexgainaccountcd ,
            RealizeForexLossAccountCd: this.M_CM_Currency.realizeforexlossaccountcd == '' || this.M_CM_Currency.realizeforexlossaccountcd == null ? 'NULL' : this.M_CM_Currency.realizeforexlossaccountcd ,
            UnRealizeForexGainAccountCd: this.M_CM_Currency.unrealizeforexgainaccountcd == '' || this.M_CM_Currency.unrealizeforexgainaccountcd == null ? 'NULL' : this.M_CM_Currency.unrealizeforexgainaccountcd ,
            UnRealizeForexLossAccountCd: this.M_CM_Currency.unrealizeforexlossaccountcd == '' || this.M_CM_Currency.unrealizeforexlossaccountcd == null ? 'NULL' : this.M_CM_Currency.unrealizeforexlossaccountcd ,
            RealizeForexGainPrefixCd: this.M_CM_Currency.realizeforexgainprefixcd == '' || this.M_CM_Currency.realizeforexgainprefixcd == null ? 'NULL' : this.M_CM_Currency.realizeforexgainprefixcd ,
            RealizeForexLossPrefixCd: this.M_CM_Currency.realizeforexlossprefixcd == '' || this.M_CM_Currency.realizeforexlossprefixcd == null ? 'NULL' : this.M_CM_Currency.realizeforexlossprefixcd ,
            UnRealizeForexGainPrefixCd: this.M_CM_Currency.unrealizeforexgainprefixcd == '' || this.M_CM_Currency.unrealizeforexgainprefixcd == null ? 'NULL' : this.M_CM_Currency.unrealizeforexgainprefixcd ,
            UnRealizeForexLossPrefixCd: this.M_CM_Currency.unrealizeforexlossprefixcd == '' || this.M_CM_Currency.unrealizeforexlossprefixcd == null ? 'NULL' : this.M_CM_Currency.unrealizeforexlossprefixcd ,
            GLForexGainAccountCd: this.M_CM_Currency.glforexgainaccountcd == '' || this.M_CM_Currency.glforexgainaccountcd == null ? 'NULL' : this.M_CM_Currency.glforexgainaccountcd ,
            GLForexLossAccountCd: this.M_CM_Currency.glforexlossaccountcd == '' || this.M_CM_Currency.glforexlossaccountcd == null ? 'NULL' : this.M_CM_Currency.glforexlossaccountcd ,
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
            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
            CurrencyCd: this.M_CM_Currency.currencycd == '' || this.M_CM_Currency.currencycd == null ? 'NULL' : this.M_CM_Currency.currencycd ,
            Operator: this.M_CM_Currency.operator,
            Rate: this.M_CM_Currency.rate ? this.replaceAllString(this.M_CM_Currency.rate,',','','number') : 0 ,
            RealizeForexGainAccountCd: this.M_CM_Currency.realizeforexgainaccountcd == '' || this.M_CM_Currency.realizeforexgainaccountcd == null ? 'NULL' : this.M_CM_Currency.realizeforexgainaccountcd ,
            RealizeForexLossAccountCd: this.M_CM_Currency.realizeforexlossaccountcd == '' || this.M_CM_Currency.realizeforexlossaccountcd == null ? 'NULL' : this.M_CM_Currency.realizeforexlossaccountcd ,
            UnRealizeForexGainAccountCd: this.M_CM_Currency.unrealizeforexgainaccountcd == '' || this.M_CM_Currency.unrealizeforexgainaccountcd == null ? 'NULL' : this.M_CM_Currency.unrealizeforexgainaccountcd ,
            UnRealizeForexLossAccountCd: this.M_CM_Currency.unrealizeforexlossaccountcd == '' || this.M_CM_Currency.unrealizeforexlossaccountcd == null ? 'NULL' : this.M_CM_Currency.unrealizeforexlossaccountcd ,
            RealizeForexGainPrefixCd: this.M_CM_Currency.realizeforexgainprefixcd == '' || this.M_CM_Currency.realizeforexgainprefixcd == null ? 'NULL' : this.M_CM_Currency.realizeforexgainprefixcd ,
            RealizeForexLossPrefixCd: this.M_CM_Currency.realizeforexlossprefixcd == '' || this.M_CM_Currency.realizeforexlossprefixcd == null ? 'NULL' : this.M_CM_Currency.realizeforexlossprefixcd ,
            UnRealizeForexGainPrefixCd: this.M_CM_Currency.unrealizeforexgainprefixcd == '' || this.M_CM_Currency.unrealizeforexgainprefixcd == null ? 'NULL' : this.M_CM_Currency.unrealizeforexgainprefixcd ,
            UnRealizeForexLossPrefixCd: this.M_CM_Currency.unrealizeforexlossprefixcd == '' || this.M_CM_Currency.unrealizeforexlossprefixcd == null ? 'NULL' : this.M_CM_Currency.unrealizeforexlossprefixcd ,
            GLForexGainAccountCd: this.M_CM_Currency.glforexgainaccountcd == '' || this.M_CM_Currency.glforexgainaccountcd == null ? 'NULL' : this.M_CM_Currency.glforexgainaccountcd ,
            GLForexLossAccountCd: this.M_CM_Currency.glforexlossaccountcd == '' || this.M_CM_Currency.glforexlossaccountcd == null ? 'NULL' : this.M_CM_Currency.glforexlossaccountcd ,
            UserEdit: this.getDataUser().UserId ,
            LastUpdateStamp: this.M_CM_Currency.lastupdatestamp                
        }

        this.postJSON(this.getUrlUpdate(), param)
        .then((response) => {
          if(response == null) return

          //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
          this.$parent.resultUpdate(response.Message)    
        })

      },
      M_ClearForm(){
        this.M_WF_Master = {
          subportfoliocd: this.getDataUser().SubPortfolioCd,
          currencycd: '',
          descs: '',
          currencysign: '',
          unitname: '',
          subunitname: '',
          operator: '*',
          rate: '0',
          realizeforexgainaccountcd: '',
          realizeforexlossaccountcd: '',
          unrealizeforexgainaccountcd: '',
          unrealizeforexlossaccountcd: '',
          realizeforexgainprefixcd: '',
          realizeforexlossprefixcd: '',
          unrealizeforexgainprefixcd: '',
          unrealizeforexlossprefixcd: '',
          glforexgainaccountcd: '',
          glforexlossaccountcd: '',
          userinput: '',
          useredit: this.getDataUser().UserId,
          timeinput: '',
          timeedit: '',
          lastupdatestamp: 0,
          t0: '',
          t1: '',
          t2: '',
          t3: '',
          t4: '',
          t5: '',
          t6: '',
          t7: '',
          t8: '',
          t9: '',
          t10: '',
          t11: '',
          t12: '',
          t13: '',
          t14: '',
          t15: '',
          t16: '',
          t17: '',
          t18: '',
          t19: '',
          t20: '',
          t21: '',
          t22: '',
          t23: '',
          t24: '',
          t25: '',
          t26: '',
          t27: '',
          t28: '',
          t29: '',
          t30: ''
        }
                  
      },
      M_New(){
    
      },
      M_Edit(){
      },
      M_Delete(dt){       
        var param = {
          OptionSeq: this.getOptionSeq().OptionSeq,
          SubPortfolioCd:this.getDataUser().SubPortfolioCd,
          PortfolioCd:this.getDataUser().PortfolioCd,
          LineNo: this.$parent.data.PageOrder,
          Data: dt
        }
          
        this.postJSONMulti( this.getUrlDeleteMulti(), param )
        .then(response => {
          if (response == null) return
          var message = "Deleting Data Successfully"   				
          //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
          this.$parent.resultDelete(message)
        })
      },        
      getDataBy (record) {
        var param = {
          OptionSeq: this.getOptionSeq().OptionSeq,
          LineNo: this.$parent.data.PageOrder,
          subportfoliocd: record.SubPortfolioCd,
          currencycd: record.CurrencyCd
        }

        this.postEncode( this.getUrlById(), param )
        .then(response => {
          // response from API
          if(response == null) return
          
          var data = response.Data[0]
          this.M_WF_Master = {
              subportfoliocd: data.subportfoliocd,
              currencycd: data.currencycd,
              descs: data.descs,
              currencysign: data.currencysign,
              unitname: data.unitname,
              subunitname: data.subunitname,
              operator: data.operator,
              rate: data.rate,
              realizeforexgainaccountcd: data.realizeforexgainaccountcd,
              realizeforexlossaccountcd: data.realizeforexlossaccountcd,
              unrealizeforexgainaccountcd: data.unrealizeforexgainaccountcd,
              unrealizeforexlossaccountcd: data.unrealizeforexlossaccountcd,
              realizeforexgainprefixcd: data.realizeforexgainprefixcd,
              realizeforexlossprefixcd: data.realizeforexlossprefixcd,
              unrealizeforexgainprefixcd: data.unrealizeforexgainprefixcd,
              unrealizeforexlossprefixcd: data.unrealizeforexlossprefixcd,
              glforexgainaccountcd: data.glforexgainaccountcd,
              glforexlossaccountcd: data.glforexlossaccountcd,
              userinput: data.userinput,
              useredit: data.useredit,
              timeinput: data.timeinput,
              timeedit: data.timeedit,
              lastupdatestamp: record.LastUpdateStamp,
              t0: data.t0,
              t1: data.t1,
              t2: data.t2,
              t3: data.t3,
              t4: data.t4,
              t5: data.t5,
              t6: data.t6,
              t7: data.t7,
              t8: data.t8,
              t9: data.t9,
              t10: data.t10,
              t11: data.t11,
              t12: data.t12,
              t13: data.t13,
              t14: data.t14,
              t15: data.t15,
              t16: data.t16,
              t17: data.t17,
              t18: data.t18,
              t19: data.t19,
              t20: data.t20,
              t21: data.t21,
              t22: data.t22,
              t23: data.t23,
              t24: data.t24,
              t25: data.t25,
              t26: data.t26,
              t27: data.t27,
              t28: data.t28,
              t29: data.t29,
              t30: data.t30
          }
            

          this.M_CM_Currency.currencycdLabel = this.M_CM_Currency.currencycd != null ? data.currencycd   :'' 
          this.M_CM_Currency.glforexgainaccountcdLabel = this.M_CM_Currency.glforexgainaccountcd != null ? data.glforexgainaccountcd  :'' 
          this.M_CM_Currency.glforexlossaccountcdLabel = this.M_CM_Currency.glforexlossaccountcd != null ? data.glforexlossaccountcd  :'' 
          this.M_CM_Currency.realizeforexgainprefixcdLabel = this.M_CM_Currency.realizeforexgainprefixcd != null ? data.realizeforexgainprefixcd  :'' 
          this.M_CM_Currency.realizeforexgainaccountcdLabel = this.M_CM_Currency.realizeforexgainaccountcd != null ? data.realizeforexgainaccountcd  :'' 
          this.M_CM_Currency.realizeforexlossprefixcdLabel = this.M_CM_Currency.realizeforexlossprefixcd != null ? data.realizeforexlossprefixcd  :'' 
          this.M_CM_Currency.realizeforexlossaccountcdLabel = this.M_CM_Currency.realizeforexlossaccountcd != null ? data.realizeforexlossaccountcd  :'' 
          this.M_CM_Currency.unrealizeforexgainprefixcdLabel = this.M_CM_Currency.unrealizeforexgainprefixcd != null ? data.unrealizeforexgainprefixcd  :'' 
          this.M_CM_Currency.unrealizeforexgainaccountcdLabel = this.M_CM_Currency.unrealizeforexgainaccountcd != null ? data.unrealizeforexgainaccountcd  :'' 
          this.M_CM_Currency.unrealizeforexlossprefixcdLabel = this.M_CM_Currency.unrealizeforexlossprefixcd != null ? data.unrealizeforexlossprefixcd  :'' 
          this.M_CM_Currency.unrealizeforexlossaccountcdLabel = this.M_CM_Currency.unrealizeforexlossaccountcd != null ? data.unrealizeforexlossaccountcd  :'' 
    

          this.IEBy.Input = data.userinput
          this.IEBy.Edit = data.useredit

        })
      }

    },
    beforeCreate: function () {
    },
    created: function() {
      this.$store.commit('setFormType','List')
      this.getToolbar().ProcessPS()
    },
    beforeMount: function() {
    },
    mounted: function() {
      this.hideSideBarMenu()
      this.FormToABSList().doGetList('','eb_getList')
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