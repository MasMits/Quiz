import React, {FC} from 'react';
import imgWrong from '../img/wrong.svg';
import imgCorrect from '../img/correct.svg';

enum PossibleAnswer {
    A ,
    B ,
    C ,
    D ,
}

interface IQuizItemProps{
    index: number
    correctAnswerPosition: number
    answer: string
    selected: PossibleAnswer | undefined
    select: Function
}

const QuizItem: FC<IQuizItemProps> = (props) => {


    return (
        <div>
            {props.selected === props.index ?
                props.index === props.correctAnswerPosition ?
                    <div>
                        <button className={`answer-button correct-answer`}>
                            <div className='answer-letter'> <img src={imgCorrect} alt="imgCorrect"/> </div>
                            {props.answer}</button>
                    </div>
                    :
                    <div>
                        <button className={`answer-button wrong-answer`}>
                            <div className='answer-letter'><img src={imgWrong} alt="imgWrong"/> </div>
                            {props.answer}</button>
                    </div>
                :
                <div>
                    <button className={'answer-button'} onClick={() => props.select(props.index)}>
                        <div className='answer-letter'> {PossibleAnswer[props.index]} </div>
                        {props.answer}</button>
                </div>
            }
        </div>
    );
};

export default QuizItem;