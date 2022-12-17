import React, {FC} from 'react';

interface IStatusBar{
    all: number
    completed: number
}

const StatusBar: FC<IStatusBar> = (props) => {
    return (
        <div>
            {props.all} / {props.completed + 1}
        </div>
    );
};

export default StatusBar;