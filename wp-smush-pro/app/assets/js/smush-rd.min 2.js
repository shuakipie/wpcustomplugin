!function(t){var e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=23)}({23:function(t,e){function i(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return s(t,e)}(t))){var e=0,i=function(){};return{s:i,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,r,a=!0,o=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){o=!0,r=t},f:function(){try{a||null==n.return||n.return()}finally{if(o)throw r}}}}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,s=new Array(e);i<e;i++)s[i]=t[i];return s}!function(){"use strict";var t={bar:document.getElementById("smush-image-bar"),toggle:document.getElementById("smush-image-bar-toggle"),images:{bigger:[],smaller:[]},strings:window.wp_smush_resize_vars,init:function(){this.bar||(this.bar=document.getElementById("smush-image-bar")),this.toggle||(this.toggle=document.getElementById("smush-image-bar-toggle")),this.process(),this.toggle.addEventListener("click",this.handleToggleClick.bind(this))},process:function(){var t=this.toggle.querySelector("i");t.classList.add("sui-icon-loader"),t.classList.remove("sui-icon-info"),this.detectImages(),this.images.bigger.length||this.images.smaller.length?(this.toggle.classList.remove("smush-toggle-success"),document.getElementById("smush-image-bar-notice").style.display="none",document.getElementById("smush-image-bar-notice-desc").style.display="block",this.generateMarkup("bigger"),this.generateMarkup("smaller")):(this.toggle.classList.add("smush-toggle-success"),document.getElementById("smush-image-bar-notice").style.display="block",document.getElementById("smush-image-bar-notice-desc").style.display="none"),this.toggleDivs(),t.classList.remove("sui-icon-loader"),t.classList.add("sui-icon-info")},shouldSkipImage:function(t){return!!t.classList.contains("avatar")||("string"==typeof t.getAttribute("no-resize-detection")||(t.clientWidth===t.clientHeight&&1===t.clientWidth||(t.naturalWidth===t.naturalHeight&&1===t.naturalWidth||(null===t.clientWidth||null===t.clientHeight))))},getTooltipText:function(t){var e="";return t.bigger_width||t.bigger_height?e=this.strings.large_image:(t.smaller_width||t.smaller_height)&&(e=this.strings.small_image),e.replace("width",t.real_width).replace("height",t.real_height)},generateMarkup:function(t){var e=this;this.images[t].forEach((function(i,s){var n=document.createElement("div"),r=e.getTooltipText(i.props);n.setAttribute("class","smush-resize-box smush-tooltip smush-tooltip-constrained"),n.setAttribute("data-tooltip",r),n.setAttribute("data-image",i.class),n.addEventListener("click",(function(t){return e.highlightImage(t)})),n.innerHTML='\n\t\t\t\t\t<div class="smush-image-info">\n\t\t\t\t\t\t<span>'.concat(s+1,'</span>\n\t\t\t\t\t\t<span class="smush-tag">').concat(i.props.computed_width," x ").concat(i.props.computed_height,'px</span>\n\t\t\t\t\t\t<i class="smush-front-icons smush-front-icon-arrows-in" aria-hidden="true">&nbsp;</i>\n\t\t\t\t\t\t<span class="smush-tag smush-tag-success">').concat(i.props.real_width," × ").concat(i.props.real_height,'px</span>\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="smush-image-description">').concat(r,"</div>\n\t\t\t\t"),document.getElementById("smush-image-bar-items-"+t).appendChild(n)}))},toggleDivs:function(){var t=this;["bigger","smaller"].forEach((function(e){var i=document.getElementById("smush-image-bar-items-"+e);0===t.images[e].length?i.style.display="none":i.style.display="block"}))},highlightImage:function(t){this.removeSelection();var e=document.getElementsByClassName(t.currentTarget.dataset.image);void 0!==e[0]&&(t.currentTarget.classList.toggle("show-description"),e[0].scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"}),e[0].style.opacity="0.5",setTimeout((function(){e[0].style.opacity="1"}),1e3))},handleToggleClick:function(){this.bar.classList.toggle("closed"),this.toggle.classList.toggle("closed"),this.removeSelection()},removeSelection:function(){var t=document.getElementsByClassName("show-description");t.length>0&&Array.from(t).forEach((function(t){return t.classList.remove("show-description")}))},detectImages:function(){var t,e=i(document.getElementsByTagName("img"));try{for(e.s();!(t=e.n()).done;){var s=t.value;if(!this.shouldSkipImage(s)){var n={real_width:s.clientWidth,real_height:s.clientHeight,computed_width:s.naturalWidth,computed_height:s.naturalHeight,bigger_width:1.5*s.clientWidth<s.naturalWidth,bigger_height:1.5*s.clientHeight<s.naturalHeight,smaller_width:s.clientWidth>s.naturalWidth,smaller_height:s.clientHeight>s.naturalHeight};if(n.bigger_width||n.bigger_height||n.smaller_width||n.smaller_height){var r=n.bigger_width||n.bigger_height?"bigger":"smaller",a="smush-image-"+(this.images[r].length+1);this.images[r].push({src:s,props:n,class:a}),s.classList.add("smush-detected-img"),s.classList.add(a)}}}}catch(t){e.e(t)}finally{e.f()}},refresh:function(){for(var t in this.images.bigger)this.images.bigger.hasOwnProperty(t)&&(this.images.bigger[t].src.classList.remove("smush-detected-img"),this.images.bigger[t].src.classList.remove("smush-image-"+ ++t));for(var e in this.images.smaller)this.images.smaller.hasOwnProperty(e)&&(this.images.smaller[e].src.classList.remove("smush-detected-img"),this.images.smaller[e].src.classList.remove("smush-image-"+ ++e));this.images={bigger:[],smaller:[]};for(var i=document.getElementsByClassName("smush-resize-box");i.length>0;)i[0].remove();this.process()}};window.addEventListener("DOMContentLoaded",(function(){return t.init()})),window.addEventListener("lazyloaded",(function(){return t.refresh()}))}()}});
//# sourceMappingURL=smush-rd.min.js.map