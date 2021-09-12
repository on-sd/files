var back = document.getElementById("start");
setTimeout(()=>{hidelogo()},1800);
// var runapp=document.getElementById("runapps"),applist=document.getElementById("applist");
// function showrunapp(){runapp.style.display="block"}function hiderunapp(){runapp.style.display="none"}
function showlogo(){back.style.display="block"}function hidelogo(){back.style.display="none"}
$(".ionspot").click(function(){ 
    showlogo();
    // showrunapp();
    $("#runapp").load("https://on-sd.github.io/files/onspot/index.html");
    uninit();
    setTimeout(()=>{hidelogo()},5000);
});
$(".iinstaller").click(function(){ 
    showlogo();
    // showrunapp();
    $("#runapp").load("https://on-sd.github.io/files/installer/index.html");
    uninit();
    setTimeout(()=>{hidelogo()},1500);
});
