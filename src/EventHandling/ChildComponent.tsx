import React from 'react'
export interface Event {
    handleClick(data: React.MouseEvent<HTMLButtonElement>): void,
    name: string,
    rollnumber?: number // means this is optional
}

export default function ChildComponent(props: Event) {
    return (
        <div>
            {props.name}
            <button onClick={props.handleClick}>CLick me</button>
        </div>
    )
}
