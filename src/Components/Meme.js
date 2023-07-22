import React from 'react';

export default function Meme(props) {
    return(
        <div className='meme'>
            <img className='meme--image' src={props.url} alt='meme'/>
            <h1 className='meme--top'>{props.topText}</h1>
            <h1 className='meme--bottom'>{props.bottomText}</h1>
        </div>
    )
};
