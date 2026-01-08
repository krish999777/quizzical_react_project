import {decode} from 'html-entities'
export default function(props){
    const options=["","","",""]
    options[Math.floor((Math.random()*4))]=props.correctAnswer
    options.forEach((each,index)=>{
        if(each===""){
            options[index]=props.incorrectAnswers.pop()
        }
    })
    return(
        <>
            <div className="quiz-elements">
            <p className="quiz-question">{decode(props.question)}</p>
            <div className="quiz-buttons-container">
                <button className="quiz-options">{decode(options[0])}</button>
                <button className="quiz-options">{decode(options[1])}</button>
                <button className="quiz-options">{decode(options[2])}</button>
                <button className="quiz-options">{decode(options[3])}</button>
            </div>
            </div>
        </>
    )
}