var bulb2=document.querySelector("#bulb")
var btn2=document.querySelector("button")
var flag=0

btn2.addEventListener("click",function(){
    if(flag==0){
    bulb2.style.BackgroundColor="Yellow"
    btn2.innerHTML="Off"
    flag=1
    }else{
        bulb2.style.BackGroundColor="Transparent"
        btn2.innerHTML="On"
        flag=0
    }
})