//DOM elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const option_list = document.querySelector(".option_list");
const timeCount = document.querySelector(".timer .timer_sec");
const time_line = document.querySelector("header .time_line");
const next_btn = quiz_box.querySelector(".next_btn");
const result_box = document.querySelector(".result_box"); 
const restart_quiz = result_box.querySelector(".buttons .restart"); 
const quit_quiz = result_box.querySelector(".buttons .quit");

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
    startTimer(15);
    startTimerLine(0);
}

let que_count = 0;
let que_numb = 1;
let counter;
let counterLine;
let timeValue = 15;
let widthValue = 0;
let userScore = 0;

//if next button clicked
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){
        que_count++;
        que_numb++;
        showQuestions(que_count);
        queCounter(que_numb);
        clearInterval(counter);
        startTimer(timeValue);
        clearInterval(counterLine);
        startTimerLine(widthValue);
        next_btn.style.display = "none"; //reset
    }else{
        //logs quiz complete
        console.log("Questions Completed")
        showResultBox();
    }
}


//Finish Quiz show result box function
function showResultBox(){
    info_box.classList.remove("activeInfo"); //hides info box
    quiz_box.classList.remove("activeQuiz"); //hides quiz box
    result_box.classList.add("activeResult"); //shows result box
    const scoreText = result_box.querySelector(".score_text"); //grabs result text element

if(userScore > 5){
    let score = '<span>Your Score Was: <p>'+ userScore +'</p>out of<p>'+ questions.length +'</p></span>';
    scoreText.innerHTML = score;
    }
    else{
    let score = '<h1>YOURE A GENIOUS!</h1>'
    scoreText.innerHTML = score;
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


let tickIcon = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIcon = '<div class="icon cross"><i class="fas fa-times"></i></div>';


function optionSelected(answer){
    //changes display of next button
    next_btn.style.display = "block";
    //stops time_line
    clearInterval(counterLine); 

    //Resets timer when button clicked
    clearInterval(counter);
    let userAns = answer.textContent; //sets the "userAns" equal to the text of the answer option clicked 
    let correctAns = questions[que_count].answer;
    let allOptions = option_list.children.length;

    if(userAns == correctAns){

        //keeping score
        userScore += 1; //user score icrement by 1
        console.log(userScore);

        answer.classList.add("correct"); //if right answer selected, changes css
    console.log("Answer is Correct");
    }else{

        answer.classList.add("incorrect"); //if incorrect answer selected, changes css
        console.log("Answer is Incorrect");
        answer.insertAdjacentHTML("Beforeend", crossIcon);
    }//this console logs whethere or not user option selected matches correct answer

    //disable options once user selects - changes css to remove pointer event
for (let i = 0; i < allOptions; i++) {
    option_list.children[i].classList.add("disabled");  
    }
    
    //once user selected disabled all options
    for (let i = 0; i < allOptions; i++) {
       if(option_list.children[i].textContent == correctAns){
        option_list.children[i].setAttribute("class", "option correct");
        option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
       }  
    }
}


//Timer Function
function startTimer(time){
    counter = setInterval(timer, 1000)
    function timer(){
            timeCount.textContent = time;
            time--;
            if(time < 9){
                let addZero = timeCount.textContent;
                timeCount.textContent = "0" + addZero; 
            }
            if(time < 0){
                clearInterval(counter); 
                timeCount.textContent = "00"
            
            let correctAns = questions[que_count].answer;
            let allOptions = option_list.children.length;
            
            for (let i = 0; i < allOptions; i++) {
                if(option_list.children[i].textContent == correctAns){
                    option_list.children[i].setAttribute("class", "option correct");
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
                    }  
                }
                 for (let i = 0; i < allOptions; i++) {
                    option_list.children[i].classList.add("disabled");  
                    }
                //changes display of next button
                next_btn.style.display = "block";
            }
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1;
        time_line.style.width = time + "px"; //increasing width of time_line by px 
        if(time > 549){
            clearInterval(counterLine);
        }
    }
}

//gives footer question number
function queCounter(index){
    const bottom_que_counter = quiz_box.querySelector(".total_que");
let totalQuesCountTage = '<span><p>'+ index +'</p>of<p>'+ questions.length +'</p>Questions</span>';
bottom_que_counter.innerHTML = totalQuesCountTage;
}

//Quit Quiz Button
quit_quiz.onclick = ()=>{
    window.location.reload();
}

//Restart Quiz Button
restart_quiz.onclick = ()=>{
    let que_count = 0;
    let que_numb = 1;
    let timeValue = 15;
    let widthValue = 0;
    let userScore = 0;

    showQuestions(que_count);
    queCounter(que_numb);
    clearInterval(counter);
    startTimer(timeValue);
    clearInterval(counterLine);
    startTimerLine(widthValue);
    next_btn.style.display = "none"; //reset

    quiz_box.classList.add("activeQuiz"); //hides quiz box
    result_box.classList.remove("activeResult"); //shows result box
}