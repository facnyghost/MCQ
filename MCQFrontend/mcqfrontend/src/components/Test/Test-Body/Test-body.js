import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getQuestions } from '../../../store/actions/Action'
import './TestBody.css'

const TestBody = () => {
    const dispatch = useDispatch()
    const [all_questions, setAllQuestion] = useState([])
    const [question, setQuestion] = useState()
    const [disable, setDisable] = useState(false);
    const [count, setCount] = useState(0)
    const [showResult, setshowResult] = useState(false)
    const [score, setScore] = useState(0)
    const [show, setShow] = useState(false)
    useEffect(() => {
        dispatch(getQuestions()).then(res => {
            setAllQuestion(res.questions);
        }).catch(err => console.log(err))
    }, [dispatch])


    var getRand = (function () {
        var nums = [0, 1, 2, 3, 4];
        var current = [];
        function rand(n) {
            return (Math.random() * n) | 0;
        }
        return function () {
            if (!current.length) current = nums.slice();
            return current.splice(rand(current.length), 1);
        }
    }());

    const checkQuestions = async () => {
        if (count === 5) {
            setshowResult(true)
        }
        var b = all_questions[getRand()]
        setQuestion(b)
        setCount(count + 1)
        setShow(true)
        setDisable(false)
    }
    const handleAnswerOptionClick = (answer, correct) => {
        if (answer === correct) {
            setScore(score + 10)
        }
        else {
            setScore(score + 0)
        }
    }

    return (
        <div className='container'>
            {   !showResult &&
                <div className="bg-light p-5 rounded">
                    {question &&
                        <div>

                            <h2 className="qn">{question.question.name}</h2>
                            {question.question.answer.map((p, i) => (
                                <div className="p-2 m-2">
                                    <div className='answer-section'>
                                        <button className="choices" disabled={disable} onClick={() => { handleAnswerOptionClick(p, question.question.correct_answer); setDisable(true) }}>{p}</button>

                                    </div>

                                </div>
                            ))}

                        </div>

                    }
                    <div >{
                        show ? <button onClick={checkQuestions}>Submit</button>
                            : <button onClick={checkQuestions}>Let's Start</button>

                    }

                    </div>

                </div>
            }

            {
                showResult &&
                <div className="card">
                    <h1>Your Score is {score}</h1>
                </div>
            }
        </div>
    )
}

export default TestBody
