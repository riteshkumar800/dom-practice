const body= document.querySelector("body");



body.addEventListener("mousemove", (event)=>{
    // console.log(event.offsetX, event.offsetY);
    // console.log(event.offsetY);
    const xpos=event.offsetX;
    const ypos=event.offsetY;
    const div1=document.createElement("div");
    div1.style.left=xpos + "px";
    div1.style.top=ypos + "px";
    const size=Math.random()*100;
    div1.style.width=size + "px";
    div1.style.height=size + "px";

    body.appendChild(div1);
    setTimeout(()=>{
        div1.remove();
    }, 3000);


});