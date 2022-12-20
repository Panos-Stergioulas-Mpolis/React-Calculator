import React from 'react'
import "./screen.css"

function Screen(props) {
  return (
    <section className='screen-sec'>
        <div className='screen'>{props.show}</div>
    </section>
  )
}

export default Screen