/* Qwik Service Worker */
const appBundles=[["q-05c343c0.js",[27,43],["wOIPfiQ04l4"]],["q-0bc02652.js",[43],["aGaNAKyy8GA","ifggM9qtOnI","SabPjzKvAYs"]],["q-10d193cd.js",[27,43],["0dwFtB4M0as"]],["q-12c8abd6.js",[43]],["q-12d7834b.js",[43]],["q-17418f78.js",[43]],["q-18f2439c.js",[43]],["q-1b19b80d.js",[38,43,44,47],["PioeegRlDss"]],["q-2a4a9caa.js",[27,43],["8gdLBszqbaM","i1Cv0pYJNR0"]],["q-2d33b2f0.js",[43]],["q-321aded8.js",[43],["6k0ThjFtd3I","Gd6c6uAzGKo"]],["q-340b9533.js",[43]],["q-353da9ff.js",[43]],["q-3b4459c9.js",[12,43,44],["V2cIdsOO22Y"]],["q-3df123ce.js",[43],["uLAKe1WJQD0"]],["q-3e685d7a.js",[]],["q-40d9e016.js",[43]],["q-421539c8.js",[12,43],["W1wZaAVNrf0"]],["q-43dafe42.js",[6,26,43],["AFOemhGi21U"]],["q-4c5f6863.js",[43],["TZOUNJBiQTE","zz0sHf8gLh8"]],["q-50c0e7d7.js",[26,43],["JxaiZdhjaFc"]],["q-5c39ac61.js",[38,43]],["q-6031783d.js",[43]],["q-63e41a6f.js",[43]],["q-64e0b511.js",[43]],["q-663033b0.js",[],["DyVc0YBIqQU"]],["q-668cdce2.js",[43]],["q-66a56e8f.js",[43]],["q-6f5623f8.js",[43]],["q-702cdf22.js",[43],["DnL6WFe0gF8"]],["q-706750d0.js",[43],["8C3TbZ30uuQ","uQ0hlhBIspk"]],["q-7f920239.js",[27,43],["Nk9PlpjQm9Y","p9MSze0ojs4"]],["q-86389f95.js",[43]],["q-8ea06850.js",[]],["q-9203355a.js",[27,43],["iVw374IU4UQ","mHCKGza3XBU"]],["q-9279f566.js",[43]],["q-9a944358.js",[27,43],["e0ssiDXoeAM"]],["q-9ea2eab1.js",[27,39,43],["ZdZ3Eq00VwU"]],["q-a21f02c1.js",[]],["q-a2a56ab0.js",[27,43]],["q-a3e6862f.js",[27,43],["BUbtvTyvVRE","WmYC5H00wtI"]],["q-af98161a.js",[27,43],["eBQ0vFsFKsk"]],["q-afe83039.js",[27,43],["BluJujxReuI","d95mSi8t8U8"]],["q-b27f32ea.js",[]],["q-b4b3d862.js",[43]],["q-be5040b2.js",[43]],["q-c04846f2.js",[43]],["q-c7112098.js",[38,43]],["q-d7107a3c.js",[43],["PLe07Ve9vVY"]],["q-e01344c4.js",[12,43],["ZfsLCyEz0BY"]],["q-e3b3efa3.js",[27,43],["02wMImzEAbk","fX0bDjeJa0E","RPDJAz33WLA","TxCFOy819ag"]],["q-ea68bffd.js",[27,43],["ZGbx7FEAJ9E"]],["q-ea85cc5d.js",[6,12,43],["YyikZT2mTSU"]],["q-ee3e0355.js",[43],["9bL4nnZ0oB8"]],["q-fbee02cb.js",[43],["A5bZC7WO00A"]]];
const libraryBundleIds=[50];
const linkBundles=[[/^\/kp\/$/,[3,10,47,5,7,9,22,23,32]],[/^\/kp\/404\.html\/?$/,[3,10,24,48]],[/^\/kp\/blog\/?$/,[3,10,21,19]],[/^\/kp\/kontakty\/?$/,[3,10,46,45]],[/^\/kp\/o-nas\/?$/,[3,10,46,35]],[/^\/kp\/podminky\/?$/,[3,10,46,16]],[/^\/kp\/privacy\/?$/,[3,10,46,28]],[/^\/kp\/blog\/([^/]+?)\/?$/,[3,10,39,37]]];
const m="QwikBuild",k=new Set,g=new Map,u=[],L=(e,n)=>n.filter(s=>!e.some(i=>s.endsWith(i[0]))),q=(e,n)=>!!n&&!E(n),E=e=>{const n=e.headers.get("Cache-Control")||"";return n.includes("no-cache")||n.includes("max-age=0")},C=(e,n)=>e.some(s=>n.endsWith("/"+s[0])),U=(e,n)=>e.find(s=>s[0]===n),b=(e,n)=>n.map(s=>e[s]?e[s][0]:null),W=(e,n)=>n.map(s=>e.get(s)).filter(s=>s!=null),p=e=>{const n=new Map;for(const s of e){const i=s[2];if(i)for(const c of i)n.set(c,s[0])}return n},v=(e,n,s,i)=>new Promise((c,h)=>{const t=i.url,r=s.get(t);if(r)r.push([c,h]);else{const o=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d]of a)d(l.clone())}else c(l.clone())},f=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d,A]of a)A(l)}else h(l)};s.set(t,[[c,h]]),e.match(t).then(l=>{if(q(i,l))o(l);else return n(i).then(async a=>{a.ok&&await e.put(t,a.clone()),o(a)})}).catch(l=>e.match(t).then(a=>{a?o(a):f(l)}))}}),y=(e,n,s,i,c,h=!1)=>{const t=()=>{for(;u.length>0&&g.size<6;){const o=u.shift(),f=new Request(o);k.has(o)?t():(k.add(o),v(n,s,g,f).finally(t))}},r=o=>{try{const f=U(e,o);if(f){const l=b(e,f[1]),a=new URL(o,i).href,d=u.indexOf(a);d>-1?h&&(u.splice(d,1),u.unshift(a)):h?u.unshift(a):u.push(a),l.forEach(r)}}catch(f){console.error(f)}};Array.isArray(c)&&c.forEach(r),t()},w=(e,n,s,i,c,h,t)=>{try{y(e,i,c,h,b(e,n))}catch(r){console.error(r)}for(const r of t)try{for(const o of s){const[f,l]=o;if(f.test(r)){y(e,i,c,h,b(e,l));break}}}catch(o){console.error(o)}},B=(e,n,s,i)=>{try{const c=i.href.split("/"),h=c[c.length-1];c[c.length-1]="";const t=new URL(c.join("/"));y(e,n,s,t,[h],!0)}catch(c){console.error(c)}},N=(e,n,s,i)=>{const c=e.fetch.bind(e),h=p(n);e.addEventListener("fetch",t=>{const r=t.request;if(r.method==="GET"){const o=new URL(r.url);C(n,o.pathname)&&t.respondWith(e.caches.open(m).then(f=>(B(n,f,c,o),v(f,c,g,r))))}}),e.addEventListener("message",async({data:t})=>{if(t.type==="qprefetch"&&typeof t.base=="string"){const r=await e.caches.open(m),o=new URL(t.base,e.origin);Array.isArray(t.links)&&w(n,s,i,r,c,o,t.links),Array.isArray(t.bundles)&&y(n,r,c,o,t.bundles),Array.isArray(t.symbols)&&y(n,r,c,o,W(h,t.symbols))}}),e.addEventListener("activate",()=>{(async()=>{try{const t=await e.caches.open(m),o=(await t.keys()).map(l=>l.url),f=L(n,o);await Promise.all(f.map(l=>t.delete(l)))}catch(t){console.error(t)}})()})},x=()=>{typeof self<"u"&&typeof appBundles<"u"&&N(self,appBundles,libraryBundleIds,linkBundles)};x();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
