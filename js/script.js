//getting elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");

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
    showQuestions(0);
}

let que_count = 0;

const next_btn = quiz_box.querySelector(".next_btn");

//if next button clicked
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){
        que_count++;
        showQuestions(que_count);
    }else{
        console.log("Questions Completed")
    }
}

//gettign questions and options from array
function showQuestions(index){
    const que_text = document.querySelector(".que_text")
    const option_list = document.querySelector(".option_list")
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option">'+ questions[index].options[0] +'<span></span></div>'
                    + '<div class="option">'+ questions[index].options[1] +'<span></span></div>'
                    + '<div class="option">'+ questions[index].options[2] +'<span></span></div>'
                    + '<div class="option">'+ questions[index].options[3] +'<span></span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
}