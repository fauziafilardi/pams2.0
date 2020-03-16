<template>
    <div class="height--full">
        <HeaderFormListVuex2 :isProcess = "true" />
        <div class="content-app-form__body" style="background-color: white;padding-top: 1px !important;margin-left: 15px;margin-right: 15px;height: 95%;overflow-y: auto;overflow-x: hidden;padding-bottom: 80px;">  
        <div :style="'margin-top:10px;'" class="el" mousetip mousetip-msg="I'm a tooltip">
            <b-collapse id="collapse1" :visible="true">
                <b-row  style="padding-left: 10px; padding-bottom: 10px; !important;">     
					<b-col md="12" id="col-left" class="bColMasterForm">	
						<b-form :data-vv-scope="'FormScope_' + PageLevel + '_' + TabIndex" :data-vv-value-path="'FormScope_' + PageLevel + '_' + TabIndex">
                            <b-row style="padding-left:10px;">					
                                <b-col md="12" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnfromcutoffdateChange" :prop="PI_fromcutoffdate" v-model="M_TN_LotAvailabilityInquiry.fromcutoffdate"  ref="ref_fromcutoffdate" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OntocutoffdateChange" :prop="PI_tocutoffdate" v-model="M_TN_LotAvailabilityInquiry.tocutoffdate"  ref="ref_tocutoffdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputRadioButtonVuex @input="OnstatusChange" :prop="PI_status" v-model="M_TN_LotAvailabilityInquiry.status"  ref="ref_status" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnfromlottypeChange" :prop="PI_fromlottype" :value="M_TN_LotAvailabilityInquiry.fromlottype" :label="M_TN_LotAvailabilityInquiry.fromlottypeLabel" ref="ref_fromlottype"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OntolottypeChange" :prop="PI_tolottype" :value="M_TN_LotAvailabilityInquiry.tolottype" :label="M_TN_LotAvailabilityInquiry.tolottypeLabel" ref="ref_tolottype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnfromlotChange" :prop="PI_fromlot" :value="M_TN_LotAvailabilityInquiry.fromlot" :label="M_TN_LotAvailabilityInquiry.fromlotLabel" ref="ref_fromlot"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OntolotChange" :prop="PI_tolot" :value="M_TN_LotAvailabilityInquiry.tolot" :label="M_TN_LotAvailabilityInquiry.tolotLabel" ref="ref_tolot"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnfromblockChange" :prop="PI_fromblock" :value="M_TN_LotAvailabilityInquiry.fromblock" :label="M_TN_LotAvailabilityInquiry.fromblockLabel" ref="ref_fromblock"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OntoblockChange" :prop="PI_toblock" :value="M_TN_LotAvailabilityInquiry.toblock" :label="M_TN_LotAvailabilityInquiry.toblockLabel" ref="ref_toblock"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnfromfloorChange" :prop="PI_fromfloor" :value="M_TN_LotAvailabilityInquiry.fromfloor" :label="M_TN_LotAvailabilityInquiry.fromfloorLabel" ref="ref_fromfloor"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OntofloorChange" :prop="PI_tofloor" :value="M_TN_LotAvailabilityInquiry.tofloor" :label="M_TN_LotAvailabilityInquiry.tofloorLabel" ref="ref_tofloor"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnfromthemeChange" :prop="PI_fromtheme" :value="M_TN_LotAvailabilityInquiry.fromtheme" :label="M_TN_LotAvailabilityInquiry.fromthemeLabel" ref="ref_fromtheme"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OntothemeChange" :prop="PI_totheme" :value="M_TN_LotAvailabilityInquiry.totheme" :label="M_TN_LotAvailabilityInquiry.tothemeLabel" ref="ref_totheme"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnfromclassChange" :prop="PI_fromclass" :value="M_TN_LotAvailabilityInquiry.fromclass" :label="M_TN_LotAvailabilityInquiry.fromclassLabel" ref="ref_fromclass"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OntoclassChange" :prop="PI_toclass" :value="M_TN_LotAvailabilityInquiry.toclass" :label="M_TN_LotAvailabilityInquiry.toclassLabel" ref="ref_toclass"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnfromcategoryChange" :prop="PI_fromcategory" :value="M_TN_LotAvailabilityInquiry.fromcategory" :label="M_TN_LotAvailabilityInquiry.fromcategoryLabel" ref="ref_fromcategory"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OntocategoryChange" :prop="PI_tocategory" :value="M_TN_LotAvailabilityInquiry.tocategory" :label="M_TN_LotAvailabilityInquiry.tocategoryLabel" ref="ref_tocategory"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnfromdirectionChange" :prop="PI_fromdirection" :value="M_TN_LotAvailabilityInquiry.fromdirection" :label="M_TN_LotAvailabilityInquiry.fromdirectionLabel" ref="ref_fromdirection"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OntodirectionChange" :prop="PI_todirection" :value="M_TN_LotAvailabilityInquiry.todirection" :label="M_TN_LotAvailabilityInquiry.todirectionLabel" ref="ref_todirection"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnfromsectorChange" :prop="PI_fromsector" :value="M_TN_LotAvailabilityInquiry.fromsector" :label="M_TN_LotAvailabilityInquiry.fromsectorLabel" ref="ref_fromsector"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OntosectorChange" :prop="PI_tosector" :value="M_TN_LotAvailabilityInquiry.tosector" :label="M_TN_LotAvailabilityInquiry.tosectorLabel" ref="ref_tosector"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnfromviewChange" :prop="PI_fromview" :value="M_TN_LotAvailabilityInquiry.fromview" :label="M_TN_LotAvailabilityInquiry.fromviewLabel" ref="ref_fromview"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OntoviewChange" :prop="PI_toview" :value="M_TN_LotAvailabilityInquiry.toview" :label="M_TN_LotAvailabilityInquiry.toviewLabel" ref="ref_toview"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @onBlur="OnfromgrossChange" :prop="PI_fromgross" v-model="M_TN_LotAvailabilityInquiry.fromgross"  ref="ref_fromgross"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_togross" v-model="M_TN_LotAvailabilityInquiry.togross"  ref="ref_togross"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @onBlur="OnfromsemigrossChange" :prop="PI_fromsemigross" v-model="M_TN_LotAvailabilityInquiry.fromsemigross"  ref="ref_fromsemigross"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_tosemigross" v-model="M_TN_LotAvailabilityInquiry.tosemigross"  ref="ref_tosemigross"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @onBlur="OnfromnetChange" :prop="PI_fromnet" v-model="M_TN_LotAvailabilityInquiry.fromnet"  ref="ref_fromnet"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_tonet" v-model="M_TN_LotAvailabilityInquiry.tonet"  ref="ref_tonet"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @onBlur="OnfromroomChange" :prop="PI_fromroom" v-model="M_TN_LotAvailabilityInquiry.fromroom"  ref="ref_fromroom"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_toroom" v-model="M_TN_LotAvailabilityInquiry.toroom"  ref="ref_toroom"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnfurnishChange" :prop="PI_furnish" v-model="M_TN_LotAvailabilityInquiry.furnish"  ref="ref_furnish" />
                                      </b-col>
                                    </b-row>
                                    <div class="div-collapse">
                                        <span class="master-span-form">
                                            Lot Analysis
                                        </span>
                                    </div>
                                    <!-- <ABSTAnalysisFromTo :prop="PTAnalysis" v-model="M_GL_AccountInquiryTAnalysis" /> -->
                                    <b-row>
                                        <b-col offset="5">
                                            <b-button style="font-size: 10px;padding-top: 3px;padding-bottom: 3px;" @click="doGenerate"><font-awesome-icon icon="list" class="icon-style-1"/> Generate Inquiry</b-button>
                                        </b-col>
                                    </b-row>
                                </b-col>
                            </b-row>
                            
						</b-form>
					</b-col>
                </b-row>
            </b-collapse>
        </div>
        <ABSListVuex
            :prop = "propList"
            :title = "'Account Inquiry'"
            :isProcess = "false"
            @rowClicked = "rowClicked"
            @rowDblClicked = "doDoubleClick"
            @rowLinkClick = "rowLink"
            @pageSize = "M_PageSize"
            @pagination = "M_Pagination"
            @filter = "M_Advance_Filter"
        />
    </div>
        
    </div>
