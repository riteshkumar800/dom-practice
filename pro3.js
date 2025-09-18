let add = document.querySelector(".btn");
let input = document.querySelector("input");
let put = document.querySelector(".c2");

function fun(){
    let box = document.createElement("div");
    box.classList.add("use");

    let h = document.createElement("h3");
    h.textContent = input.value;

   
    let done = document.createElement("button");
    done.classList.add("done");
    done.textContent = "Done";

    
    let del = document.createElement("button");
    del.classList.add("del");
    del.textContent = "Delete";

   
    box.append(h);
    box.append(done);
    box.append(del);
    put.append(box);

    input.value = "";

    
    del.addEventListener("click", function(){
        box.remove();
    });


    done.addEventListener("click", function(){
        if(h.style.textDecoration === "line-through"){
            h.style.textDecoration = "none";
            h.style.color = "#e0e0e0";
        } else {
            h.style.textDecoration = "line-through";
            h.style.color = "gray";
        }
    });
}

add.addEventListener("click", fun);
