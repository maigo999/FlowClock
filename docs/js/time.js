
    
    Timer = setInterval('clock()',500);
    function clock(){
        timedate = new Date();
        hour = ('00' + timedate.getHours()).slice( -2 );
        minute = ('00' + timedate.getMinutes()).slice( -2 );
        second = ('00' + timedate.getSeconds()).slice( -2 );
        timerView = hour + ":" + minute + ":" + second;
        document.getElementById("time").innerHTML = timerView;
        return hour;
        
    }
        
        var roopclock =  function (){
            console.log(clock());
            if(clock() >= 5 && clock() <= 6){
                console.log("日の出");
                var linkstyle = document.getElementById('mystyle');
                linkstyle.href = "css/stylA.css";
            }else if(clock() >= 7 && clock() <= 15){
                console.log("午前");
                var linkstyle = document.getElementById('mystyle');
                linkstyle.href = "css/stylB.css";
            }else if(clock() >= 16 && clock() <= 18){
                console.log("夕暮れ");
                var linkstyle = document.getElementById('mystyle');
                linkstyle.href = "css/stylC.css";
            }else{
                console.log("夜");
                var linkstyle = document.getElementById('mystyle');
                linkstyle.href = "css/stylD.css";
            }
        }
        setInterval(roopclock, 1000);