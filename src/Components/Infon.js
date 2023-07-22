import { faImage } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function Infon(props) {
    return(
        <div className='info'>
            <input id='top' onChange={props.topChange} className='input' type='text' placeholder='top text'/>
            <input id='bottom' onChange={props.bottomChange} className='input' type='text' placeholder='bottom text'/>
            <button onClick={props.clicked} className='input info--button' >Get a new meme image <FontAwesomeIcon icon={faImage}/></button>
        </div>
    )
};
