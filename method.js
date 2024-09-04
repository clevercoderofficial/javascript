// a javascript method is a function defined within an object
let person = {
    agecaculate: function(birthdate){
        let age = 2024 - birthdate
        return age;
    }
}

console.log(`age is ${person.agecaculate(2002)}`)