(this["webpackJsonprock-paper-scissors"]=this["webpackJsonprock-paper-scissors"]||[]).push([[0],[,,function(e,c,t){e.exports={component:"Components_component__lC-Cq",rock:"Components_rock__1QQUM","rock-pos-1":"Components_rock-pos-1__2uN9G",paper:"Components_paper__bnl9o","paper-pos-1":"Components_paper-pos-1__207Eq",scissors:"Components_scissors__1jNXB","scissors-pos-1":"Components_scissors-pos-1__2-6qq",container:"Components_container__1FQu1"}},,function(e,c,t){e.exports={container:"Battle_container__1uWcF",overlay:"Battle_overlay__2Bnmg",result:"Battle_result__2qnxU",lose:"Battle_lose__2xCUq",win:"Battle_win__26zK5",pick:"Battle_pick__3m0MH"}},,,function(e,c,t){e.exports={container:"HeadingScore_container__2NYy7",text:"HeadingScore_text__qZArY",score:"HeadingScore_score__2F1uh"}},function(e,c,t){e.exports={container:"RuleModal_container__EKQid",top:"RuleModal_top__2F40G",backdrop:"RuleModal_backdrop__2EwAv"}},,function(e,c,t){e.exports={heading:"Heading_heading__t_Cep",text:"Heading_text__1hq1v"}},function(e,c,t){e.exports={button:"Rule_button__3Ve-W"}},,,,,function(e,c,t){},,function(e,c,t){"use strict";t.r(c);var s=t(1),n=t.n(s),o=t(5),l=t.n(o),i=(t(16),t(6)),r=t(10),a=t.n(r),j=t(7),d=t.n(j),x=n.a.createContext({player:null,house:null,isWin:null,score:0,playerPicked:function(e){},housePicked:function(e){},judge:function(){},reset:function(){}}),p=t(0),h=function(){var e=Object(s.useContext)(x);return Object(p.jsxs)("div",{className:d.a.container,children:[Object(p.jsx)("p",{className:d.a.text,children:"Score"}),Object(p.jsx)("h4",{className:d.a.score,children:e.score})]})},b=function(){return Object(p.jsxs)("div",{className:a.a.heading,children:[Object(p.jsxs)("div",{className:a.a.text,children:[Object(p.jsx)("h1",{children:"ROCK"}),Object(p.jsx)("h1",{children:"PAPER"}),Object(p.jsx)("h1",{children:"SCISSORS"})]}),Object(p.jsx)(h,{})]})},u=t(2),O=t.n(u),f=function(e){var c=e.defaultPos?"".concat(O.a.rock," ").concat(O.a["rock-pos-1"]):"".concat(O.a.rock);return Object(p.jsx)("div",{className:c,onClick:e.onClick,children:Object(p.jsx)("div",{className:O.a.component,children:Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",children:Object(p.jsx)("path",{fill:"#3B4262",d:"M45.06 12.22c-.642-8.096-9.734-7.269-9.734-7.269-3.837-6.765-9.832-1.865-9.832-1.865-4.606-6.63-10.38-.486-10.38-.486-9.957-1.074-9.571 7.066-9.571 7.066-.234 2.588 1.403 10.593 1.403 10.593-1.477-4.614-4.68-.784-4.68-.784-3.94 6.078-.975 9.405-.975 9.405 5.33 6.246 16.688 13.743 16.688 13.743 4.113 2.356 2.373 4.457 2.373 4.457l24.876-4.11.571-4.718c3.782-11.436-.739-26.032-.739-26.032z"})})})})},_=function(e){var c=e.defaultPos?"".concat(O.a.paper," ").concat(O.a["paper-pos-1"]):"".concat(O.a.paper);return Object(p.jsx)("div",{className:c,onClick:e.onClick,children:Object(p.jsx)("div",{className:O.a.component,children:Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"59",height:"59",children:Object(p.jsx)("path",{fill:"#3B4262",d:"M47.125 11.832a2.922 2.922 0 00-1.232-.198c-.57.04-1.029.271-1.302.65-1.604 2.248-2.919 6.493-3.979 9.905-.486 1.577-1.14 3.688-1.612 4.69-.493-2.807.064-13.09.28-17.05l.003-.064c.15-2.751.17-3.234.138-3.446-.238-1.509-.843-2.5-1.799-2.943-.966-.45-2.22-.25-3.572.563-.677.41-.865 1.816-1.446 8.19l-.002.028c-.32 3.502-1.058 11.566-1.965 12.91-1.023-1.88-2.431-12.555-3.039-17.176-.425-3.236-.673-5.094-.84-5.655-.35-1.176-1.83-2.176-3.295-2.232-1.22-.06-2.22.56-2.698 1.638-.894.995-.578 4.292.41 12.102.47 3.718 1.44 11.395.83 12.257-1.219-.133-3.31-4.942-6.215-14.299-.816-2.62-1.068-3.408-1.318-3.753-.494-1.202-2.172-2.129-3.676-2.024a3.183 3.183 0 00-.377.049c-.787.156-2.584.881-2.2 4.226 1.06 4.637 2.213 8.041 3.331 11.346l.023.066c.669 1.98 1.302 3.85 1.89 5.925 1.385 4.9.846 7.94.84 7.975-.046.312-.143.503-.288.57a.556.556 0 01-.195.045c-.44.03-1.098-.26-1.437-.45-.776-1.482-4.636-8.544-8.134-9.524l-.126-.037-.127.012c-1.283.121-2.226.606-2.803 1.441-.914 1.32-.535 3.002-.444 3.34l.052.12c.028.051 2.834 5.165 3.268 7.544.374 2.04 2.311 4.25 3.869 6.026l.064.073c.508.58.946 1.083 1.292 1.548 4.519 4.713 11.665 8.677 11.723 8.71.892.657 1.387 1.293 1.44 1.84a.798.798 0 01-.16.58l-.155.162.988.96 18.853-1.324.804-3.684c2.486-10.402 1.967-19.272 1.958-19.33.01-.327.706-3.483 1.266-6.033l.017-.065c1.117-5.08 2.505-11.4 2.772-13.803.116-1.028-.542-1.972-1.675-2.401z"})})})})},y=function(e){var c=e.defaultPos?"".concat(O.a.scissors," ").concat(O.a["scissors-pos-1"]):"".concat(O.a.scissors);return Object(p.jsx)("div",{className:c,onClick:e.onClick,children:Object(p.jsx)("div",{className:O.a.component,children:Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"58",height:"58",children:Object(p.jsx)("path",{fill:"#3B4262",d:"M13.971 25.702l6.012-8.415c-2.499-.415-7.088-.507-10.846 3.235C3.212 26.421.812 39.163.312 42.248L15.37 57.24c2.711-.232 14.713-1.827 26.279-13.34.122-.249 2.94-2.321.636-4.614-1.1-1.095-2.919-1.074-4.042.044-.572.57-1.461.577-2.021.02-.56-.557-.552-1.443.02-2.012l4.087-4.069c2.076-2.067.119-5.555-2.78-4.717l-3.345 2.851c-.611.53-1.52.439-2.022-.14-.519-.597-.408-1.503.183-2.013 11.687-10.208 9.98-8.979 17.5-15.995 2.809-2.329-.725-6.447-3.493-4.09L28.182 25.45c-.529.448-1.34.457-1.86-.02-.601-.517-.615-1.262-.222-1.85L38.787 3.944c1.854-2.5-1.795-5.277-3.749-2.757L16.28 27.307c-.452.65-1.364.8-1.985.345a1.377 1.377 0 01-.323-1.95z"})})})})},m={scissors:"scissors",paper:"paper",rock:"rock"},C=function(e){var c=Object(s.useContext)(x),t=function(t){c.playerPicked(t),e.onPicked()};return Object(p.jsxs)("div",{className:O.a.container,children:[Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"305",height:"277",children:Object(p.jsx)("path",{fill:"none",stroke:"#000",strokeWidth:"15",d:"M291.5 7.5H4.574c3.119 0 52.416 84.667 147.892 254L291.5 7.5z",opacity:".2"})}),Object(p.jsx)(f,{defaultPos:!0,onClick:t.bind(null,m.rock)}),Object(p.jsx)(_,{defaultPos:!0,onClick:t.bind(null,m.paper)}),Object(p.jsx)(y,{defaultPos:!0,onClick:t.bind(null,m.scissors)})]})},k=t(11),g=t.n(k),v=function(e){return Object(p.jsx)("button",{className:g.a.button,type:"button",onClick:e.onClick,children:"Rules"})},w=t(8),B=t.n(w),E=function(){return Object(p.jsx)("div",{className:B.a.backdrop})},P=function(e){return Object(p.jsxs)("div",{className:B.a.container,children:[Object(p.jsxs)("div",{className:B.a.top,children:[Object(p.jsx)("h3",{children:"Rules"}),Object(p.jsx)("p",{onClick:e.onClick,children:"\u2716"})]}),Object(p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"304",height:"270",children:[Object(p.jsxs)("defs",{children:[Object(p.jsxs)("linearGradient",{id:"a",x1:"50%",x2:"50%",y1:"0%",y2:"100%",children:[Object(p.jsx)("stop",{offset:"0%",stopColor:"#FFF",stopOpacity:".097"}),Object(p.jsx)("stop",{offset:"100%",stopColor:"#FFF",stopOpacity:"0"})]}),Object(p.jsxs)("linearGradient",{id:"b",x1:"50%",x2:"50%",y1:"0%",y2:"100%",children:[Object(p.jsx)("stop",{offset:"0%",stopColor:"#FFF",stopOpacity:".097"}),Object(p.jsx)("stop",{offset:"100%",stopColor:"#FFF",stopOpacity:"0"})]})]}),Object(p.jsxs)("g",{fill:"none",fillRule:"evenodd",children:[Object(p.jsx)("ellipse",{cx:"53.189",cy:"54.815",fill:"#B1B4C5",rx:"53.189",ry:"54.815"}),Object(p.jsx)("ellipse",{cx:"53.189",cy:"52.385",fill:"url(#a)",rx:"53.189",ry:"52.385"}),Object(p.jsxs)("g",{transform:"translate(12.357 12.421)",children:[Object(p.jsx)("ellipse",{cx:"40.832",cy:"41.044",fill:"#E1E4ED",rx:"40.832",ry:"41.044"}),Object(p.jsx)("path",{fill:"#8A90AC",fillRule:"nonzero",d:"M56.697 30.417a2.125 2.125 0 00-.904-.146c-.417.03-.755.201-.955.481-1.177 1.666-2.141 4.81-2.919 7.337-.357 1.169-.836 2.733-1.183 3.475-.362-2.08.047-9.697.206-12.63l.002-.047c.11-2.038.125-2.396.1-2.553-.174-1.118-.618-1.852-1.319-2.18-.708-.333-1.629-.186-2.62.417-.497.303-.635 1.345-1.061 6.067l-.002.02c-.235 2.595-.776 8.568-1.441 9.563-.75-1.392-1.784-9.3-2.23-12.722-.312-2.397-.494-3.774-.616-4.19-.257-.87-1.343-1.611-2.418-1.653-.895-.044-1.629.415-1.98 1.214-.655.736-.423 3.179.302 8.964.344 2.754 1.056 8.441.608 9.08-.893-.099-2.427-3.661-4.559-10.592-.598-1.942-.783-2.525-.967-2.78-.362-.891-1.593-1.578-2.696-1.5a2.314 2.314 0 00-.277.036c-.578.116-1.896.653-1.615 3.13.779 3.435 1.624 5.957 2.445 8.405l.016.05c.491 1.465.955 2.85 1.387 4.388 1.016 3.63.621 5.882.616 5.907-.034.232-.105.374-.211.423a.405.405 0 01-.143.033c-.322.023-.805-.193-1.055-.333-.568-1.098-3.4-6.33-5.967-7.055L25.15 41l-.093.008c-.942.09-1.634.45-2.057 1.068-.67.978-.393 2.224-.325 2.474l.038.09c.02.037 2.079 3.825 2.397 5.587.275 1.511 1.696 3.148 2.838 4.464l.047.054c.373.43.695.802.948 1.146 3.316 3.492 8.558 6.428 8.601 6.452.654.487 1.018.958 1.056 1.363a.595.595 0 01-.117.43l-.114.12.725.711 13.832-.98.59-2.73c1.823-7.705 1.442-14.275 1.436-14.319.007-.242.518-2.58.93-4.468l.011-.048c.82-3.763 1.838-8.444 2.034-10.225.085-.761-.398-1.46-1.23-1.779z"})]}),Object(p.jsxs)("g",{transform:"translate(196)",children:[Object(p.jsx)("ellipse",{cx:"53.686",cy:"54.815",fill:"#B1B4C5",rx:"53.686",ry:"54.815"}),Object(p.jsx)("ellipse",{cx:"53.686",cy:"52.385",fill:"url(#b)",rx:"53.686",ry:"52.385"}),Object(p.jsxs)("g",{transform:"translate(12.473 12.421)",children:[Object(p.jsx)("ellipse",{cx:"41.214",cy:"41.044",fill:"#E1E4ED",rx:"41.214",ry:"41.044"}),Object(p.jsx)("path",{fill:"#8A90AC",fillRule:"nonzero",d:"M30.455 40.692l4.451-6.234c-1.85-.307-5.248-.375-8.031 2.397-4.388 4.37-6.165 13.809-6.535 16.093l11.15 11.105c2.008-.17 10.896-1.353 19.46-9.881.09-.184 2.177-1.72.471-3.418-.814-.81-2.162-.796-2.993.033a1.051 1.051 0 01-1.497.015 1.04 1.04 0 01.015-1.49l3.026-3.014c1.538-1.532.089-4.116-2.058-3.495l-2.477 2.112a1.065 1.065 0 01-1.497-.103c-.384-.443-.302-1.114.135-1.492 8.654-7.562 7.39-6.65 12.958-11.848 2.08-1.725-.536-4.776-2.586-3.03L40.978 40.506a1.051 1.051 0 01-1.378-.015c-.445-.383-.455-.934-.164-1.37l9.395-14.545c1.373-1.852-1.33-3.91-2.776-2.042L32.164 41.881a1.05 1.05 0 01-1.47.255 1.02 1.02 0 01-.24-1.444z"})]})]}),Object(p.jsxs)("g",{transform:"translate(98 160)",children:[Object(p.jsx)("ellipse",{cx:"53.686",cy:"54.815",fill:"#B1B4C5",rx:"53.686",ry:"54.815"}),Object(p.jsx)("ellipse",{cx:"53.686",cy:"52.385",fill:"url(#b)",rx:"53.686",ry:"52.385"}),Object(p.jsxs)("g",{transform:"translate(12.473 12.421)",children:[Object(p.jsx)("ellipse",{cx:"41.214",cy:"41.044",fill:"#E1E4ED",rx:"41.214",ry:"41.044"}),Object(p.jsx)("path",{fill:"#8A90AC",fillRule:"nonzero",d:"M57.179 35.15c-.475-5.997-7.208-5.385-7.208-5.385-2.842-5.01-7.281-1.381-7.281-1.381-3.41-4.911-7.687-.36-7.687-.36-7.373-.796-7.087 5.234-7.087 5.234-.173 1.917 1.04 7.847 1.04 7.847-1.094-3.418-3.467-.581-3.467-.581-2.917 4.502-.721 6.967-.721 6.967 3.947 4.626 12.357 10.18 12.357 10.18 3.046 1.745 1.757 3.3 1.757 3.3l18.42-3.044.424-3.494c2.8-8.472-.547-19.284-.547-19.284z"})]})]}),Object(p.jsx)("text",{fill:"#B1B4C5",fontFamily:"BarlowSemiCondensed-Bold, Barlow Semi Condensed",fontSize:"13",fontStyle:"condensed",fontWeight:"bold",children:Object(p.jsx)("tspan",{x:"134",y:"31",children:"BEATS"})}),Object(p.jsx)("text",{fill:"#B1B4C5",fontFamily:"BarlowSemiCondensed-Bold, Barlow Semi Condensed",fontSize:"13",fontStyle:"condensed",fontWeight:"bold",children:Object(p.jsx)("tspan",{x:"40",y:"147",children:"BEATS"})}),Object(p.jsx)("text",{fill:"#B1B4C5",fontFamily:"BarlowSemiCondensed-Bold, Barlow Semi Condensed",fontSize:"13",fontStyle:"condensed",fontWeight:"bold",children:Object(p.jsx)("tspan",{x:"235",y:"147",children:"BEATS"})}),Object(p.jsxs)("g",{fill:"#B1B4C5",transform:"matrix(-1 0 0 1 177 39)",children:[Object(p.jsx)("rect",{width:"50",height:"4",y:"10",rx:"2"}),Object(p.jsx)("path",{d:"M41.963 2.015l8.59 8.728c.716.727.71 1.896-.013 2.616a1.833 1.833 0 01-2.6-.013l-8.59-8.728a1.855 1.855 0 01.013-2.616 1.833 1.833 0 012.6.013z"}),Object(p.jsx)("path",{d:"M39.35 19.382l8.59-8.728a1.833 1.833 0 012.6-.013c.723.72.729 1.889.013 2.616l-8.59 8.728a1.833 1.833 0 01-2.6.013 1.855 1.855 0 01-.013-2.616z"})]}),Object(p.jsxs)("g",{fill:"#B1B4C5",transform:"scale(1 -1) rotate(-55 -82.574 -131.195)",children:[Object(p.jsx)("rect",{width:"50",height:"4",y:"10",rx:"2"}),Object(p.jsx)("path",{d:"M41.963 2.015l8.59 8.728c.716.727.71 1.896-.013 2.616a1.833 1.833 0 01-2.6-.013l-8.59-8.728a1.855 1.855 0 01.013-2.616 1.833 1.833 0 012.6.013z"}),Object(p.jsx)("path",{d:"M39.35 19.382l8.59-8.728a1.833 1.833 0 012.6-.013c.723.72.729 1.889.013 2.616l-8.59 8.728a1.833 1.833 0 01-2.6.013 1.855 1.855 0 01-.013-2.616z"})]}),Object(p.jsxs)("g",{fill:"#B1B4C5",transform:"rotate(-55 240.022 -103.651)",children:[Object(p.jsx)("rect",{width:"50",height:"4",y:"10",rx:"2"}),Object(p.jsx)("path",{d:"M41.963 2.015l8.59 8.728c.716.727.71 1.896-.013 2.616a1.833 1.833 0 01-2.6-.013l-8.59-8.728a1.855 1.855 0 01.013-2.616 1.833 1.833 0 012.6.013z"}),Object(p.jsx)("path",{d:"M39.35 19.382l8.59-8.728a1.833 1.833 0 012.6-.013c.723.72.729 1.889.013 2.616l-8.59 8.728a1.833 1.833 0 01-2.6.013 1.855 1.855 0 01-.013-2.616z"})]})]})]})]})},S=document.getElementById("overlays"),N=function(e){return Object(p.jsxs)(s.Fragment,{children:[l.a.createPortal(Object(p.jsx)(E,{}),S),l.a.createPortal(Object(p.jsx)(P,{onClick:e.onClick}),S)]})},F=t(4),M=t.n(F),z=function(e){var c=Object(s.useContext)(x),t=function(e){return e===m.rock?Object(p.jsx)(f,{}):e===m.scissors?Object(p.jsx)(y,{}):e===m.paper?Object(p.jsx)(_,{}):void 0};Object(s.useEffect)((function(){setTimeout((function(){var e=Math.floor(3*Math.random());1===e?c.housePicked(m.rock):2===e?c.housePicked(m.paper):c.housePicked(m.scissors),c.judge()}),1e3)}),[]);var n=t(c.player),o=t(c.house),l="lose"===c.isWin?"".concat(M.a.lose," "):"".concat(M.a.win),i="win"===c.isWin?"You Win":"lose"===c.isWin?"You Lose":"Draw";return Object(p.jsxs)("div",{className:M.a.container,children:[Object(p.jsxs)("div",{className:M.a.pick,children:[Object(p.jsx)("h4",{children:"You Picked"}),n]}),null!==c.isWin&&Object(p.jsxs)("div",{className:M.a.result,children:[Object(p.jsx)("h2",{children:i}),Object(p.jsx)("button",{className:l,onClick:function(){c.reset(),e.onReset()},children:"Play again"})]}),Object(p.jsxs)("div",{className:M.a.pick,children:[Object(p.jsx)("h4",{children:"The House Picked"}),!c.house&&Object(p.jsx)("div",{className:M.a.overlay}),!!c.house&&o,console.log(c.isWin)]})]})},R=t(3),W={player:null,house:null,isWin:null,score:0},A=function(e,c){return"PLAYER_PICKED"===c.type?Object(R.a)(Object(R.a)({},e),{},{player:c.choice}):"HOUSE_PICKED"===c.type?Object(R.a)(Object(R.a)({},e),{},{house:c.choice}):"JUDGE"===c.type?e.player===m.paper&&e.house===m.rock||e.player===m.rock&&e.house===m.scissors||e.player===m.scissors&&e.house===m.paper?Object(R.a)(Object(R.a)({},e),{},{isWin:"win",score:e.score+1}):e.player===m.paper&&e.house===m.scissors||e.player===m.rock&&e.house===m.paper||e.player===m.scissors&&e.house===m.rock?(t=e.score>0?e.score-1:0,Object(R.a)(Object(R.a)({},e),{},{isWin:"lose",score:t})):Object(R.a)(Object(R.a)({},e),{},{isWin:"draw"}):"RESET"===c.type?Object(R.a)(Object(R.a)({},W),{},{score:e.score}):W;var t},L=function(e){var c=Object(s.useReducer)(A,W),t=Object(i.a)(c,2),n=t[0],o=t[1],l={player:n.player,house:n.house,isWin:n.isWin,score:n.score,playerPicked:function(e){o({type:"PLAYER_PICKED",choice:e})},housePicked:function(e){o({type:"HOUSE_PICKED",choice:e})},judge:function(){o({type:"JUDGE"})},reset:function(){o({type:"RESET"})}};return Object(p.jsx)(x.Provider,{value:l,children:e.children})};var D=function(){var e=Object(s.useState)(!1),c=Object(i.a)(e,2),t=c[0],n=c[1],o=Object(s.useState)(!1),l=Object(i.a)(o,2),r=l[0],a=l[1];return Object(p.jsxs)(L,{children:[Object(p.jsx)(b,{}),!r&&Object(p.jsx)(C,{onPicked:function(){a(!0)}}),r&&Object(p.jsx)(z,{onReset:function(){a(!1)}}),Object(p.jsx)(v,{onClick:function(){n(!0)}}),t&&Object(p.jsx)(N,{onClick:function(){n(!1)}})]})},H=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,19)).then((function(c){var t=c.getCLS,s=c.getFID,n=c.getFCP,o=c.getLCP,l=c.getTTFB;t(e),s(e),n(e),o(e),l(e)}))};l.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(D,{})}),document.getElementById("root")),H()}],[[18,1,2]]]);
//# sourceMappingURL=main.cef06ca9.chunk.js.map