import{s as V,f as $,a as q,g as d,h,d as o,c as z,j as i,T as A,i as f,n as O,l as k,m as C}from"../chunks/scheduler.7a274a43.js";import{S as P,i as S,b as g,d as v,m as w,a as u,t as _,e as x}from"../chunks/index.28409b7f.js";import{C as y}from"../chunks/Chip.2121a9fa.js";import{C as j}from"../chunks/CommonPage.ce9ab038.js";const D="/pdf/IsaacDcruzResume.pdf",E="Resume";function F(l){let e,a;return e=new y({props:{$$slots:{default:[T]},$$scope:{ctx:l}}}),{c(){g(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,r){w(e,t,r),a=!0},i(t){a||(u(e.$$.fragment,t),a=!0)},o(t){_(e.$$.fragment,t),a=!1},d(t){x(e,t)}}}function M(l){let e,a,t;return a=new y({props:{size:"1.25em",$$slots:{default:[B]},$$scope:{ctx:l}}}),{c(){e=$("a"),g(a.$$.fragment),this.h()},l(r){e=d(r,"A",{href:!0,download:!0,class:!0});var s=h(e);v(a.$$.fragment,s),s.forEach(o),this.h()},h(){i(e,"href",D),i(e,"download",""),i(e,"class","svelte-wl30ce")},m(r,s){f(r,e,s),w(a,e,null),t=!0},i(r){t||(u(a.$$.fragment,r),t=!0)},o(r){_(a.$$.fragment,r),t=!1},d(r){r&&o(e),x(a)}}}function T(l){let e;return{c(){e=k("Ooops! no CV at the moment.")},l(a){e=C(a,"Ooops! no CV at the moment.")},m(a,t){f(a,e,t)},d(a){a&&o(e)}}}function B(l){let e;return{c(){e=k("Download")},l(a){e=C(a,"Download")},m(a,t){f(a,e,t)},d(a){a&&o(e)}}}function G(l){let e,a,t,r,s,b,m;const I=[M,F],p=[];function R(n,c){return 0}return a=R(),t=p[a]=I[a](l),{c(){e=$("div"),t.c(),r=q(),s=$("iframe"),this.h()},l(n){e=d(n,"DIV",{class:!0});var c=h(e);t.l(c),c.forEach(o),r=z(n),s=d(n,"IFRAME",{src:!0,class:!0,title:!0}),h(s).forEach(o),this.h()},h(){i(e,"class","resume svelte-wl30ce"),A(s.src,b=D)||i(s,"src",b),i(s,"class","h-[600px] w-full"),i(s,"title",E)},m(n,c){f(n,e,c),p[a].m(e,null),f(n,r,c),f(n,s,c),m=!0},p:O,i(n){m||(u(t),m=!0)},o(n){_(t),m=!1},d(n){n&&(o(e),o(r),o(s)),p[a].d()}}}function H(l){let e,a;return e=new j({props:{title:E,$$slots:{default:[G]},$$scope:{ctx:l}}}),{c(){g(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,r){w(e,t,r),a=!0},p(t,[r]){const s={};r&1&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){a||(u(e.$$.fragment,t),a=!0)},o(t){_(e.$$.fragment,t),a=!1},d(t){x(e,t)}}}class Q extends P{constructor(e){super(),S(this,e,null,H,V,{})}}export{Q as component};