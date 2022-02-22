import React from 'react'
import ChildComponent from './ChildComponent'

export default function ParentComponent() {
  return (
    <div>
      <h2>Welcome to passing props in react js</h2>
      <ChildComponent name='Risha'/>
    </div>
  )
}
