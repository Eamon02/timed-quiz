//getting elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const option_list = document.querySelector(".option_list")

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
    queCounter(1);
}

let que_count = 0;
let que_numb = 1;

const next_btn = quiz_box.querySelector(".next_btn");

//if next button clicked
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){
        que_count++;
        que_numb++;
        showQuestions(que_count);
        queCounter(que_numb);

    }else{
        //logs quiz complete
        console.log("Questions Completed")
    }
}

//gettign questions and options from array
function showQuestions(index){
    const que_text = document.querySelector(".que_text")
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option">'+ questions[index].options[0] +'<span></span></div>'
                    + '<div class="option">'+ questions[index].options[1] +'<span></span></div>'
                    + '<div class="option">'+ questions[index].options[2] +'<span></span></div>'
                    + '<div class="option">'+ questions[index].options[3] +'<span></span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    //give onclick attribute to all answer options!
    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}


function optionSelected(answer){
    let userAns = answer.textContent; //sets the "userAns" equal to the text of the answer option clicked 
    let correctAns = questions[que_count].answer;
    let allOptions = option_list.children.length;
    if(userAns == correctAns){
        answer.classList.add("correct"); //if right answer selected, changes css
    console.log("Answer is Correct");
    }else{
        answer.classList.add("incorrect"); //if incorrect answer selected, changes css
        console.log("Answer is Incorrect");
    }//this console logs whethere or not user option selected matches correct answer

    //disable options once user selects - changes css to remove pointer event
for (let i = 0; i < allOptions; i++) {
    option_list.children[i].classList.add("disabled");  
    }
    
    //once user selected disabled all options
    for (let i = 0; i < allOptions; i++) {
       if(option_list.children[i].textContent == correctAns){
        option_list.children[i].setAttribute("class", "option correct");
       }  
    }
}

//gives footer question number
function queCounter(index){
    const bottom_que_counter = quiz_box.querySelector(".total_que");
let totalQuesCountTage = '<span><p>'+ index +'</p>of<p>'+ questions.length +'</p>Questions</span>';
bottom_que_counter.innerHTML = totalQuesCountTage;
}