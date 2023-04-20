import React, {useState} from 'react'
import Questions from './Questions'


// note - 

// firstly w'll create state for number of questions


const questions = [
    {
        question: 'What is the capital of France?',
        choices: ['Paris', 'London', 'New York'],
        answer: 'Paris',
    },
    {
        question: 'What is the largest planet in our solar system?',
        choices: ['Mars', 'Jupiter', 'Venus'],
        answer: 'Jupiter',
    },
    {
        question: 'What is the boiling point of water?',
        choices: ['100°C', '0°C', '50°C'],
        answer: '100°C',
    },
    {
        question: 'What is the largest planet in our solar system?',
        choices: ['Mars', 'Jupiter', 'Venus'],
        answer: 'Jupiter',
    },
    {
        question: 'What is the boiling point of water?',
        choices: ['100°C', '0°C', '50°C'],
        answer: '100°C',
    },
];


const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    const handleAnswer = (answer) => {
        if(answer === questions[currentQuestion].answer){
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1; 
        if(nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion)
        }else{
            alert(`your score is ${score}`)
        }
    }

  return (
    <div>
        <Questions 
            question={questions[currentQuestion].question}
            choices={questions[currentQuestion].choices}
            answer={questions[currentQuestion].answer}
            onAnswer={handleAnswer}
        />
    </div>
  )
}

export default Quiz


// note - 
// 1. Question ko change karne ke liye hame state ki jarurat padti hai 
// 2. score ko bhi change karne ke liye hame state ki jarurat padti hai 
// 3. to improve logical knowledge i have to create more and more project
