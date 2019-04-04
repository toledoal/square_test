(function(){
    var dat = document.querySelector("#date");

    setInterval(function(){
        var s = new Date().toString();
        dat.textContent = s;
    },1000);
})()