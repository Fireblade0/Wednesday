var moon=document.querySelector("#moon")
var flag=0
moon.addEventListener("click",function(){
  if(flag==0){
    document.documentElement.style.setProperty("--pri","#fff")
    document.documentElement.style.setProperty("--sec"," rgb(87, 84, 84)")
    moon.innerHTML=`<i class="ri-sun-fill"></i>`
    flag=1
  }else{
    document.documentElement.style.setProperty("--pri","#000")
    document.documentElement.style.setProperty("--sec","#fff")
    moon.innerHTML=`<i class="ri-moon-clear-fill"></i>`
    flag=0
  }
})