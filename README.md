Collection
==========

 Very small Collection JavaScript Class
#Include
``` html
<script src="lib/Collection.js"></script>
```

# Samples
## Sample 1
``` html
<script src="lib/Collection.js"></script>

<script>
	var c = new Mt.Collection();
	
	c.add('key1', 'val1');
	c.add('key2', 'val2');
	c.add('key3', 'val3');
	
	console.log(c.get('key1'));
	c.remove('key2');
	console.log(c.length);
	console.log(c.get('key3'));
	
	c.each(function(key, value, index, length){
		console.log(key, value, index, length);
	});
</script>
```