const hanbarger=document.querySelector(".hanbargar");
const close=document.querySelector(".close")
hanbarger.addEventListener("click",()=>{
    document.querySelector(".slide-bar").style.display="block";
});
close.addEventListener("click",()=>{
    document.querySelector(".slide-bar").style.display="none";
});