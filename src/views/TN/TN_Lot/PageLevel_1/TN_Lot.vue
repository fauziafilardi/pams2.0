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
                                <b-col md="6" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_lotno" v-model="M_TN_Lot.lotno"  ref="ref_lotno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSInputSelectList @change="OnlottypeChange" :prop="PI_lottype" :value="M_TN_Lot.lottype" :label="M_TN_Lot.lottypeLabel" ref="ref_lottype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSInputSelectList @change="OnblockcdChange" :prop="PI_blockcd" :value="M_TN_Lot.blockcd" :label="M_TN_Lot.blockcdLabel" ref="ref_blockcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSInputSelectList @change="OnfloorcdChange" :prop="PI_floorcd" :value="M_TN_Lot.floorcd" :label="M_TN_Lot.floorcdLabel" ref="ref_floorcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_TN_Lot.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_address1" v-model="M_TN_Lot.address1"  ref="ref_address1"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_address2" v-model="M_TN_Lot.address2"  ref="ref_address2"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_address3" v-model="M_TN_Lot.address3"  ref="ref_address3"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <b-row>
                                          <b-col md="4" style="margin-right: 10px !important"></b-col>
                                          <b-col md="2">
                                            <ABSTextBoxOnly :prop="PI_address4" v-model="M_TN_Lot.address4"  ref="ref_address4"/>
                                          </b-col>
                                          <b-col md="3">
                                          <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for="">Zip Code</label>
                                          </b-col>
                                          <b-col md="2">
                                            <ABSTextBoxOnly :prop="PI_zipcode" v-model="M_TN_Lot.zipcode"  ref="ref_zipcode"/>
                                          </b-col>
                                        </b-row>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSInputSelectList @change="OncitycdChange" :prop="PI_citycd" :value="M_TN_Lot.citycd" :label="M_TN_Lot.citycdLabel" ref="ref_citycd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSInputSelectList @change="OnlotthemecdChange" :prop="PI_lotthemecd" :value="M_TN_Lot.lotthemecd" :label="M_TN_Lot.lotthemecdLabel" ref="ref_lotthemecd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSInputSelectList @change="OnlotclasscdChange" :prop="PI_lotclasscd" :value="M_TN_Lot.lotclasscd" :label="M_TN_Lot.lotclasscdLabel" ref="ref_lotclasscd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSInputSelectList @change="OnlotcategorycdChange" :prop="PI_lotcategorycd" :value="M_TN_Lot.lotcategorycd" :label="M_TN_Lot.lotcategorycdLabel" ref="ref_lotcategorycd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSInputSelectList @change="OnzoningcdChange" :prop="PI_zoningcd" :value="M_TN_Lot.zoningcd" :label="M_TN_Lot.zoningcdLabel" ref="ref_zoningcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_zoningnumber" v-model="M_TN_Lot.zoningnumber"  ref="ref_zoningnumber"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputRadioButtonVuex @input="OnstratastatusChange" :prop="PI_stratastatus" v-model="M_TN_Lot.stratastatus"  ref="ref_stratastatus" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputDateVuex @input="OneffectivedateChange" :prop="PI_effectivedate" v-model="M_TN_Lot.effectivedate"  ref="ref_effectivedate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputRadioButtonVuex @input="OnantennaChange" :prop="PI_antenna" v-model="M_TN_Lot.antenna"  ref="ref_antenna" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputRadioButtonVuex @input="OnfixchargesChange" :prop="PI_fixcharges" v-model="M_TN_Lot.fixcharges"  ref="ref_fixcharges" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputRadioButtonVuex @input="OnleasableareaChange" :prop="PI_leasablearea" v-model="M_TN_Lot.leasablearea"  ref="ref_leasablearea" />
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close -->
                                <b-col md="6" id="col-right">
                                  <b-row>
                                    <b-col md="12">
                                      <ABSCompute :prop="PI_status" v-model="M_TN_Lot.status"  ref="ref_status" />
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSInputSelectList @change="OnlotclusterChange" :prop="PI_lotcluster" :value="M_TN_Lot.lotcluster" :label="M_TN_Lot.lotclusterLabel" ref="ref_lotcluster"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSInputSelectList @change="OndirectioncdChange" :prop="PI_directioncd" :value="M_TN_Lot.directioncd" :label="M_TN_Lot.directioncdLabel" ref="ref_directioncd"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSInputSelectList @change="OnsectorcdChange" :prop="PI_sectorcd" :value="M_TN_Lot.sectorcd" :label="M_TN_Lot.sectorcdLabel" ref="ref_sectorcd"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSInputSelectList @change="OnviewcdChange" :prop="PI_viewcd" :value="M_TN_Lot.viewcd" :label="M_TN_Lot.viewcdLabel" ref="ref_viewcd"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSInputSelectList @change="OnmeasurementcdChange" :prop="PI_measurementcd" :value="M_TN_Lot.measurementcd" :label="M_TN_Lot.measurementcdLabel" ref="ref_measurementcd"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSCompute :prop="PI_grossarea" v-model="M_TN_Lot.grossLabel"  ref="ref_grossarea" />
                                    </b-col>
                                  </b-row> 
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputRadioButtonVuex @input="OnchargeareaChange" :prop="PI_chargearea" v-model="M_TN_Lot.chargearea"  ref="ref_chargearea" />
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <!-- <ABSCompute :prop="PI_netarea" v-model="M_TN_Lot.netarea"  ref="ref_netarea" /> -->
                                      <ABSinputRadioButtonVuex @input="OnfurnishedChange" :prop="PI_furnished" v-model="M_TN_Lot.furnished"  ref="ref_furnished" />
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputTextVuex :prop="PI_totalroom" v-model="M_TN_Lot.totalroom"  ref="ref_totalroom"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputTextVuex :prop="PI_yeardevelopment" v-model="M_TN_Lot.yeardevelopment"  ref="ref_yeardevelopment"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputTextVuex :prop="PI_insuranceno" v-model="M_TN_Lot.insuranceno"  ref="ref_insuranceno"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputTextVuex :prop="PI_parkinglot" v-model="M_TN_Lot.parkinglot"  ref="ref_parkinglot"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputTextVuex :prop="PI_electricity" v-model="M_TN_Lot.electricity"  ref="ref_electricity"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_Lot.remarks"  ref="ref_remarks" />
                                    </b-col>
                                  </b-row>
                                </b-col>
                  
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
                initialWhere: "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND LotUsage = 'L'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_TN_Lot :{
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
                furnished: 'U',
                totalroom: '',
                yeardevelopment: '',
                insuranceno: '',
                parkinglot: '',
                electricity: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                status: 'Active',
                zoningcd: '',
                zoningcdLabel: '',
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
                chargearea: 'N',
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
                stratastatus: 'N',
                effectivedate: '',
                lotusage: '',
                lotcluster: '',
                lotclusterdescs: '',
                antenna: 'N',
                fixcharges: 'N',
                leasablearea: 'Y',
                grossarea: 0,
                semigrossarea: 0,
                netarea: 0,
                grossLabel: '',
                customercategorydescs: '',
                zonedescs: '',
                remarks: '',
                detorname: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_lotno: { 
                cValidate :'required|max:20', 
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
                cLabel: 'Status', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_lottype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNLotType'    , 
                    ColumnDB: 'LotType'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
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
            PI_lotcluster: { 
                dataLookUp: { 
                    LookUpCd: 'GetCustomerCategoryCd'    , 
                    ColumnDB: 'CustomerCategoryCd'   , 
                    InitialWhere: "LeasingStatus ='Y' and SubportfolioCd = '" +this.getDataUser().SubPortfolioCd+ "'"   , 
                    ParamWhere: ""
                        }, 
                cValidate :'required', 
                cName: 'lotcluster', 
                cLabel: 'Lot Cluster', 
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
                cMasterUrl: 'TN/TN_CustomerCategory' ,
                cDisplayColumn: 'Customer_Category_Code,Descs' ,
            }, 
            PI_blockcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNBlock'    , 
                    ColumnDB: 'BlockCd'   , 
                    InitialWhere: "SubPortfolioCd='"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: ""  
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
            PI_directioncd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNDirection'    , 
                    ColumnDB: 'DirectionCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'directioncd', 
                cLabel: 'Direction', 
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
                cMasterUrl: 'TN/TN_Direction' ,
                cDisplayColumn: 'DirectionCd,Descs' ,
            }, 
            PI_floorcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetFloorCd'    , 
                    ColumnDB: 'FloorCd'   , 
                    InitialWhere: "SubPortfolioCd='"+this.getDataUser().SubPortfolioCd+"' AND BlockCd=''"   , 
                    ParamWhere: ""
                        }, 
                cValidate :'required', 
                cName: 'floorcd', 
                cLabel: 'Floor ', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 5, 
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
                cMasterUrl: 'TN/TN_Floor' ,
                cDisplayColumn: 'FloorCode,Description' ,
            }, 
            PI_sectorcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNSector'    , 
                    ColumnDB: 'SectorCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'sectorcd', 
                cLabel: 'Sector', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 24, 
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
                cMasterUrl: 'TN/TN_Sector' ,
                cDisplayColumn: 'SectorCd,Descs' ,
            }, 
            PI_descs: { 
                cValidate :'max:60', 
                cName: 'descs', 
                cLabel: 'Description', 
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
            PI_viewcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNView'    , 
                    ColumnDB: 'ViewCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'viewcd', 
                cLabel: 'View', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 25, 
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
                cMasterUrl: 'TN/TN_View' ,
                cDisplayColumn: 'ViewCd,Descs' ,
            }, 
            PI_address1: { 
                cValidate :'max:50', 
                cName: 'address1', 
                cLabel: 'Address', 
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
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'measurementcd', 
                cLabel: 'Measurement', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 26, 
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
            PI_address2: { 
                cValidate :'max:50', 
                cName: 'address2', 
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
            PI_address3: { 
                cValidate :'max:50', 
                cName: 'address3', 
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
                cLabel: 'Semi Gross Area ', 
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
            PI_zipcode: { 
                cValidate :'max:10', 
                cName: 'zipcode', 
                cLabel: 'Zip Code', 
                cLabelSize: 4, 
                cOrder: 11, 
                cKey: false, 
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
                cRadioDefaultOption: 'G', 
                cLabel:'Charge Area ', 
                cLabelSize: 4, 
                cOrder: 27, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_citycd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMCity'    , 
                    ColumnDB: 'CityCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'citycd', 
                cLabel: 'City', 
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
                cMasterUrl: 'CM/CM_CountryCity' ,
                cDisplayColumn: 'CityCode,Description' ,
            }, 
            PI_furnished: { 
                cValidate :'', 
                cName: 'furnished', 
                cId: 'rdbfurnished', 
                cRadioOptions: [{ text: 'Un-Furnished', value: 'U' },{ text: 'Semi-Furnished', value: 'S' },{ text: 'Fully-Furnished', value: 'F' },], 
                cRadioDefaultOption: 'U', 
                cLabel:'Furnished', 
                cLabelSize: 4, 
                cOrder: 28, 
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
                    ParamWhere: '',
                    SourceField: 'LotThemeCd,Descs,TimeEdit',
                    DisplayLookup: 'LotThemeCd,Descs' 
                        }, 
                cValidate :'', 
                cName: 'lotthemecd', 
                cLabel: 'Theme', 
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
                cMasterUrl: 'TN/TN_LotTheme' ,
                cDisplayColumn: 'Lot_Theme_Cd,Descs' ,
            }, 
            PI_totalroom: { 
                cValidate :'', 
                cName: 'totalroom', 
                cLabel: 'Total Room', 
                cLabelSize: 4, 
                cOrder: 29, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_lotclasscd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNLotClass'    , 
                    ColumnDB: 'LotClassCd'   , 
                    InitialWhere: "LotThemeCd=''"   , 
                    ParamWhere: "",
                    SourceField: '',
                    DisplayLookup: '' 
                        }, 
                cValidate :'', 
                cName: 'lotclasscd', 
                cLabel: 'Class', 
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
                cMasterUrl: 'TN/TN_LotClass' ,
                cDisplayColumn: 'Lot_Class_Cd,Descs' ,
            }, 
            PI_yeardevelopment: { 
                cValidate :'', 
                cName: 'yeardevelopment', 
                cLabel: 'Year Of Development', 
                cLabelSize: 4, 
                cOrder: 30, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_lotcategorycd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNLotCategory'    , 
                    ColumnDB: 'LotCategoryCd'   , 
                    InitialWhere: "CAST(LotClassSequenceNo AS VARCHAR)=''"   , 
                    ParamWhere: "",
                    SourceField: '',
                    DisplayLookup: '',
                        }, 
                cValidate :'', 
                cName: 'lotcategorycd', 
                cLabel: 'Category', 
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
                cMasterUrl: 'TN/TN_LotCategory' ,
                cDisplayColumn: 'Lot_Category_Cd,Descs' ,
            }, 
            PI_insuranceno: { 
                cValidate :'', 
                cName: 'insuranceno', 
                cLabel: 'Insurance No', 
                cLabelSize: 4, 
                cOrder: 31, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
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
                cMasterUrl: 'TN/TN_FloorZoning' ,
                cDisplayColumn: 'ZoningCode' ,
            }, 
            PI_parkinglot: { 
                cValidate :'', 
                cName: 'parkinglot', 
                cLabel: 'Parking Lot', 
                cLabelSize: 4, 
                cOrder: 32, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_zoningnumber: { 
                cValidate :'max:2', 
                cName: 'zoningnumber', 
                cLabel: 'Zoning Number', 
                cLabelSize: 4, 
                cOrder: 17, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_electricity: { 
                cValidate :'', 
                cName: 'electricity', 
                cLabel: 'Electricity', 
                cLabelSize: 4, 
                cOrder: 33, 
                cKey: false, 
                cType: 'numeric',
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
                cKey: false, 
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
                cOrder:34, 
                cKey: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible: true, 
                cResize: false, 
                cReadOnly: false, 
                cRows: 6, 
                cMaxRows: 3, 
                cSize: 'md', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
            }, 
            PI_stratastatus: { 
                cValidate :'', 
                cName: 'stratastatus', 
                cId: 'rdbstratastatus', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' }, { text: 'No', value: 'N' }], 
                cRadioDefaultOption: 'N', 
                cLabel:'Strata Lot ', 
                cLabelSize: 4, 
                cOrder: 18, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_effectivedate: { 
                cValidate :'required', 
                cName: 'effectivedate', 
                cLabel: 'Effective Date', 
                cLabelSize: 4, 
                cOrder: 19, 
                cKey: false, 
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
                cRadioOptions: [{ text: 'Yes', value: 'Y' }, { text: 'No', value: 'N' }], 
                cRadioDefaultOption: 'N', 
                cLabel:'Antenna ', 
                cLabelSize: 4, 
                cOrder: 20, 
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
                cRadioDefaultOption: 'N', 
                cLabel:'Fix Charges ', 
                cLabelSize: 4, 
                cOrder: 21, 
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
                cRadioDefaultOption: 'Y', 
                cLabel:'Leasable Area ', 
                cLabelSize: 4, 
                cOrder: 22, 
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
                cFormPageNo: this.data.PageOrder
            },

            DefaultAddress: {
              Address1: '',
              Address2: '',
              Address3: '',
              Address4: '',
              CityCd: '',
              ZipCode: ''
            },
            StrataStatus: ''
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
        OnlottypeChange (data) {
        this.$nextTick(() => {
            this.M_TN_Lot.lottype = data.id
            this.M_TN_Lot.lottypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{lottype}
            }
        })
        this.$forceUpdate()
        },
        OnlotclusterChange (data) {
        this.$nextTick(() => {
            this.M_TN_Lot.lotcluster = data.id
            this.M_TN_Lot.lotclusterLabel = data.label
            if (this.inputStatus != "VIEW") {
//{lotcluster}
            }
        })
        this.$forceUpdate()
        },
        OnblockcdChange (data) {
          // console.log(data)
        this.$nextTick(() => {
            this.M_TN_Lot.blockcd = data.id
            this.M_TN_Lot.blockcdLabel = data.label
            if (this.inputStatus != "VIEW") {
              this.PI_floorcd.dataLookUp.InitialWhere = "SubPortfolioCd='"+this.getDataUser().SubPortfolioCd+"' AND BlockCd='"+data.BlockCode+"'"
            }
        })
        this.$forceUpdate()
        },
        OndirectioncdChange (data) {
        this.$nextTick(() => {
            this.M_TN_Lot.directioncd = data.id
            this.M_TN_Lot.directioncdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{directioncd}
            }
        })
        this.$forceUpdate()
        },
        OnfloorcdChange (data) {
        this.$nextTick(() => {
            this.M_TN_Lot.floorcd = data.id
            this.M_TN_Lot.floorcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{floorcd}
            }
        })
        this.$forceUpdate()
        },
        OnsectorcdChange (data) {
        this.$nextTick(() => {
            this.M_TN_Lot.sectorcd = data.id
            this.M_TN_Lot.sectorcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{sectorcd}
            }
        })
        this.$forceUpdate()
        },
        OnviewcdChange (data) {
        this.$nextTick(() => {
            this.M_TN_Lot.viewcd = data.id
            this.M_TN_Lot.viewcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{viewcd}
            }
        })
        this.$forceUpdate()
        },
        OnmeasurementcdChange (data) {
        this.$nextTick(() => {
            this.M_TN_Lot.measurementcd = data.id
            this.M_TN_Lot.measurementcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{measurementcd}
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
        OncitycdChange (data) {
        this.$nextTick(() => {
            this.M_TN_Lot.citycd = data.id
            this.M_TN_Lot.citycdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{citycd}
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
        OnlotthemecdChange (data) {
        this.$nextTick(() => {
            this.M_TN_Lot.lotthemecd = data.id
            this.M_TN_Lot.lotthemecdLabel = data.label
            if (this.inputStatus != "VIEW") {
              this.PI_lotclasscd.dataLookUp.InitialWhere = "LotThemeCd='"+data.id+"'"
            }
        })
        this.$forceUpdate()
        },
        OnlotclasscdChange (data) {
          // console.log(data)
        this.$nextTick(() => {
            this.M_TN_Lot.lotclasscd = data.id
            this.M_TN_Lot.lotclasscdLabel = data.label
            if (this.inputStatus != "VIEW") {
              this.M_TN_Lot.lotclasssequenceno = data.LotClassSequenceNo ? data.LotClassSequenceNo : ''
              this.PI_lotcategorycd.dataLookUp.InitialWhere = "CAST(LotClassSequenceNo AS VARCHAR)='"+(data.LotClassSequenceNo ? data.LotClassSequenceNo : '')+"'"
            }
        })
        this.$forceUpdate()
        },
        OnlotcategorycdChange (data) {
          // console.log(data)
        this.$nextTick(() => {
            this.M_TN_Lot.lotcategorycd = data.id
            this.M_TN_Lot.lotcategorycdLabel = data.label
            if (this.inputStatus != "VIEW") {
              this.M_TN_Lot.lotcategorysequenceno = data.LotCategorySequenceNo ? data.LotCategorySequenceNo : 'NULL'
            }
        })
        this.$forceUpdate()
        },
        OnzoningcdChange (data) {
        this.$nextTick(() => {
            this.M_TN_Lot.zoningcd = data.id
            this.M_TN_Lot.zoningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
              this.M_TN_Lot.zoningnumber = data.ZoningNumber
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
              if(data == 'Y'){
                this.M_TN_Lot.fixcharges = 'Y'
                this.M_TN_Lot.leasablearea = 'N'
                this.PI_leasablearea.cProtect = true
                this.PI_fixcharges.cProtect = true
              }else{
                // this.M_TN_Lot.fixcharges = 'Y'
                // this.M_TN_Lot.leasablearea = 'N'
                this.PI_leasablearea.cProtect = false
                this.PI_fixcharges.cProtect = false
              }
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
           this.getToolbar().statusFunction[1].disabled = false
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
            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
            LotNo: this.M_TN_Lot.lotno,
            LotType: this.M_TN_Lot.lottype == '' || this.M_TN_Lot.lottype == null ? 'NULL' : this.M_TN_Lot.lottype ,
            BlockCd: this.M_TN_Lot.blockcd == '' || this.M_TN_Lot.blockcd == null ? 'NULL' : this.M_TN_Lot.blockcd ,
            FloorCd: this.M_TN_Lot.floorcd == '' || this.M_TN_Lot.floorcd == null ? 'NULL' : this.M_TN_Lot.floorcd ,
            Descs: this.M_TN_Lot.descs,
            Remarks: this.M_TN_Lot.remarks,
            Address1: this.M_TN_Lot.address1,
            Address2: this.M_TN_Lot.address2,
            Address3: this.M_TN_Lot.address3,
            Address4: this.M_TN_Lot.address4,
            CityCd: this.M_TN_Lot.citycd == '' || this.M_TN_Lot.citycd == null ? 'NULL' : this.M_TN_Lot.citycd,
            ZipCode: this.M_TN_Lot.zipcode,
            LotThemeCd: this.M_TN_Lot.lotthemecd,
            LotClassCd: this.M_TN_Lot.lotclasscd,
            LotCategoryCd: this.M_TN_Lot.lotcategorycd == '' || this.M_TN_Lot.lotcategorycd == null ? '' : this.M_TN_Lot.lotcategorycd,
            ZoningCd: this.M_TN_Lot.zoningcd == '' || this.M_TN_Lot.zoningcd == null ? '' : this.M_TN_Lot.zoningcd ,
            ZoningNumber: this.M_TN_Lot.zoningnumber == '' || this.M_TN_Lot.zoningnumber == null ? 0 : this.M_TN_Lot.zoningnumber ,
            LotClassSequenceNo: this.M_TN_Lot.lotclasssequenceno == '' || this.M_TN_Lot.lotclasssequenceno == null ? 0 : this.M_TN_Lot.lotclasssequenceno,
            LotCategorySequenceNo: this.M_TN_Lot.lotcategorysequenceno == '' || this.M_TN_Lot.lotcategorysequenceno == null ? 0 : this.M_TN_Lot.lotcategorysequenceno,
            LotCluster: this.M_TN_Lot.lotcluster == '' || this.M_TN_Lot.lotcluster == null ? 'NULL' : this.M_TN_Lot.lotcluster ,
            ZoneCd: "NULL",
            StrataStatus: this.M_TN_Lot.stratastatus,
            EffectiveDate: this.M_TN_Lot.effectivedate == '' || this.M_TN_Lot.effectivedate == null ? 'NULL' : this.M_TN_Lot.effectivedate ,
            LotUsage: "L",
            Antenna: this.M_TN_Lot.antenna,
            FixCharges: this.M_TN_Lot.fixcharges,
            LeasableArea: this.M_TN_Lot.leasablearea,
            DirectionCd: this.M_TN_Lot.directioncd == '' || this.M_TN_Lot.directioncd == null ? '' : this.M_TN_Lot.directioncd ,
            SectorCd: this.M_TN_Lot.sectorcd == '' || this.M_TN_Lot.sectorcd == null ? '' : this.M_TN_Lot.sectorcd ,
            ViewCd: this.M_TN_Lot.viewcd == '' || this.M_TN_Lot.viewcd == null ? '' : this.M_TN_Lot.viewcd ,
            MeasurementCd: this.M_TN_Lot.measurementcd == '' || this.M_TN_Lot.measurementcd == null ? '' : this.M_TN_Lot.measurementcd ,
            ChargeArea: this.M_TN_Lot.chargearea,
            Furnished: this.M_TN_Lot.furnished,
            TotalRoom: this.M_TN_Lot.totalroom == '' || this.M_TN_Lot.totalroom == null ? 0 : this.M_TN_Lot.totalroom,
            YearDevelopment: this.M_TN_Lot.yeardevelopment == '' || this.M_TN_Lot.yeardevelopment == null ? 0 : this.M_TN_Lot.yeardevelopment,
            InsuranceNo: this.M_TN_Lot.insuranceno == '' || this.M_TN_Lot.insuranceno == null ? '' : this.M_TN_Lot.insuranceno,
            ParkingLot: this.M_TN_Lot.parkinglot == '' || this.M_TN_Lot.parkinglot == null ? 0 : this.M_TN_Lot.parkinglot,
            Electricity: this.M_TN_Lot.electricity == '' || this.M_TN_Lot.electricity == null ? 0 : this.M_TN_Lot.electricity,
            UserInput: this.getDataUser().UserId,
            L0: this.M_TN_Lot.l0 == '' || this.M_TN_Lot.l0 == null ? 'NULL' : this.M_TN_Lot.l0,
            L1: this.M_TN_Lot.l1 == '' || this.M_TN_Lot.l1 == null ? 'NULL' : this.M_TN_Lot.l1,
            L2: this.M_TN_Lot.l2 == '' || this.M_TN_Lot.l2 == null ? 'NULL' : this.M_TN_Lot.l2,
            L3: this.M_TN_Lot.l3 == '' || this.M_TN_Lot.l3 == null ? 'NULL' : this.M_TN_Lot.l3,
            L4: this.M_TN_Lot.l4 == '' || this.M_TN_Lot.l4 == null ? 'NULL' : this.M_TN_Lot.l4,
            L5: this.M_TN_Lot.l5 == '' || this.M_TN_Lot.l5 == null ? 'NULL' : this.M_TN_Lot.l5,
            L6: this.M_TN_Lot.l6 == '' || this.M_TN_Lot.l6 == null ? 'NULL' : this.M_TN_Lot.l6,
            L7: this.M_TN_Lot.l7 == '' || this.M_TN_Lot.l7 == null ? 'NULL' : this.M_TN_Lot.l7,
            L8: this.M_TN_Lot.l8 == '' || this.M_TN_Lot.l8 == null ? 'NULL' : this.M_TN_Lot.l8,
            L9: this.M_TN_Lot.l9 == '' || this.M_TN_Lot.l9 == null ? 'NULL' : this.M_TN_Lot.l9
          }

          this.postJSON(this.getUrlInsert(), param)
          .then((response) => {
            if(response == null) return
            this.$parent.resultInsert(response.Message)
          })
        },
        M_Update() {
          var param = {			
            OptionSeq: this.getOptionSeq().OptionSeq,
            LineNo: this.$parent.data.PageOrder,
            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
            LotNo: this.M_TN_Lot.lotno,
            LotType: this.M_TN_Lot.lottype == '' || this.M_TN_Lot.lottype == null ? 'NULL' : this.M_TN_Lot.lottype ,
            BlockCd: this.M_TN_Lot.blockcd == '' || this.M_TN_Lot.blockcd == null ? 'NULL' : this.M_TN_Lot.blockcd ,
            FloorCd: this.M_TN_Lot.floorcd == '' || this.M_TN_Lot.floorcd == null ? 'NULL' : this.M_TN_Lot.floorcd ,
            Descs: this.M_TN_Lot.descs,
            Remarks: this.M_TN_Lot.remarks,
            Address1: this.M_TN_Lot.address1,
            Address2: this.M_TN_Lot.address2,
            Address3: this.M_TN_Lot.address3,
            Address4: this.M_TN_Lot.address4,
            CityCd: this.M_TN_Lot.citycd == '' || this.M_TN_Lot.citycd == null ? 'NULL' : this.M_TN_Lot.citycd,
            ZipCode: this.M_TN_Lot.zipcode,
            LotThemeCd: this.M_TN_Lot.lotthemecd,
            LotClassCd: this.M_TN_Lot.lotclasscd,
            LotCategoryCd: this.M_TN_Lot.lotcategorycd == '' || this.M_TN_Lot.lotcategorycd == null ? '' : this.M_TN_Lot.lotcategorycd,
            ZoningCd: this.M_TN_Lot.zoningcd,
            ZoningNumber: this.M_TN_Lot.zoningnumber == '' || this.M_TN_Lot.zoningnumber == null ? 0 : this.M_TN_Lot.zoningnumber ,
            LotClassSequenceNo: this.M_TN_Lot.lotclasssequenceno  == '' || this.M_TN_Lot.lotclasssequenceno == null ? 'NULL' : this.M_TN_Lot.lotclasssequenceno,
            LotCategorySequenceNo: this.M_TN_Lot.lotcategorysequenceno  == '' || this.M_TN_Lot.lotcategorysequenceno == null ? 0 : this.M_TN_Lot.lotcategorysequenceno,
            LotCluster: this.M_TN_Lot.lotcluster == '' || this.M_TN_Lot.lotcluster == null ? 'NULL' : this.M_TN_Lot.lotcluster ,
            ZoneCd: "NULL",
            StrataStatus: this.M_TN_Lot.stratastatus,
            EffectiveDate: this.M_TN_Lot.effectivedate == '' || this.M_TN_Lot.effectivedate == null ? 'NULL' : this.M_TN_Lot.effectivedate ,
            LotUsage: "L",
            Antenna: this.M_TN_Lot.antenna,
            FixCharges: this.M_TN_Lot.fixcharges,
            LeasableArea: this.M_TN_Lot.leasablearea,
            DirectionCd: this.M_TN_Lot.directioncd == '' || this.M_TN_Lot.directioncd == null ? 'NULL' : this.M_TN_Lot.directioncd ,
            SectorCd: this.M_TN_Lot.sectorcd == '' || this.M_TN_Lot.sectorcd == null ? 'NULL' : this.M_TN_Lot.sectorcd ,
            ViewCd: this.M_TN_Lot.viewcd == '' || this.M_TN_Lot.viewcd == null ? 'NULL' : this.M_TN_Lot.viewcd ,
            MeasurementCd: this.M_TN_Lot.measurementcd == '' || this.M_TN_Lot.measurementcd == null ? 'NULL' : this.M_TN_Lot.measurementcd ,
            ChargeArea: this.M_TN_Lot.chargearea,
            Furnished: this.M_TN_Lot.furnished,
            TotalRoom: this.M_TN_Lot.totalroom == '' || this.M_TN_Lot.totalroom == null ? 0 : this.M_TN_Lot.totalroom,
            YearDevelopment: this.M_TN_Lot.yeardevelopment == '' || this.M_TN_Lot.yeardevelopment == null ? 0 : this.M_TN_Lot.yeardevelopment,
            InsuranceNo: this.M_TN_Lot.insuranceno == '' || this.M_TN_Lot.insuranceno == null ? 0 : this.M_TN_Lot.insuranceno,
            ParkingLot: this.M_TN_Lot.parkinglot == '' || this.M_TN_Lot.parkinglot == null ? 0 : this.M_TN_Lot.parkinglot,
            Electricity: this.M_TN_Lot.electricity == '' || this.M_TN_Lot.electricity == null ? 0 : this.M_TN_Lot.electricity,
            UserEdit: this.getDataUser().UserId,
            LastUpdateStamp: this.M_TN_Lot.lastupdatestamp,
            L0: this.M_TN_Lot.l0 == '' || this.M_TN_Lot.l0 == null ? 'NULL' : this.M_TN_Lot.l0,
            L1: this.M_TN_Lot.l1 == '' || this.M_TN_Lot.l1 == null ? 'NULL' : this.M_TN_Lot.l1,
            L2: this.M_TN_Lot.l2 == '' || this.M_TN_Lot.l2 == null ? 'NULL' : this.M_TN_Lot.l2,
            L3: this.M_TN_Lot.l3 == '' || this.M_TN_Lot.l3 == null ? 'NULL' : this.M_TN_Lot.l3,
            L4: this.M_TN_Lot.l4 == '' || this.M_TN_Lot.l4 == null ? 'NULL' : this.M_TN_Lot.l4,
            L5: this.M_TN_Lot.l5 == '' || this.M_TN_Lot.l5 == null ? 'NULL' : this.M_TN_Lot.l5,
            L6: this.M_TN_Lot.l6 == '' || this.M_TN_Lot.l6 == null ? 'NULL' : this.M_TN_Lot.l6,
            L7: this.M_TN_Lot.l7 == '' || this.M_TN_Lot.l7 == null ? 'NULL' : this.M_TN_Lot.l7,
            L8: this.M_TN_Lot.l8 == '' || this.M_TN_Lot.l8 == null ? 'NULL' : this.M_TN_Lot.l8,
            L9: this.M_TN_Lot.l9 == '' || this.M_TN_Lot.l9 == null ? 'NULL' : this.M_TN_Lot.l9
          }

          this.postJSON(this.getUrlUpdate(), param)
          .then((response) => {
            if(response == null) return
            this.$parent.resultUpdate(response.Message)
          })
       },
		M_ClearForm(){
            this.M_TN_Lot = {
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
                furnished: 'U',
                totalroom: '',
                yeardevelopment: '',
                insuranceno: '',
                parkinglot: '',
                electricity: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                status: 'Active',
                zoningcd: '',
                zoningcdLabel: '',
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
                chargearea: 'N',
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
                stratastatus: 'N',
                effectivedate: '',
                lotusage: '',
                lotcluster: '',
                lotclusterdescs: '',
                antenna: 'N',
                fixcharges: 'N',
                leasablearea: 'Y',
                grossarea: 0,
                semigrossarea: 0,
                netarea: 0,
                grossLabel: '',
                customercategorydescs: '',
                zonedescs: '',
                remarks: '',
                detorname: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
          this.M_TN_Lot.address1 = this.DefaultAddress.Address1
          this.M_TN_Lot.address2 = this.DefaultAddress.Address2
          this.M_TN_Lot.address3 = this.DefaultAddress.Address3
          this.M_TN_Lot.address4 = this.DefaultAddress.Address4
          this.M_TN_Lot.citycd = this.DefaultAddress.CityCd
          this.M_TN_Lot.citycdLabel = this.DefaultAddress.CityCd
          this.M_TN_Lot.zipcode = this.DefaultAddress.ZipCode
          this.M_TN_Lot.stratastatus = this.StrataStatus

          this.$refs.ref_lotno.focus()
        },
        M_Edit(){
          this.$refs.ref_lottype.focus()
        },
        M_Delete(dt){
          var data = this.FormToABSList().getRowSelected()
          var dataDelete = []

          data.forEach((value) => {
            dataDelete.push({
              SubPortfolioCd: this.getDataUser().SubPortfolioCd,
              LotNo: value.LotNo,
              LastUpdateStamp: value.LastUpdateStamp,
              _Message_: "Lot No " + value.LotNo
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
this.M_TN_Lot = {
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
                totalroom: data.totalroom,
                yeardevelopment: data.yeardevelopment,
                insuranceno: data.insuranceno,
                parkinglot: data.parkinglot,
                electricity: data.electricity,
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
                status2: data.status,
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
                rentalrate: data.rentalrate,
                rentalamt: data.rentalamt,
                rentalcurrencycd: data.rentalcurrencycd,
                servicechargerate: data.servicechargerate,
                servicechargeamt: data.servicechargeamt,
                servicechargecurrencycd: data.servicechargecurrencycd,
                sinkingfundrate: data.sinkingfundrate,
                sinkingfundamt: data.sinkingfundamt,
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
                grossLabel: this.isCurrency(data.grossarea, this.decimal) + " / " + this.isCurrency(data.semigrossarea, this.decimal) + " / " + this.isCurrency(data.netarea, this.decimal),
                customercategorydescs: data.customercategorydescs,
                zonedescs: data.zonedescs,
                remarks: data.remarks,
                detorname: data.detorname,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
                 
                if(data.antenna == 'Y'){
                  // this.M_TN_Lot.fixcharges = 'Y'
                  // this.M_TN_Lot.leasablearea = 'N'
                  this.PI_leasablearea.cProtect = true
                  this.PI_fixcharges.cProtect = true
                }else{
                  // this.M_TN_Lot.fixcharges = 'Y'
                  // this.M_TN_Lot.leasablearea = 'N'
                  this.PI_leasablearea.cProtect = false
                  this.PI_fixcharges.cProtect = false
                }
                
                this.M_TN_Lot.lottypeLabel = this.M_TN_Lot.lottype != null && this.M_TN_Lot.lottype != '' ? data.lottype + this.separator + data.lottypedescs :'' 
                this.M_TN_Lot.lotclusterLabel = this.M_TN_Lot.lotcluster != null && this.M_TN_Lot.lotcluster != '' ? data.lotcluster + this.separator + data.lotclusterdescs :'' 
                this.M_TN_Lot.blockcdLabel = this.M_TN_Lot.blockcd != null && this.M_TN_Lot.blockcd != '' ? data.blockcd + this.separator + data.blockdescs :'' 
                this.M_TN_Lot.directioncdLabel = this.M_TN_Lot.directioncd != null && this.M_TN_Lot.directioncd != '' ? data.directioncd + this.separator + data.directiondescs :'' 
                this.M_TN_Lot.floorcdLabel = this.M_TN_Lot.floorcd != null && this.M_TN_Lot.floorcd != '' ? data.floorcd + this.separator + data.floordescs :'' 
                this.M_TN_Lot.sectorcdLabel = this.M_TN_Lot.sectorcd != null && this.M_TN_Lot.sectorcd != '' ? data.sectorcd + this.separator + data.sectordescs :'' 
                this.M_TN_Lot.viewcdLabel = this.M_TN_Lot.viewcd != null && this.M_TN_Lot.viewcd != '' ? data.viewcd + this.separator + data.viewdescs :'' 
                this.M_TN_Lot.measurementcdLabel = this.M_TN_Lot.measurementcd != null && this.M_TN_Lot.measurementcd != '' ? data.measurementcd + this.separator + data.measurementdescs :'' 
                this.M_TN_Lot.citycdLabel = this.M_TN_Lot.citycd != null && this.M_TN_Lot.citycd != '' ? data.citycd + this.separator + data.citydescs :'' 
                this.M_TN_Lot.lotthemecdLabel = this.M_TN_Lot.lotthemecd != null && this.M_TN_Lot.lotthemecd != '' ? data.lotthemecd + this.separator + data.lotthemedescs :'' 
                this.M_TN_Lot.lotclasscdLabel = this.M_TN_Lot.lotclasscd != null && this.M_TN_Lot.lotclasscd != '' ? data.lotclasscd + this.separator + data.lotclassdescs :'' 
                this.M_TN_Lot.lotcategorycdLabel = this.M_TN_Lot.lotcategorycd != null && this.M_TN_Lot.lotcategorycd != '' ? data.lotcategorycd + this.separator + data.lotcategorydescs :'' 
                this.M_TN_Lot.zoningcdLabel = this.M_TN_Lot.zoningcd != null && this.M_TN_Lot.zoningcd != '' ? data.zoningcd :'' 

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        },
        getDefaultAddress() {
          var param = {
            OptionFunctionCd: 'GetDefaultAddress',
            ModuleCd: "TN",
            SubPortfolioCd: this.getDataUser().SubPortfolioCd
          }

          this.FnDynamicFunction(param)
          .then(FnOpt2 => {
            if (FnOpt2 == null) return
            var data = FnOpt2[0]

            this.DefaultAddress = {
              Address1: data.Address1,
              Address2: data.Address2,
              Address3: data.Address3,
              Address4: data.Address4,
              CityCd: data.CityCd,
              ZipCode: data.ZipCode
            }
          })
        },
        getStrataStatus() {
          var param = {
            OptionFunctionCd: 'GetStrataStatus',
            ModuleCd: "TN"
          }

          this.FnDynamicFunction(param)
          .then(FnOpt2 => {
            if (FnOpt2 == null) return
            this.StrataStatus = FnOpt2[0].SubPortfolioStrata
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
      this.getDefaultAddress()
      this.getStrataStatus()
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

