<template>
    <div>        
    <ABSListVuex
      :prop = "propList"
      :title = "data.QueryName"
      @rowClicked="$parent.rowClicked"
      @rowDblClicked="$parent.doDoubleClick"
      @rowLinkClick="$parent.rowLink"
      @pageSize="$parent.M_PageSize"
      @pagination="$parent.M_Pagination"
      @filter="$parent.M_Advance_Filter"
      @headTable="$parent.M_Head_Table"
      @refreshColumn="$parent.refreshColumn"
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
                                        <ABSinputTextVuex :prop="PI_CurrencyCd" v-model="M_CM_CurrencyMaster.CurrencyCd" ref="ref_CurrencyCd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_Descs" v-model="M_CM_CurrencyMaster.Descs" ref="ref_Descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_CurrencySign" v-model="M_CM_CurrencyMaster.CurrencySign"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex :prop="PI_Operator" v-model="M_CM_CurrencyMaster.Operator" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_Rate" v-model="M_CM_CurrencyMaster.Rate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_UnitName" v-model="M_CM_CurrencyMaster.UnitName"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_SubUnitName" v-model="M_CM_CurrencyMaster.SubUnitName"/>
                                      </b-col>
                                    </b-row>
                                    <!-- <div class="div-collapse">
                                        <span class="master-span-form">
                                            Transaction Analysis
                                        </span>
                                    </div>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_Type" v-model="M_CM_CurrencyMaster.Type"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="6">
                                        <ABSInputSelect2 @change="OnTrxAnalysisCdChange" :prop="PI_TrxAnalysisCd" :value="M_CM_CurrencyMaster.TrxAnalysisCd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_FromBank" v-model="M_CM_CurrencyMaster.FromBank"/>
                                      </b-col>
                                    </b-row> -->
                                    <!-- <b-row>
                                        <b-col> -->
                                            <ABSTAnalysis :prop="PTAnalysis"/>
                                        <!-- </b-col>
                                    </b-row> -->
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
    props: {PageLevel: '', TabIndex: '', data: ''},
    data() {
        return {
          cInsertKey:'id=CurrencyCd,label=CurrencyCd+|+Descs',
		FormType: "List",
		Module:"CM",
            propList: {
                initialWhere: "",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_CM_CurrencyMaster :{
                CurrencyCd: '',
                Descs: '',
                CurrencySign: '',
                Operator: '*',
                Rate: '',
                UnitName: '',
                SubUnitName: '',
                RealizeForexGainAccountCd: '',
                RealizeForexLossAccountCd: '',
                UnRealizeForexGainAccountCd: '',
                UnRealizeForexLossAccountCd: '',
                RealizeForexGainPrefixCd: '',
                RealizeForexLossPrefixCd: '',
                UnRealizeForexGainPrefixCd: '',
                UnRealizeForexLossPrefixCd: '',
                GLForexGainAccountCd: '',
                GLForexLossAccountCd: '',
                UserInput: '',
                UserEdit: this.getDataUser().UserId,
                TimeEdit: '',
                T0: '',
                T1: '',
                T2: '',
                T3: '',
                T4: '',
                T5: '',
                T6: '',
                T7: '',
                T8: '',
                T9: '',
                T10: '',
                T11: '',
                T12: '',
                T13: '',
                T14: '',
                T15: '',
                T16: '',
                T17: '',
                T18: '',
                T19: '',
                T20: '',
                T21: '',
                T22: '',
                T23: '',
                T24: '',
                T25: '',
                T26: '',
                T27: '',
                T28: '',
                T29: '',
                T30: '',
                LastUpdateStamp: 0,
                RowId: 0,
                // TrxAnalysisCd: ''
                    }
            ,
            PI_CurrencyCd: { 
                cValidate :'required|max:4', 
                cName:'CurrencyCd', 
                cLabel:'Currency Code', 
                cOrder:1, 
                cKey:true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_Descs: { 
                cValidate :'required|max:60', 
                cName:'Descs', 
                cLabel:'Description', 
                cOrder:2, 
                cKey:false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_CurrencySign: { 
                cValidate :'max:5', 
                cName:'CurrencySign', 
                cLabel:'Currency Sign', 
                cOrder:3, 
                cKey:false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_Operator: { 
                cValidate :'', 
                cName:'Operator', 
                cId:'rdbOperator', 
                cRadioOptions: [{ text: 'Multiply (*)', value: '*' }, { text: 'Divide (/)', value: '/' }], 
                cLabel:'Operator', 
                cOrder:4, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_Rate: { 
                // cValidate :'required|max:12',
                cValidate :'required|max:16|min_value:0.00',
                cName:'Rate', 
                cLabel:'Rate', 
                cOrder:5, 
                cKey:false, 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_UnitName: { 
                cValidate :'max:15', 
                cName:'UnitName', 
                cLabel:'Unit Name', 
                cOrder:6, 
                cKey:false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_SubUnitName: { 
                cValidate :'max:10', 
                cName:'SubUnitName', 
                cLabel:'Sub Unit Name', 
                cOrder:7, 
                cKey:false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            // PI_FromBank: { 
            //     cValidate :'', 
            //     cName:'FromBank', 
            //     cLabel:'From Bank',
            //     cOrder:7, 
            //     cKey:true, 
            //     cPageLevel: this.PageLevel, 
            //     cTabIndex: this.TabIndex, 
            //     cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
            //     cProtect: true 
            // },
            // PI_Type: { 
            //     cValidate :'', 
            //     cName:'Type', 
            //     cLabel:'Type',
            //     cOrder:7, 
            //     cKey:true, 
            //     cPageLevel: this.PageLevel, 
            //     cTabIndex: this.TabIndex, 
            //     cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
            //     cProtect: true 
            // },
            // PI_TrxAnalysisCd: { 
            //     dataLookUp: { 
            //         LookUpCd: 'GetLookupDepartment'    , 
            //         ColumnDB: 'TrxAnalysisCd'   , 
            //         InitialWhere: "SubPortfolioCd='"+this.getDataUser().SubPortfolioCd+"'"   , 
            //         ParamWhere: ''  
            //             }, 
            //     cValidate :'', 
            //     cName:'TrxAnalysisCd', 
            //     cLabel:'Department', 
            //     cOrder:1, 
            //     cPageLevel: this.PageLevel, 
            //     cTabIndex: this.TabIndex, 
            //     cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex                
            // },
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
        // OnTrxAnalysisCdChange (data) {
        //     this.M_CM_CurrencyMaster.TrxAnalysisCd = data.id
        //     this.M_CM_CurrencyMaster.TrxAnalysisCdLabel = data.label

        //     this.$forceUpdate()
        // },
		setToolbarButton () {
           this.getToolbar().statusFunction[0].disabled = true
           this.getToolbar().statusFunction[1].disabled = true
           this.getToolbar().statusFunction[2].disabled = true
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
        M_ClearForm(){
            this.M_CM_CurrencyMaster ={
                CurrencyCd: '',
                Descs: '',
                CurrencySign: '',
                Operator: '*',
                Rate: '',
                UnitName: '',
                SubUnitName: '',
                RealizeForexGainAccountCd: '',
                RealizeForexLossAccountCd: '',
                UnRealizeForexGainAccountCd: '',
                UnRealizeForexLossAccountCd: '',
                RealizeForexGainPrefixCd: '',
                RealizeForexLossPrefixCd: '',
                UnRealizeForexGainPrefixCd: '',
                UnRealizeForexLossPrefixCd: '',
                GLForexGainAccountCd: '',
                GLForexLossAccountCd: '',
                UserInput: '',
                UserEdit: this.getDataUser().UserId,
                TimeEdit: '',
                T0: '',
                T1: '',
                T2: '',
                T3: '',
                T4: '',
                T5: '',
                T6: '',
                T7: '',
                T8: '',
                T9: '',
                T10: '',
                T11: '',
                T12: '',
                T13: '',
                T14: '',
                T15: '',
                T16: '',
                T17: '',
                T18: '',
                T19: '',
                T20: '',
                T21: '',
                T22: '',
                T23: '',
                T24: '',
                T25: '',
                T26: '',
                T27: '',
                T28: '',
                T29: '',
                T30: '',
                LastUpdateStamp: 0,
                RowId: 0,
                // TrxAnalysisCd: ''
            }
            		
        },
        M_New(){
          this.$refs.ref_CurrencyCd.focus()
            //this.$nextTick().then(() => document.getElementById("CurrencyCd").focus())
        },
        M_Edit(){
          this.$refs.ref_Descs.focus()
            //this.$nextTick().then(() => document.getElementById("???").focus())
        },
        M_Delete(dt){
            var data = this.FormToABSList().getRowSelected()  
            var dataDelete = []

            
            data.forEach((value) => {
            dataDelete.push({
                CurrencyCd: value.CurrencyCd,
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
        M_Insert () {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                CurrencyCd: this.M_CM_CurrencyMaster.CurrencyCd,
                Descs: this.M_CM_CurrencyMaster.Descs,
                CurrencySign: this.M_CM_CurrencyMaster.CurrencySign,
                Operator: this.M_CM_CurrencyMaster.Operator,
                Rate: this.M_CM_CurrencyMaster.Rate ? this.replaceAllString(this.M_CM_CurrencyMaster.Rate, ",", "") : 0 ,
                UnitName: this.M_CM_CurrencyMaster.UnitName,
                SubUnitName: this.M_CM_CurrencyMaster.SubUnitName,
                UserInput: this.getDataUser().UserId                 
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return
                this.$parent.resultInsert(response.Message)               
            })
        },
        M_Update () {            
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                CurrencyCd: this.M_CM_CurrencyMaster.CurrencyCd,
                Descs: this.M_CM_CurrencyMaster.Descs,
                CurrencySign: this.M_CM_CurrencyMaster.CurrencySign,
                Operator: this.M_CM_CurrencyMaster.Operator,
                Rate: this.M_CM_CurrencyMaster.Rate ? this.replaceAllString(this.M_CM_CurrencyMaster.Rate, ",", "") : 0 ,
                UnitName: this.M_CM_CurrencyMaster.UnitName,
                SubUnitName: this.M_CM_CurrencyMaster.SubUnitName,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_CM_CurrencyMaster.LastUpdateStamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return
                this.$parent.resultUpdate(response.Message)                
            })

        },
        M_Cancel() {},
        paramFromParent(){
        },		
        rowClicked (record, index) {
        },        
		doDoubleClick(){
        }, 
        rowLink: function(url){            
        },
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                CurrencyCd: record.CurrencyCd
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
                this.M_CM_CurrencyMaster ={
                    CurrencyCd: data.currencycd,
                    Descs: data.descs,
                    CurrencySign: data.currencysign,
                    Operator: data.operator,
                    Rate: this.isCurrency(data.rate, this.decimal),
                    UnitName: data.unitname,
                    SubUnitName: data.subunitname,
                    RealizeForexGainAccountCd: data.realizeforexgainaccountcd,
                    RealizeForexLossAccountCd: data.realizeforexlossaccountcd,
                    UnRealizeForexGainAccountCd: data.unrealizeforexgainaccountcd,
                    UnRealizeForexLossAccountCd: data.unrealizeforexlossaccountcd,
                    RealizeForexGainPrefixCd: data.realizeforexgainprefixcd,
                    RealizeForexLossPrefixCd: data.realizeforexlossprefixcd,
                    UnRealizeForexGainPrefixCd: data.unrealizeforexgainprefixcd,
                    UnRealizeForexLossPrefixCd: data.unrealizeforexlossprefixcd,
                    GLForexGainAccountCd: data.glforexgainaccountcd,
                    GLForexLossAccountCd: data.glforexlossaccountcd,
                    UserInput: data.userinput,
                    UserEdit: data.useredit,
                    TimeEdit: data.timeedit,
                    T0: data.t0,
                    T1: data.t1,
                    T2: data.t2,
                    T3: data.t3,
                    T4: data.t4,
                    T5: data.t5,
                    T6: data.t6,
                    T7: data.t7,
                    T8: data.t8,
                    T9: data.t9,
                    T10: data.t10,
                    T11: data.t11,
                    T12: data.t12,
                    T13: data.t13,
                    T14: data.t14,
                    T15: data.t15,
                    T16: data.t16,
                    T17: data.t17,
                    T18: data.t18,
                    T19: data.t19,
                    T20: data.t20,
                    T21: data.t21,
                    T22: data.t22,
                    T23: data.t23,
                    T24: data.t24,
                    T25: data.t25,
                    T26: data.t26,
                    T27: data.t27,
                    T28: data.t28,
                    T29: data.t29,
                    T30: data.t30,
                    LastUpdateStamp: record.LastUpdateStamp,
                    RowId: data.rowid
                    // ,
                    // TrxAnalysisCd: data.currencycd                
                }
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

