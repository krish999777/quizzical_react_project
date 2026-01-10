import {decode} from 'html-entities'
import {useState} from 'react'
export default function(props){
    const [options]=useState(()=>generateOptions())
    const [clickedOption,setClickedOption]=useState(0)
    function generateOptions(){
        let incorrectAnswers=props.incorrectAnswers
        let options=["","","",""]
        options[Math.floor((Math.random()*4))]=props.correctAnswer
        options.forEach((each,index)=>{
            if(each===""){
                options[index]=incorrectAnswers.pop()
            }
        })
        return options
    }
    function toggleClickedOption(event){
        setClickedOption(event.target.id)
    }


    return(
        <>
            <div className="quiz-elements">
            <p className="quiz-question">{decode(props.question)}</p>
            <div className="quiz-buttons-container">
                {options.map((option,index)=>{
                    return(
                        <button key={index} id={index+1} onClick={target=>toggleClickedOption(target)} className={`quiz-options ${clickedOption==index+1?'clicked':""}`}>{decode(option)}</button>
                    )
                })}
            </div>
            </div>
        </>
    )
}