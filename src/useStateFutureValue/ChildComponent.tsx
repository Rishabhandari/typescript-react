import React from 'react'
interface Loading {
    loading:'suspense'|'loading' | 'error'
}

export default function ChildComponent(props: Loading) {
  return (
    <div>
      {props.loading}
    </div>
  )
}
