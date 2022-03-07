import React, { BaseSyntheticEvent } from 'react'
import ChildComponent from './ChildComponent'

export default function FunctionalHandling() {
    const handleClick = (e: BaseSyntheticEvent) => {
        console.log(e);
    }
    const handleParameter = (data: string) => {
        console.log(`displayed name is ${data}`);
    }
    return (
        <div>
            <ChildComponent handleClick={(e) => handleClick(e)} handleParameter={(data) => handleParameter(data)} name='risha' />
        </div>
    )
}
