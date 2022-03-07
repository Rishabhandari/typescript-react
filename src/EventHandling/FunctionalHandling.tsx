import React from 'react'
import ChildComponent from './ChildComponent'

export default function FunctionalHandling() {
    const handleClick = (e) => {
        console.log(e);
    
    }
    return (
        <div>
            <ChildComponent handleClick={(e)=>handleClick(e)} name='risha'  />
        </div>
    )
}
