(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(8),r=n.n(a),i=n(5),s=n(2),u=n(0),o=function(t){var e=t.setcategories,n=Object(c.useState)(""),a=Object(s.a)(n,2),r=a[0],o=a[1];return Object(u.jsx)("div",{children:Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),r.trim().length>2&&(e((function(t){return[r].concat(Object(i.a)(t))})),o(""))},children:Object(u.jsx)("input",{placeholder:"Pon aca la categoria",value:r,onChange:function(t){o(t.target.value)}})})})},j=n(10),d=n(7),b=n.n(d),l=n(9),f=function(){var t=Object(l.a)(b.a.mark((function t(e){var n,c,a,r,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=ZrR5taLJr2dVpSSffkAAXBtoh2HQDevR"),t.next=3,fetch(n);case 3:return c=t.sent,t.next=6,c.json();case 6:return a=t.sent,r=a.data,i=r.map((function(t){return{id:t.id,title:t.title,url:t.images.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(t){t.id;var e=t.title,n=t.url;return Object(u.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(u.jsx)("img",{src:n,alt:e}),Object(u.jsx)("p",{children:e})]})},O=function(t){var e=t.category,n=function(t){var e=Object(c.useState)({data:[],loading:!0}),n=Object(s.a)(e,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){f(t).then((function(t){r({data:t,loading:!1})}))}),[t]),a}(e),a=n.data,r=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{children:e}),r&&Object(u.jsx)("p",{children:"Loading..."}),Object(u.jsx)("div",{className:"card-grid",children:a.map((function(t){return Object(u.jsx)(p,Object(j.a)({},t),t.id)}))})]})},h=function(){var t=Object(c.useState)([]),e=Object(s.a)(t,2),n=e[0],a=e[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"GiftExpertApp"}),Object(u.jsx)("hr",{}),Object(u.jsx)("button",{onClick:function(){a([].concat(Object(i.a)(n),["Nueva Categoria"]))},children:"Add"}),Object(u.jsx)(o,{setcategories:a}),n.map((function(t,e){return Object(u.jsx)(O,{category:t},e)}))]})};n(17);r.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.8a574a54.chunk.js.map