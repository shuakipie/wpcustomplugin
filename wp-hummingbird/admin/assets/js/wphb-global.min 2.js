!function(t){var e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(i,s,function(e){return t[e]}.bind(null,s));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=82)}({1:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},55:function(t,e,n){(function(t){!function(e){"use strict";"object"!=typeof window.SUI&&(window.SUI={}),document.addEventListener("DOMContentLoaded",(function(){var n=e(".sui-wrap");void 0===SUI.dialogs&&(SUI.dialogs={}),e(".sui-2-4-1 .sui-dialog").each((function(){SUI.dialogs.hasOwnProperty(this.id)||(SUI.dialogs[this.id]=new t(this,n))}))}))}(jQuery)}).call(this,n(56))},56:function(t,e,n){(function(n){var i;!function(n){"use strict";var s,o=["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'];function r(t,e){this._show=this.show.bind(this),this._hide=this.hide.bind(this),this._bindKeypress=this._bindKeypress.bind(this),this.node=t,this._listeners={},this.create(e)}function a(t){return Array.prototype.slice.call(t)}function c(t,e){return a((e||document).querySelectorAll(t))}function d(t){var e=u(t);e.length&&e[0].focus()}function u(t){return c(o.join(","),t).filter((function(t){return!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)}))}r.prototype.create=function(t){var e,n;return this._targets=this._targets||function(t){if(NodeList.prototype.isPrototypeOf(t))return a(t);if(Element.prototype.isPrototypeOf(t))return[t];if("string"==typeof t)return c(t)}(t)||(e=this.node,(n=a(e.parentNode.childNodes).filter((function(t){return 1===t.nodeType}))).splice(n.indexOf(e),1),n),this.node.setAttribute("aria-hidden",!0),this.shown=!1,this._openers=c('[data-a11y-dialog-show="'+this.node.id+'"]'),this._openers.forEach(function(t){t.addEventListener("click",this._show)}.bind(this)),this._closers=c("[data-a11y-dialog-hide]",this.node).concat(c('[data-a11y-dialog-hide="'+this.node.id+'"]')),this._closers.forEach(function(t){t.addEventListener("click",this._hide)}.bind(this)),this._fire("create"),this},r.prototype.show=function(t){return this.shown?this:(this.node.classList.add("sui-fade-in"),this.node.classList.remove("sui-fade-out"),this.node.getElementsByClassName("sui-dialog-content")[0].className="sui-dialog-content sui-content-fade-in",this._fire("show",t),this.shown=!0,this.node.removeAttribute("aria-hidden"),this._targets.forEach((function(t){var e=t.getAttribute("aria-hidden");e&&t.setAttribute("data-a11y-dialog-original",e),t.setAttribute("aria-hidden","true")})),s=document.activeElement,d(this.node),document.addEventListener("keydown",this._bindKeypress),document.getElementsByTagName("html")[0].classList.add("sui-has-overlay"),this)},r.prototype.hide=function(t){if(!this.shown)return this;this.node.getElementsByClassName("sui-dialog-content")[0].className="sui-dialog-content sui-content-fade-out",this.node.classList.add("sui-fade-out"),this.node.classList.remove("sui-fade-in"),this._fire("hide",t),this.shown=!1;var e=this.node;return setTimeout((function(){e.setAttribute("aria-hidden","true")}),300),this._targets.forEach((function(t){var e=t.getAttribute("data-a11y-dialog-original");e?(t.setAttribute("aria-hidden",e),t.removeAttribute("data-a11y-dialog-original")):t.removeAttribute("aria-hidden")})),s&&s.focus(),document.removeEventListener("keydown",this._bindKeypress),document.getElementsByTagName("html")[0].classList.remove("sui-has-overlay"),this},r.prototype.destroy=function(){return this.hide(),this._openers.forEach(function(t){t.removeEventListener("click",this._show)}.bind(this)),this._closers.forEach(function(t){t.removeEventListener("click",this._hide)}.bind(this)),this._fire("destroy"),this._listeners={},this},r.prototype.on=function(t,e){return void 0===this._listeners[t]&&(this._listeners[t]=[]),this._listeners[t].push(e),this},r.prototype.off=function(t,e){var n=this._listeners[t].indexOf(e);return n>-1&&this._listeners[t].splice(n,1),this},r.prototype._fire=function(t,e){(this._listeners[t]||[]).forEach(function(t){t(this.node,e)}.bind(this))},r.prototype._bindKeypress=function(t){this.shown&&27===t.which&&(t.preventDefault(),this.hide()),this.shown&&9===t.which&&function(t,e){var n=u(t),i=n.indexOf(document.activeElement);e.shiftKey&&0===i?(n[n.length-1].focus(),e.preventDefault()):e.shiftKey||i!==n.length-1||(n[0].focus(),e.preventDefault())}(this.node,t)},r.prototype._maintainFocus=function(t){this.shown&&!this.node.contains(t.target)&&d(this.node)},void 0!==t.exports?t.exports=r:void 0===(i=function(){return r}.apply(e,[]))||(t.exports=i)}(void 0!==n||window)}).call(this,n(1))},82:function(t,e,n){"use strict";n.r(e),n(55);var i={modal:document.getElementById("wphb-performance-dialog"),contentContainer:document.getElementById("wphb-performance-content"),timer:!1,progress:0,name:"",nonce:"",settings:{scanning:!1,finished:!1,email:""},init:function(){this.modal&&this.renderTemplate()},renderTemplate:function(){var t=i.template("wphb-performance")(this.settings);t&&(this.contentContainer.innerHTML=t,this.contentContainer.classList.add("loaded")),this.mapActions()},mapActions:function(){var t=this,e=this.modal.querySelector("form"),n=this.modal.querySelector("#wphb-cancel-scan");n&&n.addEventListener("click",(function(e){e.preventDefault(),t.cancel()})),e&&e.addEventListener("submit",(function(e){e.preventDefault(),t.name=t.modal.querySelector('input[id="name"]').value,t.email=t.modal.querySelector('input[id="email"]').value,t.nonce=document.getElementById("_wpnonce").value,t.settings.scanning=!0,t.renderTemplate(),t.runTest()}))},runTest:function(){if(this.name&&this.email&&this.nonce){var t=this;this.updateProgressBar();var e=new XMLHttpRequest;e.open("POST",wphbGlobal.ajaxurl+"?action=wphb_performance_run_test",!0),e.setRequestHeader("Content-type","application/x-www-form-urlencoded"),e.onload=function(){JSON.parse(e.response).data.finished?(t.progress=100,t.updateProgressBar(),t.settings.finished=!0,t.settings.email=t.email,t.renderTemplate()):window.setTimeout((function(){return t.runTest()}),3e3)},e.send("user="+this.name+"&email="+this.email+"&url="+window.location.href+"&_ajax_nonce="+this.nonce)}},cancel:function(){var t=new XMLHttpRequest;t.open("POST",wphbGlobal.ajaxurl+"?action=wphb_cancel_performance_test",!0),t.setRequestHeader("Content-type","application/x-www-form-urlencoded"),t.onload=function(){JSON.parse(t.response).data.finished&&(SUI.dialogs["wphb-performance-dialog"].hide(),window.location.reload())},t.send("_ajax_nonce="+this.nonce)},updateProgressBar:function(){var t=this;0===this.progress&&(this.progress=2,this.timer=window.setInterval((function(){t.progress+=1,t.updateProgressBar()}),100));var e=this.modal.querySelector(".sui-progress-state-text");if(3===this.progress&&(e.innerHTML=wphbGlobal.scanRunning),73===this.progress&&(clearInterval(this.timer),this.timer=!1,this.timer=window.setInterval((function(){t.progress+=1,t.updateProgressBar()}),1e3),e.innerHTML=wphbGlobal.scanAnalyzing),99===this.progress&&(e.innerHTML=wphbGlobal.scanWaiting,clearInterval(this.timer),this.timer=!1),this.modal.querySelector(".sui-progress-text span").innerHTML=this.progress+"%",this.modal.querySelector(".sui-progress-bar span").style.width=this.progress+"%",100===this.progress){var n=this.modal.querySelector("i.sui-icon-loader");n.classList.remove("sui-icon-loader","sui-loading"),n.classList.add("sui-icon-check"),e.innerHTML=wphbGlobal.scanComplete,clearInterval(this.timer),this.timer=!1}}};i.template=_.memoize((function(t){var e,n={evaluate:/<#([\s\S]+?)#>/g,interpolate:/{{{([\s\S]+?)}}}/g,escape:/{{([^}]+?)}}(?!})/g,variable:"data"};return function(i){return _.templateSettings=n,(e=e||_.template(document.getElementById(t).innerHTML))(i)}}));var s,o=i;s={menuButton:document.querySelector("#wp-admin-bar-wphb-clear-cache > a"),noticeButton:document.getElementById("wp-admin-notice-wphb-clear-cache"),reportButton:document.getElementById("wp-admin-bar-wphb-performance-report"),ajaxurl:null,init:function(){var t=this;wphbGlobal?this.ajaxurl=wphbGlobal.ajaxurl:this.ajaxurl=ajaxurl,o.init(),this.menuButton&&this.menuButton.addEventListener("click",(function(){return t.post(s.ajaxurl,"wphb_front_clear_cache")})),this.noticeButton&&this.noticeButton.addEventListener("click",(function(){return t.post(s.ajaxurl,"wphb_global_clear_cache")})),this.reportButton&&this.reportButton.addEventListener("click",(function(){return SUI.dialogs["wphb-performance-dialog"].show()}))},post:function(t,e){var n=new XMLHttpRequest;n.open("POST",t+"?action="+e),n.onload=function(){200===n.status?location.reload():console.log("Request failed.  Returned status of "+n.status)},n.send()}},document.addEventListener("DOMContentLoaded",(function(){s.init()}))}});
//# sourceMappingURL=wphb-global.min.js.map