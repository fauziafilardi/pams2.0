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
      @checkboxChecked = "$parent.checkboxChecked"
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
                                <b-col md="6" id="col-left">
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSinputTextVuex :prop="PI_lotno" v-model="M_AR_UpdateTenantDebtorByLot.lotno"  ref="ref_lotno"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSInputSelectList @change="OndebtorcdChange" :prop="PI_debtorcd" :value="M_AR_UpdateTenantDebtorByLot.debtorcd" :label="M_AR_UpdateTenantDebtorByLot.debtorcdLabel" ref="ref_debtorcd"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                        <ABSInputSelectList @change="OnlottypeChange" :prop="PI_lottype" :value="M_AR_UpdateTenantDebtorByLot.lottype" :label="M_AR_UpdateTenantDebtorByLot.lottypeLabel" ref="ref_lottype"/>
                                      </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSInputSelectList @change="OnblockcdChange" :prop="PI_blockcd" :value="M_AR_UpdateTenantDebtorByLot.blockcd" :label="M_AR_UpdateTenantDebtorByLot.blockcdLabel" ref="ref_blockcd"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSInputSelectList @change="OnfloorcdChange" :prop="PI_floorcd" :value="M_AR_UpdateTenantDebtorByLot.floorcd" :label="M_AR_UpdateTenantDebtorByLot.floorcdLabel" ref="ref_floorcd"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSinputTextVuex :prop="PI_descs" v-model="M_AR_UpdateTenantDebtorByLot.descs"  ref="ref_descs"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSinputTextVuex :prop="PI_address1" v-model="M_AR_UpdateTenantDebtorByLot.address1"  ref="ref_address1"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSinputTextVuex :prop="PI_address2" v-model="M_AR_UpdateTenantDebtorByLot.address2"  ref="ref_address2"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSinputTextVuex :prop="PI_address3" v-model="M_AR_UpdateTenantDebtorByLot.address3"  ref="ref_address3"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSinputTextVuex :prop="PI_address4" v-model="M_AR_UpdateTenantDebtorByLot.address4"  ref="ref_address4"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSinputTextVuex :prop="PI_zipcode" v-model="M_AR_UpdateTenantDebtorByLot.zipcode"  ref="ref_zipcode"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                      <b-col  md="12">
                                        <ABSInputSelectList @change="OncitycdChange" :prop="PI_citycd" :value="M_AR_UpdateTenantDebtorByLot.citycd" :label="M_AR_UpdateTenantDebtorByLot.citycdLabel" ref="ref_citycd"/>
                                      </b-col>
                                  </b-row>
                                  <b-row>
                                      <b-col  md="12">
                                        <ABSInputSelectList @change="OnlotthemecdChange" :prop="PI_lotthemecd" :value="M_AR_UpdateTenantDebtorByLot.lotthemecd" :label="M_AR_UpdateTenantDebtorByLot.lotthemecdLabel" ref="ref_lotthemecd"/>
                                      </b-col>
                                  </b-row>
                                  <b-row>
                                      <b-col  md="12">
                                        <ABSInputSelectList @change="OnlotclasscdChange" :prop="PI_lotclasscd" :value="M_AR_UpdateTenantDebtorByLot.lotclasscd" :label="M_AR_UpdateTenantDebtorByLot.lotclasscdLabel" ref="ref_lotclasscd"/>
                                      </b-col>
                                  </b-row>
                                  <b-row>
                                      <b-col  md="12">
                                        <ABSInputSelectList @change="OnlotcategorycdChange" :prop="PI_lotcategorycd" :value="M_AR_UpdateTenantDebtorByLot.lotcategorycd" :label="M_AR_UpdateTenantDebtorByLot.lotcategorycdLabel" ref="ref_lotcategorycd"/>
                                      </b-col>
                                  </b-row>
                                  <b-row>
                                      <b-col  md="12">
                                        <ABSInputSelectList @change="OnzoningcdChange" :prop="PI_zoningcd" :value="M_AR_UpdateTenantDebtorByLot.zoningcd" :label="M_AR_UpdateTenantDebtorByLot.zoningcdLabel" ref="ref_zoningcd"/>
                                      </b-col>
                                  </b-row>
                                  <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_zoningnumber" v-model="M_AR_UpdateTenantDebtorByLot.zoningnumber"  ref="ref_zoningnumber"/>
                                      </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSinputTextVuex :prop="PI_zoningcolor" v-model="M_AR_UpdateTenantDebtorByLot.zoningcolor"  ref="ref_zoningcolor"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSinputRadioButtonVuex @input="OnstratastatusChange" :prop="PI_stratastatus" v-model="M_AR_UpdateTenantDebtorByLot.stratastatus"  ref="ref_stratastatus" />
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSinputDateVuex @input="OneffectivedateChange" :prop="PI_effectivedate" v-model="M_AR_UpdateTenantDebtorByLot.effectivedate"  ref="ref_effectivedate" />
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSinputRadioButtonVuex @input="OnantennaChange" :prop="PI_antenna" v-model="M_AR_UpdateTenantDebtorByLot.antenna"  ref="ref_antenna" />
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSinputRadioButtonVuex @input="OnfixchargesChange" :prop="PI_fixcharges" v-model="M_AR_UpdateTenantDebtorByLot.fixcharges"  ref="ref_fixcharges" />
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSinputRadioButtonVuex @input="OnleasableareaChange" :prop="PI_leasablearea" v-model="M_AR_UpdateTenantDebtorByLot.leasablearea"  ref="ref_leasablearea" />
                                    </b-col>
                                  </b-row>
                                </b-col>					

                                <b-col md="6" id="col-right"> <!-- table open -->
                                    <b-row>                                      
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_status" v-model="M_AR_UpdateTenantDebtorByLot.status"  ref="ref_status"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>                                      
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_ownerid" v-model="M_AR_UpdateTenantDebtorByLot.ownerid"  ref="ref_ownerid"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>                                      
                                      <b-col md="12">
                                        <ABSInputSelectList @change="OnlotclusterChange" :prop="PI_lotcluster" :value="M_AR_UpdateTenantDebtorByLot.lotcluster" :label="M_AR_UpdateTenantDebtorByLot.lotclusterLabel" ref="ref_lotcluster"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>                                      
                                      <b-col md="12">
                                        <ABSInputSelectList @change="OndirectioncdChange" :prop="PI_directioncd" :value="M_AR_UpdateTenantDebtorByLot.directioncd" :label="M_AR_UpdateTenantDebtorByLot.directioncdLabel" ref="ref_directioncd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>                                      
                                      <b-col md="12">
                                        <ABSInputSelectList @change="OnsectorcdChange" :prop="PI_sectorcd" :value="M_AR_UpdateTenantDebtorByLot.sectorcd" :label="M_AR_UpdateTenantDebtorByLot.sectorcdLabel" ref="ref_sectorcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>                                      
                                      <b-col md="12">
                                        <ABSInputSelectList @change="OnviewcdChange" :prop="PI_viewcd" :value="M_AR_UpdateTenantDebtorByLot.viewcd" :label="M_AR_UpdateTenantDebtorByLot.viewcdLabel" ref="ref_viewcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>                                      
                                      <b-col md="12">
                                        <!-- <ABSinputTextVuex :prop="PI_measurementcd" v-model="M_AR_UpdateTenantDebtorByLot.measurementcd"  ref="ref_measurementcd"/> -->
                                        <ABSInputSelectList @change="OnmeasurementcdChange" :prop="PI_measurementcd" :value="M_AR_UpdateTenantDebtorByLot.measurementcd" :label="M_AR_UpdateTenantDebtorByLot.measurementcdLabel" ref="ref_measurementcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>                                      
                                      <b-col md="12">
                                        <ABSCompute :prop="PI_grossseminetarea" v-model="M_AR_UpdateTenantDebtorByLot.grossseminetarea"  ref="ref_grossseminetarea" />
                                      </b-col>
                                    </b-row>
                                    <b-row>                                      
                                      <b-col md="12">
                                        <ABSinputRadioButtonVuex @input="OnchargeareaChange" :prop="PI_chargearea" v-model="M_AR_UpdateTenantDebtorByLot.chargearea"  ref="ref_chargearea" />
                                      </b-col>
                                    </b-row>
                                    <b-row>                                      
                                      <b-col md="12">
                                        <ABSinputRadioButtonVuex @input="OnfurnishedChange" :prop="PI_furnished" v-model="M_AR_UpdateTenantDebtorByLot.furnished"  ref="ref_furnished" />
                                      </b-col>
                                    </b-row>                                    
                                    <b-row>
                                      
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_totalroom" v-model="M_AR_UpdateTenantDebtorByLot.totalroom"  ref="ref_totalroom"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_yeardevelopment" v-model="M_AR_UpdateTenantDebtorByLot.yeardevelopment"  ref="ref_yeardevelopment"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_insuranceno" v-model="M_AR_UpdateTenantDebtorByLot.insuranceno"  ref="ref_insuranceno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_parkinglot" v-model="M_AR_UpdateTenantDebtorByLot.parkinglot"  ref="ref_parkinglot"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_electricity" v-model="M_AR_UpdateTenantDebtorByLot.electricity"  ref="ref_electricity"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>                                      
                                      <b-col md="12">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_AR_UpdateTenantDebtorByLot.remarks"  ref="ref_remarks" />
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
		Module:"AR",
            propList: {
                initialWhere: "",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: "'"+ this.getDataUser().SubPortfolioCd +"', 'L'" 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_AR_UpdateTenantDebtorByLot :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                lotno: '',
                lottype: '',
                blockcd: '',
                floorcd: '',
                descs: '',
                address1: '',
                address2: '',
                address3: '',
                address4: '',
                citycd: '',
                zipcode: '',
                lotthemecd: '',
                lotclasssequenceno: 0,
                lotcategorysequenceno: 0,
                ownerid: '',
                occupantid: '',
                directioncd: '',
                sectorcd: '',
                viewcd: '',
                zonecd: '',
                measurementcd: '',
                furnished: '',
                totalroom: '0',
                yeardevelopment: '0',
                insuranceno: '',
                parkinglot: '0',
                electricity: '0',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                status: '',
                zoningcd: '',
                zoningnumber: '',
                l0: '',
                l1: '',
                l2: '',
                l3: '',
                l4: '',
                l5: '',
                l6: '',
                l7: '',
                l8: '',
                l9: '',
                status2: '',
                lotclasscd: '',
                lotclassdescs: '',
                lotcategorycd: '',
                lotcategorydescs: '',
                lotthemedescs: '',
                lottypedescs: '',
                blockdescs: '',
                floordescs: '',
                citydescs: '',
                ownername: '',
                directiondescs: '',
                sectordescs: '',
                viewdescs: '',
                measurementdescs: '',
                chargearea: '',
                rentalrate: 0,
                rentalamt: 0,
                rentalcurrencycd: '',
                servicechargerate: 0,
                servicechargeamt: 0,
                servicechargecurrencycd: '',
                sinkingfundrate: 0,
                sinkingfundamt: 0,
                sinkingfundcurrencycd: '',
                debtorcd: '',
                stratastatus: '',
                effectivedate: '',
                lotusage: '',
                lotcluster: '',
                lotclusterdescs: '',
                antenna: '',
                fixcharges: '',
                leasablearea: '',
                grossarea: '',
                semigrossarea: '',
                netarea: '',
                customercategorydescs: '',
                zonedescs: '',
                remarks: '',
                detorname: '',
                lastupdatestamp: 0,
                rowid: 0,
                grossseminetarea: ''
                    }
            ,
            PI_lotno: { 
                cValidate :'', 
                cName: 'lotno', 
                cLabel: 'Lot No', 
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
            PI_status: { 
                cValidate :'', 
                cName: 'status', 
                cLabel: 'Status', 
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
            PI_debtorcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupDebtorByLot'    , 
                    ColumnDB: 'DebtorCd'   , 
                    InitialWhere: "", 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'DebtorCd,DebtorName,CreditTermsCd,TimeEdit' 
                        }, 
                cValidate :'required', 
                cName: 'debtorcd', 
                cLabel: 'Debtor Code', 
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
                cMasterUrl: 'AR/AR_Debtor' ,
                cDisplayColumn: 'DebtorCd,DebtorName,CreditTermsCd,TimeEdit' ,
            }, 
            PI_ownerid: { 
                cValidate :'', 
                cName: 'ownerid', 
                cLabel: 'Owner ID', 
                cLabelSize: 4, 
                cOrder: 14, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_lottype: { 
                dataLookUp: { 
                    LookUpCd: ''    , 
                    ColumnDB: ''   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: '' 
                        }, 
                cValidate :'', 
                cName: 'lottype', 
                cLabel: 'Lot Type', 
                cKey: true, 
                cLabelSize: 4, 
                cOrder: 2, 
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
                cDisplayColumn: '' ,
            }, 
            PI_lotcluster: { 
                dataLookUp: { 
                    LookUpCd: ''    , 
                    ColumnDB: ''   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: '' 
                        }, 
                cValidate :'', 
                cName: 'lotcluster', 
                cLabel: 'Lot Cluster', 
                cKey: true, 
                cLabelSize: 4, 
                cOrder: 14, 
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
                cDisplayColumn: '' ,
            }, 
            PI_blockcd: { 
                dataLookUp: { 
                    LookUpCd: ''    , 
                    ColumnDB: ''   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: '' 
                        }, 
                cValidate :'', 
                cName: 'blockcd', 
                cLabel: 'Block', 
                cKey: true, 
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
                cMasterUrl: '' ,
                cDisplayColumn: '' ,
            }, 
            PI_directioncd: { 
                dataLookUp: { 
                    LookUpCd: ''    , 
                    ColumnDB: ''   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: '' 
                        }, 
                cValidate :'', 
                cName: 'directioncd', 
                cLabel: 'Direction', 
                cKey: true, 
                cLabelSize: 4, 
                cOrder: 16, 
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
                cDisplayColumn: '' ,
            }, 
            PI_floorcd: { 
                dataLookUp: { 
                    LookUpCd: ''    , 
                    ColumnDB: ''   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: '' 
                        }, 
                cValidate :'', 
                cName: 'floorcd', 
                cLabel: 'Floor  ', 
                cKey: true, 
                cLabelSize: 4, 
                cOrder: 4, 
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
                cDisplayColumn: '' ,
            }, 
            PI_sectorcd: { 
                dataLookUp: { 
                    LookUpCd: ''    , 
                    ColumnDB: ''   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: '' 
                        }, 
                cValidate :'', 
                cName: 'sectorcd', 
                cLabel: 'Sector', 
                cKey: true, 
                cLabelSize: 4, 
                cOrder: 17, 
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
                cDisplayColumn: '' ,
            }, 
            PI_descs: { 
                cValidate :'', 
                cName: 'descs', 
                cLabel: 'Description', 
                cLabelSize: 4, 
                cOrder: 5, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_viewcd: { 
                dataLookUp: { 
                    LookUpCd: ''    , 
                    ColumnDB: ''   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: '' 
                        }, 
                cValidate :'', 
                cName: 'viewcd', 
                cLabel: 'View', 
                cKey: true, 
                cLabelSize: 4, 
                cOrder: 18, 
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
                cDisplayColumn: '' ,
            }, 
            PI_address1: { 
                cValidate :'', 
                cName: 'address1', 
                cLabel: 'Address', 
                cLabelSize: 4, 
                cOrder: 6, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_measurementcd: { 
                dataLookUp: { 
                    LookUpCd: ''    , 
                    ColumnDB: ''   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: '' 
                        }, 
                cValidate :'', 
                cName: 'measurementcd', 
                cLabel: 'Measurement', 
                cKey: true, 
                cLabelSize: 4, 
                cOrder: 18, 
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
                cDisplayColumn: '' , 
            }, 
            PI_address2: { 
                cValidate :'', 
                cName: 'address2', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 7, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_grossseminetarea: { 
                cLabel: 'Gross / Semi Gross / Net Area', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_address3: { 
                cValidate :'', 
                cName: 'address3', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 8, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_chargearea: { 
                cValidate :'', 
                cName: 'chargearea', 
                cId: 'rdbchargearea', 
                cRadioOptions: [{ text: 'Gross Area', value: 'G' }, { text: 'Semi Gross Area', value: 'S' }, { text: 'Net Area', value: 'N' }], 
                cRadioDefaultOption: '', 
                cLabel:'Charge Area', 
                cLabelSize: 4, 
                cDefault: '', 
                cOrder: 25, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cKey: true, 
            }, 
            PI_address4: { 
                cValidate :'', 
                cName: 'address4', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 9, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_furnished: { 
                cValidate :'', 
                cName: 'furnished', 
                cId: 'rdbfurnished', 
                cRadioOptions: [{ text: 'Un-Furnished', value: 'U' },{ text: 'Semi-Furnished', value: 'S' },{ text: 'Fully-Furnished', value: 'F' },], 
                cRadioDefaultOption: '', 
                cLabel:'Furnished', 
                cLabelSize: 4, 
                cDefault: '', 
                cOrder: 26,
                cKey: true, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_zipcode: { 
                cValidate :'', 
                cName: 'zipcode', 
                cLabel: 'Zip Code', 
                cLabelSize: 4, 
                cOrder: 10, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_citycd: { 
                dataLookUp: { 
                    LookUpCd: ''    , 
                    ColumnDB: ''   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: '' 
                        }, 
                cValidate :'', 
                cName: 'citycd', 
                cLabel: 'City', 
                cKey: true, 
                cLabelSize: 4, 
                cOrder: 11, 
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
                cDisplayColumn: '' ,
            }, 
            PI_totalroom: { 
                cValidate :'', 
                cName: 'totalroom', 
                cLabel: 'Total Room', 
                cLabelSize: 4, 
                cOrder: 27, 
                cKey: true, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_lotthemecd: { 
                dataLookUp: { 
                    LookUpCd: ''    , 
                    ColumnDB: ''   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: '' 
                        }, 
                cValidate :'', 
                cName: 'lotthemecd', 
                cLabel: 'Theme', 
                cKey: true, 
                cLabelSize: 4, 
                cOrder: 12, 
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
                cDisplayColumn: '' ,
            }, 
            PI_yeardevelopment: { 
                cValidate :'', 
                cName: 'yeardevelopment', 
                cLabel: 'Year Of Development', 
                cLabelSize: 4, 
                cOrder: 28, 
                cKey: true, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_lotclasscd: { 
                dataLookUp: { 
                    LookUpCd: ''    , 
                    ColumnDB: ''   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: '' 
                        }, 
                cValidate :'', 
                cName: 'lotclasscd', 
                cLabel: 'Class', 
                cKey: true, 
                cLabelSize: 4, 
                cOrder: 13, 
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
                cDisplayColumn: '' ,
            }, 
            PI_insuranceno: { 
                cValidate :'', 
                cName: 'insuranceno', 
                cLabel: 'Insurance No', 
                cLabelSize: 4, 
                cOrder: 29, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_lotcategorycd: { 
                dataLookUp: { 
                    LookUpCd: ''    , 
                    ColumnDB: ''   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: '' 
                        }, 
                cValidate :'', 
                cName: 'lotcategorycd', 
                cLabel: 'Category', 
                cKey: true, 
                cLabelSize: 4, 
                cOrder: 14, 
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
                cDisplayColumn: '' ,
            }, 
            PI_parkinglot: { 
                cValidate :'', 
                cName: 'parkinglot', 
                cLabel: 'Parking Lot', 
                cLabelSize: 4, 
                cOrder: 30, 
                cKey: true, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_zoningcd: { 
                dataLookUp: { 
                    LookUpCd: ''    , 
                    ColumnDB: ''   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: '' 
                        }, 
                cValidate :'', 
                cName: 'zoningcd', 
                cLabel: 'Zoning Code', 
                cKey: true, 
                cLabelSize: 4, 
                cOrder: 14, 
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
                cDisplayColumn: '' ,
            }, 
            PI_electricity: { 
                cValidate :'', 
                cName: 'electricity', 
                cLabel: 'Electricity', 
                cLabelSize: 4, 
                cOrder: 31, 
                cKey: true, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_zoningnumber: { 
                cValidate :'', 
                cName: 'zoningnumber', 
                cLabel: 'Zoning Number', 
                cLabelSize: 4, 
                cOrder: 14, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks', 
                cLabelSize: 4, 
                cOrder:31, 
                cKey: true, 
                cDefault: '', 
                cProtect: false, 
                cVisible: true, 
                cResize: false, 
                cReadOnly: false, 
                cRows: 3, 
                cMaxRows: 3, 
                cSize: 'md', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
            }, 
            PI_zoningcolor: { 
                cValidate :'', 
                cName: 'zoningcolor', 
                cLabel: 'Zoning Color', 
                cLabelSize: 4, 
                cOrder: 14, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_stratastatus: { 
                cValidate :'', 
                cName: 'stratastatus', 
                cId: 'rdbstratastatus', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' }, { text: 'No', value: 'N' }], 
                cRadioDefaultOption: '', 
                cLabel:'		Strata Lot', 
                cLabelSize: 4, 
                cDefault: '', 
                cOrder: 0,
                cKey: true, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_effectivedate: { 
                cValidate :'', 
                cName: 'effectivedate', 
                cLabel: 'Effective Date  ', 
                cLabelSize: 4, 
                cOrder: 14, 
                cKey: true, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_antenna: { 
                cValidate :'', 
                cName: 'antenna', 
                cId: 'rdbantenna', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' }], 
                cRadioDefaultOption: '', 
                cLabel:'Antenna', 
                cLabelSize: 4, 
                cDefault: '', 
                cOrder: 0,
                cKey: true, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_fixcharges: { 
                cValidate :'', 
                cName: 'fixcharges', 
                cId: 'rdbfixcharges', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' }, { text: 'No', value: 'N' }], 
                cRadioDefaultOption: '', 
                cLabel:'Fix Charges', 
                cLabelSize: 4, 
                cDefault: '', 
                cOrder: 0,
                cKey: true, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_leasablearea: { 
                cValidate :'', 
                cName: 'leasablearea', 
                cId: 'rdbleasablearea', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' }, { text: 'No', value: 'N' }], 
                cRadioDefaultOption: '', 
                cLabel:'Leasable Area', 
                cLabelSize: 4, 
                cDefault: '', 
                cOrder: 0,
                cKey: true, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 

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
		return this.$store.getters.GetPage1Data
	},
	GetDataBy1(){
		return this.$store.getters.GetPage1GetDataBy
	}
  },
    methods: {		
        OndebtorcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_UpdateTenantDebtorByLot.debtorcd = data.id
            this.M_AR_UpdateTenantDebtorByLot.debtorcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{debtorcd}
            }
        })
        this.$forceUpdate()
        },
        OnlottypeChange (data) {
        this.$nextTick(() => {
            this.M_AR_UpdateTenantDebtorByLot.lottype = data.id
            this.M_AR_UpdateTenantDebtorByLot.lottypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{lottype}
            }
        })
        this.$forceUpdate()
        },
        OnlotclusterChange (data) {
        this.$nextTick(() => {
            this.M_AR_UpdateTenantDebtorByLot.lotcluster = data.id
            this.M_AR_UpdateTenantDebtorByLot.lotclusterLabel = data.label
            if (this.inputStatus != "VIEW") {
//{lotcluster}
            }
        })
        this.$forceUpdate()
        },
        OnblockcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_UpdateTenantDebtorByLot.blockcd = data.id
            this.M_AR_UpdateTenantDebtorByLot.blockcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{blockcd}
            }
        })
        this.$forceUpdate()
        },
        OndirectioncdChange (data) {
        this.$nextTick(() => {
            this.M_AR_UpdateTenantDebtorByLot.directioncd = data.id
            this.M_AR_UpdateTenantDebtorByLot.directioncdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{directioncd}
            }
        })
        this.$forceUpdate()
        },
        OnfloorcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_UpdateTenantDebtorByLot.floorcd = data.id
            this.M_AR_UpdateTenantDebtorByLot.floorcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{floorcd}
            }
        })
        this.$forceUpdate()
        },
        OnsectorcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_UpdateTenantDebtorByLot.sectorcd = data.id
            this.M_AR_UpdateTenantDebtorByLot.sectorcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{sectorcd}
            }
        })
        this.$forceUpdate()
        },
        OnviewcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_UpdateTenantDebtorByLot.viewcd = data.id
            this.M_AR_UpdateTenantDebtorByLot.viewcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{viewcd}
            }
        })
        this.$forceUpdate()
        },
        OnmeasurementcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_UpdateTenantDebtorByLot.measurementcd = data.id
            this.M_AR_UpdateTenantDebtorByLot.measurementcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{viewcd}
            }
        })
        this.$forceUpdate()
        },
        OnchargeareaChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{chargearea}
            }
        })
        this.$forceUpdate()
        },
        OnfurnishedChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{furnished}
            }
        })
        this.$forceUpdate()
        },
        OncitycdChange (data) {
        this.$nextTick(() => {
            this.M_AR_UpdateTenantDebtorByLot.citycd = data.id
            this.M_AR_UpdateTenantDebtorByLot.citycdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{citycd}
            }
        })
        this.$forceUpdate()
        },
        OnlotthemecdChange (data) {
        this.$nextTick(() => {
            this.M_AR_UpdateTenantDebtorByLot.lotthemecd = data.id
            this.M_AR_UpdateTenantDebtorByLot.lotthemecdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{lotthemecd}
            }
        })
        this.$forceUpdate()
        },
        OnlotclasscdChange (data) {
        this.$nextTick(() => {
            this.M_AR_UpdateTenantDebtorByLot.lotclasscd = data.id
            this.M_AR_UpdateTenantDebtorByLot.lotclasscdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{lotclasscd}
            }
        })
        this.$forceUpdate()
        },
        OnlotcategorycdChange (data) {
        this.$nextTick(() => {
            this.M_AR_UpdateTenantDebtorByLot.lotcategorycd = data.id
            this.M_AR_UpdateTenantDebtorByLot.lotcategorycdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{lotcategorycd}
            }
        })
        this.$forceUpdate()
        },
        OnzoningcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_UpdateTenantDebtorByLot.zoningcd = data.id
            this.M_AR_UpdateTenantDebtorByLot.zoningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{zoningcd}
            }
        })
        this.$forceUpdate()
        },
        OnremarksChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{remarks}
            }
        })
        this.$forceUpdate()
        },
        OnstratastatusChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{stratastatus}
            }
        })
        this.$forceUpdate()
        },
        OneffectivedateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{effectivedate}
            }
        })
        this.$forceUpdate()
        },
        OnantennaChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{antenna}
            }
        })
        this.$forceUpdate()
        },
        OnfixchargesChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{fixcharges}
            }
        })
        this.$forceUpdate()
        },
        OnleasableareaChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{leasablearea}
            }
        })
        this.$forceUpdate()
        },
	
		setToolbarButton () {
           this.getToolbar().statusFunction[0].disabled = true
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
        M_Refresh(){
        },
		M_Cancel() {			
		},		
		doDoubleClick(){
        },
        rowClicked (record, index) {
          if (record.CheckPost == 1) {
            this.$store.commit('setEditStatus', false)
          }
          else {
            this.$store.commit('setEditStatus', true)
          }
        },
        rowLink: function(url){
            this.$refs.modalTest.show()
        },		
		paramFromParent(){
        },	
		M_CheckboxChecked(data, status, index){

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
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                LotNo: this.M_AR_UpdateTenantDebtorByLot.lotno,
                DebtorCd: this.M_AR_UpdateTenantDebtorByLot.debtorcd == '' || this.M_AR_UpdateTenantDebtorByLot.debtorcd == null ? 'NULL' : this.M_AR_UpdateTenantDebtorByLot.debtorcd ,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_AR_UpdateTenantDebtorByLot.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })

        },
		M_ClearForm(){
            this.M_AR_UpdateTenantDebtorByLot = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                lotno: '',
                lottype: '',
                blockcd: '',
                floorcd: '',
                descs: '',
                address1: '',
                address2: '',
                address3: '',
                address4: '',
                citycd: '',
                zipcode: '',
                lotthemecd: '',
                lotclasssequenceno: 0,
                lotcategorysequenceno: 0,
                ownerid: '',
                occupantid: '',
                directioncd: '',
                sectorcd: '',
                viewcd: '',
                zonecd: '',
                measurementcd: '',
                furnished: '',
                totalroom: '0',
                yeardevelopment: '0',
                insuranceno: '',
                parkinglot: '0',
                electricity: '0',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                status: '',
                zoningcd: '',
                zoningnumber: '',
                l0: '',
                l1: '',
                l2: '',
                l3: '',
                l4: '',
                l5: '',
                l6: '',
                l7: '',
                l8: '',
                l9: '',
                status2: '',
                lotclasscd: '',
                lotclassdescs: '',
                lotcategorycd: '',
                lotcategorydescs: '',
                lotthemedescs: '',
                lottypedescs: '',
                blockdescs: '',
                floordescs: '',
                citydescs: '',
                ownername: '',
                directiondescs: '',
                sectordescs: '',
                viewdescs: '',
                measurementdescs: '',
                chargearea: '',
                rentalrate: 0,
                rentalamt: 0,
                rentalcurrencycd: '',
                servicechargerate: 0,
                servicechargeamt: 0,
                servicechargecurrencycd: '',
                sinkingfundrate: 0,
                sinkingfundamt: 0,
                sinkingfundcurrencycd: '',
                debtorcd: '',
                stratastatus: '',
                effectivedate: '',
                lotusage: '',
                lotcluster: '',
                lotclusterdescs: '',
                antenna: '',
                fixcharges: '',
                leasablearea: '',
                grossarea: '',
                semigrossarea: '',
                netarea: '',
                customercategorydescs: '',
                zonedescs: '',
                remarks: '',
                detorname: '',
                lastupdatestamp: 0,
                rowid: 0,
                grossseminetarea: ''
                    }
            	
	
		},
        M_New(){
			
        },
        M_Edit(){
        },
        M_Delete(dt){       
			var data = this.FormToABSList().getRowSelected()  
			var dataDelete = []

			
			data.forEach((value) => {

				
				dataDelete.push({
					_Message_:'',


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
,                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                lotno: record.LotNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_AR_UpdateTenantDebtorByLot = {
                subportfoliocd: data.subportfoliocd,
                lotno: data.lotno,
                lottype: data.lottype,
                blockcd: data.blockcd,
                floorcd: data.floorcd,
                descs: data.descs,
                address1: data.address1,
                address2: data.address2,
                address3: data.address3,
                address4: data.address4,
                citycd: data.citycd,
                zipcode: data.zipcode,
                lotthemecd: data.lotthemecd,
                lotclasssequenceno: data.lotclasssequenceno,
                lotcategorysequenceno: data.lotcategorysequenceno,
                ownerid: data.ownerid,
                occupantid: data.occupantid,
                directioncd: data.directioncd,
                sectorcd: data.sectorcd,
                viewcd: data.viewcd,
                zonecd: data.zonecd,
                measurementcd: data.measurementcd,
                furnished: data.furnished,
                totalroom: this.isCurrency(data.totalroom, this.decimal),
                yeardevelopment: data.yeardevelopment,
                insuranceno: data.insuranceno,
                parkinglot: this.isCurrency(data.parkinglot, this.decimal),
                electricity: this.isCurrency(data.electricity, this.decimal),
                userinput: data.userinput,
                useredit: data.useredit,
                timeinput: data.timeinput,
                timeedit: data.timeedit,
                status: data.status2,
                zoningcd: data.zoningcd,
                zoningnumber: data.zoningnumber,
                l0: data.l0,
                l1: data.l1,
                l2: data.l2,
                l3: data.l3,
                l4: data.l4,
                l5: data.l5,
                l6: data.l6,
                l7: data.l7,
                l8: data.l8,
                l9: data.l9,
                status2: data.status2,
                lotclasscd: data.lotclasscd,
                lotclassdescs: data.lotclassdescs,
                lotcategorycd: data.lotcategorycd,
                lotcategorydescs: data.lotcategorydescs,
                lotthemedescs: data.lotthemedescs,
                lottypedescs: data.lottypedescs,
                blockdescs: data.blockdescs,
                floordescs: data.floordescs,
                citydescs: data.citydescs,
                ownername: data.ownername,
                directiondescs: data.directiondescs,
                sectordescs: data.sectordescs,
                viewdescs: data.viewdescs,
                measurementdescs: data.measurementdescs,
                chargearea: data.chargearea,
                rentalrate: this.isCurrency(data.rentalrate, this.decimal),
                rentalamt: this.isCurrency(data.rentalamt, this.decimal),
                rentalcurrencycd: data.rentalcurrencycd,
                servicechargerate: this.isCurrency(data.servicechargerate, this.decimal),
                servicechargeamt: this.isCurrency(data.servicechargeamt, this.decimal),
                servicechargecurrencycd: data.servicechargecurrencycd,
                sinkingfundrate: this.isCurrency(data.sinkingfundrate, this.decimal),
                sinkingfundamt: this.isCurrency(data.sinkingfundamt, this.decimal),
                sinkingfundcurrencycd: data.sinkingfundcurrencycd,
                debtorcd: data.debtorcd,
                stratastatus: data.stratastatus,
                effectivedate: data.effectivedate,
                lotusage: data.lotusage,
                lotcluster: data.lotcluster,
                lotclusterdescs: data.lotclusterdescs,
                antenna: data.antenna,
                fixcharges: data.fixcharges,
                leasablearea: data.leasablearea,
                grossarea: data.grossarea,
                semigrossarea: data.semigrossarea,
                netarea: data.netarea,
                customercategorydescs: data.customercategorydescs,
                zonedescs: data.zonedescs,
                remarks: data.remarks,
                detorname: data.detorname,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid,
                grossseminetarea: this.isCurrency(data.grossarea, this.decimal) + '/' + this.isCurrency(data.semigrossarea, this.decimal) + '/' + this.isCurrency(data.netarea, this.decimal)
                    }
                 

                this.M_AR_UpdateTenantDebtorByLot.debtorcdLabel = this.M_AR_UpdateTenantDebtorByLot.debtorcd != null && this.M_AR_UpdateTenantDebtorByLot.debtorcd != '' ? data.debtorcd + this.separator + data.detorname :'' 
                this.M_AR_UpdateTenantDebtorByLot.lottypeLabel = this.M_AR_UpdateTenantDebtorByLot.lottype != null && this.M_AR_UpdateTenantDebtorByLot.lottype != '' ? data.lottype + this.separator + data.lottypedescs :'' 
                this.M_AR_UpdateTenantDebtorByLot.lotclusterLabel = this.M_AR_UpdateTenantDebtorByLot.lotcluster != null && this.M_AR_UpdateTenantDebtorByLot.lotcluster != '' ? data.lotcluster + this.separator + data.lotclusterdescs :'' 
                this.M_AR_UpdateTenantDebtorByLot.blockcdLabel = this.M_AR_UpdateTenantDebtorByLot.blockcd != null && this.M_AR_UpdateTenantDebtorByLot.blockcd != '' ? data.blockcd + this.separator + data.blockdescs :'' 
                this.M_AR_UpdateTenantDebtorByLot.directioncdLabel = this.M_AR_UpdateTenantDebtorByLot.directioncd != null && this.M_AR_UpdateTenantDebtorByLot.directioncd != '' ? data.directioncd + this.separator + data.directiondescs :'' 
                this.M_AR_UpdateTenantDebtorByLot.floorcdLabel = this.M_AR_UpdateTenantDebtorByLot.floorcd != null && this.M_AR_UpdateTenantDebtorByLot.floorcd != '' ? data.floorcd + this.separator + data.floordescs :'' 
                this.M_AR_UpdateTenantDebtorByLot.sectorcdLabel = this.M_AR_UpdateTenantDebtorByLot.sectorcd != null && this.M_AR_UpdateTenantDebtorByLot.sectorcd != '' ? data.sectorcd + this.separator + data.sectordescs :'' 
                this.M_AR_UpdateTenantDebtorByLot.viewcdLabel = this.M_AR_UpdateTenantDebtorByLot.viewcd != null && this.M_AR_UpdateTenantDebtorByLot.viewcd != '' ? data.viewcd + this.separator + data.viewdescs :'' 
                this.M_AR_UpdateTenantDebtorByLot.citycdLabel = this.M_AR_UpdateTenantDebtorByLot.citycd != null && this.M_AR_UpdateTenantDebtorByLot.citycd != '' ? data.citycd + this.separator + data.citydescs :'' 
                this.M_AR_UpdateTenantDebtorByLot.lotthemecdLabel = this.M_AR_UpdateTenantDebtorByLot.lotthemecd != null && this.M_AR_UpdateTenantDebtorByLot.lotthemecd != '' ? data.lotthemecd + this.separator + data.lotthemedescs :'' 
                this.M_AR_UpdateTenantDebtorByLot.lotclasscdLabel = this.M_AR_UpdateTenantDebtorByLot.lotclasscd != null && this.M_AR_UpdateTenantDebtorByLot.lotclasscd != '' ? data.lotclasscd + this.separator + data.lotclassdescs :'' 
                this.M_AR_UpdateTenantDebtorByLot.lotcategorycdLabel = this.M_AR_UpdateTenantDebtorByLot.lotcategorycd != null && this.M_AR_UpdateTenantDebtorByLot.lotcategorycd != '' ? data.lotcategorycd + this.separator + data.lotcategorydescs :'' 
                this.M_AR_UpdateTenantDebtorByLot.zoningcdLabel = this.M_AR_UpdateTenantDebtorByLot.zoningcd != null && this.M_AR_UpdateTenantDebtorByLot.zoningcd != '' ? data.zoningcd + this.separator + data.zonedescs :'' 
                this.M_AR_UpdateTenantDebtorByLot.measurementcdLabel = this.M_AR_UpdateTenantDebtorByLot.measurementcd != null && this.M_AR_UpdateTenantDebtorByLot.measurementcd != '' ? data.measurementcd + this.separator + data.measurementdescs :''

                // if(data.debtorcd == '' || data.debtorcd == null){
                //   this.PI_debtorcd.cProtect = true
                // }else{
                //   this.PI_debtorcd.cProtect = false
                // }

                this.PI_debtorcd.dataLookUp.InitialWhere = "SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' AND OwnerID = '"+ data.ownerid +"'"
         

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

