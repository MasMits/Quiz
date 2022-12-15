import React from 'react';
import '../styles/StartPage.css';

const StartPage = () => {
    return (
        <div className='start-page'>
            <h1>Write your nick to start:</h1>
            <input type="text"/>
            <button>Continue</button>
        </div>
    );
};

export default StartPage;