(this.webpackJsonptdd_tutorial=this.webpackJsonptdd_tutorial||[]).push([[0],{49:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),s=n(4),a=n.n(s),u=n(5),o=n(3),i=n(17),d=n(18),j="STORE_RESTAURANTS",b=function(t){return{type:j,records:t}},l=Object(o.combineReducers)({records:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case j:return e.records;default:return t}}}),h=Object(o.combineReducers)({restaurants:l}),f=n(19),O=n.n(f).a.create({baseURL:"https://outside-in-dev-api.herokuapp.com/L0zDUEygBcByT1fkNYho28skt5Cey7pv"}),p={loadRestaurants:function(){return O.get("/restaurants").then((function(t){return t.data}))}},R=Object(o.createStore)(h,Object(o.compose)(Object(o.applyMiddleware)(i.a.withExtraArgument(p)),Object(d.devToolsEnhancer)())),x=n(1),m={loadRestaurants:function(){return function(t,e,n){n.loadRestaurants().then((function(e){t(b(e))}))}}},v=Object(u.b)((function(t){return{restaurants:t.restaurants.records}}),m)((function(t){var e=t.loadRestaurants,n=t.restaurants;return Object(r.useEffect)((function(){e()}),[e]),Object(x.jsx)("ul",{children:n.map((function(t){return Object(x.jsx)("li",{children:t.name},t.id)}))})})),y=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"Restaurants"}),Object(x.jsx)(v,{})]})},E=function(){return Object(x.jsx)(u.a,{store:R,children:Object(x.jsx)(y,{})})};a.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(E,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.8f674e56.chunk.js.map