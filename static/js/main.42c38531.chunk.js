(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/machine-learning.f07e5eab.svg"},21:function(e,t,a){e.exports=a(34)},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),c=a.n(r),i=a(9),o=a(1),s=a(11),m=a.n(s),u=a(3),h=a(17),d=a(20),p={siteTitle:"Starmap SVG Generator",siteTitleShort:"Starmap Generator",siteTitleAlt:"",email:"",siteLogo:"",siteUrl:"",pathPrefix:"",dateFromFormat:"",dateFormat:"",googleAnalyticsID:"",siteDescription:"",menuLinks:[{name:"Home",link:"/"},{name:"About",link:"/about/"}]};"/"===p.pathPrefix?p.pathPrefix="":p.pathPrefix="/".concat(p.pathPrefix.replace(/^\/|\/$/g,"")),"/"===p.siteUrl.substr(-1)&&(p.siteUrl=p.siteUrl.slice(0,-1));var g=p,v=a(18),E=a.n(v).a,f=function(e){var t=e.menuLinks;return l.a.createElement("div",{className:"hero-head",style:{background:"#00d1b2"}},l.a.createElement("div",{className:"container"},l.a.createElement("nav",{className:"navbar is-primary",role:"navigation","aria-label":"main navigation"},l.a.createElement("div",{className:"navbar-brand"},l.a.createElement(i.b,{className:"navbar-item narvbar-icon",to:"/"},l.a.createElement("img",{src:E,width:"48",height:"75",alt:"logo"})),t.map((function(e,t){return l.a.createElement(i.b,{key:t,style:{fontSize:0===t?"1.25rem":"1rem"},className:"navbar-item has-text-white is-hovered has-text-weight-semibold",to:e.link},e.name)}))))))},b=function(){return l.a.createElement("footer",{className:"footer has-background-black",style:{padding:"2.5rem 0.75rem"}},l.a.createElement("div",{className:"content has-text-centered"},l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column is-11 is-offset-1 has-text-left has-text-white"},l.a.createElement("p",null,"\xa9 ",(new Date).getFullYear()," ",l.a.createElement("a",{href:"#!"},"Starmap Generator"))))))},N=function(e){var t=e.children;e.title;return l.a.createElement(l.a.Fragment,null,l.a.createElement(f,{menuLinks:g.menuLinks}),t,l.a.createElement(b,null))},w=function(){var e=l.a.useState({lat:0,lng:0,date:k(void 0),time:y(),height:0,width:0,starmap_link:"https://bulma.io/images/placeholders/640x480.png"}),t=Object(d.a)(e,2),a=t[0],n=t[1],r=function(){var e=Object(h.a)(m.a.mark((function e(t){var l,r,c,i,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(l="http://3.15.194.121/api/starmap")+"?"+t,e.next=4,fetch(r);case 4:return c=e.sent,e.next=7,c.json();case 7:i=e.sent,console.log(i),o=l+"/"+i.link,n(Object(u.a)(Object(u.a)({},a),{},{starmap_link:o}));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return console.log(a),l.a.createElement(N,null,l.a.createElement("div",{className:"section hero-body"},l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column is-two-thirds"},l.a.createElement("div",{className:""},l.a.createElement("img",{src:a.starmap_link,className:"image",alt:"starmap"}))),l.a.createElement("div",{className:"column"},l.a.createElement("div",null,l.a.createElement("label",null,"Location"),l.a.createElement("div",{className:"columns is-mobile"},l.a.createElement("div",{className:"column is-half"},l.a.createElement("input",{type:"number",className:"input",placeholder:"latitude",onChange:function(e){return n(Object(u.a)(Object(u.a)({},a),{},{lat:parseFloat(e.target.value)}))}})),l.a.createElement("div",{className:"column is-half"},l.a.createElement("input",{type:"number",className:"input",placeholder:"longitude",onChange:function(e){return n(Object(u.a)(Object(u.a)({},a),{},{lng:parseFloat(e.target.value)}))}})))),l.a.createElement("div",null,l.a.createElement("label",null,"Date"),l.a.createElement("input",{type:"date",className:"input",defaultValue:a.date,onChange:function(e){return n(Object(u.a)(Object(u.a)({},a),{},{date:(t=e.target.valueAsDate,null===t?"":k(t))}));var t}})),l.a.createElement("div",null,l.a.createElement("label",null,"Time"),l.a.createElement("input",{type:"time",className:"input",defaultValue:a.time,onChange:function(e){return n(Object(u.a)(Object(u.a)({},a),{},{time:e.target.value}))}})),l.a.createElement("div",null,l.a.createElement("label",null,"Design Dimensions"),l.a.createElement("div",{className:"columns is-mobile"},l.a.createElement("div",{className:"column is-half"},l.a.createElement("input",{type:"number",className:"input",placeholder:"width",onChange:function(e){return n(Object(u.a)(Object(u.a)({},a),{},{width:parseInt(e.target.value)}))}})),l.a.createElement("div",{className:"column is-half"},l.a.createElement("input",{type:"number",className:"input",placeholder:"height",onChange:function(e){return n(Object(u.a)(Object(u.a)({},a),{},{height:parseInt(e.target.value)}))}})))),l.a.createElement("div",{style:{marginTop:"0.5rem"}},l.a.createElement("button",{className:"button has-background-primary",onClick:function(){return function(){console.log(a);var e=a.lat,t=a.lng,n=a.date,l=a.time,c=a.height,i=a.width,o=j(n),s=x(l),m="lat=".concat(e,"&lng=").concat(t,"&date=").concat(o,"&time=").concat(s,"&height=").concat(c,"&width=").concat(i);r(m)}()}},"Generate Starmap"))))))},k=function(e){var t=e||new Date,a=t.getDate(),n=t.getMonth()+1;return t.getFullYear()+"-"+(n<10?"0"+n:n)+"-"+(a<10?"0"+a:a)},y=function(){var e=new Date,t=e.getHours(),a=e.getMinutes();return(t<9?"0"+t:t)+":"+(a<9?"0"+a:a)},j=function(e){var t=e.split("-");return"".concat(t[2],".").concat(t[1],".").concat(t[0])},x=function(e){return e.replace(":",".")+".00"},O=function(){return l.a.createElement(N,null,l.a.createElement("div",{className:"section hero-body"},l.a.createElement("div",{className:"container",style:{marginTop:20}},l.a.createElement("div",{className:"columns is-centered"},l.a.createElement("div",{className:"column is-half content"},l.a.createElement("h1",null,"Starmap SVG Generator"))))))},D=function(){return l.a.createElement(i.a,null,l.a.createElement(o.c,null,l.a.createElement(o.a,{exact:!0,path:"/",component:w}),l.a.createElement(o.a,{path:"/home",component:w}),l.a.createElement(o.a,{path:"/about",component:O})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(32),a(33);c.a.render(l.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.42c38531.chunk.js.map