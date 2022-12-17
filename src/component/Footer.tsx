import React, {FC} from 'react';
import '../styles/Footer.css';
import Button from "./ui-component/Button";

interface IButtonProps{
    continue: Function
}

const Footer: FC<IButtonProps> = (props) => {

    let active = false;
    return (
        <div id='footer'>
            <div id='footer-information'> <Button active={active} continue={props.continue}/> </div>
        </div>
    );
};

export default Footer;