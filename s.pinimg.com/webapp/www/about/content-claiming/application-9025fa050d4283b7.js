(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[76134],{47130:function(e,t,o){(window.__PWS_LOADED_HANDLERS__=window.__PWS_LOADED_HANDLERS__||{})["www/about/content-claiming/application"]=function(){return o(931464).Z}},782534:function(e,t,o){"use strict";o.d(t,{k:function(){return i.k}});var i=o(451820),l=o(780280),n=o(515198);t.Z=function(e){var t=e.dateFormatType,o=e.useUTC,r=void 0===o||o,a=e.value;return(0,n.jsx)(l.LC,{children:function(e){return(0,i.Z)(e.locale,a,t,r)}})}},451820:function(e,t,o){"use strict";o.d(t,{Z:function(){return n},k:function(){return i}});var i={LONG:"long",YEAR:"year",WEEKDAY_DATE:"weekday_date",WEEKDAY_DATE_TIME_TIMEZONE:"weekday_date_time_timezone",SHORT_WEEKDAY_DATE:"short_weekday_date",LONG_MONTH_YEAR:"long_month_year",NUMERIC:"numeric",MONTH_DAY:"month_day",SHORT_MONTH:"short_month",SHORT_MONTH_DAY:"short_month_day",DAY:"day",YEAR_SHORT_MONTH_DAY:"year_short_month_day",YEAR_SHORT_MONTH_DAY_HOUR:"year_short_month_day_hour",TIME:"time",TIME_TIMEZONE:"time_timezone",HOUR:"hour",TWO_DIGIT:"two_digit",TWO_DIGIT_YEAR:"two_digit_year"},l=function(e){switch(e){case i.YEAR:return{year:"numeric"};case i.LONG:return{year:"numeric",month:"long",day:"numeric"};case i.NUMERIC:return{year:"numeric",month:"numeric",day:"numeric"};case i.TWO_DIGIT:return{year:"numeric",month:"2-digit",day:"2-digit"};case i.TWO_DIGIT_YEAR:return{year:"2-digit",month:"2-digit",day:"2-digit"};case i.WEEKDAY_DATE:return{weekday:"long",month:"long",day:"numeric",year:"numeric"};case i.SHORT_WEEKDAY_DATE:return{weekday:"short",month:"numeric",day:"numeric"};case i.WEEKDAY_DATE_TIME_TIMEZONE:return{weekday:"short",month:"numeric",day:"numeric",hour:"numeric",minute:"2-digit",timeZoneName:"short"};case i.MONTH_DAY:return{month:"long",day:"numeric"};case i.SHORT_MONTH:return{month:"short"};case i.SHORT_MONTH_DAY:return{month:"short",day:"numeric"};case i.DAY:return{day:"numeric"};case i.LONG_MONTH_YEAR:return{month:"long",year:"numeric"};case i.YEAR_SHORT_MONTH_DAY:return{year:"numeric",month:"short",day:"numeric"};case i.YEAR_SHORT_MONTH_DAY_HOUR:return{month:"short",year:"numeric",day:"numeric",hour:"numeric"};case i.TIME:return{hour:"numeric",minute:"2-digit"};case i.TIME_TIMEZONE:return{hour:"numeric",minute:"2-digit",timeZoneName:"short"};case i.HOUR:return{hour:"numeric"};default:throw Error('invalid dateFormatType "'+e+'"')}};function n(e,t,o){var i=!(arguments.length>3)||void 0===arguments[3]||arguments[3],n=l(o);return i&&(n.timeZone="UTC"),new Intl.DateTimeFormat(e,n).format(t)}},349700:function(e,t,o){"use strict";o.d(t,{Wc:function(){return s},bF:function(){return _},nk:function(){return a},r7:function(){return d}});var i=o(76911),l=o(515198);function n(e,t,o){return e.split(o).map(function(e){if(e.match(o)){var i=e.replace(/[\{\}]/g,"").trim();if(Object.prototype.hasOwnProperty.call(t,i))return t[i]}return e})}var r=/(\{\{\s*\w+\s*\}\})/g;function a(e,t){return n(e,t,r)}function s(e,t){return n(e,t,r).join("")}var c=/(\{\s*\w+\s*\})/g;function _(e,t){return n(e,t,c)}var d=function(e){var t=e.text;return Array.isArray(t)?t.map(function(e,t){return(0,l.jsx)(i.Fragment,{children:e},t)}):t}},773285:function(e,t,o){"use strict";o.d(t,{F:function(){return n},a:function(){return l}});var i=(0,o(425288).Z)("ExperimentContext"),l=i.Provider,n=i.useHook},968925:function(e,t,o){"use strict";o.d(t,{Z:function(){return a}});var i=o(908390),l=o(121151),n=o(898781),r=o(515198);function a(e){var t=e.dismiss,o=e.error,a=(0,n.ZP)();return(0,r.jsx)(l.ZP,{accessibilityModalLabel:a._('Something went wrong modal', 'ContentClaim.ErrorModal', 'accessibility label for error modal'),footer:(0,r.jsx)(i.xu,{children:(0,r.jsx)(i.xu,{marginBottom:2,display:"flex",justifyContent:"end",direction:"row",children:(0,r.jsx)(i.zx,{text:a._('Okay', 'ContentClaim.ErrorModalOkButton', 'accessibility label for reinstate modal confirm button'),color:"red",onClick:t})})}),heading:a._('Something went wrong', 'ContentClaim.ModalHeader', 'Header for modal'),onDismiss:function(){return t()},children:(0,r.jsx)(i.xu,{padding:4,marginStart:2,marginEnd:2,display:"flex",justifyContent:"center",children:(0,r.jsx)(i.xv,{size:"300",align:"center",children:o})})})}},814020:function(e,t,o){"use strict";o.d(t,{Z:function(){return s}});var i=o(599689),l=o(908390),n=o(121151),r=o(898781),a=o(515198);function s(){var e=(0,r.ZP)(),t=(0,i.useHistory)();return(0,a.jsx)(n.ZP,{accessibilityModalLabel:e._('Maintenance Mode Modal', 'ContentClaimApplication.Maintenance', 'accessibility label for maintenance modal'),footer:(0,a.jsx)(l.xu,{column:12,marginBottom:2,display:"flex",direction:"row",justifyContent:"end",children:(0,a.jsx)(l.zx,{text:e._('Okay', 'ContentClaimApplication.SuccessModalOkButton', 'accessibility label for reinstate modal confirm button'),color:"red",onClick:function(){return t.push("/")}})}),heading:e._('Currently in maintenance', 'ContentClaimApplication.MaintenanceModalHeader', 'Maintenance Modal Heading'),onDismiss:function(){return t.replace("/")},children:(0,a.jsx)(l.xu,{padding:4,marginStart:2,marginEnd:2,display:"flex",justifyContent:"center",children:(0,a.jsx)(l.xv,{size:"300",children:e._('This page is currently in maintenance, please try again later', 'ContentClaimApplication.Maintenance', 'accessibility label for maintenance modal')})})})}},755943:function(e,t,o){"use strict";o.d(t,{Z:function(){return c}});var i=o(76911),l=o(908390),n=o(515198);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,i)}return o}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,i=Array(t);o<t;o++)i[o]=e[o];return i}function c(e){var t,o=e.id,c=e.name,_=e.options,d=e.placeholder,u=e.label,p=e.col,h=e.helperText,m=e.value,f=e.validationErrors,y=e.overrideValue,A=e.onChange,g=function(e){if(Array.isArray(e))return e}(t=(0,i.useState)(void 0===m?"":m))||function(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i,l,n,r,a=[],s=!0,c=!1;try{if(n=(o=o.call(e)).next,0===t){if(Object(o)!==o)return;s=!1}else for(;!(s=(i=n.call(o)).done)&&(a.push(i.value),a.length!==t);s=!0);}catch(e){c=!0,l=e}finally{try{if(!s&&null!=o.return&&(r=o.return(),Object(r)!==r))return}finally{if(c)throw l}}return a}}(t,2)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);if("Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return s(e,t)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),b=g[0],C=g[1],v=null==f?void 0:f.find(function(e){return e.field===c}),x=(null==v?void 0:v.message)||"";return(0,n.jsxs)(l.xu,{smColumn:p||6,column:12,padding:2,flex:"grow",children:[(0,n.jsx)(l.EI,{id:o||c,name:c||o,onChange:function(e){var t=e.value;A&&A(t),C(t)},placeholder:d||u||c,errorMessage:x,value:y||b,size:"lg",label:u||"",children:_.map(function(e){return(0,n.jsx)(l.EI.Option,function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach(function(t){var i,l;i=t,l=o[t],(i=function(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var i=o.call(e,t||"default");if("object"!==r(i))return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}(i))in e?Object.defineProperty(e,i,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[i]=l}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}({},e),e.label)})}),h&&(0,n.jsx)(l.xu,{paddingY:1,children:(0,n.jsx)(l.xv,{color:"subtle",size:"100",children:h})})]})}},803951:function(e,t,o){"use strict";o.d(t,{Z:function(){return s}});var i=o(599689),l=o(908390),n=o(121151),r=o(898781),a=o(515198);function s(e){var t=e.title,o=e.message,s=(0,r.ZP)(),c=(0,i.useHistory)();return(0,a.jsx)(n.ZP,{accessibilityModalLabel:s._('Thank you for applying success modal', 'ContentClaimApplication.SuccessModal', 'accessibility label for success modal'),footer:(0,a.jsx)(l.xu,{column:12,marginBottom:2,display:"flex",direction:"row",justifyContent:"end","data-testid":"success-modal-okay-btn",children:(0,a.jsx)(l.zx,{text:s._('Okay', 'ContentClaimApplication.SuccessModalOkButton', 'accessibility label for reinstate modal confirm button'),color:"red",onClick:function(){return c.push("/")}})}),heading:t||s._('Thank you for applying', 'ContentClaimApplication.ModalHeaderSubmitted', 'Displays the header used in the Success Modals'),onDismiss:function(){c.push("/")},children:(0,a.jsx)(l.xu,{padding:4,marginStart:2,marginEnd:2,display:"flex",justifyContent:"center",children:(0,a.jsx)(l.xv,{size:"300",inline:!0,children:o})})})}},931464:function(e,t,o){"use strict";o.d(t,{Z:function(){return N}});var i=o(76911),l=o(599689),n=o(908390),r=o(186656),a=o(898781),s=o(349700),c=o(773285),_=o(780280),d=o(19121),u=o(824807),p=o(968925),h=o(814020),m=o(755943),f=o(803951),y=o(744207),A=o(981665),g=o(154928),b=o(642048),C=o(511368),v=o(625439);function x(e,t,o,i,l,n,r){try{var a=e[n](r),s=a.value}catch(e){o(e);return}a.done?t(s):Promise.resolve(s).then(i,l)}function P(){var e;return e=regeneratorRuntime.mark(function e(t,o,i){var l,n,a,s,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,r.Z)({url:"/v3/legal/claims/last-application/"});case 3:if(n=(l=e.sent.resource_response.data).createdAt,void 0!==(a=l.status)){e.next=8;break}return e.abrupt("return");case 8:["pending","approved"].includes(a)?o({status:a}):(s=(0,g.Z)(n).toLocaleString(t,{timeZone:"UTC",dateStyle:"short",timeStyle:"short"}),c=(0,b.Z)(new Date(s),30),(0,C.Z)(new Date,c)&&o({status:a,reapplyDate:(0,v.Z)(c)})),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),i(e.t0.message_detail||e.t0.message||"");case 14:case"end":return e.stop()}},e,null,[[0,11]])}),(P=function(){var t=this,o=arguments;return new Promise(function(i,l){var n=e.apply(t,o);function r(e){x(n,i,l,r,a,"next",e)}function a(e){x(n,i,l,r,a,"throw",e)}r(void 0)})}).apply(this,arguments)}var z=o(743142),j=function(e){var t=e.required,o=e.boolean,i=e.onlinePresence,l=e.signature;return z.Ry().shape({name:z.Z_().required(t),email:z.Z_().email(),phone:z.Z_().required(t),company:z.Z_().required(t),street_address:z.Z_().required(t),city:z.Z_().required(t),sample_content_url:z.Z_().required(t),state:z.Z_(),zip_code:z.Z_(),right_holder_type:z.Z_().required(t),social_web:z.Z_().test("oneOfRequired",i,function(){return this.parent.social_instagram||this.parent.social_other||this.parent.social_web||this.parent.social_youtube}),social_instagram:z.Z_().test("oneOfRequired",i,function(){return this.parent.social_instagram||this.parent.social_other||this.parent.social_web||this.parent.social_youtube}),social_youtube:z.Z_().test("oneOfRequired",i,function(){return this.parent.social_instagram||this.parent.social_other||this.parent.social_web||this.parent.social_youtube}),social_other:z.Z_().test("oneOfRequired",i,function(){return this.parent.social_instagram||this.parent.social_other||this.parent.social_web||this.parent.social_youtube}),work_description:z.Z_().required(t),is_accurate:z.Z_().required(o),terms:z.Z_().required(o),signed_name:z.Z_().oneOf([z.iH("name"),null],l).required(t)})},w=o(692102),O=o(515198);function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,i=Array(t);o<t;o++)i[o]=e[o];return i}function E(e){var t,o=e.value,l=(0,a.ZP)(),r=function(e){if(Array.isArray(e))return e}(t=(0,i.useState)(void 0===o?"":o))||function(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i,l,n,r,a=[],s=!0,c=!1;try{if(n=(o=o.call(e)).next,0===t){if(Object(o)!==o)return;s=!1}else for(;!(s=(i=n.call(o)).done)&&(a.push(i.value),a.length!==t);s=!0);}catch(e){c=!0,l=e}finally{try{if(!s&&null!=o.return&&(r=o.return(),Object(r)!==r))return}finally{if(c)throw l}}return a}}(t,2)||function(e,t){if(e){if("string"==typeof e)return S(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);if("Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return S(e,t)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),s=r[0],c=r[1];return(0,O.jsxs)(n.xu,{smColumn:6,column:12,padding:2,flex:"grow",children:[(0,O.jsx)(n.xu,{marginEnd:1,padding:1,display:"flex",direction:"row",children:(0,O.jsx)(n.xu,{children:(0,O.jsx)(n.__,{htmlFor:"owner_country",children:(0,O.jsx)(n.xv,{size:"100",children:l._('Country', 'ContentClaimApplication.CountryListField', 'A Dropdown with list of countries')})})})}),(0,O.jsx)(w.Z,{resourceName:"CountriesResource",id:"owner_country",name:"country",onChange:function(e){return c(e.value)},value:s})]})}var k=o(782534),Z=o(121151);function T(e){var t,o,i,r,c,_=e.options,d=(0,a.ZP)(),u=_.reapplyDate,p=void 0===u?new Date().getUTCSeconds():u,h=_.status,m=(0,l.useHistory)(),f={pending:{heading:d._('We are reviewing your application', 'ContentClaimApplication.ReapplyModalHeader.Pending', 'Title for re-application modal for Pending state'),message:d._('You\'ve already submitted an application. You\'ll hear back from us soon!', 'ContentClaimApplication.ReapplyModalMessage', 'Message displayed to user who tried to reapply while the status is pending'),done:d._('Done', 'ContentClaimApplication.ReapplyModalButton.Pending.Done', 'Button that displays in the modal when the status is approved')},approved:{heading:d._('You already have access!', 'ContentClaimApplication.ReapplyModalHeader.Approved', 'Title for re-application modal for Approved state'),message:d._('It looks like you already have access to the Content Claiming Portal. Would you like to visit Content Claiming Portal?', 'ContentClaimApplication.ReapplyModalMessage', 'Message displayed to user who tried to reapply while the status is pending'),done:d._('Close', 'ContentClaimApplication.ReapplyModalButton.Approved.Done', 'Button to take user to the home page'),visit:d._('Visit', 'ContentClaimApplication.ReapplyModalButton.Approved.Visit', 'Button to take user to portal channel')},rejected:{heading:d._('Please wait until you can apply again', 'ContentClaimApplication.ReapplyModalHeader.Rejected', 'Title for re-application modal for Rejected state'),message:(0,s.nk)(d._('It looks like you\'ve submitted an application previously. Please wait until {{date}} to apply again.', 'ContentClaimApplication.ReapplyModalMessage', 'Message displayed to user who tried to reapply while the status is rejected'),{date:(0,O.jsx)(k.Z,{dateFormatType:k.k.LONG,value:new Date(1e3*p)})}),done:d._('Done', 'ContentClaimApplication.ReapplyModalButton.Rejected.Done', 'The done button when application is reject with modal is displayed')}},y=["pending","rejected"].includes(h);return(0,O.jsx)(Z.ZP,{accessibilityModalLabel:d._('ReApplication Modal', 'ContentClaimApplication.ReApplication', 'accessibility label for reapplication modal'),footer:(0,O.jsxs)(n.xu,{column:12,marginBottom:2,display:"flex",direction:"row",justifyContent:"center",children:[y&&(0,O.jsx)(n.zx,{text:null===(t=f[h])||void 0===t?void 0:t.done,color:"red",onClick:function(){return m.replace("/")}}),!y&&(0,O.jsxs)(n.kC,{alignItems:"stretch",justifyContent:"start",direction:"row",children:[(0,O.jsx)(n.xu,{paddingX:2,children:(0,O.jsx)(n.zx,{text:null===(o=f[h])||void 0===o?void 0:o.done,onClick:function(){return m.replace("/")}})}),(0,O.jsx)(n.xu,{paddingX:2,children:(0,O.jsx)(n.zx,{text:null===(i=f[h])||void 0===i?void 0:i.visit,color:"red",onClick:function(){return m.replace("/content-claiming")}})})]})]}),heading:null===(r=f[h])||void 0===r?void 0:r.heading,onDismiss:function(){m.replace("/")},children:(0,O.jsx)(n.xu,{padding:4,marginStart:2,marginEnd:2,display:"flex",justifyContent:"center",children:(0,O.jsx)(n.xv,{size:"300",align:"center",inline:!0,children:null===(c=f[h])||void 0===c?void 0:c.message})})})}function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function M(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,i)}return o}function I(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?M(Object(o),!0).forEach(function(t){var i,l;i=t,l=o[t],(i=function(e){var t=function(e,t){if("object"!==D(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var i=o.call(e,t||"default");if("object"!==D(i))return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===D(t)?t:String(t)}(i))in e?Object.defineProperty(e,i,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[i]=l}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):M(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}function R(e,t,o,i,l,n,r){try{var a=e[n](r),s=a.value}catch(e){o(e);return}a.done?t(s):Promise.resolve(s).then(i,l)}function H(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i,l,n,r,a=[],s=!0,c=!1;try{if(n=(o=o.call(e)).next,0===t){if(Object(o)!==o)return;s=!1}else for(;!(s=(i=n.call(o)).done)&&(a.push(i.value),a.length!==t);s=!0);}catch(e){c=!0,l=e}finally{try{if(!s&&null!=o.return&&(r=o.return(),Object(r)!==r))return}finally{if(c)throw l}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return L(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);if("Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return L(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,i=Array(t);o<t;o++)i[o]=e[o];return i}var N=function(){var e,t,o,g,b=(0,a.ZP)(),C=(0,c.F)().checkExperiment,v=(0,i.useRef)(null),x=H((0,i.useState)(""),2),z=x[0],w=x[1],S=H((0,i.useState)(""),2),k=S[0],Z=S[1],D=H((0,i.useState)(!1),2),M=D[0],L=D[1],N=H((0,i.useState)(null),2),Y=N[0],B=N[1],q=(0,l.useHistory)(),W=(0,_.B)().locale;(0,i.useEffect)(function(){!function(e,t,o){P.apply(this,arguments)}(W,B,Z)},[B]);var F={name:b._('Full Legal Name', 'ContentClaimApplication.NameField', 'User\'s name'),company:b._('Company Name', 'ContentClaimApplication.CompanyField', 'User\'s company name'),email:b._('Email Address', 'ContentClaimApplication.EmailField', 'User\'s email address'),phone:b._('Phone Number', 'ContentClaimApplication.PhoneField', 'Users phone number'),address:b._('Street Address', 'ContentClaimApplication.AddressField', 'User address'),city:b._('City', 'ContentClaimApplication.CityField', 'The users city'),state:b._('State / Province [Optional]', 'ContentClaimApplication.StateField', 'The users state'),zip:b._('Zip / Postal code [Optional]', 'ContentClaimApplication.ZipCodeField', 'The users zip code'),workDescription:b._('Additional Information', 'ContentClaimApplication.ItemDetailsField', 'Details about the Content Claim they are filing'),isAccurate:b._('The information in this application is accurate.', 'ContentClaimApplication.isAccurateBoolean', 'Confirmation checkbox that information in form is accurate'),apiAccess:b._('Yes, I\u2019d like to request access to Pinterest\u2019s Content Claiming API', 'ContentClaimingApplication.ApiAccessCheckbox', 'Checkbox to indicate request to be given Content Claiming API access'),terms:(0,O.jsx)(n.xv,{children:(0,s.nk)(b._('I agree to the {{termsLink}}.', 'ContentClaimApplication.termsBoolean', 'Checkbox to confirm they are owner of items they are claiming'),{termsLink:(0,O.jsx)(n.xv,{inline:!0,children:(0,O.jsx)(n.rU,{href:"https://policy.pinterest.com/pinterest-content-claiming-portal-terms-of-service",display:"inlineBlock",target:"blank",underline:"hover",children:b._('Content Claiming Portal Terms of Service', 'ContentClaimApplication.termsLinkBoolean', 'Link to terms of service')})})})})},U=C("legal_forms_enable_trigger").anyEnabled,G=C("legal_ccp_api_access").anyEnabled,X=H((0,i.useState)([]),2),K=X[0],V=X[1],$=(0,d.Z)(),J=(e=regeneratorRuntime.mark(function e(t){var o,i,l,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return L(!0),t.preventDefault(),i=null!==(o=v.current)?Object.fromEntries(new FormData(o).entries()):{},$.isAuth&&(i.email=null!==(l=$.email)&&void 0!==l?l:""),n={required:b._('Required', 'ContentClaimApplication.ValidationRequired', 'The validation message for a Required field'),boolean:b._('Must be checked', 'ContentClaimApplication.ValidationBooleanRequired', 'The validation message for a Boolean field'),onlinePresence:b._('One of the online presence fields must be entered', 'ContentClaimApplication.ValidationOnlineRequired', 'The validation message for a Online field'),signature:b._('Electronic signature doesn\'t match your name', 'ContentClaimApplication.ValidationSignatureRequired', 'The validation message for a Signature field')},i.online_presence_handles=JSON.stringify(I(I(I(I({},i.social_instagram&&{instagram:i.social_instagram}),i.social_other&&{other:i.social_other}),i.social_web&&{web:i.social_web}),i.social_youtube&&{youtube:i.social_youtube})),i.name=null==i?void 0:i.name.trim().toLowerCase(),i.signed_name=null==i?void 0:i.signed_name.trim().toLowerCase(),i.api_access=(null==i?void 0:i.api_access)==="on",e.prev=10,e.next=13,j(n).validate(i,{abortEarly:!1});case 13:V([]),delete i.social_instagram,delete i.social_other,delete i.social_web,delete i.social_youtube,e.next=25;break;case 20:return e.prev=20,e.t0=e.catch(10),V(null===e.t0||void 0===e.t0?void 0:e.t0.inner.map(function(e){return{field:e.path,message:e.message}})),L(!1),e.abrupt("return",!1);case 25:return e.prev=25,e.next=28,(0,r.Z)({url:"/v3/legal/claims/application/",method:"POST",data:i});case 28:w(b._('We\'ve received your application and will email you shortly with a response.', 'ContentClaimApplication.Successful application submission', 'The message received when they have applied successfully')),e.next=34;break;case 31:e.prev=31,e.t1=e.catch(25),Z(e.t1.message_detail||e.t1.message||"");case 34:return e.prev=34,L(!1),e.finish(34);case 37:return e.abrupt("return",null);case 38:case"end":return e.stop()}},e,null,[[10,20],[25,31,34,37]])}),t=function(){var t=this,o=arguments;return new Promise(function(i,l){var n=e.apply(t,o);function r(e){R(n,i,l,r,a,"next",e)}function a(e){R(n,i,l,r,a,"throw",e)}r(void 0)})},function(e){return t.apply(this,arguments)}),Q=[{label:b._('Media Company', 'ContentClaimApplication.HolderType-MediaCompany', 'A dropdown choice (Media Company) for the rights holder'),value:"0"},{label:b._('Individual Creator', 'ContentClaimApplication.HolderType-IndividualCreator', 'A dropdown choice (Individual Creator) for the rights holder'),value:"1"},{label:b._('Content Aggregator', 'ContentClaimApplication.HolderType-ContentAggregator', 'A dropdown choice (Content Aggregator) for the rights holder'),value:"2"},{label:b._('Legal representative of content owner', 'ContentClaimApplication.HolderType-LegalRepresentativeOfContentOwner', 'A dropdown choice (Legal representative of content owner) for the rights holder'),value:"3"},{label:b._('Other', 'ContentClaimApplication.HolderType-Other', 'A dropdown choice (Other) for the rights holder'),value:"10"}];return $.isAuth?(0,O.jsx)(n.xu,{column:12,paddingX:10,marginBottom:8,display:"flex",justifyContent:"center",children:(0,O.jsxs)(n.xu,{column:12,smColumn:10,lgColumn:8,color:"default",children:[(0,O.jsx)(n.xu,{column:12,alignItems:"center",direction:"column",display:"flex",padding:2,marginBottom:4,children:(0,O.jsxs)(n.xu,{column:12,smColumn:10,mdColumn:8,lgColumn:6,children:[(0,O.jsx)(n.xu,{"data-test-id":"content-claiming-application-header",children:(0,O.jsx)(n.X6,{size:"500",align:"center",color:"default",accessibilityLevel:1,children:b._('Apply for Content Claiming', 'ContentClaimApplication.FormTitle', 'The title of the form')})}),(0,O.jsx)(n.xu,{paddingY:1,children:(0,O.jsx)(n.xv,{size:"300",align:"center",children:b._('The Content Claiming Portal helps you protect your copyrighted content on Pinterest. We\'ll need some information to help process your request.', 'ContentClaimApplication.FormDescription', 'Provides a description of what the form is used for')})})]})}),(0,O.jsx)(n.iz,{}),(0,O.jsx)(n.xu,{color:"default",padding:2,paddingY:4,children:(0,O.jsxs)("form",{ref:v,onSubmit:J,id:"copyright-app-form",children:[(0,O.jsxs)(n.kC,{alignItems:"stretch",justifyContent:"start",wrap:!0,children:[(0,O.jsx)(n.xu,{column:12,paddingY:3,children:(0,O.jsx)(n.X6,{size:"400",color:"default",accessibilityLevel:2,children:b._('Contact Information', 'ContentClaimApplication.OwnerInformationHeading', 'Heading with the word Owner Information')})}),(0,O.jsx)(A.Z,{col:5,name:"name",value:$.fullName||"",validationErrors:K,label:F.name}),(0,O.jsx)(A.Z,{col:5,name:"company",validationErrors:K,label:F.company}),(0,O.jsx)(A.Z,{name:"email",value:null!==(o=$.email)&&void 0!==o?o:"",disabled:!0,validationErrors:K,label:F.email}),(0,O.jsx)(A.Z,{name:"phone",validationErrors:K,label:F.phone}),(0,O.jsxs)(n.xu,{display:"flex",column:12,paddingY:5,wrap:!0,children:[(0,O.jsx)(E,{value:null!==(g=$.country)&&void 0!==g?g:""}),(0,O.jsx)(A.Z,{col:12,name:"street_address",validationErrors:K,label:F.address}),(0,O.jsx)(A.Z,{name:"city",validationErrors:K,label:F.city,placeholder:b._('City', 'ContentClaimApplication.CityExample', 'The users city placeholder')}),(0,O.jsx)(A.Z,{col:3,name:"state",validationErrors:K,label:F.state,placeholder:b._('State', 'ContentClaimApplication.ZipExample', 'The users state placeholder')}),(0,O.jsx)(A.Z,{col:3,name:"zip_code",validationErrors:K,label:F.zip,placeholder:b._('Zip / Postal Code', 'ContentClaimApplication.ZipCodeField', 'The users zip code')})]}),(0,O.jsx)(n.xu,{column:12,paddingY:5,children:(0,O.jsx)(n.X6,{size:"400",color:"default",accessibilityLevel:2,children:b._('Identify Your Work', 'ContentClaimApplication.IdentifyYourWorkHeader', 'Header telling the user they are in the identify the work you are claiming section of the application form')})}),(0,O.jsx)(n.xu,{marginBottom:5,display:"flex",width:"100%",children:(0,O.jsx)(m.Z,{col:12,id:"right-holder-type-selection",label:b._('What type of rights owner are you?', 'ContentClaimApplication.TypeSelector', 'Dropdown to select the type of rights owner you are'),name:"right_holder_type",placeholder:b._('Select the rights holder type', 'ContentClaimApplication.RightsHolderTypeSelector', 'Placeholder for dropdown to select the type of rights owner you are'),options:Q,validationErrors:K})}),(0,O.jsx)(n.xu,{marginBottom:2,children:(0,O.jsx)(n.xv,{weight:"bold",children:b._('Online presence of your original content', 'ContentClaimApplication.SampleContentUrl', 'Asks user to provide url to sample content')})}),(0,O.jsxs)(n.xu,{marginBottom:5,width:"100%",children:[(0,O.jsx)(A.Z,{col:12,name:"social_web",label:b._('Website', 'ContentClaimApplication.SocialPresenceLabel-Website', 'Placeholder Link to a website like instagram, youtube, etc.'),value:"",placeholder:b._('Ex. http://', 'ContentClaimApplication.SocialPresence-WebsiteUrl', 'Link to a website like instagram, youtube, etc.'),validationErrors:K}),(0,O.jsx)(A.Z,{col:12,name:"social_instagram",label:b._('Instagram', 'ContentClaimApplication.SocialPresenceLabel-Instagram', 'Label for Link to a website like instagram, youtube, etc.'),value:"",placeholder:b._('Ex. @username', 'ContentClaimApplication.SocialPresence', 'Link to a website like instagram, youtube, etc.'),validationErrors:K}),(0,O.jsx)(A.Z,{col:12,name:"social_youtube",label:b._('YouTube', 'ContentClaimApplication.SocialPresenceLabel-YouTube', 'Label Youtube Link url field'),value:"",placeholder:b._('Ex. http://', 'ContentClaimApplication.SocialPresence', 'Link to a website like instagram, youtube, etc.'),validationErrors:K}),(0,O.jsx)(A.Z,{col:12,name:"social_other",label:b._('Other', 'ContentClaimApplication.SocialPresenceLabel-Other', 'Label to url field for other works they want to provide Pinterest with'),placeholder:b._('Ex. http://', 'ContentClaimApplication.SocialPresence-Other', 'Url link to other work they want to provide Pinterest with as evidence of their work'),validationErrors:K})]}),(0,O.jsx)(n.xu,{marginBottom:1,column:12,children:(0,O.jsx)(n.xv,{weight:"bold",children:b._('Please provide a link(s) to any additional examples of your copyrighted content', 'ContentClaimApplication.AdditionalExamples', 'Asks user to provide url to sample content')})}),(0,O.jsx)(n.xu,{marginBottom:1,children:(0,O.jsx)(n.xv,{size:"100",children:b._('Note: submitting examples here does not constitute a claim over the submitted content. If we approve your application to access Pinterest\'s Content Claiming Portal, you can make the content claims in the portal at that time.', 'ContentClaimApplication.SampleContentUrlSubText', 'Subtext description of expectations when they provide Pinterest with content as examples.')})}),(0,O.jsx)(n.xu,{marginBottom:5,display:"flex",width:"100%",children:(0,O.jsx)(A.Z,{name:"sample_content_url",placeholder:b._('Ex. http://', 'ContentClaimApplication.SampleOfWork', 'Asks user to provide a sample of the work they want to submit and claim'),validationErrors:K})}),(0,O.jsx)(n.xv,{weight:"bold",children:b._('Please provide a detailed description of your work with as much information as possible', 'ContentClaimApplication.WorkDescription', 'Asks user to provide description of their work')}),(0,O.jsx)(n.xu,{marginBottom:5,display:"flex",width:"100%",children:(0,O.jsx)(y.Z,{name:"work_description",placeholder:b._('Please describe your work', 'ContentClaimApplication.WorkDescription', 'Asks user to describe the work they want to submit and claim'),validationErrors:K})}),G&&(0,O.jsxs)(i.Fragment,{children:[(0,O.jsx)(n.xu,{marginBottom:1,children:(0,O.jsx)(n.xv,{weight:"bold",children:b._('Would you like to request access to Pinterest\u2019s Content Claiming API?', 'ContentClaimApplication.ApiAccessHeader.main', 'Asks user if they would like access to the CCP API for bulk editing')})}),(0,O.jsx)(n.xu,{marginBottom:1,children:(0,O.jsxs)(n.xv,{size:"100",inline:!0,children:[b._('In addition to the Content Claiming Portal, Pinterest offers a Content Claiming API for larger rights holders with a substantial body of original material that is frequently uploaded by the Pinterest community. Please note, that using this API will require engineering work for you/your company.', 'ContentClaimApplication.ApiAccessHeader.subtext', 'Provides details on what the API Access request offers')," ",(0,O.jsx)(n.rU,{href:"https://policy.pinterest.com/pinterest-content-claiming-portal-terms-of-service",display:"inlineBlock",target:"blank",underline:"hover",children:b._('Learn more.', 'ContentClaimApplication.Link.ApiHelpCenter', 'Link to api help center')})]})}),(0,O.jsx)(n.xu,{paddingX:2,marginBottom:6,children:(0,O.jsx)(u.Z,{name:"api_access",validationErrors:K,label:F.apiAccess})})]}),(0,O.jsxs)(n.xu,{column:12,paddingY:3,children:[(0,O.jsx)(n.X6,{size:"400",color:"default",accessibilityLevel:2,children:b._('Confirmation & Signature', 'ContentClaimApplication.AcknowledgeLabel', 'Heading field for the textfield requesting user to provide a signature')}),(0,O.jsx)(n.xu,{marginTop:3,marginBottom:2,children:(0,O.jsx)(n.xv,{size:"300",children:b._('By checking the following boxes, I confirm:', 'ContentClaimApplication.LabelForCheckboxes', 'Label describing the checkboxes')})})]}),(0,O.jsxs)(n.xu,{paddingX:2,marginBottom:6,children:[(0,O.jsx)(u.Z,{name:"is_accurate",validationErrors:K,label:F.isAccurate}),(0,O.jsx)(u.Z,{name:"terms",validationErrors:K,label:F.terms})]}),(0,O.jsx)(n.xu,{column:12,children:(0,O.jsx)(n.xv,{size:"300",children:b._('Typing your full legal name in this box acts as your electronic signature', 'ContentClaimApplication.SignatureDescription', 'Explaining that they need to type their name to serve as a signature')})}),(0,O.jsx)(n.xu,{marginBottom:2,display:"flex",width:"100%",children:(0,O.jsx)(A.Z,{col:12,name:"signed_name",placeholder:b._('Signature', 'ContentClaimApplication.SignedName', 'Where user rewrites their name to validate themselves'),validationErrors:K})})]}),!!K.length&&(0,O.jsx)(n.xu,{padding:4,children:(0,O.jsx)(n.ci,{type:"error",iconAccessibilityLabel:"Error icon",message:b._('Please fill out all required fields before submitting the application', 'CCP.AppValidationCallout', 'Call out that lets user know there\'s a validation error ')})}),(0,O.jsxs)(n.xu,{margin:-2,display:"flex",justifyContent:"end",children:[(0,O.jsx)(n.xu,{padding:2,children:(0,O.jsx)(n.zx,{onClick:function(){return q.replace("/")},text:b._('Cancel', 'ContentClaimApplication.CancelApplication', 'Cancel application form'),type:"button"})}),(0,O.jsx)(n.xu,{padding:2,children:(0,O.jsx)(n.zx,{color:"red",text:b._('Apply', 'ContentClaimApplication.SubmitApplication', 'Submit application form'),disabled:M,type:"submit"})})]})]})}),!!k&&(0,O.jsx)(p.Z,{dismiss:Z,error:k}),!!z&&(0,O.jsx)(f.Z,{message:z}),!!Y&&(0,O.jsx)(T,{options:Y}),U&&(0,O.jsx)(h.Z,{})]})}):null}},76170:function(e,t,o){"use strict";function i(e,t){if(t.length<e)throw TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}o.d(t,{Z:function(){return i}})},168303:function(e,t,o){"use strict";function i(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}o.d(t,{Z:function(){return i}})},642048:function(e,t,o){"use strict";o.d(t,{Z:function(){return r}});var i=o(168303),l=o(393248),n=o(76170);function r(e,t){(0,n.Z)(2,arguments);var o=(0,l.Z)(e),r=(0,i.Z)(t);return isNaN(r)?new Date(NaN):(r&&o.setDate(o.getDate()+r),o)}},154928:function(e,t,o){"use strict";o.d(t,{Z:function(){return r}});var i=o(393248),l=o(168303),n=o(76170);function r(e){(0,n.Z)(1,arguments);var t=(0,l.Z)(e);return(0,i.Z)(1e3*t)}},625439:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var i=o(393248),l=o(76170);function n(e){return(0,l.Z)(1,arguments),Math.floor(function(e){return(0,l.Z)(1,arguments),(0,i.Z)(e).getTime()}(e)/1e3)}},511368:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var i=o(393248),l=o(76170);function n(e,t){(0,l.Z)(2,arguments);var o=(0,i.Z)(e),n=(0,i.Z)(t);return o.getTime()<n.getTime()}},393248:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var i=o(76170);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e){(0,i.Z)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===l(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):(("string"==typeof e||"[object String]"===t)&&"undefined"!=typeof console&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn(Error().stack)),new Date(NaN))}}},function(e){e.O(0,[97270,8390,99689,26067,17492,48327,47305,55723,29152],function(){return e(e.s=47130)}),e.O()}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/www/about/content-claiming/application-9025fa050d4283b7.js.map