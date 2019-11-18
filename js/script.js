
// ***************** OUR CERVICES TAB SECTION **********************  //
let design =$("#design-options")
let designLi=$(".design-options>li")
let designText = $(".design-text")
for(let i=0;i<designLi.length;i++){
  designLi.eq(i).attr("dataKey",i)
  designText.eq(i).attr("dataValue",i)
}
designLi.click(function(){
  designLi.removeClass("design-toggle")
  $(this).addClass('design-toggle');
  let match1 = $('.design-toggle').attr('dataKey');
designText.hide()
  $(`.design-text[dataValue="${match1}"]`).css("display","flex");
})

// ***************** OUR AMAZING WORK **********************  //
 let loadMore=$(".load-more")
 let web =$(".web")
 let wordpress =$(".wordpress")
 let landingPage =$(".landing-page")
 let graphicDesign = $(".graphic-design")
 loadMore.on("click",addImages)
let n=0
 function addImages(){
   n++
   for(let i=0;i<5;i++){
     wordpress.eq(i).show()
     web.show()
   }
   if(n==2){
     wordpress.show()
     landingPage.show()
     loadMore.hide()
   }
 }
 let amazingImages = $(".amazing-work-images-item")
 let amazingOptionsLi =$(".amazing-work-options>li")
 amazingOptionsLi.on("click",sortImages)
 function sortImages(){
   amazingImages.hide()
  amazingOptionsLi.removeClass("option-style")
  $(this).addClass("option-style")
  loadMore.hide()
  n=0
  let dataKey=$(this).attr("dataKey")
 dataKey!=undefined ? $(`.${dataKey}`).show() : graphicDesign.show() ;loadMore.css("display","flex")
 }
 
//   ********************  Slick Slide  *************************   //

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

let slickSlide =$(".slider-nav .slick-slide")
let slickSlideImages= $(".slider-nav .slick-slide img")
let prevButton =$(".slick-prev")
let nextButton =$(".slick-next")
prevButton.on("click",arrowActive)
nextButton.on("click",arrowActive)
slickSlide.css("outline","none")
function arrowActive(){
slickSlideImages.removeClass("slider-img-active")
for(let i=0 ;i<slickSlide.length;i++){
if(slickSlide[i].classList.contains("slick-center")){
  slickSlideImages[i].classList.add("slider-img-active")}}
}
slickSlideImages.on("click",imageImprove)
  function imageImprove(){
    slickSlideImages.removeClass("slider-img-active")
   $(this).addClass("slider-img-active")
  }