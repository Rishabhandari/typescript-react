import React from 'react'

/**specifying the type of props received , props is always passed as a object */
type GreetingName ={
    name:string
}
export default function ChildComponent(props:GreetingName) {
  return (
    <div>
      {props.name}
    </div>
  )
}
