import React from 'react';
import Button from "./ui-component/Button";

const EndPage = () => {
    return (
        <div>
            <h1>Try again:</h1>
            <Button active={true} continue={() => {location.reload(); return false;}}></Button>
        </div>
    );
};

export default EndPage;