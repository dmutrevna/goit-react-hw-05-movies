"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[502],{502:function(n,t,e){e.r(t),e.d(t,{default:function(){return d}});var r,a=e(9439),c=(e(2791),e(7689)),u=e(9364),i=e(3040),o=e(442),s=e(168),p=e(6444).ZP.ul(r||(r=(0,s.Z)(["\n  display: grid;\n  max-width: calc(100vw - 10px);\n  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n  grid-gap: 25px;\n  margin-top: 25px;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n"]))),f=e(184),d=function(){var n=(0,c.UO)().movieId,t=(0,i.i)(u.xc,n),e=(0,a.Z)(t,1)[0];return 0===e.length?(0,f.jsx)("p",{children:"We don`t have any casts for this movie."}):(0,f.jsx)("div",{children:(0,f.jsx)(p,{children:e&&e.map((function(n){return(0,f.jsxs)("li",{children:[(0,f.jsx)("img",{src:n.profile_path?"https://image.tmdb.org/t/p/w500/".concat(n.profile_path):"".concat(o),alt:n.name,width:"150",height:"225"}),(0,f.jsx)("p",{children:n.name}),(0,f.jsxs)("p",{children:["Character: ",n.character]})]},n.id)}))})})}},9364:function(n,t,e){e.d(t,{Hx:function(){return d},Y5:function(){return h},bI:function(){return p},wr:function(){return s},xc:function(){return f}});var r=e(5861),a=e(7757),c=e.n(a),u=e(1243),i="10f2241cb45b19eefbefaa60e9f9bf26",o="https://api.themoviedb.org/3",s=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/trending/movie/day"),{params:{api_key:i}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/search/movie"),{params:{api_key:i,query:t,include_adult:!1,page:1,language:"en-US"}});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/movie/").concat(t,"/credits"),{params:{api_key:i,language:"en-US"}});case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/movie/").concat(t,"/reviews"),{params:{api_key:i,language:"en-US"}});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/movie/").concat(t),{params:{api_key:i,language:"en-US"}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},3040:function(n,t,e){e.d(t,{i:function(){return u}});var r=e(9439),a=e(2791),c=e(7596),u=function(n,t){var e=(0,a.useState)([]),u=(0,r.Z)(e,2),i=u[0],o=u[1];return(0,a.useEffect)((function(){n(t).then((function(n){return o(n)})).catch((function(){return c.Am.error("Something went wrong!")}))}),[n,t]),[i,o]}},442:function(n,t,e){n.exports=e.p+"static/media/image_not_found.4e0f6434aa23eeba313a.jpg"}}]);
//# sourceMappingURL=502.5b757619.chunk.js.map