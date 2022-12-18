import React, {FC, useMemo, useState} from 'react';
import {IQuiz} from "../types/quizTypes";
import '../styles/Quiz.css';
import QuizItem from "./QuizItem";
import Footer from "./Footer";

interface IQuizItemProps{
    quizData: IQuiz
    all: number
    completedQuestions: number
    nextQuestions: Function
}


const Quiz: FC<IQuizItemProps> = ({quizData, all, completedQuestions, nextQuestions}) => {

    function  randomizeAnswers (a: IQuiz, correctAnswerPosition: number){
        let arr: string[] = [];
        arr.push(...(a.incorrect_answers));
        arr.splice(correctAnswerPosition, 0, a.correct_answer);
        return arr;
    }
    let correctAnswerPosition: number = useMemo(() => {return Math.floor(Math.random() * 3)}, []);
    let arr: string[] = useMemo(() => {return randomizeAnswers(quizData, correctAnswerPosition)}, []);

    const [selected, setSelected] = useState<number | undefined>();

    function select(index: number){
        if(selected === undefined){
            setSelected(index)
            console.log("selected")
        }
    }

    return (
        <>
            <div className='Quiz'>
                <p className='category'>
                    Category [{quizData.category}]
                </p>
                <h1 className='question' >{quizData.question}</h1>
                {
                    arr.map((answer, index) =>
                        <QuizItem key={index} index={index} correctAnswerPosition={correctAnswerPosition} answer={answer}  selected={selected} select={select}/>
                    )
                }
                <br/>
            </div>
            <Footer continue={nextQuestions} allQuestions={all} completedQuestions={completedQuestions} active={!(selected === undefined)}/>
        </>
    );
};

export default Quiz;