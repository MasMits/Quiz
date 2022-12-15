import React, {useEffect, useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import {IQuiz} from "./types/quizTypes";
import Quiz from "./component/Quiz";
import StartPage from "./component/StartPage";

function App() {

    interface IQuizList {
        results: IQuiz[]
    }

    const [quizData, setQuizData] = useState<IQuizList>();

    const apiURL = "https://opentdb.com/api.php?amount=10"
    useEffect(() => {
        fetchQuiz()
    }, []);
    async function fetchQuiz() {
        try {
            fetch(apiURL).then(res => res.json()).then((data) => {
                console.log(data);
                setQuizData(data);
            })
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <StartPage/>
                {quizData === undefined? " " :
                    quizData.results.map((quiz) =>
                        <Quiz question={quiz.question} category={quiz.category} correct_answer={quiz.correct_answer} incorrect_answers={quiz.incorrect_answers}/>
                        )}
                </header>
        </div>
    );
}

export default App;
