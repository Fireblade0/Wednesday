// Conditionals
if(5>3){
    console.log("hello")
}

// prompt data ko hamesha String format mein print krta hai
// JavaScript mein user se input kaise lein
/*var eng=prompt("Enter your marks in English")
var hin=prompt("Enter your number in hindi")
var math=prompt("Enter your number in math")*/
/*var eng=Number(prompt("Enter your marks in English"))
var hin=Number(prompt("Enter your number in hindi"))
var math=Number(prompt("Enter your number in math"))
var total=eng+hin+math
console.log(total)
if(total>240){
    console.log("You're passed")
}*/

//var a=10
//var b="10"
/*if(a==b){
    console.log("JS gone mad!")
}*/
// jS mein == ka matlab ki yeh sirf aur value dekhega naaki data type jaise yahan pr "10" string mein hain pr yeh dhyaan nhi dega
//"==="  triple equal ka matlab yeh value ke saath saath Datatypes bhi dekhega
/*if(a===b){
    console.log("Ab JS pagal nhi banega") 
}


var radius=prompt("Enter the radius of circle")  
var area=3.14*radius*radius
console.log(area)*/


/*var name=String(prompt("Enter your name--"))
var age=Number(prompt("Enter your age--"))
 if(age>18){
    console.log("You are Eligible for voting")
 }else{
    console.log("You can't vote")
 }*/

 var name1=prompt("enter your Name--")
 var percnt=Number(prompt("Enter your 12th class Percentage"))

 if(percnt>=90){
    console.log(name1,"You got Scholarship")
 }else{
    var miss=90-percnt
    console.log(name1,"You missed scholarship by",miss,"number")
 }