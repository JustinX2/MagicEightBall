import React, { useState } from 'react';

const EightBall=function({answers}){
    const [colour, setColour]=useState('black');
    const [message, setMessage]=useState('Think of a Question');
    
    const handleClick=function(){
        const randomIndex=Math.floor(Math.random()*answers.length);
        const {msg, colour}=answers[randomIndex];
        setColour(colour);
        setMessage(msg);
    };

    return(
        <div 
        className="eight-ball"
        onClick={handleClick}
        style={{
            backgroundColor: colour,
            borderRadius: '50%',
            width: '100px',
            height: '100px',
            display: 'flex',
            justifyContent: 'center',
            alighItems: 'center',
            colour: 'white',
            curser: 'pointer',
            fontSize: '20px',
            textAlign: 'center',
            padding: '10px',
        }}
        >
            <p>{message}</p>
        </div>
    );
};

export default EightBall;