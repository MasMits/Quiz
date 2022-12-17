import React, {useState} from 'react';
import './App.css';
import Quiz from "./component/Quiz";
import StartPage from "./component/StartPage";
import Footer from "./component/Footer";
import {useAPILoading} from "./hooks/useAPILoading";

function App() {
    const {data, loading, error} = useAPILoading();

    const [isActive, setIsActive] = useState<boolean>(true);

    const hiddenElement: string = loading? " hidden" : "";

    function Continue(){
        setIsActive(false);
    }

    return (
        <div className="App">
            <header className="App-header">
                {
                    isActive ? <StartPage continue={Continue}/> :
                        <div>
                            {data === undefined ? <h1 className={` ${hiddenElement}`}>Loading...</h1>
                                :
                                data.results.map((quiz) =>
                                    <Quiz question={quiz.question} category={quiz.category}
                                          correct_answer={quiz.correct_answer}
                                          incorrect_answers={quiz.incorrect_answers}/>
                                )}
                            <Footer continue={Continue}/>
                        </div>
                }
            </header>

        </div>
    );
}

export default App;
