$(function () {
  var c = 0;
  setInterval(function () {
    c++;
    c = c === 5 ? 0 : c
    /* $("#flash img").each(function (i) {
       $(this).fadeOut(50);
       $(".control li").eq(i).css("background-color","rgb(71, 71, 71)")
     })*/
    $("#flash img").eq(c).fadeIn(500).siblings("img").hide();
    $(".control li").eq(c).css("background-color", "#fff").siblings("li")
      .css("background-color", "rgb(71, 71, 71)")

  }, 3000)
})
