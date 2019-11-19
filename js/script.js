
// ***************** OUR CERVICES TAB SECTION **********************  //

let designLi = $(".design-options>li")
let designText = $(".design-text")
for (let i = 0; i < designLi.length; i++) {
  designLi.eq(i).attr("dataKey", i)
  designText.eq(i).attr("dataValue", i)
}

designLi.click(function () {
  designLi.removeClass("design-toggle")
  $(this).addClass('design-toggle');
  let match1 = $('.design-toggle').attr('dataKey');
  designText.hide()
  $(`.design-text[dataValue="${match1}"]`).css("display", "flex");
})

// ***************** OUR AMAZING WORK **********************  //

let loadMore = $(".load-more")
let graphicDesign = $(".graphic-design")
let amazingImages = $(".amazing-work-images-item")
loadMore.on("click", addImages)
let n = 0
function addImages() {
  n++
  for (let i = 0; i < 24; i++) {
    amazingImages.eq(i).show()
  }
  if (n == 2) {
    amazingImages.show()
    loadMore.hide()
  }
}
let amazingOptionsLi = $(".amazing-work-options>li")
amazingOptionsLi.on("click", sortImages)
function sortImages(event) {
  amazingImages.hide()
  amazingOptionsLi.removeClass("option-style")
  $(this).addClass("option-style")
  loadMore.hide()
  n = 0
  let dataKey = $(this).attr("dataKey")
  if (dataKey != undefined) {
    $(`.${dataKey}`).show()
  } else {
    graphicDesign.show();
    loadMore.css("display", "flex")
  }
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
  arrows: true,
  focusOnSelect: true,
});

$(".slick-slide").css("outline", "none")
$(".slick-prev").on("click", arrowActive)
$(".slick-next").on("click", arrowActive)
$(".slick-slide").on("click", arrowActive)
$("body").on("mousemove", arrowActive)
function arrowActive(){
  $(".slick-slide img").removeClass("slider-img-active")
  $(".slick-center img").addClass("slider-img-active")
}

