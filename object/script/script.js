/* conhstructors */

function Phone(serial, color, price, showserial) {
    this.serial = serial;
    this.color = color;
    this.price = price -100;
    this.showserialf = function (){
        if (showserial) {
            return serial
        }else{
            return (`data is private`)
        }
    }
}
let phone1 = new Phone(121, "silverBlue", 500, true);
let phone2 = new Phone(122, "Blue", 500, false);
let phone3 = new Phone(123, "silver", 500, true);

//console.log(phone1);










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
