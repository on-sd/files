setTimeout(() => {
    document.getElementById("start").style.display = "";
}, 4000);
var runapp=document.getElementById("runapps"),applist=document.getElementById("applist");
function showrunapp(){runapp.style.display="block"}function hiderunapp(){runapp.style.display="none"}function showapplist(){applist.style.display="block"}function hideapplist(){applist.style.display="none"}
$(".ionspot").click(function(){ 
    hideapplist();
    showrunapp();
    $("#body").load("https://on-sd.github.io/files/onspot/index.html");
});
$(".iinstaller").click(function(){ 
    hideapplist();
    showrunapp();
    $("#body").load("https://on-sd.github.io/files/installer/index.html");
});