# json-easy-strip
> Load and strip JS-type comments from JSON file, easy and fast!

- Works with all JS-type comments
- File caching functionality
- Optional access to strip method only
- Super easy and fast
- 999 bytes, 44 lines of code (with comments!)

## Install
```
$ npm install json-easy-strip
```

## Usage
#### sweet.json:
```js
{
	/*
	 * Sweet section
	 */
	"fruit": "Watermelon", // Yes, watermelons is sweet!
	"dessert": /* Yummy! */ "Cheesecake",
	// And finally
	"drink": "Milkshake - /* strawberry */ or // chocolate!" // Mmm...
}
```

#### index.js:
```js
const requireJSON = require('json-easy-strip');
const obj = requireJSON('./sweet.json');
console.log(obj);

//  {
//    fruit: 'Watermelon',
//    dessert: 'Cheesecake',
//    drink: 'Milkshake - /* strawberry */ or // chocolate!'
//  }

```
#### Caching
Enabled by default, but you always can flush it
```js
const path = require('path');
const requireJSON = require('json-easy-strip');

// Loads, strips and parse sweet.json, puts it
// in the cache, and then returns a JSON object
const obj = requireJSON('./sweet.json');

// Returns a JSON object from cache
const obj2 = requireJSON('./sweet.json');

// Flushes the cache as in the standard require() function
delete requireJSON.cache[path.resolve('./sweet.json')];

// Again loads, strips and parse sweet.json and
// puts it in the cache
const obj3 = requireJSON('./sweet.json');

```
#### Access to strip method only
If you don't need to load file, only strip method is avaliable
```js
const requireJSON = require('json-easy-strip');

const jsonString = `{
	/*
	 * Sweet section
	 */
	"fruit": "Watermelon", // Yes, watermelons is sweet!
	"dessert": /* Yummy! */ "Cheesecake",
	// And finally
	"drink": "Milkshake - /* strawberry */ or // chocolate!" // Mmm...
}`;

const obj = requireJSON.strip(jsonString);
console.log(obj);

//  {
//    fruit: 'Watermelon',
//    dessert: 'Cheesecake',
//    drink: 'Milkshake - /* strawberry */ or // chocolate!'
//  }
```

## API
### requireJSON(path)
#### path
Type: `string`  
Path to JSON file.

#### returns
Type: `object`  
The function returns a parsed JSON object, as the standard require() function does.

### requireJSON.strip(data)
#### data
Type: `string`  
Stringified JSON data, loaded or recieved from elsewhere.

#### returns
Type: `object`  
The function returns a parsed JSON object.

### requireJSON.cache
Type: `object`
Contains cached data as key (file path) => value (JSON object).
