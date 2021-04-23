
var Counter =1;
setInterval(function(){
    document.getElementById("radio" + Counter).checked =true;
    // var Manual = document.querySelector(".manual-btn" + Counter)
    // Manual.hover.style.backgroundColor="red";
    Counter++;
    if(Counter > 4){
        Counter = 1;
    }
},3000);


// var count = 1;
//    setInterval(function(){
//     var Manual = $(".manual-btn")
//     Manual.css("background-color", "yellow");
//     count++;
//     if(count > 4){
//         count = 1;
//     }
//    },3000)