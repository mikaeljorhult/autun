/**
 * autun
 * minimalistic attribute manipulation.
 * 
 * @version 0.1.5
 * @author Mikael Jorhult
 * @license http://mikaeljorhult.mit-license.org MIT
 *
 * Project repository: https://github.com/mikaeljorhult/autun
 */
autun = {
	class_list: null,
	
	addClass: function(name, object) {
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
		if(value) {
			for(var i = 0, length = object.length; i < length; i++) {
				object[i].setAttribute(attribute, value);
			}
		} else {
			return (!!object[0][attribute] ? object[0][attribute] : object[0].getAttribute(attribute));
		}
		
		return object;
	},
	
	hasClass: function(name, object) {
		if(this.class_list) {
			return object[0].classList.contains(name);
		} else {
			return (this.attr('class', undefined, object).split(' ').indexOf(name) > -1 ? true : false);
		}
	},
	
	html: function(object) {
		return object[0].innerHTML;
	},
	
	removeClass: function(name, object) {
		var regexp_class = new RegExp('(\\s|^)' + name + '(\\s|$)', 'i');
		
		for(var i = 0, length = object.length; i < length; i++) {
			if(this.class_list) {
				object[i].classList.remove(name);
			} else {
				object[i].className = object[i].className.replace(regexp_class, '');
			}
		}
		
		return object;
	},
	
	toggleClass: function(name, object) {
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
		return object[0].innerText || object[0].textContent;
	},
	
	init: function() {
		// Feature detection
		this.class_list = (!!document.documentElement.classList ? true : false);
		
		// Return object
		return this;
	}
}.init();