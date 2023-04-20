import React from 'react'

const Questions = (props) => {
    const {question, choices, answer, onAnswer} = props;
    // console.log(question, choices, answer, onAnswer);
  return (
    <div style={{textAlign: "center", marginTop: "50px", border: "2px solid black", margin: "5% 15% 0 15%" }}>
        <h1>Quiz App</h1> 
        <h2>{question}</h2>

        <div>
            {
                choices.map((choice) => {
                    return(
                        <button key={Math.random()*10} style={{margin: "2%"}} onClick={() => onAnswer(choice)}>{choice}</button>
                    )
                })
            }
        </div>
    
        
    </div>
  )
}

export default Questions