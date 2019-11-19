
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
let amazingImages = $(".amazing-work-images-item")
let amazingWork = $(".amazing-work")
let x = 12
$('.amazing-work-images-item:lt(' + x + ')').show()
amazingWork.on("click", (event) => {
  if ($(event.target).attr("btn") == "btn") {
    x += 12
    $('.amazing-work-images-item:lt(' + x + ')').show()
    if (x == 36) { loadMore.hide() }
  } else if (event.target.tagName == "LI") {
    amazingImages.hide()
    $(".option-style").removeClass("option-style")
    $(event.target).addClass("option-style")
    loadMore.hide()
    x = 12
    let dataKey = $(event.target).attr("datakey")
    if (dataKey != undefined) {
      $(`.${dataKey}`).show()
    } else {
      $('.amazing-work-images-item:lt(' + x + ')').show()
      loadMore.css("display", "flex")
    }
  }
})

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
  focusOnSelect: true,
});

$(".slick-slide").css("outline", "none")
$(".people-say").on("click", arrowActive)
$("body").on("mousemove", arrowActive)
function arrowActive() {
  $(".slick-slide img").removeClass("slider-img-active")
  $(".slick-center img").addClass("slider-img-active")
}

