;(function(window) {

	/*var $$ = ajQuery = function(selector) {
	    return new ajQuery.fn.init(selector);
	}

	ajQuery.fn = ajQuery.prototype = {
	    name: 'aaron',
		init: function(selector) {
			this.selector = selector;
			return this;
		},
		constructor: ajQuery
	}


	ajQuery.fn.init.prototype = ajQuery.fn


	ajQuery.extend = ajQuery.fn.extend = function() {
		var options, src, copy,
			target = arguments[0] || {},
			i = 1,
			length = arguments.length;

		//只有一个参数，就是对jQuery自身的扩展处理
		//extend,fn.extend
		if (i === length) {
			target = this; //调用的上下文对象jQuery/或者实例
			i--;
		}
		for (; i < length; i++) {
			//从i开始取参数,不为空开始遍历
			if ((options = arguments[i]) != null) {
				for (name in options) {
					copy = options[name];
					//覆盖拷贝
					target[name] = copy;
				}
			}
		}
		return target;
	}

	ajQuery.fn.extend({
		setName: function(myName) {
			this.myName = myName;
			return this;
		},
		getName: function() {
			console.log(123);
			return this;
		}
	})

	window.$$ = $$;*/

	/*var aQuery = function(selector, context) {
       return new aQuery.prototype.init();
	}
	aQuery.prototype = {
	    init: function() {
	        this.age = 18
	        return this;
	    },
	    name: function() {},
	    age: 20
	}*/

	var aQuery = function(selector, context) {
       return aQuery.prototype.init(selector);
	};
	aQuery.prototype = {
	    init:function(selector){
	    	this.age = 18;
	    	this.selector = selector;
	        return this;
	    },
	    name:function(){},
	    age:function(){}
	}


	/*window.$$ =*/ window.aQuery = aQuery;



})(typeof window !== "undefined" ? window : this);