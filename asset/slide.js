$('.product__list').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<button class="chevron-prev"><i class="fa fa-arrow-left"></i></button>',
  nextArrow: '<button class="chevron-next"><i class="fa fa-arrow-right"></i></button>'
});
$('.banner').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  prevArrow: '<button class="chevron-prev"><i class="fa fa-arrow-left"></i></button>',
  nextArrow: '<button class="chevron-next"><i class="fa fa-arrow-right"></i></button>'
});
$('.pro-child-slide').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '<button class="chevron-prev"><i class="fa fa-arrow-left"></i></button>',
  nextArrow: '<button class="chevron-next"><i class="fa fa-arrow-right"></i></button>'
});