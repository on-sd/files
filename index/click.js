var back = document.getElementById("start");
setTimeout(()=>{hidelogo()},1800);
function showlogo(){back.style.display="block"}function hidelogo(){back.style.display="none"}
$(".ionspot").click(function(){ 
    $("#runapp").load("https://on-sd.github.io/files/onspot/index.html");
    uninit();
});
$(".iinstaller").click(function(){ 
    $("#runapp").load("https://on-sd.github.io/files/installer/index.html");
    uninit();
});
