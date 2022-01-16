const color_red=document.getElementById("c.red");
const color_yellow=document.getElementById("c.yellow");
const color_green=document.getElementById("c.green");
const color_white=document.getElementById("c.white");
const color_purple=document.getElementById("c.purple");
const container=document.getElementById("container");

color_red.onclick=function(){
    container.style.backgroundColor="#FF0000";
}
color_yellow.onclick=function(){
    container.style.backgroundColor="#FFD700";
}
color_green.onclick=function(){
    container.style.backgroundColor="#32CD32";
}
color_white.onclick=function(){
    container.style.backgroundColor="#F0FFFF";
}
color_purple.onclick=function(){
    container.style.backgroundColor="#800080";
}
