$(function () {
  var c = 0;
  var timer=setInterval(run,2000);
  //最好这样写，用var申明的话，可能还没有初始化
  function  run() {
    console.log(1);
    c++;
    c = c === 5 ? 0 : c;
    /* $("#flash img").each(function (i) {
       $(this).fadeOut(50);
       $(".control li").eq(i).css("background-color","rgb(71, 71, 71)")
     })*/
    /*设置当前img淡入，并且设置其他img淡出*/
    $("#flash img").eq(c).fadeIn(500).siblings("img").hide();
    $(".control li").eq(c).css("background-color", "#fff").siblings("li")
        .css("background-color", "rgb(71, 71, 71)")
  }
  //设置div的hover事件
  $("#flash").eq(c).hover(function () {
    //清楚定时器，取消轮播
    clearInterval(timer);
  },function () {
   timer=setInterval(run,2000);
  })

  $("#flash li").on("mouseenter",function () {
    c=$(this).index();
    $("#flash img").eq(c).fadeIn(500).siblings("img").hide();
    $(".control li").eq(c).css("background-color", "#fff").siblings("li")
        .css("background-color", "rgb(71, 71, 71)")

  })

});
