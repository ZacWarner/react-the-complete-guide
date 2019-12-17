import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className='Output'>
            <p>{props.userName}</p>
            <p>This is a react test! for output! This is a react test! for output!This is a react test! for output! This is a react test! for output! This is a react test! for output! This is a react test! for output! This is a react test! for output! This is a react test! for output!
            </p>
            <p>This is a react test! for output! This is a react test! for output!This is a react test! for output! This is a react test! for output! This is a react test! for output! This is a react test! for output! This is a react test! for output! This is a react test! for output!
            </p>
        </div>
    );

}

export default userOutput;