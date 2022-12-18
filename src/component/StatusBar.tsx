import React, {FC} from 'react';

interface IStatusBar{
    all: number
    completed: number
}

const StatusBar: FC<IStatusBar> = (props) => {
    return (
        <div>
            {props.completed + 1} / {props.all}
        </div>
    );
};

export default StatusBar;