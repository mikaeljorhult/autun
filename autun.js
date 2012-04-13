/**
 * autun
 * minimalistic attribute manipulation.
 * 
 * @version 0.1.2
 * @author Mikael Jorhult
 * @license http://mikaeljorhult.mit-license.org MIT
 *
 * Project repository: https://github.com/mikaeljorhult/autun
 */
autun = {
	class_list: ('classList' in document.documentElement ? true : false),
	
	addClass: function(name, object) {
		if(object) { object = this.objectArray(object); };
		
		for(var i = 0, length = object.length; i < length; i++) {
			if(this.class_list) {
				object[i].classList.add(name);
			} else {
				object[i].className += ' ' + name;
			}
		}
		
		return object;
	},
	
	attr: function(attribute, value, object) {
		if(object) { object = this.objectArray(object); }
		
		if(value) {
			object[0].setAttribute(attribute, value);
		} else {
			return object[0].getAttribute(attribute);
		}
		
		return object;
	},
	
	hasClass: function(name, object) {
		if(object) { object = this.objectArray(object); }
		
		if(this.class_list) {
			return object[0].classList.contains(name);
		} else {
			return (this.attr('class', undefined, object).split(' ').indexOf(name) > -1 ? true : false);
		}
	},
	
	html: function(object) {
		if(object) { object = this.objectArray(object); };
		
		return text = object[0].innerHTML;
	},
	
	removeClass: function(name, object) {
		if(object) { object = this.objectArray(object); };
		
		for(var i = 0, length = object.length; i < length; i++) {
			if(this.class_list) {
				object[i].classList.remove(name);
			} else {
				object[i].className = object[i].className.replace(new RegExp('(\\s|^)' + name + '(\\s|$)', 'i'), '');
			}
		}
		
		return object;
	},
	
	toggleClass: function(name, object) {
		if(object) { object = this.objectArray(object); };
		
		if(this.class_list) {
			for(var i = 0, length = object.length; i < length; i++) {
				object[i].classList.toggle(name);
			}
		} else {
			return (this.hasClass(name, object) ? this.removeClass(name, object) : this.addClass(name, object));
		}
		
		return object;
	},
	
	val: function(object) {
		if(object) { object = this.objectArray(object); };
		
		return text = object[0].innerText || object[0].textContent;
	},
	
	objectArray: function(object) {
		console.log(object.constructor.toString());
		
		if(object.constructor.toString().indexOf('Array') > -1) {
			return object;
		} else if(object.constructor.toString().match(/NodeList|HTMLCollection/)) {
			return Array.prototype.slice.call(object);
		} else {
			return new Array(object);
		}
	}
};