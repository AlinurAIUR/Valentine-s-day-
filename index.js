'use strict';



const YesBtn=document.getElementById("YesLink");
const NoBtn=document.getElementById("NoLink");



YesBtn.addEventListener("click",()=>{
    window.location.href="PicturePage.html";
})

const tries = [
    "Really?",
    "are you sure?",
    "Baby please!!! ",
    "I'm gonna cry...",
    "Don't do this to me:("
];
let scale=1
let counter= 0
NoBtn.addEventListener("click",()=>{
    counter++

    if(counter>= tries.length){
        counter=0;

    }
    NoBtn.textContent=tries[counter];
    scale +=0.5
    YesBtn.style.transform = `scale(${scale})`;
})





