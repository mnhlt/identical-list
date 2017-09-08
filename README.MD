## Installation
* `npm install identical-list`

## Usage
### How to use List class
```javascript
var List = require("identical-list");

var array = [{id: 1, msg: "Hi"}, {id: 2, msg: "Hello"}, {id: 10, msg: "Im Manh"}];
let list = new List(array);
console.log(list.asArray()); // [{id: 1, msg: "Hi"}, {id: 2, msg: "Hello"}]
console.log(list.get(10)); // {id: 10, msg: "Im Manh"}
```
### Add new element to list
```javascript
list.add({id: 5, msg: "I love javascript"});
console.log(list.asArray());
// [{id: 1, msg: "Hi"}, {id: 2, msg: "Hello"}, {id: 10, msg: "Im Manh"}, {id: 5, msg: "I love javascript"}]
```

### Update an element of list
```javascript
let updatedObject = {id: 1, msg: "How are you?"}

list.add(updatedObject);
console.log(list.asArray());
// [{id: 1, msg: "How are you?"}, {id: 2, msg: "Hello"}, {id: 10, msg: "Im Manh"}, {id: 5, msg: "I love javascript"}]
```

### Remove an element of list
```javascript
list.deleteId(10);
console.log(list.asArray()); //[{id: 1, msg: "Hi"}, {id: 2, msg: "Hello"}]
```
