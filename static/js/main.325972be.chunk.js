(this["webpackJsonpreview-list"]=this["webpackJsonpreview-list"]||[]).push([[0],{47:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n.n(c),a=n(20),o=n.n(a),r=n(7),i=n(9),u=n(10),l=n(3),d=n.n(l),j=n(21),b=n(22),f=n(23),p=n.n(f),O=function(){function e(){Object(j.a)(this,e)}return Object(b.a)(e,null,[{key:"getAll",value:function(){var e=Object(r.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("https://jsonplaceholder.typicode.com/todos");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()}]),e}(),h=(n(47),n(0)),m=function(e){var t=e.addTodo,n=e.messageList,c=e.deleteTodo;return Object(h.jsxs)("div",{className:"b-todo-list",children:[Object(h.jsx)(x,{}),Object(h.jsx)(v,{addTodo:t}),Object(h.jsx)(g,{messageList:n,deleteTodo:c})]})},x=function(){return Object(h.jsx)("div",{className:"header",children:Object(h.jsx)("h2",{children:"Todo List"})})},v=function(e){var t=e.addTodo,n=s.a.useState(""),c=Object(u.a)(n,2),a=c[0],o=c[1];return Object(h.jsxs)("div",{className:"form",children:[Object(h.jsx)("input",{className:"form__input",type:"text",value:a,onChange:function(e){o(e.target.value)}}),Object(h.jsx)("button",{className:"form__submit",onClick:function(e){t(a),o("")},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})},g=function(e){var t=e.messageList,n=e.deleteTodo;return Object(h.jsx)("ol",{className:"todolist",children:t.map((function(e,t){return Object(h.jsx)(T,{message:e,deleteTodo:n},t)}))})},T=function(e){var t=e.message,n=e.deleteTodo;return Object(h.jsxs)("li",{className:"todo",children:[Object(h.jsx)("span",{className:"todo__label",children:t.title+"  "}),Object(h.jsx)("button",{className:"todo__delete",onClick:function(e){n(t)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})},N=function(){var e=s.a.useState([]),t=Object(u.a)(e,2),n=t[0],c=t[1],a=s.a.useState(!0),o=Object(u.a)(a,2),l=o[0],j=o[1];function b(){return(b=Object(r.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.getAll();case 2:t=e.sent,c(t.slice(0,10));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return s.a.useEffect((function(){j(!0),function(){b.apply(this,arguments)}(),j(!1)}),[]),Object(h.jsx)("div",{id:"app",children:l?Object(h.jsx)("h2",{children:"\u0418\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}):Object(h.jsx)(m,{addTodo:function(e){c([].concat(Object(i.a)(n),[{title:e}]))},messageList:n,deleteTodo:function(e){var t=n.indexOf(e);c([].concat(Object(i.a)(n.slice(0,t)),Object(i.a)(n.slice(t+1))))}})})};n(49);o.a.render(Object(h.jsx)(N,{}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.325972be.chunk.js.map