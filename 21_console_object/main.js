console.log(console)

// assert
// : 
// ƒ assert()
// clear
// : 
// ƒ clear()
// context
// : 
// ƒ context()
// count
// : 
// ƒ count()
// countReset
// : 
// ƒ countReset()
// debug
// : 
// ƒ debug()
// dir
// : 
// ƒ dir()
// dirxml
// : 
// ƒ dirxml()
// error
// : 
// ƒ error()
// group
// : 
// ƒ group()
// groupCollapsed
// : 
// ƒ groupCollapsed()
// groupEnd
// : 
// ƒ groupEnd()
// info
// : 
// ƒ info()
// log
// : 
// ƒ log()
// memory
// : 
// MemoryInfo {totalJSHeapSize: 10000000, usedJSHeapSize: 10000000, jsHeapSizeLimit: 2190000000}
// profile
// : 
// ƒ profile()
// profileEnd
// : 
// ƒ profileEnd()
// table
// : 
// ƒ table()
// time
// : 
// ƒ time()
// timeEnd
// : 
// ƒ timeEnd()
// timeLog
// : 
// ƒ timeLog()
// timeStamp
// : 
// ƒ timeStamp()
// trace
// : 
// ƒ trace()
// warn
// : 
// ƒ warn()
// Symbol(Symbol.toStringTag)
// : 
// "Object"
// [[Prototype]]
// : 
// Object

console.error("Hey! this is an error") // used for error
console.clear() // cleans the console
console.assert(5>4) // used to assert a statement
obj = {a: 1,b: 4,c: 6}
console.table(obj) // display a tabular data
console.warn("Hay! please dont drink soda") // used for warning
console.info("Hay! this is an important info") // used for special information
console.time("p1") // to track how long an operation takes.
console.timeEnd("p1") // stops a timer that was previously started by calling console

// console.time && console.timeEnd
console.time("forloop")
for (let i = 0; i < 5; i++) {
    console.log([i])
}
console.timeEnd("forloop")