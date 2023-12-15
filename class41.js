
//Object inside an Array Are called "Json"
var arr=[
    {name:"Neeraj Yadav",age:23,country: "India"},
    {name:"Mikhail Garbachov",age:21,country:"Russia"}
]
console.log(arr)
console.log(arr[0].name)

var user="Sheriyans Coding school"
var arr1= user.split(" ")
console.log(arr1)
console.log(arr1.join(""))
console.log(arr1.join("|"))

var neu =(arr1.join("|"))
console.log(neu)

// Array jitna bada hoga utna hi baar chalega ye loop
var arr2=[10,6,8]
arr2.forEach(function(){
    console.log("Hey")
})

// ForEach khali Array ke liye kaam karega
// Alag Print karega
var arr3=["Mohan","Rahul","Ashish","Ashutosh"]
arr3.forEach(function(elem){
    console.log(elem)
})

//console.log(a)
//var a=10

//Java Script is wale code ko aise padhega
var a
console.log(a) // Is Concept ko javascript mein "Hoisting" kaha jaata hai
a=10 // Output "undefined" ayega kyonki "a" ko sirf declare kiya hai a ko value nhi assign kiya hai console.log( se pehle)

abc() // Functio ko pehle hi call kr liya
function abc(){
    console.log("Hey")  /// Tab bhi yeh run karega 
    //Output "Hey"
}

//javaScript ke andar hum Functio iss tarike se bhi bana skte hain
var adc=function(){
    consolr,log("Hello")
}
abc()

// Neeche jo function hamne banaya hai Usey hum "Arrow" ya "Phat" function bolte hain
var fight=()=>{
    console.log("Hi")
}
fight()

var fight1=(b)=>{
    console.log(b)
}
fight1(18)