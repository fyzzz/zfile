System.register(["./base-legacy.300d11a2.js","./index-legacy.5c2a5b9a.js","./scroll-legacy.37269264.js"],(function(e){"use strict";var n,t,o,u,a,c,i,d,s,r,l,f,m,E,p,v,y,S,T,g,M,L;return{setters:[function(e){n=e.a0,t=e.t,o=e.A,u=e.a9,a=e.ab,c=e.a8,i=e.aa,d=e.b,s=e.d,r=e.u},function(e){l=e.o,f=e.ap,m=e.H,E=e.S,p=e.w,v=e.a8,y=e.N,S=e.d,T=e.h,g=e.g,M=e.ao},function(e){L=e.a}],execute:function(){var h=function(e){return e[e.TEXT=1]="TEXT",e[e.CLASS=2]="CLASS",e[e.STYLE=4]="STYLE",e[e.PROPS=8]="PROPS",e[e.FULL_PROPS=16]="FULL_PROPS",e[e.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",e[e.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",e[e.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",e[e.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",e[e.NEED_PATCH=512]="NEED_PATCH",e[e.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",e[e.HOISTED=-1]="HOISTED",e[e.BAIL=-2]="BAIL",e}(h||{}),A=(e("u",(function(e,t,o){var u={offsetX:0,offsetY:0},a=function(t){var o=t.clientX,a=t.clientY,c=u,i=c.offsetX,d=c.offsetY,s=e.value.getBoundingClientRect(),r=s.left,l=s.top,f=s.width,m=s.height,E=document.documentElement.clientWidth,p=document.documentElement.clientHeight,v=-r+i,y=-l+d,S=E-r-f+i,T=p-l-m+d,g=function(t){var c=Math.min(Math.max(i+t.clientX-o,v),S),s=Math.min(Math.max(d+t.clientY-a,y),T);u={offsetX:c,offsetY:s},e.value.style.transform="translate(".concat(n(c),", ").concat(n(s),")")};document.addEventListener("mousemove",g),document.addEventListener("mouseup",(function e(){document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",e)}))},c=function(){t.value&&e.value&&t.value.removeEventListener("mousedown",a)};l((function(){f((function(){o.value?t.value&&e.value&&t.value.addEventListener("mousedown",a):c()}))})),m((function(){c()}))})),e("b",(function(e){if(E(e)||t("[useLockscreen]","You need to pass a ref param to this function"),o&&!u(document.body,"el-popup-parent--hidden")){var n=0,d=!1,s="0",r=0,l=function(){i(document.body,"el-popup-parent--hidden"),d&&(document.body.style.paddingRight=s)};p(e,(function(e){if(e){(d=!u(document.body,"el-popup-parent--hidden"))&&(s=document.body.style.paddingRight,r=Number.parseInt(a(document.body,"paddingRight"),10)),n=L();var t=document.documentElement.clientHeight<document.body.scrollHeight,o=a(document.body,"overflowY");n>0&&(t||"scroll"===o)&&d&&(document.body.style.paddingRight="".concat(r+n,"px")),c(document.body,"el-popup-parent--hidden")}else l()})),v((function(){return l()}))}})),e("a",(function(e){if(!e)return{onClick:y,onMousedown:y,onMouseup:y};var n=!1,t=!1;return{onClick:function(o){n&&t&&e(o),n=t=!1},onMousedown:function(e){n=e.target===e.currentTarget},onMouseup:function(e){t=e.target===e.currentTarget}}}))),b=d({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:s([String,Array,Object])},zIndex:{type:s([String,Number])}}),R=S({name:"ElOverlay",props:b,emits:{click:function(e){return e instanceof MouseEvent}},setup:function(e,n){var t=n.slots,o=n.emit,u=r("overlay"),a=A(e.customMaskEvent?void 0:function(e){o("click",e)}),c=a.onClick,i=a.onMousedown,d=a.onMouseup;return function(){return e.mask?T("div",{class:[u.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:c,onMousedown:i,onMouseup:d},[g(t,"default")],h.STYLE|h.CLASS|h.PROPS,["onClick","onMouseup","onMousedown"]):M("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[g(t,"default")])}}});e("E",R)}}}));