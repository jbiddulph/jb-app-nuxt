(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{549:function(t,n,e){var content=e(553);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(74).default)("5578cc91",content,!0,{sourceMap:!1})},551:function(t,n,e){t.exports=e.p+"img/logo.b64fdbc.png"},552:function(t,n,e){"use strict";e(549)},553:function(t,n,e){var r=e(73)((function(i){return i[1]}));r.push([t.i,'/*purgecss start ignore*/\n.start[data-v-b9b561a2]{\n  margin-top:40px!important\n}\n.container[data-v-b9b561a2]{\n  max-width:1140px;\n  margin:0 auto\n}\nh1[data-v-b9b561a2]{\n  font-size:2.3rem;\n  font-weight:700\n}\nh2[data-v-b9b561a2]{\n  font-size:1.6rem;\n  line-height:28px\n}\n.v-date-picker-table.v-btn.v-btn--active[data-v-b9b561a2]{\n  color:#8c0099!important\n}\nh1[data-v-b9b561a2],h2[data-v-b9b561a2],h3[data-v-b9b561a2],h4[data-v-b9b561a2],h5[data-v-b9b561a2],h6[data-v-b9b561a2]{\n  font-family:"Raleway",sans-serif\n}\nbody[data-v-b9b561a2]{\n  font-family:"Montserrat",sans-serif\n}\n.navbar-brand a[data-v-b9b561a2]{\n  padding:0!important\n}\n.navbar-brand a img[data-v-b9b561a2]{\n  max-height:3rem!important\n}\n.main-menu[data-v-b9b561a2]{\n  display:flex;\n  flex-direction:column\n}\n.nav-bar-holder[data-v-b9b561a2]{\n  height:36px\n}\n\n/*purgecss end ignore*/',""]),r.locals={},t.exports=r},556:function(t,n,e){"use strict";e.r(n);e(38),e(29),e(27),e(63),e(26),e(64);var r=e(20),v=e(2),o=(e(49),e(65));function c(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}var d={props:{username:String,loggedIn:Boolean},data:function(){return{token:{},showNav:!1}},methods:{logout:function(){var t=this;return Object(v.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$auth.logout();case 2:case"end":return n.stop()}}),n)})))()}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(n){Object(r.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}({},Object(o.c)({isAuthenticated:"auth/isAuthenticated",loggedInUser:"auth/loggedInUser"}))},l=(e(552),e(85)),component=Object(l.a)(d,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"nav-bar-holder is-paddingless"},[r("nav",{class:t.isAuthenticated?"navbar is-warning is-fixed-top":"navbar is-light is-fixed-top"},[r("div",{staticClass:"navbar-brand"},[r("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/"}},[r("img",{attrs:{src:e(551),alt:"Logo"}})]),t._v(" "),r("div",{staticClass:"navbar-burger",class:{"is-active":t.showNav},attrs:{"data-target":"navMenu"},on:{click:function(n){t.showNav=!t.showNav}}},[r("span"),t._v(" "),r("span"),t._v(" "),r("span")])],1),t._v(" "),r("div",{staticClass:"navbar-menu",class:{"is-active":t.showNav},attrs:{id:"navMenu"}},[r("div",{staticClass:"navbar-start"},[t.isAuthenticated?t._e():r("div",{staticClass:"main-menu"},[r("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v("Home")]),t._v(" "),r("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/events"}},[t._v("Events")]),t._v(" "),r("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/venues"}},[t._v("Venues")])],1),t._v(" "),t.isAuthenticated?r("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[r("a",{staticClass:"navbar-link"},[t._v("\n            Events\n          ")]),t._v(" "),r("div",{staticClass:"navbar-dropdown"},[r("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/admin/events/add"}},[t._v("Add Event")]),t._v(" "),r("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/admin/events"}},[t._v("Events")])],1)]):t._e(),t._v(" "),t.isAuthenticated?r("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[r("a",{staticClass:"navbar-link"},[t._v("\n            Venues\n          ")]),t._v(" "),r("div",{staticClass:"navbar-dropdown"},[r("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/admin/venues/add"}},[t._v("Add Venue")]),t._v(" "),r("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/admin/venues"}},[t._v("Venues")])],1)]):t._e(),t._v(" "),t.isAuthenticated?r("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[r("a",{staticClass:"navbar-link"},[t._v("\n            Users\n          ")]),t._v(" "),r("div",{staticClass:"navbar-dropdown"},[r("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/admin/users/add"}},[t._v("Add User")]),t._v(" "),r("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/admin/users"}},[t._v("Users")])],1)]):t._e()]),t._v(" "),r("div",{staticClass:"navbar-end"},[r("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[r("a",{staticClass:"navbar-link"},[t._v("\n            Admin\n          ")]),t._v(" "),t.isAuthenticated?r("div",{staticClass:"navbar-dropdown"},[r("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/auth/user"}},[t._v(t._s(t.loggedInUser.name))]),t._v(" "),r("a",{staticClass:"navbar-item has-text-danger",on:{click:t.logout}},[t._v("Logout")])],1):r("div",{staticClass:"navbar-dropdown"},[r("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/auth/register"}},[t._v("Register")]),t._v(" "),r("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/auth/login"}},[t._v("Log In")])],1)])])])])])}),[],!1,null,"b9b561a2",null);n.default=component.exports}}]);