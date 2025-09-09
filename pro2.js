let arr= ["red", "green", "pink", "purple", "blue", "yellow", "brown", "orange", "teal", "olive"];
let btn=document.querySelector("button");
let bdy=document.querySelector("body");

function fun(){
    let num = Math.floor(Math.random()*10);
    num%=10;
    bdy.style.backgroundColor=arr[num];
}

btn.addEventListener("click", fun);
