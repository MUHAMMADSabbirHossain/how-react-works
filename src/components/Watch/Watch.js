import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0);
    const increaseSteps = () => {
        setSteps(steps + 1);
        console.log(steps);
    };
    useEffect(() => {
        console.log("Hello!", steps);
    }, [steps]);
    return (
        <div style={{ border: "2px solid purple", margin: "20px" }}>
            <h2>This is my Smart-Watch.</h2>
            <h3>My Current Steps: {steps}</h3>
            <button onClick={increaseSteps}>De Durrr!!!!!</button>
            <Display name="Garmin" steps={steps}></Display>
        </div>
    );
};

export default Watch;