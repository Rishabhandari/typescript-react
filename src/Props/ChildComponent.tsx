import React from 'react'

/**specifying the type of props received , props is always passed as a object */
type GreetingName = {
    name: string
}
// props is object and from parent also we are getting object
type ProjecProp = {
    projects: {
        name: string,
        grade: number
    }
}
export default function ChildComponent(props: (GreetingName & ProjecProp)) {
    return (
        <div>
            {props.name}{props.projects.grade}
        </div>
    )
}
