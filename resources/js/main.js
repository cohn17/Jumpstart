$(document).ready(function(){
  $(button).hover(function(){
    $(this).toggleClass('hover');
  });
  $(button).active(function(){
    $(this).css("box-shadow","0 0 0 rgba(0, 0, 0, 0.5)");
  });
});
