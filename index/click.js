setTimeout(() => {
    document.getElementById("start").style.display = "none";
}, 1600);
var runapp=document.getElementById("runapp"),applist=document.getElementById("applist");
// function showrunapp(){runapp.style.display="block"}function hiderunapp(){runapp.style.display="none"}
function showapplist(){applist.style.display="block"}function hideapplist(){applist.style.display="none"}
$(".ionspot").click(function(){ 
    // hideapplist();
  //  showrunapp();
    $("#runapp").load("https://on-sd.github.io/files/onspot/index.html");
    uninit();
});
$(".iinstaller").click(function(){ 
   // hideapplist();
  //  showrunapp();
    $("#runapp").load("https://on-sd.github.io/files/installer/index.html");
    uninit();
});
