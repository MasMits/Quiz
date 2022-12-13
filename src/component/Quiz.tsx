import React, {FC} from 'react';
import {IQuiz} from "../types/quizTypes";

const Quiz: FC<IQuiz> = (quizData) => {
    return (
        <div>
            {quizData.question}
        </div>
    );
};

export default Quiz;