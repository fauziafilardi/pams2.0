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
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_budgetyear" v-model="M_TN_CLBudgetMaintenance.budgetyear"  ref="ref_budgetyear"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_zonecd" v-model="M_TN_CLBudgetMaintenance.zonecd"  ref="ref_zonecd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_zonedescs" v-model="M_TN_CLBudgetMaintenance.zonedescs"  ref="ref_zonedescs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_chargearea" v-model="M_TN_CLBudgetMaintenance.chargearea"  ref="ref_chargearea" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_totalarea" v-model="M_TN_CLBudgetMaintenance.totalarea"  ref="ref_totalarea"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="2"></b-col>
                                        <b-col>
                                          <ABSLabelOnly
                                          :prop="{cLabel: 'Rental Rate', 
                                            cLabelSize: 4, 
                                            cValue: '', 
                                            cPageLevel: PageLevel, 
                                            cTabIndex: TabIndex, 
                                            cVisible: true,
                                            cClass: ''}"
                                          />
                                        </b-col>
                                        <b-col>
                                          <ABSLabelOnly
                                          :prop="{cLabel: 'Jan', 
                                            cLabelSize: 2, 
                                            cValue: '', 
                                            cPageLevel: PageLevel, 
                                            cTabIndex: TabIndex, 
                                            cVisible: true,
                                            cClass: ''}"
                                          />
                                        </b-col>
                                        <b-col>
                                          <ABSLabelOnly
                                          :prop="{cLabel: 'Feb', 
                                            cLabelSize: 2, 
                                            cValue: '', 
                                            cPageLevel: PageLevel, 
                                            cTabIndex: TabIndex, 
                                            cVisible: true,
                                            cClass: ''}"
                                          />
                                        </b-col>
                                        <b-col>
                                          <ABSLabelOnly
                                          :prop="{cLabel: 'Mar', 
                                            cLabelSize: 2, 
                                            cValue: '', 
                                            cPageLevel: PageLevel, 
                                            cTabIndex: TabIndex, 
                                            cVisible: true,
                                            cClass: ''}"
                                          />
                                        </b-col>
                                        <b-col>
                                          <ABSLabelOnly
                                          :prop="{cLabel: 'Apr', 
                                            cLabelSize: 2, 
                                            cValue: '', 
                                            cPageLevel: PageLevel, 
                                            cTabIndex: TabIndex, 
                                            cVisible: true,
                                            cClass: ''}"
                                          />
                                        </b-col>
                                        <b-col>
                                          <ABSLabelOnly
                                          :prop="{cLabel: 'May', 
                                            cLabelSize: 2, 
                                            cValue: '', 
                                            cPageLevel: PageLevel, 
                                            cTabIndex: TabIndex, 
                                            cVisible: true,
                                            cClass: ''}"
                                          />
                                        </b-col>
                                        <b-col>
                                          <ABSLabelOnly
                                          :prop="{cLabel: 'Jun', 
                                            cLabelSize: 2, 
                                            cValue: '', 
                                            cPageLevel: PageLevel, 
                                            cTabIndex: TabIndex, 
                                            cVisible: true,
                                            cClass: ''}"
                                          />
                                        </b-col>
                                        <b-col>
                                          <ABSLabelOnly
                                          :prop="{cLabel: 'Jul', 
                                            cLabelSize: 2, 
                                            cValue: '', 
                                            cPageLevel: PageLevel, 
                                            cTabIndex: TabIndex, 
                                            cVisible: true,
                                            cClass: ''}"
                                          />
                                        </b-col>
                                        <b-col>
                                          <ABSLabelOnly
                                          :prop="{cLabel: 'Aug', 
                                            cLabelSize: 2, 
                                            cValue: '', 
                                            cPageLevel: PageLevel, 
                                            cTabIndex: TabIndex, 
                                            cVisible: true,
                                            cClass: ''}"
                                          />
                                        </b-col>
                                        <b-col>
                                          <ABSLabelOnly
                                          :prop="{cLabel: 'Sept', 
                                            cLabelSize: 2, 
                                            cValue: '', 
                                            cPageLevel: PageLevel, 
                                            cTabIndex: TabIndex, 
                                            cVisible: true,
                                            cClass: ''}"
                                          />
                                        </b-col>
                                        <b-col>
                                          <ABSLabelOnly
                                          :prop="{cLabel: 'Oct', 
                                            cLabelSize: 2, 
                                            cValue: '', 
                                            cPageLevel: PageLevel, 
                                            cTabIndex: TabIndex, 
                                            cVisible: true,
                                            cClass: ''}"
                                          />
                                        </b-col>
                                        <b-col>
                                          <ABSLabelOnly
                                          :prop="{cLabel: 'Nov', 
                                            cLabelSize: 2, 
                                            cValue: '', 
                                            cPageLevel: PageLevel, 
                                            cTabIndex: TabIndex, 
                                            cVisible: true,
                                            cClass: ''}"
                                          />
                                        </b-col>
                                        <b-col>
                                          <ABSLabelOnly
                                          :prop="{cLabel: 'Des', 
                                            cLabelSize: 2, 
                                            cValue: '', 
                                            cPageLevel: PageLevel, 
                                            cTabIndex: TabIndex, 
                                            cVisible: true,
                                            cClass: ''}"
                                          />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="2"></b-col>
                                      <b-col>
                                        <ABSTextBoxOnly :prop="PI_rentalrate" v-model="M_TN_CLBudgetMaintenance.rentalrate"  ref="ref_rentalrate"/>
                                      </b-col>
                                      <b-col>
                                        <ABSTextBoxOnly :prop="PI_jan" v-model="M_TN_CLBudgetMaintenance.january"  ref="ref_january"/>
                                      </b-col>
                                      <b-col>
                                        <ABSTextBoxOnly :prop="PI_feb" v-model="M_TN_CLBudgetMaintenance.february"  ref="ref_feb"/>
                                      </b-col>
                                      <b-col>
                                        <ABSTextBoxOnly :prop="PI_mar" v-model="M_TN_CLBudgetMaintenance.march"  ref="ref_mar"/>
                                      </b-col>
                                      <b-col>
                                        <ABSTextBoxOnly :prop="PI_apr" v-model="M_TN_CLBudgetMaintenance.april"  ref="ref_apr"/>
                                      </b-col>
                                      <b-col>
                                        <ABSTextBoxOnly :prop="PI_may" v-model="M_TN_CLBudgetMaintenance.may"  ref="ref_may"/>
                                      </b-col>
                                      <b-col>
                                        <ABSTextBoxOnly :prop="PI_jun" v-model="M_TN_CLBudgetMaintenance.june"  ref="ref_jun"/>
                                      </b-col>
                                      <b-col>
                                        <ABSTextBoxOnly :prop="PI_jul" v-model="M_TN_CLBudgetMaintenance.july"  ref="ref_jul"/>
                                      </b-col>
                                      <b-col>
                                        <ABSTextBoxOnly :prop="PI_aug" v-model="M_TN_CLBudgetMaintenance.august"  ref="ref_aug"/>
                                      </b-col>
                                      <b-col>
                                        <ABSTextBoxOnly :prop="PI_sep" v-model="M_TN_CLBudgetMaintenance.september"  ref="ref_sep"/>
                                      </b-col>
                                      <b-col>
                                        <ABSTextBoxOnly :prop="PI_oct" v-model="M_TN_CLBudgetMaintenance.october"  ref="ref_oct"/>
                                      </b-col>
                                      <b-col>
                                        <ABSTextBoxOnly :prop="PI_nov" v-model="M_TN_CLBudgetMaintenance.november"  ref="ref_nov"/>
                                      </b-col>
                                      <b-col>
                                        <ABSTextBoxOnly :prop="PI_dec" v-model="M_TN_CLBudgetMaintenance.december"  ref="ref_dec"/>
                                      </b-col>
                                    </b-row>
                                <!-- <b-col md="12" id="col-left">
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_rentalrate" v-model="M_TN_CLBudgetMaintenance.rentalrate"  ref="ref_rentalrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_jan" v-model="M_TN_CLBudgetMaintenance.january"  ref="ref_january"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_feb" v-model="M_TN_CLBudgetMaintenance.february"  ref="ref_feb"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_mar" v-model="M_TN_CLBudgetMaintenance.march"  ref="ref_mar"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_apr" v-model="M_TN_CLBudgetMaintenance.april"  ref="ref_apr"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_may" v-model="M_TN_CLBudgetMaintenance.may"  ref="ref_may"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_jun" v-model="M_TN_CLBudgetMaintenance.june"  ref="ref_jun"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_jul" v-model="M_TN_CLBudgetMaintenance.july"  ref="ref_jul"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_aug" v-model="M_TN_CLBudgetMaintenance.august"  ref="ref_aug"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_sep" v-model="M_TN_CLBudgetMaintenance.september"  ref="ref_sep"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_oct" v-model="M_TN_CLBudgetMaintenance.october"  ref="ref_oct"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_nov" v-model="M_TN_CLBudgetMaintenance.november"  ref="ref_nov"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_dec" v-model="M_TN_CLBudgetMaintenance.december"  ref="ref_dec"/>
                                      </b-col>
                                    </b-row>
                                </b-col> -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnstatusChange" :prop="PI_status" v-model="M_TN_CLBudgetMaintenance.status"  ref="ref_status" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnreasoncdChange" :prop="PI_reasoncd" :value="M_TN_CLBudgetMaintenance.reasoncd" :label="M_TN_CLBudgetMaintenance.reasoncdLabel" ref="ref_reasoncd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_reasondescs" v-model="M_TN_CLBudgetMaintenance.reasondescs"  ref="ref_reasondescs"/>
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
		FormType: "List",
		Module:"TN",
            propList: {
                initialWhere: "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND Status = 'A'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_TN_CLBudgetMaintenance :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                sequenceno: 0,
                budgetyear: '0',
                zonecd: '',
                zonedescs: '',
                rentalrate: '0',
                rentalratereference: '',
                chargearea: '',
                totalarea: '0',
                january: 0,
                januaryrevenue: 0,
                february: 0,
                februaryrevenue: 0,
                march: 0,
                marchrevenue: 0,
                april: 0,
                aprilrevenue: 0,
                may: 0,
                mayrevenue: 0,
                june: 0,
                junerevenue: 0,
                july: 0,
                julyrevenue: 0,
                august: 0,
                augustrevenue: 0,
                september: 0,
                septemberrevenue: 0,
                october: 0,
                octoberrevenue: 0,
                november: 0,
                novemberrevenue: 0,
                december: 0,
                decemberrevenue: 0,
                status: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                lastupdatestamp: 0,
                rowid: 0,
                reasoncd: '',
                reasondescs: ''
                    }
            ,
            PI_budgetyear: { 
                cValidate :'', 
                cName: 'budgetyear', 
                cLabel: 'Budget Year', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_zonecd: { 
                cValidate :'', 
                cName: 'zonecd', 
                cLabel: 'Zone Code', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_zonedescs: { 
                cValidate :'', 
                cName: 'zonedescs', 
                cLabel: 'Description', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_chargearea: { 
                cLabel: 'Charge Area', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_totalarea: { 
                cValidate :'', 
                cName: 'totalarea', 
                cLabel: 'Total Area', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_rentalrate: { 
                cValidate :'', 
                cName: 'rentalrate', 
                cLabel: 'Rental Rate', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_jan: { 
                cValidate :'', 
                cName: 'jan', 
                cLabel: 'Jan', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_feb: { 
                cValidate :'', 
                cName: 'feb', 
                cLabel: 'Feb', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_mar: { 
                cValidate :'', 
                cName: 'mar', 
                cLabel: 'Mar', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_apr: { 
                cValidate :'', 
                cName: 'apr', 
                cLabel: 'Apr', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_may: { 
                cValidate :'', 
                cName: 'may', 
                cLabel: 'May', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_jun: { 
                cValidate :'', 
                cName: 'jun', 
                cLabel: 'Jun', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_jul: { 
                cValidate :'', 
                cName: 'jul', 
                cLabel: 'Jul', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_aug: { 
                cValidate :'', 
                cName: 'aug', 
                cLabel: 'Aug', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_sep: { 
                cValidate :'', 
                cName: 'sep', 
                cLabel: 'Sep', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            PI_oct: { 
                cValidate :'', 
                cName: 'oct', 
                cLabel: 'Oct', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_nov: { 
                cValidate :'', 
                cName: 'nov', 
                cLabel: 'Nov', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_dec: { 
                cValidate :'', 
                cName: 'dec', 
                cLabel: 'Dec', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_status: { 
                cValidate :'', 
                cName: 'status', 
                cId: 'rdbstatus', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: '', 
                cLabel:'Cancel', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_reasoncd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMReason'    , 
                    ColumnDB: 'ReasonCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'reasoncd', 
                cLabel: 'Reason', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 0, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: true, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: 'CM/CM_Reason' ,
                cDisplayColumn: 'ReasonCd,Descs' ,
            }, 
            PI_reasondescs: { 
                cValidate :'required|max:150', 
                cName: 'reasondescs', 
                cLabel: 'Reason Description', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
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
    },
	DataRow(){
		return this.$store.getters.GetPage1Data
	}
  },
    methods: {		
        OnstatusChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
                if ( data == 'Y') {
                  this.PI_reasoncd.cProtect = false
                  this.PI_reasondescs.cProtect = false
                } 
                else {
                  this.PI_reasoncd.cProtect = true
                  this.PI_reasondescs.cProtect = true
                  this.M_TN_CLBudgetMaintenance.reasoncd = ""
                  this.M_TN_CLBudgetMaintenance.reasoncdLabel = ""
                  this.M_TN_CLBudgetMaintenance.reasondescs = ""
                }
            }
        })
        this.$forceUpdate()
        },
        OnreasoncdChange (data) {
        this.$nextTick(() => {
            this.M_TN_CLBudgetMaintenance.reasoncd = data.id
            this.M_TN_CLBudgetMaintenance.reasoncdLabel = data.label
            if (this.inputStatus != "VIEW") {
              this.M_TN_CLBudgetMaintenance.reasondescs = data.Descs
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
        },		
        M_Post(dt){
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
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                SequenceNo: this.M_TN_CLBudgetMaintenance.sequenceno,
                Status: this.M_TN_CLBudgetMaintenance.status == 'Y' ? 'X' : 'A',
                ReasonCd: this.M_TN_CLBudgetMaintenance.reasoncd == '' || this.M_TN_CLBudgetMaintenance.reasoncd == null ? 'NULL' : this.M_TN_CLBudgetMaintenance.reasoncd ,
                ReasonDescs: this.M_TN_CLBudgetMaintenance.reasondescs,
                CancelBy: this.M_TN_CLBudgetMaintenance.status == 'Y' ? this.getDataUser().UserId : null,
                CancelDate: this.M_TN_CLBudgetMaintenance.status == 'Y' ? new Date() : null,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_CLBudgetMaintenance.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_TN_CLBudgetMaintenance = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                sequenceno: 0,
                budgetyear: '0',
                zonecd: '',
                zonedescs: '',
                rentalrate: '0',
                rentalratereference: '',
                chargearea: '',
                totalarea: '0',
                january: 0,
                januaryrevenue: 0,
                february: 0,
                februaryrevenue: 0,
                march: 0,
                marchrevenue: 0,
                april: 0,
                aprilrevenue: 0,
                may: 0,
                mayrevenue: 0,
                june: 0,
                junerevenue: 0,
                july: 0,
                julyrevenue: 0,
                august: 0,
                augustrevenue: 0,
                september: 0,
                septemberrevenue: 0,
                october: 0,
                octoberrevenue: 0,
                november: 0,
                novemberrevenue: 0,
                december: 0,
                decemberrevenue: 0,
                status: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                lastupdatestamp: 0,
                rowid: 0,
                reasoncd: '',
                reasondescs: ''
                    }
            		
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
                LineNo: this.$parent.data.PageOrder
,                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                sequenceno: record.SequenceNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0] 
                var chargearea = ""
                if(data.chargearea){
                  if(data.chargearea == 'N'){
                    chargearea = "Net Area"
                  }
                  else{
                    chargearea = "Gross"
                  }
                }

                if ( data.status == 'X') {
                  this.PI_reasoncd.cProtect = false
                  this.PI_reasondescs.cProtect = false
                } 
                else {
                  this.PI_reasoncd.cProtect = true
                  this.PI_reasondescs.cProtect = true
                }

this.M_TN_CLBudgetMaintenance = {
                subportfoliocd: data.subportfoliocd,
                sequenceno: record.SequenceNo,
                budgetyear: data.budgetyear,
                zonecd: data.zonecd,
                zonedescs: data.zonedescs,
                rentalrate: this.isCurrency(data.rentalrate, this.decimal),
                rentalratereference: data.rentalratereference,
                chargearea: chargearea,
                totalarea: this.isCurrency(data.totalarea, this.decimal),
                january: this.isCurrency(data['01january'], this.decimal),
                januaryrevenue: this.isCurrency(data['01januaryrevenue'], this.decimal),
                february: this.isCurrency(data['02february'], this.decimal),
                februaryrevenue: this.isCurrency(data['02februaryrevenue'], this.decimal),
                march: this.isCurrency(data['03march'], this.decimal),
                marchrevenue: this.isCurrency(data['03marchrevenue'], this.decimal),
                april: this.isCurrency(data['04april'], this.decimal),
                aprilrevenue: this.isCurrency(data['04aprilrevenue'], this.decimal),
                may: this.isCurrency(data['05may'], this.decimal),
                mayrevenue: this.isCurrency(data['05mayrevenue'], this.decimal),
                june: this.isCurrency(data['06june'], this.decimal),
                junerevenue: this.isCurrency(data['06junerevenue'], this.decimal),
                july: this.isCurrency(data['07july'], this.decimal),
                julyrevenue: this.isCurrency(data['07julyrevenue'], this.decimal),
                august: this.isCurrency(data['08august'], this.decimal),
                augustrevenue: this.isCurrency(data['08augustrevenue'], this.decimal),
                september: this.isCurrency(data['09september'], this.decimal),
                septemberrevenue: this.isCurrency(data['09septemberrevenue'], this.decimal),
                october: this.isCurrency(data['10october'], this.decimal),
                octoberrevenue: this.isCurrency(data['10octoberrevenue'], this.decimal),
                november: this.isCurrency(data['11november'], this.decimal),
                novemberrevenue: this.isCurrency(data['11novemberrevenue'], this.decimal),
                december: this.isCurrency(data['12december'], this.decimal),
                decemberrevenue: this.isCurrency(data['12decemberrevenue'], this.decimal),
                status: data.status == 'A' ? 'N' : 'Y',
                userinput: data.userinput,
                useredit: data.useredit,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid,
                reasoncd: data.reasoncd,
                reasondescs: data.reasondescs
                    }                 

                this.M_TN_CLBudgetMaintenance.reasoncdLabel = this.M_TN_CLBudgetMaintenance.reasoncd != null && this.M_TN_CLBudgetMaintenance.reasoncd != '' ? data.reasoncd + this.separator  :'' 
         

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

