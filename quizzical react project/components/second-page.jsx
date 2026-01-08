import QuizElement from './quiz-elements.jsx'
export default function(props){
    return(
        <div className="second-page-container">
            {props.data.map((result,index)=>{
            return(<QuizElement 
                key={index}
                question={result.question}
                incorrectAnswers={result.incorrect_answers}
                correctAnswer={result.correct_answer}
            />)
    })}
            <button className="check-answers-button">Check Answers</button>
        </div>
    )
}