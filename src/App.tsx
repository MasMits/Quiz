import React from 'react';
import './App.css';
import Quiz from "./component/Quiz";
import StartPage from "./component/StartPage";
import Footer from "./component/Footer";
import {useAPILoading} from "./hooks/useAPILoading";

function App() {
    const {data, loading, error} = useAPILoading();

    return (
        <div className="App">
            <header className="App-header">
                <StartPage/>
                {data === undefined? " " :
                    data.results.map((quiz) =>
                        <Quiz question={quiz.question} category={quiz.category} correct_answer={quiz.correct_answer} incorrect_answers={quiz.incorrect_answers}/>
                        )}
                </header>
                <Footer/>
        </div>
    );
}

export default App;
