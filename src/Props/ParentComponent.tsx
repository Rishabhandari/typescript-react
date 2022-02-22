import React from 'react'
import ChildComponent from './ChildComponent'
 
export default function ParentComponent() {
    const projects ={
        name:'westriveracademy',
        grade:10
    }
  return (
    <div>
      <h2>Welcome to passing props in react js</h2>
      <ChildComponent name='Risha' projects={projects}/>
    </div>
  )
}
