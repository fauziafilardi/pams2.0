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
                                <b-col md="6" id="col-left">
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSinputTextVuex :prop="PI_lotno" v-model="M_TN_Lot_CL.lotno"  ref="ref_lotno"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSInputSelectList @change="OnlottypeChange" :prop="PI_lottype" :value="M_TN_Lot_CL.lottype" :label="M_TN_Lot_CL.lottypeLabel" ref="ref_lottype"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                        <ABSInputSelectList @change="OnblockcdChange" :prop="PI_blockcd" :value="M_TN_Lot_CL.blockcd" :label="M_TN_Lot_CL.blockcdLabel" ref="ref_blockcd"/>
                                      </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                        <ABSInputSelectList @change="OnfloorcdChange" :prop="PI_floorcd" :value="M_TN_Lot_CL.floorcd" :label="M_TN_Lot_CL.floorcdLabel" ref="ref_floorcd"/>
                                      </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_TN_Lot_CL.descs"  ref="ref_descs"/>
                                      </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_address1" v-model="M_TN_Lot_CL.address1"  ref="ref_address1"/>
                                      </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_address2" v-model="M_TN_Lot_CL.address2"  ref="ref_address2"/>
                                      </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_address3" v-model="M_TN_Lot_CL.address3"  ref="ref_address3"/>
                                      </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_address4" v-model="M_TN_Lot_CL.address4"  ref="ref_address4"/>
                                      </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_zipcode" v-model="M_TN_Lot_CL.zipcode"  ref="ref_zipcode"/>
                                      </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                        <ABSInputSelectList @change="OncitycdChange" :prop="PI_citycd" :value="M_TN_Lot_CL.citycd" :label="M_TN_Lot_CL.citycdLabel" ref="ref_citycd"/>
                                      </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                        <ABSInputSelectList @change="OnlotthemecdChange" :prop="PI_lotthemecd" :value="M_TN_Lot_CL.lotthemecd" :label="M_TN_Lot_CL.lotthemecdLabel" ref="ref_lotthemecd"/>
                                      </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                        <ABSInputSelectList @change="OnlotclasscdChange" :prop="PI_lotclasscd" :value="M_TN_Lot_CL.lotclasscd" :label="M_TN_Lot_CL.lotclasscdLabel" ref="ref_lotclasscd"/>
                                      </b-col>
                                  </b-row>
                                  <b-row>
                                      <b-col  md="12">
                                        <ABSInputSelectList @change="OnlotcategorycdChange" :prop="PI_lotcategorycd" :value="M_TN_Lot_CL.lotcategorycd" :label="M_TN_Lot_CL.lotcategorycdLabel" ref="ref_lotcategorycd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSInputSelectList @change="OnzoningcdChange" :prop="PI_zoningcd" :value="M_TN_Lot_CL.zoningcd" :label="M_TN_Lot_CL.zoningcdLabel" ref="ref_zoningcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_zoningnumber" v-model="M_TN_Lot_CL.zoningnumber"  ref="ref_zoningnumber"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_zoningcolor" v-model="M_TN_Lot_CL.zoningcolor"  ref="ref_zoningcolor"/>
                                      </b-col>
                                    </b-row>

                                </b-col>

                                <b-col md="6" id="col-left"> <!-- table open -->                                    
                                    <b-row>                                      
                                      <b-col md="12">
                                        <ABSinputDateVuex @input="OneffectivedateChange" :prop="PI_effectivedate" v-model="M_TN_Lot_CL.effectivedate"  ref="ref_effectivedate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>                                      
                                      <b-col md="12">
                                        <ABSInputSelectList @change="OnzonecdChange" :prop="PI_zonecd" :value="M_TN_Lot_CL.zonecd" :label="M_TN_Lot_CL.zonecdLabel" ref="ref_zonecd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>                                      
                                      <b-col md="12">
                                        <ABSInputSelectList @change="OnlotclusterChange" :prop="PI_lotcluster" :value="M_TN_Lot_CL.lotcluster" :label="M_TN_Lot_CL.lotclusterLabel" ref="ref_lotcluster"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      
                                      <b-col md="12">
                                        <ABSinputRadioButtonVuex @input="OnfixchargesChange" :prop="PI_fixcharges" v-model="M_TN_Lot_CL.fixcharges"  ref="ref_fixcharges" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      
                                      <b-col md="12">
                                        <ABSinputRadioButtonVuex @input="OnleasableareaChange" :prop="PI_leasablearea" v-model="M_TN_Lot_CL.leasablearea"  ref="ref_leasablearea" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      
                                      <b-col md="12">
                                        <ABSInputSelectList @change="OnmeasurementcdChange" :prop="PI_measurementcd" :value="M_TN_Lot_CL.measurementcd" :label="M_TN_Lot_CL.measurementcdLabel" ref="ref_measurementcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      
                                      <b-col md="12">
                                        <ABSCompute :prop="PI_grossarea" v-model="M_TN_Lot_CL.grossarea"  ref="ref_grossarea" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      
                                      <b-col md="12">
                                        <ABSCompute :prop="PI_semigrossarea" v-model="M_TN_Lot_CL.semigrossarea"  ref="ref_semigrossarea" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      
                                      <b-col md="12">
                                        <ABSCompute :prop="PI_netarea" v-model="M_TN_Lot_CL.netarea"  ref="ref_netarea" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      
                                      <b-col md="12">
                                        <ABSinputRadioButtonVuex @input="OnchargeareaChange" :prop="PI_chargearea" v-model="M_TN_Lot_CL.chargearea"  ref="ref_chargearea" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      
                                      <b-col md="12">
                                        <ABSCompute :prop="PI_status" v-model="M_TN_Lot_CL.status"  ref="ref_status" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      
                                      <b-col md="12">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_Lot_CL.remarks"  ref="ref_remarks" />
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
                initialWhere: "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' and LotUsage = 'C'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_TN_Lot_CL :{
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
                totalroom: 0,
                yeardevelopment: 0,
                insuranceno: '',
                parkinglot: 0,
                electricity: 0,
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                status: '',
                zoningcd: '',
                zoningnumber: 0,
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
                chargearea: 'G',
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
                fixcharges: 'N',
                leasablearea: 'Y',
                grossarea: 0,
                semigrossarea: 0,
                netarea: 0,
                customercategorydescs: '',
                zonedescs: '',
                remarks: '',
                detorname: '',
                lastupdatestamp: 0,
                rowid: 0,
                zoningcolor: ''
                    }
            ,
            PI_lotno: { 
                cValidate :'required|max:20', 
                cName: 'lotno', 
                cLabel: 'Lot No ', 
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
            PI_lottype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNLotType'    , 
                    ColumnDB: 'LotType'   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'LotType,Descs' 
                        }, 
                cValidate :'required', 
                cName: 'lottype', 
                cLabel: 'Lot Type ', 
                cKey: false, 
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
                cMasterUrl: 'TN/TN_LotType' ,
                cDisplayColumn: 'LotType,Description' ,
            }, 
            PI_effectivedate: { 
                cValidate :'required', 
                cName: 'effectivedate', 
                cLabel: 'Effective Date ', 
                cLabelSize: 4, 
                cOrder: 18, 
                cKey: true, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_blockcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNBlock'    , 
                    ColumnDB: 'BlockCd'   , 
                    InitialWhere: "SubPortfolioCd='"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'BlockCd,Descs' 
                        }, 
                cValidate :'required', 
                cName: 'blockcd', 
                cLabel: 'Block ', 
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
                cMasterUrl: 'TN/TN_Block' ,
                cDisplayColumn: 'BlockCode,Description' ,
            }, 
            PI_zonecd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupZone'    , 
                    ColumnDB: 'ZoneCd'   , 
                    InitialWhere: "CLStatus ='Y' and SubportfolioCd='"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'ZoneCd,Descs' 
                        }, 
                cValidate :'required', 
                cName: 'zonecd', 
                cLabel: 'Zone', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 19, 
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
                cMasterUrl: 'TN/TN_Zone' ,
                cDisplayColumn: 'ZoneCd,Descs' ,
            }, 
            PI_floorcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetFloorCd'    , 
                    ColumnDB: 'FloorCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: '' 
                        }, 
                cValidate :'required', 
                cName: 'floorcd', 
                cLabel: 'Floor ', 
                cKey: false, 
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
                cMasterUrl: 'TN/TN_Block' ,
                cDisplayColumn: 'FloorCode,Description' ,
            }, 
            PI_lotcluster: { 
                cValidate :'', 
                cName: 'lotcluster', 
                cLabel: 'Lot Cluster ', 
                cLabelSize: 4, 
                cOrder: 20, 
                cKey: false, 
                cType: 'text',
                cAsync:  false, 
                cFilter: true, 
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_descs: { 
                cValidate :'max:60', 
                cName: 'descs', 
                cLabel: 'Description', 
                cLabelSize: 4, 
                cOrder: 5, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_fixcharges: { 
                cValidate :'', 
                cName: 'fixcharges', 
                cId: 'rdbfixcharges', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' }, { text: 'No', value: 'N' }], 
                cRadioDefaultOption: 'N', 
                cLabel:'Fix Charges ', 
                cLabelSize: 4, 
                cDefault: '', 
                cOrder: 21, 
                cKey: true,
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_address1: { 
                cValidate :'max:50', 
                cName: 'address1', 
                cLabel: 'Address', 
                cLabelSize: 4, 
                cOrder: 6, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_leasablearea: { 
                cValidate :'', 
                cName: 'leasablearea', 
                cId: 'rdbleasablearea', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' }, { text: 'No', value: 'N' }], 
                cRadioDefaultOption: 'Y', 
                cLabel:'Leasable Area ', 
                cLabelSize: 4, 
                cDefault: '', 
                cOrder: 22, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_address2: { 
                cValidate :'max:50', 
                cName: 'address2', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 7, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_measurementcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMMeasurement'    , 
                    ColumnDB: 'MeasurementCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'MeasurementCd,Descs' 
                        }, 
                cValidate :'', 
                cName: 'measurementcd', 
                cLabel: 'Measurement', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 23, 
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
                cMasterUrl: 'CM/CM_Measurement' ,
                cDisplayColumn: 'MeasurementCd,Descs' ,
            }, 
            PI_address3: { 
                cValidate :'max:50', 
                cName: 'address3', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 8, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_grossarea: { 
                cLabel: 'Gross Area', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_address4: { 
                cValidate :'max:50', 
                cName: 'address4', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 9, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_semigrossarea: { 
                cLabel: 'Semi Gross Area', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_zipcode: { 
                cValidate :'max:10', 
                cName: 'zipcode', 
                cLabel: 'Zip Code', 
                cLabelSize: 4, 
                cOrder: 10, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_netarea: { 
                cLabel: 'Net Area', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_citycd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMCity'    , 
                    ColumnDB: 'CityCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'CityCd,CountryCd,Descs' 
                        }, 
                cValidate :'', 
                cName: 'citycd', 
                cLabel: 'City', 
                cKey: false, 
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
                cMasterUrl: 'CM/CM_CountryCity' ,
                cDisplayColumn: 'CityCd,CountryCd,Descs' ,
            }, 
            PI_chargearea: { 
                cValidate :'', 
                cName: 'chargearea', 
                cId: 'rdbchargearea', 
                cRadioOptions: [{ text: 'Gross Area', value: 'G' }, { text: 'Semi Gross Area', value: 'S' }, { text: 'Net Area', value: 'N' }], 
                cRadioDefaultOption: 'G', 
                cLabel:'Charge Area', 
                cLabelSize: 4, 
                cDefault: '', 
                cOrder: 24,
                cKey: true, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_lotthemecd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNLotTheme'    , 
                    ColumnDB: 'LotThemeCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'Lot_Theme_Cd,Descs' 
                        }, 
                cValidate :'', 
                cName: 'lotthemecd', 
                cLabel: 'Theme', 
                cKey: false, 
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
                cMasterUrl: 'TN/TN_LotTheme' ,
                cDisplayColumn: 'Lot_Theme_Cd,Descs' ,
            }, 
            PI_status: { 
                cLabel: 'Status', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_lotclasscd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNLotClass'    , 
                    ColumnDB: 'LotClassCd'   , 
                    InitialWhere: "LotThemeCd=''"   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'Lot_Class_Cd,Descs' 
                        }, 
                cValidate :'', 
                cName: 'lotclasscd', 
                cLabel: 'Class', 
                cKey: false, 
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
                cMasterUrl: 'TN/TN_LotClass' ,
                cDisplayColumn: 'Lot_Class_Cd,Descs' ,
            }, 
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks  ', 
                cLabelSize: 4, 
                cOrder:25, 
                cKey: false, 
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
            PI_lotcategorycd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNLotCategory'    , 
                    ColumnDB: 'LotCategoryCd'   , 
                    InitialWhere: "CAST(LotClassSequenceNo AS VARCHAR)=''"   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'Lot_Category_Cd,Descs' 
                        }, 
                cValidate :'', 
                cName: 'lotcategorycd', 
                cLabel: 'Category', 
                cKey: false, 
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
                cMasterUrl: 'TN/TN_LotCategory' ,
                cDisplayColumn: 'Lot_Category_Cd,Descs' ,
            }, 
            PI_zoningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetZoning'    , 
                    ColumnDB: 'ZoningCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' 
                        }, 
                cValidate :'', 
                cName: 'zoningcd', 
                cLabel: 'Zoning Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 15, 
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
                cMasterUrl: 'TN/TN_FloorZoning' ,
                cDisplayColumn: 'ZoningCode' ,
            }, 
            PI_zoningnumber: { 
                cValidate :'max:2', 
                cName: 'zoningnumber', 
                cLabel: 'Zoning Number', 
                cLabelSize: 4, 
                cOrder: 16, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_zoningcolor: { 
                cValidate :'', 
                cName: 'zoningcolor', 
                cLabel: 'Zoning Color', 
                cLabelSize: 4, 
                cOrder: 17, 
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
                cFormPageNo: this.data.PageOrder,
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
        OnlottypeChange (data) {
        this.$nextTick(() => {
            this.M_TN_Lot_CL.lottype = data.id
            this.M_TN_Lot_CL.lottypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{lottype}
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
        OnblockcdChange (data) {
        this.$nextTick(() => {
            this.M_TN_Lot_CL.blockcd = data.id
            this.M_TN_Lot_CL.blockcdLabel = data.label
            if (this.inputStatus != "VIEW") {
              this.PI_floorcd.dataLookUp.InitialWhere = "BlockCd='"+data.BlockCode+"' AND SubportfolioCd='"+this.getDataUser().SubPortfolioCd+"'"
            }
        })
        this.$forceUpdate()
        },
        OnzonecdChange (data) {
        this.$nextTick(() => {
            this.M_TN_Lot_CL.zonecd = data.id
            this.M_TN_Lot_CL.zonecdLabel = data.label
            if (this.inputStatus != "VIEW") {
              this.M_TN_Lot_CL.lotcluster = data.ZoneCluster
              this.M_TN_Lot_CL.lotclusterLabel = data.ZoneCluster + ' | ' + data.ClusterDescs
//{zonecd}
            }
        })
        this.$forceUpdate()
        },
        OnfloorcdChange (data) {
        this.$nextTick(() => {
            this.M_TN_Lot_CL.floorcd = data.id
            this.M_TN_Lot_CL.floorcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{floorcd}
            }
        })
        this.$forceUpdate()
        },
        OnlotclusterChange (data) {
        this.$nextTick(() => {
            
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
        OnmeasurementcdChange (data) {
        this.$nextTick(() => {
            this.M_TN_Lot_CL.measurementcd = data.id
            this.M_TN_Lot_CL.measurementcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{measurementcd}
            }
        })
        this.$forceUpdate()
        },
        OncitycdChange (data) {
        this.$nextTick(() => {
            this.M_TN_Lot_CL.citycd = data.id
            this.M_TN_Lot_CL.citycdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{citycd}
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
        OnlotthemecdChange (data) {
        this.$nextTick(() => {
            this.M_TN_Lot_CL.lotthemecd = data.id
            this.M_TN_Lot_CL.lotthemecdLabel = data.label
            if (this.inputStatus != "VIEW") {
              this.PI_lotclasscd.dataLookUp.InitialWhere = "LotThemeCd='"+data.id+"'"
            }
        })
        this.$forceUpdate()
        },
        OnlotclasscdChange (data) {
          console.log(data)
        this.$nextTick(() => {
            this.M_TN_Lot_CL.lotclasscd = data.id
            this.M_TN_Lot_CL.lotclasscdLabel = data.label
            if (this.inputStatus != "VIEW") {
              this.M_TN_Lot_CL.lotclasssequenceno = data.LotClassSequenceNo ? data.LotClassSequenceNo : ''
              this.PI_lotcategorycd.dataLookUp.InitialWhere = "CAST(LotClassSequenceNo AS VARCHAR)='"+(data.LotClassSequenceNo ? data.LotClassSequenceNo : '')+"'"
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
        OnlotcategorycdChange (data) {
        this.$nextTick(() => {
            this.M_TN_Lot_CL.lotcategorycd = data.id
            this.M_TN_Lot_CL.lotcategorycdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{lotcategorycd}
            }
        })
        this.$forceUpdate()
        },
        OnzoningcdChange (data) {
          // console.log(data)
        this.$nextTick(() => {
            this.M_TN_Lot_CL.zoningcd = data.id
            this.M_TN_Lot_CL.zoningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
              this.M_TN_Lot_CL.zoningnumber = data.ZoningNumber
//{zoningnumber}
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
          console.log(this.M_TN_Lot_CL)
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                LotNo: this.M_TN_Lot_CL.lotno,
                LotType: this.M_TN_Lot_CL.lottype == '' || this.M_TN_Lot_CL.lottype == null ? 'NULL' : this.M_TN_Lot_CL.lottype ,
                BlockCd: this.M_TN_Lot_CL.blockcd == '' || this.M_TN_Lot_CL.blockcd == null ? 'NULL' : this.M_TN_Lot_CL.blockcd ,
                FloorCd: this.M_TN_Lot_CL.floorcd == '' || this.M_TN_Lot_CL.floorcd == null ? 'NULL' : this.M_TN_Lot_CL.floorcd ,
                Descs: this.M_TN_Lot_CL.descs,
                Address1: this.M_TN_Lot_CL.address1,
                Address2: this.M_TN_Lot_CL.address2,
                Address3: this.M_TN_Lot_CL.address3,
                Address4: this.M_TN_Lot_CL.address4,
                CityCd: this.M_TN_Lot_CL.citycd,
                ZipCode: this.M_TN_Lot_CL.zipcode,
                LotThemeCd: this.M_TN_Lot_CL.lotthemecd,
                LotCategorySequenceNo: this.M_TN_Lot_CL.lotcategorysequenceno,
                LotClassSequenceNo: this.M_TN_Lot_CL.lotclasssequenceno,
                DirectionCd: this.M_TN_Lot_CL.directioncd,
                SectorCd: this.M_TN_Lot_CL.sectorcd,
                ViewCd: this.M_TN_Lot_CL.viewcd,
                ZoneCd: this.M_TN_Lot_CL.zonecd == '' || this.M_TN_Lot_CL.zonecd == null ? 'NULL' : this.M_TN_Lot_CL.zonecd ,
                MeasurementCd: this.M_TN_Lot_CL.measurementcd == '' || this.M_TN_Lot_CL.measurementcd == null ? 'NULL' : this.M_TN_Lot_CL.measurementcd ,
                Furnished: this.M_TN_Lot_CL.furnished,
                TotalRoom: this.M_TN_Lot_CL.totalroom,
                YearDevelopment: this.M_TN_Lot_CL.yeardevelopment,
                InsuranceNo: this.M_TN_Lot_CL.insuranceno,
                ParkingLot: this.M_TN_Lot_CL.parkinglot,
                Electricity: this.M_TN_Lot_CL.electricity,
                ZoningCd: this.M_TN_Lot_CL.zoningnumber == '' || this.M_TN_Lot_CL.zoningnumber == null ? 'NULL' : this.M_TN_Lot_CL.zoningnumber ,
                ZoningNumber: this.M_TN_Lot_CL.zoningnumber == '' || this.M_TN_Lot_CL.zoningnumber == null ? 'NULL' : this.M_TN_Lot_CL.zoningnumber ,
                L0: this.M_TN_Lot_CL.l0 == '' || this.M_TN_Lot_CL.l0 == null ? 'NULL' : this.M_TN_Lot_CL.l0,
                L1: this.M_TN_Lot_CL.l1 == '' || this.M_TN_Lot_CL.l1 == null ? 'NULL' : this.M_TN_Lot_CL.l1,
                L2: this.M_TN_Lot_CL.l2 == '' || this.M_TN_Lot_CL.l2 == null ? 'NULL' : this.M_TN_Lot_CL.l2,
                L3: this.M_TN_Lot_CL.l3 == '' || this.M_TN_Lot_CL.l3 == null ? 'NULL' : this.M_TN_Lot_CL.l3,
                L4: this.M_TN_Lot_CL.l4 == '' || this.M_TN_Lot_CL.l4 == null ? 'NULL' : this.M_TN_Lot_CL.l4,
                L5: this.M_TN_Lot_CL.l5 == '' || this.M_TN_Lot_CL.l5 == null ? 'NULL' : this.M_TN_Lot_CL.l5,
                L6: this.M_TN_Lot_CL.l6 == '' || this.M_TN_Lot_CL.l6 == null ? 'NULL' : this.M_TN_Lot_CL.l6,
                L7: this.M_TN_Lot_CL.l7 == '' || this.M_TN_Lot_CL.l7 == null ? 'NULL' : this.M_TN_Lot_CL.l7,
                L8: this.M_TN_Lot_CL.l8 == '' || this.M_TN_Lot_CL.l8 == null ? 'NULL' : this.M_TN_Lot_CL.l8,
                L9: this.M_TN_Lot_CL.l9 == '' || this.M_TN_Lot_CL.l9 == null ? 'NULL' : this.M_TN_Lot_CL.l9,
                UserInput: this.getDataUser().UserId ,
                ChargeArea: this.M_TN_Lot_CL.chargearea,
                StrataStatus: this.M_TN_Lot_CL.stratastatus,
                EffectiveDate: this.M_TN_Lot_CL.effectivedate == '' || this.M_TN_Lot_CL.effectivedate == null ? 'NULL' : this.M_TN_Lot_CL.effectivedate ,
                LotUsage: 'C',
                LotCluster: this.M_TN_Lot_CL.lotcluster,
                Antenna: 'N',
                FixCharges: this.M_TN_Lot_CL.fixcharges,
                LeasableArea: this.M_TN_Lot_CL.leasablearea,
                LotClassCd: this.M_TN_Lot_CL.lotclasscd,
                LotCategoryCd: this.M_TN_Lot_CL.lotcategorycd,
                Remarks: this.M_TN_Lot_CL.remarks                
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
                LotNo: this.M_TN_Lot_CL.lotno,
                LotType: this.M_TN_Lot_CL.lottype == '' || this.M_TN_Lot_CL.lottype == null ? 'NULL' : this.M_TN_Lot_CL.lottype ,
                BlockCd: this.M_TN_Lot_CL.blockcd == '' || this.M_TN_Lot_CL.blockcd == null ? 'NULL' : this.M_TN_Lot_CL.blockcd ,
                FloorCd: this.M_TN_Lot_CL.floorcd == '' || this.M_TN_Lot_CL.floorcd == null ? 'NULL' : this.M_TN_Lot_CL.floorcd ,
                Descs: this.M_TN_Lot_CL.descs,
                Address1: this.M_TN_Lot_CL.address1,
                Address2: this.M_TN_Lot_CL.address2,
                Address3: this.M_TN_Lot_CL.address3,
                Address4: this.M_TN_Lot_CL.address4,
                CityCd: this.M_TN_Lot_CL.citycd,
                ZipCode: this.M_TN_Lot_CL.zipcode,
                LotThemeCd: this.M_TN_Lot_CL.lotthemecd,
                LotCategorySequenceNo: this.M_TN_Lot_CL.lotcategorysequenceno,
                LotClassSequenceNo: this.M_TN_Lot_CL.lotclasssequenceno,
                LotCategoryCd: this.M_TN_Lot_CL.lotcategorycd,
                LotClassCd: this.M_TN_Lot_CL.lotclasscd,
                OwnerId: this.M_TN_Lot_CL.ownerid,
                DirectionCd: this.M_TN_Lot_CL.directioncd,
                SectorCd: this.M_TN_Lot_CL.sectorcd,
                ViewCd: this.M_TN_Lot_CL.viewcd,
                ZoneCd: this.M_TN_Lot_CL.zonecd == '' || this.M_TN_Lot_CL.zonecd == null ? 'NULL' : this.M_TN_Lot_CL.zonecd ,
                MeasurementCd: this.M_TN_Lot_CL.measurementcd == '' || this.M_TN_Lot_CL.measurementcd == null ? 'NULL' : this.M_TN_Lot_CL.measurementcd ,
                Furnished: this.M_TN_Lot_CL.furnished,
                TotalRoom: this.M_TN_Lot_CL.totalroom,
                YearDevelopment: this.M_TN_Lot_CL.yeardevelopment,
                InsuranceNo: this.M_TN_Lot_CL.insuranceno,
                ParkingLot: this.M_TN_Lot_CL.parkinglot,
                Electricity: this.M_TN_Lot_CL.electricity,
                ZoningCd: this.M_TN_Lot_CL.zoningnumber == '' || this.M_TN_Lot_CL.zoningnumber == null ? 'NULL' : this.M_TN_Lot_CL.zoningnumber ,
                ZoningNumber: this.M_TN_Lot_CL.zoningnumber == '' || this.M_TN_Lot_CL.zoningnumber == null ? 'NULL' : this.M_TN_Lot_CL.zoningnumber ,
                L0: this.M_TN_Lot_CL.l0 == '' || this.M_TN_Lot_CL.l0 == null ? 'NULL' : this.M_TN_Lot_CL.l0,
                L1: this.M_TN_Lot_CL.l1 == '' || this.M_TN_Lot_CL.l1 == null ? 'NULL' : this.M_TN_Lot_CL.l1,
                L2: this.M_TN_Lot_CL.l2 == '' || this.M_TN_Lot_CL.l2 == null ? 'NULL' : this.M_TN_Lot_CL.l2,
                L3: this.M_TN_Lot_CL.l3 == '' || this.M_TN_Lot_CL.l3 == null ? 'NULL' : this.M_TN_Lot_CL.l3,
                L4: this.M_TN_Lot_CL.l4 == '' || this.M_TN_Lot_CL.l4 == null ? 'NULL' : this.M_TN_Lot_CL.l4,
                L5: this.M_TN_Lot_CL.l5 == '' || this.M_TN_Lot_CL.l5 == null ? 'NULL' : this.M_TN_Lot_CL.l5,
                L6: this.M_TN_Lot_CL.l6 == '' || this.M_TN_Lot_CL.l6 == null ? 'NULL' : this.M_TN_Lot_CL.l6,
                L7: this.M_TN_Lot_CL.l7 == '' || this.M_TN_Lot_CL.l7 == null ? 'NULL' : this.M_TN_Lot_CL.l7,
                L8: this.M_TN_Lot_CL.l8 == '' || this.M_TN_Lot_CL.l8 == null ? 'NULL' : this.M_TN_Lot_CL.l8,
                L9: this.M_TN_Lot_CL.l9 == '' || this.M_TN_Lot_CL.l9 == null ? 'NULL' : this.M_TN_Lot_CL.l9,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_Lot_CL.lastupdatestamp,
                ChargeArea: this.M_TN_Lot_CL.chargearea,
                StrataStatus: this.M_TN_Lot_CL.stratastatus,
                EffectiveDate: this.M_TN_Lot_CL.effectivedate == '' || this.M_TN_Lot_CL.effectivedate == null ? 'NULL' : this.M_TN_Lot_CL.effectivedate ,
                LotUsage: 'C',
                LotCluster: this.M_TN_Lot_CL.lotcluster,
                Antenna: 'N',
                FixCharges: this.M_TN_Lot_CL.fixcharges,
                LeasableArea: this.M_TN_Lot_CL.leasablearea,
                Remarks: this.M_TN_Lot_CL.remarks                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
			this.$nextTick(() => {
            this.M_TN_Lot_CL = {
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
                totalroom: 0,
                yeardevelopment: 0,
                insuranceno: '',
                parkinglot: 0,
                electricity: 0,
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                status: 'Active',
                zoningcd: '',
                zoningnumber: 0,
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
                chargearea: 'G',
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
                fixcharges: 'N',
                leasablearea: 'Y',
                grossarea: 0,
                semigrossarea: 0,
                netarea: 0,
                customercategorydescs: '',
                zonedescs: '',
                remarks: '',
                detorname: '',
                lastupdatestamp: 0,
                rowid: 0,
                zoningcolor: ''
                    }
            	
		   })
		   this.$forceUpdate()
	
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
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    LotNo: value.LotNo,
                    LastUpdateStamp: value.LastUpdateStamp,
                    _Message_:''
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
                // console.log(data)
this.M_TN_Lot_CL = {
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
                yeardevelopment: this.isCurrency(data.yeardevelopment, this.decimal),
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
                grossarea: this.isCurrency(data.grossarea, this.decimal),
                semigrossarea: this.isCurrency(data.semigrossarea, this.decimal),
                netarea: this.isCurrency(data.netarea, this.decimal),
                customercategorydescs: data.customercategorydescs,
                zonedescs: data.zonedescs,
                remarks: data.remarks,
                detorname: data.detorname,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid,
                zoningcolor: data.zoningcolor
                    }
                 

                this.M_TN_Lot_CL.lottypeLabel = this.M_TN_Lot_CL.lottype != null && this.M_TN_Lot_CL.lottype != '' ? data.lottype + this.separator +  data.lottypedescs :'' 
                this.M_TN_Lot_CL.blockcdLabel = this.M_TN_Lot_CL.blockcd != null && this.M_TN_Lot_CL.blockcd != '' ? data.blockcd + this.separator + data.blockdescs :'' 
                this.M_TN_Lot_CL.zonecdLabel = this.M_TN_Lot_CL.zonecd != null && this.M_TN_Lot_CL.zonecd != '' ? data.zonecd + this.separator + data.zonedescs :'' 
                this.M_TN_Lot_CL.floorcdLabel = this.M_TN_Lot_CL.floorcd != null && this.M_TN_Lot_CL.floorcd != '' ? data.floorcd + this.separator + data.floordescs :'' 
                this.M_TN_Lot_CL.measurementcdLabel = this.M_TN_Lot_CL.measurementcd != null && this.M_TN_Lot_CL.measurementcd != '' ? data.measurementcd + this.separator + data.measurementdescs :'' 
                this.M_TN_Lot_CL.citycdLabel = this.M_TN_Lot_CL.citycd != null && this.M_TN_Lot_CL.citycd != '' ? data.citycd + this.separator + data.citydescs :'' 
                this.M_TN_Lot_CL.lotthemecdLabel = this.M_TN_Lot_CL.lotthemecd != null && this.M_TN_Lot_CL.lotthemecd != '' ? data.lotthemecd + this.separator + data.lotthemedescs :'' 
                this.M_TN_Lot_CL.lotclasscdLabel = this.M_TN_Lot_CL.lotclasscd != null && this.M_TN_Lot_CL.lotclasscd != '' ? data.lotclasscd + this.separator + data.lotclassdescs :'' 
                this.M_TN_Lot_CL.lotcategorycdLabel = this.M_TN_Lot_CL.lotcategorycd != null && this.M_TN_Lot_CL.lotcategorycd != '' ? data.lotcategorycd + this.separator + data.lotcategorydescs :'' 
                this.M_TN_Lot_CL.zoningnumberLabel = this.M_TN_Lot_CL.zoningnumber != null && this.M_TN_Lot_CL.zoningnumber != '' ? data.zoningnumber :'' 
                this.M_TN_Lot_CL.lotclusterLabel = this.M_TN_Lot_CL.lotcluster != null && this.M_TN_Lot_CL.lotcluster != '' ? data.lotcluster + this.separator + data.lotclusterdescs : ''
         

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

