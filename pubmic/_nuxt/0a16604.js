(window.webpackJsonp=window.webpackJsonp||[]).push([[42,15,16],{549:function(e,t,n){var content=n(553);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(74).default)("5578cc91",content,!0,{sourceMap:!1})},550:function(e,t,n){var content=n(555);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(74).default)("ac7e6708",content,!0,{sourceMap:!1})},551:function(e,t,n){e.exports=n.p+"img/logo.b64fdbc.png"},552:function(e,t,n){"use strict";n(549)},553:function(e,t,n){var v=n(73)((function(i){return i[1]}));v.push([e.i,'/*purgecss start ignore*/\n.start[data-v-b9b561a2]{\n  margin-top:40px!important\n}\n.container[data-v-b9b561a2]{\n  max-width:1140px;\n  margin:0 auto\n}\nh1[data-v-b9b561a2]{\n  font-size:2.3rem;\n  font-weight:700\n}\nh2[data-v-b9b561a2]{\n  font-size:1.6rem;\n  line-height:28px\n}\n.v-date-picker-table.v-btn.v-btn--active[data-v-b9b561a2]{\n  color:#8c0099!important\n}\nh1[data-v-b9b561a2],h2[data-v-b9b561a2],h3[data-v-b9b561a2],h4[data-v-b9b561a2],h5[data-v-b9b561a2],h6[data-v-b9b561a2]{\n  font-family:"Raleway",sans-serif\n}\nbody[data-v-b9b561a2]{\n  font-family:"Montserrat",sans-serif\n}\n.navbar-brand a[data-v-b9b561a2]{\n  padding:0!important\n}\n.navbar-brand a img[data-v-b9b561a2]{\n  max-height:3rem!important\n}\n.main-menu[data-v-b9b561a2]{\n  display:flex;\n  flex-direction:column\n}\n.nav-bar-holder[data-v-b9b561a2]{\n  height:36px\n}\n\n/*purgecss end ignore*/',""]),v.locals={},e.exports=v},554:function(e,t,n){"use strict";n(550)},555:function(e,t,n){var v=n(73)((function(i){return i[1]}));v.push([e.i,'/*purgecss start ignore*/\n.start[data-v-e90938ba]{\n  margin-top:40px!important\n}\n.container[data-v-e90938ba]{\n  max-width:1140px;\n  margin:0 auto\n}\nh1[data-v-e90938ba]{\n  font-size:2.3rem;\n  font-weight:700\n}\nh2[data-v-e90938ba]{\n  font-size:1.6rem;\n  line-height:28px\n}\n.v-date-picker-table.v-btn.v-btn--active[data-v-e90938ba]{\n  color:#8c0099!important\n}\nh1[data-v-e90938ba],h2[data-v-e90938ba],h3[data-v-e90938ba],h4[data-v-e90938ba],h5[data-v-e90938ba],h6[data-v-e90938ba]{\n  font-family:"Raleway",sans-serif\n}\nbody[data-v-e90938ba]{\n  font-family:"Montserrat",sans-serif\n}\n.v-bottom-navigation[data-v-e90938ba]{\n  position:fixed;\n  bottom:0\n}\n\n/*purgecss end ignore*/',""]),v.locals={},e.exports=v},556:function(e,t,n){"use strict";n.r(t);n(38),n(29),n(27),n(63),n(26),n(64);var v=n(20),r=n(2),o=(n(49),n(65));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var d={props:{username:String,loggedIn:Boolean},data:function(){return{token:{},showNav:!1}},methods:{logout:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$auth.logout();case 2:case"end":return t.stop()}}),t)})))()}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(v.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.c)({isAuthenticated:"auth/isAuthenticated",loggedInUser:"auth/loggedInUser"}))},c=(n(552),n(85)),component=Object(c.a)(d,(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("div",{staticClass:"nav-bar-holder is-paddingless"},[v("nav",{class:e.isAuthenticated?"navbar is-warning is-fixed-top":"navbar is-light is-fixed-top"},[v("div",{staticClass:"navbar-brand"},[v("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/"}},[v("img",{attrs:{src:n(551),alt:"Logo"}})]),e._v(" "),v("div",{staticClass:"navbar-burger",class:{"is-active":e.showNav},attrs:{"data-target":"navMenu"},on:{click:function(t){e.showNav=!e.showNav}}},[v("span"),e._v(" "),v("span"),e._v(" "),v("span")])],1),e._v(" "),v("div",{staticClass:"navbar-menu",class:{"is-active":e.showNav},attrs:{id:"navMenu"}},[v("div",{staticClass:"navbar-start"},[e.isAuthenticated?e._e():v("div",{staticClass:"main-menu"},[v("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/"}},[e._v("Home")]),e._v(" "),v("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/events"}},[e._v("Events")]),e._v(" "),v("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/venues"}},[e._v("Venues")])],1),e._v(" "),e.isAuthenticated?v("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[v("a",{staticClass:"navbar-link"},[e._v("\n            Events\n          ")]),e._v(" "),v("div",{staticClass:"navbar-dropdown"},[v("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/admin/events/add"}},[e._v("Add Event")]),e._v(" "),v("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/admin/events"}},[e._v("Events")])],1)]):e._e(),e._v(" "),e.isAuthenticated?v("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[v("a",{staticClass:"navbar-link"},[e._v("\n            Venues\n          ")]),e._v(" "),v("div",{staticClass:"navbar-dropdown"},[v("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/admin/venues/add"}},[e._v("Add Venue")]),e._v(" "),v("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/admin/venues"}},[e._v("Venues")])],1)]):e._e(),e._v(" "),e.isAuthenticated?v("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[v("a",{staticClass:"navbar-link"},[e._v("\n            Users\n          ")]),e._v(" "),v("div",{staticClass:"navbar-dropdown"},[v("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/admin/users/add"}},[e._v("Add User")]),e._v(" "),v("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/admin/users"}},[e._v("Users")])],1)]):e._e()]),e._v(" "),v("div",{staticClass:"navbar-end"},[v("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[v("a",{staticClass:"navbar-link"},[e._v("\n            Admin\n          ")]),e._v(" "),e.isAuthenticated?v("div",{staticClass:"navbar-dropdown"},[v("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/auth/user"}},[e._v(e._s(e.loggedInUser.name))]),e._v(" "),v("a",{staticClass:"navbar-item has-text-danger",on:{click:e.logout}},[e._v("Logout")])],1):v("div",{staticClass:"navbar-dropdown"},[v("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/auth/register"}},[e._v("Register")]),e._v(" "),v("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/auth/login"}},[e._v("Log In")])],1)])])])])])}),[],!1,null,"b9b561a2",null);t.default=component.exports},557:function(e,t,n){"use strict";n.r(t);var v={},r=(n(554),n(85)),component=Object(r.a)(v,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,"e90938ba",null);t.default=component.exports},565:function(e,t,n){var content=n(594);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(74).default)("5f81706e",content,!0,{sourceMap:!1})},593:function(e,t,n){"use strict";n(565)},594:function(e,t,n){var v=n(73)((function(i){return i[1]}));v.push([e.i,'/*purgecss start ignore*/\n.start[data-v-4ac03aa6]{\n  margin-top:40px!important\n}\n.container[data-v-4ac03aa6]{\n  max-width:1140px;\n  margin:0 auto\n}\nh1[data-v-4ac03aa6]{\n  font-size:2.3rem;\n  font-weight:700\n}\nh2[data-v-4ac03aa6]{\n  font-size:1.6rem;\n  line-height:28px\n}\n.v-date-picker-table.v-btn.v-btn--active[data-v-4ac03aa6]{\n  color:#8c0099!important\n}\nh1[data-v-4ac03aa6],h2[data-v-4ac03aa6],h3[data-v-4ac03aa6],h4[data-v-4ac03aa6],h5[data-v-4ac03aa6],h6[data-v-4ac03aa6]{\n  font-family:"Raleway",sans-serif\n}\nbody[data-v-4ac03aa6]{\n  font-family:"Montserrat",sans-serif\n}\n.image img[data-v-4ac03aa6]{\n  height:100px;\n  width:auto\n}\n.readonly[data-v-4ac03aa6]{\n  color:#d6d6d6\n}\nform[data-v-4ac03aa6]{\n  display:flex;\n  width:100%;\n  flex-direction:column\n}\ninput[type=number][data-v-4ac03aa6],input[type=text][data-v-4ac03aa6]{\n  border:1px solid #8c0099;\n  padding:10px;\n  flex:10;\n  outline:0\n}\ninput[type=submit][data-v-4ac03aa6]{\n  flex:2;\n  cursor:pointer;\n  background-color:#8c0099;\n  color:#fff\n}\ninput[type=number][data-v-4ac03aa6],input[type=text][data-v-4ac03aa6]{\n  width:100%\n}\n.is-valid[data-v-4ac03aa6]{\n  border:1px solid #20aa27!important\n}\n.v-btn--active[data-v-4ac03aa6]{\n  color:#f96!important\n}\n.accent[data-v-4ac03aa6],.theme--light.v-card[data-v-4ac03aa6],.v-time-picker-clock__hand[data-v-4ac03aa6],.v-time-picker-clock__hand[data-v-4ac03aa6]:before{\n  background-color:#096!important\n}\n.add[data-v-4ac03aa6]{\n  margin-bottom:40px\n}\n\n/*purgecss end ignore*/',""]),v.locals={},e.exports=v},597:function(e,t,n){"use strict";n.r(t);n(38),n(29),n(27),n(63),n(26),n(64);var v,r=n(2),o=n(20),l=(n(49),n(86),n(335),n(560)),d=n(65);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h=(v={data:function(){return{defaultEvent:{eventName:"",eventDetails:"",slug:"",eventPhoto:"",eventDate:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),eventTimeStart:"",eventTimeEnd:"",eventType:"",eventCost:"",venue_id:this.venue_id,is_live:0},title:"",showNotification:!1,successMessage:""}},validations:{event:{eventName:{required:l.required,minLength:Object(l.minLength)(3)},eventDate:{required:l.required},eventType:{required:l.required},eventDetails:{required:l.required,minLength:Object(l.minLength)(3)},slug:{required:l.required},eventTimeStart:{required:l.required},eventTimeEnd:{required:l.required},eventPhoto:{required:l.required},eventCost:{required:l.required},venue_id:{required:l.required}}},mounted:function(){this.$route.params.event?this.title="Edit Event":this.title="Add Event",this.defaultEvent.venue_id=this.venue_id},methods:m(m({},Object(d.b)({addEvent:"events/addEvent"})),{},{addNewEvent:function(){var e=this;this.event.venue_id=this.venue_id,this.addEvent(this.event),this.showNotification=!0,this.successMessage="You have added a new event!",setTimeout((function(){e.$router.push("/admin/events")}),3e3)},editEvent:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("events/editEvent",e.event);case 2:e.$router.push("/admin/events");case 3:case"end":return t.stop()}}),t)})))()},closeNotification:function(){this.showNotification=!1,console.log("close")}})},Object(o.a)(v,"mounted",(function(){console.log("defaultEvent: ",this.defaultEvent),this.$store.state.venues.venue_id,this.venue_id})),Object(o.a)(v,"computed",m(m({},Object(d.c)("events",{events:"getEvents"})),{},{event:function(){var e,t=this;return null!==(e=this.events.find((function(e){return e.id==t.$route.params.event})))&&void 0!==e?e:this.defaultEvent},venue_id:function(){var e;return null!==(e=this.$store.state.venues.venue_id)&&void 0!==e?e:this.defaultEvent.venue_id},venuename:function(){return this.$store.state.venues.venuename}})),v),_=(n(593),n(85)),f=n(599),C=n.n(f),x=n(709),y=n(712),$=n(710),E=n(738),component=Object(_.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[e.venue_id&&""!=e.venuename?n("div",[n("h2",{staticClass:"is-size-2"},[e._v(e._s(this.title))]),e._v(" "),n("h3",{staticClass:"is-size-3"},[e._v("VENUE: "+e._s(e.venuename))]),e._v(" "),this.$route.params.event?n("nuxt-link",{staticClass:"button is-warning is-small",attrs:{to:"/admin/events"}},[n("svg",{staticStyle:{width:"24px",height:"24px","margin-right":"15px"},attrs:{viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"currentColor",d:"M22,3H7C6.31,3 5.77,3.35 5.41,3.88L0,12L5.41,20.11C5.77,20.64 6.31,21 7,21H22A2,2 0 0,0 24,19V5A2,2 0 0,0 22,3M19,15.59L17.59,17L14,13.41L10.41,17L9,15.59L12.59,12L9,8.41L10.41,7L14,10.59L17.59,7L19,8.41L15.41,12"}})]),e._v("\n            Back to Events\n        ")]):e._e(),e._v(" "),e.event.eventPhoto?n("div",{staticClass:"image"},[n("img",{attrs:{src:"http://jwtapi.test/"+e.event.eventPhoto,height:"100"}})]):e._e(),e._v(" "),n("div",{staticClass:"add"},[n("UploadImage",{attrs:{folder:"events",image:e.event.eventPhoto},on:{"update:image":function(t){return e.$set(e.event,"eventPhoto",t)}}}),e._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[e._v("Event Name")]),e._v(" "),n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.event.eventName,expression:"event.eventName"}],class:{"is-invalid":e.$v.event.eventName.$error,"is-valid":!e.$v.event.eventName.$invalid},attrs:{type:"text",placeholder:"Event name"},domProps:{value:e.event.eventName},on:{input:function(t){t.target.composing||e.$set(e.event,"eventName",t.target.value)}}}),e._v(" "),e.event.eventName?n("div",{staticClass:"invalid-feedback"},[e.$v.event.eventName.required?e._e():n("span",[e._v("Event name is required")]),e._v(" "),e.$v.event.eventName.minLength?e._e():n("span",[e._v("Event name must have at least "+e._s(e.$v.event.eventName.$params.minLength.min)+" characters")])]):e._e()])]),e._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[e._v("Event Slug")]),e._v(" "),n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.event.slug,expression:"event.slug"}],class:{"is-invalid":e.$v.event.slug.$error,"is-valid":!e.$v.event.slug.$invalid},attrs:{type:"text",placeholder:"Event Slug"},domProps:{value:e.event.slug},on:{input:function(t){t.target.composing||e.$set(e.event,"slug",t.target.value)}}}),e._v(" "),e.event.slug?n("div",{staticClass:"invalid-feedback"},[e.$v.event.slug.required?e._e():n("span",[e._v("Event slug is required")])]):e._e()])]),e._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[e._v("Event Details")]),e._v(" "),n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.event.eventDetails,expression:"event.eventDetails"}],class:{"is-invalid":e.$v.event.eventDetails.$error,"is-valid":!e.$v.event.eventDetails.$invalid},attrs:{type:"text",placeholder:"Event Type"},domProps:{value:e.event.eventDetails},on:{input:function(t){t.target.composing||e.$set(e.event,"eventDetails",t.target.value)}}}),e._v(" "),e.event.eventDetails?n("div",{staticClass:"invalid-feedback"},[e.$v.event.eventDetails.required?e._e():n("span",[e._v("Event details is required")]),e._v(" "),e.$v.event.eventDetails.minLength?e._e():n("span",[e._v("Event details must have at least "+e._s(e.$v.event.eventDetails.$params.minLength.min)+" characters")])]):e._e()])]),e._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[e._v("Event Type")]),e._v(" "),n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.event.eventType,expression:"event.eventType"}],class:{"is-invalid":e.$v.event.eventType.$error,"is-valid":!e.$v.event.eventType.$invalid},attrs:{type:"text",placeholder:"Event Type"},domProps:{value:e.event.eventType},on:{input:function(t){t.target.composing||e.$set(e.event,"eventType",t.target.value)}}}),e._v(" "),e.event.eventType?n("div",{staticClass:"invalid-feedback"},[e.$v.event.eventType.required?e._e():n("span",[e._v("Event type is required")])]):e._e()])]),e._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[e._v("Event Date")]),e._v(" "),n("div",{staticClass:"control"},[n("v-date-picker",{attrs:{"first-day-of-week":1},model:{value:e.event.eventDate,callback:function(t){e.$set(e.event,"eventDate",t)},expression:"event.eventDate"}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.event.eventDate,expression:"event.eventDate"}],class:{"is-invalid":e.$v.event.eventDate.$error,"is-valid":!e.$v.event.eventDate.$invalid},attrs:{type:"hidden",placeholder:"Event Date"},domProps:{value:e.event.eventDate},on:{input:function(t){t.target.composing||e.$set(e.event,"eventDate",t.target.value)}}}),e._v(" "),e.event.eventDate?n("div",{staticClass:"invalid-feedback"},[e.$v.event.eventDate.required?e._e():n("span",[e._v("Event date is required")])]):e._e()],1)]),e._v(" "),n("v-row",{attrs:{justify:"space-around",align:"center"}},[n("v-col",{staticStyle:{width:"350px",flex:"0 1 auto"}},[n("h2",[e._v("Start:")]),e._v(" "),n("v-time-picker",{model:{value:e.event.eventTimeStart,callback:function(t){e.$set(e.event,"eventTimeStart",t)},expression:"event.eventTimeStart"}})],1),e._v(" "),n("v-col",{staticStyle:{width:"350px",flex:"0 1 auto"}},[n("h2",[e._v("End:")]),e._v(" "),n("v-time-picker",{model:{value:e.event.eventTimeEnd,callback:function(t){e.$set(e.event,"eventTimeEnd",t)},expression:"event.eventTimeEnd"}})],1)],1),e._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[e._v("Event Time Start")]),e._v(" "),n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.event.eventTimeStart,expression:"event.eventTimeStart"}],class:{"is-invalid":e.$v.event.eventTimeStart.$error,"is-valid":!e.$v.event.eventTimeStart.$invalid},attrs:{type:"text",placeholder:"Event Time Start"},domProps:{value:e.event.eventTimeStart},on:{input:function(t){t.target.composing||e.$set(e.event,"eventTimeStart",t.target.value)}}}),e._v(" "),e.event.eventTimeStart?n("div",{staticClass:"invalid-feedback"},[e.$v.event.eventTimeStart.required?e._e():n("span",[e._v("Event time start is required")])]):e._e()])]),e._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[e._v("Event Time End")]),e._v(" "),n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.event.eventTimeEnd,expression:"event.eventTimeEnd"}],class:{"is-invalid":e.$v.event.eventTimeEnd.$error,"is-valid":!e.$v.event.eventTimeEnd.$invalid},attrs:{type:"text",placeholder:"Event Time End"},domProps:{value:e.event.eventTimeEnd},on:{input:function(t){t.target.composing||e.$set(e.event,"eventTimeEnd",t.target.value)}}}),e._v(" "),e.event.eventTimeEnd?n("div",{staticClass:"invalid-feedback"},[e.$v.event.eventTimeEnd.required?e._e():n("span",[e._v("Event date is required")])]):e._e()])]),e._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[e._v("Event Photo")]),e._v(" "),n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.event.eventPhoto,expression:"event.eventPhoto"}],class:{"is-invalid":e.$v.event.eventPhoto.$error,"is-valid readonly":!e.$v.event.eventPhoto.$invalid},attrs:{type:"text",readonly:"",placeholder:"Event Photo"},domProps:{value:e.event.eventPhoto},on:{input:function(t){t.target.composing||e.$set(e.event,"eventPhoto",t.target.value)}}}),e._v(" "),e.event.eventPhoto?n("div",{staticClass:"invalid-feedback"},[e.$v.event.eventPhoto.required?e._e():n("span",[e._v("Event photo is required")])]):e._e()])]),e._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[e._v("Event Cost")]),e._v(" "),n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.event.eventCost,expression:"event.eventCost"}],class:{"is-invalid":e.$v.event.eventCost.$error,"is-valid":!e.$v.event.eventCost.$invalid},attrs:{type:"text",placeholder:"Event Cost"},domProps:{value:e.event.eventCost},on:{input:function(t){t.target.composing||e.$set(e.event,"eventCost",t.target.value)}}}),e._v(" "),e.event.eventCost?n("div",{staticClass:"invalid-feedback"},[e.$v.event.eventCost.required?e._e():n("span",[e._v("Event cost is required")])]):e._e()])]),e._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[e._v("Venue")]),e._v(" "),n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.venue_id,expression:"venue_id"}],staticClass:"is-valid readonly",attrs:{type:"number",readonly:"",placeholder:"Venue"},domProps:{value:e.venue_id},on:{input:function(t){t.target.composing||(e.venue_id=t.target.value)}}})])]),e._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[e._v("Live")]),e._v(" "),n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.event.is_live,expression:"event.is_live"}],attrs:{type:"checkbox",placeholder:"Live"},domProps:{checked:Array.isArray(e.event.is_live)?e._i(e.event.is_live,null)>-1:e.event.is_live},on:{change:function(t){var n=e.event.is_live,v=t.target,r=!!v.checked;if(Array.isArray(n)){var o=e._i(n,null);v.checked?o<0&&e.$set(e.event,"is_live",n.concat([null])):o>-1&&e.$set(e.event,"is_live",n.slice(0,o).concat(n.slice(o+1)))}else e.$set(e.event,"is_live",r)}}})])]),e._v(" "),e.showNotification?n("div",{staticClass:"notification is-success is-light"},[n("button",{staticClass:"delete",on:{click:function(t){return e.closeNotification()}}}),e._v("\n                "+e._s(e.successMessage)+"\n            ")]):e._e(),e._v(" "),this.$route.params.event?n("input",{staticClass:"button secondary",attrs:{type:"submit"},domProps:{value:this.title},on:{click:e.editEvent}}):n("input",{staticClass:"button secondary",attrs:{type:"submit"},domProps:{value:this.title},on:{click:e.addNewEvent}})],1)],1):e._e()])}),[],!1,null,"4ac03aa6",null);t.default=component.exports;C()(component,{UploadImage:n(559).default}),C()(component,{VCol:x.a,VDatePicker:y.a,VRow:$.a,VTimePicker:E.a})},736:function(e,t,n){"use strict";n.r(t);var v={},r=n(85),component=Object(r.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("LayoutNavbar"),e._v(" "),n("VenuesSearch",{attrs:{venueSearch:e.venueSearch}}),e._v(" "),n("EventsForm"),e._v(" "),n("LayoutFooter")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{LayoutNavbar:n(556).default,VenuesSearch:n(612).default,EventsForm:n(597).default,LayoutFooter:n(557).default})}}]);