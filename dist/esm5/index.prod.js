!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("rxjs"),require("qrcode-generator"),require("axios"),require("uuid"),require("rxjs/operators"),require("js-base64"));else if("function"==typeof define&&define.amd)define(["rxjs","qrcode-generator","axios","uuid","rxjs/operators","js-base64"],t);else{var r="object"==typeof exports?t(require("rxjs"),require("qrcode-generator"),require("axios"),require("uuid"),require("rxjs/operators"),require("js-base64")):t(e.rxjs,e["qrcode-generator"],e.axios,e.uuid,e["rxjs/operators"],e["js-base64"]);for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(self,((__WEBPACK_EXTERNAL_MODULE__832__,__WEBPACK_EXTERNAL_MODULE__139__,__WEBPACK_EXTERNAL_MODULE__300__,__WEBPACK_EXTERNAL_MODULE__459__,__WEBPACK_EXTERNAL_MODULE__597__,__WEBPACK_EXTERNAL_MODULE__594__)=>(()=>{"use strict";var __webpack_modules__={633:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>PlatformBridge});var rxjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(832),rxjs__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__),_Object__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(562),qrcode_generator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(139),qrcode_generator__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(qrcode_generator__WEBPACK_IMPORTED_MODULE_2__),axios__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(300),axios__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__),_Hardware__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(533);class PlatformBridge extends _Hardware__WEBPACK_IMPORTED_MODULE_4__.D{createQrCode(e,t){return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable((r=>{let n=t?.SideLength??200;const o=qrcode_generator__WEBPACK_IMPORTED_MODULE_2__(t?.type||4,t?.Level||"H");o.addData(e??""),o.make();const s=(n-4)/o.getModuleCount(),u=o.createDataURL(s,2);return r.next(new _Object__WEBPACK_IMPORTED_MODULE_1__.fo(u)),r.complete(),{unsubscribe:()=>r.unsubscribe()}}))}loadRunInfo(){throw new Error("Method not implemented.")}runCommand(command,option){return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable((subscriber=>{let result=null,error=null,status=!1;try{result=eval(command?.toString()),status=!0}catch(e){error=e,status=!1}finally{subscriber.next({result,status,error,command}),subscriber.complete()}return{unsubscribe:()=>subscriber.unsubscribe()}}))}open(e,t){throw new Error("Method not implemented.")}loadFile(e,t){throw new Error("Method not implemented.")}fetch(e){return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable((t=>(axios__WEBPACK_IMPORTED_MODULE_3___default().request(e).then((e=>{let r=null,n=null;const o={};200!==e.status?r=new Error(`${e.status} ${e.statusText}`):n=e.data,o.data=n,o.error=r,o.response=e,t.next(new _Object__WEBPACK_IMPORTED_MODULE_1__.R9(o)),t.complete()})).catch((e=>{t.error(e)})),{unsubscribe:()=>{t.unsubscribe()}})))}}},533:(e,t,r)=>{r.d(t,{D:()=>n});class n{takePhoto(e){throw new Error("Method not implemented.")}recordVideo(e){throw new Error("Method not implemented.")}getPhotos(){throw new Error("Method not implemented.")}getCurrentPosition(){throw new Error("Method not implemented.")}watchPosition(e){throw new Error("Method not implemented.")}closePosition(){throw new Error("Method not implemented.")}recordAudio(){throw new Error("Method not implemented.")}stopAudio(){throw new Error("Method not implemented.")}getFile(e){throw new Error("Method not implemented.")}startVibrator(e){throw new Error("Method not implemented.")}stopVibrator(){throw new Error("Method not implemented.")}getSystemInfo(){throw new Error("Method not implemented.")}getVolume(){throw new Error("Method not implemented.")}setVolume(e){throw new Error("Method not implemented.")}getBrightness(){throw new Error("Method not implemented.")}setBrightness(e){throw new Error("Method not implemented.")}scanBluetooth(){throw new Error("Method not implemented.")}connectBluetooth(e){throw new Error("Method not implemented.")}bluetoothSendData(e){throw new Error("Method not implemented.")}bluetoothReceiveData(e){throw new Error("Method not implemented.")}bluetoothClose(e){throw new Error("Method not implemented.")}speechInit(e){throw new Error("Method not implemented.")}speak(e){throw new Error("Method not implemented.")}stopSpeak(){throw new Error("Method not implemented.")}clearSpeech(){throw new Error("Method not implemented.")}}},820:(e,t,r)=>{r.r(t),r.d(t,{StringObject:()=>u});var n=r(624),o=r(358);const s=(0,n.b)(String,["length"]);const u=class extends s{constructor(e){super(),this._value=e}valueOf(){return this._value}get length(){return(0,o.c)(this._value.length)}}},410:(e,t,r)=>{var n;r.d(t,{j:()=>n}),function(e){let t,r;!function(e){e.More="more",e.Equal="equal",e.Less="less",e.MoreEqual="moreEqual",e.LessEqual="lessEqual"}(t=e.CompareEnum||(e.CompareEnum={})),function(e){e.Plus="plus",e.Reduce="reduce",e.Multi="multi",e.Divide="divide"}(r=e.CalcEnum||(e.CalcEnum={}))}(n||(n={}))},131:(e,t,r)=>{r.d(t,{ep:()=>i,l3:()=>d,Lo:()=>k,NT:()=>x,el:()=>c,hy:()=>g,UQ:()=>v,R9:()=>n,Hu:()=>_,fo:()=>E.StringObject,bN:()=>o.b,Ph:()=>o.P});class n{get[Symbol.toStringTag](){return"flow-object"}constructor(e={}){this._value=e}valueOf(){return this._value}json(){const{StringObject:e}=r(820);try{return new e(JSON.stringify(this._value))}catch(t){return new e("{}")}}}var o=r(624),s=r(358);const u=(0,o.b)(Array,["length"]);const i=class extends u{constructor(...e){const t=e[0];var r=null;super(r=t instanceof Array&&1===e.length?t:new Array(...e)),this._value=r}len(){return this._value.length}first(){return this._value[0]}last(){return this._value[this._value.length-1]}valueOfIndex(e){return this._value[e]}valueOf(){return this._value}get length(){return(0,s.c)(this._value.length)}},a=(0,o.b)(Map,["size"]);const c=class extends a{valueOf(){return this._value}len(){return this._value.size}get size(){return(0,s.c)(this._value.size)}},l=(0,o.b)(Set,["size"]);const _=class extends l{constructor(e){super(),this._value=new Set(e)}len(){return this._value.size}valueOf(){return this._value}get size(){return(0,s.c)(this._value.size)}};var p=r(225);class d extends n{static type;constructor(e=!1){super(e),this._value=e}valueOf(){return!!this._value}}var b,h=function(e,t,r,n){var o,s=arguments.length,u=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,r,n);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(u=(s<3?o(u):s>3?o(t,r,u):o(t,r))||u);return s>3&&u&&Object.defineProperty(t,r,u),u},m=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};const f=(0,o.b)(Number);let w=b=class extends f{static type;constructor(e=1){super(e),this._value=e}valueOf(){return this._value}json(){return super.json()}compare(e,t){return new d(!1)}more(e){return new d(this._value>e._value)}equal(e){return new d(this._value===e._value)}less(e){return new d(this._value<e._value)}moreEqual(e){return new d(this._value>=e._value)}lessEqual(e){return new d(this._value<=e._value)}calc(e,t){return new b(0)}plus(e){return new b(this._value+e._value)}reduce(e){return new b(this._value-e._value)}multi(e){return new b(this._value*e._value)}divide(e){return new b(0===e._value?1/0:this._value/e._value)}};h([p.vN,m("design:type",Function),m("design:paramtypes",[String,Object]),m("design:returntype",d)],w.prototype,"compare",null),h([p.vN,m("design:type",Function),m("design:paramtypes",[String,Object]),m("design:returntype",w)],w.prototype,"calc",null),w=b=h([p.SI,p.Y$,m("design:paramtypes",[Number])],w);const v=w;var E=r(820);const O=(0,o.b)(Date);const x=class extends O{constructor(e=new Date){super(e),this._value=e}valueOf(){return this._value}toLocaleString(){return(0,s.c)(this._value.toLocaleDateString())}timestamp(){return(0,s.c)(this._value.getDate())}};class k extends n{constructor(e=new ArrayBuffer(0)){super(e),this._value=e}data(){return this.valueOf()}valueOf(){return this._value}}class g extends n{constructor(e=null){super(e),this._value=e}valueOf(){return this._value}merge(e){return new g(null)}isTruly(){return!!this._value}isNull(){return null===this._value}isUndefined(){return void 0===this._value}}},624:(e,t,r)=>{r.d(t,{P:()=>c,b:()=>a});var n,o=r(225),s=r(131),u=function(e,t,r,n){var o,s=arguments.length,u=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,r,n);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(u=(s<3?o(u):s>3?o(t,r,u):o(t,r))||u);return s>3&&u&&Object.defineProperty(t,r,u),u},i=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};function a(e,t=[]){if(n||(n=new Map),n.has(e))return n.get(e);const r={};t=[...t,"constructor","valueOf"],Object.keys(Object.getOwnPropertyDescriptors(e.prototype)).forEach((e=>{t.includes(e)||"symbol"==typeof e||(r[e]=e)}));let a=class extends s.R9{constructor(e=null){super(),this._value=e??{}}};return a=u([(0,o.fb)(r),i("design:paramtypes",[Object])],a),n.set(e,a),a}function c(e,t,r=[]){const n=a(e,r);return Reflect.construct(n,t)}},562:(e,t,r)=>{r.d(t,{Hu:()=>n.Hu,Lo:()=>n.Lo,NT:()=>n.NT,Ph:()=>n.Ph,R9:()=>n.R9,UQ:()=>n.UQ,bN:()=>n.bN,el:()=>n.el,ep:()=>n.ep,fo:()=>n.fo,hy:()=>n.hy,l3:()=>n.l3});var n=r(131);r(624)},225:(e,t,r)=>{r.d(t,{SI:()=>c,Y$:()=>a,fb:()=>l,vN:()=>i});var n=r(131),o=r(410),s=r(358);const u="onlyDeclaration";function i(e,t,r){r.value.declaration=u}function a(e){Object.keys(o.j.CompareEnum).forEach((t=>{const r=o.j.CompareEnum[t],s=e.prototype[r];s&&s.declaration!==u||(e.prototype[r]=()=>new n.l3(!1))})),e.prototype.compare?.declaration!==u&&!1!=!!e.prototype.compare||(e.prototype.compare=function(t,r){const n=e.prototype[t]?.bind(this);return!(!n||"function"!=typeof n)&&n.call(this,r)})}function c(e){Object.keys(o.j.CalcEnum).forEach((t=>{const r=o.j.CalcEnum[t],s=e.prototype[r];s&&s.declaration!==u||(e.prototype[r]=()=>new n.UQ(0))})),e.prototype.calc?.declaration!==u&&!1!=!!e.prototype.calc||(e.prototype.calc=function(t,r){const n=e.prototype[t]?.bind(this);return!(!n||"function"!=typeof n)&&n.call(this,r)})}function l(e){const t="execFunction";return function(r){Object.keys(e).forEach((t=>{const n=e[t],o=r.prototype[n];o&&o.declaration!==u||(r.prototype[n]=function(...e){const t=this.valueOf(),r=t[n];let o;return o="function"==typeof r?r.bind(t)(...e):t,(0,s.c)(o)})})),r.prototype[t]?.declaration!==u&&!1!=!!r.prototype[t]||(r.prototype[t]=function(e,...t){const n=r.prototype[e]?.bind(this);return!(!n||"function"!=typeof n)&&n(...t)})}}},358:(e,t,r)=>{r.d(t,{c:()=>i,p:()=>u});var n=r(131);let o=null;const s=()=>(null===o&&(o={"[object Object]":n.R9,"[object Map]":n.el,"[object Set]":n.Hu,"[object Array]":n.ep,"[object Boolean]":n.l3,"[object Date]":n.NT,"[object Number]":n.UQ,"[object String]":n.fo,"[object ArrayBuffer]":n.Lo,"[object Uint8Array]":n.Lo,"[object Promise]":n.R9,"[object Null]":n.hy,"[object Undefined]":n.hy}),o),u=e=>(s(),"[object flow-object]"===Object.prototype.toString.call(e));function i(e,t=!1){if(s(),u(e)&&!1===t)return e;const r=Object.prototype.toString.call(e),i=o[r];return i?new i(e??{}):new n.R9(e)}},300:e=>{e.exports=__WEBPACK_EXTERNAL_MODULE__300__},594:e=>{e.exports=__WEBPACK_EXTERNAL_MODULE__594__},139:e=>{e.exports=__WEBPACK_EXTERNAL_MODULE__139__},832:e=>{e.exports=__WEBPACK_EXTERNAL_MODULE__832__},597:e=>{e.exports=__WEBPACK_EXTERNAL_MODULE__597__},459:e=>{e.exports=__WEBPACK_EXTERNAL_MODULE__459__}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var r=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](r,r.exports,__webpack_require__),r.exports}__webpack_require__.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(t,{a:t}),t},__webpack_require__.d=(e,t)=>{for(var r in t)__webpack_require__.o(t,r)&&!__webpack_require__.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__={};return(()=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ArrayObject:()=>t.ep,Base64DecodeWork:()=>$,Base64EnCodeWork:()=>V,BooleanObject:()=>t.l3,Context:()=>K,ControlFlow:()=>o.j,DataObject:()=>t.Lo,DateObject:()=>t.NT,DelayIntervalWork:()=>Z,FetchWork:()=>z,InstructionMTM:()=>N,InstructionOTM:()=>q,InstructionOTO:()=>I,IntervalWork:()=>Y,LoadFileWork:()=>H,MapObject:()=>t.el,NULLObject:()=>t.hy,NumberObject:()=>t.UQ,ObjectTarget:()=>t.R9,OpenURLWork:()=>X,QRCodeWork:()=>Q,RunCommandWork:()=>G,SetObject:()=>t.Hu,StringObject:()=>t.fo,TimeoutWork:()=>J,WorkType:()=>e,createExtendsConstruct:()=>t.bN,createExtendsInstance:()=>t.Ph,decide:()=>T.c,isAbleType:()=>T.p,unpackValue:()=>D,wrapperValue:()=>B});var e,t=__webpack_require__(562);!function(e){let t;!function(e){e[e.INIT=0]="INIT",e[e.READY=1]="READY",e[e.RUNNING=2]="RUNNING",e[e.COMPLETE=3]="COMPLETE"}(t=e.WorkRunStatus||(e.WorkRunStatus={}))}(e||(e={}));var r,n,o=__webpack_require__(410),s=__webpack_require__(832);!function(e){e.Audio="audio/*",e.Video="video/*",e.HTML="text/html",e.Txt="text/plain",e.Image="image/*",e.Csv=".csv",e.Pdf="application/pdf",e.Word="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/msword，application/vnd.openxmlformats-officedocument.wordprocessingml.document",e.All="*"}(r||(r={})),function(e){e.JSON="application/json",e.TEXT="text/plain"}(n||(n={}));const u={development:!0,environment:{},workConfig:{QRCodeWork:{type:4,Level:"H",SideLength:100},RunCommandWork:{},LoadFileWork:{type:r.All},FetchWork:{headers:{"Access-Control-Allow-Origin":"*"}}}};Function.call.bind(Object.prototype.hasOwnProperty);function i(){}var a;!function(e){e[e.NODE_PC=10]="NODE_PC",e[e.WEB_PC=20]="WEB_PC",e[e.WEB_MOBILE=26]="WEB_MOBILE",e[e.OTHER=100]="OTHER"}(a||(a={}));const c="win",l="mac",_="linux",p="iOS",d="Android",b="bb",h="winphone",m="other";const f=Function("return this")();var w,v;if(f.process&&"[object process]"===(v=f.process,Object.prototype.toString.call(v)))w=a.NODE_PC;else{switch(function(){if(navigator.userAgent){var e,t,r=navigator.userAgent;const n=()=>{var e=navigator.platform;if(-1!=e.indexOf("Win")){var t=r.match(/Windows NT (\d+).(\d)/i),n="";return"6"==t[1]?1==t[2]?n="7":t[2]>1&&(n="8"):n=t[1],{name:c,versionStr:n}}return-1!=e.indexOf("Mac")?{name:l,versionStr:""}:-1!=e.indexOf("Linux")?{name:_,versionStr:""}:null};if(e=/Windows Phone (?:OS )?([\d.]*)/,t=r.match(e))return{name:h,versionStr:t[1]};if(r.indexOf("(BB10;")>0)return e=/\sVersion\/([\d.]+)\s/,(t=r.match(e))?{name:b,versionStr:t[1]}:{name:b,versionStr:"10"};if(e=/\(([a-zA-Z ]+);\s(?:[U]?[;]?)([\D]+)((?:[\d._]*))(?:.*[\)][^\d]*)([\d.]*)\s/,t=r.match(e)){if(t[0].match(/iPhone|iPad|iPod/))return t[3]=t[3].replace(/_/g,"."),{name:p,versionStr:t[3]};if(t[2].match(/Android/))return t[2]=t[2].replace(/\s/g,""),{name:d,versionStr:t[3]};if(t[0].match(/PlayBook|BlackBerry/))return{name:b,versionStr:t[4]}}return e=/\((Android)[\s]?([\d][.\d]*)?;.*Firefox\/[\d][.\d]*/,(t=r.match(e))?{name:d,versionStr:3==t.length?t[2]:""}:n()}return{name:m,versionStr:""}}().name){case c:case l:w=a.WEB_PC;break;case p:case d:w=a.WEB_MOBILE;break;case _:w=a.WEB_PC;break;default:w=a.OTHER}}const E=w===a.WEB_MOBILE||w===a.WEB_PC,O=w===a.NODE_PC,x=w===a.NODE_PC||w===a.WEB_PC,k=(a.WEB_MOBILE,!0),g=e=>{let t;return E?t=e.web:O&&(t=e.node),t};var y=__webpack_require__(633);class M extends y.s{open(e){return(0,s.of)(new t.l3(!1))}loadFile(e,r){return(0,s.of)(new t.R9({total:0,loaded:0,data:new ArrayBuffer(0),finish:!0,file:null}))}}class W extends y.s{}class C extends y.s{open(e){const r=window.open(e,"__blank");return(0,s.of)(new t.l3(null!==r))}loadFile(e,r){return new s.Observable((e=>{const n=document.createElement("input");return n.type="file",n.id="_temp_input_select",n.accept=r?.type||"*",n.style.display="none",document.body.append(n),n.addEventListener("change",(r=>{const o=new FileReader,s=n.files[0];o.onprogress=r=>{const{total:n,loaded:u}=r,i=o.result;e.next(new t.R9({total:n,loaded:u,data:i,finish:!1,file:s}))},o.onload=r=>{const n=o.result,{total:u,loaded:i}=r;e.next(new t.R9({total:u,loaded:i,data:n,finish:!0,file:s})),e.complete()},o.onerror=t=>{e.error(t)},o.readAsArrayBuffer(s)})),n.click(),{unsubscribe:()=>e.unsubscribe()}}))}}const P=g({web:{pc:class extends C{},mobile:class extends C{}},node:{pc:W,mobile:M}})[x?"pc":"mobile"],R=Reflect.construct(P,[]);var L=__webpack_require__(459),j=__webpack_require__(597);class A{context;work;uuid;sub;constructor(e,t,r,n){this.context=e,this.work=t,this.sub=r,this.uuid=n??(0,L.v4)()}}var T=__webpack_require__(358);function D(e){return!1==!!e?"":e._value.value.valueOf()}function B(e,r){const n=(0,T.c)(r);return new t.R9({...e._value,value:n})}class S extends s.Subject{name="Instruction";static _id=0;id=S._id++;uuid;beforeWork;nextWork;context;runSubscriptions=new Map;pools=[];config={development:!0};constructor(){super(),this.uuid=(0,L.v4)()}prepare(e,t){return this.beforeWork=e,this.nextWork=t,this.config=this.context?.runOptions||{},this._connectChannel(),Promise.resolve()}_connectChannel(){const e=this,t=this.pipe((0,j.tap)((t=>{this.config?.development&&e.context?.sendLog({work:[e],content:this.context,desc:"[Work:preRun]->接受到数据",value:t})}))).subscribe({complete:()=>{},error:t=>e.error(t),next:t=>e._run(t)});this.pools.push(t)}_run(e){const t=(t,n,o)=>{r.config?.development&&r.context?.sendLog({work:[r],content:this.context,desc:t,value:n||e,error:o})};e=this.nextValue(e)||e;const r=this,n=(this.config?.workConfig||{})[this.name]||{},o=g({web:()=>(r.web_run??(r.run||i)).bind(r)(e,n),node:()=>(r.node_run??(r.run||i)).bind(r)(e,n),other:()=>(r.run||i).bind(r)(e,n)});t("[Work][Func:run]->入口",e);const u=(0,L.v4)(),a=o(e).pipe((0,j.tap)((function(e){t("[Work][Func:run]->结果",e)})),(0,j.observeOn)(s.asyncScheduler)).subscribe({complete:()=>{r.runSubscriptions.get(u)?.sub.unsubscribe(),r.runSubscriptions.delete(u)},error:n=>{t("[Work][Func:run]->执行错误",e,n),r.completeOneLoop(e,null,!1)},next:n=>{t("[Work][Func:run]->将执行下一个Work",n),r.completeOneLoop(e,n,!0),r.nextWork?.next(n)}}),c=new A(r.context,r,a,u);this.runSubscriptions.set(c.uuid,c)}stopWork(){const e=this;return new s.Observable((t=>(e.runSubscriptions.forEach((e=>{e?.sub.unsubscribe()})),t.next(!0),t.complete(),{unsubscribe:()=>t.unsubscribe()})))}clear(){this.pools&&this.pools.forEach((e=>e.unsubscribe())),this.pools.length=0,this.unsubscribe()}error(e){this.context&&this.context.sendLog({work:[this],content:this.context,desc:"[Work:preRun]-接受上一个消息错误",date:new Date,value:new t.fo(e.message)})}addVariable(e,t){this.context&&this.context.addVariable(this,e,t)}logMsg(e,t){this.config?.development&&this.context?.sendLog({work:[this],content:this.context,desc:e,value:B(t,null)})}next(e){!1===this.closed?super.next(e):this.context.sendLog({work:[this],content:this.context,desc:this.toString()+" 已经关闭",value:B(e,null)})}nextValue(e){return e}completeOneLoop(e,t,r){}toString(){return`[${this.name}:${this.id}]`}isAble(){return this.__proto__.isAble()}static isAble(){return k}}class I extends S{nextValue(e){return e}completeOneLoop(e,t,r){}run(e){return new s.Observable((t=>(t.next(e),t.complete(),{unsubscribe:()=>t.unsubscribe()})))}}class q extends S{static OPTION;name="MultipleInstruction";nextValue(e){return e}completeOneLoop(e,t,r){}run(e){return new s.Observable((t=>(t.next(e),t.complete(),{unsubscribe:()=>t.unsubscribe()})))}}class N extends S{static OPTION;name="MultipleInstruction";nextValue(e){return e}completeOneLoop(e,t,r){}run(e){return new s.Observable((t=>(t.next(e),t.complete(),{unsubscribe:()=>t.unsubscribe()})))}}class U extends I{static OPTION;name="BeginWork";static _id=0;inputSubscription;constructor(){super(),this.uuid=(0,L.v4)()}startRun(e,r){const n=r??(0,L.v4)();this.nextWork.next(new t.R9({id:n,value:(0,T.c)(e),option:{}}))}completeOneLoop(){}static isAble(){return k}}class K{status=e.WorkRunStatus.INIT;platform=R;runOptions;runConstant=new Map;works=[];msgChannel=new s.Subject;constructor(e){this.runOptions=e||u;const t=this.msgChannel.subscribe({next:e=>this.workMessage(e),error:e=>this.workError(e)});this.pools.push(t),this.addWork(new U)}pools=[];addVariable(e,t,r){!this.runConstant.get(e.uuid)&&this.runConstant.set(e.uuid,new Map),this.runConstant.get(e.uuid).set(t,r)}workMessage(e){console.log("msgChannel",e)}workError(e){console.log("msgChannelError",e),this.stopWorkChain()}addWorkLog(e){return this.msgChannel.subscribe(e)}sendLog(e){const t={date:new Date,work:e.work.filter((e=>e?.name)),desc:e.desc,value:e.value,error:e.error};this.msgChannel.next(t)}addWork(r){if(r.constructor.isAble&&!1===r.constructor.isAble()){const e="[content][Func:addWork][work isAble is false]";return this.sendLog({content:this,work:[],desc:e,value:null,error:new Error(e)})}if(this.status!==e.WorkRunStatus.INIT)return this.sendLog({content:this,work:[],desc:"[content][Func:addWork][context status is not init]",value:new t.l3(!1)});r.context=this,this.works.push(r)}addWorks(...e){e.forEach(this.addWork)}async prepareWorks(){if(this.status!==e.WorkRunStatus.INIT)return this.sendLog({content:this,work:[],desc:"[content][Func:prepareWorks][context status is not init]",value:new t.l3(!1)});await Promise.all(this.works.map(((e,t,r)=>{const n=r[t-1],o=r[t+1];return e.prepare(n,o)}))),this.status=e.WorkRunStatus.READY}dispatch(r){if(this.status===e.WorkRunStatus.INIT)return this.sendLog({content:this,work:[],desc:"[context][Func:run][run status is not ready  or 已经初始化]",value:new t.l3(!1)});const n=this.works[0];n&&n.startRun((0,T.c)(r)),this.status=e.WorkRunStatus.RUNNING}stopWorkChain(){const e=this;return new Promise(((r,n)=>{const o=this.works.map((e=>e.stopWork()));let u=!1,i=[];(0,s.forkJoin)(o).pipe((0,j.take)(1)).subscribe({next:e=>{u=e.every(((e,t)=>!0===e||(i.push(this.works[t]),!1))),r(u)},error:e=>{n(e)},complete:()=>{this.sendLog({content:e,work:i,desc:"[content][Func:stopWorkChain]",value:new t.R9({id:"stopWorkChain",value:(0,T.c)(u),option:{}})})}})}))}clear(){this.pools.forEach((e=>e.unsubscribe()))}}var F=__webpack_require__(594);class V extends N{name="Base64EnCodeWork";run(e){return new s.Observable((t=>{let r;return r=null==e?"":D(e),t.next(B(e,F.Base64.encode(r))),t.complete(),{unsubscribe:()=>t.unsubscribe()}}))}static isAble(){return k}}class $ extends N{name="Base64DecodeWork";run(e){return new s.Observable((t=>{let r;return r=null==e?"":D(e),t.next(B(e,F.Base64.decode(r))),t.complete(),{unsubscribe:()=>t.unsubscribe()}}))}static isAble(){return k}}class H extends I{name="LoadFileWork";currentConfig={type:r.All};constructor(e){super(),this.currentConfig=e||{type:r.All}}run(e,r){const n=this,o={...r,...this.currentConfig};return new s.Observable((r=>{const s=D(e),u=n.context.platform.loadFile(s,o).pipe((0,j.tap)((t=>{const{loaded:r,total:n,finish:o}=t.valueOf();this.logMsg(`加载进度[load:progress]---：${r}/${n} 是否完成：${o}`,e)})),(0,j.takeLast)(1)).subscribe({next:n=>{const{data:o,file:s}=n.valueOf();r.next(new t.R9({...e._value,value:new t.Lo(o),option:{file:s}})),r.complete()},complete:()=>r.complete(),error:e=>r.error(e)});return{unsubscribe:()=>{u.unsubscribe(),r.unsubscribe()}}}))}static isAble(){return k}}class X extends I{name="OpenURLWork";run(e,r){const n=this;return new s.Observable((o=>{const s=D(e),u=n.context.platform.open(s,r).subscribe({next:r=>o.next(B(e,new t.l3(!0))),complete:()=>o.complete(),error:e=>o.error(e)});return{unsubscribe:()=>{u.unsubscribe(),o.unsubscribe()}}}))}static isAble(){return k}}class Q extends I{name="QRCodeWork";run(e,t){const r=this;return new s.Observable((n=>{let o;o=null==e?"":D(e);const s=r.context.platform.createQrCode(o,t).subscribe({next:t=>n.next(B(e,t._value)),complete:()=>n.complete(),error:e=>n.error(e)});return{unsubscribe:()=>{s.unsubscribe(),n.unsubscribe()}}}))}static isAble(){return k}}class z extends I{name="FetchWork";_getInitOption(e,t){const r=e.valueOf(),{url:n,method:o,timeout:s,data:u}=r,i={url:n,method:r.method||t.method||"GET",timeout:s||t.timeout||1e4,headers:{...t.headers||{},...r.headers||{}}};return i.data=u,"GET"===o.toLocaleUpperCase()&&(i.headers["Content-Type"]=i.headers["Content-Type"]||"application/json"),i.timeoutErrorMessage="请求超时",i}run(e,r){const n=this,o=this._getInitOption(e._value.value,r);return new s.Observable((r=>{const s=n.context.platform.fetch(o).pipe((0,j.tap)((t=>{const{data:r}=t.valueOf();this.logMsg(`[FetchWork][load:data]${r}`,e)}))).subscribe({next:n=>{const o=n.valueOf();o.error?r.error(o.error):(r.next(new t.R9({...e._value,value:o.data})),r.complete())},error:e=>r.error(e),complete:()=>r.complete()});return{unsubscribe:()=>{r.unsubscribe(),s.unsubscribe()}}}))}static isAble(){return k}}class G extends I{template="";name="RunCommandWork";paramsConfig={};callBack=null;constructor(...e){if(super(),"string"==typeof e[0]){const t=e[0]||"$I$",r=e[1]||{"*":"$I$"};this.template=t,this.paramsConfig=r}else"function"==typeof e[0]&&(this.callBack=e[0])}run(e,t){const r=this;return new s.Observable((n=>{let o;o=r.callBack&&"function"==typeof r.callBack?this.callBack(D(e),t):function(e,t,r,n){const o=D(t);let s=e;if("string"==typeof o){const e=r["*"];e&&(s=s.replaceAll(e,o))}else Object.keys(r).forEach((e=>{const t=r[e],n=o[e];s=s.replaceAll(t,n)}));return s}(r.template,e,this.paramsConfig);const s=r.context.platform.runCommand(o).subscribe({next:t=>{this.logMsg(`执行command：${t.error?"失败":"成功"}。结果：${t.result}`,e),n.next(B(e,!!(t.error?void 0:t.result)))},complete:()=>n.complete(),error:e=>n.error(e)});return{unsubscribe:()=>{s.unsubscribe(),n.unsubscribe()}}}))}static isAble(){return k}}class Y extends q{name="IntervalWork";intervalTime;maxCount;notifier;constructor(e,t=1/0,r){super(),this.intervalTime=e||1e3,this.maxCount=t,this.notifier=r||s.NEVER}run(e){const t=parseInt(D(e))||this.intervalTime||1e3,r=this;return new s.Observable((n=>{const o=(0,s.interval)(t,s.asyncScheduler).pipe((0,j.take)(r.maxCount),(0,j.takeUntil)(this.notifier)).subscribe({next:t=>n.next(B(e,t)),error:e=>n.error(e),complete:()=>n.complete()});return{unsubscribe:()=>{n.unsubscribe(),o.unsubscribe()}}}))}}class J extends I{name="TimeoutWork";intervalTime;constructor(e){super(),this.intervalTime=e||1e3}run(e){const t=parseInt(D(e))||this.intervalTime||1e3;return new s.Observable((r=>{const n=(0,s.interval)(t,s.asyncScheduler).pipe((0,j.take)(1)).subscribe({next:t=>{r.next(B(e,t))},error:e=>r.error(e),complete:()=>r.complete()});return{unsubscribe:()=>{r.unsubscribe(),n.unsubscribe()}}}))}}class Z extends q{name="DelayIntervalWork";intervalTime;maxCount;delayTime;notifier;constructor(e=0,t=1e3,r=1/0,n){super(),this.intervalTime=t||1e3,this.maxCount=r,this.delayTime=e||0,this.notifier=n||s.NEVER}run(e){const r=parseInt(D(e))||this.intervalTime||1e3,n=this;return new s.Observable((o=>{const u=(0,s.timer)(n.delayTime,r,s.asyncScheduler).pipe((0,j.take)(n.maxCount),(0,j.takeUntil)(this.notifier)).subscribe({next:r=>o.next(B(e,new t.UQ(r))),error:e=>o.error(e),complete:()=>o.complete()});return{unsubscribe:()=>{o.unsubscribe(),u.unsubscribe()}}}))}}})(),__webpack_exports__})()));