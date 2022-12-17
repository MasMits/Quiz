import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import '../styles/StartPage.css';
import Button from "./ui-component/Button";

interface IButtonProps{
    continue: Function
}

const StartPage: FC<IButtonProps> = (props) => {

    const [isActive, setIsActive] = useState<boolean>(false);
    const[title, setTitle] = useState('');

    useEffect(() => {
        if(title.trim().length === 0){
            setIsActive(false);
        }else{
            setIsActive(true);
        }
        }, [title]);

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        setTitle(e.target.value);
    }
    return (
        <div className='start-page'>
            <h1>Write your nick to start:</h1>
            <input className='input'
                   type={'text'}
                   onChange = {e => changeHandler(e)}
                   value={title}
                   placeholder={'Print name...'}
            />

            <Button active={isActive} continue={props.continue}/>
        </div>
    );
};

export default StartPage;