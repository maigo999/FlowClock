// 5~6 = 日の出
// 7～16 午前
// 16~18　夕暮れ
// 18~5 夜
window.onload = function() {
    Timer = setInterval('clock()',500);
    function clock(){
    document.getElementById("time").innerHTML = gettime();
    }
    var baz = document.getElementById('time');
    console.log(hour);
    // if(array.includes(hour)){

    // }else if(){

    // }else if(){

    // }


    console.log(baz);
    baz.onmouseover = function() {
        document.getElementById('style-a').disabled = true;
        document.getElementById('style-b').disabled = false;
        document.getElementById('style-c').disabled = false;
        document.getElementById('style-c').disabled = false;
    }
    baz.onmouseout = function() {
        document.getElementById('style-a').disabled = false;
        document.getElementById('style-b').disabled = true;
    }
}