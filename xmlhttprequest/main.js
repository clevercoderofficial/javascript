// callback function

let todo = (callback)=>{
    let request = new XMLHttpRequest
    // console.log(request)
 
    request.addEventListener('readystatechange',()=>{
        // console.log(request, request.readyState)
        if(request.readyState === 4 && request.status == 200){
            let data = JSON.parse(request.responseText)
            callback(undefined, data)
        }else if(request.readyState ===4){
            callback("Data could not fetch", undefined)
        }
    })

    // set up the request 
    request.open('Get', 'https://jsonplaceholder.typicode.com/todos')

    // send response 
    request.send()
}

todo((error, data)=>{
    if(error){
        console.log(error)
    }else{
        console.log(data)
    }
})