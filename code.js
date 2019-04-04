(function(){
    var dat = document.querySelector("#date");

    setInterval(function(){
        dat.textContent = new Date();
    },1000);
})()