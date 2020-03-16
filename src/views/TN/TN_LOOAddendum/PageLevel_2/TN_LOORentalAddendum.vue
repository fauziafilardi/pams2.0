<template>
    <div>        


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
                                        <ABSCompute :prop="PI_xxx94334" v-model="M_TN_LOORentalAddendum.xxx94334"  ref="ref_xxx94334" />
                                      </b-col>
                                    </b-row>
                                <b-col md="12" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94341" v-model="M_TN_LOORentalAddendum.xxx94341"  ref="ref_xxx94341"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_xxx94342" v-model="M_TN_LOORentalAddendum.xxx94342"  ref="ref_xxx94342" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94343" v-model="M_TN_LOORentalAddendum.xxx94343"  ref="ref_xxx94343"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_xxx94344" v-model="M_TN_LOORentalAddendum.xxx94344"  ref="ref_xxx94344" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94345" v-model="M_TN_LOORentalAddendum.xxx94345"  ref="ref_xxx94345"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94346" v-model="M_TN_LOORentalAddendum.xxx94346"  ref="ref_xxx94346"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94352" v-model="M_TN_LOORentalAddendum.xxx94352"  ref="ref_xxx94352"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_xxx94353" v-model="M_TN_LOORentalAddendum.xxx94353"  ref="ref_xxx94353" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94354" v-model="M_TN_LOORentalAddendum.xxx94354"  ref="ref_xxx94354"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_xxx94355" v-model="M_TN_LOORentalAddendum.xxx94355"  ref="ref_xxx94355" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94356" v-model="M_TN_LOORentalAddendum.xxx94356"  ref="ref_xxx94356"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94357" v-model="M_TN_LOORentalAddendum.xxx94357"  ref="ref_xxx94357"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94363" v-model="M_TN_LOORentalAddendum.xxx94363"  ref="ref_xxx94363"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_xxx94364" v-model="M_TN_LOORentalAddendum.xxx94364"  ref="ref_xxx94364" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94365" v-model="M_TN_LOORentalAddendum.xxx94365"  ref="ref_xxx94365"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_xxx94366" v-model="M_TN_LOORentalAddendum.xxx94366"  ref="ref_xxx94366" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94367" v-model="M_TN_LOORentalAddendum.xxx94367"  ref="ref_xxx94367"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94368" v-model="M_TN_LOORentalAddendum.xxx94368"  ref="ref_xxx94368"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94374" v-model="M_TN_LOORentalAddendum.xxx94374"  ref="ref_xxx94374"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_xxx94375" v-model="M_TN_LOORentalAddendum.xxx94375"  ref="ref_xxx94375" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94376" v-model="M_TN_LOORentalAddendum.xxx94376"  ref="ref_xxx94376"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_xxx94377" v-model="M_TN_LOORentalAddendum.xxx94377"  ref="ref_xxx94377" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94378" v-model="M_TN_LOORentalAddendum.xxx94378"  ref="ref_xxx94378"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94379" v-model="M_TN_LOORentalAddendum.xxx94379"  ref="ref_xxx94379"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94385" v-model="M_TN_LOORentalAddendum.xxx94385"  ref="ref_xxx94385"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_xxx94386" v-model="M_TN_LOORentalAddendum.xxx94386"  ref="ref_xxx94386" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94387" v-model="M_TN_LOORentalAddendum.xxx94387"  ref="ref_xxx94387"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_xxx94388" v-model="M_TN_LOORentalAddendum.xxx94388"  ref="ref_xxx94388" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94389" v-model="M_TN_LOORentalAddendum.xxx94389"  ref="ref_xxx94389"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94390" v-model="M_TN_LOORentalAddendum.xxx94390"  ref="ref_xxx94390"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94396" v-model="M_TN_LOORentalAddendum.xxx94396"  ref="ref_xxx94396"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_xxx94397" v-model="M_TN_LOORentalAddendum.xxx94397"  ref="ref_xxx94397" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94398" v-model="M_TN_LOORentalAddendum.xxx94398"  ref="ref_xxx94398"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_xxx94399" v-model="M_TN_LOORentalAddendum.xxx94399"  ref="ref_xxx94399" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94400" v-model="M_TN_LOORentalAddendum.xxx94400"  ref="ref_xxx94400"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94401" v-model="M_TN_LOORentalAddendum.xxx94401"  ref="ref_xxx94401"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94407" v-model="M_TN_LOORentalAddendum.xxx94407"  ref="ref_xxx94407"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_xxx94408" v-model="M_TN_LOORentalAddendum.xxx94408"  ref="ref_xxx94408" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94409" v-model="M_TN_LOORentalAddendum.xxx94409"  ref="ref_xxx94409"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_xxx94410" v-model="M_TN_LOORentalAddendum.xxx94410"  ref="ref_xxx94410" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94411" v-model="M_TN_LOORentalAddendum.xxx94411"  ref="ref_xxx94411"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94412" v-model="M_TN_LOORentalAddendum.xxx94412"  ref="ref_xxx94412"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94418" v-model="M_TN_LOORentalAddendum.xxx94418"  ref="ref_xxx94418"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_xxx94419" v-model="M_TN_LOORentalAddendum.xxx94419"  ref="ref_xxx94419" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94420" v-model="M_TN_LOORentalAddendum.xxx94420"  ref="ref_xxx94420"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_xxx94421" v-model="M_TN_LOORentalAddendum.xxx94421"  ref="ref_xxx94421" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94422" v-model="M_TN_LOORentalAddendum.xxx94422"  ref="ref_xxx94422"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94423" v-model="M_TN_LOORentalAddendum.xxx94423"  ref="ref_xxx94423"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94429" v-model="M_TN_LOORentalAddendum.xxx94429"  ref="ref_xxx94429"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_xxx94430" v-model="M_TN_LOORentalAddendum.xxx94430"  ref="ref_xxx94430" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94431" v-model="M_TN_LOORentalAddendum.xxx94431"  ref="ref_xxx94431"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_xxx94432" v-model="M_TN_LOORentalAddendum.xxx94432"  ref="ref_xxx94432" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94433" v-model="M_TN_LOORentalAddendum.xxx94433"  ref="ref_xxx94433"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94434" v-model="M_TN_LOORentalAddendum.xxx94434"  ref="ref_xxx94434"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94440" v-model="M_TN_LOORentalAddendum.xxx94440"  ref="ref_xxx94440"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_xxx94441" v-model="M_TN_LOORentalAddendum.xxx94441"  ref="ref_xxx94441" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94442" v-model="M_TN_LOORentalAddendum.xxx94442"  ref="ref_xxx94442"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_xxx94443" v-model="M_TN_LOORentalAddendum.xxx94443"  ref="ref_xxx94443" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94444" v-model="M_TN_LOORentalAddendum.xxx94444"  ref="ref_xxx94444"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94445" v-model="M_TN_LOORentalAddendum.xxx94445"  ref="ref_xxx94445"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94451" v-model="M_TN_LOORentalAddendum.xxx94451"  ref="ref_xxx94451"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_xxx94452" v-model="M_TN_LOORentalAddendum.xxx94452"  ref="ref_xxx94452" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94453" v-model="M_TN_LOORentalAddendum.xxx94453"  ref="ref_xxx94453"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_xxx94454" v-model="M_TN_LOORentalAddendum.xxx94454"  ref="ref_xxx94454" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94455" v-model="M_TN_LOORentalAddendum.xxx94455"  ref="ref_xxx94455"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94456" v-model="M_TN_LOORentalAddendum.xxx94456"  ref="ref_xxx94456"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94462" v-model="M_TN_LOORentalAddendum.xxx94462"  ref="ref_xxx94462"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_xxx94463" v-model="M_TN_LOORentalAddendum.xxx94463"  ref="ref_xxx94463" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94464" v-model="M_TN_LOORentalAddendum.xxx94464"  ref="ref_xxx94464"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_xxx94465" v-model="M_TN_LOORentalAddendum.xxx94465"  ref="ref_xxx94465" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94466" v-model="M_TN_LOORentalAddendum.xxx94466"  ref="ref_xxx94466"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94467" v-model="M_TN_LOORentalAddendum.xxx94467"  ref="ref_xxx94467"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94473" v-model="M_TN_LOORentalAddendum.xxx94473"  ref="ref_xxx94473"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_xxx94474" v-model="M_TN_LOORentalAddendum.xxx94474"  ref="ref_xxx94474" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94475" v-model="M_TN_LOORentalAddendum.xxx94475"  ref="ref_xxx94475"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_xxx94476" v-model="M_TN_LOORentalAddendum.xxx94476"  ref="ref_xxx94476" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94477" v-model="M_TN_LOORentalAddendum.xxx94477"  ref="ref_xxx94477"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94478" v-model="M_TN_LOORentalAddendum.xxx94478"  ref="ref_xxx94478"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94484" v-model="M_TN_LOORentalAddendum.xxx94484"  ref="ref_xxx94484"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_xxx94485" v-model="M_TN_LOORentalAddendum.xxx94485"  ref="ref_xxx94485" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94486" v-model="M_TN_LOORentalAddendum.xxx94486"  ref="ref_xxx94486"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_xxx94487" v-model="M_TN_LOORentalAddendum.xxx94487"  ref="ref_xxx94487" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94488" v-model="M_TN_LOORentalAddendum.xxx94488"  ref="ref_xxx94488"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94489" v-model="M_TN_LOORentalAddendum.xxx94489"  ref="ref_xxx94489"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94495" v-model="M_TN_LOORentalAddendum.xxx94495"  ref="ref_xxx94495"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_xxx94496" v-model="M_TN_LOORentalAddendum.xxx94496"  ref="ref_xxx94496" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94497" v-model="M_TN_LOORentalAddendum.xxx94497"  ref="ref_xxx94497"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_xxx94498" v-model="M_TN_LOORentalAddendum.xxx94498"  ref="ref_xxx94498" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94499" v-model="M_TN_LOORentalAddendum.xxx94499"  ref="ref_xxx94499"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94500" v-model="M_TN_LOORentalAddendum.xxx94500"  ref="ref_xxx94500"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94506" v-model="M_TN_LOORentalAddendum.xxx94506"  ref="ref_xxx94506"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_xxx94507" v-model="M_TN_LOORentalAddendum.xxx94507"  ref="ref_xxx94507" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94508" v-model="M_TN_LOORentalAddendum.xxx94508"  ref="ref_xxx94508"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_xxx94509" v-model="M_TN_LOORentalAddendum.xxx94509"  ref="ref_xxx94509" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94510" v-model="M_TN_LOORentalAddendum.xxx94510"  ref="ref_xxx94510"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94511" v-model="M_TN_LOORentalAddendum.xxx94511"  ref="ref_xxx94511"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94517" v-model="M_TN_LOORentalAddendum.xxx94517"  ref="ref_xxx94517"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_xxx94518" v-model="M_TN_LOORentalAddendum.xxx94518"  ref="ref_xxx94518" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94519" v-model="M_TN_LOORentalAddendum.xxx94519"  ref="ref_xxx94519"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_xxx94520" v-model="M_TN_LOORentalAddendum.xxx94520"  ref="ref_xxx94520" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94521" v-model="M_TN_LOORentalAddendum.xxx94521"  ref="ref_xxx94521"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94522" v-model="M_TN_LOORentalAddendum.xxx94522"  ref="ref_xxx94522"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94528" v-model="M_TN_LOORentalAddendum.xxx94528"  ref="ref_xxx94528"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_xxx94529" v-model="M_TN_LOORentalAddendum.xxx94529"  ref="ref_xxx94529" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94530" v-model="M_TN_LOORentalAddendum.xxx94530"  ref="ref_xxx94530"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_xxx94531" v-model="M_TN_LOORentalAddendum.xxx94531"  ref="ref_xxx94531" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94532" v-model="M_TN_LOORentalAddendum.xxx94532"  ref="ref_xxx94532"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94533" v-model="M_TN_LOORentalAddendum.xxx94533"  ref="ref_xxx94533"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94539" v-model="M_TN_LOORentalAddendum.xxx94539"  ref="ref_xxx94539"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_xxx94540" v-model="M_TN_LOORentalAddendum.xxx94540"  ref="ref_xxx94540" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94541" v-model="M_TN_LOORentalAddendum.xxx94541"  ref="ref_xxx94541"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_xxx94542" v-model="M_TN_LOORentalAddendum.xxx94542"  ref="ref_xxx94542" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94543" v-model="M_TN_LOORentalAddendum.xxx94543"  ref="ref_xxx94543"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94544" v-model="M_TN_LOORentalAddendum.xxx94544"  ref="ref_xxx94544"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94550" v-model="M_TN_LOORentalAddendum.xxx94550"  ref="ref_xxx94550"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_xxx94551" v-model="M_TN_LOORentalAddendum.xxx94551"  ref="ref_xxx94551" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94552" v-model="M_TN_LOORentalAddendum.xxx94552"  ref="ref_xxx94552"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_xxx94553" v-model="M_TN_LOORentalAddendum.xxx94553"  ref="ref_xxx94553" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94554" v-model="M_TN_LOORentalAddendum.xxx94554"  ref="ref_xxx94554"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_xxx94555" v-model="M_TN_LOORentalAddendum.xxx94555"  ref="ref_xxx94555"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_xxx94561" v-model="M_TN_LOORentalAddendum.xxx94561"  ref="ref_xxx94561" />
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close -->
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
            FormType: "Form",
			Module:"TN",
       
            IEBy: {Input: '', Edit: ''},   			

            M_TN_LOORentalAddendum :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                lotno: '',
                grossarea: 0,
                semigrossarea: 0,
                leaseperiod: 0,
                startperiod: 0,
                netarea: 0,
                rentalqty: 0,
                rentalrate: 0,
                rentalamt: 0,
                chargearea: '',
                fixcharges: '',
                blockcd: '',
                blockdescs: '',
                floorcd: '',
                floordescs: '',
                startdate: '',
                enddate: '',
                rcd: '',
                red: '',
                tenantstatus: '',
                lotthemecd: '',
                themedescs: '',
                lotclasscd: '',
                classdescs: '',
                lotcategorycd: '',
                categorydescs: '',
                lottypedescs: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                antenna: '',
                lotdescs: '',
                budgetrate: 0,
                totalrate: 0,
                perioddays: 0,
                applicationno: '',
                addendumsequenceno: 0,
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_xxx94334: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_xxx94341: { 
                cValidate :'', 
                cName: 'xxx94341', 
                cLabel: '1', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94342: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_xxx94343: { 
                cValidate :'', 
                cName: 'xxx94343', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94344: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_xxx94345: { 
                cValidate :'', 
                cName: 'xxx94345', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94346: { 
                cValidate :'', 
                cName: 'xxx94346', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94352: { 
                cValidate :'', 
                cName: 'xxx94352', 
                cLabel: '2', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94353: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_xxx94354: { 
                cValidate :'', 
                cName: 'xxx94354', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94355: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_xxx94356: { 
                cValidate :'', 
                cName: 'xxx94356', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94357: { 
                cValidate :'', 
                cName: 'xxx94357', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94363: { 
                cValidate :'', 
                cName: 'xxx94363', 
                cLabel: '3', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94364: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_xxx94365: { 
                cValidate :'', 
                cName: 'xxx94365', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94366: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_xxx94367: { 
                cValidate :'', 
                cName: 'xxx94367', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94368: { 
                cValidate :'', 
                cName: 'xxx94368', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94374: { 
                cValidate :'', 
                cName: 'xxx94374', 
                cLabel: '4', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94375: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_xxx94376: { 
                cValidate :'', 
                cName: 'xxx94376', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94377: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_xxx94378: { 
                cValidate :'', 
                cName: 'xxx94378', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94379: { 
                cValidate :'', 
                cName: 'xxx94379', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94385: { 
                cValidate :'', 
                cName: 'xxx94385', 
                cLabel: '5', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94386: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_xxx94387: { 
                cValidate :'', 
                cName: 'xxx94387', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94388: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_xxx94389: { 
                cValidate :'', 
                cName: 'xxx94389', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94390: { 
                cValidate :'', 
                cName: 'xxx94390', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94396: { 
                cValidate :'', 
                cName: 'xxx94396', 
                cLabel: '6', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94397: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_xxx94398: { 
                cValidate :'', 
                cName: 'xxx94398', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94399: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_xxx94400: { 
                cValidate :'', 
                cName: 'xxx94400', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94401: { 
                cValidate :'', 
                cName: 'xxx94401', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94407: { 
                cValidate :'', 
                cName: 'xxx94407', 
                cLabel: '7', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94408: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_xxx94409: { 
                cValidate :'', 
                cName: 'xxx94409', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94410: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_xxx94411: { 
                cValidate :'', 
                cName: 'xxx94411', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94412: { 
                cValidate :'', 
                cName: 'xxx94412', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94418: { 
                cValidate :'', 
                cName: 'xxx94418', 
                cLabel: '8', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94419: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_xxx94420: { 
                cValidate :'', 
                cName: 'xxx94420', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94421: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_xxx94422: { 
                cValidate :'', 
                cName: 'xxx94422', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94423: { 
                cValidate :'', 
                cName: 'xxx94423', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94429: { 
                cValidate :'', 
                cName: 'xxx94429', 
                cLabel: '9', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94430: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_xxx94431: { 
                cValidate :'', 
                cName: 'xxx94431', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94432: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_xxx94433: { 
                cValidate :'', 
                cName: 'xxx94433', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94434: { 
                cValidate :'', 
                cName: 'xxx94434', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94440: { 
                cValidate :'', 
                cName: 'xxx94440', 
                cLabel: '10', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94441: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_xxx94442: { 
                cValidate :'', 
                cName: 'xxx94442', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94443: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_xxx94444: { 
                cValidate :'', 
                cName: 'xxx94444', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94445: { 
                cValidate :'', 
                cName: 'xxx94445', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94451: { 
                cValidate :'', 
                cName: 'xxx94451', 
                cLabel: '11', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94452: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_xxx94453: { 
                cValidate :'', 
                cName: 'xxx94453', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94454: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_xxx94455: { 
                cValidate :'', 
                cName: 'xxx94455', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94456: { 
                cValidate :'', 
                cName: 'xxx94456', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94462: { 
                cValidate :'', 
                cName: 'xxx94462', 
                cLabel: '12', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94463: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_xxx94464: { 
                cValidate :'', 
                cName: 'xxx94464', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94465: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_xxx94466: { 
                cValidate :'', 
                cName: 'xxx94466', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94467: { 
                cValidate :'', 
                cName: 'xxx94467', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94473: { 
                cValidate :'', 
                cName: 'xxx94473', 
                cLabel: '13', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94474: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_xxx94475: { 
                cValidate :'', 
                cName: 'xxx94475', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94476: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_xxx94477: { 
                cValidate :'', 
                cName: 'xxx94477', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94478: { 
                cValidate :'', 
                cName: 'xxx94478', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94484: { 
                cValidate :'', 
                cName: 'xxx94484', 
                cLabel: '14', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94485: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_xxx94486: { 
                cValidate :'', 
                cName: 'xxx94486', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94487: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_xxx94488: { 
                cValidate :'', 
                cName: 'xxx94488', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94489: { 
                cValidate :'', 
                cName: 'xxx94489', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94495: { 
                cValidate :'', 
                cName: 'xxx94495', 
                cLabel: '15', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94496: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_xxx94497: { 
                cValidate :'', 
                cName: 'xxx94497', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94498: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_xxx94499: { 
                cValidate :'', 
                cName: 'xxx94499', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94500: { 
                cValidate :'', 
                cName: 'xxx94500', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94506: { 
                cValidate :'', 
                cName: 'xxx94506', 
                cLabel: '16', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94507: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_xxx94508: { 
                cValidate :'', 
                cName: 'xxx94508', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94509: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_xxx94510: { 
                cValidate :'', 
                cName: 'xxx94510', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94511: { 
                cValidate :'', 
                cName: 'xxx94511', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94517: { 
                cValidate :'', 
                cName: 'xxx94517', 
                cLabel: '17', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94518: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_xxx94519: { 
                cValidate :'', 
                cName: 'xxx94519', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94520: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_xxx94521: { 
                cValidate :'', 
                cName: 'xxx94521', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94522: { 
                cValidate :'', 
                cName: 'xxx94522', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94528: { 
                cValidate :'', 
                cName: 'xxx94528', 
                cLabel: '18', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94529: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_xxx94530: { 
                cValidate :'', 
                cName: 'xxx94530', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94531: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_xxx94532: { 
                cValidate :'', 
                cName: 'xxx94532', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94533: { 
                cValidate :'', 
                cName: 'xxx94533', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94539: { 
                cValidate :'', 
                cName: 'xxx94539', 
                cLabel: '19', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94540: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_xxx94541: { 
                cValidate :'', 
                cName: 'xxx94541', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94542: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_xxx94543: { 
                cValidate :'', 
                cName: 'xxx94543', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94544: { 
                cValidate :'', 
                cName: 'xxx94544', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94550: { 
                cValidate :'', 
                cName: 'xxx94550', 
                cLabel: '20', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94551: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_xxx94552: { 
                cValidate :'', 
                cName: 'xxx94552', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94553: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_xxx94554: { 
                cValidate :'', 
                cName: 'xxx94554', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94555: { 
                cValidate :'', 
                cName: 'xxx94555', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_xxx94561: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
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
		return this.$store.getters.GetPage2Data
	},
    DataRowPage1(){
		return this.$store.getters.GetPage1Data
	}
  },
    methods: {
		
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
			
        

            this.FormToABSList().doGetList('','eb_getList')
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
            this.M_TN_LOORentalAddendum = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                lotno: '',
                grossarea: 0,
                semigrossarea: 0,
                leaseperiod: 0,
                startperiod: 0,
                netarea: 0,
                rentalqty: 0,
                rentalrate: 0,
                rentalamt: 0,
                chargearea: '',
                fixcharges: '',
                blockcd: '',
                blockdescs: '',
                floorcd: '',
                floordescs: '',
                startdate: '',
                enddate: '',
                rcd: '',
                red: '',
                tenantstatus: '',
                lotthemecd: '',
                themedescs: '',
                lotclasscd: '',
                classdescs: '',
                lotcategorycd: '',
                categorydescs: '',
                lottypedescs: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                antenna: '',
                lotdescs: '',
                budgetrate: 0,
                totalrate: 0,
                perioddays: 0,
                applicationno: '',
                addendumsequenceno: 0,
                lastupdatestamp: 0,
                rowid: 0
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

                this.$parent.resultPost()
            })
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_TN_LOORentalAddendum = {
                subportfoliocd: data.subportfoliocd,
                lotno: data.lotno,
                grossarea: this.isCurrency(data.grossarea, this.decimal),
                semigrossarea: this.isCurrency(data.semigrossarea, this.decimal),
                leaseperiod: this.isCurrency(data.leaseperiod, this.decimal),
                startperiod: this.isCurrency(data.startperiod, this.decimal),
                netarea: this.isCurrency(data.netarea, this.decimal),
                rentalqty: this.isCurrency(data.rentalqty, this.decimal),
                rentalrate: this.isCurrency(data.rentalrate, this.decimal),
                rentalamt: this.isCurrency(data.rentalamt, this.decimal),
                chargearea: data.chargearea,
                fixcharges: data.fixcharges,
                blockcd: data.blockcd,
                blockdescs: data.blockdescs,
                floorcd: data.floorcd,
                floordescs: data.floordescs,
                startdate: data.startdate,
                enddate: data.enddate,
                rcd: data.rcd,
                red: data.red,
                tenantstatus: data.tenantstatus,
                lotthemecd: data.lotthemecd,
                themedescs: data.themedescs,
                lotclasscd: data.lotclasscd,
                classdescs: data.classdescs,
                lotcategorycd: data.lotcategorycd,
                categorydescs: data.categorydescs,
                lottypedescs: data.lottypedescs,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                antenna: data.antenna,
                lotdescs: data.lotdescs,
                budgetrate: this.isCurrency(data.budgetrate, this.decimal),
                totalrate: this.isCurrency(data.totalrate, this.decimal),
                perioddays: this.isCurrency(data.perioddays, this.decimal),
                applicationno: data.applicationno,
                addendumsequenceno: data.addendumsequenceno,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
                 

  

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

