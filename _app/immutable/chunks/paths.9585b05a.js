import{n as b,s as h}from"./scheduler.7a274a43.js";const e=[];function d(n,l=b){let i;const o=new Set;function r(t){if(h(n,t)&&(n=t,i)){const f=!e.length;for(const s of o)s[1](),e.push(s,n);if(f){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function c(t){r(t(n))}function _(t,f=b){const s=[t,f];return o.add(s),o.size===1&&(i=l(r,c)||b),t(n),()=>{o.delete(s),o.size===0&&i&&(i(),i=null)}}return{set:r,update:c,subscribe:_}}var u;const p=((u=globalThis.__sveltekit_f15fwz)==null?void 0:u.base)??"";var a;const w=((a=globalThis.__sveltekit_f15fwz)==null?void 0:a.assets)??p;export{w as a,p as b,d as w};
