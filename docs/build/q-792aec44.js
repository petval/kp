import{o as O,X as m,m as J,V as Z,b as E,h as w,_ as v,k as j,p as y,r as R,S as tt}from"./q-b27f32ea.js";const et='((i,a,r,s)=>{r=e=>{const t=document.querySelector("[q\\\\:base]");t&&a.active&&a.active.postMessage({type:"qprefetch",base:t.getAttribute("q:base"),...e})},document.addEventListener("qprefetch",e=>{const t=e.detail;a?r(t):i.push(t)}),navigator.serviceWorker.register("/kp/service-worker.js").then(e=>{s=()=>{a=e,i.forEach(r),r({bundles:i})},e.installing?e.installing.addEventListener("statechange",t=>{t.target.state=="activated"&&s()}):e.active&&s()}).catch(e=>console.error(e))})([])',I=y("qc-s"),W=y("qc-c"),rt=y("qc-ic"),M=y("qc-h"),B=y("qc-l"),D=y("qc-n"),nt=y("qc-a"),ot=y("qc-ir"),st=w(()=>v(()=>import("./q-663033b0.js"),[]),"s_DyVc0YBIqQU"),at=()=>{},it=E(w(()=>v(()=>import("./q-d6975b3e.js"),["build/q-d6975b3e.js","build/q-b27f32ea.js"]),"s_e0ssiDXoeAM")),N=new WeakMap,q=new Map,ct="qaction",C=t=>t.pathname+t.search+t.hash,b=(t,e)=>new URL(t,e.href),H=(t,e)=>t.origin===e.origin,k=(t,e)=>t.pathname+t.search===e.pathname+e.search,U=(t,e)=>t.pathname===e.pathname,lt=(t,e)=>t.search===e.search,ht=(t,e,n)=>{let r=e??"";return n&&(r+=(r?"&":"?")+ct+"="+encodeURIComponent(n.id)),t+(t.endsWith("/")?"":"/")+"q-data.json"+r},ut=(t,e)=>{const n=t.href;if(typeof n=="string"&&typeof t.target!="string"&&!t.reload)try{const r=b(n.trim(),e.url),o=b("",e.url);if(H(r,o))return C(r)}catch(r){console.error(r)}else if(t.reload)return C(b("",e.url));return null},dt=(t,e,n)=>{if(t.prefetch===!0&&e){const r=b(e,n.url),o=b("",n.url);if(!U(r,o)||!lt(r,o))return""}return null},ft=t=>t&&typeof t.then=="function",pt=(t,e,n,r)=>{const o=P(),a={head:o,withLocale:s=>R(r,s),resolveValue:s=>{const i=s.__id;if(s.__brand==="server_loader"&&!(i in t.loaders))throw new Error("You can not get the returned data of a loader that has not been executed for this request.");const c=t.loaders[i];if(ft(c))throw new Error("Loaders returning a function can not be referred to in the head function.");return c},...e};for(let s=n.length-1;s>=0;s--){const i=n[s]&&n[s].head;i&&(typeof i=="function"?F(o,R(r,()=>i(a))):typeof i=="object"&&F(o,i))}return a.head},F=(t,e)=>{typeof e.title=="string"&&(t.title=e.title),_(t.meta,e.meta),_(t.links,e.links),_(t.styles,e.styles),_(t.scripts,e.scripts),Object.assign(t.frontmatter,e.frontmatter)},_=(t,e)=>{if(Array.isArray(e))for(const n of e){if(typeof n.key=="string"){const r=t.findIndex(o=>o.key===n.key);if(r>-1){t[r]=n;continue}}t.push(n)}},P=()=>({title:"",meta:[],links:[],styles:[],scripts:[],frontmatter:{}});function yt(t,e){const n=z(t),r=K(t),o=z(e),a=K(e);return V(t,n,r,e,o,a)}function V(t,e,n,r,o,a){let s=null;for(;e<n;){const i=t.charCodeAt(e++),c=r.charCodeAt(o++);if(i===91){const l=Q(t,e),h=e+(l?3:0),u=L(t,h,n,93),d=t.substring(h,u),p=L(t,u+1,n,47),f=t.substring(u+1,p);e=u+1;const g=o-1;if(l){const T=bt(d,f,r,g,a,t,e+f.length+1,n);if(T)return Object.assign(s||(s={}),T)}const A=L(r,g,a,47,f);if(A==-1)return null;const x=r.substring(g,A);if(!l&&!f&&!x)return null;o=A,(s||(s={}))[d]=decodeURIComponent(x)}else if(i!==c&&!(isNaN(c)&&gt(t,e)))return null}return $(t,e)&&$(r,o)?s||{}:null}function gt(t,e){return t.charCodeAt(e)===91&&Q(t,e+1)}function K(t){const e=t.length;return e>1&&t.charCodeAt(e-1)===47?e-1:e}function $(t,e){const n=t.length;return e>=n||e==n-1&&t.charCodeAt(e)===47}function z(t){return t.charCodeAt(0)===47?1:0}function Q(t,e){return t.charCodeAt(e)===46&&t.charCodeAt(e+1)===46&&t.charCodeAt(e+2)===46}function L(t,e,n,r,o=""){for(;e<n&&t.charCodeAt(e)!==r;)e++;const a=o.length;for(let s=0;s<a;s++)if(t.charCodeAt(e-a+s)!==o.charCodeAt(s))return-1;return e-a}let X;(function(t){t[t.EOL=0]="EOL",t[t.OPEN_BRACKET=91]="OPEN_BRACKET",t[t.CLOSE_BRACKET=93]="CLOSE_BRACKET",t[t.DOT=46]="DOT",t[t.SLASH=47]="SLASH"})(X||(X={}));function bt(t,e,n,r,o,a,s,i){n.charCodeAt(r)===47&&r++;let c=o;const l=e+"/";let h=5;for(;c>=r&&h--;){const u=V(a,s,i,n,c,o);if(u){let d=n.substring(r,Math.min(c,o));return d.endsWith(l)&&(d=d.substring(0,d.length-l.length)),u[t]=decodeURIComponent(d),u}c=mt(n,r,l,c,r-1)+l.length}return null}function mt(t,e,n,r,o){let a=t.lastIndexOf(n,r);return a==r-n.length&&(a=t.lastIndexOf(n,r-n.length-1)),a>e?a:o}const qt=async(t,e,n,r)=>{if(Array.isArray(t))for(const o of t){const a=o[0],s=yt(a,r);if(s){const i=o[1],c=o[3],l=new Array(i.length),h=[],u=wt(e,r);let d;return i.forEach((p,f)=>{Y(p,h,g=>l[f]=g,n)}),Y(u,h,p=>d=p?.default,n),h.length>0&&await Promise.all(h),[a,s,l,d,c]}}return null},Y=(t,e,n,r)=>{if(typeof t=="function"){const o=N.get(t);if(o)n(o);else{const a=t();typeof a.then=="function"?e.push(a.then(s=>{r!==!1&&N.set(t,s),n(s)})):a&&n(a)}}},wt=(t,e)=>{if(t){e=e.endsWith("/")?e:e+"/";const n=t.find(r=>r[0]===e||e.startsWith(r[0]+(e.endsWith("/")?"":"/")));if(n)return n[1]}},vt=(t,e,n,r,o=!1)=>{if(e!=="popstate"){const a=k(n,r),s=n.hash===r.hash;if(!a||!s){const i={_qCityScroll:Ct()};o?t.history.replaceState(i,"",C(r)):t.history.pushState(i,"",C(r))}}},Ct=()=>({x:0,y:0,w:0,h:0}),_t=t=>{document.dispatchEvent(new CustomEvent("qprefetch",{detail:t}))},G=async(t,e,n,r)=>{const o=t.pathname,a=t.search,s=ht(o,a,r);let i;r||(i=q.get(s)),_t({links:[o]});let c;if(!i){const l=At(r);r&&(r.data=void 0),i=fetch(s,l).then(h=>{const u=new URL(h.url),d=u.pathname.endsWith("/q-data.json");if(u.origin!==location.origin||!d){location.href=u.href;return}if((h.headers.get("content-type")||"").includes("json"))return h.text().then(p=>{const f=O(p,e);if(!f){location.href=t.href;return}if(n&&q.delete(s),f.redirect)location.href=f.redirect;else if(r){const g=f.loaders[r.id];c=()=>{r.resolve({status:h.status,result:g})}}return f});location.href=t.href}),r||q.set(s,i)}return i.then(l=>(l||q.delete(s),c&&c(),l))},At=t=>{const e=t?.data;if(e)return e instanceof FormData?{method:"POST",body:e}:{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json, charset=UTF-8"}}},Et=()=>m(W),kt=()=>m(M),Lt=()=>m(B),St=()=>m(D),xt=()=>J(Z("qwikcity")),Tt=(t,e,n,r)=>{t==="popstate"&&r?window.scrollTo(r.x,r.y):t==="link"&&(Ot(e,n)||window.scrollTo(0,0))},Ot=(t,e)=>{const n=t.hash.slice(1),r=n&&document.getElementById(n);return r?(r.scrollIntoView(),!0):!!(!r&&t.hash&&k(t,e))},jt=t=>({x:t.scrollLeft,y:t.scrollTop,w:Math.max(t.scrollWidth,t.clientWidth),h:Math.max(t.scrollHeight,t.clientHeight)}),Rt=()=>{const t=history.state;return t?._qCityScroll},It=t=>{const e=history.state||{};e._qCityScroll=t,history.replaceState(e,"")},Wt=E(w(()=>v(()=>import("./q-5cbb9e0b.js"),["build/q-5cbb9e0b.js","build/q-b27f32ea.js"]),"s_TxCFOy819ag"));function Mt(t){for(;t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.parentElement;return t.closest("[q\\:container]")}const Bt=E(w(()=>v(()=>import("./q-3ade5634.js"),["build/q-3ade5634.js","build/q-b27f32ea.js"]),"s_8gdLBszqbaM")),Dt=(t,e)=>{t&&t.href&&t.hasAttribute("data-prefetch")&&(S||(S=innerWidth),(!e||e&&S<520)&&G(new URL(t.href),t))};let S=0;const Nt=t=>tt("script",{nonce:j(t,"nonce")},{dangerouslySetInnerHTML:et},null,3,"1Z_0"),Ht=(t,...e)=>{const{id:n,validators:r}=Ut(e,t);function o(){return m(I,a=>{if(!(n in a))throw new Error(`routeLoader$ "${t.getSymbol()}" was invoked in a route where it was not declared.
    This is because the routeLoader$ was not exported in a 'layout.tsx' or 'index.tsx' file of the existing route.
    For more information check: https://qwik.builder.io/qwikcity/route-loader/`);return j(a,n)})}return o.__brand="server_loader",o.__qrl=t,o.__validators=r,o.__id=n,Object.freeze(o),o},Ut=(t,e)=>{let n;const r=[];if(t.length===1){const o=t[0];o&&typeof o=="object"&&("validate"in o?r.push(o):(n=o.id,o.validation&&r.push(...o.validation)))}else t.length>1&&r.push(...t.filter(o=>!!o));return typeof n=="string"?n=`id_${n}`:n=e.getHash(),{validators:r.reverse(),id:n}},Ft=async function*(t,e,n){const r=t.getReader();try{let o="";const a=new TextDecoder;for(;!(n!=null&&n.aborted);){const s=await r.read();if(s.done)break;o+=a.decode(s.value,{stream:!0});const i=o.split(/\n/);o=i.pop();for(const c of i)yield await O(c,e)}}finally{r.releaseLock()}};export{xt as A,kt as B,W as C,M as D,at as E,it as F,Ft as G,Dt as H,Ht as I,Bt as L,Wt as Q,B as R,Nt as S,Et as a,Lt as b,dt as c,P as d,rt as e,D as f,ut as g,I as h,nt as i,ot as j,H as k,k as l,Rt as m,G as n,qt as o,U as p,pt as q,Tt as r,q as s,b as t,St as u,It as v,jt as w,st as x,vt as y,Mt as z};
