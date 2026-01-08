export default function(props){
    return(
     <div className="first-page-container">
        <h1>Quizzical</h1>
        <p>Try solving this quiz</p>
        <button onClick={props.toggle}>Start Quiz</button>
    </div>
    )
}