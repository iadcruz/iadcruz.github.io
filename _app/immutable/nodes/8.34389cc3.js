import{s as E,a as I,f as $,c as R,g as d,h,d as c,T as V,j as f,i as u,n as q,l as k,m as C}from"../chunks/scheduler.7a274a43.js";import{S as z,i as A,b as g,d as v,m as w,a as _,t as p,e as b}from"../chunks/index.28409b7f.js";import{C as y}from"../chunks/Chip.2121a9fa.js";import{C as O}from"../chunks/CommonPage.ce9ab038.js";const D="/pdf/IsaacDcruzResume.pdf",x="Resume";function P(o){let e,t;return e=new y({props:{$$slots:{default:[j]},$$scope:{ctx:o}}}),{c(){g(e.$$.fragment)},l(r){v(e.$$.fragment,r)},m(r,a){w(e,r,a),t=!0},i(r){t||(_(e.$$.fragment,r),t=!0)},o(r){p(e.$$.fragment,r),t=!1},d(r){b(e,r)}}}function S(o){let e,t,r;return t=new y({props:{size:"1.25em",$$slots:{default:[F]},$$scope:{ctx:o}}}),{c(){e=$("a"),g(t.$$.fragment),this.h()},l(a){e=d(a,"A",{href:!0,download:!0,class:!0});var l=h(e);v(t.$$.fragment,l),l.forEach(c),this.h()},h(){f(e,"href",D),f(e,"download",""),f(e,"class","svelte-wl30ce")},m(a,l){u(a,e,l),w(t,e,null),r=!0},i(a){r||(_(t.$$.fragment,a),r=!0)},o(a){p(t.$$.fragment,a),r=!1},d(a){a&&c(e),b(t)}}}function j(o){let e;return{c(){e=k("Ooops! no CV at the moment.")},l(t){e=C(t,"Ooops! no CV at the moment.")},m(t,r){u(t,e,r)},d(t){t&&c(e)}}}function F(o){let e;return{c(){e=k("Download")},l(t){e=C(t,"Download")},m(t,r){u(t,e,r)},d(t){t&&c(e)}}}function M(o){let e,t,r,a;const l=[S,P],s=[];function i(n,m){return 0}return t=i(),r=s[t]=l[t](o),{c(){e=$("div"),r.c(),this.h()},l(n){e=d(n,"DIV",{class:!0});var m=h(e);r.l(m),m.forEach(c),this.h()},h(){f(e,"class","resume svelte-wl30ce")},m(n,m){u(n,e,m),s[t].m(e,null),a=!0},p:q,i(n){a||(_(r),a=!0)},o(n){p(r),a=!1},d(n){n&&c(e),s[t].d()}}}function T(o){let e,t,r,a,l;return e=new O({props:{title:x,$$slots:{default:[M]},$$scope:{ctx:o}}}),{c(){g(e.$$.fragment),t=I(),r=$("iframe"),this.h()},l(s){v(e.$$.fragment,s),t=R(s),r=d(s,"IFRAME",{src:!0,class:!0,title:!0}),h(r).forEach(c),this.h()},h(){V(r.src,a=D)||f(r,"src",a),f(r,"class","h-full w-full"),f(r,"title",x)},m(s,i){w(e,s,i),u(s,t,i),u(s,r,i),l=!0},p(s,[i]){const n={};i&1&&(n.$$scope={dirty:i,ctx:s}),e.$set(n)},i(s){l||(_(e.$$.fragment,s),l=!0)},o(s){p(e.$$.fragment,s),l=!1},d(s){s&&(c(t),c(r)),b(e,s)}}}class K extends z{constructor(e){super(),A(this,e,null,T,E,{})}}export{K as component};