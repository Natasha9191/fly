(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[41462],{13935:function(e,t,n){(window.__PWS_LOADED_HANDLERS__=window.__PWS_LOADED_HANDLERS__||{})["www/email/remove"]=function(){return n(506997).Z}},385740:function(e,t,n){"use strict";n.d(t,{BE:function(){return d},Ih:function(){return m},SU:function(){return b},sV:function(){return y}});var r,o=n(76911),i=n(425288),u=n(515198);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach(function(t){var r,o;r=t,o=n[t],(r=function(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==a(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===a(t)?t:String(t)}(r))in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var f=(0,i.Z)("View"),p=f.Provider,y=f.useHook;function d(){return r}function m(e){var t,n=e.children,i=e.initialState,a=function(e){if(Array.isArray(e))return e}(t=(0,o.useState)(void 0===i?{}:i))||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,s=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==t);c=!0);}catch(e){s=!0,o=e}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(s)throw o}}return a}}(t,2)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),c=a[0],f=a[1],y=(0,o.useCallback)(function(){r={},f({})},[]),d=(0,o.useCallback)(function(e){r=s(s({},r),e),f(function(t){return s(s({},t),e)})},[]),m=(0,o.useMemo)(function(){return{viewContextData:c,clearViewContextData:y,setViewContextData:d}},[c,d,y]);return(0,u.jsx)(o.Fragment,{children:(0,u.jsx)(p,{value:m,children:n})})}function b(){return y().viewContextData}},425288:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(76911);function o(e,t){var n="consumer"===t?"".concat(e,"Consumer"):"use".concat(e);return"\n  ".concat(n," must be used within a ").concat(e,"Provider.\n  Please see https://pdocs.pinadmin.com/docs/webapp/docs/testing-jest#createhydra-errors for more information.\n  ")}function i(e,t){var n,i,u=(0,r.createContext)(t),a=((i=(i=e.slice(1)).endsWith("Context")?i:"".concat(i,"Context"),n)?{hocDisplayName:"with".concat(e[0].toUpperCase()).concat(i,"(").concat(n,")")}:{propsDisplayName:"".concat(e[0].toLowerCase()).concat(i),messageDisplayName:"".concat(e[0].toUpperCase()).concat(i)}).messageDisplayName;u.displayName=a;var c=u.Provider,s=function(e){var t=e.children,n=(0,r.useContext)(u);if(void 0===n)throw Error(o(a,"consumer"));return t(n)},l=function(){return(0,r.useContext)(u)};return c.displayName="".concat(a,"Provider"),s.displayName="".concat(a,"Consumer"),{Provider:c,Consumer:s,MaybeConsumer:function(e){return(0,e.children)((0,r.useContext)(u))},useMaybeHook:l,useHook:function(){var e=l();if(void 0===e)throw Error(o(a,"hook"));return e}}}},898781:function(e,t,n){"use strict";n.d(t,{oz:function(){return i},q6:function(){return o}});var r=(0,n(425288).Z)("i18n"),o=r.Provider,i=r.Consumer,u=r.useHook;t.ZP=u},349700:function(e,t,n){"use strict";n.d(t,{Wc:function(){return c},bF:function(){return l},nk:function(){return a},r7:function(){return f}});var r=n(76911),o=n(515198);function i(e,t,n){return e.split(n).map(function(e){if(e.match(n)){var r=e.replace(/[\{\}]/g,"").trim();if(Object.prototype.hasOwnProperty.call(t,r))return t[r]}return e})}var u=/(\{\{\s*\w+\s*\}\})/g;function a(e,t){return i(e,t,u)}function c(e,t){return i(e,t,u).join("")}var s=/(\{\s*\w+\s*\})/g;function l(e,t){return i(e,t,s)}var f=function(e){var t=e.text;return Array.isArray(t)?t.map(function(e,t){return(0,o.jsx)(r.Fragment,{children:e},t)}):t}},780280:function(e,t,n){"use strict";n.d(t,{B:function(){return m},LC:function(){return y},P2:function(){return p},fH:function(){return d},gf:function(){return b}});var r=n(76911),o=n(608832),i=n(239745),u=n(515198);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach(function(t){var r,o;r=t,o=n[t],(r=function(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==a(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===a(t)?t:String(t)}(r))in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var f=(0,r.createContext)();function p(e){var t,n=e.children,a=e.initialValue,c=function(e){if(Array.isArray(e))return e}(t=(0,r.useState)(a))||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,s=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==t);c=!0);}catch(e){s=!0,o=e}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(s)throw o}}return a}}(t,2)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),p=c[0],y=c[1],d=(0,r.useMemo)(function(){return{requestContext:p,updateRequestContext:function(e){var t=s(s({},p),e);(0,i.Z)(p,e)||y(t),(0,o.J)(t)}}},[p]);return(0,u.jsx)(f.Provider,{value:d,children:n})}var y=function(e){var t=e.children,n=(0,r.useContext)(f);if(!n)throw Error("RequestContextConsumer must be used within a RequestContextProvider");return t(n.requestContext)},d=function(e){var t=e.children,n=(0,r.useContext)(f);if(!n)throw Error("RequestContextConsumer must be used within a RequestContextProvider");return t(n.requestContext)};function m(){var e=(0,r.useContext)(f);if(!e)throw Error("useRequestContext must be used within a RequestContextProvider");return e.requestContext}function b(){var e=(0,r.useContext)(f);if(!e)throw Error("useUpdateRequestContext must be used within a RequestContextProvider");return e.updateRequestContext}},608832:function(e,t,n){"use strict";var r;function o(e){r=e}function i(){return r}n.d(t,{J:function(){return o},l:function(){return i}})},784590:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(76911),o=n(506979),i=n(599689),u=n(886858),a=n(780280),c=n(248327),s=n(718368);function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var p={},y=function(e){var t=e.httpStatus;return!t||t>=500};function d(e){var t,n=null!=e?e:{name:"DisabledResource",options:null},d=n.enabledRouteRefresh,m=n.__unstableEnableSuspenseSupport,b=n.headers,v=n.name,h=n.noCache,g=n.options,S=n.schema,_=!e,x=(0,o.useDispatch)(),j=(0,u.Z)(g),w=(0,r.useRef)(null),O=(0,r.useRef)(),P=(0,i.useHistory)(),C=P&&"POP"!==P.action,k=function(e){return(e[v]||p)[j]||p},E=(0,o.useSelector)(function(e){return k(e.resources).nextBookmark}),A=(0,o.useSelector)(function(e){return k(e.resources).data}),D=(0,o.useSelector)(function(e){return k(e.resources).auxData}),$=(0,o.useSelector)(function(e){return k(e.resources).error}),R=(0,o.useSelector)(function(e){return!!k(e.resources).fetching}),T="object"===f(D)&&"string"==typeof(null==D?void 0:D.pagination_group)?D.pagination_group:void 0,M=!!$||void 0!==A,z=M&&!R&&E===s.q,Z=!!(M&&d&&C&&!_),I=function(e){if(Array.isArray(e))return e}(t=(0,r.useState)(Z))||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,s=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==t);c=!0);}catch(e){s=!0,o=e}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(s)throw o}}return a}}(t,2)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),L=I[0],F=I[1],q=(0,r.useCallback)(function(e,t){w.current=x((0,c.U)(v,{options:g,schema:S,bookmark:e,headers:b,paginationGroup:t}))},[x,v,j,S,b]),N=function(){w.current=x((0,c.b)(v,{options:g,schema:S,headers:b}))},B=(0,a.B)().isBot,H=function(){if(!_&&O.current!==j){var e=void 0===O.current;O.current=j,!M&&!R||e&&$&&y($)?q():(!B&&h||Z)&&N()}};(0,r.useEffect)(function(){m||H()}),m&&H();var W=(0,r.useCallback)(function(){_||(N(),F(!0))},[_,c.b,v,j,b,F]),V=(0,r.useCallback)(function(){!E||z||R||_||q(E,T)},[_,q,E,z,R,T]);if(w.current){if(M&&!R)w.current=null;else if(m)throw w.current}var U=(0,r.useRef)({auxData:void 0,data:void 0,error:void 0,fetchMore:V,isAtEnd:!1,isFetching:!1,isLoaded:!1,isRefreshing:!1,nextBookmark:void 0,refresh:W}),Y={auxData:D,data:A,error:$,fetchMore:V,isAtEnd:z,isFetching:R,isLoaded:M,isRefreshing:L,nextBookmark:E,refresh:W};return(0,o.shallowEqual)(Y,U.current)||(L&&(U.current.data||!Z)&&!(0,o.shallowEqual)(Y.data,U.current.data)&&(Y.isRefreshing=!1,F(!1)),U.current=Y),U.current}},418614:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(784590),o=n(19121),i=n(599689),u=n(780280),a=n(50286),c=n(826067);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var l=["getOptions","checkExperiments","disableFetch"];function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function p(e){var t,n,p,y,d,m,b,v,h,g,S,_,x,j,w,O,P,C,k,E,A,D,$,R=e.getOptions,T=e.checkExperiments,M=e.disableFetch,z=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,l),Z=(y=(n={checkExperiments:T,disableFetch:M,viewer:{country:(t=(0,o.Z)()).country||void 0,id:t.id||void 0,isAuth:t.isAuth,isEmployee:!!t.isEmployee,isPartner:!!t.isPartner,username:t.username||void 0}}).checkExperiments,d=n.disableFetch,m=n.viewer,b=(0,i.useLocation)(),v=(0,i.useRouteMatch)(),S=(g={advertiser:(h=(0,u.B)()).advertiser,deviceType:(0,a.Mq)(h),location:b,match:v,viewer:m,inviteCode:null!==(p=h.inviteCode)&&void 0!==p?p:""}).advertiser,_=g.deviceType,j=(x=g.location).pathname,w=x.search,O=g.inviteCode,C=(P=g.match).params,k=P.path,E=g.viewer,A={advertiser:S,deviceType:_,routeData:{inviteCode:O,matchPath:k,params:C,parsedSearch:(0,c.mB)(w),pathname:j,search:w},user:{country:E.country||void 0,id:E.id||void 0,isAuth:E.isAuth,isEmployee:!!E.isEmployee,isPartner:!!E.isPartner,username:E.username||void 0}},$=!!(D=!!d&&d(A))||!y||y(h.experimentsClient),{args:A,fetchDisabled:D||!$}),I=Z.args,L=Z.fetchDisabled,F=R?R(I):void 0;return(0,r.Z)(L?null:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach(function(t){var r,o;r=t,o=n[t],(r=function(e){var t=function(e,t){if("object"!==s(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==s(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===s(t)?t:String(t)}(r))in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({options:F},z))}},239745:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(Object.is(e,t))return!0;if("object"!==r(e)||null===e||"object"!==r(t)||null===t)return!1;var n=Object.keys(e),o=Object.keys(t);return n.length===o.length&&n.every(function(n){return e[n]===t[n]})}n.d(t,{Z:function(){return o}})},858791:function(e,t){"use strict";t.Z=function(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;").replace(/\'/g,"&#39;")}},50286:function(e,t,n){"use strict";n.d(t,{HG:function(){return f},Kf:function(){return u},Mq:function(){return o},Wb:function(){return l},dA:function(){return a},ds:function(){return c},ml:function(){return s}});var r=n(780280);function o(e){var t=e.userAgent,n=t.isMobile;return t.isTablet?"tablet":n?"phone":"desktop"}var i=function(){return o((0,r.B)())},u=function(e){return"phone"===e},a=function(e){return"tablet"===e},c=function(e){return"desktop"===e},s=function(){return u(i())},l=function(){return a(i())},f=function(){return c(i())};t.ZP=i},19121:function(e,t,n){"use strict";n.d(t,{$:function(){return o}});var r=(0,n(425288).Z)("viewer"),o=r.Provider,i=r.useHook;t.Z=i},506997:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});var r=n(50286),o=n(19121),i=n(908390),u=n(628551),a=n(898781),c=n(858791),s=n(76911),l=n(349700),f=n(515198);function p(e){var t=e.recipientEmail,n=(0,a.ZP)();return(0,f.jsxs)(s.Fragment,{children:[(0,f.jsx)(i.xu,{"data-test-id":"dissociateHeading",marginBottom:4,paddingX:4,children:(0,f.jsx)(i.X6,{accessibilityLevel:1,size:"500",align:"center",children:n._('Don\'t remember signing up?', 'title for page to unlink an email from an account', 'title for page to unlink an email from an account')})}),(0,f.jsxs)(i.xu,{children:[(0,f.jsx)(i.xv,{align:"center",children:(0,l.nk)(n._('It\'s possible that someone else used {{emailAddress}} to sign up for Pinterest.', 'explaination to unlink an email from an account', 'explaination to unlink an email from an account'),{emailAddress:t})},"unlink_info_1"),(0,f.jsx)(i.xv,{align:"center",children:"\xa0"}),(0,f.jsx)(i.xv,{align:"center",children:(0,l.nk)(n._('You can remove your email address from this account, but keep in mind that {{warnMessage}} later.', 'explaination to unlink an email from an account', 'explaination to unlink an email from an account'),{warnMessage:(0,f.jsx)(i.xv,{size:"300",inline:!0,weight:"bold",children:n._('this can\u2019t be undone', 'warn message to unlink an email from an account', 'warn message to unlink an email from an account')},"unlink_info_3")})},"unlink_info_2")]})]})}var y=function(e){var t=(0,a.ZP)(),n=e.actionData,r=e.actionId,o=e.associatedWithAccount,s=e.recipientEmail;return(0,f.jsx)(i.W2,{children:(0,f.jsx)(i.xu,{display:"flex",direction:"column",alignSelf:"center",marginTop:8,children:(0,f.jsxs)(i.xu,{width:"60%",alignSelf:"center",children:[(0,f.jsx)(p,{recipientEmail:void 0===s?"":s}),(0,f.jsx)(i.xu,{direction:"row",justifyContent:"center",display:"flex",marginTop:4,children:o?(0,f.jsx)(i.xu,{"data-test-id":"remove-email-address-button",children:(0,f.jsxs)("form",{method:"delete",action:"/email/disassociate/",children:[(0,f.jsx)("input",{type:"hidden",name:"csrfmiddlewaretoken",value:(0,c.Z)((0,u.getCsrfToken)())}),(0,f.jsx)("input",{type:"hidden",name:"user_id",value:r}),(0,f.jsx)("input",{type:"hidden",name:"od",value:n}),(0,f.jsx)(i.zx,{fullWidth:!0,color:"red",text:t._('Remove email address', 'unlink an email from an account', 'unlink an email from an account'),type:"submit",size:"lg"})]})}):(0,f.jsx)(i.xv,{align:"center",color:"subtle",weight:"bold",children:t._('Your email address has been removed', 'unlink an email from an account confirmation', 'unlink an email from an account confirmation')})})]})})})},d=n(418614);function m(){var e=(0,d.Z)({name:"SignedEmailAssociationResource",getOptions:function(e){var t=e.routeData.parsedSearch,n=t.user_id,r=t.od;return{user_id:null==n?void 0:n.replace(/\r?\n|\r/g,""),od:null==r?void 0:r.replace(/\r?\n|\r/g,"")}}}).data;return e?(0,f.jsx)(y,{actionData:e.od,actionId:e.viewing_user,associatedWithAccount:e.associated_with_account,recipientEmail:e.recipient_email}):null}var b=n(599689),v=n(214494),h=n(826067);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,O(r.key),r)}}function _(e,t){return(_=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function x(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t,n){return(t=O(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e){var t=function(e,t){if("object"!==g(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==g(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===g(t)?t:String(t)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)}(a,e);var t,n,r,o=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,n=j(a);if(t){var r=j(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return function(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return x(e)}(this,e)});function a(){var e;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,a);for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return w(x(e=o.call.apply(o,[this].concat(n))),"state",{actionData:"",actionId:"",associatedWithAccount:!0,recipientEmail:"",submitted:!1,isLoaded:!1}),w(x(e),"handleSubmit",function(){var t=e.state,n=t.actionData,r=t.actionId;v.Z.create("SignedEmailAssociationResource",{od:n,user_id:r,csrfmiddlewaretoken:e.escapeHtml((0,u.getCsrfToken)())}).callDelete().then(function(){e.setState({submitted:!0})})}),e}return n=[{key:"componentDidMount",value:function(){var e=this,t=this.props.location.search,n={od:(0,h.mB)(t).od,user_id:(0,h.mB)(t).user_id};v.Z.create("SignedEmailAssociationResource",n).callGet().then(function(t){var n=t.resource_response.data;e.setState({actionData:n.od,actionId:n.viewing_user,associatedWithAccount:n.associated_with_account,recipientEmail:n.recipient_email,isLoaded:!0})})}},{key:"escapeHtml",value:function(e){return e?e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;").replace(/\'/g,"&#39;"):e}},{key:"renderDisassociateContentExp",value:function(){var e=this.state,t=e.associatedWithAccount,n=e.recipientEmail,r=e.submitted;return(0,f.jsx)(i.xu,{display:"flex",direction:"column",alignSelf:"center",marginStart:2,marginEnd:2,marginTop:8,children:t?(0,f.jsxs)(i.xu,{children:[(0,f.jsx)(i.xu,{width:"100%",children:(0,f.jsx)(p,{recipientEmail:n})}),(0,f.jsx)(i.xu,{direction:"row",justifyContent:"center",display:"flex",marginTop:4,children:r?(0,f.jsxs)(i.xv,{align:"center",color:"subtle",weight:"bold",children:[" ",this.props.i18n._('Your email address has been removed', 'unlink an email from an account confirmation', 'unlink an email from an account confirmation')," "]}):(0,f.jsx)(i.xu,{"data-test-id":"remove-email-address-button",children:(0,f.jsx)(i.zx,{fullWidth:!0,color:"red",text:this.props.i18n._('Remove email address', 'unlink an email from an account', 'unlink an email from an account'),type:"submit",size:"lg",onClick:this.handleSubmit})})})]}):(0,f.jsxs)(i.xu,{children:[(0,f.jsx)(p,{recipientEmail:n}),(0,f.jsx)(i.xu,{direction:"row",justifyContent:"center",display:"flex",marginTop:4,children:(0,f.jsxs)(i.xv,{align:"center",color:"subtle",children:[" ",this.props.i18n._('Your email address has been removed', 'unlink an email from an account confirmation', 'unlink an email from an account confirmation')," "]})})]})})}},{key:"render",value:function(){return this.state.isLoaded?this.renderDisassociateContentExp():null}}],S(a.prototype,n),r&&S(a,r),Object.defineProperty(a,"prototype",{writable:!1}),a}(s.PureComponent);function C(){var e=(0,a.ZP)(),t=(0,b.useLocation)();return(0,f.jsx)(P,{i18n:e,location:t})}var k=function(){var e=(0,r.HG)(),t=(0,o.Z)();return e&&t.isAuth?(0,f.jsx)(m,{}):(0,f.jsx)(C,{})}},206134:function(e,t,n){var r;function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var i={}.hasOwnProperty;function u(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=o(n);if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var a=u.apply(null,n);a&&e.push(a)}else if("object"===r)for(var c in n)i.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(u.default=u,e.exports=u):"object"===o(n.amdO)&&n.amdO?void 0!==(r=(function(){return u}).apply(t,[]))&&(e.exports=r):window.classNames=u}()},349424:function(e,t,n){"use strict";var r=n(916731),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},u={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};function c(e){return r.isMemo(e)?u:a[e.$$typeof]||o}a[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a[r.Memo]=u;var s=Object.defineProperty,l=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,y=Object.getPrototypeOf,d=Object.prototype;e.exports=function e(t,n,r){if("string"!=typeof n){if(d){var o=y(n);o&&o!==d&&e(t,o,r)}var u=l(n);f&&(u=u.concat(f(n)));for(var a=c(t),m=c(n),b=0;b<u.length;++b){var v=u[b];if(!i[v]&&!(r&&r[v])&&!(m&&m[v])&&!(a&&a[v])){var h=p(n,v);try{s(t,v,h)}catch(e){}}}}return t}},468278:function(e,t){"use strict";/** @license React v16.8.4
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,u=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,y=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.memo"):60115,b=r?Symbol.for("react.lazy"):60116;function v(e){if("object"===n(e)&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case f:case p:case u:case c:case a:case d:return e;default:switch(e=e&&e.$$typeof){case l:case y:case s:return e;default:return t}}case b:case m:case i:return t}}}function h(e){return v(e)===p}t.typeOf=v,t.AsyncMode=f,t.ConcurrentMode=p,t.ContextConsumer=l,t.ContextProvider=s,t.Element=o,t.ForwardRef=y,t.Fragment=u,t.Lazy=b,t.Memo=m,t.Portal=i,t.Profiler=c,t.StrictMode=a,t.Suspense=d,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===u||e===p||e===c||e===a||e===d||"object"===n(e)&&null!==e&&(e.$$typeof===b||e.$$typeof===m||e.$$typeof===s||e.$$typeof===l||e.$$typeof===y)},t.isAsyncMode=function(e){return h(e)||v(e)===f},t.isConcurrentMode=h,t.isContextConsumer=function(e){return v(e)===l},t.isContextProvider=function(e){return v(e)===s},t.isElement=function(e){return"object"===n(e)&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return v(e)===y},t.isFragment=function(e){return v(e)===u},t.isLazy=function(e){return v(e)===b},t.isMemo=function(e){return v(e)===m},t.isPortal=function(e){return v(e)===i},t.isProfiler=function(e){return v(e)===c},t.isStrictMode=function(e){return v(e)===a},t.isSuspense=function(e){return v(e)===d}},916731:function(e,t,n){"use strict";e.exports=n(468278)},401426:function(e,t){"use strict";/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,u=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,y=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.suspense_list"):60120,b=r?Symbol.for("react.memo"):60115,v=r?Symbol.for("react.lazy"):60116,h=r?Symbol.for("react.block"):60121,g=r?Symbol.for("react.fundamental"):60117,S=r?Symbol.for("react.responder"):60118,_=r?Symbol.for("react.scope"):60119;function x(e){if("object"===n(e)&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case f:case p:case u:case c:case a:case d:return e;default:switch(e=e&&e.$$typeof){case l:case y:case v:case b:case s:return e;default:return t}}case i:return t}}}function j(e){return x(e)===p}t.AsyncMode=f,t.ConcurrentMode=p,t.ContextConsumer=l,t.ContextProvider=s,t.Element=o,t.ForwardRef=y,t.Fragment=u,t.Lazy=v,t.Memo=b,t.Portal=i,t.Profiler=c,t.StrictMode=a,t.Suspense=d,t.isAsyncMode=function(e){return j(e)||x(e)===f},t.isConcurrentMode=j,t.isContextConsumer=function(e){return x(e)===l},t.isContextProvider=function(e){return x(e)===s},t.isElement=function(e){return"object"===n(e)&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return x(e)===y},t.isFragment=function(e){return x(e)===u},t.isLazy=function(e){return x(e)===v},t.isMemo=function(e){return x(e)===b},t.isPortal=function(e){return x(e)===i},t.isProfiler=function(e){return x(e)===c},t.isStrictMode=function(e){return x(e)===a},t.isSuspense=function(e){return x(e)===d},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===u||e===p||e===c||e===a||e===d||e===m||"object"===n(e)&&null!==e&&(e.$$typeof===v||e.$$typeof===b||e.$$typeof===s||e.$$typeof===l||e.$$typeof===y||e.$$typeof===g||e.$$typeof===S||e.$$typeof===_||e.$$typeof===h)},t.typeOf=x},727460:function(e,t,n){"use strict";e.exports=n(401426)},561810:function(e,t){"use strict";/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){var n=e.length;for(e.push(t);0<n;){var r=n-1>>>1,o=e[r];if(0<u(o,t))e[r]=t,e[n]=o,n=r;else break}}function o(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;for(var r=0,o=e.length,i=o>>>1;r<i;){var a=2*(r+1)-1,c=e[a],s=a+1,l=e[s];if(0>u(c,n))s<o&&0>u(l,c)?(e[r]=l,e[s]=n,r=s):(e[r]=c,e[a]=n,r=a);else if(s<o&&0>u(l,n))e[r]=l,e[s]=n,r=s;else break}}return t}function u(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===("undefined"==typeof performance?"undefined":n(performance))&&"function"==typeof performance.now){var a,c=performance;t.unstable_now=function(){return c.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var f=[],p=[],y=1,d=null,m=3,b=!1,v=!1,h=!1,g="function"==typeof setTimeout?setTimeout:null,S="function"==typeof clearTimeout?clearTimeout:null,_="undefined"!=typeof setImmediate?setImmediate:null;function x(e){for(var t=o(p);null!==t;){if(null===t.callback)i(p);else if(t.startTime<=e)i(p),t.sortIndex=t.expirationTime,r(f,t);else break;t=o(p)}}function j(e){if(h=!1,x(e),!v){if(null!==o(f))v=!0,T(w);else{var t=o(p);null!==t&&M(j,t.startTime-e)}}}function w(e,n){v=!1,h&&(h=!1,S(C),C=-1),b=!0;var r=m;try{for(x(n),d=o(f);null!==d&&(!(d.expirationTime>n)||e&&!A());){var u=d.callback;if("function"==typeof u){d.callback=null,m=d.priorityLevel;var a=u(d.expirationTime<=n);n=t.unstable_now(),"function"==typeof a?d.callback=a:d===o(f)&&i(f),x(n)}else i(f);d=o(f)}if(null!==d)var c=!0;else{var s=o(p);null!==s&&M(j,s.startTime-n),c=!1}return c}finally{d=null,m=r,b=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var O=!1,P=null,C=-1,k=5,E=-1;function A(){return!(t.unstable_now()-E<k)}function D(){if(null!==P){var e=t.unstable_now();E=e;var n=!0;try{n=P(!0,e)}finally{n?a():(O=!1,P=null)}}else O=!1}if("function"==typeof _)a=function(){_(D)};else if("undefined"!=typeof MessageChannel){var $=new MessageChannel,R=$.port2;$.port1.onmessage=D,a=function(){R.postMessage(null)}}else a=function(){g(D,0)};function T(e){P=e,O||(O=!0,a())}function M(e,n){C=g(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){v||b||(v=!0,T(w))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return o(f)},t.unstable_next=function(e){switch(m){case 1:case 2:case 3:var t=3;break;default:t=m}var n=m;m=t;try{return e()}finally{m=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=m;m=e;try{return t()}finally{m=n}},t.unstable_scheduleCallback=function(e,i,u){var a=t.unstable_now();switch(u="object"===n(u)&&null!==u&&"number"==typeof(u=u.delay)&&0<u?a+u:a,e){case 1:var c=-1;break;case 2:c=250;break;case 5:c=1073741823;break;case 4:c=1e4;break;default:c=5e3}return c=u+c,e={id:y++,callback:i,priorityLevel:e,startTime:u,expirationTime:c,sortIndex:-1},u>a?(e.sortIndex=u,r(p,e),null===o(f)&&e===o(p)&&(h?(S(C),C=-1):h=!0,M(j,u-a))):(e.sortIndex=c,r(f,e),v||b||(v=!0,T(w))),e},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(e){var t=m;return function(){var n=m;m=t;try{return e.apply(this,arguments)}finally{m=n}}}},456058:function(e,t,n){"use strict";e.exports=n(561810)},830539:function(e,t,n){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(76911),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=r.useState,u=r.useEffect,a=r.useLayoutEffect,c=r.useDebugValue;function s(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!o(e,n)}catch(e){return!0}}var l="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=i({inst:{value:n,getSnapshot:t}}),o=r[0].inst,l=r[1];return a(function(){o.value=n,o.getSnapshot=t,s(o)&&l({inst:o})},[e,n,t]),u(function(){return s(o)&&l({inst:o}),e(function(){s(o)&&l({inst:o})})},[e]),c(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:l},165016:function(e,t,n){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(76911),o=n(768138),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},u=o.useSyncExternalStore,a=r.useRef,c=r.useEffect,s=r.useMemo,l=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var f=a(null);if(null===f.current){var p={hasValue:!1,value:null};f.current=p}else p=f.current;var y=u(e,(f=s(function(){function e(e){if(!c){if(c=!0,u=e,e=r(e),void 0!==o&&p.hasValue){var t=p.value;if(o(t,e))return a=t}return a=e}if(t=a,i(u,e))return t;var n=r(e);return void 0!==o&&o(t,n)?t:(u=e,a=n)}var u,a,c=!1,s=void 0===n?null:n;return[function(){return e(t())},null===s?void 0:function(){return e(s())}]},[t,n,r,o]))[0],f[1]);return c(function(){p.hasValue=!0,p.value=y},[y]),l(y),y}},768138:function(e,t,n){"use strict";e.exports=n(830539)},273897:function(e,t,n){"use strict";e.exports=n(165016)},539439:function(e,t,n){"use strict";function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},811602:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(967809);function o(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,(0,r.Z)(e,t)}},742897:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,{Z:function(){return r}})},967809:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,{Z:function(){return r}})}},function(e){e.O(0,[97270,8390,99689,26067,17492,48327],function(){return e(e.s=13935)}),e.O()}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/www/email/remove-84e178d68c8713c4.js.map