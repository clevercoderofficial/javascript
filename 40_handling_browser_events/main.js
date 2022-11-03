// btn.addEventListener('click',function(e){
//     alert("hello world1")
// })

// btn.addEventListener('click',function(e){
//     alert("hello world2")
// })

// there are two diffrent event listenets 

let x = function(e){
    console.log(e) // event object
    console.log(e.target)
    console.log(e.type, e.clintX, e.clintY)
    // alert("hello world 1")
}

let y = function(e){
    alert("hello world 2")
}

btn.addEventListener('click', x)
btn.addEventListener('click', y)

let a = Prompt("what is your favorite number?")

if (a == "2") {
    btn.removeEventListener('click', x)
    
}