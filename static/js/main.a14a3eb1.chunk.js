(this["webpackJsonpibge-search-name"]=this["webpackJsonpibge-search-name"]||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(13)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),c=n.n(o),u=(n(10),n(1)),l=n.n(u),s=n(2);n(12);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement((function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)([]),u=Object(s.a)(c,2),i=u[0],m=u[1],p=Object(a.useRef)(null);Object(a.useEffect)((function(){p.current.focus()}),[]);var f=function(e){var t,n;return l.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,l.a.awrap(fetch("https://servicodados.ibge.gov.br/api/v2/censos/nomes/".concat(e),{headers:{accept:"application/json"}}));case 2:return t=a.sent,a.next=5,l.a.awrap(t.json());case 5:return n=a.sent,a.abrupt("return",n);case 7:case"end":return a.stop()}}))};Object(a.useEffect)((function(){var e=!0,t=new AbortController;return function(){var t;l.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(n){a.next=2;break}return a.abrupt("return",m([]));case 2:if(!e){a.next=7;break}return a.next=5,l.a.awrap(f(n));case 5:t=a.sent,m(t);case 7:case"end":return a.stop()}}))}(),function(){e=!1,t.abort()}}),[n]);var d=i.map((function(e){return e.res.map((function(e,t){var n=e.periodo.replace(/[[]/g,"").replace(",","-"),a="".concat(e.frequencia," ","nomes registrados");return r.a.createElement("tr",{key:t},r.a.createElement("td",null,n)," ",r.a.createElement("td",null,a))}))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("h1",null,"Meu nome \xe9 popular?"),r.a.createElement("p",null,"Saiba se o seu nome j\xe1 foi ou \xe9 popular durante algum per\xedodo no Brasil de acordo com os dados extra\xeddos do IBGE")),r.a.createElement("form",null,r.a.createElement("input",{placeholder:"Digite o seu nome ou qualquer outro que queira pesquisar",ref:p,onChange:function(e){return o(e.target.value)},value:n})),r.a.createElement("table",null,n.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Per\xedodo"),r.a.createElement("th",null,"Frequ\xeancia"))),r.a.createElement("tbody",null,d.length>0?d:r.a.createElement("tr",{className:"not-found"},"Nenhuma informa\xe7\xe3o encontrada")))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[5,1,2]]]);
//# sourceMappingURL=main.a14a3eb1.chunk.js.map