(this.webpackJsonptravel_memory_card=this.webpackJsonptravel_memory_card||[]).push([[0],{33:function(e,t,a){e.exports=a(74)},38:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){},59:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(16),l=a.n(r),o=a(7),i=(a(38),a(9)),u=a(1),s=(a(39),Object(n.forwardRef)((function(e,t){var a=Object(n.useState)(!1),r=Object(u.a)(a,2),o=r[0],i=r[1];Object(n.useImperativeHandle)(t,(function(){return{openModal:function(){return s()},closeModal:function(){return m()}}}));var s=function(){return i(!0)},m=function(){return i(!1)};return o?l.a.createPortal(c.a.createElement("div",{className:"modal-wrapper"},c.a.createElement("div",{onClick:m,className:"modal-backdrop"}),c.a.createElement("div",{className:"modal-box"},e.children)),document.getElementById("modal-root")):null}))),m=a(8),f=a.n(m),d=a(11),p=(a(41),function(e){var t=e.onChange,a=e.onKeyDown,n=e.userInput,r=e.suggestionsListComponent;return c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{type:"text",onChange:t,onKeyDown:a,value:n}),r)}),b=a(12),h=a.n(b),E=(a(59),function(e){var t=e.restart,a=Object(n.useState)([]),r=Object(u.a)(a,2),l=r[0],i=r[1],s=Object(n.useState)([]),m=Object(u.a)(s,2),b=m[0],E=m[1],g=Object(n.useState)(""),y=Object(u.a)(g,2),v=y[0],j=y[1],O=Object(n.useState)(!1),C=Object(u.a)(O,2),w=C[0],N=C[1],k=Object(n.useState)(0),S=Object(u.a)(k,2),x=S[0],L=S[1],q=Object(n.useState)([]),M=Object(u.a)(q,2),I=M[0],T=M[1],D=Object(n.useState)(!1),F=Object(u.a)(D,2),G=F[0],P=F[1],R=Object(n.useState)(""),K=Object(u.a)(R,2),_=K[0],B=K[1],H=function(){var e=Object(d.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h()("https://api.windy.com/api/webcams/v2/list?show=countries",{params:{key:"v86LqZILmLPm1rCHTj4eDCcDGKc3Fveq"}});case 2:t=e.sent,a=t.data.result.countries.map((function(e){return e})),i(a.map((function(e){return e.name}))),E(a.map((function(e){return e.id}))),N(!w);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){H()}),[]);var A,J=function(e){L(0),T([]),P(!0),B(e.currentTarget.innerText)};return G&&""!==_&&(A=I.length?c.a.createElement("ul",{className:"suggestions"},I.map((function(e,t){var a;return t===x&&(a="suggestion-active"),c.a.createElement("li",{className:a,key:e,onClick:J},e)}))):c.a.createElement("div",{className:"no-suggestions"},c.a.createElement("em",null,"If it doesn't match to the country, you get on your own!"))),c.a.createElement("div",null,c.a.createElement("form",null,c.a.createElement("label",{className:"search-text"},"Which country do you want to travel to?"),c.a.createElement(p,{onChange:function(e){B(e.currentTarget.value),T(l.filter((function(e){return e.toLowerCase().indexOf(_.toLowerCase())>-1}))),L(0),P(!0),B(e.currentTarget.value)},onKeyDown:function(e){if(13===e.keyCode)L(0),P(!1),B(I[x]);else if(38===e.keyCode){if(0===x)return;L(x-1)}else if(40===e.keyCode){if(x-1===I.length)return;L(x+1)}},userInput:_,suggestionsListComponent:A}),c.a.createElement("h4",null,"Choose a category"),c.a.createElement("div",{className:"cat-container"},[{type:"food",img:"/img/food.jpg"},{type:"nature",img:"/img/nature.jpg"},{type:"places",img:"/img/places.jpg"},{type:"travel",img:"/img/travel.jpg"},{type:"beach",img:"/img/beach.jpg"},{type:"mountain",img:"/img/moutain.jpg"}].map((function(e,t){return c.a.createElement("div",{onClick:function(){return j(e.type)},className:"cat",key:t,type:e.type},c.a.createElement("p",{className:"cat-type ".concat(v===e.type&&"selected-filter")},e.type),c.a.createElement("img",{className:"cat-img",src:e.img,alt:e.type}))}))),c.a.createElement(o.b,{activeClassName:"active",exact:!0,to:{pathname:"/mainpage",query2:v,query1:_,idCountries:b,nameCountry:l}},c.a.createElement("button",{className:"start-btn setting-btn",onClick:t},"Start game"))))}),g=(a(65),function(){var e=Object(n.useRef)();return c.a.createElement("div",{className:"landingPage"},c.a.createElement("div",{className:"landing-text"},c.a.createElement("h1",{className:"memory-travel"},"Travel Memory Game"),c.a.createElement("button",{className:"button-enter",onClick:function(){return e.current.openModal()}},"Enter")),c.a.createElement(s,{ref:e},c.a.createElement("h1",null,"New Game"),c.a.createElement("button",{className:"close-btn",onClick:function(){return e.current.closeModal()}},"X"),c.a.createElement(E,null)))}),y=a(15),v=(a(66),function(e){var t=e.solved,a=e.disabled,n=e.handleClick,r=e.id,l=e.flipped,o=e.height,i=e.width,u=e.type;return c.a.createElement("div",{className:"flip-container ".concat(l?"flipped":""),style:{width:i,height:o},onClick:function(){return a?null:n(r)}},c.a.createElement("div",{className:"flipper"},c.a.createElement("img",{style:{height:o,width:i},className:l?"front":"back",src:l||t?u:"/img/plane.jpg",alt:"memory"})))}),j=(a(67),function(e){var t=e.solved,a=e.disabled,n=e.cards,r=e.flipped,l=e.handleClick;return c.a.createElement("div",{className:"board"},n.map((function(e){return c.a.createElement(v,{key:e.id,id:e.id,type:e.type,height:180,width:256,flipped:r.includes(e.id),solved:t.includes(e.id),handleClick:l,disabled:a||t.includes(e.id)})})))}),O=function(e){var t=e.counter;return c.a.createElement("div",null,c.a.createElement("h2",{style:t>40?{color:"pink"}:t>10?{color:"orange"}:{color:"red"}},0===t?"Too late!!!":"Time left: ".concat(t)))},C=(a(68),function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)([]),m=Object(u.a)(i,2),f=m[0],d=m[1],p=Object(n.useState)(!1),b=Object(u.a)(p,2),h=b[0],g=b[1],v=Object(n.useState)(60),C=Object(u.a)(v,2),w=C[0],N=C[1],k=Object(n.useState)(!1),S=Object(u.a)(k,2),x=S[0],L=S[1],q=Object(n.useState)(!1),M=Object(u.a)(q,2),I=M[0],T=M[1],D=e.shuffledCards;Object(n.useEffect)((function(){var e=w>0&&setInterval((function(){return N(w-1)}),1e3);return function(){return clearInterval(e)}}),[w]),Object(n.useEffect)((function(){F()}),[]);var F=function(){D.map((function(e){var t=e.type;return(new Image).src=t}))};Object(n.useEffect)((function(){16===f.length&&L(!0)}),[f]),Object(n.useEffect)((function(){0===w&&T(!0)}),[w]);var G=function(){l([]),g(!1)},P=function(e){return r.includes(e)},R=function(e){var t=D.find((function(t){return t.id===e}));return D.find((function(e){return r[0]===e.id})).type===t.type},K=Object(n.useRef)();return c.a.createElement("div",{className:"App"},c.a.createElement("h1",{className:"game-title"},"Flip and Match!"),c.a.createElement("h2",{style:{color:"white"}},"Your choice : ",e.query1," and ",e.query2),c.a.createElement("div",null,x?c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,'"Congratulation!" '),c.a.createElement(o.b,{exact:!0,to:{pathname:"/endpage",idCountry:e.idCountry}},c.a.createElement("button",{className:"restart-btn"},"See what you got"))):I&&c.a.createElement("h1",null,"Game Over!")),x||I?"":c.a.createElement(c.a.Fragment,null,c.a.createElement(O,{counter:w}),c.a.createElement(j,{cards:D,flipped:r,handleClick:function(e){if(g(!0),0!==r.length||r[e]){if(P(r,e))return;l([r[0],e]),R(e)?(d([].concat(Object(y.a)(f),[r[0],e])),G()):setTimeout(G,1e3)}else l([e]),g(!1)},disabled:h,solved:f})),c.a.createElement("button",{className:"restart-btn",onClick:e.restart}," Restart "),c.a.createElement("button",{className:"restart-btn",onClick:function(){return K.current.openModal()}},"Change parameters"),c.a.createElement(s,{ref:K},c.a.createElement("h1",null,"Change Parameters"),c.a.createElement("button",{className:"close-btn",onClick:function(){return K.current.closeModal()}},"X"),c.a.createElement(E,{restart:e.restart})))}),w=(a(69),function(){return c.a.createElement("div",{className:"loader"},c.a.createElement("div",{className:"dot"}),c.a.createElement("div",{className:"dot"}),c.a.createElement("div",{className:"dot"}))}),N=(a(70),function(e){var t=e.location.query1,a=e.location.query2,r=e.location.idCountries,l=e.location.nameCountry,o=Object(n.useState)([]),i=Object(u.a)(o,2),s=i[0],m=i[1],p=Object(n.useState)(!1),b=Object(u.a)(p,2),E=b[0],g=b[1],v=function(){var e=Object(d.a)(f.a.mark((function e(){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!1),e.next=3,h()("https://pixabay.com/api/",{params:{key:"16289190-97a0bc0be3bee47cca51d8097",q:"".concat(t," + ").concat(a),image_type:"photo",orientation:"horizontal"}});case 3:n=e.sent,m(j(n.data.hits).slice(0,8)),g(!0);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){v()}),[]);var j=function(e){for(var t=e.slice(0),a=0;a<e.length-1;a++){var n=Math.floor(Math.random()*(a+1)),c=t[a];t[a]=t[n],t[n]=c}return t},O=s.map((function(e,t){return{id:t,type:e.webformatURL}})),N=s.map((function(e,t){return{id:t+8,type:e.webformatURL}})),k=[].concat(Object(y.a)(O),Object(y.a)(N)),S=r[l.map((function(e){return e.toLowerCase()})).indexOf(t.toLowerCase())];return c.a.createElement("div",{className:"mainPage"},E?c.a.createElement(C,{shuffledCards:j(k),restart:v,query1:t,query2:a,idCountry:S}):c.a.createElement(w,null))}),k=(a(71),function(){return c.a.createElement("div",{className:"Footer"},c.a.createElement("p",null," Made with \u2764 by",c.a.createElement("a",{className:"marjo",href:"https://github.com/marjowolff"},"Marjolaine Baratte"),",",c.a.createElement("a",{className:"lola",href:"https://github.com/Lola-D"},"Lola Donval"),",",c.a.createElement("a",{className:"seb",href:"https://github.com/SebG-prog"},"S\xe9bastien Gruet"),",",c.a.createElement("a",{className:"lena",href:"https://github.com/Lenasim"},"Lena Hailin Sim"),",",c.a.createElement("a",{className:"claire",href:"https://github.com/clrko"},"Claire Kodia"),"&",c.a.createElement("a",{className:"ari",href:"https://github.com/ariomega"},"Aristide Ouedraogo")))}),S=(a(72),function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)(!1),s=Object(u.a)(i,2),m=s[0],p=s[1],b=e.location.idCountry,E=function(){var e=Object(d.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!1),e.next=3,h()("https://api.windy.com/api/webcams/v2/list/country=".concat(b,"/category=").concat("beach","/orderby=").concat("popularity","/limit=").concat(10,"?show=webcams:location,image,player"),{params:{key:"v86LqZILmLPm1rCHTj4eDCcDGKc3Fveq"}});case 3:t=e.sent,l(t.data.result.webcams),p(!0);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){E()}),[]),c.a.createElement("div",null,m?0!==r.length?c.a.createElement("div",null,c.a.createElement(o.b,{to:"/"},c.a.createElement("button",{className:"button-again"},"Play again?")),r.map((function(e,t){return c.a.createElement("div",{key:t},c.a.createElement("div",{id:"webcamGlobal"},c.a.createElement("div",{id:"webcamInfo"},c.a.createElement("p",null,"City: ",e.location.city),c.a.createElement("p",null,"Region: ","".concat(e.location.region," ( ").concat(e.location.country," ) ")),c.a.createElement("p",null,"Continent: ",e.location.continent),c.a.createElement("div",null,c.a.createElement("iframe",{title:e.location.city,width:"560",height:"315",src:e.player.day.embed,frameBorder:"0",allowFullScreen:!0})))))}))):c.a.createElement("h1",null,"Sorry, but there is no footage from this location :/"):c.a.createElement(w,null))}),x=(a(73),function(){return c.a.createElement("div",{className:"App"},c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/",component:g}),c.a.createElement(i.a,{path:"/mainpage",component:N}),c.a.createElement(i.a,{path:"/endpage",component:S})),c.a.createElement(k,null))});l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(o.a,null,c.a.createElement(x,null))),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.cf42260e.chunk.js.map