let cnt=document.querySelector(".cnt");
let b1=document.querySelector(".btn1");
let b2=document.querySelector(".btn2");

let count=0;

function inc(){
    count++;
    // cnt.textContent
    cnt.textContent=count;
}
function dec(){
    count--;
     cnt.textContent=count;
}

b1.addEventListener("click", inc);
b2.addEventListener("click", dec);