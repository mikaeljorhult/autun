autun={class_list:null,addClass:function(b,a){if(a){a=this.objectArray(a)}for(var c=0,d=a.length;c<d;c++){if(this.class_list){a[c].classList.add(b)}else{a[c].className+=" "+b}}return a},attr:function(d,e,a){if(a){a=this.objectArray(a)}if(e){for(var b=0,c=a.length;b<c;b++){a[b].setAttribute(d,e)}}else{return(!!a[0][d]?a[0][d]:a[0].getAttribute(d))}return a},hasClass:function(b,a){if(a){a=this.objectArray(a)}if(this.class_list){return a[0].classList.contains(b)}else{return(this.attr("class",undefined,a).split(" ").indexOf(b)>-1?true:false)}},html:function(a){if(a){a=this.objectArray(a)}return text=a[0].innerHTML},removeClass:function(b,a){if(a){a=this.objectArray(a)}var d=new RegExp("(\\s|^)"+b+"(\\s|$)","i");for(var c=0,e=a.length;c<e;c++){if(this.class_list){a[c].classList.remove(b)}else{a[c].className=a[c].className.replace(d,"")}}return a},toggleClass:function(b,a){if(a){a=this.objectArray(a)}if(this.class_list){for(var c=0,d=a.length;c<d;c++){a[c].classList.toggle(b)}}else{return(this.hasClass(b,a)?this.removeClass(b,a):this.addClass(b,a))}return a},val:function(a){if(a){a=this.objectArray(a)}return text=a[0].innerText||a[0].textContent},init:function(){this.class_list=(!!document.documentElement.classList?true:false);return this},objectArray:function(a){if(a.constructor.toString().indexOf("Array")>-1){return a}else{if(a.constructor.toString().match(/NodeList|HTMLCollection/)){return Array.prototype.slice.call(a)}else{return new Array(a)}}}}.init();