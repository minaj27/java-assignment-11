function handleClr(color,msg){
document.getElementById("show").style.backgroundColor=color;
document.getElementById("show2").innerHTML=msg;
}
function handleBorder(width,clr){
    document.getElementById("show").style.borderWidth=width;
    document.getElementById("show").style.borderColor=clr;
}