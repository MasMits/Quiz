import React, {FC} from 'react';
import {IQuiz} from "../types/quizTypes";
import '../styles/Quiz.css';

const Quiz: FC<IQuiz> = (quizData) => {

    let arr: string[] = [];
    let correctAnswerPosition = Math.floor(Math.random() * 3);
    arr.push(...(quizData.incorrect_answers));
    arr.splice(correctAnswerPosition, 0, quizData.correct_answer);
    console.log(quizData.correct_answer)
    console.log(arr)

    enum PossibleAnswer {
        A ,
        B ,
        C ,
        D ,
    }

    return (
        <div className='Quiz'>
            <p>
                Category [{quizData.category}]
            </p>
            <h1>{quizData.question}</h1>
            {
                arr.map((answer, index) =>
                    index === correctAnswerPosition ?
                        <div>
                            <button className='answer-button correct-answer'> <div className='answer-letter'> {PossibleAnswer[index]} </div>{answer}</button>
                        </div>
                        :
                        <div>
                            <button className='answer-button wrong-answer'> <div className='answer-letter'>  {PossibleAnswer[index]} </div>{answer}</button>
                        </div>
                )
            }
            <br/>
        </div>
    );
};

export default Quiz;