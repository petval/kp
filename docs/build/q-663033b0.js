const T=S=>{const t=window,_=location.pathname+location.search,c="_qCitySPA",m="_qCityHistoryPatch",C="_qCityBootstrap",y="_qCityInitPopstate",d="_qCityInitAnchors",u="_qCityInitVisibility",p="_qCityInitScroll",n="_qCityScrollEnabled",a="_qCityScrollDebounce",q="_qCityScroll",b=i=>{i&&t.scrollTo(i.x,i.y)},f=()=>{const i=document.documentElement;return{x:i.scrollLeft,y:i.scrollTop,w:Math.max(i.scrollWidth,i.clientWidth),h:Math.max(i.scrollHeight,i.clientHeight)}},h=i=>{const o=history.state||{};o[q]=i||f(),history.replaceState(o,"")};if(!t[c]&&!t[y]&&!t[d]&&!t[u]&&!t[p]){if(h(),t[y]=()=>{var i;if(!t[c]){if(t[n]=!1,clearTimeout(t[a]),_!==location.pathname+location.search){const o=S.closest("[q\\:container]").querySelector('a[q\\:key="AD_1"]');if(o){const s=o.closest("[q\\:container]"),e=o.cloneNode();e.setAttribute("q:nbs",""),e.style.display="none",s.appendChild(e),t[C]=e,e.click()}else location.reload()}else if(history.scrollRestoration==="manual"){const o=(i=history.state)==null?void 0:i[q];b(o),t[n]=!0}}},!t[m]){t[m]=!0;const i=history.pushState,o=history.replaceState,s=e=>(e===null||typeof e>"u"?e={}:e?.constructor!==Object&&(e={_data:e}),e._qCityScroll=e._qCityScroll||f(),e);history.pushState=(e,l,r)=>(e=s(e),i.call(history,e,l,r)),history.replaceState=(e,l,r)=>(e=s(e),o.call(history,e,l,r))}t[d]=i=>{if(t[c]||i.defaultPrevented)return;const o=i.target.closest("a[href]");if(o&&!o.hasAttribute("preventdefault:click")){const s=o.getAttribute("href"),e=new URL(location.href),l=new URL(s,e),r=l.origin===e.origin,g=l.pathname+l.search===e.pathname+e.search;if(r&&g)if(i.preventDefault(),l.href!==e.href&&history.pushState(null,"",l),!l.hash)l.href.endsWith("#")?window.scrollTo(0,0):(t[n]=!1,clearTimeout(t[a]),h({...f(),x:0,y:0}),location.reload());else{const w=l.hash.slice(1),v=document.getElementById(w);v&&v.scrollIntoView()}}},t[u]=()=>{!t[c]&&t[n]&&document.visibilityState==="hidden"&&h()},t[p]=()=>{t[c]||!t[n]||(clearTimeout(t[a]),t[a]=setTimeout(()=>{h(),t[a]=void 0},200))},t[n]=!0,setTimeout(()=>{addEventListener("popstate",t[y]),addEventListener("scroll",t[p],{passive:!0}),document.body.addEventListener("click",t[d]),t.navigation||document.addEventListener("visibilitychange",t[u],{passive:!0})},0)}};export{T as s_DyVc0YBIqQU};