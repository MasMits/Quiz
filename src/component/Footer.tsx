import React, {FC} from 'react';
import '../styles/Footer.css';
import Button from "./ui-component/Button";
import StatusBar from "./StatusBar";

interface IFooterProps{
    continue: Function
    allQuestions: number
    completedQuestions: number
    active: boolean
}

const Footer: FC<IFooterProps> = (props) => {

    return (
        <div id='footer'>
            <div id='footer-container'> <StatusBar all={props.allQuestions} completed={props.completedQuestions}/> <Button active={props.active} continue={props.continue}/> </div>
        </div>
    );
};

export default Footer;