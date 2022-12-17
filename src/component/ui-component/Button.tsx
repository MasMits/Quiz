import React, {FC} from 'react';
import "../../styles/Button.css";


interface IButtonProps{
    active: boolean
    continue: Function
}

const Button: FC<IButtonProps> = (props) => {
    return (
        <>
            {props.active ?
            <button className='active-btn' onClick={() => props.continue()}>Continue</button> :
            <button className='disable-btn'>Continue</button>
            }
        </>
    );
};

export default Button;