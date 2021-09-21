(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{"25b6":function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"d",(function(){return o})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return s}));var r=/[<"'&>]/g,i=function(t){return"&#"+t.charCodeAt(0)+";"};function u(t){return t.replace(r,i)}function o(t){return void 0===t&&(t=""),t.replace(/(<([^>]+)>)/gi,"")}function c(t){return void 0===t&&(t=""),t.replace(/\s+/g,"")}function s(t){return void 0===t&&(t=""),t.replace(/\b\w/g,(function(t){return t.toUpperCase()}))}},"4qhP":function(t,e,n){"use strict";var r=n("mrSG"),i=n("YFKU"),u=n("ivNn"),o=n("nc0P"),c=n("7KDR"),s=n("OekH"),a=n("9XXR"),d=n("ogJP"),f=n("25b6");var l=n("Eyy1"),p=n("txPx");n.d(e,"c",(function(){return y})),n.d(e,"p",(function(){return O})),n.d(e,"e",(function(){return k})),n.d(e,"y",(function(){return j})),n.d(e,"f",(function(){return _})),n.d(e,"w",(function(){return F})),n.d(e,"v",(function(){return C})),n.d(e,"u",(function(){return E})),n.d(e,"n",(function(){return P})),n.d(e,"h",(function(){return T})),n.d(e,"t",(function(){return M})),n.d(e,"i",(function(){return L})),n.d(e,"l",(function(){return S})),n.d(e,"o",(function(){return U})),n.d(e,"x",(function(){return N})),n.d(e,"j",(function(){return q})),n.d(e,"g",(function(){return J})),n.d(e,"d",(function(){return B})),n.d(e,"k",(function(){return D})),n.d(e,"m",(function(){return R})),n.d(e,"b",(function(){return A})),n.d(e,"a",(function(){return I})),n.d(e,"q",(function(){return K})),n.d(e,"r",(function(){return G})),n.d(e,"s",(function(){return H}));var h={},b={},v={},g=!1,m=Object(p.getLogger)("Trading.Utils"),y="js-bottom-trading-tab",O=function(t){return 0!==t.qty||0!==t.longQty&&void 0!==t.longQty||0!==t.shortQty&&void 0!==t.shortQty},x=["Paper"];function w(){g||(g=!0,h[2]=$.t("Market"),h[1]=$.t("Limit"),h[3]=$.t("Stop",{context:"order"}),h[4]=$.t("StopLimit"),b[1]=$.t("Buy",{context:"trading"}),b[-1]=$.t("Sell",{context:"trading"}),v[2]=$.t("filled"),v[1]=$.t("cancelled"),v[6]=$.t("working"),v[3]=$.t("inactive"),v[4]=$.t("placing"),v[5]=$.t("rejected"))}function k(t){return t?t.map((function(t){return"-"===t.text||t.separator?new c.Separator:new c.Action({name:t.name,checkable:t.checkable,checked:t.checked,disabled:void 0!==t.enabled&&!t.enabled,shortcut:t.shortcut,label:t.text,statName:t.statName,icon:t.icon,onExecute:function(e){t.action({checkable:e.isCheckable(),checked:e.isChecked(),enabled:!e.isDisabled(),text:e.getLabel().toString()})}})})):[]}function j(t,e){w();var n=b[t];return e?n.toUpperCase():n}function _(t,e){var n=j(t.side)+" "+t.qty+" @ "+e.format(t.price);return n.substr(0,1).toUpperCase()+n.substr(1).toLowerCase()}function F(t,e){return w(),e?h[t].toUpperCase():h[t]}function C(t){return w(),v[t]}function E(t){switch(t){case 2:return"orderstatus-filled";case 1:return"orderstatus-cancelled";case 6:return"orderstatus-working";case 3:return"orderstatus-inactive";case 4:return"orderstatus-placing";case 5:return"orderstatus-rejected";default:return"orderstatus-unknown"}}function P(t){
return 6===t||3===t}function T(t,e,n,r,i){var u={added:[],modified:[],removed:[]},o=t.slice(0);return e.forEach((function(e){var c=t.findIndex((function(t){return t[n]===e[n]}));if(-1!==c){o[c]=null;for(var s=t[c],a=0,f=r;a<f.length;a++){var l=f[a],p=!0;if(null===s[l]||"object"!=typeof s[l]?p=s[l]===e[l]:i&&(p=Object(d.deepEquals)(s[l],e[l])[0]),!p)return void u.modified.push(e)}}else u.added.push(e)})),o.forEach((function(t){t&&u.removed.push(t)})),u}function M(t,e){return t.reduce((function(t,n){return t[n[e]]=n,t}),{})}function L(t){return Math.abs(t||0)<.001?"0.00":Object(a.splitThousands)((t||0).toFixed(2))}function S(t){return-1!==[2,1,5].indexOf(t)}function U(t){return-1!==Object.keys(s.OrderOrPositionMessageType).map((function(t){return s.OrderOrPositionMessageType[t]})).indexOf(t)}function N(t,e,n,r){var i=0,o=Object(u.fixComputationError)(t/e);return(1===n&&1===r||2===n&&-1===r)&&(i=Math.floor(o)*e),(1===n&&-1===r||2===n&&1===r)&&(i=Math.ceil(o)*e),Object(u.fixComputationError)(i)}function q(t){return void 0===t?Object(i.t)("Unknown error"):(e=t instanceof Error?t instanceof A&&void 0!==t.userFriendlyMessage?t.userFriendlyMessage:t.message:"object"==typeof t?JSON.stringify(t):t.toString(),Object(f.d)(e));var e}function J(t){return t.map((function(t){return t.metainfo.id}))}function Q(t){return t.findIndex((function(t){return t.brokerPlan&&!t.brokerPlan.hidden&&t.brokerPlan.flags&&t.brokerPlan.flags.includes("featured")}))}function X(t,e){return Object(l.ensureDefined)(t.find((function(t){return t.id.toLowerCase()===e.toLowerCase()})))}function B(t,e){var n=t.map((function(t){return t.id})),i=e.map((function(t){return t.slug_name})),u=e.filter((function(t){return n.includes(t.slug_name)})).map((function(e){return{metainfo:X(t,e.slug_name),brokerPlan:e}})),o=t.filter((function(t){return!i.includes(t.id)&&!x.includes(t.id)})).map((function(t){return{metainfo:t}})),c=Q(u),s=x.map((function(e){return{metainfo:X(t,e)}}));return s.length>0&&u.splice.apply(u,Object(r.f)([c+1,0],s)),Object(r.f)(u,o)}function D(t,e){if(void 0!==e&&e.length>0){var n=e.find((function(e){return"default"in e&&(void 0===e.supportedOrderTypes||e.supportedOrderTypes.includes(t))}))||e.find((function(e){return e.supportedOrderTypes&&e.supportedOrderTypes.includes(t)}));return n?{type:n.value}:void 0}}function R(t){return"oauth2-implicit-flow"===t||"oauth2-code-flow"===t}var A=function(t){function e(n,r){var i=t.call(this,n)||this;return i.name="UserFriendlyError",i.userFriendlyMessage=r,Object.setPrototypeOf(i,e.prototype),i}return Object(r.c)(e,t),e}(Error),I=function(){function t(t){this._isFinished=!1,this._isTerminated=!1,this._tasks=t}return t.prototype.execute=function(){var t=this;return this._isTerminated=!1,this._isExecuted()&&!this._isFinished?this.terminate().then((function(){return t._execution=t._execute()})):this._execution=this._execute()},t.prototype.terminate=function(){return Object(r.b)(this,void 0,void 0,(function(){var t;return Object(r.d)(this,(function(e){switch(e.label){case 0:
if(!this._isExecuted()||this._isFinished)return[3,4];this._isTerminated=!0,e.label=1;case 1:return e.trys.push([1,3,,4]),[4,this._execution];case 2:return e.sent(),[3,4];case 3:return t=e.sent(),m.logWarn(t),[2];case 4:return[2]}}))}))},t.prototype._isExecuted=function(){return!!this._execution},t.prototype._execute=function(){return Object(r.b)(this,void 0,void 0,(function(){var t,e,n,u,o,c;return Object(r.d)(this,(function(r){switch(r.label){case 0:t=0,e=this._tasks,r.label=1;case 1:if(!(t<e.length))return[3,6];if(n=e[t],this._isTerminated)throw new Error("Login tasks are terminated");r.label=2;case 2:return r.trys.push([2,4,,5]),[4,n()];case 3:return r.sent(),[3,5];case 4:throw u=r.sent(),this._isFinished=!0,o=Object(i.t)("Failed to login"),c=void 0!==u.userFriendlyMessage?o+": "+u.userFriendlyMessage:void 0,new A(o+": "+q(u),c);case 5:return t++,[3,1];case 6:return this._isFinished=!0,[2]}}))}))},t}();function K(t){return(t+"-brokers-side-maintenance").toLowerCase()}function G(t){return(t+"-maintenance").toLowerCase()}function H(t){return(new o.Big(t).toFixed().split(".")[1]||"").length}},"9XXR":function(t,e,n){"use strict";n.r(e),n.d(e,"splitThousands",(function(){return i}));var r=n("ivNn");function i(t,e){void 0===e&&(e="&nbsp;");var n=t+"";-1!==n.indexOf("e")&&(n=function(t){return Object(r.fixComputationError)(t).toFixed(10).replace(/\.?0+$/,"")}(Number(t)));var i=n.split(".");return i[0].replace(/\B(?=(\d{3})+(?!\d))/g,e)+(i[1]?"."+i[1]:"")}}}]);