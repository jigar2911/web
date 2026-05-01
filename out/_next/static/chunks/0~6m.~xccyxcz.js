(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,98183,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={assign:function(){return l},searchParamsToUrlQuery:function(){return i},urlQueryToSearchParams:function(){return u}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});function i(e){let t={};for(let[r,n]of e.entries()){let e=t[r];void 0===e?t[r]=n:Array.isArray(e)?e.push(n):t[r]=[e,n]}return t}function a(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function u(e){let t=new URLSearchParams;for(let[r,n]of Object.entries(e))if(Array.isArray(n))for(let e of n)t.append(r,a(e));else t.set(r,a(n));return t}function l(e,...t){for(let r of t){for(let t of r.keys())e.delete(t);for(let[t,n]of r.entries())e.append(t,n)}return e}},18967,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={DecodeError:function(){return h},MiddlewareNotFoundError:function(){return b},MissingStaticPage:function(){return y},NormalizeError:function(){return x},PageNotFoundError:function(){return T},SP:function(){return m},ST:function(){return g},WEB_VITALS:function(){return i},execOnce:function(){return a},getDisplayName:function(){return f},getLocationOrigin:function(){return s},getURL:function(){return c},isAbsoluteUrl:function(){return l},isResSent:function(){return d},loadGetInitialProps:function(){return p},normalizeRepeatedSlashes:function(){return v},stringifyError:function(){return E}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let i=["CLS","FCP","FID","INP","LCP","TTFB"];function a(e){let t,r=!1;return(...n)=>(r||(r=!0,t=e(...n)),t)}let u=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>u.test(e);function s(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function c(){let{href:e}=window.location,t=s();return e.substring(t.length)}function f(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function d(e){return e.finished||e.headersSent}function v(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function p(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await p(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&d(r))return n;if(!n)throw Object.defineProperty(Error(`"${f(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return n}let m="u">typeof performance,g=m&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class h extends Error{}class x extends Error{}class T extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class y extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class b extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function E(e){return JSON.stringify({message:e.message,stack:e.stack})}},33525,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},43985,e=>{"use strict";e.s(["mergeClasses",0,(...e)=>e.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim()])},23846,81996,e=>{"use strict";e.s(["default",0,{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}],23846),e.s(["hasA11yProp",0,e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0;return!1}],81996)},58541,e=>{"use strict";var t=e.i(71645),r=e.i(23846),n=e.i(81996),o=e.i(43985);let i=(0,t.createContext)({}),a=(0,t.forwardRef)(({color:e,size:a,strokeWidth:u,absoluteStrokeWidth:l,className:s="",children:c,iconNode:f,...d},v)=>{let{size:p=24,strokeWidth:m=2,absoluteStrokeWidth:g=!1,color:h="currentColor",className:x=""}=(0,t.useContext)(i)??{},T=l??g?24*Number(u??m)/Number(a??p):u??m;return(0,t.createElement)("svg",{ref:v,...r.default,width:a??p??r.default.width,height:a??p??r.default.height,stroke:e??h,strokeWidth:T,className:(0,o.mergeClasses)("lucide",x,s),...!c&&!(0,n.hasA11yProp)(d)&&{"aria-hidden":"true"},...d},[...f.map(([e,r])=>(0,t.createElement)(e,r)),...Array.isArray(c)?c:[c]])});e.s(["default",0,a],58541)},95057,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={formatUrl:function(){return u},formatWithValidation:function(){return s},urlObjectKeys:function(){return l}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let i=e.r(90809)._(e.r(98183)),a=/https?|ftp|gopher|file/;function u(e){let{auth:t,hostname:r}=e,n=e.protocol||"",o=e.pathname||"",u=e.hash||"",l=e.query||"",s=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?s=t+e.host:r&&(s=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(s+=":"+e.port)),l&&"object"==typeof l&&(l=String(i.urlQueryToSearchParams(l)));let c=e.search||l&&`?${l}`||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||a.test(n))&&!1!==s?(s="//"+(s||""),o&&"/"!==o[0]&&(o="/"+o)):s||(s=""),u&&"#"!==u[0]&&(u="#"+u),c&&"?"!==c[0]&&(c="?"+c),o=o.replace(/[?#]/g,encodeURIComponent),c=c.replace("#","%23"),`${n}${s}${o}${c}${u}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function s(e){return u(e)}},18581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return o}});let n=e.r(71645);function o(e,t){let r=(0,n.useRef)(null),o=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(r.current=i(e,n)),t&&(o.current=i(t,n))},[e,t])}function i(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},73668,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return i}});let n=e.r(18967),o=e.r(52817);function i(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},84508,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},22016,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return h},useLinkStatus:function(){return T}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let i=e.r(90809),a=e.r(43476),u=i._(e.r(71645)),l=e.r(95057),s=e.r(8372),c=e.r(18581),f=e.r(18967),d=e.r(5550);e.r(33525);let v=e.r(88540),p=e.r(91949),m=e.r(73668),g=e.r(9396);function h(t){var r,n;let o,i,h,[T,y]=(0,u.useOptimistic)(p.IDLE_LINK_STATUS),b=(0,u.useRef)(null),{href:E,as:w,children:U,prefetch:R=null,passHref:_,replace:P,shallow:L,scroll:S,onClick:D,onMouseEnter:j,onTouchStart:A,legacyBehavior:N=!1,onNavigate:C,transitionTypes:O,ref:k,unstable_dynamicOnHover:M,...F}=t;o=U,N&&("string"==typeof o||"number"==typeof o)&&(o=(0,a.jsx)("a",{children:o}));let X=u.default.useContext(s.AppRouterContext),B=!1!==R,I=!1!==R?null===(n=R)||"auto"===n?g.FetchStrategy.PPR:g.FetchStrategy.Full:g.FetchStrategy.PPR,$="string"==typeof(r=w||E)?r:(0,l.formatUrl)(r);if(N){if(o?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});i=u.default.Children.only(o)}let z=N?i&&"object"==typeof i&&i.ref:k,V=u.default.useCallback(e=>(null!==X&&(b.current=(0,p.mountLinkInstance)(e,$,X,I,B,y)),()=>{b.current&&((0,p.unmountLinkForCurrentNavigation)(b.current),b.current=null),(0,p.unmountPrefetchableInstance)(e)}),[B,$,X,I,y]),W={ref:(0,c.useMergedRef)(V,z),onClick(t){N||"function"!=typeof D||D(t),N&&i.props&&"function"==typeof i.props.onClick&&i.props.onClick(t),!X||t.defaultPrevented||function(t,r,n,o,i,a,l){if("u">typeof window){let s,{nodeName:c}=t.currentTarget;if("A"===c.toUpperCase()&&((s=t.currentTarget.getAttribute("target"))&&"_self"!==s||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,m.isLocalURL)(r)){o&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),a){let e=!1;if(a({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:f}=e.r(99781);u.default.startTransition(()=>{f(r,o?"replace":"push",!1===i?v.ScrollBehavior.NoScroll:v.ScrollBehavior.Default,n.current,l)})}}(t,$,b,P,S,C,O)},onMouseEnter(e){N||"function"!=typeof j||j(e),N&&i.props&&"function"==typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),X&&B&&(0,p.onNavigationIntent)(e.currentTarget,!0===M)},onTouchStart:function(e){N||"function"!=typeof A||A(e),N&&i.props&&"function"==typeof i.props.onTouchStart&&i.props.onTouchStart(e),X&&B&&(0,p.onNavigationIntent)(e.currentTarget,!0===M)}};return(0,f.isAbsoluteUrl)($)?W.href=$:N&&!_&&("a"!==i.type||"href"in i.props)||(W.href=(0,d.addBasePath)($)),h=N?u.default.cloneElement(i,W):(0,a.jsx)("a",{...F,...W,children:o}),(0,a.jsx)(x.Provider,{value:T,children:h})}e.r(84508);let x=(0,u.createContext)(p.IDLE_LINK_STATUS),T=()=>(0,u.useContext)(x);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},45678,e=>{"use strict";var t=e.i(43476),r=e.i(22016),n=e.i(71645),o=e.i(43985);let i=e=>{let t=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase());return t.charAt(0).toUpperCase()+t.slice(1)};var a=e.i(58541);let u=(e,t)=>{let r=(0,n.forwardRef)(({className:r,...u},l)=>(0,n.createElement)(a.default,{ref:l,iconNode:t,className:(0,o.mergeClasses)(`lucide-${i(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,r),...u}));return r.displayName=i(e),r},l=u("phone",[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]),s=u("menu",[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]),c=u("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);e.s(["default",0,()=>{let[e,o]=(0,n.useState)(!1),[i,a]=(0,n.useState)(!1);(0,n.useEffect)(()=>{let e=()=>{a(window.scrollY>20)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);let u=[{name:"Home",href:"/"},{name:"Services",href:"/services"},{name:"About",href:"/about"},{name:"Contact",href:"/contact"},{name:"Websites",href:"https://oncallwebsites.com"}];return(0,t.jsxs)("nav",{className:`fixed top-0 w-full z-50 transition-all duration-300 ${i?"bg-white/80 backdrop-blur-lg shadow-lg py-2":"bg-transparent py-4"}`,children:[(0,t.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,t.jsxs)("div",{className:"flex justify-between items-center h-20",children:[(0,t.jsx)("div",{className:"flex items-center",children:(0,t.jsx)(r.default,{href:"/",className:"flex items-center group",children:(0,t.jsx)("div",{className:"bg-white p-2 rounded-xl shadow-md group-hover:scale-105 transition-transform",children:(0,t.jsx)("img",{src:"/images/logo.jpg",alt:"Oncall IT Support",className:"h-10 md:h-12 w-auto"})})})}),(0,t.jsxs)("div",{className:"hidden md:flex items-center space-x-1",children:[u.map(e=>(0,t.jsx)(r.default,{href:e.href,className:`px-4 py-2 rounded-lg text-sm font-bold transition-all ${i?"text-gray-700 hover:bg-brand-orange/10 hover:text-brand-orange":"text-white hover:bg-white/10"}`,children:e.name},e.name)),(0,t.jsx)("div",{className:`flex items-center ml-6 pl-6 border-l ${i?"border-gray-200":"border-white/20"}`,children:(0,t.jsxs)("a",{href:"tel:0277777728",className:`flex items-center px-5 py-2.5 rounded-xl font-bold transition-all ${i?"bg-brand-blue text-white hover:bg-brand-orange shadow-lg shadow-blue-900/20":"bg-white text-brand-blue hover:bg-brand-orange hover:text-white"}`,children:[(0,t.jsx)(l,{className:"w-4 h-4 mr-2"}),"027 777 7728"]})})]}),(0,t.jsx)("div",{className:"md:hidden flex items-center",children:(0,t.jsx)("button",{onClick:()=>o(!e),className:`p-2 rounded-lg ${i?"text-gray-900":"text-white"}`,children:e?(0,t.jsx)(c,{className:"w-8 h-8"}):(0,t.jsx)(s,{className:"w-8 h-8"})})})]})}),e&&(0,t.jsx)("div",{className:"md:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 animate-in fade-in slide-in-from-top-4",children:(0,t.jsxs)("div",{className:"px-4 pt-4 pb-8 space-y-2",children:[u.map(e=>(0,t.jsx)(r.default,{href:e.href,className:"block px-4 py-4 text-lg font-bold text-gray-900 hover:bg-gray-50 rounded-xl",onClick:()=>o(!1),children:e.name},e.name)),(0,t.jsx)("div",{className:"pt-4",children:(0,t.jsxs)("a",{href:"tel:0277777728",className:"w-full py-4 bg-brand-blue text-white rounded-xl font-bold flex items-center justify-center text-lg",children:[(0,t.jsx)(l,{className:"w-5 h-5 mr-3"}),"027 777 7728"]})})]})})]})}],45678)},10576,e=>{"use strict";var t=e.i(43476),r=e.i(71645);e.s(["default",0,()=>{let e=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let t=e.current;if(!t)return;let r=t.getContext("webgl",{alpha:!0,depth:!1,antialias:!1});if(!r)return void console.error("WebGL not supported");let n=`
      precision highp float;
      attribute vec2 aPosition;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform vec2 texelSize;
      void main () {
        vUv = aPosition * 0.5 + 0.5;
        vL = vUv - vec2(texelSize.x, 0.0);
        vR = vUv + vec2(texelSize.x, 0.0);
        vT = vUv + vec2(0.0, texelSize.y);
        vB = vUv - vec2(0.0, texelSize.y);
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `,o=`
      precision highp float;
      varying vec2 vUv;
      uniform sampler2D uTexture;
      void main () {
        gl_FragColor = texture2D(uTexture, vUv);
      }
    `,i=`
      precision highp float;
      varying vec2 vUv;
      uniform sampler2D uTexture;
      uniform float value;
      void main () {
        gl_FragColor = value * texture2D(uTexture, vUv);
      }
    `,a=`
      precision highp float;
      varying vec2 vUv;
      uniform sampler2D uTexture;
      void main () {
        vec3 c = texture2D(uTexture, vUv).rgb;
        float a = max(c.r, max(c.g, c.b));
        gl_FragColor = vec4(c, a * 0.8); // Slight transparency
      }
    `,u=`
      precision highp float;
      varying vec2 vUv;
      uniform sampler2D uVelocity;
      uniform sampler2D uSource;
      uniform vec2 texelSize;
      uniform float dt;
      uniform float dissipation;
      void main () {
        vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
        gl_FragColor = dissipation * texture2D(uSource, coord);
      }
    `,l=`
      precision highp float;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uVelocity;
      void main () {
        float L = texture2D(uVelocity, vL).x;
        float R = texture2D(uVelocity, vR).x;
        float T = texture2D(uVelocity, vT).y;
        float B = texture2D(uVelocity, vB).y;
        float div = 0.5 * (R - L + T - B);
        gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
      }
    `,s=`
      precision highp float;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uPressure;
      uniform sampler2D uDivergence;
      void main () {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        float div = texture2D(uDivergence, vUv).x;
        float pressure = (L + R + B + T - div) * 0.25;
        gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
      }
    `,c=`
      precision highp float;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uPressure;
      uniform sampler2D uVelocity;
      void main () {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        vec2 velocity = texture2D(uVelocity, vUv).xy;
        velocity.xy -= vec2(R - L, T - B) * 0.5;
        gl_FragColor = vec4(velocity, 0.0, 1.0);
      }
    `;function f(e,t,r){let n=e.createShader(r);return e.shaderSource(n,t),e.compileShader(n),e.getShaderParameter(n,e.COMPILE_STATUS)||console.error(e.getShaderInfoLog(n)),n}function d(e,t,r){let n=e.createProgram();return e.attachShader(n,f(e,t,e.VERTEX_SHADER)),e.attachShader(n,f(e,r,e.FRAGMENT_SHADER)),e.linkProgram(n),e.getProgramParameter(n,e.LINK_STATUS)||console.error(e.getProgramInfoLog(n)),n}let v={splat:d(r,n,`
      precision highp float;
      varying vec2 vUv;
      uniform sampler2D uTarget;
      uniform float aspect;
      uniform vec2 point;
      uniform vec3 color;
      uniform float radius;
      void main () {
        vec2 p = vUv - point.xy;
        p.x *= aspect;
        vec3 splat = exp(-dot(p, p) / radius) * color;
        vec3 base = texture2D(uTarget, vUv).xyz;
        gl_FragColor = vec4(base + splat, 1.0);
      }
    `),copy:d(r,n,o),clear:d(r,n,i),display:d(r,n,a),advection:d(r,n,u),divergence:d(r,n,l),pressure:d(r,n,s),gradientSubtract:d(r,n,c)};function p(e,t,r){e.activeTexture(e.TEXTURE0);let n=e.createTexture();e.bindTexture(e.TEXTURE_2D,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,t,r,0,e.RGBA,e.UNSIGNED_BYTE,null);let o=e.createFramebuffer();return e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0),{texture:n,fbo:o,width:t,height:r}}function m(e,t,r){let n=p(e,t,r),o=p(e,t,r);return{get read(){return n},get write(){return o},swap(){[n,o]=[o,n]}}}let g=m(r,512,512),h=m(r,128,128),x=p(r,128,128),T=m(r,128,128),y=e=>{r.bindFramebuffer(r.FRAMEBUFFER,e),r.drawArrays(r.TRIANGLE_STRIP,0,4)},b=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,b),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,-1,1,1]),r.STATIC_DRAW);let E=r.getAttribLocation(v.copy,"aPosition");r.enableVertexAttribArray(E),r.vertexAttribPointer(E,2,r.FLOAT,!1,0,0);let w=[],U=!1,R=0,_=0,P=0,L=(e,t,r,n)=>{let o=(e=>{let t=0,r=0,n=0,o=Math.floor(6*e),i=6*e-o,a=+(1-i),u=+(1-(1-i)*1);switch(o%6){case 0:t=1,r=u,n=0;break;case 1:t=a,r=1,n=0;break;case 2:t=0,r=1,n=u;break;case 3:t=0,r=a,n=1;break;case 4:t=u,r=0,n=1;break;case 5:t=1,r=0,n=a}return[t,r,n]})(P);(P+=.005)>1&&(P=0),w.push({x:e,y:t,dx:r,dy:n,color:o})},S=(e,r,n=!1)=>{let o=t.getBoundingClientRect(),i=e/o.width,a=1-r/o.height;if(L(i,a,(e-R)*10,(_-r)*10),n)for(let e=0;e<30;e++){let e=Math.random()*Math.PI*2,t=30*Math.random();L(i+(Math.random()-.5)*.03,a+(Math.random()-.5)*.03,Math.cos(e)*t,Math.sin(e)*t)}R=e,_=r},D=e=>{U=!0,R=e.clientX,_=e.clientY,S(e.clientX,e.clientY,!0)},j=()=>{U=!1},A=e=>{U&&S(e.clientX,e.clientY)};window.addEventListener("mousedown",D),window.addEventListener("mouseup",j),window.addEventListener("mousemove",A);let N=()=>{if(!t||!r)return;let e=window.innerWidth,n=window.innerHeight;(t.width!==e||t.height!==n)&&(t.width=e,t.height=n),r.viewport(0,0,128,128),w.forEach(e=>{r.useProgram(v.splat),r.uniform1f(r.getUniformLocation(v.splat,"aspect"),t.width/t.height),r.uniform2f(r.getUniformLocation(v.splat,"point"),e.x,e.y),r.uniform3f(r.getUniformLocation(v.splat,"color"),e.dx,e.dy,0),r.uniform1f(r.getUniformLocation(v.splat,"radius"),2e-4),r.uniform1i(r.getUniformLocation(v.splat,"uTarget"),0),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,h.read.texture),y(h.write.fbo),h.swap(),r.viewport(0,0,512,512),r.uniform3f(r.getUniformLocation(v.splat,"color"),e.color[0],e.color[1],e.color[2]),r.uniform1f(r.getUniformLocation(v.splat,"radius"),1e-4),r.bindTexture(r.TEXTURE_2D,g.read.texture),y(g.write.fbo),g.swap(),r.viewport(0,0,128,128)}),w=[],r.useProgram(v.advection),r.uniform2f(r.getUniformLocation(v.advection,"texelSize"),.0078125,.0078125),r.uniform1f(r.getUniformLocation(v.advection,"dt"),.016),r.uniform1f(r.getUniformLocation(v.advection,"dissipation"),.97),r.uniform1i(r.getUniformLocation(v.advection,"uVelocity"),0),r.uniform1i(r.getUniformLocation(v.advection,"uSource"),0),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,h.read.texture),y(h.write.fbo),h.swap(),r.uniform1f(r.getUniformLocation(v.advection,"dissipation"),.98),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,h.read.texture),r.uniform1i(r.getUniformLocation(v.advection,"uVelocity"),0),r.activeTexture(r.TEXTURE1),r.bindTexture(r.TEXTURE_2D,g.read.texture),r.uniform1i(r.getUniformLocation(v.advection,"uSource"),1),r.viewport(0,0,512,512),y(g.write.fbo),g.swap(),r.viewport(0,0,128,128),r.useProgram(v.divergence),r.uniform2f(r.getUniformLocation(v.divergence,"texelSize"),.0078125,.0078125),r.uniform1i(r.getUniformLocation(v.divergence,"uVelocity"),0),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,h.read.texture),y(x.fbo),r.useProgram(v.clear),r.uniform1i(r.getUniformLocation(v.clear,"uTexture"),0),r.uniform1f(r.getUniformLocation(v.clear,"value"),.5),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,T.read.texture),y(T.write.fbo),T.swap(),r.useProgram(v.pressure),r.uniform2f(r.getUniformLocation(v.pressure,"texelSize"),.0078125,.0078125),r.uniform1i(r.getUniformLocation(v.pressure,"uDivergence"),0),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,x.texture);for(let e=0;e<20;e++)r.uniform1i(r.getUniformLocation(v.pressure,"uPressure"),1),r.activeTexture(r.TEXTURE1),r.bindTexture(r.TEXTURE_2D,T.read.texture),y(T.write.fbo),T.swap();r.useProgram(v.gradientSubtract),r.uniform2f(r.getUniformLocation(v.gradientSubtract,"texelSize"),.0078125,.0078125),r.uniform1i(r.getUniformLocation(v.gradientSubtract,"uPressure"),0),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,T.read.texture),r.uniform1i(r.getUniformLocation(v.gradientSubtract,"uVelocity"),1),r.activeTexture(r.TEXTURE1),r.bindTexture(r.TEXTURE_2D,h.read.texture),y(h.write.fbo),h.swap(),r.viewport(0,0,t.width,t.height),r.useProgram(v.display),r.uniform1i(r.getUniformLocation(v.display,"uTexture"),0),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,g.read.texture),y(null),requestAnimationFrame(N)};return N(),()=>{window.removeEventListener("mousedown",D),window.removeEventListener("mouseup",j),window.removeEventListener("mousemove",A)}},[]),(0,t.jsx)("canvas",{ref:e,className:"fixed inset-0 pointer-events-none z-[100]",style:{background:"transparent"}})}])}]);