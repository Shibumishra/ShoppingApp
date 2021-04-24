
var Counter =1;
setInterval(function(){
    document.getElementById("radio" + Counter).checked = true;
    Counter++;
    if(Counter > 4){
        Counter = 1;
    }
},3000);
