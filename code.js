(function(){
    setInterval(function(){
        var s = new Date().toString();
        document.querySelector("#date").textContent = s;
    },1000);
})()