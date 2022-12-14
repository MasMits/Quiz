import React, {FC, useEffect} from 'react';
import {IQuiz} from "../types/quizTypes";
import '../styles/Quiz.css';

const Quiz: FC<IQuiz> = (quizData) => {


    useEffect(() => {
        let correctAnswerPosition = Math.floor(Math.random() * 3);
        let arr = quizData.incorrect_answers;
        arr.splice(correctAnswerPosition, 0, quizData.correct_answer);

        console.log(quizData.correct_answer)
        console.log(arr)
    }, []);


    return (
        <div className='Quiz'>
            {quizData.question}
        </div>
    );
};

export default Quiz;