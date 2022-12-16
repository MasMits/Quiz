import {useEffect, useState} from "react";
import {IQuiz} from "../types/quizTypes";

export function useAPILoading(){

    interface IQuizList {
        results: IQuiz[]
    }

    const [data, setData] = useState<IQuizList>();
    const [loading, setLoading] = useState(false);
    const [error, setErorr] = useState('');

    const apiURL = "https://opentdb.com/api.php?amount=10"
    useEffect(() => {
        fetchQuiz()
    }, []);
    async function fetchQuiz() {
        try {
            setLoading(true);
            fetch(apiURL).then(res => res.json()).then((data) => {
                // console.log(data);
                setData(data);
            });
            setLoading(false);
        } catch (e) {
            setLoading(false);
            alert(e)
            // setErorr(e)
        }
    }
    return {data, loading, error}
}