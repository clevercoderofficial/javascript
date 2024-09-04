let person = {
    firstname : "Rohit",
    lastname: "bhure",
    age: "22",

    getsummer: function(){
        return `name is ${this.firstname} ${this.lastname} age is ${this.age}`
    }
}

console.log(person.getsummer())