</template>

<script>
import MyModal from'./TN_viewModal.vue'
export default {
    props: {PageLevel: '', TabIndex: '', data: ''},
    data() {
        return {
        
		cInsertKey:'',
		FormType: "Process",
		Module:"TN",
            propList: {
                initialWhere: "SubPortfolioCd='"+this.getDataUser().SubPortfolioCd+"'",
                LineNo: 1,
                PageLevel: 1,
                TabIndex: 1, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: "'A'"
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_GL_AccountInquiryTAnalysis: [],
            M_TN_LotAvailabilityInquiry :{
                fromcutoffdate: this.getToday(),
                tocutoffdate: this.getToday(),
                status: 'A',
                fromlottype: '',
                tolottype: '',
                fromlot: '',
                tolot: '',
                fromblock: '',
                toblock: '',
                fromfloor: '',
                tofloor: '',
                fromtheme: '',
                totheme: '',
                fromclass: '',
                toclass: '',
                fromcategory: '',
                tocategory: '',
                fromdirection: '',
                todirection: '',
                fromsector: '',
                tosector: '',
                fromview: '',
                toview: '',
                fromgross: '',
                togross: '',
                fromsemigross: '',
                tosemigross: '',
                fromnet: '',
                tonet: '',
                fromroom: '',
                toroom: '',
                furnish: 'A'
                    }
            ,
            PI_fromcutoffdate: { 
                cValidate :'required', 
                cName: 'fromcutoffdate', 
                cLabel: 'From Date ', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1 
            }, 
            PI_tocutoffdate: { 
                cValidate :'', 
                cName: 'tocutoffdate', 
                cLabel: 'To ', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1 
            }, 
            PI_status: { 
                cValidate :'', 
                cName: 'status', 
                cId: 'rdbstatus', 
                cRadioOptions: [{ text: 'Available', value: 'A' },{ text: 'Waiting List', value: 'W' },{ text: 'Booked', value: 'B' },{ text: 'Assigned', value: 'T' },{ text: 'Rented', value: 'R' },{ text: 'Cancel', value: 'C' },{ text: 'Terminate', value: 'X' },{ text: 'Non Active', value:'N'},{ text: 'All', value:'Y'}], 
                cRadioDefaultOption: '', 
                cLabel:'Status', 
                cLabelSize: 2, 
                cOrder: 2, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1 
            }, 
            PI_fromlottype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNLotType'    , 
                    ColumnDB: 'LotType'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'fromlottype', 
                cLabel: 'Lot Type', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 0, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: '' ,
                cDisplayColumn: 'LotType,Descs' ,
            }, 
            PI_tolottype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNLotType'    , 
                    ColumnDB: 'LotType'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'tolottype', 
                cLabel: 'To', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 0, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: '' ,
                cDisplayColumn: 'LotType,Descs' ,
            }, 
            PI_fromlot: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNLot'    , 
                    ColumnDB: 'LotNo'   , 
                    InitialWhere: "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'fromlot', 
                cLabel: 'Lot No', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 0, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: '' ,
                cDisplayColumn: 'LotNo,LotType' ,
            }, 
            PI_tolot: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNLot'    , 
                    ColumnDB: 'LotNo'   , 
                    InitialWhere: "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'tolot', 
                cLabel: 'To', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 0, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: '' ,
                cDisplayColumn: 'LotNo,LotType' ,
            }, 
            PI_fromblock: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNBlock'    , 
                    ColumnDB: 'BlockCd'   , 
                    InitialWhere: "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'fromblock', 
                cLabel: 'Block', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 0, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: '' ,
                cDisplayColumn: 'BlockCd,Descs' ,
            }, 
            PI_toblock: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNBlock'    , 
                    ColumnDB: 'BlockCd'   , 
                    InitialWhere: "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'toblock', 
                cLabel: 'To', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 0, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: '' ,
                cDisplayColumn: 'BlockCd,Descs' ,
            }, 
            PI_fromfloor: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNFloor'    , 
                    ColumnDB: 'FloorCd'   , 
                    InitialWhere: "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'fromfloor', 
                cLabel: 'Floor', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 0, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: '' ,
                cDisplayColumn: 'FloorCd,Descs' ,
            }, 
            PI_tofloor: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNFloor'    , 
                    ColumnDB: 'FloorCd'   , 
                    InitialWhere: "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'tofloor', 
                cLabel: 'To', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 0, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: '' ,
                cDisplayColumn: 'FloorCd,Descs' ,
            }, 
            PI_fromtheme: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNLotTheme'    , 
                    ColumnDB: 'LotThemeCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'fromtheme', 
                cLabel: 'Theme', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 0, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: '' ,
                cDisplayColumn: 'LotThemeCd,Descs' ,
            }, 
            PI_totheme: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNLotTheme'    , 
                    ColumnDB: 'LotThemeCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'totheme', 
                cLabel: 'To', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 0, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: '' ,
                cDisplayColumn: 'LotThemeCd,Descs' ,
            }, 
            PI_fromclass: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNLotClass'    , 
                    ColumnDB: 'LotClassCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'fromclass', 
                cLabel: 'Class', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 0, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: '' ,
                cDisplayColumn: 'LotClassCd,Descs' ,
            }, 
            PI_toclass: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNLotClass'    , 
                    ColumnDB: 'LotClassCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'toclass', 
                cLabel: 'To', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 0, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: '' ,
                cDisplayColumn: 'LotClassCd,Descs' ,
            }, 
            PI_fromcategory: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNLotCategory'    , 
                    ColumnDB: 'LotCategoryCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'fromcategory', 
                cLabel: 'Category', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 0, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: '' ,
                cDisplayColumn: 'LotCategoryCd,Descs' ,
            }, 
            PI_tocategory: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNLotCategory'    , 
                    ColumnDB: 'LotCategoryCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'tocategory', 
                cLabel: 'To', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 0, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: '' ,
                cDisplayColumn: 'LotCategoryCd,Descs' ,
            }, 
            PI_fromdirection: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNDirection'    , 
                    ColumnDB: 'DirectionCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'fromdirection', 
                cLabel: 'Direction', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 0, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: '' ,
                cDisplayColumn: 'DirectionCd,Descs' ,
            }, 
            PI_todirection: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNDirection'    , 
                    ColumnDB: 'DirectionCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'todirection', 
                cLabel: 'To', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 0, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: '' ,
                cDisplayColumn: 'DirectionCd,Descs' ,
            }, 
            PI_fromsector: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNSector'    , 
                    ColumnDB: 'SectorCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'fromsector', 
                cLabel: 'Sector', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 0, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: '' ,
                cDisplayColumn: 'SectorCd,Descs' ,
            }, 
            PI_tosector: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNSector'    , 
                    ColumnDB: 'SectorCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'tosector', 
                cLabel: 'To', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 0, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: '' ,
                cDisplayColumn: 'SectorCd,Descs' ,
            }, 
            PI_fromview: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNView'    , 
                    ColumnDB: 'ViewCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'fromview', 
                cLabel: 'View', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 0, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: '' ,
                cDisplayColumn: 'ViewCd,Descs' ,
            }, 
            PI_toview: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNView'    , 
                    ColumnDB: 'ViewCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'toview', 
                cLabel: 'To', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 0, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: '' ,
                cDisplayColumn: 'ViewCd,Descs' ,
            }, 
            PI_fromgross: { 
                cValidate :'', 
                cName: 'fromgross', 
                cLabel: 'Gross Area', 
                cLabelSize: 4, 
                cOrder: 23, 
                cKey: false, 
                cType: 'decimal',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1 
            }, 
            PI_togross: { 
                cValidate :'', 
                cName: 'togross', 
                cLabel: 'To', 
                cLabelSize: 4, 
                cOrder: 24, 
                cKey: false, 
                cType: 'decimal',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1 
            }, 
            PI_fromsemigross: { 
                cValidate :'', 
                cName: 'fromsemigross', 
                cLabel: 'Semi Gross Area', 
                cLabelSize: 4, 
                cOrder: 25, 
                cKey: false, 
                cType: 'decimal',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1 
            }, 
            PI_tosemigross: { 
                cValidate :'', 
                cName: 'tosemigross', 
                cLabel: 'To', 
                cLabelSize: 4, 
                cOrder: 26, 
                cKey: false, 
                cType: 'decimal',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1 
            }, 
            PI_fromnet: { 
                cValidate :'', 
                cName: 'fromnet', 
                cLabel: 'Net Area', 
                cLabelSize: 4, 
                cOrder: 27, 
                cKey: false, 
                cType: 'decimal',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1 
            }, 
            PI_tonet: { 
                cValidate :'', 
                cName: 'tonet', 
                cLabel: 'To', 
                cLabelSize: 4, 
                cOrder: 28, 
                cKey: false, 
                cType: 'decimal',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1 
            }, 
            PI_fromroom: { 
                cValidate :'', 
                cName: 'fromroom', 
                cLabel: 'Total Room', 
                cLabelSize: 4, 
                cOrder: 29, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1 
            }, 
            PI_toroom: { 
                cValidate :'', 
                cName: 'toroom', 
                cLabel: 'To', 
                cLabelSize: 4, 
                cOrder: 30, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1 
            }, 
            PI_furnish: { 
                cValidate :'', 
                cName: 'furnish', 
                cId: 'rdbfurnish', 
                cRadioOptions: [{ text: 'Unfurnish', value: 'U' },{ text: 'Semi Furnish', value: 'S' },{ text: 'Full Furnish', value: 'F' },{ text: 'All', value: 'A' },], 
                cRadioDefaultOption: '', 
                cLabel:'Furnish', 
                cLabelSize: 4, 
                cOrder: 29, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1 
            }, 

			PTAnalysis: {
                cPageLevel: 1,
                cTabIndex: 1,
                // cPageMasterSeq: 427,
                // cFormPageNo: 0,
                cAnalysisType: 'Analysis Category'
            }
        }
    },
	computed : {
    inputStatus() {
      if(this.$store.getters.getLevel == 1 && this.$store.getters.getTab == 1){
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
        OnfromgrossChange(data){
            if (!data && data == '') return
            this.M_TN_LotAvailabilityInquiry.togross = this.isCurrency(data, this.decimal)
        },
        OnfromsemigrossChange(data){
            if (!data && data == '') return
            this.M_TN_LotAvailabilityInquiry.tosemigross = this.isCurrency(data, this.decimal)
        },
        OnfromnetChange(data){
            if (!data && data == '') return
            this.M_TN_LotAvailabilityInquiry.tonet = this.isCurrency(data, this.decimal)
        },
        OnfromroomChange(data){
            if (!data && data == '') return
            this.M_TN_LotAvailabilityInquiry.toroom = data
        },
        OnfromcutoffdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{fromcutoffdate}
            }
        })
        this.$forceUpdate()
        },
        OntocutoffdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{tocutoffdate}
            }
        })
        this.$forceUpdate()
        },
        OnstatusChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{status}
            }
        })
        this.$forceUpdate()
        },
        OnfromlottypeChange (data) {
        this.$nextTick(() => {
            this.M_TN_LotAvailabilityInquiry.fromlottype = data.id
            this.M_TN_LotAvailabilityInquiry.fromlottypeLabel = data.label

            // this.M_TN_LotAvailabilityInquiry.tolottype = data.id
            // this.M_TN_LotAvailabilityInquiry.tolottypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{fromlottype}
            }
        })
        this.$forceUpdate()
        },
        OntolottypeChange (data) {
        this.$nextTick(() => {
            this.M_TN_LotAvailabilityInquiry.tolottype = data.id
            this.M_TN_LotAvailabilityInquiry.tolottypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{tolottype}
            }
        })
        this.$forceUpdate()
        },
        OnfromlotChange (data) {
        this.$nextTick(() => {
            this.M_TN_LotAvailabilityInquiry.fromlot = data.id
            this.M_TN_LotAvailabilityInquiry.fromlotLabel = data.label

            // this.M_TN_LotAvailabilityInquiry.tolot = data.id
            // this.M_TN_LotAvailabilityInquiry.tolotLabel = data.label
            if (this.inputStatus != "VIEW") {
//{fromlot}
            }
        })
        this.$forceUpdate()
        },
        OntolotChange (data) {
        this.$nextTick(() => {
            this.M_TN_LotAvailabilityInquiry.tolot = data.id
            this.M_TN_LotAvailabilityInquiry.tolotLabel = data.label
            if (this.inputStatus != "VIEW") {
//{tolot}
            }
        })
        this.$forceUpdate()
        },
        OnfromblockChange (data) {
        this.$nextTick(() => {
            this.M_TN_LotAvailabilityInquiry.fromblock = data.id
            this.M_TN_LotAvailabilityInquiry.fromblockLabel = data.label
            if (this.inputStatus != "VIEW") {
//{fromblock}
            }
        })
        this.$forceUpdate()
        },
        OntoblockChange (data) {
        this.$nextTick(() => {
            this.M_TN_LotAvailabilityInquiry.toblock = data.id
            this.M_TN_LotAvailabilityInquiry.toblockLabel = data.label
            if (this.inputStatus != "VIEW") {
//{toblock}
            }
        })
        this.$forceUpdate()
        },
        OnfromfloorChange (data) {
        this.$nextTick(() => {
            this.M_TN_LotAvailabilityInquiry.fromfloor = data.id
            this.M_TN_LotAvailabilityInquiry.fromfloorLabel = data.label

            // this.M_TN_LotAvailabilityInquiry.tofloor = data.id
            // this.M_TN_LotAvailabilityInquiry.tofloorLabel = data.label
            if (this.inputStatus != "VIEW") {
//{fromfloor}
            }
        })
        this.$forceUpdate()
        },
        OntofloorChange (data) {
        this.$nextTick(() => {
            this.M_TN_LotAvailabilityInquiry.tofloor = data.id
            this.M_TN_LotAvailabilityInquiry.tofloorLabel = data.label
            if (this.inputStatus != "VIEW") {
//{tofloor}
            }
        })
        this.$forceUpdate()
        },
        OnfromthemeChange (data) {
        this.$nextTick(() => {
            this.M_TN_LotAvailabilityInquiry.fromtheme = data.id
            this.M_TN_LotAvailabilityInquiry.fromthemeLabel = data.label

            // this.M_TN_LotAvailabilityInquiry.totheme = data.id
            // this.M_TN_LotAvailabilityInquiry.tothemeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{fromtheme}
            }
        })
        this.$forceUpdate()
        },
        OntothemeChange (data) {
        this.$nextTick(() => {
            this.M_TN_LotAvailabilityInquiry.totheme = data.id
            this.M_TN_LotAvailabilityInquiry.tothemeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{totheme}
            }
        })
        this.$forceUpdate()
        },
        OnfromclassChange (data) {
        this.$nextTick(() => {
            this.M_TN_LotAvailabilityInquiry.fromclass = data.id
            this.M_TN_LotAvailabilityInquiry.fromclassLabel = data.label

            // this.M_TN_LotAvailabilityInquiry.toclass = data.id
            // this.M_TN_LotAvailabilityInquiry.toclassLabel = data.label
            if (this.inputStatus != "VIEW") {
//{fromclass}
            }
        })
        this.$forceUpdate()
        },
        OntoclassChange (data) {
        this.$nextTick(() => {
            this.M_TN_LotAvailabilityInquiry.toclass = data.id
            this.M_TN_LotAvailabilityInquiry.toclassLabel = data.label
            if (this.inputStatus != "VIEW") {
//{toclass}
            }
        })
        this.$forceUpdate()
        },
        OnfromcategoryChange (data) {
        this.$nextTick(() => {
            this.M_TN_LotAvailabilityInquiry.fromcategory = data.id
            this.M_TN_LotAvailabilityInquiry.fromcategoryLabel = data.label

            // this.M_TN_LotAvailabilityInquiry.tocategory = data.id
            // this.M_TN_LotAvailabilityInquiry.tocategoryLabel = data.label
            if (this.inputStatus != "VIEW") {
//{fromcategory}
            }
        })
        this.$forceUpdate()
        },
        OntocategoryChange (data) {
        this.$nextTick(() => {
            this.M_TN_LotAvailabilityInquiry.tocategory = data.id
            this.M_TN_LotAvailabilityInquiry.tocategoryLabel = data.label
            if (this.inputStatus != "VIEW") {
//{tocategory}
            }
        })
        this.$forceUpdate()
        },
        OnfromdirectionChange (data) {
        this.$nextTick(() => {
            this.M_TN_LotAvailabilityInquiry.fromdirection = data.id
            this.M_TN_LotAvailabilityInquiry.fromdirectionLabel = data.label

            // this.M_TN_LotAvailabilityInquiry.todirection = data.id
            // this.M_TN_LotAvailabilityInquiry.todirectionLabel = data.label
            if (this.inputStatus != "VIEW") {
//{fromdirection}
            }
        })
        this.$forceUpdate()
        },
        OntodirectionChange (data) {
        this.$nextTick(() => {
            this.M_TN_LotAvailabilityInquiry.todirection = data.id
            this.M_TN_LotAvailabilityInquiry.todirectionLabel = data.label
            if (this.inputStatus != "VIEW") {
//{todirection}
            }
        })
        this.$forceUpdate()
        },
        OnfromsectorChange (data) {
        this.$nextTick(() => {
            this.M_TN_LotAvailabilityInquiry.fromsector = data.id
            this.M_TN_LotAvailabilityInquiry.fromsectorLabel = data.label
            
            // this.M_TN_LotAvailabilityInquiry.tosector = data.id
            // this.M_TN_LotAvailabilityInquiry.tosectorLabel = data.label
            if (this.inputStatus != "VIEW") {
//{fromsector}
            }
        })
        this.$forceUpdate()
        },
        OntosectorChange (data) {
        this.$nextTick(() => {
            this.M_TN_LotAvailabilityInquiry.tosector = data.id
            this.M_TN_LotAvailabilityInquiry.tosectorLabel = data.label
            if (this.inputStatus != "VIEW") {
//{tosector}
            }
        })
        this.$forceUpdate()
        },
        OnfromviewChange (data) {
        this.$nextTick(() => {
            this.M_TN_LotAvailabilityInquiry.fromview = data.id
            this.M_TN_LotAvailabilityInquiry.fromviewLabel = data.label

            // this.M_TN_LotAvailabilityInquiry.toview = data.id
            // this.M_TN_LotAvailabilityInquiry.toviewLabel = data.label
            if (this.inputStatus != "VIEW") {
//{fromview}
            }
        })
        this.$forceUpdate()
        },
        OntoviewChange (data) {
        this.$nextTick(() => {
            this.M_TN_LotAvailabilityInquiry.toview = data.id
            this.M_TN_LotAvailabilityInquiry.toviewLabel = data.label
            if (this.inputStatus != "VIEW") {
//{toview}
            }
        })
        this.$forceUpdate()
        },
        OnfurnishChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{furnish}
            }
        })
        this.$forceUpdate()
        },
        doGenerate(){
            console.log(this.M_GL_AccountInquiryTAnalysis)
            
            this.propList.ParamView = "'"+this.M_TN_LotAvailabilityInquiry.status + "'"

            this.propList.initialWhere = " SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "'"

            if((this.M_TN_LotAvailabilityInquiry.fromblock && this.M_TN_LotAvailabilityInquiry.fromblock != '') && (this.M_TN_LotAvailabilityInquiry.toblock && this.M_TN_LotAvailabilityInquiry.toblock != '') ){
                this.propList.initialWhere += " AND BlockCd BETWEEN '" + this.M_TN_LotAvailabilityInquiry.fromblock + "' AND '" +  this.M_TN_LotAvailabilityInquiry.toblock + "'"
            }

            if((this.M_TN_LotAvailabilityInquiry.fromfloor && this.M_TN_LotAvailabilityInquiry.fromfloor != '') && (this.M_TN_LotAvailabilityInquiry.tofloor && this.M_TN_LotAvailabilityInquiry.tofloor != '')){            
                this.propList.initialWhere += " AND FloorCd BETWEEN '" + this.M_TN_LotAvailabilityInquiry.fromfloor + "' AND '" +  this.M_TN_LotAvailabilityInquiry.tofloor + "'"
            }

            if((this.M_TN_LotAvailabilityInquiry.fromtheme && this.M_TN_LotAvailabilityInquiry.fromtheme != '') && (this.M_TN_LotAvailabilityInquiry.totheme && this.M_TN_LotAvailabilityInquiry.totheme != '')){            
                this.propList.initialWhere += " AND LotThemeCd BETWEEN '" + this.M_TN_LotAvailabilityInquiry.fromtheme + "' AND '" +  this.M_TN_LotAvailabilityInquiry.totheme + "'"
            }

            if((this.M_TN_LotAvailabilityInquiry.fromclass && this.M_TN_LotAvailabilityInquiry.fromclass != '') && (this.M_TN_LotAvailabilityInquiry.toclass && this.M_TN_LotAvailabilityInquiry.toclass != '')){            
                this.propList.initialWhere += " AND LotClassCd BETWEEN '" + this.M_TN_LotAvailabilityInquiry.fromclass + "' AND '" +  this.M_TN_LotAvailabilityInquiry.toclass + "'"
            }

            if((this.M_TN_LotAvailabilityInquiry.fromcategory && this.M_TN_LotAvailabilityInquiry.fromcategory != '') && (this.M_TN_LotAvailabilityInquiry.tocategory && this.M_TN_LotAvailabilityInquiry.tocategory != '')){            
                this.propList.initialWhere += " AND LotCategoryCd BETWEEN '" + this.M_TN_LotAvailabilityInquiry.fromcategory + "' AND '" +  this.M_TN_LotAvailabilityInquiry.tocategory + "'"
            }

            if((this.M_TN_LotAvailabilityInquiry.fromdirection && this.M_TN_LotAvailabilityInquiry.fromdirection != '') && (this.M_TN_LotAvailabilityInquiry.todirection && this.M_TN_LotAvailabilityInquiry.todirection != '')){            
                this.propList.initialWhere += " AND DirectionCd BETWEEN '" + this.M_TN_LotAvailabilityInquiry.fromcategory + "' AND '" +  this.M_TN_LotAvailabilityInquiry.tocategory + "'"
            }

            if((this.M_TN_LotAvailabilityInquiry.fromsector && this.M_TN_LotAvailabilityInquiry.fromsector != '') && (this.M_TN_LotAvailabilityInquiry.tosector && this.M_TN_LotAvailabilityInquiry.tosector != '')){            
                this.propList.initialWhere += " AND SectorCd BETWEEN '" + this.M_TN_LotAvailabilityInquiry.fromsector + "' AND '" +  this.M_TN_LotAvailabilityInquiry.tosector + "'"
            }

            if((this.M_TN_LotAvailabilityInquiry.fromview && this.M_TN_LotAvailabilityInquiry.fromview != '') && (this.M_TN_LotAvailabilityInquiry.toview && this.M_TN_LotAvailabilityInquiry.toview != '')){            
                this.propList.initialWhere += " AND ViewCd BETWEEN '" + this.M_TN_LotAvailabilityInquiry.fromview + "' AND '" +  this.M_TN_LotAvailabilityInquiry.toview + "'"
            }

            if((this.M_TN_LotAvailabilityInquiry.fromgross && this.M_TN_LotAvailabilityInquiry.fromgross != '') && (this.M_TN_LotAvailabilityInquiry.togross && this.M_TN_LotAvailabilityInquiry.togross != '')){            
                this.propList.initialWhere += " AND GrossArea BETWEEN '" + this.M_TN_LotAvailabilityInquiry.fromgross + "' AND '" +  this.M_TN_LotAvailabilityInquiry.togross + "'"
            }

            if((this.M_TN_LotAvailabilityInquiry.fromsemigross && this.M_TN_LotAvailabilityInquiry.fromsemigross != '') && (this.M_TN_LotAvailabilityInquiry.tosemigross && this.M_TN_LotAvailabilityInquiry.tosemigross != '')){            
                this.propList.initialWhere += " AND SemiGrossArea BETWEEN '" + this.M_TN_LotAvailabilityInquiry.fromsemigross + "' AND '" +  this.M_TN_LotAvailabilityInquiry.tosemigross + "'"
            }

            if((this.M_TN_LotAvailabilityInquiry.fromnet && this.M_TN_LotAvailabilityInquiry.fromnet != '') && (this.M_TN_LotAvailabilityInquiry.tonet && this.M_TN_LotAvailabilityInquiry.tonet != '')){            
                this.propList.initialWhere += " AND NetArea BETWEEN '" + this.M_TN_LotAvailabilityInquiry.fromnet + "' AND '" +  this.M_TN_LotAvailabilityInquiry.tonet + "'"
            }

            if((this.M_TN_LotAvailabilityInquiry.fromroom && this.M_TN_LotAvailabilityInquiry.fromroom != '') && (this.M_TN_LotAvailabilityInquiry.toroom && this.M_TN_LotAvailabilityInquiry.toroom != '')){            
                this.propList.initialWhere += " AND TotalRoom BETWEEN '" + this.M_TN_LotAvailabilityInquiry.fromroom + "' AND '" +  this.M_TN_LotAvailabilityInquiry.toroom + "'"
            }

            if((this.M_TN_LotAvailabilityInquiry.fromlottype && this.M_TN_LotAvailabilityInquiry.fromlottype != '') && (this.M_TN_LotAvailabilityInquiry.tolottype && this.M_TN_LotAvailabilityInquiry.tolottype != '') ){
                this.propList.initialWhere += " AND LotType BETWEEN '" + this.M_TN_LotAvailabilityInquiry.fromlottype + "' AND '" +  this.M_TN_LotAvailabilityInquiry.tolottype + "'"
            }

            if((this.M_TN_LotAvailabilityInquiry.fromlot && this.M_TN_LotAvailabilityInquiry.fromlot != '') && (this.M_TN_LotAvailabilityInquiry.tolot && this.M_TN_LotAvailabilityInquiry.tolot != '') ){
                this.propList.initialWhere += " AND LotNo BETWEEN '" + this.M_TN_LotAvailabilityInquiry.fromlot + "' AND '" +  this.M_TN_LotAvailabilityInquiry.tolot + "'"
            }

            if( this.M_TN_LotAvailabilityInquiry.furnish && this.M_TN_LotAvailabilityInquiry.furnish != '' && this.M_TN_LotAvailabilityInquiry.furnish != 'A' ){
                this.propList.initialWhere += " AND Furnished = '" + this.M_TN_LotAvailabilityInquiry.furnish + "'"
            }

            if( this.M_TN_LotAvailabilityInquiry.status && this.M_TN_LotAvailabilityInquiry.status != '' && this.M_TN_LotAvailabilityInquiry.status != 'A' ){
                this.propList.initialWhere += " AND Status = '" + this.M_TN_LotAvailabilityInquiry.status + "'"
            }

            if ( 
                (this.M_TN_LotAvailabilityInquiry.fromcutoffdate && this.M_TN_LotAvailabilityInquiry.fromcutoffdate != '') &&
                (this.M_TN_LotAvailabilityInquiry.status != 'A' && this.M_TN_LotAvailabilityInquiry.status != 'N' && this.M_TN_LotAvailabilityInquiry.status != 'Y')
            ) {
                this.propList.initialWhere += " AND ( ('" + this.M_TN_LotAvailabilityInquiry.fromcutoffdate + "' BETWEEN FromDate AND ToDate) OR ('" + this.M_TN_LotAvailabilityInquiry.tocutoffdate + "' BETWEEN FromDate AND ToDate) OR (('" + this.M_TN_LotAvailabilityInquiry.fromcutoffdate + "' < FromDate) and ('" + this.M_TN_LotAvailabilityInquiry.tocutoffdate + "' > ToDate))) "
            }

            if ( 
                (this.M_TN_LotAvailabilityInquiry.fromcutoffdate && this.M_TN_LotAvailabilityInquiry.fromcutoffdate != '') &&
                (this.M_TN_LotAvailabilityInquiry.status == 'A')
            ) {
                this.propList.initialWhere += " AND LotNo Not In (Select LotNo From VW_TN_Lot_UnAvailable Where (TerminatedDate IS NULL OR '" + this.M_TN_LotAvailabilityInquiry.tocutoffdate + "' < TerminatedDate) AND ( ('" + this.M_TN_LotAvailabilityInquiry.fromcutoffdate + "' BETWEEN FromDate AND ToDate) OR ('" + this.M_TN_LotAvailabilityInquiry.tocutoffdate + "' BETWEEN FromDate AND ToDate) OR (('" + this.M_TN_LotAvailabilityInquiry.fromcutoffdate + "' < FromDate) and ('" + this.M_TN_LotAvailabilityInquiry.tocutoffdate + "' > ToDate)))) AND Status='A' "
            }

            this.toList().doGetList('','eb_getList')
        },
        toList() {
            return this.$children[2]
        },		
        OnaccountcodeChange (data) {
        this.$nextTick(() => {
            this.M_TN_LotAvailabilityInquiry.accountcode = data.id
            this.M_TN_LotAvailabilityInquiry.accountcodeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{accountcode}
            }
        })
        this.$forceUpdate()
        },
        OnfromjournalsourceChange (data) {
        this.$nextTick(() => {
            this.M_TN_LotAvailabilityInquiry.fromjournalsource = data.id
            this.M_TN_LotAvailabilityInquiry.fromjournalsourceLabel = data.label
            if (this.inputStatus != "VIEW") {
//{fromjournalsource}
            }
        })
        this.$forceUpdate()
        },
        OntojournalsourceChange (data) {
        this.$nextTick(() => {
            this.M_TN_LotAvailabilityInquiry.tojournalsource = data.id
            this.M_TN_LotAvailabilityInquiry.tojournalsourceLabel = data.label
            if (this.inputStatus != "VIEW") {
//{tojournalsource}
            }
        })
        this.$forceUpdate()
        },
        OnfromtransactiontypeChange (data) {
        this.$nextTick(() => {
            this.M_TN_LotAvailabilityInquiry.fromtransactiontype = data.id
            this.M_TN_LotAvailabilityInquiry.fromtransactiontypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{fromtransactiontype}
            }
        })
        this.$forceUpdate()
        },
        OntotransactiontypeChange (data) {
        this.$nextTick(() => {
            this.M_TN_LotAvailabilityInquiry.totransactiontype = data.id
            this.M_TN_LotAvailabilityInquiry.totransactiontypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{totransactiontype}
            }
        })
        this.$forceUpdate()
        },
        OnfromcurrencycodeChange (data) {
        this.$nextTick(() => {
            this.M_TN_LotAvailabilityInquiry.fromcurrencycode = data.id
            this.M_TN_LotAvailabilityInquiry.fromcurrencycodeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{fromcurrencycode}
            }
        })
        this.$forceUpdate()
        },
        OntocurrencycodeChange (data) {
        this.$nextTick(() => {
            this.M_TN_LotAvailabilityInquiry.tocurrencycode = data.id
            this.M_TN_LotAvailabilityInquiry.tocurrencycodeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{tocurrencycode}
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
            record.ledgersource = this.M_TN_LotAvailabilityInquiry.ledgersource
            // console.log('Rowclick modal',record)

            this.getModal(record)
            // this.M_TN_LotAvailabilityInquiry.ledgersource = this.M_TN_LotAvailabilityInquiry.ledgersource
            // this.M_TN_LotAvailabilityInquiry.ledgersource = record.LineNo


        },
        rowLink: function(url){
            this.$refs.modalTest.show()
        },		
		paramFromParent(){
        },		
        M_Post(){
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
                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_TN_LotAvailabilityInquiry = {
                fromcutoffdate: this.getToday(),
                tocutoffdate: this.getToday(),
                status: 'A',
                fromlottype: '',
                tolottype: '',
                fromlot: '',
                tolot: '',
                fromblock: '',
                toblock: '',
                fromfloor: '',
                tofloor: '',
                fromtheme: '',
                totheme: '',
                fromclass: '',
                toclass: '',
                fromcategory: '',
                tocategory: '',
                fromdirection: '',
                todirection: '',
                fromsector: '',
                tosector: '',
                fromview: '',
                toview: '',
                fromgross: '',
                togross: '',
                fromsemigross: '',
                tosemigross: '',
                fromnet: '',
                tonet: '',
                fromroom: '',
                toroom: '',
                furnish: 'A'
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
				//,SourceValue:''
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
                LineNo: this.$parent.data.PageOrder

            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
                this.M_TN_LotAvailabilityInquiry = {
                ledgersource: data.ledgersource,
                accountcode: data.accountcode,
                fromjournalsource: data.fromjournalsource,
                tojournalsource: data.tojournalsource,
                fromtransactiontype: data.fromtransactiontype,
                totransactiontype: data.totransactiontype,
                periodfrom: data.periodfrom,
                yearfrom: data.yearfrom,
                periodto: data.periodto,
                yearto: data.yearto,
                fromcurrencycode: data.fromcurrencycode,
                tocurrencycode: data.tocurrencycode,
                totaldebit: data.totaldebit,
                totalcredit: data.totalcredit,
                totalamount: data.totalamount
                    }
                 

                this.M_TN_LotAvailabilityInquiry.accountcodeLabel = this.M_TN_LotAvailabilityInquiry.accountcode != null ? data.accountcode + this.separator + data.accountdescs :'' 
                this.M_TN_LotAvailabilityInquiry.fromjournalsourceLabel = this.M_TN_LotAvailabilityInquiry.fromjournalsource != null ? data.fromjournalsource + this.separator  :'' 
                this.M_TN_LotAvailabilityInquiry.tojournalsourceLabel = this.M_TN_LotAvailabilityInquiry.tojournalsource != null ? data.tojournalsource + this.separator  :'' 
                this.M_TN_LotAvailabilityInquiry.fromtransactiontypeLabel = this.M_TN_LotAvailabilityInquiry.fromtransactiontype != null ? data.fromtransactiontype + this.separator  :'' 
                this.M_TN_LotAvailabilityInquiry.totransactiontypeLabel = this.M_TN_LotAvailabilityInquiry.totransactiontype != null ? data.totransactiontype + this.separator  :'' 
                this.M_TN_LotAvailabilityInquiry.fromcurrencycodeLabel = this.M_TN_LotAvailabilityInquiry.fromcurrencycode != null ? data.fromcurrencycode + this.separator  :'' 
                this.M_TN_LotAvailabilityInquiry.tocurrencycodeLabel = this.M_TN_LotAvailabilityInquiry.tocurrencycode != null ? data.tocurrencycode + this.separator  :'' 
         

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        },
        getModal(data){
            var dataPost = {
                LotNo: data.LotNo,
                FromDate: this.M_TN_LotAvailabilityInquiry.fromcutoffdate,
                ToDate: this.M_TN_LotAvailabilityInquiry.tocutoffdate,
                Status: data.STATUS
            }
            this.$modal.show(MyModal, 
                { //Props passing data
                    dataModal:dataPost
                },
                {//Property
                    height: '90%',
                    width : '80%',
                    minWidth: "300",
                    minHeight: "300",
                    draggable: true,
                    resizable: true,
                    reset: true
                },
                {// event listener
                    'before-open': (event) => { console.log('this will be called before the modal before Oepn',event); },
                    'before-close': (event) => { console.log('this will be called before the modal before closes',event); },
                    'opened': (event) => { console.log('this will be called before the modal opended',event); },
                    'closed': (event) => { console.log('this will be called before the modal closed',event); },
                }
            )
            
        }

    },
    beforeCreate: function () {
    },
    created: function() {
        this.$store.commit('setFormType','View')
        this.$store.commit('setStatus', 'new')
    },
    beforeMount: function() {
    },
    mounted: function() {
        this.hideSideBarMenu()
        this.$store.commit('setLevel', 1)
        this.$store.commit('setTab', 1)
        this.$store.commit('setListDisable', false)
        
        this.propList.initialWhere += " AND LotNo Not In (Select LotNo From VW_TN_Lot_UnAvailable Where (TerminatedDate IS NULL OR '" + this.getToday() + "' < TerminatedDate) AND ( ('" + this.getToday() + "' BETWEEN FromDate AND ToDate) OR ('" + this.getToday() + "' BETWEEN FromDate AND ToDate) OR (('" + this.getToday() + "' < FromDate) and ('" + this.getToday() + "' > ToDate)))) AND Status='A' "
        this.toList().doGetList('','eb_getList')

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

<style scoped>
    table {
    border-collapse: collapse;
    }

    table, td, th {
    border: 1px solid black;
    }
      .size-modal-content {
            padding: 10px;
            font-style: 13px;
        }
        .v--modal-overlay[data-modal="size-modal"] {
            background: rgba(0, 0, 0, 0.5);
        }
        .demo-modal-class {
            border-radius: 5px;
            background: #F7F7F7;
            box-shadow: 5px 5px 30px 0px rgba(46,61,73, 0.6);
        }
</style>

