import {decode} from 'html-entities'
import {useState} from 'react'
export default function(props){
    const [options]=useState(()=>generateOptions())
    const [clickedOption,setClickedOption]=useState(0)
    function generateOptions(){
        let incorrectAnswers=[...props.incorrectAnswers]
        let options=["","","",""]
        const correctAnswerOption=Math.floor((Math.random()*4))
        props.setCorrectAnswer(correctAnswerOption+1)
        options[correctAnswerOption]=props.correctAnswer
        options.forEach((each,index)=>{
            if(each===""){
                options[index]=incorrectAnswers.pop()
            }
        })
        return options
    }
    function toggleClickedOption(event){
        setClickedOption(event.target.id)
        props.setCurrentClicked(props.questionNumber,Number(event.target.id))
    }


    return(
        <>
            <div className="quiz-elements">
            <p className="quiz-question">{decode(props.question)}</p>
            <div className="quiz-buttons-container">
                {options.map((option,index)=>{
                    return(
                        <button key={index} id={index+1} onClick={!props.checkAnswerClicked?(target=>toggleClickedOption(target)):''} className={`quiz-options ${clickedOption==index+1?'clicked':""} ${props.checkAnswerClicked?index===props.correctOption-1?'correct':index===props.incorrectOption-1?'wrong':'blank':''}`}>{decode(option)}</button>
                    )
                })}
            </div>
            </div>
        </>
    )
}