import QuizElement from './quiz-elements.jsx'
import {useState,useRef} from 'react'
export default function(props){
    const [correctOptionsArray,setCorrectOptionsArray]=useState([])
    const [currentClickedArray,setCurrentClickedArray]=useState([0,0,0,0,0])
    const [checkAnswerClicked,setCheckAnswerClicked]=useState(false)
    const correctAnswerCount=useRef(0)
    function setCorrectAnswer(option){
        setCorrectOptionsArray(prevCorrectOptionsArray=>[...prevCorrectOptionsArray,option])
    }
    function setCurrentClicked(number,option){
        setCurrentClickedArray(prevCurrentClickedArray=>{
            let newArray=[...prevCurrentClickedArray]
            newArray[number-1]=option
            return newArray
        })
    }
    function checkAnswerClickedSetter(){
        if(currentClickedArray.some(each=>each===0)){
            alert('choose option in all of the following')
            return
        }
        let correctAnswers=0
        setCheckAnswerClicked(true)
        currentClickedArray.forEach((click,index)=>{
            if(click===correctOptionsArray[index]){
                correctAnswers++
            }
        })
        correctAnswerCount.current=(correctAnswers)
    }
    return(
        <div className="second-page-container">
            {props.data.map((result,index)=>{
            return(<QuizElement 
                key={index}
                question={result.question}
                incorrectAnswers={result.incorrect_answers}
                correctAnswer={result.correct_answer}
                setCorrectAnswer={setCorrectAnswer}
                setCurrentClicked={setCurrentClicked}
                questionNumber={index+1}
                checkAnswerClicked={checkAnswerClicked}
                correctOption={correctOptionsArray[index]}
                incorrectOption={currentClickedArray[index]}
            />)
    })}
            {checkAnswerClicked?<div className='correct-answer-count'>Correct Answers:{correctAnswerCount.current}/5</div>:<button onClick={checkAnswerClickedSetter} className="check-answers-button">Check Answers</button>}
        </div>
    )
}