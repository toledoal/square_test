(function(){
    var dat = document.querySelector("#date");

    setInterval(function(){
        dat.textContent = Date.now();
    },1000);
})()