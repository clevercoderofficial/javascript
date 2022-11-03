// let ctitle = document.getElementsByClassName("card-title")[0]
// ctitle.style.color = "red"

// let ptitle = document.getElementById("firstcardtitle")
// ptitle.style.color = "blue"

// ctitle.style.background = "black"
// ctitle.style.margin = "40px"

let ctitle = document.querySelectorAll(".card-title") // css selector for class
ctitle[0].style.color = "red"
ctitle[1].style.color = "blue"
ctitle[2].style.color = "green"
console.log(ctitle)

// let ctitle = document.querySelectorAll("#card-title") // css selector for id
// console.log(ctitle)

document.querySelector(".my-btn").style.color = "#fff"
document.querySelector(".my-btn").style.background = "black"
document.querySelector(".my-btn").style.border = "0px" 

document.log(document.getElementsByTagName("a"))
document.log(document.body.getElementsByTagName("a"))
document.log(document.querySelector(".card").getElementsByTagName("a"))
document.log(document.getElementsByName("search"))