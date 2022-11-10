const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', ()=> {
    currentQuestionIndex++
    setNewQuestion()
})

function startGame(){
 console.log('Started');
 startButton.classList.add('hide');
 shuffledQuestions = question.sort(()=> Math.random()- .5)
 currentQuestionIndex = 0
 questionContainerElement.classList.remove('hide');
 setNewQuestion()
}

function setNewQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answer.forEach(answer =>{
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState(){
    nextButton.classList.add('hide')
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1){
           nextButton.classList.remove('hide')
    }else{
        startButton.innerHTML = 'Restart'
        startButton.classList.remove('hide')
    }
   
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    }else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const question =[
    {
        question: 'What is 2+2?',
        answer: [
            {text: '4', correct:true},
            {text: '22', correct:false}
        ]
    },

    {
        question: 'What is 25-2?',
        answer: [
            {text: '22', correct:false},
            {text: '23', correct:true}
        ]
    },

    {
        question: 'What is 59-19?',
        answer: [
            {text: '30', correct:true},
            {text: '12', correct:false}
        ]
    },

    {
        question: 'What is 25/5?',
        answer: [
            {text: '3', correct:false},
            {text: '5', correct:true}
        ]
    },

    {
        question: 'What is 10% of 20 ?',
        answer: [
            {text: '2', correct:true},
            {text: '10', correct:false},
            {text: '20', correct:false},
            {text: '15', correct:false}
        ]
    }
]