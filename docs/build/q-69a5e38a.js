import{G as a,g as s,S as l,k as n,h as u,_ as i,R as r,i as o}from"./q-d38e1fd3.js";const d=()=>{const t=a({posts:[]});return s(u(()=>i(()=>Promise.resolve().then(()=>m),void 0),"s_TZOUNJBiQTE",[t])),l("section",null,{class:"px-6 sm:px-6 py-12 sm:py-16 lg:py-20 mx-auto max-w-3xl"},[l("header",null,null,l("h1",null,{class:"text-center text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-8 md:mb-16 font-heading"},"Blog",3,null),3,null),l("ul",null,null,t.posts.map(e=>l("li",null,{class:"mb-10 md:mb-16"},l("article",{class:`max-w-md mx-auto md:max-w-none grid gap-6 md:gap-8 ${e.image?"md:grid-cols-2":""}`},null,[e.image&&l("a",{href:`/blog/${e.slug}`},{class:"relative block group"},l("div",null,{class:"relative h-0 pb-[56.25%] md:pb-[75%] md:h-80 lg:pb-[56.25%] overflow-hidden bg-gray-400 dark:bg-slate-700 rounded shadow-lg"},e.image&&l("img",{alt:n(e,"title"),src:n(e,"image")},{class:"absolute inset-0 object-cover w-full h-full mb-6 rounded shadow-lg bg-gray-400 dark:bg-slate-700",height:400,sizes:"(max-width: 900px) 400px, 900px",width:900},null,3,"fE_0"),1,null),1,"fE_1"),l("div",null,null,[l("header",null,null,l("h2",null,{class:"text-xl sm:text-2xl font-bold leading-snug mb-2 font-heading"},l("a",{href:`/blog/${e.slug}`},{class:"hover:text-primary-600 underline underline-offset-4 decoration-1 decoration-dotted transition ease-in duration-200"},n(e,"title"),1,null),1,null),1,null),l("p",null,{class:"text-md sm:text-lg flex-grow"},e.excerpt||e.description,1,null),l("footer",null,{class:"mt-4"},[l("div",null,null,l("span",null,{class:"text-gray-500 dark:text-slate-400"},l("time",{dateTime:String(e.publishDate.getTime())},null,e.publishDate.toLocaleDateString("en-us",{year:"numeric",month:"short",day:"numeric",timeZone:"UTC"}),1,null),1,null),1,null),l("div",null,{class:"mt-4"},null,3,null)],1,null)],1,null)],1,null),1,e.slug)),1,null)],1,"fE_2")},g=async()=>{r()},m=Object.freeze(Object.defineProperty({__proto__:null,_hW:o,s_TZOUNJBiQTE:g,s_zz0sHf8gLh8:d},Symbol.toStringTag,{value:"Module"}));export{o as _hW,g as s_TZOUNJBiQTE,d as s_zz0sHf8gLh8};