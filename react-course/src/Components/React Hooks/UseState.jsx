import React, { useState } from 'react'

export default function UseState() {
    const [count, setcount] = useState(0);
  return (
    <div className='app'>
        <p>Count:{count}</p>
        <button onClick={()=>{
            setcount(count+1)
        }}>Increment</button>
    </div>
  )
}
