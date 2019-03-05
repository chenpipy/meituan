//扩展format方法
Date.prototype.format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S": this.getMilliseconds()
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
};

//扩展获取日期的方法
Date.prototype.getNewDate = function (count) {

    this.setDate(this.getDate() + count);
    var year = this.getFullYear();
    var month = this.getMonth() + 1;
    var day = this.getDate();
    if (month < 10) {
        month = "0" + month
    }
    if (day < 10) {
        day = "0" + day
    }
    return year + "-" + month + "-" + day;
};
//获取两个日期的查（length）
var getDateRangeLength = function(startTime, endTime, diffType) {
    //将xxxx-xx-xx的时间格式，转换为 xxxx/xx/xx的格式
    startTime = startTime.replace(/\-/g, "/");
    endTime = endTime.replace(/\-/g, "/");
    //将计算间隔类性字符转换为小写
    diffType = diffType.toLowerCase();
    var sTime =new Date(startTime); //开始时间
    var eTime =new Date(endTime); //结束时间
    //作为除数的数字
    var timeType =1;
    switch (diffType) {
        case"second":
            timeType =1000;
            break;
        case"minute":
            timeType =1000*60;
            break;
        case"hour":
            timeType =1000*3600;
            break;
        case"day":
            timeType =1000*3600*24;
            break;
        default:
            break;
    }
    return parseInt((eTime.getTime() - sTime.getTime()) / parseInt(timeType));
};

var getDateRangeArray = function(startDate,endDate,diffType){
    var length = getDateRangeLength(startDate,endDate,diffType);
    var dateArray = [];
    //dateArray.push(startDate);
    //console.log(length);
    for(var i=1;i<=length;i++){
        dateArray.push(new Date(endDate).getNewDate(-i));
    }
    return dateArray.sort();
};

//调用方法求数组

//假设今天是2018-09-07
var startDate = new Date().getNewDate(-6);  //2018-09-01
var endDate = new Date().getNewDate(0);     //2018-09-07

//['2018-09-01','2018-09-02','2018-09-03','2018-09-04','2018-09-05','2018-09-06'，'2018-09-07']
var dateArray = getDateRangeArray(startDate,endDate,'day');
var dateLength = getDateRangeLength(startDate,endDate,'day');       //时间差

//一般为求环比的时候用到
var lastStartDate = new Date(startDate).getNewDate(-dateLength)
