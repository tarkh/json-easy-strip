# json-easy-strip
Load and strip JS-type comments from JSON file, easy and fast!

- Works with all JS-type comments
- Super easy and fast
- 999 bytes, 45 lines of code (with comments!)

## Install
```
$ npm install strip-json-comments
```

## Usage
#### sweet.json:
```JavaScript
{
	/*
	 * Sweet section
	 */
	"fruit": "Watermelon", // Yes, watermelons is sweet!
	"desert": /* Yummy! */ "Cheesecake",
	// And finally
	"drink": "Milkshake - /* strawberry */ or // chocolate!" // Mmm...
}
```

#### index.js:
```JavaScript
const requireJSON = require('json-easy-strip');
const obj = requireJSON('./sweet.json');
console.log(obj);

//  {
//    fruit: 'Watermelon',
//    desert: 'Cheesecake',
//    drink: 'Milkshake - /* strawberry */ or // chocolate!'
//  }

```

## API
function(path)
#### path
Type: `string`  
Path to JSON file.

#### return
Type: `object`  
The function returns a parsed object, as the standard require() function does.
