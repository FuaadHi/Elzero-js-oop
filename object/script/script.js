// console.log("hello i am %s string", "")

console.log(document)
console.dir(document)

let div = document.querySelector(".cl");
console.dir(div)
div.addEventListener("click", () => {
    div.style.color = "green"
    setTimeout(() => {
        div.style.fontSize = "55px"
    }, 2000)
})












// class User {
//     constructor(name, email) {
//         this.name = name
//         this.email = email
//     }
//     sayhello() {
//         return `hello ${this.name}`
//     }
// }
// let user1 = new User("fuaad")

// console.log(user1.sayhello())


// class Admin extends User {
//     constructor(name, email) {
//         super(name, email)
//     }
// }

// let admin1 = new Admin("FuaadAdmin")

// console.log(admin1.sayhello())










//console.log(Document.prototype)

// Window.prototype.$ = (e) => {
//     this.document.querySelector(e)
// }

// let cl = window.$(".cl");

// console.log(cl)












// console.log(Document.prototype)
// // console.log(Document.$o())
// // console.log(typeof Document)
// Document.prototype.$ = function (e) {
//     console.log(this)
//     this.querySelector(e)
// }
// let cl = document.$(".cl")
// console.log(cl)






// console.log(String.prototype);


// String.prototype.zFill = function (width) {
//     let theRisult = this

//     while(theRisult.length < width) {
//         theRisult = `0${theRisult}`
//     }
//     return theRisult.toString()
// }
// console.log("12".zFill(5))
// console.log("122".zFill(5))
// console.log("1244".zFill(5))
// console.log("12779".zFill(5))


// String.prototype.sayYouLoveMe =function () {
//     return `I love you ${this}`
// }
// console.log("Fuaad".sayYouLoveMe())






// /* constructors */

// function Phone(serial, color, price, showserial) {
//     this.serial = serial;
//     this.color = color;
//     this.price = price -100;
//     this.showserialf = function (){
//         if (showserial) {
//             return serial
//         }else{
//             return (`data is private`)
//         }
//     }
// }
// let phone1 = new Phone(121, "silverBlue", 500, true);
// let phone2 = new Phone(122, "Blue", 500, false);
// let phone3 = new Phone(123, "silver", 500, true);

// //console.log(phone1);










// let obj = {
//     prop1: "value1",
//     prop2: "value2",
//     prop3: "value3"
// }
// for (let prop in obj) {
//     console.log(`the ${prop} Is: ${obj[prop]}`)
// }




// let user = new Object({
//     name: "fuaad"
// })

// console.log(user);
// console.log(user.name);


// console.log(delete user.name);



// console.log(user);
// console.log(user.name);

// console.log("**".repeat(21))

// const a = "ao"
// console.log(delete a);
// console.log(a)

// console.log("**".repeat(21))

// const fobj = Object.freeze({
//     age: 22
// })
// console.log(fobj)
// console.log(fobj.age)
// console.log(delete fobj.age)
// console.log(fobj)
// console.log(fobj.age)

// console.log("**".repeat(21))

// const eobj = {};

// Object.defineProperty(eobj, "a", {value:1, configurable: false})

// console.log(delete eobj.a)

// console.log(eobj)
// console.log(eobj.a)


// let obj = new Object({
//     hasdiscount: 1,
//     method: function(){
//         return `You${this.hasdiscount? "" : " Don't"} have discount`
//     }
// })
// let obj2 = new Object({
//     prop2: 2,
//     method2: function(){
//         return `method${this.prop2}`
//     }
// })
// let target = new Object({
//     prop4: 4,
//     method4: function() {
//         return `method4`
//     }
// })


// Object.assign(target,obj, obj2, {prop3: "value3"})
// console.log(target)

// let myobj = Object.assign({},target, {prip8:8})
// console.log(myobj)






// let obj = new Object({
//     hasdiscount: true,
//     method: function(){
//         return `You${this.hasdiscount? "" : " Don't"} have discount`
//     }
// })

// console.log(obj.hasdiscount)
// console.log(obj.method())


// let objcopy = Object.create(obj)

// objcopy.hasdiscount = false
// console.log(objcopy.hasdiscount)
// console.log(objcopy.method())
