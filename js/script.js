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
 let wordpress =document.querySelectorAll(".wordpress")
 let landingPage =document.querySelectorAll(".landing-page")
 let graphicDesign = document.querySelectorAll(".graphic-design")
 loadMore.addEventListener("click",addImages)
let n=0
 function addImages(){
   n++
   console.log(n)
   web.forEach((x)=>{
     x.style.display="block"
   })
   for(let i=0;i<5;i++){
     wordpress[i].style.display="block"
   }
   if(n==2){
     wordpress.forEach(x=>x.style.display="block")
     landingPage.forEach(x=>x.style.display="block")
     loadMore.style.display ="none"
   }
 }
 let amazingOptions = document.querySelector(".amazing-work-options")
 let amazingOptionsLi =document.querySelectorAll(".amazing-work-options>li")
 amazingOptionsLi.forEach(x=>x.addEventListener("click",sortImages))
 function sortImages(event){
   graphicDesign.forEach(x=>x.style.display="none")
  landingPage.forEach(x=>x.style.display="none")
  web.forEach(x=>x.style.display="none")
  wordpress.forEach(x=>x.style.display="none")
  amazingOptionsLi.forEach(x=>x.classList.remove("option-style"))
  event.target.classList.add("option-style")
  loadMore.style.display ="none"
  n=0
if(event.target.innerText=="Graphic Design"){
  graphicDesign.forEach(x=>x.style.display="block")
}else if(event.target.innerText=="Web Design"){
  web.forEach(x=>x.style.display="block")
}else if(event.target.innerText=="Landing Pages"){
  landingPage.forEach(x=>x.style.display="block")
}else if(event.target.innerText=="Wordpress"){
  wordpress.forEach(x=>x.style.display="block")
}else {
  graphicDesign.forEach(x=>x.style.display="block")
  loadMore.style.display ="flex"
}
 }
 
 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  centerMode: true,
  arrows:true,
  focusOnSelect: true,

});

let width =document.querySelectorAll(".slick-slide")
width.forEach((x)=>{
  x.style.cssText="outline: none;"
})
let sliderImageActive =document.querySelectorAll(".slider-img")
sliderImageActive.forEach((x)=>{
  x.addEventListener("click",makeActive)
  function makeActive(){
    sliderImageActive.forEach(x=>x.classList.remove("slider-img-active"))
    x.classList.add("slider-img-active")

  }
})


let prevButton =document.querySelector(".slick-prev")
let nextButton =document.querySelector(".slick-next")
prevButton.addEventListener("click",arrowActive)
nextButton.addEventListener("click",arrowActive)
function arrowActive(){
    let active=document.querySelector(".slick-center")
    let passive=document.querySelector(".slider-img-active")
    if(passive===null){
      active.classList.add("slider-img-active")
      active.classList.add("slick-current")
      active.childNodes[1].childNodes[1].classList.add("slider-img-active")
    }else{
       passive.classList.remove("slider-img-active")
       passive.childNodes[1].childNodes[1].classList.remove("slider-img-active")
       active.classList.add("slider-img-active")
       active.childNodes[1].childNodes[1].classList.add("slider-img-active")
    }
}