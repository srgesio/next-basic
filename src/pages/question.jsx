import { useEffect, useState } from "react"

export default function Question(){

    const [question, setQuestion] = useState(null)
    useEffect(()=>{
        fetch('http://localhost:3000/api/question/1')
            .then(result=>result.json())
            .then(json=>setQuestion(json))
    }, [])
    
    function handleAnswers(){
        if(question){
            return question.answers.map((answer, id)=>(
                        <li key={id}>{answer}</li>
                    ))
        }
    }
    return (
        <div>
            <h1>Questão</h1>
            <div>
                <span>
                    {question?.title}
                </span>
                <ul>
                    {handleAnswers()}
                </ul>
            </div>

        </div>
    )
}