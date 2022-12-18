import React, {useState} from 'react';
import './App.css';
import Quiz from "./component/Quiz";
import StartPage from "./component/StartPage";
import {useAPILoading} from "./hooks/useAPILoading";
import EndPage from "./component/EndPage";

function App() {
    const {data, loading, error} = useAPILoading();
    console.log(data);

    const [isActive, setIsActive] = useState<boolean>(true);
    let all: number = data === undefined ? 0 : data.results.length;
    const [completedQuestions, setCompletedQuestions] = useState<number>(0);

    const hiddenElement: string = loading? " hidden" : "";
    const end: boolean = completedQuestions === all;


    function startQuiz(){
        setIsActive(false);
    }

    function nextQuestions(){
        setCompletedQuestions(completedQuestions + 1);
    }


    return (
        <div className="App">
            <header className="App-header">
                {
                    isActive ? <StartPage continue={startQuiz}/> :
                        <div>
                            {data === undefined ? <h1 className={` ${hiddenElement}`}>Loading...</h1>
                                :
                                data.results.map((quiz, index) =>
                                    index == completedQuestions &&
                                    // <Quiz question={quiz.question} category={quiz.category}
                                    //       correct_answer={quiz.correct_answer}
                                    //       incorrect_answers={quiz.incorrect_answers} key={index}/>
                                    <Quiz quizData={quiz} all={all} completedQuestions={completedQuestions} nextQuestions={nextQuestions}/>
                                )}
                        </div>
                }
                {end && <EndPage/>}
            </header>

        </div>
    );
}

export default App;
