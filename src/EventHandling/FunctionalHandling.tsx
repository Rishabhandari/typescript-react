import React from 'react'
import ChildComponent from './ChildComponent'

export default function FunctionalHandling() {
    const handleClick = (e) => {
        console.log(e);
    }
    const handleParameter = (data) => {
        console.log(`displayed name is ${data}`);
    }
    return (
        <div>
            <ChildComponent handleClick={(e) => handleClick(e)} handleParameter={(data) => handleParameter(data)} name='risha' />
        </div>
    )
}
