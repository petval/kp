import{S as H}from"./q-d38e1fd3.js";const A="-";function se(e){const r=ae(e),{conflictingClassGroups:o,conflictingClassGroupModifiers:n}=e;function i(l){const a=l.split(A);return a[0]===""&&a.length!==1&&a.shift(),Z(a,r)||ie(l)}function t(l,a){const u=o[l]||[];return a&&n[l]?[...u,...n[l]]:u}return{getClassGroupId:i,getConflictingClassGroupIds:t}}function Z(e,r){var o;if(e.length===0)return r.classGroupId;const n=e[0],i=r.nextPart.get(n),t=i?Z(e.slice(1),i):void 0;if(t)return t;if(r.validators.length===0)return;const l=e.join(A);return(o=r.validators.find(({validator:a})=>a(l)))==null?void 0:o.classGroupId}const ee=/^\[(.+)\]$/;function ie(e){if(ee.test(e)){const r=ee.exec(e)[1],o=r?.substring(0,r.indexOf(":"));if(o)return"arbitrary.."+o}}function ae(e){const{theme:r,prefix:o}=e,n={nextPart:new Map,validators:[]};return de(Object.entries(e.classGroups),o).forEach(([i,t])=>{B(t,n,i,r)}),n}function B(e,r,o,n){e.forEach(i=>{if(typeof i=="string"){const t=i===""?r:re(r,i);t.classGroupId=o;return}if(typeof i=="function"){if(ce(i)){B(i(n),r,o,n);return}r.validators.push({validator:i,classGroupId:o});return}Object.entries(i).forEach(([t,l])=>{B(l,re(r,t),o,n)})})}function re(e,r){let o=e;return r.split(A).forEach(n=>{o.nextPart.has(n)||o.nextPart.set(n,{nextPart:new Map,validators:[]}),o=o.nextPart.get(n)}),o}function ce(e){return e.isThemeGetter}function de(e,r){return r?e.map(([o,n])=>{const i=n.map(t=>typeof t=="string"?r+t:typeof t=="object"?Object.fromEntries(Object.entries(t).map(([l,a])=>[r+l,a])):t);return[o,i]}):e}function ue(e){if(e<1)return{get:()=>{},set:()=>{}};let r=0,o=new Map,n=new Map;function i(t,l){o.set(t,l),r++,r>e&&(r=0,n=o,o=new Map)}return{get(t){let l=o.get(t);if(l!==void 0)return l;if((l=n.get(t))!==void 0)return i(t,l),l},set(t,l){o.has(t)?o.set(t,l):i(t,l)}}}const oe="!";function pe(e){const r=e.separator,o=r.length===1,n=r[0],i=r.length;return function(t){const l=[];let a=0,u=0,b;for(let g=0;g<t.length;g++){let m=t[g];if(a===0){if(m===n&&(o||t.slice(g,g+i)===r)){l.push(t.slice(u,g)),u=g+i;continue}if(m==="/"){b=g;continue}}m==="["?a++:m==="]"&&a--}const p=l.length===0?t:t.substring(u),f=p.startsWith(oe),w=f?p.substring(1):p,v=b&&b>u?b-u:void 0;return{modifiers:l,hasImportantModifier:f,baseClassName:w,maybePostfixModifierPosition:v}}}function be(e){if(e.length<=1)return e;const r=[];let o=[];return e.forEach(n=>{n[0]==="["?(r.push(...o.sort(),n),o=[]):o.push(n)}),r.push(...o.sort()),r}function fe(e){return{cache:ue(e.cacheSize),splitModifiers:pe(e),...se(e)}}const me=/\s+/;function ge(e,r){const{splitModifiers:o,getClassGroupId:n,getConflictingClassGroupIds:i}=r,t=new Set;return e.trim().split(me).map(l=>{const{modifiers:a,hasImportantModifier:u,baseClassName:b,maybePostfixModifierPosition:p}=o(l);let f=n(p?b.substring(0,p):b),w=!!p;if(!f){if(!p)return{isTailwindClass:!1,originalClassName:l};if(f=n(b),!f)return{isTailwindClass:!1,originalClassName:l};w=!1}const v=be(a).join(":");return{isTailwindClass:!0,modifierId:u?v+oe:v,classGroupId:f,originalClassName:l,hasPostfixModifier:w}}).reverse().filter(l=>{if(!l.isTailwindClass)return!0;const{modifierId:a,classGroupId:u,hasPostfixModifier:b}=l,p=a+u;return t.has(p)?!1:(t.add(p),i(u,b).forEach(f=>t.add(a+f)),!0)}).reverse().map(l=>l.originalClassName).join(" ")}function he(){let e=0,r,o,n="";for(;e<arguments.length;)(r=arguments[e++])&&(o=te(r))&&(n&&(n+=" "),n+=o);return n}function te(e){if(typeof e=="string")return e;let r,o="";for(let n=0;n<e.length;n++)e[n]&&(r=te(e[n]))&&(o&&(o+=" "),o+=r);return o}function xe(e,...r){let o,n,i,t=l;function l(u){const b=r.reduce((p,f)=>f(p),e());return o=fe(b),n=o.cache.get,i=o.cache.set,t=a,a(u)}function a(u){const b=n(u);if(b)return b;const p=ge(u,o);return i(u,p),p}return function(){return t(he.apply(null,arguments))}}function c(e){const r=o=>o[e]||[];return r.isThemeGetter=!0,r}const ne=/^\[(?:([a-z-]+):)?(.+)\]$/i,ye=/^\d+\/\d+$/,we=new Set(["px","full","screen"]),ve=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,ke=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,ze=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Ce=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function h(e){return j(e)||we.has(e)||ye.test(e)}function z(e){return G(e,"length",Te)}function j(e){return!!e&&!Number.isNaN(Number(e))}function _(e){return G(e,"number",j)}function S(e){return!!e&&Number.isInteger(Number(e))}function je(e){return e.endsWith("%")&&j(e.slice(0,-1))}function s(e){return ne.test(e)}function C(e){return ve.test(e)}const Ge=new Set(["length","size","percentage"]);function Ie(e){return G(e,Ge,le)}function Me(e){return G(e,"position",le)}const Se=new Set(["image","url"]);function Pe(e){return G(e,Se,He)}function Ne(e){return G(e,"",Ee)}function P(){return!0}function G(e,r,o){const n=ne.exec(e);return n?n[1]?typeof r=="string"?n[1]===r:r.has(n[1]):o(n[2]):!1}function Te(e){return ke.test(e)}function le(){return!1}function Ee(e){return ze.test(e)}function He(e){return Ce.test(e)}function _e(){const e=c("colors"),r=c("spacing"),o=c("blur"),n=c("brightness"),i=c("borderColor"),t=c("borderRadius"),l=c("borderSpacing"),a=c("borderWidth"),u=c("contrast"),b=c("grayscale"),p=c("hueRotate"),f=c("invert"),w=c("gap"),v=c("gradientColorStops"),g=c("gradientColorStopPositions"),m=c("inset"),x=c("margin"),k=c("opacity"),y=c("padding"),D=c("saturate"),O=c("scale"),F=c("sepia"),J=c("skew"),K=c("space"),Q=c("translate"),R=()=>["auto","contain","none"],L=()=>["auto","hidden","clip","visible","scroll"],W=()=>["auto",s,r],d=()=>[s,r],U=()=>["",h,z],N=()=>["auto",j,s],V=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],T=()=>["solid","dashed","dotted","double","none"],X=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"],q=()=>["start","end","center","between","around","evenly","stretch"],I=()=>["","0",s],Y=()=>["auto","avoid","all","avoid-page","page","left","right","column"],M=()=>[j,_],E=()=>[j,s];return{cacheSize:500,separator:":",theme:{colors:[P],spacing:[h,z],blur:["none","",C,s],brightness:M(),borderColor:[e],borderRadius:["none","","full",C,s],borderSpacing:d(),borderWidth:U(),contrast:M(),grayscale:I(),hueRotate:E(),invert:I(),gap:d(),gradientColorStops:[e],gradientColorStopPositions:[je,z],inset:W(),margin:W(),opacity:M(),padding:d(),saturate:M(),scale:M(),sepia:I(),skew:E(),space:d(),translate:d()},classGroups:{aspect:[{aspect:["auto","square","video",s]}],container:["container"],columns:[{columns:[C]}],"break-after":[{"break-after":Y()}],"break-before":[{"break-before":Y()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...V(),s]}],overflow:[{overflow:L()}],"overflow-x":[{"overflow-x":L()}],"overflow-y":[{"overflow-y":L()}],overscroll:[{overscroll:R()}],"overscroll-x":[{"overscroll-x":R()}],"overscroll-y":[{"overscroll-y":R()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],start:[{start:[m]}],end:[{end:[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",S,s]}],basis:[{basis:W()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",s]}],grow:[{grow:I()}],shrink:[{shrink:I()}],order:[{order:["first","last","none",S,s]}],"grid-cols":[{"grid-cols":[P]}],"col-start-end":[{col:["auto",{span:["full",S,s]},s]}],"col-start":[{"col-start":N()}],"col-end":[{"col-end":N()}],"grid-rows":[{"grid-rows":[P]}],"row-start-end":[{row:["auto",{span:[S,s]},s]}],"row-start":[{"row-start":N()}],"row-end":[{"row-end":N()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",s]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",s]}],gap:[{gap:[w]}],"gap-x":[{"gap-x":[w]}],"gap-y":[{"gap-y":[w]}],"justify-content":[{justify:["normal",...q()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...q(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...q(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[y]}],px:[{px:[y]}],py:[{py:[y]}],ps:[{ps:[y]}],pe:[{pe:[y]}],pt:[{pt:[y]}],pr:[{pr:[y]}],pb:[{pb:[y]}],pl:[{pl:[y]}],m:[{m:[x]}],mx:[{mx:[x]}],my:[{my:[x]}],ms:[{ms:[x]}],me:[{me:[x]}],mt:[{mt:[x]}],mr:[{mr:[x]}],mb:[{mb:[x]}],ml:[{ml:[x]}],"space-x":[{"space-x":[K]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[K]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",s,r]}],"min-w":[{"min-w":["min","max","fit",s,h]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[C]},C,s]}],h:[{h:[s,r,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",h,s]}],"max-h":[{"max-h":[s,r,"min","max","fit"]}],"font-size":[{text:["base",C,z]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",_]}],"font-family":[{font:[P]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",s]}],"line-clamp":[{"line-clamp":["none",j,_]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",h,s]}],"list-image":[{"list-image":["none",s]}],"list-style-type":[{list:["none","disc","decimal",s]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[k]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[k]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...T(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",h,z]}],"underline-offset":[{"underline-offset":["auto",h,s]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:d()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",s]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",s]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[k]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...V(),Me]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Ie]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Pe]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[g]}],"gradient-via-pos":[{via:[g]}],"gradient-to-pos":[{to:[g]}],"gradient-from":[{from:[v]}],"gradient-via":[{via:[v]}],"gradient-to":[{to:[v]}],rounded:[{rounded:[t]}],"rounded-s":[{"rounded-s":[t]}],"rounded-e":[{"rounded-e":[t]}],"rounded-t":[{"rounded-t":[t]}],"rounded-r":[{"rounded-r":[t]}],"rounded-b":[{"rounded-b":[t]}],"rounded-l":[{"rounded-l":[t]}],"rounded-ss":[{"rounded-ss":[t]}],"rounded-se":[{"rounded-se":[t]}],"rounded-ee":[{"rounded-ee":[t]}],"rounded-es":[{"rounded-es":[t]}],"rounded-tl":[{"rounded-tl":[t]}],"rounded-tr":[{"rounded-tr":[t]}],"rounded-br":[{"rounded-br":[t]}],"rounded-bl":[{"rounded-bl":[t]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[k]}],"border-style":[{border:[...T(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[k]}],"divide-style":[{divide:T()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...T()]}],"outline-offset":[{"outline-offset":[h,s]}],"outline-w":[{outline:[h,z]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:U()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[k]}],"ring-offset-w":[{"ring-offset":[h,z]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",C,Ne]}],"shadow-color":[{shadow:[P]}],opacity:[{opacity:[k]}],"mix-blend":[{"mix-blend":X()}],"bg-blend":[{"bg-blend":X()}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[n]}],contrast:[{contrast:[u]}],"drop-shadow":[{"drop-shadow":["","none",C,s]}],grayscale:[{grayscale:[b]}],"hue-rotate":[{"hue-rotate":[p]}],invert:[{invert:[f]}],saturate:[{saturate:[D]}],sepia:[{sepia:[F]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[n]}],"backdrop-contrast":[{"backdrop-contrast":[u]}],"backdrop-grayscale":[{"backdrop-grayscale":[b]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[p]}],"backdrop-invert":[{"backdrop-invert":[f]}],"backdrop-opacity":[{"backdrop-opacity":[k]}],"backdrop-saturate":[{"backdrop-saturate":[D]}],"backdrop-sepia":[{"backdrop-sepia":[F]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[l]}],"border-spacing-x":[{"border-spacing-x":[l]}],"border-spacing-y":[{"border-spacing-y":[l]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",s]}],duration:[{duration:E()}],ease:[{ease:["linear","in","out","in-out",s]}],delay:[{delay:E()}],animate:[{animate:["none","spin","ping","pulse","bounce",s]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[O]}],"scale-x":[{"scale-x":[O]}],"scale-y":[{"scale-y":[O]}],rotate:[{rotate:[S,s]}],"translate-x":[{"translate-x":[Q]}],"translate-y":[{"translate-y":[Q]}],"skew-x":[{"skew-x":[J]}],"skew-y":[{"skew-y":[J]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",s]}],accent:[{accent:["auto",e]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",s]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":d()}],"scroll-mx":[{"scroll-mx":d()}],"scroll-my":[{"scroll-my":d()}],"scroll-ms":[{"scroll-ms":d()}],"scroll-me":[{"scroll-me":d()}],"scroll-mt":[{"scroll-mt":d()}],"scroll-mr":[{"scroll-mr":d()}],"scroll-mb":[{"scroll-mb":d()}],"scroll-ml":[{"scroll-ml":d()}],"scroll-p":[{"scroll-p":d()}],"scroll-px":[{"scroll-px":d()}],"scroll-py":[{"scroll-py":d()}],"scroll-ps":[{"scroll-ps":d()}],"scroll-pe":[{"scroll-pe":d()}],"scroll-pt":[{"scroll-pt":d()}],"scroll-pr":[{"scroll-pr":d()}],"scroll-pb":[{"scroll-pb":d()}],"scroll-pl":[{"scroll-pl":d()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",s]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[h,z,_]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const $=xe(_e),$e=e=>{const{title:r="",subtitle:o="",highlight:n="",classes:i={}}=e,{container:t="max-w-3xl",title:l="text-4xl md:text-5xl ",subtitle:a="text-xl"}=i;return r||o||n?H("div",{class:$("mb-8 md:mx-auto md:mb-12 text-center",t)},null,[n&&H("p",{dangerouslySetInnerHTML:n},{class:"text-base text-primary-600 dark:text-purple-200 font-bold tracking-wide uppercase"},null,3,"Hx_0"),r&&H("h2",{class:$("font-bold leading-tighter tracking-tighter font-heading text-heading",l),dangerouslySetInnerHTML:r},null,null,3,"Hx_1"),o&&H("p",{class:$("mt-4 text-muted",a),dangerouslySetInnerHTML:o},null,null,3,"Hx_2")],1,"Hx_3"):null};export{$e as H,$ as t};
