 document.querySelector(".slider-block")
 document.querySelector(".slider-block-2")


const arrowright = document.getElementById("arrowright");
arrowright.addEventListener('click', ()=>{
    document.querySelector(".slider-block").style.display ="none"
    document.querySelector(".slider-block-2").style.display ="flex"

})

const arrowleft = document.getElementById("arrowleft");
arrowleft.addEventListener('click', ()=>{
    document.querySelector(".slider-block").style.display ="flex"
    document.querySelector(".slider-block-2").style.display ="none"

})