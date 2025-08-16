/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function t(t,e,i,s){var r,n=arguments.length,o=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const e=window,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),r=new WeakMap;class n{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(e,t))}return t}toString(){return this.cssText}}const o=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new n(i,t,s)},l=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,s))(e)})(t):t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var a;const h=window,d=h.trustedTypes,c=d?d.emptyScript:"",u=h.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?c:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>e!==t&&(e==e||t==t),$={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:v},f="finalized";class _ extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const r=this[t];this[e]=s,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||$}static finalize(){if(this.hasOwnProperty(f))return!1;this[f]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{i?t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):s.forEach(i=>{const s=document.createElement("style"),r=e.litNonce;void 0!==r&&s.setAttribute("nonce",r),s.textContent=i.cssText,t.appendChild(s)})})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=$){var s;const r=this.constructor._$Ep(t,i);if(void 0!==r&&!0===i.reflect){const n=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:p).toAttribute(e,i.type);this._$El=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,r=s._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=s.getPropertyOptions(r),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:p;this._$El=r,this[r]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t,e)=>this[e]=t),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var g;_[f]=!0,_.elementProperties=new Map,_.elementStyles=[],_.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:_}),(null!==(a=h.reactiveElementVersions)&&void 0!==a?a:h.reactiveElementVersions=[]).push("1.6.3");const y=window,m=y.trustedTypes,A=m?m.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",b=`lit$${(Math.random()+"").slice(9)}$`,w="?"+b,S=`<${w}>`,x=document,C=()=>x.createComment(""),P=t=>null===t||"object"!=typeof t&&"function"!=typeof t,k=Array.isArray,T="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,O=/>/g,N=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,M=/"/g,j=/^(?:script|style|textarea|title)$/i,D=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),L=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),B=new WeakMap,I=x.createTreeWalker(x,129,null,!1);function V(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(e):e}const W=(t,e)=>{const i=t.length-1,s=[];let r,n=2===e?"<svg>":"",o=H;for(let e=0;e<i;e++){const i=t[e];let l,a,h=-1,d=0;for(;d<i.length&&(o.lastIndex=d,a=o.exec(i),null!==a);)d=o.lastIndex,o===H?"!--"===a[1]?o=U:void 0!==a[1]?o=O:void 0!==a[2]?(j.test(a[2])&&(r=RegExp("</"+a[2],"g")),o=N):void 0!==a[3]&&(o=N):o===N?">"===a[0]?(o=null!=r?r:H,h=-1):void 0===a[1]?h=-2:(h=o.lastIndex-a[2].length,l=a[1],o=void 0===a[3]?N:'"'===a[3]?M:R):o===M||o===R?o=N:o===U||o===O?o=H:(o=N,r=void 0);const c=o===N&&t[e+1].startsWith("/>")?" ":"";n+=o===H?i+S:h>=0?(s.push(l),i.slice(0,h)+E+i.slice(h)+b+c):i+b+(-2===h?(s.push(void 0),e):c)}return[V(t,n+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class q{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0;const o=t.length-1,l=this.parts,[a,h]=W(t,e);if(this.el=q.createElement(a,i),I.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=I.nextNode())&&l.length<o;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith(E)||e.startsWith(b)){const i=h[n++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+E).split(b),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?J:"?"===e[1]?Z:"@"===e[1]?Q:K})}else l.push({type:6,index:r})}for(const e of t)s.removeAttribute(e)}if(j.test(s.tagName)){const t=s.textContent.split(b),e=t.length-1;if(e>0){s.textContent=m?m.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],C()),I.nextNode(),l.push({type:2,index:++r});s.append(t[e],C())}}}else if(8===s.nodeType)if(s.data===w)l.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(b,t+1));)l.push({type:7,index:r}),t+=b.length-1}r++}}static createElement(t,e){const i=x.createElement("template");return i.innerHTML=t,i}}function F(t,e,i=t,s){var r,n,o,l;if(e===L)return e;let a=void 0!==s?null===(r=i._$Co)||void 0===r?void 0:r[s]:i._$Cl;const h=P(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==h&&(null===(n=null==a?void 0:a._$AO)||void 0===n||n.call(a,!1),void 0===h?a=void 0:(a=new h(t),a._$AT(t,i,s)),void 0!==s?(null!==(o=(l=i)._$Co)&&void 0!==o?o:l._$Co=[])[s]=a:i._$Cl=a),void 0!==a&&(e=F(t,a._$AS(t,e.values),a,s)),e}class Y{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:x).importNode(i,!0);I.currentNode=r;let n=I.nextNode(),o=0,l=0,a=s[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new G(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new tt(n,this,t)),this._$AV.push(e),a=s[++l]}o!==(null==a?void 0:a.index)&&(n=I.nextNode(),o++)}return I.currentNode=x,r}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class G{constructor(t,e,i,s){var r;this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(r=null==s?void 0:s.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=F(this,t,e),P(t)?t===z||null==t||""===t?(this._$AH!==z&&this._$AR(),this._$AH=z):t!==this._$AH&&t!==L&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>k(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==z&&P(this._$AH)?this._$AA.nextSibling.data=t:this.$(x.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,r="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=q.createElement(V(s.h,s.h[0]),this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.v(i);else{const t=new Y(r,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=B.get(t.strings);return void 0===e&&B.set(t.strings,e=new q(t)),e}T(t){k(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new G(this.k(C()),this.k(C()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class K{constructor(t,e,i,s,r){this.type=1,this._$AH=z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=z}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(void 0===r)t=F(this,t,e,0),n=!P(t)||t!==this._$AH&&t!==L,n&&(this._$AH=t);else{const s=t;let o,l;for(t=r[0],o=0;o<r.length-1;o++)l=F(this,s[i+o],e,o),l===L&&(l=this._$AH[o]),n||(n=!P(l)||l!==this._$AH[o]),l===z?t=z:t!==z&&(t+=(null!=l?l:"")+r[o+1]),this._$AH[o]=l}n&&!s&&this.j(t)}j(t){t===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class J extends K{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===z?void 0:t}}const X=m?m.emptyScript:"";class Z extends K{constructor(){super(...arguments),this.type=4}j(t){t&&t!==z?this.element.setAttribute(this.name,X):this.element.removeAttribute(this.name)}}class Q extends K{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=F(this,t,e,0))&&void 0!==i?i:z)===L)return;const s=this._$AH,r=t===z&&s!==z||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==z&&(s===z||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class tt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){F(this,t)}}const et=y.litHtmlPolyfillSupport;null==et||et(q,G),(null!==(g=y.litHtmlVersions)&&void 0!==g?g:y.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var it,st;class rt extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,r;const n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let o=n._$litPart$;if(void 0===o){const t=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;n._$litPart$=o=new G(e.insertBefore(C(),t),t,void 0,null!=i?i:{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return L}}rt.finalized=!0,rt._$litElement$=!0,null===(it=globalThis.litElementHydrateSupport)||void 0===it||it.call(globalThis,{LitElement:rt});const nt=globalThis.litElementPolyfillSupport;null==nt||nt({LitElement:rt}),(null!==(st=globalThis.litElementVersions)&&void 0!==st?st:globalThis.litElementVersions=[]).push("3.3.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ot=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){customElements.define(t,e)}}})(t,e),lt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function at(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):lt(t,e)}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ht;null===(ht=window.HTMLSlotElement)||void 0===ht||ht.prototype.assignedElements;let dt=class extends rt{constructor(){super(...arguments),this.data=null,this.error=null,this.loading=!1}static get styles(){return o`
      .card-content {
        padding: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .loading {
        font-style: italic;
        color: #666;
      }
      .error {
        color: red;
      }
      .graph-container {
        width: 100%;
        max-width: 600px;
        margin-top: 16px;
      }
      .temp-line {
        stroke: #ff9800;
        stroke-width: 2;
      }
      .rain-line {
        stroke: #42a5f5;
        stroke-width: 2;
      }
      .axis-label {
        font-size: 12px;
        fill: #666;
      }
      .refresh-button {
        margin-top: 8px;
        cursor: pointer;
        color: #666;
        font-size: 14px;
      }
      .refresh-button:hover {
        color: #333;
      }
    `}async fetchData(){try{this.error=null,this.data=null,this.loading=!0;const t=this.config.location_id||"441430",e=await fetch(`https://rpcache-aa.meteofrance.com/internet2018client/2.0/forecast?id=${t}&instants=&day=5&token=__Wj7dVSTjV9YGu1guveLyDq0g7S7TfTjaHBTPTpO0kj8__`);if(!e.ok)throw new Error(`Failed to fetch data: HTTP ${e.status}`);const i=await e.json();if(!i.forecast||!Array.isArray(i.forecast))throw new Error("Invalid data format: missing forecast data");this.data=i}catch(t){t instanceof Error?this.error=`Error fetching weather data: ${t.message}`:this.error="Error fetching weather data",console.error("Fetch error:",t)}finally{this.loading=!1}}renderGraph(){if(!this.data)return D``;const t=[],e=[],i=[],s=new Date,r=this.data.forecast||[],n=r.filter(t=>{const e=new Date(t.time);return e>=s&&e<=new Date(s.getTime()+864e5)}).slice(0,24);for(;n.length<24&&r.length>0;)n.push(n[n.length-1]);return n.forEach(s=>{const r=void 0!==s.T?s.T:0,n=void 0!==s.rain_1h?s.rain_1h:0;t.push(r),e.push(n);const o=new Date(s.time);i.push(`${o.getHours()}:00`)}),D`
      <div class="graph-container">
        <svg width="100%" height="200">
          <g transform="translate(40, 180)">
            <!-- X axis -->
            <line x1="0" y1="0" x2="560" y2="0" stroke="#ddd" stroke-width="1"/>
            <!-- Y axis -->
            <line x1="0" y1="0" x2="0" y2="-160" stroke="#ddd" stroke-width="1"/>

            <!-- Temperature line -->
            <path class="temp-line" d=${this.createPath(t,160,0,560)} />
            <!-- Rain line -->
            <path class="rain-line" d=${this.createPath(e,160,0,560)} />

            <!-- X axis labels -->
            ${i.map((t,e)=>D`
              <text x=${24*e} y="20" class="axis-label" text-anchor="middle">${t}</text>
            `)}

            <!-- Y axis labels -->
            <text x="-10" y="-20" class="axis-label" text-anchor="end">30°C</text>
            <text x="-10" y="-80" class="axis-label" text-anchor="end">20°C</text>
            <text x="-10" y="-140" class="axis-label" text-anchor="end">10°C</text>
          </g>
        </svg>
      </div>
    `}createPath(t,e,i,s){if(0===t.length)return"";let r="M 0 "+(e-(void 0!==t[0]?t[0]:0)*(e/30));for(let i=1;i<t.length;i++){const n=void 0!==t[i]?t[i]:0;r+=` L ${i*(s/t.length)} ${e-n*(e/30)}`}return r}updated(t){t.has("hass")&&this.fetchData()}setConfig(t){if(!t.location_id)throw new Error("You need to define a location_id");this.config=t}getCardSize(){return 3}render(){return D`
      <ha-card>
        <div class="card-content">
          <div class="card-header">
            <h2>${this.config.title||"Next 24 Hours Forecast"}</h2>
          </div>
          ${this.error?D`<div class="error">${this.error}</div>`:""}
          ${this.loading?D`<div class="loading">Loading weather data...</div>`:""}
          ${this.data&&!this.loading?this.renderGraph():""}
          ${this.data?D`<div class="refresh-button" @click=${this.fetchData}>↻ Refresh</div>`:""}
        </div>
      </ha-card>
    `}};t([at()],dt.prototype,"hass",void 0),t([at()],dt.prototype,"config",void 0),t([at()],dt.prototype,"data",void 0),t([at()],dt.prototype,"error",void 0),t([at()],dt.prototype,"loading",void 0),dt=t([ot("meteofrance-weather-card")],dt);let ct=class extends rt{static getStub(){return{type:"custom:meteofrance-weather-card",title:"Météo France Weather",location_id:"441430"}}};ct=t([ot("meteofrance-weather-card-editor")],ct),customElements.define("meteofrance-weather-card-editor",ct);
//# sourceMappingURL=meteofrance-weather-card.js.map
