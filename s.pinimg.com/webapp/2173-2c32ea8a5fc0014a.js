"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[2173],{247414:function(e){var i,n,t,r=(n=[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],t=[i={alias:null,args:null,kind:"ScalarField",name:"entityId",storageKey:null}],{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"SinglePinModuleRedux_pin",selections:[i,{alias:null,args:null,kind:"ScalarField",name:"trackingParams",storageKey:null},{alias:"imageSpec_170x",args:[{kind:"Literal",name:"spec",value:"170x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:n,storageKey:'images(spec:"170x")'},{alias:"imageSpec_236x",args:[{kind:"Literal",name:"spec",value:"236x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:n,storageKey:'images(spec:"236x")'},{alias:"imageSpec_736x",args:[{kind:"Literal",name:"spec",value:"736x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:n,storageKey:'images(spec:"736x")'},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"pinner",plural:!1,selections:t,storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"originPinner",plural:!1,selections:t,storageKey:null}],type:"Pin",abstractKey:null});r.hash="7a4083656f8bcc78255a6771d19dc156",e.exports=r},961157:function(e){var i,n={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"SingleStoryPinModuleRedux_pin",selections:[{alias:null,args:null,kind:"ScalarField",name:"entityId",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"trackingParams",storageKey:null},{alias:"imageSpec_170x",args:[{kind:"Literal",name:"spec",value:"170x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:i=[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],storageKey:'images(spec:"170x")'},{alias:"imageSpec_236x",args:[{kind:"Literal",name:"spec",value:"236x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:i,storageKey:'images(spec:"236x")'},{alias:"imageSpec_736x",args:[{kind:"Literal",name:"spec",value:"736x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:i,storageKey:'images(spec:"736x")'},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"pinner",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"imageMediumUrl",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"imageSmallUrl",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"fullName",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"StoryPinData",kind:"LinkedField",name:"storyPinData",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"pageCount",storageKey:null}],storageKey:null}],type:"Pin",abstractKey:null};n.hash="e1c06284d5b0075a6e2d79ee59103d17",e.exports=n},937310:function(e){var i,n,t,r,l,a,o,u,s,d,c=(i={alias:null,args:null,kind:"ScalarField",name:"entityId",storageKey:null},l=[n={alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},t={alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],d=[i,a={alias:null,args:null,kind:"ScalarField",name:"fullName",storageKey:null},o={alias:null,args:null,kind:"ScalarField",name:"imageSmallUrl",storageKey:null},u={alias:null,args:null,kind:"ScalarField",name:"imageMediumUrl",storageKey:null},s={alias:null,args:null,concreteType:"VerifiedIdentity",kind:"LinkedField",name:"verifiedIdentity",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"verified",storageKey:null}],storageKey:null}],{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"TodayArticleModule",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,concreteType:"Pin",kind:"LinkedField",name:"contentPin",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},i,{alias:"images170x",args:[{kind:"Literal",name:"spec",value:"170x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:l,storageKey:'images(spec:"170x")'},{alias:"images236x",args:[{kind:"Literal",name:"spec",value:"236x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:l,storageKey:'images(spec:"236x")'},{alias:"images736x",args:[{kind:"Literal",name:"spec",value:"736x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:l,storageKey:'images(spec:"736x")'},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"originPinner",plural:!1,selections:d,storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"pinner",plural:!1,selections:[i,u,o,a,s],storageKey:null},{alias:null,args:null,concreteType:"StoryPinData",kind:"LinkedField",name:"storyPinData",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"pageCount",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"trackingParams",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"contentPinOfficialUser",plural:!1,selections:d,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"displayType",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"feedSource",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"headerPinId",storageKey:null},i,{alias:null,args:null,kind:"ScalarField",name:"imageUrls",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isProductPinFeed",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"showCreator",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"subtitle",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:null,concreteType:"Pin",kind:"LinkedField",name:"videoPin",plural:!1,selections:[i,{alias:null,args:null,concreteType:"Video",kind:"LinkedField",name:"videos",plural:!1,selections:[{alias:null,args:null,concreteType:"VideoList",kind:"LinkedField",name:"videoList",plural:!1,selections:[{alias:null,args:null,concreteType:"VideoDetail",kind:"LinkedField",name:"v720P",plural:!1,selections:[n,{alias:null,args:null,kind:"ScalarField",name:"thumbnail",storageKey:null},t,r],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:"TodayArticle",abstractKey:null});c.hash="a75e5ee6e059cb1a1863523f0e8f0ae6",e.exports=c},784641:function(e,i,n){n.d(i,{T7:function(){return l},Y_:function(){return s},bl:function(){return o},d9:function(){return c},nx:function(){return d},xt:function(){return u}}),n(908390);var t=n(780280),r=n(19121);function l(e,i,n,t){var r=n.toLowerCase().replace(/[.,\/#!?$%\^&\*+;:{}=\-_`~()\’'"]/g,"").trim().replace(/\s+/g,"-");return"/today/".concat(i?"shop":0===e||2===e?"trending":1===e?"best":"article","/").concat(encodeURIComponent(r),"/").concat(t,"/")}var a={en:["US","GB","CA","IN","AU","ID"],es:["MX","PE","AR","CL","CO","ES","VE","UY","PY","EC","BO","CR","DO","SV","GT","HN","NI","PR","PA"],pt:["BR"],de:["DE","AT","CH"],fr:["FR"],id:["ID"],ja:["JP"],it:["IT"],sv:["SE"]};function o(){var e,i=(0,t.B)(),n=(0,r.Z)(),l=n.isAuth?n.country:i.country;return void 0!==i&&void 0!==i.locale&&(null===(e=a[i.locale.substring(0,2)])||void 0===e?void 0:e.includes(l))}var u=function(e,i,n){return e||i||n||""},s=function(e){return"todayarticle"===e.type},d=function(e){return Array.isArray(e)&&e.length>0&&e.every(function(e){return"story"===e.type})},c=function(e,i){return(null!=e?e:1)/(null!=i?i:1)}},233959:function(e,i,n){n.d(i,{BH:function(){return r},L_:function(){return t},ZP:function(){return l}});var t=444,r=404;function l(){return{maxColumn:3,moduleWidth:t,moduleHeight:306,gutterWidth:16,feedWidth:3*(t+16)}}},388619:function(e,i,n){var t=n(704115);i.Z=function(e){var i=e.url;if(i){var n=i.split("?");if(n[1])return(0,t.Z)(n[1])}return(0,t.Z)()}},215292:function(e,i,n){n.d(i,{q:function(){return o}});var t=n(76911);function r(e,i){return function(e){if(Array.isArray(e))return e}(e)||function(e,i){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,r,l,a,o=[],u=!0,s=!1;try{if(l=(n=n.call(e)).next,0===i){if(Object(n)!==n)return;u=!1}else for(;!(u=(t=l.call(n)).done)&&(o.push(t.value),o.length!==i);u=!0);}catch(e){s=!0,r=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw r}}return o}}(e,i)||function(e,i){if(e){if("string"==typeof e)return l(e,i);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,i)}}(e,i)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,i){(null==i||i>e.length)&&(i=e.length);for(var n=0,t=Array(i);n<i;n++)t[n]=e[n];return t}var a=function(){var e=r((0,t.useState)(!1),2),i=e[0],n=e[1],l=r((0,t.useState)(!1),2),a=l[0],o=l[1],u=r((0,t.useState)(!1),2),s=u[0],d=u[1];return{active:i,focused:a,hovered:s,onBlur:function(){o(!1),n(!1)},onFocus:function(){return o(!0)},onMouseDown:function(){return n(!0)},onMouseEnter:function(){return d(!0)},onMouseLeave:function(){d(!1),n(!1)},onMouseUp:function(){return n(!1)}}};function o(e){return(0,e.children)(a())}i.Z=a},198125:function(e,i,n){n.d(i,{Z:function(){return l}});var t=n(76911);function r(e,i){(null==i||i>e.length)&&(i=e.length);for(var n=0,t=Array(i);n<i;n++)t[n]=e[n];return t}function l(){var e,i=function(e){if(Array.isArray(e))return e}(e=(0,t.useState)(!1))||function(e,i){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,r,l,a,o=[],u=!0,s=!1;try{if(l=(n=n.call(e)).next,0===i){if(Object(n)!==n)return;u=!1}else for(;!(u=(t=l.call(n)).done)&&(o.push(t.value),o.length!==i);u=!0);}catch(e){s=!0,r=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw r}}return o}}(e,2)||function(e,i){if(e){if("string"==typeof e)return r(e,i);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,i)}}(e,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n=i[0],l=i[1];return{isHovering:n,handleMouseEnter:(0,t.useCallback)(function(){return l(!0)},[l]),handleMouseLeave:(0,t.useCallback)(function(){return l(!1)},[l])}}},635974:function(e,i,n){n.d(i,{Z:function(){return u}});var t=n(506979),r=n(815613),l=n(461773),a=n(698330),o=n(515198);function u(e){var i=e.user,n=e.invertColors,u=e.isSecondaryButton,s=e.onTap,d=e.size,c=e.viewParameter,g=e.viewType,p=(0,t.useDispatch)(),m=(null!=i?i:{}).id,y=(0,a.kW)(),f=y[m]?y[m].explicitly_followed_by_me:null==i?void 0:i.explicitly_followed_by_me;return(0,o.jsx)(r.Z,{id:m,onFollow:function(){p((0,l.ZN)(m)),s&&s()},onUnfollow:function(){p((0,l.fv)(m)),s&&s()},size:d,invertColors:n,isSecondaryButton:u,isFollowed:f,isUserFollowButton:!0,followEventType:45,unfollowEventType:46,viewParameter:c,viewType:g,pinKey:null})}},167525:function(e,i,n){n.d(i,{Z:function(){return o}});var t=n(908390),r=n(643010),l=n(898781),a=n(515198);function o(e){var i=e.text,n=e.icon,o=e.largeIdentifier,u=e.largeMargin,s=(0,l.ZP)();return(0,a.jsxs)(t.xu,{zIndex:new t.Ry(1),alignItems:"center",dangerouslySetInlineStyle:{__style:{backgroundColor:(0,r.Yc)()?"rgba(0, 0, 0, 0.7)":"rgba(255, 255, 255, 0.8)"}},"data-test-id":"PinTypeIdentifier",display:"flex",margin:u?4:2,overflow:"hidden",position:"absolute",rounding:"pill",padding:2,paddingX:o?4:void 0,height:o?36:24,top:!0,children:[n&&(0,a.jsx)(t.xu,{marginEnd:o?2:1,children:(0,a.jsx)(t.JO,{accessibilityLabel:s._('identifier that shows the pin type', 'pin.pincard.iconAccessibilityLabel', 'shows an icon with the pin type'),color:"default",icon:n,inline:!0,size:o?18:12})}),(0,a.jsx)(t.xv,{inline:!0,size:o?"200":"100",weight:"bold",children:i})]})}},725214:function(e,i,n){var t=n(388619);i.Z=function(e){var i=(0,t.Z)({url:e.location.search});switch(e.action){case"PUSH":if("news_hub"===i.entrySource)return"deeplink";return"click";case"REPLACE":return"click";case"POP":if(!e.location.key)return"deeplink";return"click";default:return null}}},830157:function(e,i,n){n.d(i,{Z:function(){return t}});function t(e,i){return e||"".concat(i||"","~0")}},655428:function(e,i,n){n.d(i,{Z:function(){return l}});var t=n(908390),r=n(515198);function l(e){var i=e.description,n=e.imageUrl,l=e.imageHeight,a=e.imageWidth;return(0,r.jsx)(t.xu,{position:"absolute",top:!0,left:!0,bottom:!0,right:!0,overflow:"hidden",children:(0,r.jsx)(t.Ee,{alt:null!=i?i:"",src:null!=n?n:"",fit:"cover",naturalHeight:null!=l?l:1,naturalWidth:null!=a?a:1,color:"#767676"})})}},909792:function(e,i,n){n.d(i,{Z:function(){return u}});var t=n(908390),r=n(50286),l=n(198125),a=n(531029),o=n(515198);function u(e){var i,n=e.headerAccessibilityLevel,u=e.imageUrls,s=e.subtitle,d=e.subtitleSize,c=e.subtitleWeight,g=e.title,p=e.titleSize,m=(0,r.HG)(),y=(0,l.Z)(),f=y.isHovering,v=y.handleMouseEnter,h=y.handleMouseLeave;return!u||u.length<=0?null:(0,o.jsxs)(t.xu,{borderStyle:"shadow",color:"default",overflow:"hidden",position:"relative",rounding:8,dangerouslySetInlineStyle:{__style:{paddingTop:"75%"}},onMouseEnter:m?v:void 0,onMouseLeave:m?h:void 0,children:[f&&(0,o.jsx)(a.Z,{}),(0,o.jsx)(t.xu,{position:"absolute",top:!0,left:!0,bottom:!0,right:!0,children:(0,o.jsx)(t.Ee,{alt:"",color:"#767676",fit:"cover",naturalHeight:1,naturalWidth:1,role:"presentation",src:null!==(i=u[0])&&void 0!==i?i:"",children:(0,o.jsx)(t.xu,{height:"100%",width:"100%",dangerouslySetInlineStyle:{__style:{background:"linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%)"}},display:"flex",alignItems:"end",paddingY:6,paddingX:5,children:(0,o.jsxs)(t.kC,{alignItems:"stretch",direction:"column",justifyContent:"center",width:"100%",children:[s&&(0,o.jsx)(t.xu,{marginBottom:1,children:(0,o.jsx)(t.xv,{color:"light",size:d,align:"center",weight:c,children:s})}),(0,o.jsx)(t.X6,{color:"light",size:p,align:"center",accessibilityLevel:void 0===n?1:n,children:g})]})})})})]})}},736609:function(e,i,n){var t=n(599689),r=n(908390),l=n(50286),a=n(198125),o=n(861411),u=n(830157),s=n(531029),d=n(326860),c=n(515198);i.Z=function(e){var i=e.articleId,n=e.creatorId,g=e.creatorFullName,p=e.creatorImgSrc,m=e.creatorIsVerified,y=e.gridIndex,f=e.imageHeight,v=e.imageWidth,h=e.imageUrl,x=e.pinId,b=e.showCreator,S=e.trackingParams,w=e.title,I=e.viewParameter,j=e.viewType,k=(0,t.useLocation)(),_=(0,a.Z)(),P=_.isHovering,T=_.handleMouseEnter,F=_.handleMouseLeave,L=(0,l.HG)();return(0,c.jsxs)(r.xu,{borderStyle:"shadow",position:"relative",color:"default",onMouseEnter:L?T:void 0,onMouseLeave:L?F:void 0,overflow:"hidden",rounding:8,children:[P&&(0,c.jsx)(s.Z,{}),(0,c.jsx)(o.dL,{auxData:{grid_index:y,today_article_id:i},loggingId:x,objectIdStr:x,slotIndex:y,impressionData:{imageURL:h},component:13525,trackingParams:(0,u.Z)((k.state||{}).trackingParams,S),viewParameter:I,viewType:j,children:function(e){var i=e.impressionTrackerRef;return(0,c.jsx)(r.xu,{position:"relative",dangerouslySetInlineStyle:{__style:{paddingTop:"number"==typeof f&&"number"==typeof v?"".concat(f/v*100,"%"):"100%"}},ref:i,children:(0,c.jsx)(r.xu,{position:"absolute",top:!0,left:!0,right:!0,bottom:!0,children:(0,c.jsx)(r.Ee,{alt:w,color:"#767676",fit:"cover",naturalHeight:1,naturalWidth:1,src:null!=h?h:""})})})}}),(0,c.jsxs)(r.xu,{paddingX:6,paddingY:4,display:"flex",justifyContent:"center",direction:"column",children:[(0,c.jsx)(r.X6,{align:"center",size:"400",children:w}),b&&(n||g)&&(0,c.jsx)(r.xu,{display:"flex",marginTop:3,justifyContent:"center",children:(0,c.jsx)(d.Z,{userId:n,creatorFullName:g,creatorImgSrc:p,creatorIsVerified:m})})]})]})}},91937:function(e,i,n){var t=n(599689),r=n(908390),l=n(356997),a=n(861411),o=n(830157),u=n(167525),s=n(515198);i.Z=function(e){var i=e.articleId,n=e.gridIndex,d=e.hasPinnerAttribution,c=e.imageHeight,g=e.imageWidth,p=e.imageUrl,m=e.pageCount,y=e.pinId,f=e.pinnerImageSrc,v=e.pinnerName,h=e.pinTrackingParams,x=e.title,b=e.viewParameter,S=e.viewType,w=(0,t.useLocation)();return(0,s.jsxs)(r.xu,{borderStyle:"shadow",color:"default",overflow:"hidden",paddingY:6,rounding:8,children:[(0,s.jsx)(r.xu,{paddingX:6,display:"flex",justifyContent:"center",children:(0,s.jsx)(r.X6,{align:"center",size:"400",children:x})}),(0,s.jsx)(a.dL,{auxData:{grid_index:n,today_article_id:i},loggingId:y,objectIdStr:y,slotIndex:n,impressionData:{imageURL:p},component:13525,trackingParams:(0,o.Z)((w.state||{}).trackingParams,h),viewParameter:b,viewType:S,children:function(e){var i=e.impressionTrackerRef;return(0,s.jsxs)(r.xu,{marginTop:4,paddingX:12,ref:i,children:[(0,s.jsx)(r.zd,{rounding:8,children:(0,s.jsx)(r.xu,{position:"relative",dangerouslySetInlineStyle:{__style:{paddingTop:"number"==typeof c&&"number"==typeof g?"".concat(c/g*100,"%"):"100%"}},children:(0,s.jsx)(r.xu,{position:"absolute",top:!0,left:!0,right:!0,bottom:!0,children:(0,s.jsx)(r.Ee,{alt:"",color:"#767676",fit:"cover",naturalHeight:1,naturalWidth:1,src:null!=p?p:"",children:(0,s.jsx)(r.xu,{position:"relative",marginStart:1,marginTop:1,children:(0,s.jsx)(u.Z,{icon:"idea-pin",text:m.toString()})})})})})}),d&&(0,s.jsxs)(r.xu,{alignItems:"center",display:"flex",marginTop:2,maxWidth:"100%",children:[(0,s.jsx)(r.xu,{flex:"none",height:44,width:44,marginEnd:2,children:(0,s.jsx)(l.qE,{name:"",outline:!0,size:"fit",src:f})}),(0,s.jsx)(r.xv,{lineClamp:1,children:v})]})]})}})]})}},371172:function(e,i,n){var t=n(599689),r=n(908390),l=n(50286),a=n(198125),o=n(861411),u=n(830157),s=n(531029),d=n(326860),c=n(619519),g=n(515198);i.Z=function(e){var i=e.articleId,n=e.creatorId,p=e.creatorFullName,m=e.creatorImgSrc,y=e.creatorIsVerified,f=e.gridIndex,v=e.height,h=e.pinDescription,x=e.pinImageHeight,b=e.pinImageUrl,S=e.pinImageWidth,w=e.showCreator,I=e.thumbnail,j=e.title,k=e.trackingParams,_=e.url,P=e.videoPinId,T=e.viewParameter,F=e.viewType,L=e.width,K=(0,t.useLocation)(),U=(0,l.HG)(),C=(0,a.Z)(),Z=C.isHovering,O=C.handleMouseEnter,A=C.handleMouseLeave;return(0,g.jsxs)(r.xu,{borderStyle:"shadow",color:"default",direction:"column",display:"flex",flex:"none",overflow:"hidden",rounding:8,dangerouslySetInlineStyle:{__style:{transform:"translate3d(0, 0, 0)"}},onMouseEnter:U?O:void 0,onMouseLeave:U?A:void 0,children:[Z&&(0,g.jsx)(s.Z,{}),(0,g.jsx)(o.dL,{auxData:{grid_index:f,today_article_id:i},loggingId:P,objectIdStr:P,slotIndex:f,impressionData:{imageURL:b},component:13525,trackingParams:(0,u.Z)((K.state||{}).trackingParams,k),viewParameter:T,viewType:F,children:function(e){var i=e.impressionTrackerRef;return(0,g.jsx)(r.xu,{ref:i,children:(0,g.jsx)(c.Z,{height:v,thumbnail:I,url:_,width:L,pinDescription:h,pinImageUrl:b,pinImageHeight:x,pinImageWidth:S})})}}),(0,g.jsxs)(r.xu,{paddingX:6,paddingY:4,display:"flex",justifyContent:"center",direction:"column",children:[(0,g.jsx)(r.X6,{align:"center",size:"400",children:j}),w&&(n||p)&&(0,g.jsx)(r.xu,{display:"flex",marginTop:3,justifyContent:"center",children:(0,g.jsx)(d.Z,{userId:n,creatorFullName:p,creatorImgSrc:m,creatorIsVerified:y})})]})]})}},591289:function(e,i,n){n.d(i,{Z:function(){return s}});var t=n(908390),r=n(276602),l=n(50286),a=n(198125),o=n(531029),u=n(515198);function s(e){var i=e.imageUrls,n=e.rounding,s=e.subtitle,d=e.subtitleSize,c=e.title,g=e.titleSize,p=(0,l.HG)(),m=(0,r.E)(),y=0,f=function(){0==(y-=1)&&(null==m||m.markConstraintComplete("idea_module_loaded"))},v=(0,a.Z)(),h=v.isHovering,x=v.handleMouseEnter,b=v.handleMouseLeave;if(!i||i.length<=0)return null;var S=i.slice(0,3);return m&&(y=S.length),(0,u.jsxs)(t.xu,{borderStyle:"shadow",color:"default",overflow:"hidden",position:"relative",rounding:null!=n?n:8,dangerouslySetInlineStyle:{__style:{paddingTop:"75%"}},onMouseEnter:p?x:void 0,onMouseLeave:p?b:void 0,children:[h&&(0,u.jsx)(o.Z,{}),(0,u.jsxs)(t.xu,{display:"flex",direction:"column",position:"absolute",top:!0,left:!0,bottom:!0,right:!0,children:[(0,u.jsx)(t.kC,{alignItems:"stretch",justifyContent:"start",height:"100%",width:"100%",children:S.map(function(e,i){return(0,u.jsx)(t.xu,{width:"".concat(100/S.length,"%"),dangerouslySetInlineStyle:{__style:{WebkitMaskImage:"-webkit-radial-gradient(white, black)"}},children:(0,u.jsx)(t.Ee,{alt:"",color:"#767676",fit:"cover",naturalHeight:1,naturalWidth:1,role:"presentation",src:null!=e?e:"",onLoad:f})},i)})}),(0,u.jsxs)(t.xu,{flex:"none",paddingX:5,paddingY:6,width:"100%",children:[s&&(0,u.jsx)(t.xu,{marginBottom:1,children:(0,u.jsx)(t.xv,{size:d,align:"center",weight:p?"bold":"normal",children:s})}),(0,u.jsx)(t.X6,{size:g,align:"center",children:c})]})]})]})}},228153:function(e,i,n){n.d(i,{i:function(){return k},y:function(){return w}});var t,r=n(704217),l=n(599689),a=n(908390),o=n(112690),u=n(780280),s=n(233959),d=n(784641),c=n(52022),g=n(50286),p=n(725214),m=n(861411),y=n(909792),f=n(736609),v=n(91937),h=n(371172),x=n(591289),b=n(515198),S=new Set([3,2,6]),w=function(e){var i=e.ArticleModule,n=e.clientTrackingParams,t=e.id,r=e.displayType,u=e.gridIndex,s=e.isTodayArticlePage,d=void 0!==s&&s,y=e.isHubRedesign,f=void 0!==y&&y,v=e.onArticleTapUrl,h=e.pinId,x=e.viewParameter,w=e.viewType,j=(0,l.useHistory)(),k=(0,o.Z)(),_=(0,c.Z)(),P=(0,g.HG)();return(0,b.jsx)(m.Y4,{auxData:{grid_index:u.toString(),today_article_id:t},loggingId:t,objectIdStr:t,slotIndex:u,viewParameter:x||3372,viewType:w||1,children:function(e){var l=e.impressionTrackerRef;return(0,b.jsx)(a.xu,{ref:l,"data-test-id":"suggested-articles-link",children:(0,b.jsx)(I,{href:v,isTodayArticlePage:d,isHubRedesign:f,onTap:function(){k({event_type:P?101:102,view_type:w||1,view_parameter:x||3372,component:13525,aux_data:{today_article_id:t,grid_index:u.toString()}}),_({action:"click",item:"suggested-articles-link"}),"number"==typeof r&&S.has(r)&&n&&h&&k({event_type:P?101:102,view_type:w||1,view_parameter:x||3372,object_id_str:h,clientTrackingParams:n,aux_data:{today_article_id:h,grid_index:u.toString(),cosmic_ray_count:"4",closeup_navigation_type:(0,p.Z)(j)}}),j.push(v)},children:i})})}})},I=function(e){var i=e.children,n=e.href,t=e.isTodayArticlePage,r=e.isHubRedesign,l=e.onTap,o=(0,u.B)().isAuthenticated,d=(0,g.HG)(),c=(0,s.ZP)(),p=c.moduleWidth,m=c.moduleHeight,y=r?s.BH:void 0;return o?(0,b.jsx)(a.iP,{onTap:function(e){l({event:e.event})},tapStyle:"compress",children:d?(0,b.jsx)(a.xu,{width:t||r?y:p,minHeight:t?void 0:m,height:r?m:void 0,children:i}):i}):(0,b.jsx)(a.Tg,{href:n,onTap:function(e){var i=e.event;(0,e.dangerouslyDisableOnNavigation)(),l({event:i})},children:d?(0,b.jsx)(a.xu,{width:t||r?y:p,minHeight:t?void 0:m,height:r?m:void 0,children:i}):i})},j=void 0!==t?t:t=n(937310),k=function(e){var i=e.containerKey,n=e.gridIndex,t=e.headerAccessibilityLevel,l=e.subtitleSize,a=e.titleSize,o=e.viewParameter,u=e.viewType,s=(0,r.useFragment)(j,i),c=s.contentPinOfficialUser,g=s.contentPin,p=s.displayType,m=s.feedSource,S=s.headerPinId,I=s.entityId,k=s.imageUrls,_=s.isProductPinFeed,P=s.showCreator,T=s.subtitle,F=s.title,L=s.videoPin,K=null,U=(0,d.T7)(null!=m?m:0,null!=_&&_,null!=F?F:"",null!=I?I:""),C=null!=g?g:{},Z=C.description,O=C.images170x,A=C.images236x,D=C.images736x,H=C.pinner,E=C.storyPinData,R=C.trackingParams,M=null!==(B=null!==(X=null!==(Y=null==D?void 0:D.url)&&void 0!==Y?Y:null==A?void 0:A.url)&&void 0!==X?X:null==O?void 0:O.url)&&void 0!==B?B:"",z=null!==(G=null!==(q=null==D?void 0:D.width)&&void 0!==q?q:null==A?void 0:A.width)&&void 0!==G?G:null==O?void 0:O.width,V=null!==($=null!==(J=null==D?void 0:D.height)&&void 0!==J?J:null==A?void 0:A.height)&&void 0!==$?$:null==O?void 0:O.height,W=(null!=g?g:{}).originPinner,N=c||W||H;switch(p){case 0:K=(0,b.jsx)(y.Z,{headerAccessibilityLevel:t,imageUrls:k,subtitle:null!=T?T:"",subtitleSize:l||"300",title:null!=F?F:"",titleSize:a||"500"});break;case 1:K=(0,b.jsx)(x.Z,{imageUrls:k,subtitle:null!=T?T:"",subtitleSize:l||"300",title:null!=F?F:"",titleSize:a||"500"});break;case 2:var B,X,Y,G,q,$,J,Q,ee,ei,en,et,er,el,ea,eo,eu,es=null!=L?L:{},ed=es.entityId,ec=es.videos,eg=null!==(Q=null==ec?void 0:null===(ee=ec.videoList)||void 0===ee?void 0:ee.v720P)&&void 0!==Q?Q:{};ed&&(K=(0,b.jsx)(h.Z,{articleId:null!=I?I:"",creatorFullName:null==N?void 0:N.fullName,creatorImgSrc:(null==N?void 0:N.imageMediumUrl)||(null==N?void 0:N.imageSmallUrl),creatorIsVerified:!!(null==N?void 0:null===(eu=N.verifiedIdentity)||void 0===eu?void 0:eu.verified),gridIndex:n,height:eg.height,pinDescription:Z,pinImageUrl:M,pinImageHeight:V,pinImageWidth:z,showCreator:!!P,thumbnail:eg.thumbnail,title:null!=F?F:"",trackingParams:R,url:eg.url,videoPinId:ed,viewParameter:o,viewType:u,width:eg.width}),U="/pin/".concat(ed));break;case 3:if(!M)return null;K=(0,b.jsx)(f.Z,{articleId:null!=I?I:"",creatorFullName:null==N?void 0:N.fullName,creatorImgSrc:(null==N?void 0:N.imageMediumUrl)||(null==N?void 0:N.imageSmallUrl),creatorIsVerified:!!(null==N?void 0:null===(ei=N.verifiedIdentity)||void 0===ei?void 0:ei.verified),imageUrl:M,imageHeight:null!=V?V:0,imageWidth:null!=z?z:0,gridIndex:n,pinId:null!==(en=null==g?void 0:g.entityId)&&void 0!==en?en:"",showCreator:!!P,title:null!=F?F:"",trackingParams:R,viewParameter:o,viewType:u}),U=S?"/pin/".concat(S):U;break;case 6:if(!M)return null;var ep=null!==(et=null!==(er=null==H?void 0:H.imageMediumUrl)&&void 0!==er?er:null==H?void 0:H.imageSmallUrl)&&void 0!==et?et:"",em=null!==(el=null==H?void 0:H.fullName)&&void 0!==el?el:"";return(0,b.jsx)(v.Z,{articleId:null!=I?I:"",gridIndex:n,hasPinnerAttribution:!!(ep||em),imageUrl:M,imageHeight:null!=V?V:0,imageWidth:null!=z?z:0,pageCount:null!==(ea=null==E?void 0:E.pageCount)&&void 0!==ea?ea:"",pinId:null!==(eo=null==g?void 0:g.entityId)&&void 0!==eo?eo:"",pinnerImageSrc:ep,pinnerName:em,pinTrackingParams:R,title:null!=F?F:"",viewParameter:o,viewType:u});default:K=null}return K?(0,b.jsx)(w,{ArticleModule:K,displayType:p,gridIndex:n,id:null!=I?I:"",onArticleTapUrl:U,viewParameter:o,viewType:u}):null}},531029:function(e,i,n){n.d(i,{Z:function(){return a}});var t=n(908390),r=n(515198),l=new t.Ry(1);function a(){return(0,r.jsx)(t.xu,{opacity:.1,color:"transparentDarkGray",position:"absolute",top:!0,left:!0,bottom:!0,right:!0,zIndex:l})}},326860:function(e,i,n){var t=n(76911),r=n(908390),l=n(356997),a=n(865607),o=n(698330),u=n(515198);i.Z=function(e){var i,n,s,d,c,g,p=e.userId,m=e.creatorFullName,y=e.creatorImgSrc,f=e.creatorIsVerified,v=(n=(i=null!==(g=(0,o.mN)()(null!=p?p:""))&&void 0!==g?g:{}).full_name,s=i.image_medium_url,d=i.image_small_url,{fullNameFromStore:n,imgSrcFromStore:s||d,isVerifiedFromStore:!!(null==(c=i.verified_identity)?void 0:c.verified)}),h=v.fullNameFromStore,x=v.imgSrcFromStore,b=v.isVerifiedFromStore,S=p?h:m,w=p?x:y,I=p?b:f;return(0,u.jsx)(r.kC,{alignContent:"center",alignItems:"center",flex:"none",justifyContent:"center",width:"100%",children:S&&(0,u.jsxs)(t.Fragment,{children:[(0,u.jsx)(r.xu,{paddingX:1,children:(0,u.jsx)(l.qE,{name:S,size:"sm",src:null!=w?w:""})}),(0,u.jsx)(r.xu,{minWidth:0,paddingX:1,children:(0,u.jsx)(r.xv,{lineClamp:1,size:"300",weight:"bold",children:S})}),I&&(0,u.jsx)(r.xu,{paddingX:1,children:(0,u.jsx)(a.Z,{hasVerifiedIdentity:I,iconOnly:!0,size:"xs"})})]})})}},502962:function(e,i,n){n.d(i,{Z:function(){return Z}});var t,r,l=n(506979),a=n(784641),o=n(350118),u=n(908390),s=n(112690),d=n(356997),c=n(780280),g=n(50286),p=n(198125),m=n(635974),y=n(531029),f=n(515198);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,t)}return n}function x(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?h(Object(n),!0).forEach(function(i){var t,r;t=i,r=n[i],(t=function(e){var i=function(e,i){if("object"!==v(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var t=n.call(e,i||"default");if("object"!==v(t))return t;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===i?String:Number)(e)}(e,"string");return"symbol"===v(i)?i:String(i)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}var b=Math.floor(24),S=function(e){var i=e.articleId,n=e.imageUrls,t=e.subtitle,r=e.title,l=e.viewParameter,a=e.viewType,o=e.user,v=(0,c.B)().isAuthenticated,h=(0,g.HG)(),S=(0,p.Z)(),w=S.isHovering,I=S.handleMouseEnter,j=S.handleMouseLeave,k=(0,s.Z)();if(!o||!n||n.length<=0)return null;var _=o.full_name,P=o.image_medium_url,T=o.image_small_url,F=Math.min(n.length,3),L={aux_data:{today_article_id:i},component:13525,object_id_str:i,view_parameter:l,view_type:a};return(0,f.jsxs)(u.xu,{borderStyle:"shadow",color:"default",onMouseEnter:h?I:void 0,onMouseLeave:h?j:void 0,overflow:"hidden",rounding:8,children:[w&&(0,f.jsx)(y.Z,{}),(0,f.jsx)(u.xu,{display:"flex",position:"relative",width:"100%",dangerouslySetInlineStyle:{__style:{paddingTop:"45%"}},children:(0,f.jsx)(u.xu,{display:"flex",height:"100%",direction:"row",left:!0,position:"absolute",top:!0,width:"100%",children:n.slice(0,F).map(function(e,i){return(0,f.jsx)(u.xu,{width:"".concat(100/F,"%"),children:(0,f.jsx)(u.Ee,{alt:"",color:"#767676",fit:"cover",naturalHeight:1,naturalWidth:1,src:e},i)})})})}),(0,f.jsxs)(u.xu,{flex:"none",paddingX:5,paddingY:6,position:"relative",width:"100%",children:[(0,f.jsx)(u.xu,{height:48,position:"absolute",width:48,dangerouslySetInlineStyle:{__style:{left:"calc(50% - ".concat(b,"px)"),top:"-".concat(b,"px")}},children:(0,f.jsx)(d.qE,{name:null!=_?_:"",outline:!0,size:"fit",src:P||T||""})}),r&&(0,f.jsx)(u.xu,{marginTop:2,children:(0,f.jsx)(u.X6,{size:"400",align:"center",children:r})}),t&&(0,f.jsx)(u.xu,{marginTop:2,children:(0,f.jsx)(u.xv,{align:"center",size:"100",children:t})}),v&&(0,f.jsx)(u.xu,{display:"flex",justifyContent:"center",marginTop:3,children:(0,f.jsx)(m.Z,{isSecondaryButton:!0,onTap:function(){k(x(x({},L),{},{element:62,event_type:h?101:102}))},size:"lg",user:o,viewParameter:l,viewType:a})})]})]})};n(704217);var w=n(916117),I=n(736609),j=void 0!==t?t:t=n(247414);function k(e){var i,n,t=e.articleId,r=e.gridIndex,l=e.pinKey,o=e.pinOfficialUserId,u=e.showCreator,s=e.title,d=e.viewParameter,c=e.viewType,g=(0,w.u)(j,l).data;if(!g)return null;var p=g.entityId,m=g.originPinner,y=g.pinner,v=g.trackingParams,h=g.imageSpec_736x||g.imageSpec_236x||g.imageSpec_170x;if(!h)return null;var x=(0,a.xt)(o,null==m?void 0:m.entityId,null==y?void 0:y.entityId);return(0,f.jsx)(I.Z,{articleId:t,creatorId:x,gridIndex:r,pinId:p,imageHeight:null!==(i=h.height)&&void 0!==i?i:void 0,imageUrl:h.url,imageWidth:null!==(n=h.width)&&void 0!==n?n:void 0,showCreator:u,title:s,trackingParams:v,viewParameter:d,viewType:c})}var _=n(91937),P=void 0!==r?r:r=n(961157),T=function(e){var i,n,t=e.articleId,r=e.gridIndex,l=e.pinKey,a=e.title,o=e.viewParameter,u=e.viewType,s=(0,w.u)(P,l).data,d=s||{},c=d.pinner,g=d.storyPinData;if(!s)return null;var p=(null==g?void 0:g.pageCount)||"",m=s.imageSpec_736x||s.imageSpec_236x||s.imageSpec_170x;if(!m)return null;var y=(null==c?void 0:c.imageMediumUrl)||(null==c?void 0:c.imageSmallUrl)||"",v=(null==c?void 0:c.fullName)||"";return(0,f.jsx)(_.Z,{articleId:t,imageHeight:null!==(i=m.height)&&void 0!==i?i:void 0,imageWidth:null!==(n=m.width)&&void 0!==n?n:void 0,imageUrl:m.url,gridIndex:r,hasPinnerAttribution:!!(y||v),pageCount:p,pinId:s.entityId,pinnerImageSrc:y,pinnerName:v,pinTrackingParams:s.trackingParams,title:a,viewParameter:o,viewType:u})},F=n(371172);function L(e){var i,n,t=e.articleId,r=e.gridIndex,l=e.pinOfficialUserId,u=e.showCreator,s=e.title,d=e.videoPinId,c=e.viewParameter,g=e.viewType,p=(0,o.S6)()(d);if(!p)return null;var m=p.description,y=p.images,v=p.origin_pinner,h=p.pinner,x=p.tracking_params,b=(0,a.xt)(l,null==v?void 0:v.id,null==h?void 0:h.id),S=(null==y?void 0:y["736x"])||(null==y?void 0:y["236x"])||(null==y?void 0:y["170x"])||{},w=null!=S?S:{},I=w.url,j=w.height,k=w.width,_=null===(i=p.videos)||void 0===i?void 0:null===(n=i.video_list)||void 0===n?void 0:n.V_720P,P=null!=_?_:{},T=P.height,L=P.thumbnail,K=P.url,U=P.width;return(0,f.jsx)(F.Z,{articleId:t,creatorId:b,gridIndex:r,height:T,pinDescription:m,pinImageHeight:j,pinImageUrl:I,pinImageWidth:k,showCreator:u,title:s,trackingParams:x,thumbnail:L,url:K,videoPinId:d,viewParameter:c,viewType:g,width:U})}var K=n(909792),U=n(591289),C=n(228153),Z=function(e){var i=e.gridIndex,n=e.headerAccessibilityLevel,t=e.id,r=e.isTodayArticlePage,u=e.isHubRedesign,s=e.article,d=e.subtitleSize,c=e.subtitleWeight,g=e.titleSize,p=e.viewParameter,m=e.viewType,y=(0,l.useSelector)(function(e){var i=e.todayArticles;return s||i[t]}),v=y.content_pin||y.video_pin,h=(0,o.S6)()(y.content_pin||""),x=(0,o.S6)()(y.video_pin||""),b=h||x;if(!y)return null;var w=y.article_creator_user,I=y.content_pin_official_user,j=y.display_type,_=y.feed_source,P=y.header_pin_id,F=y.image_urls,Z=y.is_product_pin_feed,O=y.show_creator,A=y.subtitle,D=y.title,H=y.video_pin,E=v?null==b?void 0:b.tracking_params:void 0,R=null,M=(0,a.T7)(_,null!=Z&&Z,D,t);switch(j){case 0:R=(0,f.jsx)(K.Z,{headerAccessibilityLevel:n,imageUrls:F,subtitle:A,subtitleSize:d||"300",subtitleWeight:c,title:D,titleSize:g||"500"});break;case 1:R=(0,f.jsx)(U.Z,{imageUrls:F,subtitle:A,subtitleSize:d||"300",title:D,titleSize:g||"500"});break;case 2:H&&(R=(0,f.jsx)(L,{articleId:t,gridIndex:i,pinOfficialUserId:I,showCreator:O,title:D,videoPinId:H,viewParameter:p,viewType:m}),M="/pin/".concat(H));break;case 3:R=(0,f.jsx)(k,{articleId:t,gridIndex:i,pinKey:null!=h?{type:"deprecated",data:h}:null,pinOfficialUserId:I,showCreator:O,title:D,viewParameter:p,viewType:m}),M="/pin/".concat(P);break;case 6:R=(0,f.jsx)(T,{articleId:t,gridIndex:i,pinKey:null!=h?{type:"deprecated",data:h}:null,title:D,viewParameter:p,viewType:m}),M="/pin/".concat(P);break;case 8:w?(R=(0,f.jsx)(S,{articleId:t,imageUrls:F,subtitle:A,title:D,user:w,viewParameter:p,viewType:m}),M="/".concat(encodeURIComponent(w.username),"/")):R=null;break;default:R=null}return R?(0,f.jsx)(C.y,{ArticleModule:R,clientTrackingParams:E,displayType:j,gridIndex:i,id:t,isTodayArticlePage:r,isHubRedesign:u,onArticleTapUrl:M,pinId:v,viewParameter:p,viewType:m}):null}},619519:function(e,i,n){n.d(i,{Z:function(){return y}});var t=n(76911),r=n(908390),l=n(722767),a=n(655428),o=n(515198);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,i){for(var n=0;n<i.length;n++){var t=i[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,m(t.key),t)}}function d(e,i){return(d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,i){return e.__proto__=i,e})(e,i)}function c(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,i,n){return(i=m(i))in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function m(e){var i=function(e,i){if("object"!==u(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var t=n.call(e,i||"default");if("object"!==u(t))return t;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===i?String:Number)(e)}(e,"string");return"symbol"===u(i)?i:String(i)}var y=function(e){!function(e,i){if("function"!=typeof i&&null!==i)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(i&&i.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),i&&d(e,i)}(m,e);var i,n,t=(i=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,n=g(m);if(i){var t=g(this).constructor;e=Reflect.construct(n,arguments,t)}else e=n.apply(this,arguments);return function(e,i){if(i&&("object"===u(i)||"function"==typeof i))return i;if(void 0!==i)throw TypeError("Derived constructors may only return object or undefined");return c(e)}(this,e)});function m(){var e;!function(e,i){if(!(e instanceof i))throw TypeError("Cannot call a class as a function")}(this,m);for(var i=arguments.length,n=Array(i),r=0;r<i;r++)n[r]=arguments[r];return p(c(e=t.call.apply(t,[this].concat(n))),"state",{isPlaying:!1,isVideoReady:!1,isVisibleForPlaying:!1,startLoading:!1}),p(c(e),"handleVisibilityChanged",function(i){var n=i[0].intersectionRatio,t=e.state,r=t.isPlaying,l=t.isVideoReady,a=t.startLoading;n>=.8?(e.setState({isVisibleForPlaying:!0}),e.videoRef&&(a?l&&!r&&e.videoRef.play():(e.videoRef.load(),e.setState({startLoading:!0})))):(e.setState({isVisibleForPlaying:!1}),e.videoRef&&l&&e.videoRef.pause())}),p(c(e),"handleVideoPause",function(){return e.setState({isPlaying:!1})}),p(c(e),"handleVideoPlay",function(){return e.setState({isPlaying:!0})}),p(c(e),"getVideoRef",function(i){return e.videoRef=i}),p(c(e),"setIsVideoReadyTrue",function(){e.setState({isVideoReady:!0}),e.videoRef&&!e.state.isPlaying&&e.state.isVisibleForPlaying&&e.videoRef.play()}),e}return s(m.prototype,[{key:"render",value:function(){var e=this.props,i=e.height,n=e.thumbnail,t=e.url,u=e.width,s=e.pinDescription,d=e.pinImageHeight,c=e.pinImageUrl,g=e.pinImageWidth;return t?(0,o.jsx)(l.Z,{options:{threshold:[0,.5,.8,1]},onVisibilityChange:this.handleVisibilityChanged,children:(0,o.jsx)(r.xu,{position:"relative",dangerouslySetInlineStyle:{__style:{paddingBottom:"".concat(100*((null!=i?i:1)/(null!=u?u:1)),"%")}},children:(0,o.jsx)(r.xu,{position:"absolute",top:!0,left:!0,bottom:!0,right:!0,children:(0,o.jsx)("video",{height:"100%",muted:!0,onCanPlay:this.setIsVideoReadyTrue,onPause:this.handleVideoPause,onPlay:this.handleVideoPlay,playsInline:!0,poster:n,preload:"none",ref:this.getVideoRef,src:t,width:"100%"})})})}):(0,o.jsx)(r.xu,{position:"relative",dangerouslySetInlineStyle:{__style:{paddingBottom:"100%"}},children:(0,o.jsx)(a.Z,{description:s,imageUrl:c,imageHeight:d,imageWidth:g})})}}]),n&&s(m,n),Object.defineProperty(m,"prototype",{writable:!1}),m}(t.PureComponent)}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/2173-2c32ea8a5fc0014a.js.map