import React, { useState } from 'react'
export interface Event {
    handleClick(data: React.MouseEvent<HTMLButtonElement>): void,
    name: string,
    rollnumber?: number // means this is optional,
    handleParameter(value: string): void
}

export default function ChildComponent(props: Event) {
    const [name, setName] = useState('');
    return (
        <div>
            {props.name}
            <button onClick={props.handleClick}>Received event (e)</button><br />
            <input type='text' onChange={(e) => setName(e.target.value)} />
            <button onClick={() => props.handleParameter(name)}>Parameter passed</button>
        </div>
    )
}
