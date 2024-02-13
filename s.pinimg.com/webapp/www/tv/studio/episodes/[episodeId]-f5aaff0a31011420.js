(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[89510],{825940:function(e,t,i){(window.__PWS_LOADED_HANDLERS__=window.__PWS_LOADED_HANDLERS__||{})["www/tv/studio/episodes/[episodeId]"]=function(){return i(131558).Z}},804444:function(e,t,i){"use strict";var o=i(908390),n=i(898781),s=i(273712),r=i(409692),a=i(985453),l=i(515198);t.Z=function(){var e=(0,a.F)().data,t=(0,n.ZP)(),i=(0,r.Z)("EPISODE_INSIGHTS",null==e?void 0:e.id);return(null==e?void 0:e.live_status)!==s.Ct.POST_LIVE?null:(0,l.jsx)(o.ZP,{color:"red",href:i,text:t._('Insights', 'webapp.app.pinTv.creatorStudio.navigation.insights', 'insights button')})}},549645:function(e,t,i){"use strict";var o=i(898781),n=i(878987);t.Z=function(){var e=(0,o.ZP)();return[{id:"isTitleNotDescriptive",text:e._('Title is not descriptive enough.', 'webapp.app.pinTv.studio.pending.episode.rejectionReason.titleNotDescriptive', 'Text shown in UI - title is not descriptive enough'),reasonId:n.OL.TITLE_NOT_DESCRIPTIVE},{id:"alreadyBookedTime",text:e._('Another episode is already airing at the time you selected.', 'webapp.app.pinTv.studio.pending.episode.rejectionReason.doubleBooked', 'Text shown in UI - another episode is booked at the selected date or time'),reasonId:n.OL.ALREADY_BOOKED_TIME},{id:"startTimeInPast",text:e._('Selected date and time is in the past.', 'webapp.app.pinTv.studio.pending.episode.rejectionReason.pastDateTime', 'Text shown in UI - The selected date and time is in the past'),reasonId:n.OL.START_TIME_IN_PAST},{id:"isCoverImgBlurry",text:e._('The preview image is blurry.', 'webapp.app.pinTv.studio.pending.episode.rejectionReason.imageBlurry', 'Text shown in UI - The preview image is not high resolution'),reasonId:n.OL.COVER_IMG_BLURRY},{id:"isCoverImgContentInaccurate",text:e._('The preview image does not reflect the title accurately.', 'webapp.app.pinTv.studio.pending.episode.rejectionReason.previewImageInaccurate', 'Text shown in UI - The preview image does not match the title'),reasonId:n.OL.COVER_IMG_CONTENT},{id:"doesCoverImgFailGuidelines",text:e._('The preview image does not conform to Pinterest\'s Community guidelines.', 'webapp.app.pinTv.studio.pending.episode.rejectionReason.previewImagePolicyViolation', 'Text shown in UI - The preview image violates community guidelines'),reasonId:n.OL.COVER_IMG_FAIL_GUIDELINES},{id:"isVideoContentInaccurate",text:e._('The preview video does not reflect the title accurately.', 'webapp.app.pinTv.studio.pending.episode.rejectionReason.previewVideoInaccurate', 'Text shown in UI - The uploaded video\'s content does not match the title'),reasonId:n.OL.VIDEO_CONTENT}]}},131558:function(e,t,i){"use strict";i.d(t,{Z:function(){return K}});var o=i(76911),n=i(599689),s=i(807020),r=i(695524),a=i(908390),l=i(898781),d=i(349700),c=i(773285),_=i(19121),p=i(883521),u=i(761413),h=i(549645),m=i(878987),v=i(409692),g=i(985453),x=i(515198);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,o)}return i}function j(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?w(Object(i),!0).forEach(function(t){T(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):w(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}function T(e,t,i){var o;return(o=function(e,t){if("object"!==f(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,t||"default");if("object"!==f(o))return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"===f(o)?o:String(o))in e)?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var b=function(){var e=(0,l.ZP)(),t=(0,h.Z)(),i=(0,g.F)().data,o=t.reduce(function(e,t){return j(j({},e),{},T({},t.reasonId,t.text))},{}),n=i||{},s=n.id,r=n.admin_approval_status,d=n.admin_rejection_reasons,c=void 0===d?[]:d,_=n.admin_reject_fix_suggestion;return r!==m.oF.REJECTED?null:(0,x.jsx)(a.xu,{marginStart:8,marginEnd:8,marginBottom:8,color:"errorWeak",padding:8,rounding:4,children:(0,x.jsxs)(a.kC,{direction:"row",gap:8,justifyContent:"between",children:[(0,x.jsx)(a.kC.Item,{flex:"none",children:(0,x.jsx)(a.kC,{direction:"column",height:"100%",justifyContent:"center",children:(0,x.jsx)(a.JO,{accessibilityLabel:e._('Errors in episode', 'webapp.app.pinTv.creatorStudio.callout.episodeIssue.icon', 'Icon indicating errors in the episode'),color:"error",icon:"workflow-status-problem",size:"32"})})}),c.length>0&&(0,x.jsx)(a.kC.Item,{flex:"grow",children:(0,x.jsx)(a.kC.Item,{flex:"grow",children:(0,x.jsxs)(a.kC,{direction:"column",gap:2,children:[(0,x.jsx)(a.xv,{weight:"bold",children:e._('Please fix the following issue(s) before submitting for review.', 'webapp.app.pinTv.creatorStudio.callout.episodeIssue.subtext', 'Subtext indicating what needs to be fixed')}),c.map(function(e,t){return(0,x.jsx)(a.xu,{marginBottom:1,children:(0,x.jsxs)(a.xv,{size:"300",inline:!0,children:[t+1,". ",o["".concat(e)]]})},"reason-".concat(e))})]})})}),_&&_.length>0&&(0,x.jsx)(a.kC.Item,{flex:"grow",children:(0,x.jsxs)(a.kC,{direction:"column",gap:2,children:[(0,x.jsx)(a.xv,{weight:"bold",children:e._('Note from our production team:', 'webapp.app.pinTv.creatorStudio.callout.episodeReject.suggestion.heading', 'Heading for suggestion provided by producer to episode host')}),(0,x.jsx)(a.xv,{children:_})]})}),(0,x.jsx)(a.kC.Item,{flex:"none",children:(0,x.jsx)(a.kC,{direction:"column",height:"100%",justifyContent:"center",children:(0,x.jsx)(a.ZP,{color:"white",href:(0,v.Z)("EDIT_EPISODE",s),text:e._('Edit Episode', 'webapp.app.pinTv.creatorStudio.callout.episodeReject.button', 'Button to edit an episode and fix reviewed issues')})})})]})})},I=i(425841),P=i(719510),E=i(312168),O=i(363468),y=function(){return(0,x.jsx)(a.xu,{"data-test-id":"episode-details-container",children:(0,x.jsxs)(I.Z,{children:[(0,x.jsx)(b,{}),(0,x.jsxs)(a.kC,{gap:10,direction:"row",justifyContent:"center",children:[(0,x.jsx)(P.Z,{}),(0,x.jsx)(O.Z,{}),(0,x.jsx)(E.Z,{showEditOption:!0})]})]})})},S=i(273729),A=i(361741),C=i(273712),D=function(){var e=(0,g.F)().data,t=(0,l.ZP)(),i=(null==e?void 0:e.live_status)===C.Ct.POST_LIVE,o=(0,v.Z)("EPISODE_CONTROL_ROOM",null==e?void 0:e.id);return(0,x.jsx)(a.ZP,{color:i?"gray":"red",href:o,text:t._('Control Room', 'webapp.app.pinTv.creatorStudio.navigation.controlRoom', 'control room button')})},z=i(804444),Z=i(613982),R=i(911008),L=i(164758),k=i(916641),N=i(497166),V=i(51363),F=i(92254),B=i(643297),U=i(969270),M=i(50596),H=i(285915),G=i(187048),W=i(863664),Y=function(){var e,t,i,o=(0,n.useHistory)().push,_=(0,l.ZP)(),p=(0,g.F)().data,u=p||{},h=u.title,v=u.starts_at,f=void 0===v?"":v,w=u.ends_at,j=void 0===w?"":w,T=u.live_status,b=void 0===T?1:T,I=u.admin_approval_status,P=void 0===I?0:I,E=u.id,O=(null==p?void 0:null===(e=p.canonical_pin)||void 0===e?void 0:e.id)||"",y=null!==(t=null==p?void 0:null===(i=p.creator_class)||void 0===i?void 0:i.is_test)&&void 0!==t?t:{},C=P===m.oF.APPROVED,N=b===m.Ct.LIVE,V=(0,c.F)().checkExperiment;j&&E&&b===m.Ct.POST_LIVE&&(0,s.Z)(new Date,new Date(j))>=30&&o("/tv/studio/episodes/".concat(E,"/insights/"));var F=N?(0,x.jsxs)(a.kC,{alignItems:"center",gap:2,children:[(0,x.jsx)(a.xu,{dangerouslySetInlineStyle:{__style:{backgroundColor:"red",width:"fit-content",whiteSpace:"nowrap"}},rounding:"pill",paddingY:2,paddingX:3,children:(0,x.jsx)(a.xv,{size:"300",weight:"bold",inline:!0,color:"light",children:_._('Live', 'creatorStudio.session.nav.liveNow.text', 'Text indicating the live status')})}),(0,x.jsx)(R.Z,{approvalStatus:P})]}):(0,x.jsxs)(a.kC,{alignItems:"center",gap:2,children:[(0,x.jsx)(a.xu,{dangerouslySetInlineStyle:{__style:{backgroundColor:"#FFFEBB",width:"fit-content",whiteSpace:"nowrap"}},rounding:"pill",paddingY:2,paddingX:3,children:(0,x.jsx)(a.xv,{size:"300",weight:"bold",inline:!0,children:(0,x.jsx)(k.Z,{time:f})})}),(0,x.jsx)(R.Z,{approvalStatus:P})]});return(0,x.jsx)(Z.Z,{badge:(0,x.jsxs)(a.kC,{direction:"row",gap:2,alignItems:"center",children:[V("pinterest_tv_design_revamp_control_room").anyEnabled?void 0:F,y&&(0,x.jsx)(S.Z,{})]}),pageTitle:void 0===h?"":h,subTitle:f&&j&&(0,d.Wc)(_._('{{ formattedDate }} at {{ formattedTime }} - {{ formattedEndTime }}', 'webapp.app.pinTv.creatorStudio.episode.formattedDateTime', 'formattedDate: Formatted date when the episode will be live, formattedTime: Formatted time when the episode will be live, formattedEndTime: Formatted time when the episode will ned'),{formattedDate:(0,r.Z)(new Date(f),m.yd,"eeee, MMMM do"),formattedTime:(0,r.Z)(new Date(f),m.yd,"h:mm aaa zzz"),formattedEndTime:(0,r.Z)(new Date(j),m.yd,"h:mm aaa zzz")}),shareLink:C?"https://www.pinterest.com/tv/".concat(O):void 0,backButton:(0,x.jsx)(A.Z,{}),pageType:"EPISODE",actions:[(0,x.jsx)(L.Z,{},"save-status-message"),(0,x.jsx)(D,{},"episode-control-room-button"),(0,x.jsx)(z.Z,{},"episode-insights-button")]})},K=function(){var e=(0,n.useRouteMatch)().params.episodeId,t=(0,n.useHistory)().push,i=(0,_.Z)(),s=(0,W.Z)("PINTEREST_TV_CREATOR_STUDIO_EPISODE_PAGE");return((0,o.useEffect)(function(){s({eventName:"PINTEREST_TV_CREATOR_STUDIO_PAGE_VIEW"})},[]),i.isAuth)?e?(0,x.jsx)(M.Z,{children:(0,x.jsx)(p.Z,{children:(0,x.jsx)(N.H,{children:(0,x.jsx)(g.x,{children:(0,x.jsx)(U.u,{children:(0,x.jsx)(G.Q,{children:(0,x.jsx)(B.w,{children:(0,x.jsx)(F.O,{children:(0,x.jsx)(V.A,{children:(0,x.jsxs)(H.uW,{children:[(0,x.jsx)(u.Z,{}),(0,x.jsx)(Y,{}),(0,x.jsx)(y,{})]})})})})})})})})})}):(t((0,v.Z)("EPISODES")),null):(0,x.jsx)(n.Redirect,{to:"/login?next=".concat(encodeURIComponent("/tv/studio"))})}}},function(e){e.O(0,[97270,8390,99689,26067,17492,48327,83521,7923,85453,62374,35429,61859,94024,25174,11086],function(){return e(e.s=825940)}),e.O()}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/www/tv/studio/episodes/[episodeId]-f5aaff0a31011420.js.map