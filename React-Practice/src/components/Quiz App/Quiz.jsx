import React, { useState } from 'react'
import Questions from './Questions';
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
    const [currQuestion, setCurrQuestion] = useState(0);
    const [score, setScore] = useState(0);

    function handleAnswer(ans) {
        if (questions[currQuestion].answer === ans) {
            setScore(score + 1);
        }
        let nextQuestions = currQuestion + 1;
        if (currQuestion < questions.length - 1) {
            setCurrQuestion(nextQuestions);
        } else {
            alert(`Your score is ${score + 1}`)
        }
    }

    return (
        <div className='flex justify-center items-center h-screen w-full'>
            <Questions
                question={questions[currQuestion].question}
                choices={questions[currQuestion].choices}
                handleAnswer={handleAnswer}
                answer={questions[currQuestion].answer}
                score={score}
            />
        </div>
    )
}

export default Quiz