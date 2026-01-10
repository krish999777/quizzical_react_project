import {decode} from 'html-entities'
import {useState} from 'react'
export default function(props){
    const [options]=useState(()=>generateOptions())
    function generateOptions(){
        let options=["","","",""]
        options[Math.floor((Math.random()*4))]=props.correctAnswer
        options.forEach((each,index)=>{
            if(each===""){
                options[index]=props.incorrectAnswers.pop()
            }
        })
        return options
    }
    return(
        <>
            <div className="quiz-elements">
            <p className="quiz-question">{decode(props.question)}</p>
            <div className="quiz-buttons-container">
                {options.map((option,index)=>{
                    return(
                        <button key={index} className="quiz-options">{decode(option)}</button>
                    )
                })}
            </div>
            </div>
        </>
    )
}