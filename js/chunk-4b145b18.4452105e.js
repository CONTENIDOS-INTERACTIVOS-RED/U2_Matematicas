(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b145b18"],{"07ac":function(t,e,a){var n=a("23e7"),i=a("6f53").values;n({target:"Object",stat:!0},{values:function(t){return i(t)}})},"0ac6":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dialogo"},[a("div",{staticClass:"dialogo__header px-3 px-lg-4 py-2 py-lg-3"},[a("div",{staticClass:"mb-1"},[t._t("nombre-actividad",[t._v("Arrastrar y soltar")])],2),a("div",{staticClass:"h3 mb-0"},[t._t("titulo-actividad",[t._v("Titulo de actividad - Completa la conversación")])],2)]),a("div",{staticClass:"px-2 py-3 p-lg-4"},[a("div",{staticClass:"row g-0"},[a("div",{ref:"chat-"+t.uid,staticClass:"col-md-8 dialogo__chat"},t._l(t.dialogoComputed,(function(e,n){return a("div",{staticClass:"row g-0 flex-nowrap dialogo__chat__item mb-3"},[a("div",{staticClass:"col-auto dialogo__chat__item__person"},[a("img",{attrs:{src:e.personaje.img}}),a("span",{staticClass:"text-small",domProps:{innerHTML:t._s(e.personaje.nombre)}})]),a("div",{staticClass:"col dialogo__chat__item__message__container"},[a("div",{staticClass:"dialogo__chat__item__message"},[a("div",{staticClass:"row g-0 align-items-center dialogo__chat__item__message__bubble dialogo__chat__item__message__bubble--tail"},[a("div",{staticClass:"col dialogo__chat__item__message__text me-2"},[a("div",{staticClass:"dialogo__chat__item__message__text__eng h5 mb-0"},[t._l(e.textoIng,(function(n,i){return["*"===n?a("div",{key:"phrase-"+e.id+"-"+i,ref:"phrase-"+e.id,refInFor:!0,staticClass:"d-inline dialogo__chat__item__message__text__drop",class:{"is-active":t.dropId===e.id},on:{drop:function(a){return a.preventDefault(),t.onDrop(e.id)},dragenter:function(a){return a.preventDefault(),t.onDragEnter(e.id)},dragleave:function(e){return e.preventDefault(),t.onDragLeave()},dragover:function(t){t.preventDefault()}}},[t.answers[e.id]?a("span",{staticClass:"dialogo__chat__item__message__text__drop__response",domProps:{innerHTML:t._s(t.answers[e.id].palabra)}}):a("span",{staticClass:"dialogo__chat__item__message__text__drop__default"})]):a("span",{key:"phrase-"+e.id+"-"+i,domProps:{innerHTML:t._s(n)}})]}))],2),t.translations.includes(e.id)?a("div",{staticClass:"dialogo__chat__item__message__text__esp text-small"},[a("hr",{staticClass:"my-2"}),t._l(e.textoEsp,(function(e){return["*"===e?a("div",{staticClass:"d-inline dialogo__chat__item__message__text__drop"},[a("span",{staticClass:"dialogo__chat__item__message__text__drop__default"})]):a("span",{domProps:{innerHTML:t._s(e)}})]}))],2):t._e()]),a("div",{staticClass:"col-auto dialogo__chat__item__message__audio"},[a("Audio",{attrs:{audio:e.audio},on:{"audio-hover":function(e){t.mostrarIndicadorAudio=!1}}})],1)]),a("div",{staticClass:"d-flex justify-content-end me-3"},[a("button",{staticClass:"dialogo__chat__item__message__translate-btn text-small",on:{click:function(a){return t.toggleTranslate(e.id)}}},[t._v("Ver traducción")])])])]),a("div",{staticClass:"col-1"})])})),0),t._m(0),a("div",{staticClass:"col dialogo__words"},[a("div",{staticClass:"dialogo__words__content"},[a("div",{staticClass:"dialogo__words__content__explanation"},[t._t("descripcion-actividad",[t._v("Arrastra y suelta las palabras en la conversación")])],2),t.wordsToShow.length?a("div",{staticClass:"dialogo__words__content__words__container mt-md-3 mb-3 mb-md-0"},[t.touchScreen?t._l(t.wordsToShow,(function(e){return a("div",{key:"word-"+e.id,ref:"word-"+e.id,refInFor:!0,staticClass:"h5 dialogo__words__word",class:{grabbing:e.id===t.dragId},domProps:{innerHTML:t._s(e.palabra)},on:{touchstart:function(a){return a.preventDefault(),t.onTouchStart(e.id)},touchmove:function(a){return a.preventDefault(),t.onTouchMove(a,e.id)},touchend:function(a){return a.preventDefault(),t.onTouchEnd(a,e.id)},touchcancel:function(a){return a.preventDefault(),t.onTouchCancel(a,e.id)}}})})):t._l(t.wordsToShow,(function(e){return a("div",{key:"word-"+e.id,staticClass:"h5 dialogo__words__word",class:{grabbing:e.id===t.dragId},attrs:{draggable:""},domProps:{innerHTML:t._s(e.palabra)},on:{dragstart:function(a){return t.onStartDrag(e.id)},dragend:function(e){return t.onEndDrag()}}})}))],2):t._e()]),a("div",{staticClass:"dialogo__words__footer"},[t.score?a("div",{staticClass:"dialogo__score mt-3"},["approved"===t.score?a("div",{staticClass:"dialogo__score p-3 approved"},[a("div",{staticClass:"row align-items-center"},[t._m(1),a("div",{staticClass:"col"},[t._t("feedback-correcto",[t._v("¡Muy bien!")])],2)])]):t._e(),"disapproved"===t.score?a("div",{staticClass:"dialogo__score px-3 py-2 disapproved"},[a("div",{staticClass:"row align-items-center"},[t._m(2),a("div",{staticClass:"col"},[t._t("feedback-incorrecto",[t._v("Incorrecto")])],2)])]):t._e()]):t._e(),Object.values(t.answers).length===t.words.length?a("div",{staticClass:"dialogo__words__footer__actions text-end mt-3"},[null===t.score?a("button",{on:{click:t.onCheck}},[t._v("Comprobar")]):"disapproved"===t.score?a("button",{on:{click:t.reset}},[t._v("Prueba otra vez")]):t._e()]):t._e()])])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-12 d-md-none"},[a("hr",{staticClass:"mb-3 mt-4"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-2"},[n("div",{staticClass:"dialogo__score__icon"},[n("img",{attrs:{src:a("86bd")}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-2"},[n("div",{staticClass:"dialogo__score__icon"},[n("img",{attrs:{src:a("3b23")}})])])}],o=(a("4de4"),a("d3b7"),a("d81d"),a("07ac"),a("caad"),a("2532"),a("7db0"),a("af8b")),r=a("a0e0"),s={name:"DialogoActividad",components:{Audio:o["default"]},mixins:[r["a"]],props:{dialogo:{type:Object,default:function(){return{}}}},data:function(){return{uid:Math.floor(Math.random()*Math.pow(10,10)),touchScreen:!1,dragId:null,dropId:null,answers:{},translations:[],score:null}},computed:{dialogoComputed:function(){return this.dialogoMerge(this.dialogo,!0)},words:function(){return this.shuffle(this.dialogoComputed.map((function(t){return{palabra:t.palabra,id:t.id}})).filter((function(t){return t.palabra})))},answerWordsIds:function(){return Object.values(this.answers).map((function(t){return t.dragId}))},wordsToShow:function(){var t=this;return this.words.filter((function(e){return!t.answerWordsIds.includes(e.id)}))}},created:function(){this.touchScreen="ontouchstart"in document.documentElement},methods:{onStartDrag:function(t){this.dragId=t},onEndDrag:function(){this.dragId=null},onDrop:function(t){var e=this;this.dragId&&(this.$set(this.answers,t,{dragId:this.dragId,dropId:t,palabra:this.words.find((function(t){return t.id===e.dragId})).palabra}),this.dropId=null)},onDragEnter:function(t){this.dropId=t},onDragLeave:function(){this.dropId=null},onTouchStart:function(t){var e=this.$refs["word-".concat(t)][0];e.classList.add("touch-drag")},onTouchMove:function(t,e){var a=this.$refs["word-".concat(e)][0],n=a.getBoundingClientRect(),i=t.touches[0];a.style.top="".concat(i.clientY-n.height/2,"px"),a.style.left="".concat(i.clientX-n.width/2,"px")},onTouchEnd:function(t,e){var a=this;if(t.changedTouches.length>1)this.resetDragElm(e);else{var n=this.$refs["chat-".concat(this.uid)],i=n.getBoundingClientRect(),o=t.changedTouches[0],r=o.clientX>i.x&&o.clientX<i.x+i.width,s=o.clientY>i.y&&o.clientY<i.y+i.height;if(r&&s){var c,d=this.words.some((function(t){var e=a.$refs["phrase-".concat(t.id)][0],n=e.getBoundingClientRect(),i=25,r=o.clientX>n.x-i&&o.clientX<n.x+n.width+i,s=o.clientY>n.y-i&&o.clientY<n.y+n.height+i;return r&&s&&(c=t.id),r&&s}));d&&this.$set(this.answers,c,{dragId:e,dropId:c,palabra:this.words.find((function(t){return t.id===e})).palabra}),this.resetDragElm(e)}else this.resetDragElm(e)}},onTouchCancel:function(t){this.resetDragElm(t)},resetDragElm:function(t){var e=this.$refs["word-".concat(t)][0];e.classList.remove("touch-drag")},toggleTranslate:function(t){this.translations.includes(t)?this.translations=this.translations.filter((function(e){return e!==t})):this.translations.push(t)},onCheck:function(){var t=Object.values(this.answers).every((function(t){return t.dragId===t.dropId}));this.score=t?"approved":"disapproved"},reset:function(){this.answers={},this.score=null},shuffle:function(t){for(var e=t.length-1;e>0;e--){var a=Math.floor(Math.random()*(e+1)),n=[t[a],t[e]];t[e]=n[0],t[a]=n[1]}return t}}},c=s,d=a("2877"),l=Object(d["a"])(c,n,i,!1,null,null,null);e["default"]=l.exports},"0cb2":function(t,e,a){var n=a("7b0b"),i=Math.floor,o="".replace,r=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,s=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,a,c,d,l){var u=a+t.length,_=c.length,f=s;return void 0!==d&&(d=n(d),f=r),o.call(l,f,(function(n,o){var r;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,a);case"'":return e.slice(u);case"<":r=d[o.slice(1,-1)];break;default:var s=+o;if(0===s)return n;if(s>_){var l=i(s/10);return 0===l?n:l<=_?void 0===c[l-1]?o.charAt(1):c[l-1]+o.charAt(1):n}r=c[s-1]}return void 0===r?"":r}))}},3209:function(t,e,a){"use strict";a("99af");e["a"]={props:{audio:{type:String,default:""}},data:function(){return{audioElement:null,audioCanPlay:!1,audioDuration:0,currentTime:0,state:"pause"}},computed:{currentTimeDisplay:function(){return this.getTimeFormated(this.currentTime)},audioDurationDisplay:function(){return this.getTimeFormated(this.audioDuration)}},mounted:function(){var t=this;this.audioElement=this.createAudioElement(),this.audioElement.oncanplay=function(){t.audioCanPlay=!0},this.audioElement.onloadedmetadata=function(e){var a=e.target;t.audioCanPlay=!0,t.audioDuration=a.duration},this.audioElement.onended=function(){t.audioElement.currentTime=0,t.state="pause"},this.audioElement.ontimeupdate=function(e){var a=e.target;t.currentTime=a.currentTime}},beforeDestroy:function(){this.audioElement.remove()},methods:{getTimeFormated:function(t){var e=Math.floor(t),a=Math.floor(e/60),n=e%60;return a=a<10?"0".concat(a):a,n=n<10?"0".concat(n):n,"".concat(a,":").concat(n)},createAudioElement:function(){var t=document.createElement("audio");return t.setAttribute("preload","metadata"),t.setAttribute("src",this.audio),document.body.appendChild(t),t},play:function(){this.state="play",this.audioElement.play()},pause:function(){this.state="pause",this.audioElement.pause()},stop:function(){this.state="pause",this.audioElement.pause(),this.audioElement.currentTime=0}}}},"3b23":function(t,e,a){t.exports=a.p+"img/red-x.76179c7f.svg"},5319:function(t,e,a){"use strict";var n=a("d784"),i=a("825a"),o=a("50c4"),r=a("a691"),s=a("1d80"),c=a("8aa5"),d=a("0cb2"),l=a("14c3"),u=Math.max,_=Math.min,f=function(t){return void 0===t?t:String(t)};n("replace",2,(function(t,e,a,n){var h=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,g=n.REPLACE_KEEPS_$0,p=h?"$":"$0";return[function(a,n){var i=s(this),o=void 0==a?void 0:a[t];return void 0!==o?o.call(a,i,n):e.call(String(i),a,n)},function(t,n){if(!h&&g||"string"===typeof n&&-1===n.indexOf(p)){var s=a(e,t,this,n);if(s.done)return s.value}var v=i(t),m=String(this),b="function"===typeof n;b||(n=String(n));var C=v.global;if(C){var w=v.unicode;v.lastIndex=0}var x=[];while(1){var E=l(v,m);if(null===E)break;if(x.push(E),!C)break;var y=String(E[0]);""===y&&(v.lastIndex=c(m,o(v.lastIndex),w))}for(var T="",I=0,D=0;D<x.length;D++){E=x[D];for(var M=String(E[0]),S=u(_(r(E.index),m.length),0),$=[],k=1;k<E.length;k++)$.push(f(E[k]));var A=E.groups;if(b){var P=[M].concat($,S,m);void 0!==A&&P.push(A);var j=String(n.apply(void 0,P))}else j=d(M,m,S,$,A,n);S>=I&&(T+=m.slice(I,S)+j,I=S+M.length)}return T+m.slice(I)}]}))},"5ccd":function(t,e,a){t.exports=a.p+"img/audio.058779f0.svg"},"6f53":function(t,e,a){var n=a("83ab"),i=a("df75"),o=a("fc6a"),r=a("d1e7").f,s=function(t){return function(e){var a,s=o(e),c=i(s),d=c.length,l=0,u=[];while(d>l)a=c[l++],n&&!r.call(s,a)||u.push(t?[a,s[a]]:s[a]);return u}};t.exports={entries:s(!0),values:s(!1)}},"7db0":function(t,e,a){"use strict";var n=a("23e7"),i=a("b727").find,o=a("44d2"),r="find",s=!0;r in[]&&Array(1)[r]((function(){s=!1})),n({target:"Array",proto:!0,forced:s},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o(r)},"86bd":function(t,e,a){t.exports=a.p+"img/green-check.f4a3fa01.svg"},"99af":function(t,e,a){"use strict";var n=a("23e7"),i=a("d039"),o=a("e8b5"),r=a("861d"),s=a("7b0b"),c=a("50c4"),d=a("8418"),l=a("65f0"),u=a("1dde"),_=a("b622"),f=a("2d00"),h=_("isConcatSpreadable"),g=9007199254740991,p="Maximum allowed index exceeded",v=f>=51||!i((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),m=u("concat"),b=function(t){if(!r(t))return!1;var e=t[h];return void 0!==e?!!e:o(t)},C=!v||!m;n({target:"Array",proto:!0,forced:C},{concat:function(t){var e,a,n,i,o,r=s(this),u=l(r,0),_=0;for(e=-1,n=arguments.length;e<n;e++)if(o=-1===e?r:arguments[e],b(o)){if(i=c(o.length),_+i>g)throw TypeError(p);for(a=0;a<i;a++,_++)a in o&&d(u,_,o[a])}else{if(_>=g)throw TypeError(p);d(u,_++,o)}return u.length=_,u}})},a0e0:function(t,e,a){"use strict";var n=a("5530");a("d81d"),a("7db0"),a("d3b7"),a("4de4"),a("ac1f"),a("5319");e["a"]={data:function(){return{uid:Math.floor(Math.random()*Math.pow(10,10))}},methods:{dialogoMerge:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t.dialogo?t.dialogo.map((function(i,o){return Object(n["a"])(Object(n["a"])({},i),{},{id:e.uid+o+1,textoIng:a?e.splitPhrase(i.textoIng):i.textoIng,textoEsp:a?e.splitPhrase(i.textoEsp):i.textoEsp,personaje:t.personajes&&t.personajes.find((function(t){return t.nombre===i.personaje}))})})):[]},splitPhrase:function(t){return t.replace(/^\s+|\s+$/g,"&nbsp;").replace("***","___*___").split("___").filter(Boolean)}}}},af8b:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"audio position-relative",on:{"~mouseover":function(e){return t.$emit("audio-hover")}}},[t._t("default"),t.audioCanPlay?"pause"===t.state?n("button",{staticClass:"audio__btn",on:{click:t.play}},[n("img",{attrs:{src:a("5ccd")}})]):n("button",{staticClass:"audio__btn",on:{click:t.pause}},[n("img",{attrs:{src:a("f034")}})]):n("div",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status"}},[n("span",{staticClass:"visually-hidden"},[t._v("Loading..")])])],2)},i=[],o=a("3209"),r={name:"Audio",mixins:[o["a"]]},s=r,c=a("2877"),d=Object(c["a"])(s,n,i,!1,null,null,null);e["default"]=d.exports},f034:function(t,e,a){t.exports=a.p+"img/pause.8df843e4.svg"}}]);
//# sourceMappingURL=chunk-4b145b18.4452105e.js.map