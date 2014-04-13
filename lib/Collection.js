"use strict;"

var Mt = Mt || {};

Mt.Collection = function(){
	var me = this;
	
	me.items = [];
	me.keys = [];
	me.map = {};
	me.indexMap = {};
	me.length = 0;
};

Mt.Collection.prototype = {
	add: function(key, value){
		var me = this;
		
		me.items.push(value);
		me.keys.push(key);
		me.map[key] = value;
		me.indexMap[key] = me.length;
		me.length++;
	},
	remove: function(key){
		var me = this,
			index = me.indexMap[key];
		
		me.items.splice(index, 1);
		me.keys.splice(index, 1);
		delete me.indexMap[index];
		delete me.map[key];
		me.length--;
	},
	removeAll: function(){
		var me = this;
		
		me.items = [];
		me.keys = [];
		me.indexMap = {};
		me.map = {};
		me.length = 0;
	},
	get: function(key){
		var me = this;
		
		return me.map[key];
	}
};