(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[76783],{770545:function(e,t,i){(window.__PWS_LOADED_HANDLERS__=window.__PWS_LOADED_HANDLERS__||{})["www/business/business-access/[userBizId]/employees/invites"]=function(){return i(467987).Z}},554002:function(e,t,i){"use strict";var n=i(908390),s=i(489746),r=i(515198);t.Z=function(e){var t=e.heading,i=e.title,o=e.titleSize,c=e.titleBadge,l=e.subtitle,a=e.cta,_=e.secondaryAction,u=e.search,d=e.isLoading,v=e.table;return(0,r.jsxs)(n.xu,{children:[t,(0,r.jsxs)(n.xu,{direction:"row",display:"flex",justifyContent:"between",marginBottom:4,children:[(0,r.jsxs)(n.kC,{alignItems:"start",direction:"column",justifyContent:"center",children:[(0,r.jsxs)(n.kC,{alignItems:"center",gap:{row:2,column:0},children:["string"==typeof i?(0,r.jsx)(n.X6,{size:void 0===o?"500":o,children:i}):i,c]}),!!l&&(0,r.jsx)(n.xu,{marginBottom:2,marginTop:2,maxWidth:700,children:(0,r.jsx)(n.xv,{size:"200",children:l})})]}),_&&(0,r.jsx)(n.xu,{children:_})]}),(0,r.jsxs)(n.xu,{alignItems:"center",display:"flex",justifyContent:"between",marginBottom:4,children:[(0,r.jsx)(n.xu,{marginBottom:2,minWidth:330,children:u}),a&&(0,r.jsx)(n.xu,{marginBottom:2,children:a})]}),d?(0,r.jsx)(s.Z,{}):(0,r.jsx)(n.xu,{marginBottom:2,children:v})]})}},489746:function(e,t,i){"use strict";var n=i(908390),s=i(852260),r=i(898781),o=i(515198);t.Z=function(){var e=(0,r.ZP)();return(0,o.jsx)(n.kC,{alignItems:"stretch",justifyContent:"center",children:(0,o.jsx)(n.$j,{accessibilityLabel:(0,s.hC)(e),delay:!1,show:!0,size:"sm"})})}},168574:function(e,t,i){"use strict";var n=i(908390),s=i(326884),r=i(298361),o=i(898781),c=i(773285),l=i(912997),a=i(273453),_=i(515198);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,n)}return i}function v(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?d(Object(i),!0).forEach(function(t){var n,s;n=t,s=i[t],(n=function(e){var t=function(e,t){if("object"!==u(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!==u(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===u(t)?t:String(t)}(n))in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):d(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}var b=function(e,t){var i=e.inviteStatus,n=e.inviteDirection,s=e.isPartner;if("EXPIRED"===i)return t._('Expired invite', '[m10n]bizAccess.invite.expired', 'expired invite message in invite tables');if(s){if("RECEIVED"===n)return t._('You\'ve received a partner invite', '[m10n]bizAccess.invite.received', 'received invite message in invite tables');if("SENT"===n)return t._('You sent this invite.', '[m10n]bizAccess.invite.sent', 'sent invite message in invite tables')}if("PENDING"===i)return t._('Pending invite', '[m10n]bizAccess.invite.pending', 'pending invite message in invite tables')},f=function(e){var t=e.data,i=t.created_by_biz,s=(i=void 0===i?{id:""}:i).id,l=t.created_by_business,u=(l=void 0===l?{id:""}:l).id,d=t.invite_data,v=d.invite_status,f=d.sent_at,p=t.user,m=p.username,h=p.email,y=t.extended_user_info,E=e.type,P=(0,o.ZP)(),g=(0,(0,c.F)().checkExperiment)("business_access_invites_api_v4_migration").anyEnabled,x=(0,r.Z)(),j=y||{},A=j.image_small_url,z=void 0===A?"https://s.pinimg.com/images/user/default_60.png":A,S=j.full_name,R=(0,a.KJ)(),I=h||m||S;return(0,_.jsxs)(n.xu,{alignItems:"center",display:"flex",justifyContent:"start",paddingY:1,rounding:1,children:[I&&(0,_.jsxs)(n.kC,{alignItems:"start",justifyContent:"start",children:[z&&(0,_.jsx)(n.xu,{marginEnd:4,marginStart:4,marginTop:1,children:(0,_.jsx)(n.qE,{name:I,size:"sm",src:z})}),(0,_.jsx)(n.kC,{alignItems:"start",direction:"column",justifyContent:"center",children:(0,_.jsxs)(n.xu,{margin:1,children:[(0,_.jsxs)(n.xu,{marginBottom:2,children:[(0,_.jsx)(n.xv,{align:"start",color:"default",size:"200",weight:"bold",children:I}),(0,_.jsx)(n.xv,{align:"start",color:"default",size:"200",children:b({inviteDirection:R===(g?u:s)?"SENT":"RECEIVED",inviteStatus:v,isPartner:"PARTNER"===E},P)})]}),(0,_.jsx)(n.xv,{align:"start",color:"subtle",size:"100",children:x(new Date(f).toString())})]})})]}),!I&&(0,_.jsx)(n.xv,{color:"subtle",size:"100",children:"—"})]})};t.Z=function(e,t){var i=e.type;return{field:"id",headerName:e.isInvites?t._('Invites', '[m10n]bizAccess.invite.column.name.invites', 'Summary of invites'):t._('Requests', '[m10n]bizAccess.invite.column.name.requests', 'Summary of requests'),TableCellComponent:function(e){return(0,_.jsx)(f,v(v({},e),{},{type:i}))},minWidth:l.I.columnWidths.lg,sortable:!1,initialSortOrder:s.IR.ASCENDING,isActivelyStored:!0}}},816127:function(e,t,i){"use strict";i.d(t,{Z:function(){return h}});var n=i(76911),s=i(599689),r=i(908390),o=i(898781),c=i(773285),l=i(826067),a=i(82347),_=i(273453),u=i(515198),d=function(e){var t=e.value,i=e.data,d=i.created_by_biz,v=(d=void 0===d?{id:""}:d).id,b=i.created_by_business,f=(b=void 0===b?{id:""}:b).id,p=(0,o.ZP)(),m=(0,a.o)().openSheet,h=(0,s.useLocation)(),y=(0,l.mB)(h.search).invite_id,E=(0,_.KJ)(),P=(0,(0,c.F)().checkExperiment)("business_access_invites_api_v4_migration").anyEnabled?f:v,g=E===P;return(0,n.useEffect)(function(){y===t&&(g?m("PARTNER_SEND_INVITE",{id:t}):m("PARTNER_RECEIVE_INVITE",{id:t,partnerId:P}))},[y,t,g]),(0,u.jsx)(n.Fragment,{children:(0,u.jsx)(r.kC,{alignItems:"center",justifyContent:"start",children:(0,u.jsx)(r.xu,{bottom:!0,display:"flex",justifyContent:"center",children:(0,u.jsx)(r.zx,{accessibilityLabel:p._('Review partner invite', '[m10n]bizAccess.business.partner.invite.review.accessibility', 'accessibility text for button to toggle review partner invite sheet'),fullWidth:!0,onClick:function(){g?m("PARTNER_SEND_INVITE",{id:t}):m("PARTNER_RECEIVE_INVITE",{id:t,partnerId:P})},text:p._('Review', '[m10n]bizAccess.business.partner.invite.review', 'button to toggle review partner invite sheet')})})})})},v={partner_invite:{sentPendingPartnerSheet:"PARTNER_SEND_INVITE",receivedPendingPartnerSheet:"PARTNER_RECEIVE_INVITE"},partner_request:{sentPendingPartnerSheet:"PARTNER_SEND_REQUEST",receivedPendingPartnerSheet:"PARTNER_RECEIVE_REQUEST"}},b=function(e){var t=e.value,i=e.data,d=(0,(0,c.F)().checkExperiment)("business_access_invites_api_v4_migration").anyEnabled,b=i.invite_data.invite_type,f=i.user.id,p=d?i.created_by_business.id:i.created_by_biz.id,m=(0,o.ZP)(),h=(0,a.o)().openSheet,y=(0,s.useLocation)(),E=(0,l.mB)(y.search),P=E.invite_id,g=E.request_id,x=(0,_.KJ)()===p,j=v["PARTNER_INVITE"===b?"partner_invite":"partner_request"],A=j.sentPendingPartnerSheet,z=j.receivedPendingPartnerSheet;return(0,n.useEffect)(function(){(P===t||g===t)&&(x?h(A,{id:t}):h(z,{id:t,partnerId:p}))},[P,g,t,x]),(0,u.jsx)(n.Fragment,{children:(0,u.jsx)(r.kC,{alignItems:"center",justifyContent:"start",children:(0,u.jsx)(r.xu,{bottom:!0,display:"flex",justifyContent:"center",children:(0,u.jsx)(r.xu,{"data-test-id":"partner-pending-review-button-".concat(f,"-").concat(t),children:(0,u.jsx)(r.hU,{accessibilityLabel:m._('Review pending parter invite or request', '[m10n]bizAccess.business.partner.invite.review.accessibility', 'accessibility text for button to toggle review partner invite or request sheet'),icon:"eye",iconColor:"darkGray",onClick:function(){x?h(A,{id:t}):h(z,{id:t,partnerId:p})},size:"md",tooltip:{text:m._('Review invite', '[[m10n]bizAccess.business.partner.invite.review.tooltip', 'icon button tooltip to toggle review partner invite sheet')}})})})})})},f=function(e){var t=e.value,i=e.data,d=i.created_by_biz,v=(d=void 0===d?{id:""}:d).id,b=i.created_by_business,f=(b=void 0===b?{id:""}:b).id,p=(0,o.ZP)(),m=(0,a.o)().openSheet,h=(0,s.useLocation)(),y=(0,l.mB)(h.search).request_id,E=(0,_.KJ)(),P=(0,(0,c.F)().checkExperiment)("business_access_invites_api_v4_migration").anyEnabled?f:v,g=E===P;return(0,n.useEffect)(function(){y===t&&(g?m("PARTNER_SEND_REQUEST",{id:t}):m("PARTNER_RECEIVE_REQUEST",{id:t,partnerId:P}))},[y,t,g]),(0,u.jsx)(n.Fragment,{children:(0,u.jsx)(r.kC,{alignItems:"center",justifyContent:"start",children:(0,u.jsx)(r.xu,{bottom:!0,display:"flex",justifyContent:"center",children:(0,u.jsx)(r.zx,{accessibilityLabel:p._('Review partner request', '[m10n]bizAccess.business.partner.request.review.accessibility', 'accessibility text for button to toggle review partner request sheet'),fullWidth:!0,onClick:function(){g?m("PARTNER_SEND_REQUEST",{id:t}):m("PARTNER_RECEIVE_REQUEST",{id:t,partnerId:P})},text:p._('Review', '[m10n]bizAccess.business.partner.request.review', 'button to toggle review partner request sheet')})})})})},p=function(e){var t=e.value,i=(0,o.ZP)(),s=(0,a.o)().openSheet;return(0,u.jsx)(n.Fragment,{children:(0,u.jsx)(r.kC,{alignItems:"center",justifyContent:"start",children:(0,u.jsx)(r.xu,{bottom:!0,display:"flex",justifyContent:"center",children:(0,u.jsx)(r.hU,{accessibilityLabel:i._('Review person invite', '[m10n]bizAccess.business.person.invite.review.accessibility', 'accessibility text for button to toggle review person invite sheet'),icon:"eye",iconColor:"darkGray",onClick:function(){s("INVITE_REVIEW",{id:t})},size:"md",tooltip:{text:i._('Review invite', '[m10n]bizAccess.business.person.invite.review.tooltip', 'icon button tooltip to toggle review person invite sheet')}})})})})},m=i(912997),h=function(e,t){var i=function(){return null};return"PARTNER"===e?i=d:"PEOPLE"===e?i=p:"PARTNER_REQUEST"===e?i=f:"PARTNER_PENDING"===e&&(i=b),{field:"id",headerName:t._('Actions', '[m10n]bizAccess.business.people.actions', 'column of actions that can be taken on user'),minWidth:m.I.columnWidths.sm,TableCellComponent:i,valueGetter:function(e){return e.id},justifying:"center"}}},467987:function(e,t,i){"use strict";i.d(t,{Z:function(){return x}});var n=i(326884),s=i(223518),r=i(76911),o=i(506979),c=i(908390),l=i(668040),a=i(898781),_=i(554002),u=i(912997),d=i(168574),v=i(816127),b=i(391364),f=i(982045),p=i(230412),m=i(273453),h=i(515198);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,n)}return i}var P=function(e){var t=e.to,i=(0,a.ZP)();return(0,h.jsx)(c.ZP,{accessibilityLabel:i._('See invites sent to people', '[m10n]bizAccess.people.list.invites.accessibility', 'Accessibility text for People page button that redirects to invite page'),href:t,text:i._('Invites', '[m10n]bizAccess.people.list.invites', 'People page button that send the viewing user to the list of invites sent to people')})},g=function(){var e=(0,a.ZP)(),t=(0,o.useSelector)(f.m5),i=(0,m.KJ)(),s=(0,o.useSelector)(p.bO),g=(0,o.useDispatch)();(0,r.useEffect)(function(){i&&g((0,b.L3)(["EXPIRED","PENDING"],i))},[i]);var x=e._('Employees', '[m10n]bizAccess.employees.invite.title', 'Page title for the employee invites page');return(0,h.jsx)(_.Z,{search:null,secondaryAction:(0,h.jsx)(P,{to:(0,l.Z)("PEOPLE",i)}),table:(0,h.jsx)(c.xu,{"data-test-id":"people-invites-table",children:(0,h.jsx)(u.Z,{columnDefs:[(0,d.Z)({type:"PEOPLE",isInvites:!0},e),(0,v.Z)("PEOPLE",e)],config:function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?E(Object(i),!0).forEach(function(t){var n,s;n=t,s=i[t],(n=function(e){var t=function(e,t){if("object"!==y(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!==y(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===y(t)?t:String(t)}(n))in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):E(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}({},u.I),id:n.Q6.PEOPLE_INVITES,isLoading:t,onRowCountChange:function(){},onSortChange:function(){},pageType:n.Q6.PEOPLE_DETAIL,rowData:s})}),title:x})},x=function(){return(0,h.jsx)(s.Z,{pageType:n.Q6.PEOPLE_INVITES,children:(0,h.jsx)(g,{})})}}},function(e){e.O(0,[97270,8390,1861,99689,26067,17492,48327,66312,99246,70987,68445,80538,92914,11582,88435,19798,6863,73453,35477,38628],function(){return e(e.s=770545)}),e.O()}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/www/business/business-access/[userBizId]/employees/invites-9fdfcf2c050d7d88.js.map