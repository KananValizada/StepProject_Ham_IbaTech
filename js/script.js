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
amazingImages.slice(0, x).show()
amazingWork.on("click", (event) => {
  if ($(event.target).attr("btn") == "btn") {
    $(".centered").show()
    x += 12
    setTimeout(() => {
      $(".centered").hide()
      amazingImages.slice(0, x).show()
    }, 2000)
    if (x == 36) {
      loadMore.hide()
    }
  } else if (event.target.tagName == "LI") {
    let dataKey = $(event.target).attr("datakey")
    if (x > 12 && !dataKey) {
      if (x !== 36) {
        loadMore.css("display", "flex")
      }
      return false
    }
    amazingImages.hide()
    loadMore.hide()
    $(".option-style").removeClass("option-style")
    $(event.target).addClass("option-style")
    x = 12
    if (dataKey) {
      $(`.${dataKey}`).show()
    } else {
      amazingImages.slice(0, x).show();
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