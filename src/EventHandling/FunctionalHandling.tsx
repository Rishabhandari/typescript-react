import React from 'react'
import ChildComponent from './ChildComponent'

export default function FunctionalHandling() {
    const handleClick = () => {
        console.log('clicked');
    }
    return (
        <div>
            <ChildComponent handleClick={handleClick} name='risha'  />
        </div>
    )
}
