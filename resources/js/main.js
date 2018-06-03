$(document).ready(function() {
  $('.carousel').slick({
    arrows: false,
    autoplay: true,
    draggable: false,
    infinite: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    slidesToShow: 1,
    speed: 4000
  });
  $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $('.navbar').css({top:"-50px"});
    }
    else {
      $('.navbar').css({top:"0px"});
    }
  });
  $('.btn-primary').click.css("background-color", "#0431b4");
});
