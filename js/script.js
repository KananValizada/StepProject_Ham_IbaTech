let design =document.getElementById("design-options")
design.addEventListener("click",changeText)
let triangle = document.createElement("div")
let li=document.querySelectorAll(".design-options>li")
console.log(li)
triangle.style.cssText=" position:absolute ; bottom:-9px;background-color width: 0; height: 0; border-style: solid; border-width: 10px 10px 0 10px;border-color: #18cfab transparent transparent transparent;"

function changeText(event){
     for(a of li){
      a.className=""
  }
  if(event.target.className!=="design-toogle"){
       event.target.className="design-toogle"
       event.target.append(triangle)
  }else{
    event.target.className=""
  }
 
    


}