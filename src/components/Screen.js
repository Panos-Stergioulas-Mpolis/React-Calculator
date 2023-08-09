import React from 'react'
import "./screen.css"

function Screen(props) {
  return (
        <input type='text' disabled className='screen' placeholder={props.show}/>
  )
}

export default Screen