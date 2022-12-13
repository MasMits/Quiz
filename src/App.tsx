import React, {useEffect, useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import {IQuiz} from "./types/quizTypes";

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
            // const response = await axios;
            fetch(apiURL).then(res => res.json()).then((data) => {
                // setQuizData(JSON.parse(data));
                console.log(data);
                setQuizData(data);
                // console.log(B);

            })
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                {quizData === undefined? " " :
                    quizData.results.map((quiz) =>
                    <div> {quiz.question} </div>
                )}
            </header>
        </div>
    );
}

export default App;
