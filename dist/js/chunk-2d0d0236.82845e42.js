(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d0236"],{6765:function(t,o,e){"use strict";e.r(o);var i=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"height--full"},[e("div",{staticClass:"header--content"},[e("treeselect",{attrs:{multiple:!1,options:t.masterPlanList,clearable:!1,placeholder:"Choose Master Plan"},model:{value:t.masterPlanChoosed,callback:function(o){t.masterPlanChoosed=o},expression:"masterPlanChoosed"}})],1),e("b-modal",{ref:"modalSubPortfolio",staticClass:"modal-customize-abs",attrs:{id:"modal-center","hide-footer":!0,"hide-header-close":!0,centered:""}},[e("b-container",{staticClass:"bv-example-row"},[e("b-row",[e("b-col",{attrs:{sm:"12"}},[e("div",{staticClass:"modal-customize-abs__modal-header"},[e("div",{staticClass:"modal-customize-abs__modal-header--title"},[t._v("\n              Choose Subportfolio\n            ")]),e("div",{staticClass:"modal-customize-abs__modal-header--icon",on:{click:function(o){t.$refs.modalSubPortfolio.hide()}}},[e("i",{staticClass:"icon-close"})])]),e("div",{staticClass:"modal-customize-abs__modal-body"},[e("treeselect",{attrs:{multiple:!1,options:t.subportfolioList,clearable:!1,placeholder:"Choose SubPortFolio"},model:{value:t.subportfolioChoosed,callback:function(o){t.subportfolioChoosed=o},expression:"subportfolioChoosed"}}),e("ABSButton",{attrs:{text:"Save",icon:"save",classButton:"button button--save",classIcon:"icon-style-1",disabled:null==t.subportfolioChoosed},on:{click:t.saveMap}}),e("br")],1)])],1)],1)],1),e("div",{staticClass:"content-app-form__body form-process"},[e("div",{staticClass:"el",style:"margin-top:10px;",attrs:{mousetip:"","mousetip-msg":"I'm a tooltip"}},[e("b-collapse",{attrs:{id:"collapse1",visible:!0}},[e("b-row",{staticStyle:{"margin-left":"25px","padding-bottom":"10px"}},[e("b-col",{staticClass:"bColMasterForm",attrs:{md:"12",id:"col-left"}},[e("b-row",[e("b-col",{attrs:{md:"12",id:"col-left"}},[e("b-row"),e("b-row",[e("b-col",[e("label",[e("gmap-autocomplete",{ref:"searchMap",staticStyle:{width:"900px"},on:{place_changed:t.setPlace}})],1),e("br")])],1),e("b-row",[e("b-col",[e("ABSButton",{attrs:{text:t.captionButton,icon:"Add Marker"==t.captionButton?"plus":"save",classButton:"Add Marker"==t.captionButton?"button button--new":"button button--save",disabled:"Add Marker"!=t.captionButton&&!t.isAddMarker,classIcon:"icon-style-1"},on:{click:t.changeStatus}}),"Save"==t.captionButton?e("ABSButton",{attrs:{text:"Cancel",icon:"ban",classButton:"button button--cancel",classIcon:"icon-style-2"},on:{click:t.doCancel}}):t._e()],1)],1),e("b-row",[e("b-col",[e("gmap-map",{staticStyle:{width:"100%",height:"400px"},attrs:{center:t.center,zoom:t.zoomMap},on:{click:t.addMarkerOnMapClick,zoom_changed:t.zoomChanged}},[t._l(t.markers,function(o,i){return e("gmap-marker",{key:i,attrs:{icon:null==o.icon?"http://maps.google.com/mapfiles/ms/icons/red-dot.png":o.icon,position:o.position,clickable:!0,draggable:o.draggable},on:{dragend:t.dragMarker,click:function(e){t.deleteMap(o)}}})}),e("gmap-info-window",{attrs:{options:{maxWidth:300},position:t.infoWindow.position,opened:t.infoWindow.open},on:{closeclick:function(o){t.infoWindow.open=!1}}},[e("div",{on:{mouseout:function(o){t.infoWindow.open=!1}}},[t._v("\n                              "+t._s(t.infoWindow.content)+"\n                            ")])])],2)],1)],1),e("b-row",[e("b-col",[t._v("\n                      *To Delete Marker/Data, Please Choose Marker Red\n                    ")])],1)],1)],1)],1)],1)],1)],1)])],1)},a=[],s={data:function(){return{zoomMap:4,isDraggable:!0,center:{lat:-2.548926,lng:118.0148634},markers:[],currentPlace:null,markerTemporary:null,subportfolioList:[],subportfolioChoosed:null,captionButton:"Add Marker",isAddMarker:!1,infoWindow:{position:{lat:0,lng:0},open:!1,content:""},masterPlanList:[],masterPlanChoosed:""}},methods:{test:function(){alert("woi")},getUrlLookUpSubportfolioData:function(){var t=this,o={};this.postEncode(this.getUrlLookUpSubportfolio(),o).then(function(o){null!=o&&(t.masterPlanList=JSON.parse(o.Data[0].JSONTEXT))})},openInfoWindow:function(t){var o,e;for(this.infoWindow.position=t.position,o=0;o<this.subportfolioList.length;o++)if(this.subportfolioList[o].Latitude==t.position.lat&&this.subportfolioList[o].Longitude==t.position.lng){this.subportfolioList[o].id,e=this.subportfolioList[o].label;break}void 0==e?this.infoWindow.open=!1:(this.infoWindow.content=e,this.infoWindow.open=!0)},dragMarker:function(t){this.markers.splice(-1,1),this.markerTemporary={lat:t.latLng.lat(),lng:t.latLng.lng()},this.addMarker()},doCancel:function(){this.isAddMarker=!1,this.$refs.searchMap.$refs.input.disabled=!1,this.captionButton="Add Marker",this.getSubportfolio()},changeStatus:function(){"Add Marker"==this.captionButton?(this.captionButton="Save",this.$refs.searchMap.$refs.input.disabled=!0,this.$refs.searchMap.$refs.input.value=""):(this.subportfolioChoosed=null,this.$refs.modalSubPortfolio.show())},saveMap:function(){var t=this,o={SubPortfolioCd:this.subportfolioChoosed,Latitude:this.markerTemporary.lat,Longitude:this.markerTemporary.lng,UserId:this.getDataUser().UserId};this.postEncode(this.getUrlInsertSubportfolio(),o).then(function(o){null!=o&&(t.currentPlace=null,t.markerTemporary=null,t.alertSuccess("Data Has Been Saved Successfully."),t.getSubportfolio(),t.$refs.modalSubPortfolio.hide(),t.captionButton="Add Marker",t.isAddMarker=!1,t.$refs.searchMap.$refs.input.disabled=!1)})},deleteMap:function(t){var o=this;if(this.isAddMarker)this.alertError("Please Finish Marker Or Cancel");else{var e,i,a;for(e=0;e<this.subportfolioList.length;e++)if(this.subportfolioList[e].Latitude==t.position.lat&&this.subportfolioList[e].Longitude==t.position.lng){i=this.subportfolioList[e].id,a=this.subportfolioList[e].label;break}this.alertConfirmation("Are You Sure Want To Delete "+a+" ?").then(function(t){if(t.value){var e={SubPortfolioCd:i,UserId:o.getDataUser().UserId};o.postEncode(o.getUrlDeleteSubportfolio(),e).then(function(t){null!=t&&(o.currentPlace=null,o.markerTemporary=null,o.alertSuccess("Data Has Been Deleted Successfully"),o.getSubportfolio(),o.$refs.modalSubPortfolio.hide())})}})}},getSubportfolio:function(){var t=this,o={UserId:this.getDataUser().UserId};this.postEncode(this.getUrlSubportfolio(),o).then(function(o){if(null!=o){t.subportfolioList=o.Data,t.markers=[];for(var e=0;e<t.subportfolioList.length;e++)if(null!=t.subportfolioList[e].Latitude&&null!=t.subportfolioList[e].Longitude){var i={lat:parseFloat(t.subportfolioList[e].Latitude),lng:parseFloat(t.subportfolioList[e].Longitude)};t.markers.push({position:i})}}})},zoomChanged:function(t){this.zoomMap=t},addMarkerOnMapClick:function(t){"Add Marker"!=this.captionButton&&(this.isAddMarker||(this.markerTemporary={lat:t.latLng.lat(),lng:t.latLng.lng()},this.addMarker()))},setPlace:function(t){this.currentPlace=t;var o={lat:this.currentPlace.geometry.location.lat(),lng:this.currentPlace.geometry.location.lng()};this.center=o,this.zoomMap=12,this.changeStatus(),this.addMarker(),this.$refs.searchMap.$refs.input.disabled=!0,this.$refs.searchMap.$refs.input.value=""},addMarker:function(){this.currentPlace&&(this.markerTemporary={lat:this.currentPlace.geometry.location.lat(),lng:this.currentPlace.geometry.location.lng()},this.center=this.markerTemporary,this.currentPlace=null),this.isAddMarker=!0,this.markers.push({position:this.markerTemporary,icon:"http://maps.google.com/mapfiles/ms/icons/blue-dot.png",draggable:!0})},geolocate:function(){var t=this;navigator.geolocation.getCurrentPosition(function(o){t.center={lat:o.coords.latitude,lng:o.coords.longitude}})}},mounted:function(){this.getSubportfolio(),this.getUrlLookUpSubportfolioData(),this.geolocate()}},r=s,n=e("2877"),l=Object(n["a"])(r,i,a,!1,null,null,null);l.options.__file="TN_TesGoogleMap.vue";o["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0d0236.82845e42.js.map