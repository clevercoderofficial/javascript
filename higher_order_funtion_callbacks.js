// passing functions as an arguments(Higher Order Function Example)

let uppercase = function(str){
    return str.toUpperCase();
}

let lowercase = function(str){
    return str.toLowerCase();
}

let transform = function(str, fun){
    return fun(str);
}

console.log(transform("hello", uppercase))