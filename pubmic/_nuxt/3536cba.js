(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{682:function(t,e,n){"use strict";n.r(e);var o=n(2),r=(n(49),{props:{venue:Object},data:function(){return{currentLocation:{lat:0,lng:0},locations:[{lat:44.933076,lng:15.629058},{lat:44.933076,lng:15.629058}],pins:{selected:"data:image/png;base64,iVBORw0KGgo...",notSelected:"data:image/png;base64,iVBORw0KGgo..."},mapStyle:["road"],clusterStyle:[{url:"https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m4.png",width:76,height:76,textColor:"#ff04ec"}]}},created:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$getLocation({}).then((function(e){console.log("coords: ",e),t.currentLocation.lat=e.lat,t.currentLocation.lng=e.lng})).catch((function(t){return alert(t)}));case 2:case"end":return e.stop()}}),e)})))()}}),l=n(32),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("GMap",{ref:"gMap",attrs:{language:"en",cluster:{options:{styles:t.clusterStyle}},center:{lat:parseFloat(t.venue.data.data.latitude),lng:parseFloat(t.venue.data.data.longitude)},options:{fullscreenControl:!1,styles:t.mapStyle},zoom:16}},t._l(t.locations,(function(e){return n("GMapMarker",{key:e.id,attrs:{position:{lat:parseFloat(t.venue.data.data.latitude),lng:parseFloat(t.venue.data.data.longitude)},options:{icon:e===t.currentLocation?t.pins.selected:t.pins.notSelected}},on:{click:function(n){t.currentLocation=e}}},[n("GMapInfoWindow",{attrs:{options:{maxWidth:200}}},[n("code",[t._v("\n            lat: "+t._s(t.venue.data.data.latitude)+",\n            lng: "+t._s(t.venue.data.data.longitude)+"\n        ")])])],1)})),1)],1)}),[],!1,null,"491468a2",null);e.default=component.exports}}]);