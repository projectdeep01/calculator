
let c = document.querySelector("#c");
let divide = document.querySelector("#d");
let multiply = document.querySelector("#m");
let clear = document.querySelector("#X");
let btn = document.querySelectorAll(".btn")

let ans = document.querySelector("#ans");

let display = document.querySelector("#display");

ans.addEventListener("click",()=>{
        display.value = eval(display.value);
    
})


display.addEventListener("keydown",(e)=>{
    if(e.key>='0'  && e.key<='9') return;

    if(["+","-","*","/","%",".","**"].includes(e.key)) return;

    if(["Backspace","Delete","ArrowLeft","ArrowRight"].includes(e.key)) return;
        
        if(e.key === "Enter"){
            display.value = eval(display.value);
    }    

    e.preventDefault();
})

c.addEventListener("click",()=>{
    display.value = eval(display.value);
})

clear.addEventListener("click",()=>{
    display.value = "";
})

btn.forEach(button =>{
    button.addEventListener("click",()=>{
    display.value += button.getAttribute('value');
})
})




