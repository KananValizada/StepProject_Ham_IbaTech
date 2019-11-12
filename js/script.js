let design =document.getElementById("design-options")
let triangle = document.createElement("div")
let li=document.querySelectorAll(".design-options>li")
let designText = document.querySelectorAll(".design-text")
triangle.style.cssText=" position:absolute ; bottom:-9px;background-color width: 0; height: 0; border-style: solid; border-width: 10px 10px 0 10px;border-color: #18cfab transparent transparent transparent;"
 for(let i=0;i<li.length;i++){ 
   li[i].addEventListener("click",changeText)
   function changeText(){
     for(a of li){
       a.classList.remove("design-toogle")
     }
     for(b of designText){
       b.classList.add("hidden")
     }
     li[i].classList.toggle("design-toogle")
     li[i].append(triangle)
     designText[i].classList.remove("hidden")
   }
 }
 let loadMore =document.querySelector(".load-more")
 let web =document.querySelectorAll(".web")
 loadMore.addEventListener("click",addImages)

 function addImages(){
   web.forEach((x)=>{
     x.style.display="block"

   })
   loadMore.style.display="none"
 }
 