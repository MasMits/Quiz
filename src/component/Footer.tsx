import React, {FC} from 'react';
import '../styles/Footer.css';
import Button from "./ui-component/Button";
import StatusBar from "./StatusBar";

interface IFooterProps{
    continue: Function
    allQuestions: number
    completedQuestions: number
}

const Footer: FC<IFooterProps> = (props) => {

    let active = true;
    return (
        <div id='footer'>
            <div id='footer-container'> <StatusBar all={props.allQuestions} completed={props.completedQuestions}/> <Button active={active} continue={props.continue}/> </div>
        </div>
    );
};

export default Footer;