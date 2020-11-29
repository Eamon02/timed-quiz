//getting elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart")
const quiz_box = document.querySelector(".quiz_box")

//Start Button click
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //shows info box
}

//Exit Button Click
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hides info box
}

//Continue Button Click
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hides info box
    quiz_box.classList.add("activeQuiz"); //shows quiz box
}