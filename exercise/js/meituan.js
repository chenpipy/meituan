$(function () {
    var cats=$(".cates-item")
    cats.each(function (i) {
        $(this).mouseover(function () {
            $(this).attr("class","cates-item on")
        })
        $(this).mouseout(function () {
            $(this).attr("class","cates-item")
        })
    })
})