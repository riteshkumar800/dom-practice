const cont = document.querySelector(".container");
const p = document.createElement("p");
// p.textContent = "I am Youtuber";
// cont.appendChild(p);


const arr=["Youtuber", "Web Devloper", "Instructor", "FreeLancer"];

let i=0;
let j=0;
UpdateText();
function UpdateText(){
    if(arr[i]=="Instructor"){
         p.textContent=`I am an ${arr[i].slice(0,j)}`;
    cont.appendChild(p);

    }
    else{
         p.textContent=`I am a ${arr[i].slice(0,j)}`;
    cont.appendChild(p);
    }
   
    // i=(i+1)%arr.length;
    // i++;
    j++;
    if(j>=arr[i].length){
        i++;
        j=0;
        if(i>=arr.length) i=0;
    }
    if(i>=arr.length) i=0;

    setTimeout(UpdateText, 300);





}