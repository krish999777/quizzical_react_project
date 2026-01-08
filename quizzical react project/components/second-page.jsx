import QuizElement from './quiz-elements.jsx'
export default function(){
    return(
        <div className="second-page-container">
            <QuizElement/>
            <QuizElement/>
            <QuizElement/>
            <QuizElement/>
            <QuizElement/>
            <button className="check-answers-button">Check Answers</button>
        </div>
    )
}