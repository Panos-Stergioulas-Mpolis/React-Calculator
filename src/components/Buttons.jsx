import React from 'react'
import "./buttons.css"

function Buttons(props) {
  return (
    <section className='buttons'>
        <div className='line_1'>
            <button onClick={() =>props.func("7")}>7</button>
            <button onClick={() =>props.func("8")}>8</button>
            <button onClick={() =>props.func("9")}>9</button>
            <button className='op' onClick={() =>props.func("+")}>+</button>
        </div>
        <div className='lin_2'>
            <button onClick={() =>props.func("4")}>4</button>
            <button onClick={() =>props.func("5")}>5</button>
            <button onClick={() =>props.func("6")}>6</button>
            <button className='op' onClick={() =>props.func("-")}>-</button>  
        </div>
        <div className='line_3'>
            <button onClick={() =>props.func("1")}>1</button>
            <button onClick={() =>props.func("2")}>2</button>
            <button onClick={() =>props.func("3")}>3</button>
            <button className='op' onClick={() =>props.func("*")}>x</button>
        </div>
        <div className='line_4'>
            <button className='op' onClick={() =>props.func("C")}>C</button>
            <button onClick={() =>props.func("0")}>0</button>
            <button className='op' onClick={() =>props.func("/")}>/</button>
            <button className='op' onClick={() =>props.func("=")}>=</button>
        </div>
    </section>
  )
}

export default Buttons